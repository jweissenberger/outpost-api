(function(g){var window=this;var G2=function(a,b){g.qf(a.u,8*b+2);var c=a.u.end();a.C.push(c);a.B+=c.length;c.push(a.B);return c},H2=function(a,b){var c=b.pop();
for(c=a.B+a.u.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.B++;b.push(c);a.B++},CFa=function(a,b,c){null!=c&&(g.qf(a.u,8*b+1),a=a.u,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Bf=b,g.Cf=c,g.rf(a,g.Bf),g.rf(a,g.Cf))},I2=function(a,b,c){null!=c&&(g.qf(a.u,8*b),a.u.u.push(c?1:0))},J2=function(a,b,c){if(null!=c){b=G2(a,b);
for(var d=a.u,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.u.push(f);else if(2048>f)d.u.push(f>>6|192),d.u.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.u.push(f>>18|240),d.u.push(f>>12&63|128),d.u.push(f>>6&63|128),d.u.push(f&63|128),e++)}else d.u.push(f>>12|224),d.u.push(f>>6&63|128),d.u.push(f&63|128)}H2(a,b)}},K2=function(a,b,c,d){null!=c&&(b=G2(a,b),d(c,a),H2(a,b))},L2=function(a,b,c,d){if(null!=
c)for(var e=0;e<c.length;e++){var f=G2(a,b);
d(c[e],a);H2(a,f)}},DFa=function(a,b){var c=(b-a.u)/(a.B-a.u);
if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.Fn(a,c);var l=(g.Fn(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.Fn(a,c);return c},M2=function(a,b,c){a.u||(a.u={});
if(!a.u[c]){var d=g.Lf(a,c);d&&(a.u[c]=new b(d))}return a.u[c]},EFa=function(a,b,c){a.u||(a.u={});
c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].fg;a.u[b]=c;g.Nf(a,b,d)},N2=function(a,b,c,d){(c=g.Jf(a,c))&&c!==b&&void 0!==d&&(a.u&&c in a.u&&(a.u[c]=void 0),g.Nf(a,c,void 0));
g.Nf(a,b,d)},O2=function(){return{G:"svg",
T:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},R:[{G:"path",tb:!0,N:"ytp-svg-fill",T:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
FFa=function(a){this.dC=a},P2=function(a,b,c){this.D=a;
this.B=b;this.u=c||[];this.zo=new Map},Q2=function(a,b){P2.call(this,a,3,b)},HFa=function(){this.I=new GFa;
this.B=new Map;this.F=new Set;this.C=0;this.D=100;this.flushInterval=3E4;this.u=new g.Lm(this.flushInterval);this.u.va("tick",this.lH,!1,this)},IFa=function(a,b){return a.F.has(b)?void 0:a.B.get(b)},JFa=function(a){for(var b=0;b<a.length;b++)a[b].clear()},KFa=function(){if(!R2){R2=new HFa;
var a=g.Wo("client_streamz_web_flush_count",-1);-1!==a&&(R2.D=a)}this.u=R2;this.u.UI("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",{yJ:3,xJ:"client_name"})},MFa=function(a){g.Kf(this,a,LFa,null)},NFa=function(a){g.Kf(this,a,null,null)},PFa=function(a,b){var c=g.Qf(a,NFa,1);
0<c.length&&L2(b,1,c,OFa)},OFa=function(a,b){var c=g.Lf(a,1);
null!=c&&g.Ef(b,1,c);c=g.Lf(a,2);null!=c&&g.Df(b,2,c)},RFa=function(a){g.Kf(this,a,QFa,null)},TFa=function(a){g.Kf(this,a,null,SFa)},UFa=function(a){g.Kf(this,a,null,null)},VFa=function(a){g.Kf(this,a,null,null)},S2=function(a){g.Kf(this,a,WFa,null)},U2=function(a){g.Kf(this,a,null,T2)},W2=function(a){g.Kf(this,a,null,V2)},ZFa=function(a,b){var c=M2(a,UFa,1);
null!=c&&K2(b,1,c,XFa);c=M2(a,VFa,2);null!=c&&K2(b,2,c,YFa)},XFa=function(a,b){var c=g.Lf(a,1);
null!=c&&J2(b,1,c);c=g.Lf(a,2);null!=c&&J2(b,2,c);c=g.Lf(a,3);null!=c&&I2(b,3,c)},YFa=function(a,b){var c=g.Lf(a,1);
null!=c&&J2(b,1,c);c=g.Lf(a,2);null!=c&&J2(b,2,c);c=g.Lf(a,3);null!=c&&g.Af(b,3,c);c=g.Lf(a,4);null!=c&&I2(b,4,c)},bGa=function(a,b){var c=g.Qf(a,U2,1);
0<c.length&&L2(b,1,c,$Fa);c=M2(a,W2,2);null!=c&&K2(b,2,c,aGa)},$Fa=function(a,b){var c=g.Lf(a,1);
null!=c&&J2(b,1,c);c=g.Lf(a,2);null!=c&&g.Af(b,2,c);c=g.Lf(a,3);null!=c&&I2(b,3,c)},aGa=function(a,b){var c=g.Lf(a,1);
null!=c&&g.Df(b,1,c);c=g.Lf(a,2);null!=c&&g.Ef(b,2,c);c=M2(a,MFa,3);null!=c&&K2(b,3,c,PFa)},GFa=function(){},X2=function(a){g.B.call(this);
this.callback=a;this.B=new g.En(0,0,.4,0,.2,1,1,1);this.delay=new g.hn(this.next,window,this);this.startTime=this.duration=this.u=this.from=NaN;g.C(this,this.delay)},Y2=function(a){g.U.call(this,{G:"div",
N:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.I=this.B=0;this.animationDelay=1E3;this.L=new g.dO(this);this.D=[];this.u=[];this.F=0;this.title=new g.U({G:"h2",N:"ytp-related-title",aa:"{{title}}"});this.previous=new g.U({G:"button",ia:["ytp-button","ytp-previous"],T:{"aria-label":"Show previous suggested videos"},R:[g.YL()]});this.X=new X2(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.C=0;this.K=!0;this.next=new g.U({G:"button",ia:["ytp-button","ytp-next"],T:{"aria-label":"Show more suggested videos"},R:[g.ZL()]});g.C(this,this.L);a=a.S();this.W=a.B;g.C(this,this.title);this.title.fa(this.element);this.suggestions=new g.U({G:"div",N:"ytp-suggestions"});g.C(this,this.suggestions);this.suggestions.fa(this.element);g.C(this,this.previous);this.previous.fa(this.element);this.previous.va("click",this.zL,this);g.C(this,this.X);for(var c=0;16>c;c++){var d=new g.U({G:"a",
N:"ytp-suggestion-link",T:{href:"{{link}}",target:a.F,"aria-label":"{{aria_label}}"},R:[{G:"div",N:"ytp-suggestion-image",R:[{G:"div",T:{"data-is-live":"{{is_live}}"},N:"ytp-suggestion-duration",aa:"{{duration}}"}]},{G:"div",N:"ytp-suggestion-title",T:{title:"{{hover_title}}"},aa:"{{title}}"},{G:"div",N:"ytp-suggestion-author",aa:"{{views_or_author}}"}]});g.C(this,d);d.fa(this.suggestions.element);var e=d.ha("ytp-suggestion-link");g.rg(e,"transitionDelay",c/20+"s");this.L.P(e,"click",g.Sa(this.AL,
c));this.D.push(d)}g.C(this,this.next);this.next.fa(this.element);this.next.va("click",this.yL,this);this.L.P(this.api,"videodatachange",this.Oa);this.resize(this.api.Ia().getPlayerSize());this.Oa();this.show()},Z2=function(a){a.next.element.style.bottom=a.I+"px";
a.previous.element.style.bottom=a.I+"px";var b=a.C,c=a.F-a.u.length*(a.tileWidth+a.B);g.K(a.element,"ytp-scroll-min",0<=b);g.K(a.element,"ytp-scroll-max",b<=c)},cGa=function(a){for(var b=0;b<a.u.length;b++){var c=b,d=a.u[b].La();
c=a.D[c];var e=d.shortViewCount?d.shortViewCount:d.author,f=d.Dl();g.AD(a.api.S())&&(f=g.Ld(f,g.kP("emb_rel_err")));c.element.style.display="";var h=c.ha("ytp-suggestion-title");g.Cn.test(d.title)?h.dir="rtl":g.uBa.test(d.title)&&(h.dir="ltr");h=c.ha("ytp-suggestion-author");g.Cn.test(e)?h.dir="rtl":g.uBa.test(e)&&(h.dir="ltr");h=d.isLivePlayback?"Live":d.lengthSeconds?g.JM(d.lengthSeconds):"";c.update({views_or_author:e,duration:h,link:f,hover_title:d.title,title:d.title,aria_label:d.nq||null,is_live:d.isLivePlayback});
c=c.ha("ytp-suggestion-image");d=d.se();c.style.backgroundImage=d?"url("+d+")":""}for(;b<a.D.length;b++)a.D[b].element.style.display="none";Z2(a)},$2=function(a){g.LO.call(this,a);
var b=this,c=a.S();c=new g.U({G:"a",N:"ytp-small-redirect",T:{href:g.DE(c),target:c.F,"aria-label":"Visit YouTube to search for more videos"},R:[{G:"svg",T:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},R:[{G:"path",T:{d:"M0 0h24v24H0V0z",fill:"none"}},{G:"path",T:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]}]});
c.fa(this.element);g.C(this,c);this.u=new Y2(a);this.u.fa(this.element);g.C(this,this.u);this.P(a,"videodatachange",function(){b.show()});
this.resize(this.api.Ia().getPlayerSize())},dGa=function(a,b){a.ha("ytp-error-content").style.paddingTop="0px";
var c=a.ha("ytp-error-content"),d=c.clientHeight;a.u.resize(b,b.height-d);c.style.paddingTop=(b.height-a.u.element.clientHeight)/2-d/2+"px"},eGa=function(a,b){var c=a.api.S(),d;
b.reason&&(a3(b.reason)?d=g.FG(b.reason):d=g.MO(g.S(b.reason)),a.Gc(d,"content"));var e;b.subreason&&(a3(b.subreason)?e=g.FG(b.subreason):e=g.MO(g.S(b.subreason)),a.Gc(e,"subreason"));if(g.P(c.experiments,"embeds_enable_age_gating_playability_check")&&b.proceedButton&&b.proceedButton.buttonRenderer&&(e=b.proceedButton.buttonRenderer,c=a.ha("ytp-error-content-wrap-subreason"),d=g.Ge("A"),e.text&&e.text.simpleText)){var f=e.text.simpleText;d.textContent=f;a:{for(var h=(c||document).getElementsByTagName("A"),
l=0;l<h.length;l++)if(h[l].textContent===f){f=!0;break a}f=!1}f||(e.navigationEndpoint&&e.navigationEndpoint.urlEndpoint&&((f=e.navigationEndpoint.urlEndpoint.url)&&d.setAttribute("href",f),(e=e.navigationEndpoint.urlEndpoint.target)&&d.setAttribute("target",e)),c.appendChild(d))}},a3=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},b3=function(a,b){g.U.call(this,{G:"a",
ia:["ytp-impression-link"],T:{target:"{{target}}",href:"{{url}}","aria-label":"Watch on YouTube"},R:[{G:"div",N:"ytp-impression-link-content",T:{"aria-hidden":"true"},R:[{G:"div",N:"ytp-impression-link-text",aa:"Watch on"},{G:"div",N:"ytp-impression-link-logo",R:[O2()]}]}]});this.api=a;this.B=b;this.ya("target",a.S().F);this.api.Lb(this.element,this,96714);this.P(this.api,"presentingplayerstatechange",this.Ag);this.P(this.api,"videoplayerreset",this.u);this.P(this.element,"click",this.onClick);this.u()},
c3=function(a){g.U.call(this,{G:"div",
N:"ytp-muted-autoplay-endscreen-overlay",R:[{G:"div",N:"ytp-muted-autoplay-end-panel",R:[{G:"div",N:"ytp-muted-autoplay-end-text",aa:"{{text}}"}]}]});this.api=a;this.B=this.ha("ytp-muted-autoplay-end-panel");this.u=new g.EO(this.api);g.C(this,this.u);this.u.fa(this.B,0);this.api.Lb(this.element,this,52428);this.P(this.api,"presentingplayerstatechange",this.C);this.va("click",this.onClick);this.hide()},d3=function(a){g.U.call(this,{G:"div",
N:"ytp-muted-autoplay-overlay",R:[{G:"div",N:"ytp-muted-autoplay-bottom-buttons",R:[{G:"button",ia:["ytp-muted-autoplay-equalizer","ytp-button"],R:[{G:"div",ia:["ytp-muted-autoplay-equalizer-icon"],R:[{G:"svg",T:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},R:[{G:"g",T:{fill:"#fff"},R:[{G:"rect",N:"ytp-equalizer-bar-left",T:{height:"9",width:"4",x:"1",y:"7"}},{G:"rect",N:"ytp-equalizer-bar-middle",T:{height:"14",width:"4",x:"6",y:"2"}},{G:"rect",N:"ytp-equalizer-bar-right",T:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ha("ytp-muted-autoplay-bottom-buttons");this.ha("ytp-muted-autoplay-equalizer");this.C=new g.F(this.B,4E3,this);a.Lb(this.element,this,39306);this.P(a,"presentingplayerstatechange",this.u);this.P(a,"onMutedAutoplayStarts",this.u);this.va("click",this.onClick);this.hide()},e3=function(a,b){g.U.call(this,{G:"div",
N:"ytp-pause-overlay"});var c=this;this.api=a;this.L=b;this.animationDelay=1E3;this.B=new g.dO(this);this.I=new g.zM(this,1E3,!1,100);this.D=[];this.u=[];this.F=0;this.K=!1;this.da=0;this.title=new g.U({G:"h2",N:"ytp-related-title",aa:"{{title}}"});this.previous=new g.U({G:"button",ia:["ytp-button","ytp-previous"],T:{"aria-label":"Show previous suggested videos"},R:[g.YL()]});this.X=new X2(function(m){c.suggestions.element.scrollLeft=-m});
this.ba=this.tileWidth=this.C=0;this.next=new g.U({G:"button",ia:["ytp-button","ytp-next"],T:{"aria-label":"Show more suggested videos"},R:[g.ZL()]});this.expandButton=new g.U({G:"button",ia:["ytp-button","ytp-expand"],aa:"More videos"});g.C(this,this.B);g.C(this,this.I);var d=a.S();"0"===d.controlsType&&g.J(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.W=d.B;g.C(this,this.title);this.title.fa(this.element);this.suggestions=new g.U({G:"div",N:"ytp-suggestions"});g.C(this,this.suggestions);
this.suggestions.fa(this.element);g.C(this,this.previous);this.previous.fa(this.element);this.previous.va("click",this.wL,this);var e=g.lB||g.ug?{style:"will-change: opacity"}:void 0;g.C(this,this.X);for(var f=0;16>f;f++){var h=new g.U({G:"a",N:"ytp-suggestion-link",T:{href:"{{link}}",target:d.F,"aria-label":"{{aria_label}}"},R:[{G:"div",N:"ytp-suggestion-image"},{G:"div",N:"ytp-suggestion-overlay",T:e,R:[{G:"div",N:"ytp-suggestion-title",aa:"{{title}}"},{G:"div",N:"ytp-suggestion-author",aa:"{{author_and_views}}"},
{G:"div",T:{"data-is-live":"{{is_live}}"},N:"ytp-suggestion-duration",aa:"{{duration}}"}]}]});g.C(this,h);h.fa(this.suggestions.element);var l=h.ha("ytp-suggestion-link");g.rg(l,"transitionDelay",f/20+"s");this.B.P(l,"click",g.Sa(this.xL,f));this.D.push(h)}g.C(this,this.next);this.next.fa(this.element);this.next.va("click",this.vL,this);d=new g.U({G:"button",ia:["ytp-button","ytp-collapse"],T:{"aria-label":"Hide more videos"},R:[{G:"svg",T:{height:"100%",viewBox:"0 0 16 16",width:"100%"},R:[{G:"path",
T:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}]});g.C(this,d);d.fa(this.element);d.va("click",this.SN,this);g.C(this,this.expandButton);this.expandButton.fa(this.element);this.expandButton.va("click",this.TN,this);this.B.P(this.api,"appresize",this.Qa);this.B.P(this.api,"fullscreentoggled",this.Ik);this.B.P(this.api,"presentingplayerstatechange",this.Sb);this.B.P(this.api,"videodatachange",this.Oa);this.Qa(this.api.Ia().getPlayerSize());this.Oa()},f3=function(a){var b=
a.L.ue()?32:16;
b=a.ba/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.C;var c=a.F-a.u.length*(a.tileWidth+8);g.K(a.element,"ytp-scroll-min",0<=b);g.K(a.element,"ytp-scroll-max",b<=c)},fGa=function(a){for(var b=0;b<a.u.length;b++){var c=a.u[b].La(),d=a.D[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.tBa.test(c.title)&&(d.ha("ytp-suggestion-title").dir="rtl");g.tBa.test(e)&&(d.ha("ytp-suggestion-author").dir="rtl");var f=c.isLivePlayback?"Live":c.lengthSeconds?g.JM(c.lengthSeconds):"";var h=c.Dl();g.AD(a.api.S())&&(h=g.Ld(h,g.kP("emb_rel_pause")));d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.nq||null,is_live:c.isLivePlayback});d=d.ha("ytp-suggestion-image");c=c.se();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.D.length;b++)a.D[b].element.style.display=
"none";f3(a)},g3=function(a){var b=a.S();
g.U.call(this,{G:"a",ia:["ytp-watermark","yt-uix-sessionlink"],T:{target:b.F,href:"{{url}}","aria-label":g.qK("Watch on $WEBSITE",{WEBSITE:g.YD(b)}),"data-sessionlink":"feature=player-watermark"},R:[O2()]});this.api=a;this.u=null;this.B=!1;this.state=a.Ua();a.Lb(this.element,this,76758);this.P(a,"videodatachange",this.VA);this.P(a,"videodatachange",this.Oa);this.P(a,"presentingplayerstatechange",this.BL);this.P(a,"appresize",this.Qa);b=this.state;this.state!==b&&(this.state=b);this.VA();this.Oa();
this.Qa(a.Ia().getPlayerSize())},h3=function(a){g.nO.call(this,a);
this.J=a;this.B=new g.dO(this);g.C(this,this.B);this.load()};g.k=P2.prototype;g.k.YQ=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.zo.set(this.fD(c),[new FFa(a)])};
g.k.VC=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.fD(b);return this.zo.has(b)?this.zo.get(b):void 0};
g.k.FJ=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.VC(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.zo.clear()};
g.k.fD=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.u(Q2,P2);Q2.prototype.C=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.FJ(c);e&&(d=e.dC);this.YQ(d+a,c)};g.k=HFa.prototype;g.k.lH=function(){var a=this.B.values();a=[].concat(g.ma(a)).filter(function(b){return b.zo.size});
a.length&&this.I.flush(a);JFa(a);this.C=0;this.u.enabled&&this.u.stop()};
g.k.UI=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.B.has(a)||this.B.set(a,new Q2(a,c))};
g.k.dL=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.eL.apply(this,[a,1].concat(g.ma(c)))};
g.k.eL=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=IFa(this,a))&&e instanceof Q2&&(e.C(b,d),this.u.enabled||this.u.start(),this.C++,this.C>=this.D&&this.lH())};
g.k.PG=function(a,b,c){for(var d=2;d<arguments.length;++d);IFa(this,a)};g.Ua(MFa,g.Ff);g.Ua(NFa,g.Ff);var LFa=[1];g.Ua(RFa,g.Ff);g.Ua(TFa,g.Ff);g.Ua(UFa,g.Ff);g.Ua(VFa,g.Ff);g.Ua(S2,g.Ff);g.Ua(U2,g.Ff);g.Ua(W2,g.Ff);var QFa=[3,6,4],SFa=[[1,2]],WFa=[1],T2=[[1,2,3]],V2=[[1,2,3]];GFa.prototype.flush=function(a){a=void 0===a?[]:a;if(g.Vo("enable_client_streamz_web")){a=g.q(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new RFa;c=g.Nf(c,1,b.D);for(var d=b,e=[],f=0;f<d.u.length;f++)e.push(d.u[f].xJ);c=g.Nf(c,3,e||[]);d=[];e=[];f=g.q(b.zo.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.B;for(var m=b.VC(h)||[],n=[],p=0;p<m.length;p++){var r=m[p];r=r&&r.dC;var t=new W2;switch(l){case 3:N2(t,1,V2[0],Number(r));
break;case 2:N2(t,2,V2[0],Number(r))}n.push(t)}l=n;for(m=0;m<l.length;m++){p=l[m];n=new S2;n.u||(n.u={});r=p?p.fg:p;n.u[2]=p;n=g.Nf(n,2,r);p=h;r=[];t=b;for(var w=[],x=0;x<t.u.length;x++)w.push(t.u[x].yJ);t=w;for(w=0;w<t.length;w++){x=t[w];var y=p[w],E=new U2;switch(x){case 3:N2(E,1,T2[0],String(y));break;case 2:N2(E,2,T2[0],Number(y));break;case 1:N2(E,3,T2[0],"true"==y)}r.push(E)}EFa(n,1,r);d.push(n)}}EFa(c,4,d);d=b=new g.yf;e=g.Lf(c,1);null!=e&&J2(d,1,e);e=g.Lf(c,5);null!=e&&CFa(d,5,e);e=M2(c,TFa,
2);null!=e&&K2(d,2,e,ZFa);e=g.Lf(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)J2(d,3,e[f]);e=g.Lf(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)CFa(d,6,e[f]);e=g.Qf(c,S2,4);0<e.length&&L2(d,4,e,bGa);b=g.zf(b);b={serializedIncrementBatch:g.uf(b)};g.Gr("streamzIncremented",b)}}};var R2;g.u(X2,g.B);X2.prototype.start=function(a,b,c){this.from=a;this.u=b;this.duration=c;this.startTime=(0,g.M)();this.next()};
X2.prototype.next=function(){var a=(0,g.M)()-this.startTime;var b=this.B;a=DFa(b,a/this.duration);if(0==a)b=b.F;else if(1==a)b=b.L;else{var c=g.de(b.F,b.I,a),d=g.de(b.I,b.K,a);b=g.de(b.K,b.L,a);c=g.de(c,d,a);d=g.de(d,b,a);b=g.de(c,d,a)}b=g.be(b,0,1);this.callback((this.u-this.from)*b+this.from);1>b&&this.delay.start()};g.u(Y2,g.U);g.k=Y2.prototype;g.k.hide=function(){this.K=!0;g.U.prototype.hide.call(this)};
g.k.show=function(){this.K=!1;g.U.prototype.show.call(this)};
g.k.isHidden=function(){return this.K};
g.k.yL=function(){this.scrollTo(this.C-this.F)};
g.k.zL=function(){this.scrollTo(this.C+this.F)};
g.k.AL=function(a,b){var c=this.u[a],d=c.Bd;g.GO(b,this.api,this.W,d||void 0)&&this.api.Mi(c.La().videoId,d,c.getPlaylistId())};
g.k.resize=function(a,b){var c=this.api.S(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.u.length,this.D.length);if(150>=Math.min(a.width,a.height)||0===h||!c.gb)this.hide();else{var l;if(e){var m=l=28;this.B=16}else this.B=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;l=a.width-(48+l+m);m=Math.ceil(l/150);m=Math.min(3,m);m=l/m-this.B;var r=Math.floor(m/d);b&&r+100>b&&50<m&&(r=Math.max(b,50/d),m=Math.ceil(l/(d*(r-100)+this.B)),m=l/m-this.B,r=Math.floor(m/
d));50>m||g.ZN(this.api)?this.hide():this.show();for(d=0;d<h;d++){var t=this.D[d],w=t.ha("ytp-suggestion-image");w.style.width=m+"px";w.style.height=r+"px";t.ha("ytp-suggestion-title").style.width=m+"px";t.ha("ytp-suggestion-author").style.width=m+"px";t=t.ha("ytp-suggestion-duration");t.style.display=t&&100>m?"none":""}h=e+n+p+4;this.I=h+c+(r-f)/2;this.suggestions.element.style.height=r+h+"px";this.tileWidth=m;this.F=l;this.C=0;this.suggestions.element.scrollLeft=-0;Z2(this)}};
g.k.Oa=function(){var a=this,b=this.api.getVideoData(),c=this.api.S();this.W=b.F?!1:c.B;if(b.suggestions){var d=g.Me(b.suggestions,function(e){return e&&!e.list});
this.u=g.Oc(d,function(e){e=g.dR(c,e);g.C(a,e);return e})}else this.u.length=0;
cGa(this);b.F?this.title.update({title:g.qK("More videos from $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"More videos on YouTube"})};
g.k.scrollTo=function(a){a=g.be(a,this.F-this.u.length*(this.tileWidth+this.B),0);this.X.start(this.C,a,this.animationDelay);this.C=a;Z2(this)};g.u($2,g.LO);$2.prototype.show=function(){g.LO.prototype.show.call(this);dGa(this,this.api.Ia().getPlayerSize())};
$2.prototype.resize=function(a){g.LO.prototype.resize.call(this,a);dGa(this,a);g.K(this.element,"related-on-error-overlay-visible",!this.u.isHidden())};
$2.prototype.B=function(a){g.LO.prototype.B.call(this,a);var b=this.api.getVideoData();if(g.P(this.api.S().experiments,"embed_parse_error_renderer_killswitch")||!b.mE&&!b.playerErrorMessageRenderer){var c;a.ij&&(b.sm?a3(b.sm)?c=g.FG(b.sm):c=g.MO(g.S(b.sm)):c=g.MO(a.ij),this.Gc(c,"subreason"))}else(a=b.mE)?eGa(this,a):b.playerErrorMessageRenderer&&eGa(this,b.playerErrorMessageRenderer)};g.u(b3,g.U);b3.prototype.Ag=function(){this.api.Ua().isCued()||(this.hide(),this.api.Pa(this.element,!1))};
b3.prototype.u=function(){var a=this.api.getVideoData(),b=this.api.S(),c=this.api.getVideoData().F,d=b.xb;b=!b.gb;var e=this.B.Me();d||e||c||b||!a.videoId?(this.hide(),this.api.Pa(this.element,!1)):(a=g.Ld(this.api.getVideoUrl(),g.kP("emb_imp_woyt")),this.ya("url",a),this.show())};
b3.prototype.onClick=function(a){var b=g.Ld(this.api.getVideoUrl(),g.kP("emb_imp_woyt"));g.HO(b,this.api,a);this.api.yb(this.element)};
b3.prototype.show=function(){this.api.Ua().isCued()&&(g.U.prototype.show.call(this),this.api.ur(this.element)&&this.api.Pa(this.element,!0))};g.u(c3,g.U);c3.prototype.C=function(){var a=this.api.Ua(),b=this.api.getVideoData();g.P(this.api.S().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.T(a,2)&&!this.ab?(this.show(),this.u.show(),a=this.api.getVideoData(),this.ya("text",a.mB),g.K(this.element,"ytp-muted-autoplay-show-end-panel",!0),this.api.Pa(this.element,this.ab),this.api.ua("onMutedAutoplayEnds")):this.hide())};
c3.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.mI(a);this.api.loadVideoById(a.videoId,b);this.api.yb(this.element);this.hide()};g.u(d3,g.U);d3.prototype.u=function(){var a=this.api.Ua(),b=this.api.getVideoData();g.P(this.api.S().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.T(a,2)?this.ab||(g.U.prototype.show.call(this),this.C.start(),this.api.Pa(this.element,this.ab)):this.hide()};
d3.prototype.B=function(){g.K(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
d3.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.mI(a);this.api.loadVideoById(a.videoId,b);this.api.yb(this.element)};g.u(e3,g.U);g.k=e3.prototype;g.k.hide=function(){g.un(this.api.getRootNode(),"ytp-expand-pause-overlay");g.U.prototype.hide.call(this)};
g.k.SN=function(){this.K=!0;g.un(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.TN=function(){this.K=!1;g.J(this.api.getRootNode(),"ytp-expand-pause-overlay")};
g.k.vL=function(){this.scrollTo(this.C-this.F)};
g.k.wL=function(){this.scrollTo(this.C+this.F)};
g.k.xL=function(a,b){if(1E3>(0,g.M)()-this.da)g.mp(b),document.activeElement.blur();else{var c=this.u[a],d=c.Bd;g.GO(b,this.api,this.W,d||void 0)&&this.api.Mi(c.La().videoId,d,c.getPlaylistId())}};
g.k.Ik=function(){this.Qa(this.api.Ia().getPlayerSize())};
g.k.Sb=function(a){if(!(g.T(a.state,1)||g.T(a.state,16)||g.T(a.state,32))){var b=!g.P(this.api.S().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.T(a.state,2048);!g.T(a.state,4)||g.T(a.state,2)||b?this.I.hide():this.u.length&&(this.K||(g.J(this.api.getRootNode(),"ytp-expand-pause-overlay"),f3(this)),this.I.show(),this.da=(0,g.M)())}};
g.k.Qa=function(a){var b=16/9,c=this.L.ue();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.D.length;d++){var e=this.D[d].ha("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.ba=b;this.F=a;this.C=0;this.suggestions.element.scrollLeft=-0;f3(this)};
g.k.Oa=function(){var a=this,b=this.api.S(),c=this.api.getVideoData();this.W=c.F?!1:b.B;if(c.suggestions){var d=g.Me(c.suggestions,function(e){return e&&!e.list});
this.u=g.Oc(d,function(e){e=g.dR(b,e);g.C(a,e);return e})}else this.u.length=0;
fGa(this);c.F?this.title.update({title:g.qK("More videos from $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:c.author})}):this.title.update({title:"More videos"})};
g.k.scrollTo=function(a){a=g.be(a,this.F-this.u.length*(this.tileWidth+8),0);this.X.start(this.C,a,this.animationDelay);this.C=a;f3(this)};g.u(g3,g.U);g.k=g3.prototype;g.k.VA=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).F,c=this.api.S();a=(a.mutedAutoplay||c.xb&&!g.T(this.state,2))&&!(b&&c.pfpChazalUi);g.UL(this,a);this.api.Pa(this.element,a)};
g.k.BL=function(a){a=a.state;this.state!==a&&(this.state=a);this.VA()};
g.k.Oa=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.ya("url",a);this.u||(this.u=this.va("click",this.onClick))}else this.u&&(this.ya("url",null),this.Kb(this.u),this.u=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.KM(a),!1,!0,!0);g.HO(b,this.api,a);this.api.yb(this.element)};
g.k.Qa=function(a){if((a=480>a.width)&&!this.B||!a&&this.B){var b=new g.U(O2()),c=this.ha("ytp-watermark");g.K(c,"ytp-watermark-small",a);g.Ie(c);b.fa(c);this.B=a}};g.u(h3,g.nO);g.k=h3.prototype;g.k.Ci=function(){return!1};
g.k.create=function(){var a=this.J.S(),b=g.SN(this.J);a.gb&&(this.F=new e3(this.J,b),g.C(this,this.F),g.bO(this.J,this.F.element,4));g.P(a.experiments,"embeds_enable_muted_autoplay")&&(this.u=new d3(this.J),g.C(this,this.u),g.bO(this.J,this.u.element,4),this.D=new c3(this.J),g.C(this,this.D),g.bO(this.J,this.D.element,4));if(a.xb||this.u)this.watermark=new g3(this.J),g.C(this,this.watermark),g.bO(this.J,this.watermark.element,7);g.P(a.experiments,"embeds_impression_link")&&(this.C=new b3(this.J,b),
g.C(this,this.C),g.bO(this.J,this.C.element,7));this.B.P(this.J,"appresize",this.Qa);this.B.P(this.J,"presentingplayerstatechange",this.Ag);this.B.P(this.J,"videodatachange",this.LR);this.B.P(this.J,"onMutedAutoplayStarts",this.KO);this.sb(this.J.Ua());this.player.Xc("embed");g.P(a.experiments,"enable_cookie_reissue_iframe")&&a.Gf&&!g.Bq("__Secure-3PAPISID")&&(a=a.deviceParams.c,a=void 0===a?"WEB":a,(new KFa).u.dL("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",a),a=g.Ge("IFRAME"),
a.src="/signin?go=true",a.style.display="none",document.body.appendChild(a))};
g.k.Qa=function(){var a=this.J.Ia().getPlayerSize();this.Rd&&this.Rd.resize(a)};
g.k.Ag=function(a){this.sb(a.state)};
g.k.sb=function(a){g.T(a,128)?(this.Rd||(this.Rd=new $2(this.J),g.C(this,this.Rd),g.bO(this.J,this.Rd.element,4)),this.Rd.B(a.getData()),this.Rd.show(),g.J(this.J.getRootNode(),"ytp-embed-error")):this.Rd&&(this.Rd.dispose(),this.Rd=null,g.un(this.J.getRootNode(),"ytp-embed-error"))};
g.k.KO=function(){this.J.getVideoData().mutedAutoplay&&this.u&&this.watermark&&this.watermark.fa(this.u.bottomButtons,0)};
g.k.LR=function(){var a=this.J.getVideoData();this.watermark&&this.u&&!a.mutedAutoplay&&g.Oe(this.u.element,this.watermark.element)&&g.bO(this.J,this.watermark.element,7)};g.tO.embed=h3;})(_yt_player);