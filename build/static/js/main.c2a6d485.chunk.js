(this["webpackJsonpkelly-criterion"]=this["webpackJsonpkelly-criterion"]||[]).push([[0],{21:function(e,t,a){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft"}},32:function(e,t,a){e.exports={main:"Layout_main__auk_r"}},35:function(e,t,a){e.exports={instruction:"Landing_instruction__TZAXx"}},40:function(e,t,a){},5:function(e,t,a){e.exports={remaining:"Game_remaining__1DIx9",questionType:"Game_questionType__9SOsR",odds:"Game_odds__3u2lh",question:"Game_question__1aNoK",results:"Game_results__Skg7K",terminal:"Game_terminal__-gM5z",score:"Game_score__1qii9",delta:"Game_delta__1uGc1"}},55:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(15),r=a.n(n),s=(a(40),a(2)),l=a(9),o=a.p+"static/media/hot-chocolate.d4dc4ddc.jpg",d=a(21),u=a.n(d),h=a(1);var j=function(){return Object(h.jsx)("header",{className:u.a.header,children:Object(h.jsx)("nav",{children:Object(h.jsxs)(l.b,{to:"/kelly-criterion/",className:u.a.logo,children:[Object(h.jsx)("div",{children:"Trader's Tavern"}),Object(h.jsx)("img",{src:o})]})})})},b=a(32),m=a.n(b);var O=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{}),Object(h.jsx)("main",{className:m.a.main,children:e.children}),Object(h.jsx)("footer",{children:"Developed by Samer Kadih"})]})},v=a(13),f=a(4),x=a(5),p=a.n(x),M=a(17),y=a(33);function g(e){var t=e.children,a=e.width,i=void 0===a?500:a,c=e.height,n=void 0===c?300:c,r=e.resizable,s=void 0===r||r,l=e.style,o=void 0===l?{}:l,d=e.className;return Object(h.jsx)("div",{children:s?Object(h.jsx)(y.ResizableBox,{width:i,height:n,children:Object(h.jsx)("div",{style:Object(M.a)(Object(M.a)({},o),{},{width:"100%",height:"100%"}),className:d,children:t})}):Object(h.jsx)("div",{style:Object(M.a)({width:"".concat(i,"px"),height:"".concat(n,"px")},o),className:d,children:t})})}var _=a(34);var w=function(e){var t=c.a.useMemo((function(){return[{label:"Player",data:e.history},{label:"Kelly Criterion",data:e.kellyHistory}]}),[]),a=c.a.useMemo((function(){return[{primary:!0,type:"linear",position:"bottom"},{type:"linear",position:"left"}]}),[]);return Object(h.jsx)(g,{style:{background:"rgba(0, 27, 45, 0.9)",padding:"0",borderRadius:"5px"},children:Object(h.jsx)(_.Chart,{data:t,axes:a,tooltip:!0,dark:!0})})};function k(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function N(e){if(e<-6.5)return 0;if(e>6.5)return 1;for(var t=1,a=0,i=1,c=0,n=Math.exp(-23);Math.abs(i)>n;)a+=i=.3989422804*Math.pow(-1,c)*Math.pow(e,c)/(2*c+1)/Math.pow(2,c)*Math.pow(e,c+1)/t,t*=++c;return a+=.5}var S=function(){var e,t=Object(i.useState)(100),a=Object(f.a)(t,2),c=a[0],n=a[1],r=Object(i.useState)(100),l=Object(f.a)(r,2),o=l[0],d=l[1],u=Object(i.useState)(""),j=Object(f.a)(u,2),b=j[0],m=j[1],O=Object(s.f)(),x=O.difficulty,M=O.time,y=Object(i.useState)(0),g=Object(f.a)(y,2),_=g[0],S=g[1],q=Object(i.useState)(0),T=Object(f.a)(q,2),G=T[0],K=T[1],B=Object(i.useState)(0),C=Object(f.a)(B,2),L=C[0],R=C[1],I=Object(i.useState)((function(){var e=k(0,3);if(0===e){var t,a;"casual"===x?(t=k(1,101),a=k(1,101)):"practical"===x?(t=k(1,501),a=k(1,501)):(t=k(1,1001),a=k(1,1001)),R([Math.min(t,a),Math.max(t,a)]);var i=k(t,a+1),c=k(t,a+1);S(Math.min(i,c)),K(Math.max(i,c))}else if(1===e){var n;n="casual"===x?k(1,3):"practical"===x?k(3,6):k(6,101),R(n);var r=k(n,6*n+1),s=k(n,6*n+1);S(Math.min(r,s)),K(Math.max(r,s))}else{var l;l="casual"===x?k(1,3):"practical"===x?k(3,6):k(6,101),R(l);var o=k(0,l+1),d=k(0,l+1);S(Math.min(o,d)),K(Math.max(o,d))}return e})),D=Object(f.a)(I,2),z=D[0],E=D[1],F=Object(i.useState)((function(){return 5*k(19,31)})),V=Object(f.a)(F,2),W=V[0],A=V[1],H=Object(i.useState)((function(){return"casual"===x?100:5*k(16,21)})),J=Object(f.a)(H,2),P=J[0],U=J[1],X=Object(i.useState)(1),Z=Object(f.a)(X,2),$=Z[0],Q=Z[1],Y=Object(i.useState)(M),ee=Object(f.a)(Y,2),te=ee[0],ae=ee[1],ie=Object(i.useState)([[0,100]]),ce=Object(f.a)(ie,2),ne=ce[0],re=ce[1],se=Object(i.useState)([[0,100]]),le=Object(f.a)(se,2),oe=le[0],de=le[1],ue=Object(i.useState)(0),he=Object(f.a)(ue,2),je=he[0],be=he[1],me=Object(i.useState)(0),Oe=Object(f.a)(me,2),ve=Oe[0],fe=Oe[1],xe=Object(i.useState)(0),pe=Object(f.a)(xe,2),Me=pe[0],ye=pe[1],ge=[[0,.167,.333,.5,.667,.833,1],[0,0,.0278,.0833,.167,.2778,.4167,.583,.722,.833,.917,.972,1],[0,0,0,.00463,.0185,.0463,.0926,.162,.259,.375,.5,.625,.741,.838,.907,.954,.981,.995,1],[0,0,0,0,1/1296,5/1296,15/1296,35/1296,70/1296,126/1296,206/1296,310/1296,435/1296,575/1296,721/1296,861/1296,986/1296,1090/1296,1170/1296,1226/1296,1261/1296,1281/1296,1291/1296,1295/1296,1],[0,0,0,0,0,1/7776,6/7776,21/7776,56/7776,126/7776,252/7776,457/7776,762/7776,1182/7776,1722/7776,2373/7776,3108/7776,.5,4668/7776,5403/7776,6054/7776,6594/7776,7014/7776,7319/7776,7524/7776,7650/7776,7720/7776,7755/7776,7770/7776,7775/7776,1]],_e=[[0,.5,1],[0,.25,.75,1],[0,.125,.5,.875,1],[0,.0625,.3125,.6875,.9375,1],[0,.03125,.1875,.5,.8125,.96875,1]];Object(i.useEffect)((function(){return e=setInterval((function(){te>0&&ae(te-1),0===te&&we(0)}),1e3),function(){clearInterval(e)}}),[te]);var we=function(e){if($<=Math.floor(300/M)){ae(M),function(e){var t=0,a=0;if(0===z)a=(G-_+1)/(L[1]-L[0]+1),t=k(L[0],L[1]+1);else if(1===z){a=L<=5?ge[L-1][G]-ge[L-1][_-1]:N((G-3.5*L)/Math.sqrt(35/12*L))-N((_-3.5*L)/Math.sqrt(35/12*L));for(var i=0;i<L;i++)t+=k(1,7)}else for(a=L<=5?_e[L-1][G+1]-_e[L-1][_]:N((G-.5*L)/Math.sqrt(.25*L))-N((_-.5*L)/Math.sqrt(.25*L)),i=0;i<L;i++)t+=k(0,2);be(t);var r=Math.max(0,Math.floor((a/(P/100)-(1-a)/(W/100))*o));t>=_&&t<=G?(ye(r*W),d((function(){return de([].concat(Object(v.a)(oe),[[$,o+Math.round(r*W/100)]])),o+Math.round(r*W/100)})),fe(e*W),n((function(){return re([].concat(Object(v.a)(ne),[[$,c+Math.round(e*W/100)]])),c+Math.round(e*W/100)}))):(ye(-1*r*P),d((function(){return de([].concat(Object(v.a)(oe),[[$,o-Math.round(r*P/100)]])),o-Math.round(r*P/100)})),fe(-1*e*P),n((function(){return re([].concat(Object(v.a)(ne),[[$,c-Math.round(e*P/100)]])),c===Math.round(e*P/100)&&Q(Math.floor(300/M)+1),c-Math.round(e*P/100)})))}(e),Q($+1);var t=k(0,3);if(0===t){var a,i;"casual"===x?(a=k(1,101),i=k(1,101)):"practical"===x?(a=k(1,501),i=k(1,501)):(a=k(1,1001),i=k(1,1001));var r=k(a,i+1),s=k(a,i+1);R([Math.min(a,i),Math.max(a,i)]),S(Math.min(r,s)),K(Math.max(r,s))}else if(1===t){var l;l="casual"===x?k(1,3):"practical"===x?k(3,6):k(6,101);var u=k(l,6*l+1),h=k(l,6*l+1);R(l),S(Math.min(u,h)),K(Math.max(u,h))}else{var j;j="casual"===x?k(1,3):"practical"===x?k(3,6):k(6,101);var b=k(0,j+1),O=k(0,j+1);R(j),S(Math.min(b,O)),K(Math.max(b,O))}E(t);var f=k(19,31),p=k(16,21);A(5*f),U((function(){return"casual"===x?100:5*p})),m("")}else ae(-1)};return Object(h.jsxs)("div",{children:[$<=Math.floor(300/M)?Object(h.jsxs)("div",{className:p.a.remaining,children:[Object(h.jsxs)("div",{className:p.a.round,children:["Round: ",$]}),Object(h.jsxs)("div",{className:p.a.timer,children:["Time: ",te]})]}):Object(h.jsx)("div",{className:p.a.remaining,children:Object(h.jsx)("div",{children:"Game Over"})}),Object(h.jsxs)("div",{className:p.a.question,children:[Object(h.jsx)("div",{className:p.a.questionType,children:0===z?"Uniform Random Variable between "+L[0]+" and "+L[1]:1===z?"Rolling "+L+(1===L?" die":" dice"):"Flipping "+L+(1===L?" quarter":" quarters")}),Object(h.jsxs)("div",{className:p.a.odds,children:["W/L Odds: ",W,"%, ",P,"%"]}),Object(h.jsx)("div",{className:p.a.questionText,children:0===z?"Landing between "+_+" and "+G+" inclusive":1===z?(1===L?"Value between ":"Sum of values between ")+_+" and "+G+" inclusive":"Landing between "+_+" and "+G+" heads"}),Object(h.jsxs)("div",{className:p.a.delta,children:[Object(h.jsx)("div",{children:ve>=0?"+"+ve:ve}),Object(h.jsxs)("div",{children:["Landed Value: ",je]}),Object(h.jsx)("div",{children:Me>=0?"+"+Me:Me})]})]}),Object(h.jsxs)("div",{className:p.a.terminal,children:[Object(h.jsx)("div",{className:p.a.score,children:c}),Object(h.jsx)("input",{value:b,onKeyDown:function(e){"Enter"===e.key&&""!==b&&b>=0&&b<=c&&we(parseInt(b))},onChange:function(e){(""===e.target.value||/^[0-9]+$/.test(e.target.value))&&m(e.target.value)},placeholder:"Bet amount"}),Object(h.jsx)("div",{className:p.a.score,children:o})]}),Object(h.jsx)("div",{className:p.a.results,children:Object(h.jsx)(w,{history:ne,kellyHistory:oe},$)})]})},q=a(35),T=a.n(q);var G=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:T.a.instruction,children:"Welcome to Trader's Tavern! This tool will help you make decisions on the fly, with the intention of being reminisicent of a trader's environment. Build an intuition for probability distributions by competing against the Kelly Criterion. For now, the different distributions supported are Uniform, Discrete (sum of multiple dice rolls, approaches Gaussian), and Binomial (coin flipping). Select the difficulty below, where each successive level will add complication to the previous one. These complications will take the form of greater variability, and the necessity to make quicker estimates of the respective distributions. A live graph accompanies the game, comparing your score to the Kelly score, to mock the stress that might be involved in a live setting. For the best results, you should not let any biases w.r.t the Kelly Criterion score influence your decisions. Good luck!"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)(l.b,{to:"/kelly-criterion/casual/12",children:Object(h.jsx)("li",{children:"Casual"})}),Object(h.jsx)(l.b,{to:"/kelly-criterion/practical/6",children:Object(h.jsx)("li",{children:"Practical"})}),Object(h.jsx)(l.b,{to:"/kelly-criterion/masochist/3",children:Object(h.jsx)("li",{children:"Masochist"})})]})]})};var K=function(){return Object(h.jsx)(O,{children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/kelly-criterion/",exact:!0,children:Object(h.jsx)(G,{})}),Object(h.jsx)(s.a,{path:"/kelly-criterion/:difficulty/:time",children:Object(h.jsx)(S,{})})]})})};r.a.render(Object(h.jsx)(l.a,{children:Object(h.jsx)(K,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.c2a6d485.chunk.js.map