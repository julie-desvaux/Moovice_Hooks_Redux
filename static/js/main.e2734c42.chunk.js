(this.webpackJsonpmoovice_hooks_redux=this.webpackJsonpmoovice_hooks_redux||[]).push([[0],{49:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){},72:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(0),n=a(15),r=a.n(n),i=(a(57),a(17)),l=a(7),o=a(4),d=a(9),j=a.p+"static/media/Search.71d3acb8.svg",h=a.p+"static/media/MenuIco.76d6ee93.svg",A=a.p+"static/media/Cross.17dba8f1.svg";a(62);function u(){var e=Object(d.c)((function(e){return Object(o.a)({},e.searchTextReducer)})),t=e.searchText,a=e.menu,n=e.smallScreen,r=Object(d.b)();Object(s.useEffect)((function(){var e=window.matchMedia("(max-width: 900px");e.addListener(l),l(e)}),[]);var l=function(e){e.matches?r({type:"SMALL_SCREEN",payload:!0}):r({type:"SMALL_SCREEN",payload:!1})},u=function(){r({type:"SHOW_MENU",payload:!a})};return Object(c.jsxs)("div",{className:"navbar-container",children:[Object(c.jsx)("nav",{className:"navbar-subcontainer",children:(a||!n)&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("ul",{className:"listMenu",children:[Object(c.jsx)("li",{onClick:u,className:"linksNav",children:Object(c.jsx)(i.b,{className:"link",to:"/",children:"Moovice"})}),Object(c.jsx)("li",{onClick:u,className:"linksNav",children:Object(c.jsx)(i.b,{className:"link",to:"/",children:"This Week"})}),Object(c.jsx)("li",{onClick:u,className:"linksNav",children:Object(c.jsx)(i.b,{className:"link",to:"/popular",children:"Popular"})}),Object(c.jsx)("li",{onClick:u,className:"linksNav",children:Object(c.jsx)(i.b,{className:"link",to:"/my_list",children:"My List"})})]}),Object(c.jsx)("ul",{className:"listMenu search-bar",children:Object(c.jsx)("li",{className:"linksNav",children:Object(c.jsxs)("form",{action:"",className:"formSubmit",onSubmit:function(e){e.preventDefault()},children:[Object(c.jsx)("input",{value:t,onChange:function(e){return r({type:"ADD_SEARCH_TEXT",payload:e.target.value})},type:"text",className:"inputSearch",onFocus:function(e){return r({type:"ADD_SEARCH_TEXT",payload:""})}}),Object(c.jsx)(i.b,{className:"link",to:{pathname:"/search/".concat(t)},children:Object(c.jsx)("button",{type:"submit",className:"btn-search",children:Object(c.jsx)("img",{src:j,alt:"icon magnifying glass",className:"logoGlass"})})})]})})})]})}),Object(c.jsx)("div",{className:"menuResBtn",children:Object(c.jsx)("img",{onClick:function(){r({type:"SHOW_MENU",payload:!a})},src:a?A:h,alt:"Menu Icon Responsive",className:"menuIco"})})]})}var O=a(6),b=a.n(O),m=a(11),p={API_ROOT:"https://api.themoviedb.org/3/",IMG_ROOT:"https://image.tmdb.org/t/p/w300",IMG_ACTOR_ROOT:"https://image.tmdb.org/t/p/w200",IMG_BG_ROOT:"http://image.tmdb.org/t/p/w1920_and_h800_multi_faces",TRAILER_ROOT:"https://www.youtube.com/embed/",API_KEY:"d15480851b1c788638106a997f9e5127"},x=a(36),g=a.p+"static/media/placeholder.44f3d8d6.png",C="data:image/png;base64,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",v=a.p+"static/media/picture1.c562342c.png",f=a.p+"static/media/picture2.7f763869.png";a(72);function I(e){var t=e.movie,a=e.actor,s=e.actorMovie;return a?Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:a.profile_path?"".concat(p.IMG_ACTOR_ROOT).concat(a.profile_path):0===a.gender?C:1===a.gender?v:f,alt:"Poster of ".concat(a.name),className:"card-image"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h3",{className:"card-title",children:a.name}),Object(c.jsx)("h4",{children:"Character :"}),Object(c.jsx)("p",{className:"card-txt",children:a.character}),Object(c.jsx)("a",{className:"link",href:"/actor/".concat(a.id),children:Object(c.jsx)("div",{className:"card-btn",children:"Go details"})})]})]}):t?Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:t.poster_path?"".concat(p.IMG_ROOT).concat(t.poster_path):t.name?t.profile_path?"".concat(p.IMG_ACTOR_ROOT).concat(t.profile_path):C:g,alt:t.poster_path?"Poster of ".concat(t.title):t.name?"Picture of ".concat(t.name):"Poster of DVD",className:"card-image"}),Object(c.jsxs)("div",{className:"card-body",children:[t.title?Object(c.jsx)("h3",{className:"card-title",children:t.title}):t.name?Object(c.jsx)("h3",{className:"card-title",children:t.name}):null,t.release_date?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:"Release date :"}),Object(c.jsx)("p",{className:"card-txt",children:t.release_date})]}):null,Object(c.jsx)("a",{className:"link",onClick:x.scroller.scrollTo("container",{duration:150,delay:100,smooth:!0,offset:-500}),href:t.media_type?"person"!==t.media_type?"/".concat(t.media_type,"/").concat(t.id):"/actor/".concat(t.id):"/movie/".concat(t.id),children:Object(c.jsx)("div",{className:"card-btn",children:"Go details"})})]})]}):s?Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:null!==s.poster_path?"".concat(p.IMG_ROOT).concat(s.poster_path):g,alt:null!==s.poster_path?"Poster of ".concat(s.title):"Poster of DVD",className:"card-image"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h3",{className:"card-title",children:s.title}),Object(c.jsx)("h4",{children:"Character :"}),Object(c.jsx)("p",{className:"card-txt",children:s.character}),Object(c.jsx)("a",{className:"link",onClick:x.scroller.scrollTo("container",{duration:150,delay:100,smooth:!0,offset:-500}),href:"/movie/".concat(s.id),children:Object(c.jsx)("div",{className:"card-btn",children:"Go details"})})]})]}):void 0}var E=a(37),N=a.n(E),Q=a(12),B=a.n(Q);function y(){var e=Object(d.c)((function(e){return Object(o.a)({},e.discoverReducer)})).discover,t=Object(d.b)();return Object(s.useEffect)((function(){function e(){return(e=Object(m.a)(b.a.mark((function e(){var a,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N()().format("YYYY-MM-DD"),c=N()().add(7,"days").format("YYYY-MM-DD"),s="".concat(p.API_ROOT,"discover/movie?primary_release_date.gte=").concat(a,"&primary_release_date.lte=").concat(c,"&sort_by=popularity.desc&include_adult=false&include_video=false&api_key=").concat(p.API_KEY),e.next=5,B.a.get(s).then((function(e){t({type:"ADD_DISCOVER",payload:e.data.results})}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),e?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"text-center title",children:"Discover"}),Object(c.jsx)("div",{className:"container-cards",children:e.map((function(e){return Object(c.jsx)(I,{movie:e},e.id)}))})]}):null}function w(){var e=Object(d.c)((function(e){return Object(o.a)({},e.popularReducer)})).popular,t=Object(d.b)();return Object(s.useEffect)((function(){function e(){return(e=Object(m.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(p.API_ROOT,"movie/popular?api_key=").concat(p.API_KEY,"&include_adult=false"),e.next=3,B.a.get(a).then((function(e){t({type:"ADD_POPULAR",payload:e.data.results})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),e?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"text-center title",children:"Popular"}),Object(c.jsx)("div",{className:"container-cards",children:e.map((function(e){return Object(c.jsx)(I,{movie:e},e.id)}))})]}):null}var D=a(24),Y=a(98),M=a(97);function R(e){var t=e.movieDetails,a=e.trailer,n=Object(s.useState)(!1),r=Object(D.a)(n,2),i=r[0],l=r[1],o=function(){return l(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Y.a,{variant:"primary",onClick:function(){return l(!0)},children:"See the trailer"}),Object(c.jsxs)(M.a,{show:i,onHide:o,size:"xl",children:[Object(c.jsx)(M.a.Header,{closeButton:!0,children:Object(c.jsx)(M.a.Title,{children:t.title})}),Object(c.jsx)(M.a.Body,{children:Object(c.jsx)("iframe",{width:"750",height:"420",src:"".concat(p.TRAILER_ROOT).concat(a.key),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(c.jsx)(M.a.Footer,{children:Object(c.jsx)(Y.a,{variant:"secondary",onClick:o,children:"Close"})})]})]})}var T=a.p+"static/media/hourglass.60e97199.svg";a(49);function k(){var e=Object(l.f)(),t=e.media_type,a=e.id,n=Object(d.c)((function(e){return Object(o.a)({},e.movieDetailsReducer)})),r=n.movieDetails,i=n.trailer,j=n.actors,h=Object(d.b)();Object(s.useEffect)((function(){function e(){return(e=Object(m.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(p.API_ROOT).concat(t,"/").concat(a,"?api_key=").concat(p.API_KEY),e.next=3,B.a.get(c).then((function(e){console.log("fetchDataMovieDetails",e.data),e&&h({type:"ADD_MOVIE_DETAILS",payload:e.data})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(m.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(p.API_ROOT).concat(t,"/").concat(a,"/videos?api_key=").concat(p.API_KEY),e.next=3,B.a.get(c).then((function(e){console.log("fetchDataTrailer",e),e&&h({type:"ADD_TRAILER",payload:e.data.results[0]})}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=Object(m.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="",c="tv"===t?"".concat(p.API_ROOT,"tv/").concat(a,"/credits?api_key=").concat(p.API_KEY):"".concat(p.API_ROOT).concat(t,"/").concat(a,"/casts?api_key=").concat(p.API_KEY),e.next=4,B.a.get(c).then((function(e){console.log("fetchDataActors",e),e&&h({type:"ADD_ACTORS",payload:e.data.cast})}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){c.apply(this,arguments)}(),function(){s.apply(this,arguments)}()}),[a,h,t]),console.log("movieDetails :",r);return r&&i&&j?Object(c.jsxs)("div",{className:"container-movie-details",children:[Object(c.jsx)("div",{className:"container-image",style:{backgroundImage:"url(".concat(p.IMG_BG_ROOT).concat(r.backdrop_path,")")},children:Object(c.jsxs)("div",{className:"calque",children:[Object(c.jsx)("div",{className:"subcontainer-poster",children:Object(c.jsx)("img",{className:"poster",src:"".concat(p.IMG_ROOT).concat(r.poster_path),alt:r.title})}),Object(c.jsxs)("div",{className:"subcontainer-details",children:[Object(c.jsx)("h1",{className:"lemon",children:"movie"===t?r.title:r.name}),Object(c.jsx)("h3",{className:"tagline",children:r.tagline}),Object(c.jsx)("div",{className:"movie-details",children:void 0===r.genres?"":r.genres.map((function(e,t){return Object(c.jsx)("div",{className:"movie-genre-item",children:e.name},t)}))}),Object(c.jsxs)("h4",{className:"subtitle lemon",children:["Synopsy : ",Object(c.jsx)("span",{className:"bold-normal",children:r.overview})]}),Object(c.jsxs)("div",{className:"flex",children:[r.release_date?Object(c.jsxs)("h4",{className:"subtitle lemon margin-right",children:["Release date : ",Object(c.jsx)("span",{className:"bold-normal",children:r.release_date})]}):null,r.first_air_date?Object(c.jsxs)("h4",{className:"subtitle lemon margin-right",children:["First air date: ",Object(c.jsx)("span",{className:"bold-normal",children:r.first_air_date})]}):null,r.last_air_date?Object(c.jsxs)("h4",{className:"subtitle lemon margin-right",children:["Last air date: ",Object(c.jsx)("span",{className:"bold-normal",children:r.last_air_date})]}):null,Object(c.jsxs)("h4",{className:"subtitle lemon margin-right",children:["Status : ",Object(c.jsx)("span",{className:"bold-normal",children:r.status})]}),r.runtime?Object(c.jsxs)("div",{className:"subtitle lemon margin-right flex",children:[Object(c.jsx)("img",{className:"img-h4",src:T,alt:"Runtime"}),"  : ",Object(c.jsxs)("span",{className:"bold-normal",children:[" ",function(e){var t=e,a=Math.floor(t/60);return a+"h "+(t-=60*a)+"min"}(r.runtime)]})]}):null,r.number_of_seasons?Object(c.jsxs)("h4",{className:"subtitle lemon margin-right",children:["Season(s) : ",Object(c.jsx)("span",{className:"bold-normal",children:r.number_of_seasons})]}):null,r.number_of_episodes?Object(c.jsxs)("h4",{className:"subtitle lemon margin-right",children:["Episode(s) : ",Object(c.jsx)("span",{className:"bold-normal",children:r.number_of_episodes})]}):null]}),Object(c.jsxs)("div",{className:"flex",children:[r.budget&&0!==r.budget?Object(c.jsxs)("h4",{className:"subtitle lemon margin-right",children:["Budget : ",Object(c.jsxs)("span",{className:"bold-normal",children:["$ ",r.budget]})]}):null,r.revenue&&0!==r.revenue?Object(c.jsxs)("h4",{className:"subtitle lemon",children:["Revenue : ",Object(c.jsxs)("span",{className:"bold-normal",children:["$ ",r.revenue]})]}):null]}),r.homepage?Object(c.jsxs)("h4",{className:"subtitle lemon",children:["Homepage : ",Object(c.jsx)("span",{className:"bold-normal",children:Object(c.jsx)("a",{className:"font-size-1",href:r.homepage,children:r.homepage})})]}):null,void 0===i.id?"":Object(c.jsx)(R,{movieDetails:r,trailer:i})]})]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"title",children:"Actors"}),Object(c.jsx)("div",{className:"container-cards",children:j.map((function(e){return Object(c.jsx)(I,{actor:e},e.id)}))})]})]}):null}function S(){var e=Object(l.f)().search,t=Object(s.useState)(null),a=Object(D.a)(t,2),n=a[0],r=a[1],i=Object(d.b)();return Object(s.useEffect)((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(p.API_ROOT,"search/multi?include_adult=false&api_key=").concat(p.API_KEY,"&query=").concat(e),t.next=3,B.a.get(a).then((function(e){r(e.data.results)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,i]),console.log("searchList",n),n?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("h1",{className:"text-center title",children:["Result for : ",e]}),Object(c.jsx)("div",{className:"container-cards",children:n.map((function(e){return Object(c.jsx)(I,{movie:e},e.id)}))})]}):null}function L(){var e=Object(l.f)().id,t=Object(d.c)((function(e){return Object(o.a)({},e.actorDetailsReducer)})),a=t.actorDetails,n=t.actorMoviesList,r=t.actorTvList,i=Object(d.b)();return Object(s.useEffect)((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(p.API_ROOT,"person/").concat(e,"?api_key=").concat(p.API_KEY),t.next=3,B.a.get(a).then((function(e){i({type:"ADD_ACTOR_DETAILS",payload:e.data})}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(m.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(p.API_ROOT,"person/").concat(e,"/movie_credits?api_key=").concat(p.API_KEY),t.next=3,B.a.get(a).then((function(e){i({type:"ADD_ACTOR_MOVIES_LIST",payload:e.data.cast})}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return(c=Object(m.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(p.API_ROOT,"person/").concat(e,"/tv_credits?api_key=").concat(p.API_KEY),t.next=3,B.a.get(a).then((function(e){i({type:"ADD_ACTOR_TV_LIST",payload:e.data.cast})}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),function(){a.apply(this,arguments)}(),function(){c.apply(this,arguments)}()}),[e,i]),a&&n?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"container-image",children:Object(c.jsxs)("div",{className:"calque",children:[Object(c.jsx)("div",{className:"subcontainer-poster",children:a.profile_path?Object(c.jsx)("img",{className:"poster",src:"".concat(p.IMG_ROOT).concat(a.profile_path),alt:a.name}):null}),Object(c.jsxs)("div",{className:"subcontainer-details",children:[Object(c.jsx)("h1",{className:"lemon",children:a.name}),Object(c.jsx)("p",{className:"tagline",children:a.biography}),Object(c.jsxs)("div",{className:"details",children:[a.birthday?Object(c.jsxs)("h4",{className:"subtitle",children:["Birthday : ",Object(c.jsx)("span",{className:"bold-normal",children:a.birthday})]}):null,a.homepage?Object(c.jsxs)("h4",{className:"subtitle",children:["Homepage : ",Object(c.jsx)("span",{className:"bold-normal",children:Object(c.jsx)("a",{className:"font-size-1",href:a.homepage,children:a.homepage})})]}):null]})]})]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"title",children:"Filmography"}),Object(c.jsx)("div",{className:"container-cards",children:n.map((function(e){return Object(c.jsx)(I,{actorMovie:e},e.id)}))})]}),r?Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"title",children:"TV"}),Object(c.jsx)("div",{className:"container-cards",children:r.map((function(e){return Object(c.jsx)(I,{actorMovie:e},e.id)}))})]}):null]}):null}var W=function(){return Object(c.jsxs)(i.a,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(y,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/popular",children:Object(c.jsx)(w,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/search/:search",children:Object(c.jsx)(S,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/actor/:id",children:Object(c.jsx)(L,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/:media_type/:id",children:Object(c.jsx)(k,{})})]})]})},F=a(19),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{discover:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISCOVER":return Object(o.a)(Object(o.a)({},e),{},{discover:t.payload});default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{popular:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POPULAR":return Object(o.a)(Object(o.a)({},e),{},{popular:t.payload});default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movieDetails:"",trailer:"",actors:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVIE_DETAILS":return Object(o.a)(Object(o.a)({},e),{},{movieDetails:t.payload});case"ADD_TRAILER":return Object(o.a)(Object(o.a)({},e),{},{trailer:t.payload});case"ADD_ACTORS":return Object(o.a)(Object(o.a)({},e),{},{actors:t.payload});default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchText:"",searchList:"",menu:!1,smallScreen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SEARCH_TEXT":return Object(o.a)(Object(o.a)({},e),{},{searchText:t.payload});case"ADD_SEARCH_LIST":return Object(o.a)(Object(o.a)({},e),{},{searchList:t.payload});case"SHOW_MENU":return Object(o.a)(Object(o.a)({},e),{},{menu:t.payload});case"SMALL_SCREEN":return Object(o.a)(Object(o.a)({},e),{},{smallScreen:t.payload});default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{actorDetails:"",actorMoviesList:"",actorTvList:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ACTOR_DETAILS":return Object(o.a)(Object(o.a)({},e),{},{actorDetails:t.payload});case"ADD_ACTOR_MOVIES_LIST":return Object(o.a)(Object(o.a)({},e),{},{actorMoviesList:t.payload});case"ADD_ACTOR_TV_LIST":return Object(o.a)(Object(o.a)({},e),{},{actorTvList:t.payload});default:return e}},U=(a(93),Object(F.c)({discoverReducer:G,popularReducer:V,movieDetailsReducer:K,searchTextReducer:P,actorDetailsReducer:_})),z=Object(F.a)()(F.d)(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(c.jsx)(d.a,{store:z,children:Object(c.jsx)(W,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.e2734c42.chunk.js.map