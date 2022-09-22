(this["webpackJsonptrending-movies"]=this["webpackJsonptrending-movies"]||[]).push([[5],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var r=n(58),a=n.n(r),c=n(59),s=n(60),i=n(0),o=n(2),u=n(15),l=n(57),j=n(17),b=n(96),p=n.n(b),f=n(1),d=function(){return Object(f.jsx)("button",{type:"button",className:p.a.button_comeBack,onClick:function(){window.history.back()},children:"Back"})},v=n(97),O=n.n(v);function h(e){var t=e.movie,n=t.release_date.slice(0,4);return Object(f.jsxs)("div",{className:O.a.card,children:[Object(f.jsx)("img",{src:l.f+t.poster_path,alt:t.title,width:"290",height:"402"}),Object(f.jsxs)("div",{className:O.a.discr,children:[Object(f.jsxs)("h1",{children:[t.title," (",n,")"]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:O.a.text,children:" User score:"})," ",t.vote_average]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:O.a.text,children:" Overview:"})," ",t.overview]}),Object(f.jsxs)("ul",{className:O.a.genre_list,children:[Object(f.jsx)("span",{className:O.a.text,children:"Genres:"}),t.genres.map((function(e){return Object(f.jsx)("li",{className:O.a.genre_item,children:e.name},e.id)}))]})]})]})}var x=n(65),m=n(9),g=n(98),_=n.n(g);function w(){var e=Object(o.h)(),t=Object(o.j)().url;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Additional information:"}),Object(f.jsxs)("ul",{className:_.a.list,children:[Object(f.jsx)("li",{children:Object(f.jsx)(m.c,{to:{pathname:"".concat(t,"/cast"),state:Object(x.a)({},e.state)},className:_.a.link,activeClassName:_.a.activeLink,children:"Cast"})}),Object(f.jsx)("li",{children:Object(f.jsx)(m.c,{to:{pathname:"".concat(t,"/reviews"),state:Object(x.a)({},e.state)},className:_.a.link,activeClassName:_.a.activeLink,children:"Reviews"})})]})]})}var k=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,102))})),y=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,103))}));function N(){var e=Object(o.i)().movieId,t=Object(o.g)(),n=Object(o.j)().path,r=Object(i.useState)(null),b=Object(s.a)(r,2),p=b[0],v=b[1],O=Object(i.useState)("idle"),x=Object(s.a)(O,2),m=x[0],g=x[1];return Object(i.useEffect)((function(){function n(){return(n=Object(c.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g("pending"),n.next=4,l.b(e);case 4:if(r=n.sent){n.next=8;break}throw t.push("/"),new Error;case 8:v(r),g("resolved"),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),g("rejected"),u.b.error("Not found");case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t,e]),Object(f.jsxs)(f.Fragment,{children:["pending"===m&&Object(f.jsx)(j.a,{}),Object(f.jsx)(d,{}),p&&Object(f.jsx)(h,{movie:p}),p&&Object(f.jsx)(w,{}),Object(f.jsx)(i.Suspense,{fallback:Object(f.jsx)(j.a,{}),children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{path:"".concat(n,"/cast"),children:Object(f.jsx)(k,{})}),Object(f.jsx)(o.b,{path:"".concat(n,"/reviews"),children:Object(f.jsx)(y,{})})]})})]})}},57:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"f",(function(){return f}));var r=n(58),a=n.n(r),c=n(59),s=n(61),i=n.n(s);i.a.defaults.baseURL="https://api.themoviedb.org/3";var o="e46b87edbe0418b9678f5579382a8e13",u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/trending/movie/week?api_key=".concat(o));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=").concat(n,"&language=en-US"));case 2:return r=e.sent,c=r.data.results,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data.results,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f="https://image.tmdb.org/t/p/w500"},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(18);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},96:function(e,t,n){e.exports={button_comeBack:"GoBack_button_comeBack__3IG1y"}},97:function(e,t,n){e.exports={card:"MovieDetailsInfo_card__1_zqx",discr:"MovieDetailsInfo_discr__3fDtY",text:"MovieDetailsInfo_text__fw62K"}},98:function(e,t,n){e.exports={list:"MovieNavigation_list__36LH9",link:"MovieNavigation_link__7lriW",activeLink:"MovieNavigation_activeLink__gmf5b"}}}]);
//# sourceMappingURL=5.40fb9e27.chunk.js.map