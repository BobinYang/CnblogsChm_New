(function(){var n=void 0,q=!0,r=null,s=!1,u=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},v=function(a,b,c){v=Function.prototype.bind&&
-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return v.apply(r,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};var ea=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,fa=function(a){return!a?"pagead2.googlesyndication.com":(a=a.match(ea))?a[0]:"pagead2.googlesyndication.com"};var w=document,x=window;var y=function(a,b){this.width=a;this.height=b};y.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};y.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};fa("");function A(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}
var B=function(a,b,c){a.addEventListener?a.addEventListener(b,c,s):a.attachEvent&&a.attachEvent("on"+b,c)},C=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,s):a.detachEvent&&a.detachEvent("on"+b,c)},ga=function(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)},ha={},ia=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return s}};var ja=!!window.google_async_iframe_id,D=ja&&window.parent||window,E=function(){if(ja&&!ia(D)){for(var a="."+w.domain;2<a.split(".").length&&!ia(D);)w.domain=a=a.substr(a.indexOf(".")+1),D=window.parent;ia(D)||(D=window)}return D};var la=function(){var a=ka,b=a.length;if(0<b){for(var c=Array(b),e=0;e<b;e++)c[e]=a[e];return c}return[]};var F=function(a,b){this.x=a!==n?a:0;this.y=b!==n?b:0};F.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};F.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var G,ma,na,oa,pa=function(){return u.navigator?u.navigator.userAgent:r};oa=na=ma=G=s;var qa;if(qa=pa()){var ra=u.navigator;G=0==qa.indexOf("Opera");ma=!G&&-1!=qa.indexOf("MSIE");na=!G&&-1!=qa.indexOf("WebKit");oa=!G&&!na&&"Gecko"==ra.product}var sa=G,I=ma,J=oa,K=na,ta=function(){var a=u.document;return a?a.documentMode:n},ua;
a:{var va="",L;if(sa&&u.opera)var wa=u.opera.version,va="function"==typeof wa?wa():wa;else if(J?L=/rv\:([^\);]+)(\)|;)/:I?L=/MSIE\s+([^\);]+)(\)|;)/:K&&(L=/WebKit\/(\S+)/),L)var xa=L.exec(pa()),va=xa?xa[1]:"";if(I){var ya=ta();if(ya>parseFloat(va)){ua=String(ya);break a}}ua=va}
var za=ua,Aa={},Ca=function(a){var b;if(!(b=Aa[a])){b=0;for(var c=String(za).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,e.length),d=0;0==b&&d<f;d++){var g=c[d]||"",l=e[d]||"",k=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var h=k.exec(g)||["","",""],p=m.exec(l)||["","",""];if(0==h[0].length&&0==p[0].length)break;b=((0==h[1].length?0:parseInt(h[1],10))<(0==p[1].length?0:parseInt(p[1],10))?-1:(0==h[1].length?
0:parseInt(h[1],10))>(0==p[1].length?0:parseInt(p[1],10))?1:0)||((0==h[2].length)<(0==p[2].length)?-1:(0==h[2].length)>(0==p[2].length)?1:0)||(h[2]<p[2]?-1:h[2]>p[2]?1:0)}while(0==b)}b=Aa[a]=0<=b}return b},Da=u.document,Ea=!Da||!I?n:ta()||("CSS1Compat"==Da.compatMode?parseInt(za,10):5);var Fa;!J&&!I||I&&I&&9<=Ea||J&&Ca("1.9.1");I&&Ca("9");var Ha=function(a){return a?new Ga(M(a)):Fa||(Fa=new Ga)},M=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},Ga=function(a){this.C=a||u.document||document};Ga.prototype.createElement=function(a){return this.C.createElement(a)};var Ia=function(a){var b=a.C;a=!K&&"CSS1Compat"==b.compatMode?b.documentElement:b.body;b=b.parentWindow||b.defaultView;return I&&Ca("10")&&b.pageYOffset!=a.scrollTop?new F(a.scrollLeft,a.scrollTop):new F(b.pageXOffset||a.scrollLeft,b.pageYOffset||a.scrollTop)};var N=function(a,b,c,e){this.top=a;this.right=b;this.bottom=c;this.left=e};N.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};N.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};var O=function(a,b){var c;a:{c=M(a);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,r))){c=c[b]||c.getPropertyValue(b)||"";break a}c=""}return c||(a.currentStyle?a.currentStyle[b]:r)||a.style&&a.style[b]},Ja=function(a){var b=a.getBoundingClientRect();I&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b},Ka=function(a){if(I&&!(I&&8<=Ea))return a.offsetParent;var b=M(a),c=O(a,
"position"),e="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=O(a,"position"),e=e&&"static"==c&&a!=b.documentElement&&a!=b.body,!e&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return r},La=function(a){var b,c=M(a),e=O(a,"position"),f=J&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==e&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),d=new F(0,0),g;b=c?M(c):document;if(g=I)if(g=!(I&&9<=Ea))g=
"CSS1Compat"!=Ha(b).C.compatMode;g=g?b.body:b.documentElement;if(a==g)return d;if(a.getBoundingClientRect)b=Ja(a),a=Ia(Ha(c)),d.x=b.left+a.x,d.y=b.top+a.y;else if(c.getBoxObjectFor&&!f)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(g),d.x=b.screenX-a.screenX,d.y=b.screenY-a.screenY;else{f=a;do{d.x+=f.offsetLeft;d.y+=f.offsetTop;f!=a&&(d.x+=f.clientLeft||0,d.y+=f.clientTop||0);if(K&&"fixed"==O(f,"position")){d.x+=c.body.scrollLeft;d.y+=c.body.scrollTop;break}f=f.offsetParent}while(f&&f!=a);if(sa||K&&"absolute"==
e)d.y-=c.body.offsetTop;for(f=a;(f=Ka(f))&&f!=c.body&&f!=g;)if(d.x-=f.scrollLeft,!sa||"TR"!=f.tagName)d.y-=f.scrollTop}return d},Ma=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;var Na=function(a){var b=x;a&&b.top!=b&&(b=b.top);try{var c;if(b.document&&!b.document.body)c=new y(-1,-1);else{var e=(b||window).document,f="CSS1Compat"==e.compatMode?e.documentElement:e.body;c=new y(f.clientWidth,f.clientHeight)}return c}catch(d){return new y(-12245933,-12245933)}},Oa=function(a,b){("msie"in ha?ha.msie:ha.msie=-1!=navigator.userAgent.toLowerCase().indexOf("msie"))&&!window.opera?B(a,"readystatechange",function(){"complete"==a.readyState&&b()}):B(a,"load",b)},Pa=function(a,b){try{b.postMessage(a,
"*")}catch(c){}},Qa=function(a,b){if(b){a(b);var c=b.frames;if(c){var e=c.length,f;for(f=0;f<e;++f)Qa(a,c[f])}}};var Q=function(a,b,c,e,f,d,g,l,k){this.a=Ra;this.k=0;this.t=this.g=-1;this.m=[0,0,0,0,0];this.f=[0,0,0,0,0];this.d=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.h="";this.u=s;this.G=q;this.e=e;this.s=this.j=-1;this.H=b;this.b=0;this.c=f;this.o=g||"";this.p=l||"";this.w=function(){};this.element=c;this.n=0;this.r=-1;this.l=k||Ra;this.D=b?-1!=b.indexOf("dcopt=anid"):s;this.F="";this.i=c?String(c._avi_||""):"";this.A=s;this.q=this.v="";Sa(this,a,d)},Ra=new N(0,0,0,0);
Q.prototype.update=function(a,b,c,e,f){if(0>this.e)return r;c||Sa(this,e,f);return Ta(this,this.a,b,a,c,s)};
var Ta=function(a,b,c,e,f,d){var g=e-a.e||1;a.e=e;var l=new N(Math.max(b.top,c.top),Math.min(b.right,c.right),Math.min(b.bottom,c.bottom),Math.max(b.left,c.left)),k=b=-1,m=0;0<a.k&&(l.top<l.bottom&&l.left<l.right)&&(m=(l.bottom-l.top)*(l.right-l.left)/a.k,b=1<=m?0:0.75<=m?1:0.5<=m?2:0.25<=m?3:4,0>a.g&&(a.g=e),a.t=e,0.5<=m&&(k=100*a.k/((c.bottom-c.top)*(c.right-c.left)),k=20<=k?0:10<=k?1:5<=k?2:2.5<=k?3:4));d=d&&-1!=a.j&&2>=a.j;e=-1==a.j||-1==b?-1:Math.max(a.j,b);d=d?e:a.j;-1!=d&&(a.m[d]+=g,-1!=d&&
2>=d&&-1!=a.s&&(a.zoom[a.s]+=g));for(;0<=d&&4>=d;d++)a.d[d]+=g,a.d[d]>a.f[d]&&(a.f[d]=a.d[d]);for(d=0;d<a.d.length;++d)if(d<b||f||-1==b)a.d[d]=0;a.j=f?-1:b;a.s=k;a.w(a,c);return m},Va=function(a,b,c,e){if(a.A&&a.element&&a.element.contentWindow){var f=Ua(a);f.unshift("adk="+a.b);e&&f.push("r="+e);b=f.concat(b).join("&");try{e={};e[0]=c;e[3]=b;e[4]=a.b;e[5]=1E3<=Math.max(a.d[2],a.f[2])?q:s;var d=window.JSON.stringify(e),g=a.element.contentWindow;if(d){var l=da(Pa,d);Qa(l,g)}}catch(k){}}};
Q.prototype.I=function(a){this.r=a()};Q.prototype.B=function(a){a=a();this.n+=a-this.r;this.r=-1};
var Sa=function(a,b,c){var e,f;b=!c||5!=a.c&&6!=a.c?b.top:b;try{if(a.element){f=a.element.getBoundingClientRect();var d=a.element,g=new F(0,0),l=M(d)?M(d).parentWindow||M(d).defaultView:window;do{var k;if(l==b)k=La(d);else{var m=d,h=new F;if(1==m.nodeType){if(m.getBoundingClientRect){var p=Ja(m);h.x=p.left;h.y=p.top}else{var z=Ia(Ha(m)),t=La(m);h.x=t.x-z.x;h.y=t.y-z.y}if(J&&!Ca(12)){c=h;var H;var P=n;I?P="-ms-transform":K?P="-webkit-transform":sa?P="-o-transform":J&&(P="-moz-transform");var T=n;P&&
(T=O(m,P));T||(T=O(m,"transform"));if(T){var Ba=T.match(Ma);H=!Ba?new F(0,0):new F(parseFloat(Ba[1]),parseFloat(Ba[2]))}else H=new F(0,0);h=new F(c.x+H.x,c.y+H.y)}}else{var Ab="function"==aa(m.J);c=m;m.targetTouches?c=m.targetTouches[0]:Ab&&m.J().targetTouches&&(c=m.J().targetTouches[0]);h.x=c.clientX;h.y=c.clientY}k=h}c=k;g.x+=c.x;g.y+=c.y}while(l&&l!=b&&(d=l.frameElement)&&(l=l.parent));e=g}else f=Ra,e=new F(0,0);var cb=e.x+a.l.left,db=e.y+a.l.top,Bb=a.l.right||f.right-f.left,Cb=a.l.bottom||f.bottom-
f.top;a.a=new N(Math.round(db),Math.round(cb+Bb),Math.round(db+Cb),Math.round(cb))}catch(Qb){a.a=a.l}a.k=(a.a.bottom-a.a.top)*(a.a.right-a.a.left)},Ua=function(a){var b=a.a,b=["p="+b.top+","+b.left+","+b.bottom+","+b.right];b.push("tos="+a.m.join(","));b.push("mtos="+a.f.join(","));b.push("rs="+a.c);var c=5==a.c||6==a.c;c||b.push("ht="+a.n);0<=a.g&&(b.push("tfs="+a.g),b.push("tls="+a.t));a.i&&b.push("ai="+a.i);a.v&&b.push("fp="+A(a.v));7==a.c&&b.push("qid="+a.F);a.h&&b.push("afp="+A(a.h));c&&(a.p&&
b.push("ord="+A(a.p)),a.o&&b.push("amd="+A(a.o+";")),a.D&&b.push("anid=1"),a.q&&b.push("xbid="+A(a.q)));return b};var Ya=function(a,b){B(a,"scroll",Wa);B(a,"resize",Xa);if(b)for(var c,e=0;e<R.length;++e)if(c=R[e],c.element){var f=v(c.I,c,S);B(c.element,"mouseover",f);f=v(c.B,c,S);B(c.element,"mouseout",f)}},Xa=function(){U(s);Wa()},Wa=function(){Za(R,s)},Za=function(a,b){if(!($a||0==a.length)){var c=V,e=ab,f=bb,d=eb,g=r;if(d)U(s),c=V=new y(e.width,e.height-f);else{if(c==r||-1==c.width||-1==c.height||-12245933==c.width||-12245933==c.height)return;try{g=Ia(Ha(x.top.document))}catch(l){return}}ka=r;window.clearTimeout(W);
W=r;var k=S();if(d)for(c=0;c<a.length;c++){var d=a[c],g=k,m=b,h=x;if(!(0>d.e)){var p=h.innerWidth,z=h.innerHeight,t=new N(h.mozInnerScreenY,h.mozInnerScreenX+p,h.mozInnerScreenY+z,h.mozInnerScreenX),h=new N(h.screenY+f,h.screenX+e.width,h.screenY+e.height,h.screenX);if(!m){var H=new N(t.top-h.top,t.right-h.left,t.bottom-h.top,t.left-h.left);H.top>d.a.top?d.a=H:(d.a.right=d.a.left+p,d.a.bottom=d.a.top+z);d.k=p*z}Ta(d,t,h,g,m,q)}}else{e=new N(g.y,g.x+c.width,g.y+c.height,g.x);for(c=0;c<a.length;c++)a[c].update(k,
e,b,x,fb)}gb+=S()-k;++hb;if("osd"==ib)for(c=0;c<a.length;c++)k=jb(x),Va(a[c],k,"goog_update_data","u");b||kb()}},mb=function(){var a=lb,b;w.mozVisibilityState?b="mozvisibilitychange":w.webkitVisibilityState?b="webkitvisibilitychange":w.visibilityState&&(b="visibilitychange");b&&B(w,b,a)},lb=function(){var a;a=x.document;a={visible:1,hidden:2,prerender:3,preview:4}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||0;(a=1==a||0==a)&&U(q);Za(R,!a)},kb=function(){W=window.setTimeout(function(){Za(R,
s)},1E3)},R=[],$a=s,nb=(new Date).getTime(),X=-1,V=r,ab=r,ob=r,W=r,fb=!ia(x.top),ib="",ka=r,bb=0,eb=s,S=function(){return(new Date).getTime()-nb},pb=0,qb=0,gb=0,hb=0,rb=-1,U=function(a){V=Na(q);if(!a){ab=x.outerWidth?new y(x.outerWidth,x.outerHeight):new y(-12245933,-12245933);a=x;a.top!=a&&(a=a.top);var b=0,c=0,e=V;try{var f=a.document,d=f.body,g=f.documentElement;if("CSS1Compat"==f.compatMode&&g.scrollHeight)b=g.scrollHeight!=e.height?g.scrollHeight:g.offsetHeight,c=g.scrollWidth!=e.width?g.scrollWidth:
g.offsetWidth;else{var l=g.scrollHeight,k=g.scrollWidth,m=g.offsetHeight,h=g.offsetWidth;g.clientHeight!=m&&(l=d.scrollHeight,k=d.scrollWidth,m=d.offsetHeight,h=d.offsetWidth);l>e.height?l>m?(b=l,c=k):(b=m,c=h):l<m?(b=l,c=k):(b=m,c=h)}ob=new y(c,b)}catch(p){ob=new y(-12245933,-12245933)}}},jb=function(a,b){if(ka&&!b)return la();var c=a.document,e=0<=X?S()-X:-1;-1==rb&&(e=S());var f=[],d=R;try{if(0<d.length?((c=V)&&f.push("bs="+c.width+","+c.height),(c=ab)&&f.push("bos="+c.width+","+c.height),(c=ob)&&
f.push("ps="+c.width+","+c.height),a.screen&&f.push("ss="+a.screen.width+","+a.screen.height)):(f.push("url="+A(a.location.href.substring(0,1024))),c.referrer&&f.push("referrer="+A(c.referrer.substring(0,512)))),f.push("tt="+e),f.push("pt="+X),f.push("deb="+A([1,pb,qb,gb,hb,rb].join("-"))),a.top!=a){0<d.length&&f.push("iframe_loc="+A(a.location.href.substring(0,512)));var g=Na(s);f.push("is="+g.width+","+g.height)}}catch(l){f.push("error")}ka=f;return la()};var Y,sb=r,Z="",ub=function(){if(2==tb())return q;for(var a=R,b=0;b<a.length;b++)if(!a[b].u)return q;return s},xb=function(){if(!(0<X)){try{if(!vb()||"function"!=typeof Y.getNewBlocks)return;U(s);wb(s)}catch(a){}sb=window.setTimeout(xb,250)}},wb=function(a){var b=0,c=S();Y.getNewBlocks(function(d,e,f,m,h){b++;var p=-1,z=s;a||m?p=c:z=q;var t=new Q(window.top,e,d,p,f,fb);t.w=yb;t.h=zb(Db,e);t.b=Eb(e);Fb(t);h&&(t.i=h);R.push(t);z&&Oa(d,function(){t.e=S();lb()})},a);if(a)for(var e=R.length,f=0;f<e;++f){var d=
R[f];0>=d.e&&(d.e=c)}},Ib=function(){try{var a=E(),b=S();X=b;window.clearTimeout(sb);sb=r;U(s);if(vb()){pb=Y.numBlocks();if("function"!=typeof Y.getNewBlocks){var c=[];qb=0;Y.getBlocks(function(a,e,f){qb++;a=new Q(window.top,e,a,b,f,fb);a.w=yb;a.h=zb(Db,e);a.b=Eb(e);Fb(a);c.push(a)});R=c}else wb(q),qb=R.length;mb();lb();Gb();var e=2==Y.getOseId();Ya(a,e);window.setTimeout(function(){Hb("t")},36E5);rb=S()-b}else Hb("c")}catch(f){R=[],Hb("x")}},Hb=function(a){window.clearTimeout(W);W=r;var b=E();Y||
(Y=Goog_AdSense_getAdAdapterInstance());if(!$a){if(2==tb()){-1==rb&&(R=[]);var c=R,e=s;0<c.length?Za(c,q):e=q;e=jb(b,e);e.unshift("//"+fa("")+"/pagead/gen_204?id=osd");var f=0;try{if(0<c.length)for(var d=0;d<c.length;d++)if(0<c[d].b){0<c[d].r&&c[d].B(S);var g=c[d],l=g.a,k=["p:",l.top,l.left,l.bottom,l.right];k.push("tos:",g.m.join(","));k.push("mtos:",g.f.join(","));k.push("rs:",g.c);var m=5==g.c||6==g.c;m||(k.push("zoom:",g.zoom.join(",")),k.push("ht:",g.n));0<=g.g&&
k.push("tfs:",g.g,"tls:",g.t);g.h&&k.push("fp:",g.h);7==g.c&&k.push("qid:",g.F);g.i&&k.push("ai:",g.i);m&&(g.p&&k.push("ord:",g.p),g.o&&k.push("amd:",g.o,";"),g.D&&k.push("anid:","1"),g.q&&k.push("xbid:",g.q));e.splice(1,0,"adk"+c[d].b+"="+A(k.join(",")));f++}e.push("r="+a);0==c.length&&(e.push("correlator="+Y.getCorrelator()),e.push("eid="+Y.getOseExpId()),e.push("oid="+tb()));$&&e.push("ovr=t")}catch(h){e.push("error")}if(!$){d=e.join("&");Z&&(d+="&fp="+A(Z));try{ga(b,d)}catch(p){}}e.splice(0,1,
"//pagead2.googlesyndication.com/activeview?id=osd2");e.splice(1,f);for(d=a=0;d<c.length;d++)if(f=c[d],f.i&&f.b){g=Ua(f);e.splice(1,a,"adk="+f.b+"&"+g.join("&")+"&js=1");a=e.join("&").substring(0,2E3);try{ga(b,a)}catch(z){}a=1}e.splice(1,a);if($)for(d=0;d<c.length;d++)f=c[d],Va(f,e,"goog_image_request")}$a=q}},Db=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g,Jb=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,zb=function(a,b){var c=b.match(a);return c?c.join(""):""},$=s,Kb=0,vb=function(){var a=
E().document;if(!a.body||!a.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance)return s;Y=Goog_AdSense_getAdAdapterInstance();return q},yb=function(a,b){if(a&&!a.u){var c=1E3<=Math.max(a.d[2],a.f[2]);if(c||a.G){var e=c?"1":"0";a.G=s;var f=Y.getCorrelator(),d=a.a,g=ob,e=["{vi:",e,",cl:",f,",adk:",a.b,",rs:",a.c,",pl:",d.left,",pr:",d.right,",pt:",d.top,",pb:",d.bottom,",vl:",b.left,",vr:",b.right,",vt:",b.top,",vb:",b.bottom,",dw:",g&&g.width||0,",dh:",g&&g.height||0,
"}"].join(""),d=a.element;try{var f=[],l=d.contentWindow||(d.contentDocument||d.contentWindow.document).parentWindow||(d.contentDocument||d.contentWindow.document).defaultView;if(l)f=[l];else{var k;var m,h=document,h=d||h;k=h.querySelectorAll&&h.querySelector?h.querySelectorAll("IFRAME"):m=h.getElementsByTagName("IFRAME");for(h=0;h<k.length;++h)(l=k[h].contentWindow||(k[h].contentDocument||k[h].contentWindow.document).parentWindow||(k[h].contentDocument||k[h].contentWindow.document).defaultView)&&
f.push(l)}var p=f.length;if(0<p)for(var z=da(Pa,e),h=0;h<p;++h)Qa(z,f[h])}catch(t){}if(c&&(a.u=q,!ub()&&(c=2==Y.getOseId(),l=E(),C(l,"scroll",Wa),C(l,"resize",Xa),c)))for(l=0;l<R.length;++l)c=R[l],c.element&&(k=v(c.I,c,S),C(c.element,"mouseover",k),k=v(c.B,c,S),C(c.element,"mouseout",k))}}},Eb=function(a){return(a=a.match(/[&\?](?:adk)=([0-9]+)/))&&2==a.length?parseInt(a[1],10):0},Lb=function(a){if(a.data){var b;a:{a=a.data;var c=window;if("object"==typeof a)b=a;else{if("string"==typeof a)try{var e=
c.JSON.parse(a);e[2]=q;b=e;break a}catch(f){}b=r}}if(b&&"goog_provide_override"==b[0])if(e=b[1],0<e&&(1>=e&&e>Kb)&&(Kb=e),b=b[4]){a:{if(b){e=R;for(a=0;a<e.length;++a)if(e[a].b==b){b=e[a];break a}}b=r}b&&(b.A=q)}else{b=R;for(e=0;e<b.length;++e)b[e].A=q}}},Mb=function(){if(0<Kb){var a;a:{a=[2];var b=Kb;if(!(1E-4>Math.random())){var c=Math.random();if(c<b){a=a[Math.floor(c/b*a.length)];break a}}a=r}2==a&&($=q)}},Gb=function(){if(2!=tb()){B(x,"message",Lb);for(var a=R,b=0;b<a.length;++b){var c=a[b];if(c.element&&
c.element.contentWindow){var e={"0":"goog_get_override"};c.b&&(e[4]=c.b);try{var f=window.JSON.stringify(e),d=c.element.contentWindow;if(f){var g=da(Pa,f);Qa(g,d)}}catch(l){}}}x.setTimeout(Mb,500)}},tb=function(){return $?2:Y?Y.getOseId():0},Fb=function(a){if(!Z){if(!a.H)return;var b=zb(Jb,a.H);if(b&&("&"==b.charAt(0)||"?"==b.charAt(0)))b=b.slice(1);Z=b}a.v=Z};var ib="osd",Nb=E();B(Nb,"unload",function(){Hb("u")});var Ob=E();if("complete"==Ob.document.readyState||Ob.google_onload_fired)Ib();else{xb();var Pb=E();B(Pb,"load",function(){window.setTimeout(Ib,100)})};})();
