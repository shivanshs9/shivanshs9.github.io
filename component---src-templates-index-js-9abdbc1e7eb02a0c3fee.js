(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+rFB":function(e,t,a){},"/d1K":function(e,t,a){"use strict";a("E5k/");var r=a("Rwg6"),n=a("q1tI"),o=a.n(n),l=a("Wbzz"),c=a("IP2g"),i=a("8tEE"),s=a("KSab"),m=(a("qfuT"),function(e){var t=e.posts;return o.a.createElement("div",{className:"latest-post"},o.a.createElement("p",null,"Latest Posts"),t.map((function(e){var t=e.node;return o.a.createElement(l.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),u=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return o.a.createElement("div",{className:"d-none d-lg-block information my-2"},o.a.createElement("hr",null),o.a.createElement("p",null,t,"  posts"),o.a.createElement("hr",null),o.a.createElement(m,{posts:a}))});u.defaultProps={posts:[]};var f=u,d=(a("YX5f"),s.config.wordings),g=void 0===d?[]:d,h=s.config.githubUsername,p=s.config.email,E=s.config.profileImg,b=s.config.about,v=s.config.facebook,k=s.config.medium,N=s.config.linkedin,x=s.config.keybase,w=function(e){var t=e.href,a=e.icon,r=e.title;return o.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon",title:r},o.a.createElement("span",{className:"fa-layers fa-fw fa-lg"},o.a.createElement(c.a,{icon:a})))},y=function(e){var t=e.totalCount,a=e.latestPosts;return o.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},o.a.createElement("div",{className:"about-me"},o.a.createElement(l.Link,{to:b,href:b,className:"name"},o.a.createElement("img",{className:"avatar",src:E,alt:"shivanshs9"}),o.a.createElement("h4",null,"Shivansh Saini")),o.a.createElement("p",{className:"mb-3"},g[0]," // ",g[1]),x&&o.a.createElement(w,{href:"https://keybase.io/"+x,icon:i.f,title:"Keybase"}),o.a.createElement(w,{href:"https://github.com/"+h,icon:["fab","github"],title:"Github"}),N&&o.a.createElement(w,{href:"https://linkedin.com/in/"+N+"/",icon:["fab","linkedin"],title:"Linkedin"}),k&&o.a.createElement(w,{href:"https://medium.com/@"+k+"/",icon:["fab","medium"],title:"Medium"}),v&&o.a.createElement(w,{href:"https://www.facebook.com/"+v+"/",icon:["fab","facebook"],title:"Facebook"}),o.a.createElement(w,{href:"mailto:"+p,icon:["far","envelope"],title:"Email"}),o.a.createElement("a",{target:"_blank",rel:"external nofollow noopener noreferrer",className:"link-resume",href:"https://drive.google.com/file/d/1XsZ-coaklQNZrXsdGmNkp3B-t52t_nmv/view"},"Resume"),o.a.createElement(f,{totalCount:t,posts:a})))};y.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return o.a.createElement(l.StaticQuery,{query:"1307080370",render:function(e){return o.a.createElement(y,Object.assign({},e.all,e.limited))},data:r})}},"9UDz":function(e,t,a){},Jz1z:function(e,t,a){"use strict";a("pJf4");var r=a("q1tI"),n=a.n(r),o=function(e){var t=e.name,a=e.count;return n.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a&&"("+a+")")};o.defaultProps={count:""},t.a=o},Nlzp:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return s}));a("n0hJ"),a("Ll4R");var r=a("Wgwc"),n=a.n(r),o=a("KSab"),l=(o.config.maxPostsInPage,function(){return"undefined"!=typeof window}),c=function(e){return n()(e).format("DD/MM/YYYY")},i=function(e){return n()(e).format("YYYY, MMM DD | HH:mm")},s=function(e){return n()(e).format("MMM, YYYY")},m=function(e,t){if(!t)return"Working";var a=n()(e),r=n()(t),o=r.diff(a,"hour");if(o<=24)return o+" hour"+(o>1?"s":"");var l=r.diff(a,"day");if(l<=30)return l+" day"+(l>1?"s":"");var c=r.diff(a,"month");return c+" month"+(c>1?"s":"")}},Rwg6:function(e){e.exports=JSON.parse('{"data":{"all":{"totalCount":3},"limited":{"latestPosts":[{"node":{"fields":{"slug":"/medium/codefest19-hacking-mvp-ca7dcf329208"},"frontmatter":{"id":"CF2019-Haxplore-Hacking-A-MVP","title":"Hacking away an MVP in 24 hours","url":"/medium/codefest19-hacking-mvp-ca7dcf329208","date":"2019-08-26T20:19:47.156Z","tags":["Hackathon","WeekendOfCode","CodeFest","AWS","TeamWork","WebSockets","ML","Django"],"description":"How I spent a weekend building product from scratch in an awesome team and winning it!","headerImage":"https://cdn-images-1.medium.com/max/2560/1*hXNXQJ2pfjnI-A8sEl2xtA.jpeg"}}},{"node":{"fields":{"slug":"/summers/gsoc/2019-videolan-report"},"frontmatter":{"id":"GSoC-2019_Final-Report","title":"GSoC 2019 @ VideoLAN | Testing VLC Android","url":"/summers/gsoc/2019-videolan-report","date":"2019-08-23T16:00:47.156Z","tags":["GSoC","VideoLAN","VLC","Android","Tests"],"description":"“Tests are stories we tell the next generation of programmers on a project.”","headerImage":"https://i.imgur.com/vBFlDzY.png"}}},{"node":{"fields":{"slug":"/medium/drf-problems-21f7bb4d4675"},"frontmatter":{"id":"drf-problems-21f7bb4d4675","title":"DRF-Problems: Finally a Django library which implements RFC 7807!","url":"/medium/drf-problems-21f7bb4d4675","date":"2019-06-07T23:30:47.156Z","tags":["Python","Django"],"description":"Introduce problem model with your application errors!","headerImage":"https://cdn-images-1.medium.com/max/2560/1*K9Z-b-LPo60LFSUkl-mrUg.png"}}}]}}}')},TRom:function(e,t,a){"use strict";a.r(t);a("E5k/");var r=a("q1tI"),n=a.n(r),o=a("+ZDr"),l=a.n(o),c=a("ZO1O"),i=a("/d1K"),s=a("U2Z3"),m=(a("VYsE"),function(e){var t=e.color,a=e.text;return n.a.createElement("div",{className:"navlink",style:{color:t}},a)}),u=function(e){var t=e.test,a=e.url,r=e.text;return t?n.a.createElement(l.a,{to:""+a},n.a.createElement(m,{color:"#66ccff",text:r})):n.a.createElement(m,{color:"#7d7d7d",text:r})};t.default=function(e){var t=e.pageContext,a=e.location,r=t.group,o=t.index,l=t.first,m=t.last,f=t.pathPrefix,d=o-1==1?"":"/"+f+"/"+(o-1),g="/"+f+"/"+(o+1);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row homepage",style:{marginTop:20}},n.a.createElement(i.a,null),n.a.createElement("div",{className:"col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2"},r.map((function(e){var t=e.node;return n.a.createElement(c.a,Object.assign({},t.frontmatter,{url:t.frontmatter.slug?t.frontmatter.slug:t.fields.slug,key:t.fields.slug}))})),n.a.createElement("div",{className:"row",style:{justifyContent:"space-around",marginBottom:"20px"}},n.a.createElement("div",{className:"previousLink"},n.a.createElement(u,{test:!l,url:d,text:"Previous"})),n.a.createElement("div",{className:"nextLink"},n.a.createElement(u,{test:!m,url:g,text:"Next"})))),n.a.createElement("div",{className:"col-xl-2 col-lg-1 order-3"})),n.a.createElement(s.a,{url:a.href,hasCommentBox:!1}))}},U2Z3:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("0b+E"),l=a("IP2g"),c=(a("+rFB"),function(){return n.a.createElement("a",{className:"share-button",style:{lineHeight:"1.7rem",color:"#337ab7",paddingLeft:"0.15rem"},href:"#gitalk-container",onClick:function(){return o.a.event({category:"User",action:"Goto Comment Box"})}},n.a.createElement(l.a,{icon:["far","comment"]}))}),i=function(e){var t=e.url,a=e.hasCommentBox;return n.a.createElement("div",{className:"m-share-box"},n.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+t,title:"",className:"share-button",onClick:function(){return o.a.event({category:"Share",action:"Facebook Share"})}},n.a.createElement(l.a,{icon:["fab","facebook-f"]})),a&&n.a.createElement(c,null),n.a.createElement("a",{className:"share-button",href:"#header",onClick:function(){o.a.event({category:"User",action:"Scroll to Top"})},style:{lineHeight:"1.7rem",paddingLeft:"0.1rem"}},n.a.createElement(l.a,{icon:["fas","chevron-up"]})))};i.defaultProps={hasCommentBox:!0},t.a=i},VYsE:function(e,t,a){},YX5f:function(e,t,a){},ZO1O:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),l=a("Jz1z"),c=a("f/UQ"),i=a("Nlzp"),s=(a("9UDz"),function(e){var t,a,r=e.url,l=e.image,i=e.backgroundColor;return n.a.createElement(o.Link,{to:r,href:r},n.a.createElement("div",{className:"wrapper",style:(t=l,a=i,{backgroundColor:"#"+a,backgroundImage:" url("+Object(c.parseImgur)(t,"large")+")"})}))}),m=function(e){var t=e.title,a=e.date,r=e.url,c=e.headerImage,m=e.headerBackgroundColor,u=e.description,f=e.tags,d=void 0===f?[]:f;return n.a.createElement("div",{className:"col-sm-12 pb-4"},n.a.createElement("div",{className:"custom-card"},c&&n.a.createElement(s,{url:r,image:c,backgroundColor:m}),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"stats"},n.a.createElement("span",{className:"date"},Object(i.c)(a)),d&&d.map((function(e){return n.a.createElement(l.a,{name:e,key:e})}))),n.a.createElement(o.Link,{to:r,href:r},n.a.createElement("h4",{className:"title"},t)),n.a.createElement("p",null,u),n.a.createElement(o.Link,{to:r,href:r},"Read more...")))))};m.defaultProps={headerImage:"",tags:[],date:"",headerBackgroundColor:""},t.a=m},"f/UQ":function(e,t,a){a("sC2a"),a("Ll4R");var r=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("http")&&!e.match("imgur.com"))return e;if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},n=function(e){var t=e.href,a=e.title,n=e.text;return'<img class="lozad d-block mx-auto" data-src='+r(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(a,n)+" />"};e.exports={parseImgur:r,parseImageTag:n,getGalleryImage:function(e){var t=e.href,a=e.title,o=e.text;return'<a data-fancybox="gallery" href="'+r(t,"huge")+'">'+n({href:t,title:a,text:o})+"</a>"}}},qfuT:function(e,t,a){},usu3:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-index-js-9abdbc1e7eb02a0c3fee.js.map