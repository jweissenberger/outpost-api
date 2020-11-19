from flask import (
    Flask,
    g,
    redirect,
    render_template,
    request,
    session,
    url_for
)
from flask_bootstrap import Bootstrap
import time

from hf_summarizer import chunk_summarize_t5, pegasus_summarization, chunk_bart
from common import sentence_tokenizer, plagiarism_checker, clean_text
from scraping import return_single_article, source_from_url
from statistical_summarize import run_tf_idf_summarization, run_word_frequency_summarization

# Initialize App
app = Flask(__name__)
app.secret_key = 'supersecretkeythatissolongthatnohackerwouldtryit'
Bootstrap(app)

VERSION = 'v0.1.4'


def generate_header():

    # need to set what you want to 'class="active"'
    header = f'<div class="jumbotron text-center"><div class="container">' \
             f'<h2>The Outpost News Article Analysis Tool {VERSION}</h2></div></div>'
    return header

class User:
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

    def __repr__(self):
        return f'<User: {self.username}>'

users = []
users.append(User(id=1, username='jack', password='fixthislater'))
users.append(User(id=2, username='tim', password='whatdovehuck'))

@app.before_request
def before_request():
    g.user = None

    if 'user_id' in session:
        user = [x for x in users if x.id == session['user_id']][0]
        g.user = user


@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session.pop('user_id', None)

        username = request.form['username']
        username = username.lower()
        password = request.form['password']

        user = [x for x in users if x.username == username][0]
        if user and user.password == password:
            session['user_id'] = user.id
            return redirect(url_for('article_generation'))

        return redirect(url_for('login'))

    return render_template('login.html')


@app.route('/generated_articles', methods=['GET', 'POST'])
def output_article_generation():
    if not g.user:
        return redirect(url_for('login'))
    header = generate_header()
    if request.method == 'POST':

        a = time.time()

        orig_text = {}
        left_articles = []
        right_articles = []
        center_articles = []

        print('Pull Articles')
        # get right and left articles, summaries
        for s in ['l', 'r', 'c']:
            if s == 'c':
                length = 2
            else:
                length = 5
            for i in range(length):

                orig_text[f'{s}_link{i+1}'] = request.form[f'{s}_link{i+1}']
                # if a link is given use newsarticle3k else parse the given text
                if orig_text[f'{s}_link{i+1}']:
                    try:
                        article = return_single_article(orig_text[f'{s}_link{i+1}'], output_type='string')
                        print(article['article'])
                    except:
                        source = source_from_url(orig_text[f'{s}_link{i+1}'])
                        article = {'source': source, 'article': "Unable to pull article from this source"}
                        print("Failed to pull article from", source)

                    print(f'Pulled from: {article["source"]}')
                    if s == 'l':
                        left_articles.append(article)
                    if s == 'r':
                        right_articles.append(article)
                    if s == 'c':
                        center_articles.append(article)


        num_sentences = int(request.form['num_sentences'])

        right_summaries = article_generator(articles=right_articles, num_sentences=num_sentences, article_type='Right')
        left_summaries = article_generator(articles=left_articles, num_sentences=num_sentences, article_type='Left')
        center_summaries = article_generator(articles=center_articles, num_sentences=num_sentences, article_type='Center')

        center_html = ''
        for i in center_summaries.keys():
            center_html += center_summaries[i] + "<br><br>"

        # TODO add article link below each summary
        # TODO fix capitalization

        right_and_left_html = '<table style="margin-left:auto;margin-right:auto;">'

        max_articles = max(len(right_summaries.keys()), len(left_summaries.keys()))
        for i in range(max_articles):

            right_and_left_html += f'<tr><th style="text-align:center"><p style="font-size:20px">Left Article {i+1}</p></th>' \
                f'<th style="text-align:center"><p style="font-size:20px">Right Article {i+1}</p></th></tr>'

            right_and_left_html += '<tr><td><p>'

            if left_summaries.get(f'summary_{i}'):
                right_and_left_html += left_summaries[f'summary_{i}']
            else:
                right_and_left_html += ' '

            right_and_left_html += '</p></td><td><p>'

            if right_summaries.get(f'summary_{i}'):
                right_and_left_html += right_summaries[f'summary_{i}']
            else:
                right_and_left_html += ' '

            right_and_left_html += '</p></td></tr>'

        right_and_left_html += '</table>'

        b = time.time()

        total_time = (b-a)/60

    return render_template('multi_analyze.html', header=header, total_time=total_time, center_html=center_html,
                           right_and_left_html=right_and_left_html
                           )


def article_generator(articles, num_sentences=7, article_type='Central'):
    """

    :param articles: list of dicts containing the articles
    :param num_sentences: number of the sentences for the statistical summarizers
    :param article_type: string:  Left, Right or Central
    :return: Dictionary containing strings of each of the 4 summaries for each article in the list of articles
    """
    # TODO this should probably just be a list not a dictionary
    print(f"{article_type} Summaries")
    summaries = {}
    for index, value in enumerate(articles):

        if value['article'] == "Unable to pull article from this source":
            summaries[f'summary_{index}'] = "Failed to pull article :( "
            continue

        print(value['source'], 'TF IDF')
        summaries[f'summary_{index}'] = f"<b>{value['source']}</b>:<br><br>{run_tf_idf_summarization(value['article'], num_sentences)}<br><br>"

        print(value['source'], 'Word Frequency')
        summaries[f'summary_{index}'] += run_word_frequency_summarization(value['article'], num_sentences) + '<br><br>'

        print(value['source'], 'Bart Summary')
        sum = chunk_bart(value['article'])
        summaries[f'summary_{index}'] += plagiarism_checker(new_text=sum, orig_text=value['article']) + '<br><br>'

        print(value['source'], 'Pegasus Summary')
        sum = pegasus_summarization(text=value['article'], model_name='google/pegasus-cnn_dailymail')
        summaries[f'summary_{index}'] += plagiarism_checker(new_text=sum, orig_text=value['article']) + '<br><br>'

    return summaries

@app.route('/article_generation')
def article_generation():
    if not g.user:
        return redirect(url_for('login'))
    header = generate_header()
    return render_template('multi_article.html', header=header)


if __name__ == '__main__':
    app.run(debug=True)
