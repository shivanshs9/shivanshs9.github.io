(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{252:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});a(16);var n=a(0),r=a.n(n),o=a(278),i=a(266),l=a(264);t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.edges,c=a.tag;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:15}},r.a.createElement(l.a,null),r.a.createElement("div",{className:"col-xl-10 col-lg-7 col-md-12 col-xs-12 order-2"},r.a.createElement("div",{className:"col-12",style:{fontSize:20,margin:15}},n.length," Articles in ",c),n.map(function(e){var t=e.node;return r.a.createElement(o.a,Object.assign({},t.frontmatter,{key:t.id}))})),r.a.createElement("div",{className:"col-xl-2 col-lg-1 order-3"})),r.a.createElement(i.a,{title:c,url:"/tag/"+c,siteTitleAlt:"Shivansh Saini",isPost:!1,description:c,image:"https://i.imgur.com/63BR8Nf.jpg"}))};var c="704583718"},263:function(e){e.exports={data:{all:{totalCount:3},limited:{latestPosts:[{node:{fields:{slug:"/medium/codefest19-hacking-mvp-ca7dcf329208"},frontmatter:{id:"CF2019-Haxplore-Hacking-A-MVP",title:"Hacking away an MVP in 24 hours",url:"/medium/codefest19-hacking-mvp-ca7dcf329208",date:"2019-08-26T20:19:47.156Z",tags:["Hackathon","WeekendOfCode","CodeFest","AWS","TeamWork","WebSockets","ML","Django"],description:"How I spent a weekend building product from scratch in an awesome team and winning it!",headerImage:"https://cdn-images-1.medium.com/max/2560/1*3XTLG6aPG0jQOe6zzWfIBQ.png"}}},{node:{fields:{slug:"/summers/gsoc/2019-videolan-report"},frontmatter:{id:"GSoC-2019_Final-Report",title:"GSoC 2019 @ VideoLAN | Testing VLC Android",url:"/summers/gsoc/2019-videolan-report",date:"2019-08-23T16:00:47.156Z",tags:["GSoC","VideoLAN","VLC","Android","Tests"],description:"“Tests are stories we tell the next generation of programmers on a project.”",headerImage:"https://i.imgur.com/vBFlDzY.png"}}},{node:{fields:{slug:"/medium/drf-problems-21f7bb4d4675"},frontmatter:{id:"drf-problems-21f7bb4d4675",title:"DRF-Problems: Finally a Django library which implements RFC 7807!",url:"/medium/drf-problems-21f7bb4d4675",date:"2019-06-07T23:30:47.156Z",tags:["Python","Django"],description:"Introduce problem model with your application errors!",headerImage:"https://cdn-images-1.medium.com/max/2560/1*K9Z-b-LPo60LFSUkl-mrUg.png"}}}]}}}},264:function(e,t,a){"use strict";a(16);var n=a(263),r=a(0),o=a.n(r),i=a(46),l=a(109),c=a(5),m=(a(240),function(e){var t=e.posts;return o.a.createElement("div",{className:"latest-post"},o.a.createElement("p",null,"Latest Posts"),t.map(function(e){var t=e.node;return o.a.createElement(i.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)}))}),s=(a(241),function(e){var t=e.totalCount,a=e.posts;return o.a.createElement("div",{className:"d-none d-lg-block information my-2"},o.a.createElement("hr",null),o.a.createElement("p",null,t,"  posts"),o.a.createElement("hr",null),o.a.createElement(m,{posts:a}))});s.defaultProps={posts:[]};var u=s,d=(a(242),c.config.wordings),f=void 0===d?[]:d,g=c.config.githubUsername,p=c.config.email,h=c.config.profileImg,E=c.config.about,v=c.config.facebook,b=c.config.medium,k=c.config.linkedin,y=function(){window.open("https://drive.google.com/file/d/1XsZ-coaklQNZrXsdGmNkp3B-t52t_nmv/view","_blank")},w=function(e){var t=e.href,a=e.icon;return o.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},o.a.createElement("span",{className:"fa-layers fa-fw fa-lg"},o.a.createElement(l.a,{icon:a})))},N=function(e){var t=e.totalCount,a=e.latestPosts;return o.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},o.a.createElement("div",{className:"about-me"},o.a.createElement(i.Link,{to:E,href:E,className:"name"},o.a.createElement("img",{className:"avatar",src:h,alt:"shivanshs9"}),o.a.createElement("h4",null,"Shivansh Saini")),o.a.createElement("p",{className:"mb-3"},f[0]," // ",f[1]),o.a.createElement(w,{href:"https://github.com/"+g,icon:["fab","github"]}),k&&o.a.createElement(w,{href:"https://linkedin.com/in/"+k+"/",icon:["fab","linkedin"]}),b&&o.a.createElement(w,{href:"https://medium.com/@"+b+"/",icon:["fab","medium"]}),v&&o.a.createElement(w,{href:"https://www.facebook.com/"+v+"/",icon:["fab","facebook"]}),o.a.createElement(w,{href:"mailto:"+p,icon:["far","envelope"]}),o.a.createElement("div",{className:"link-resume",onClick:y},"Resume"),o.a.createElement(u,{totalCount:t,posts:a})))};N.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return o.a.createElement(i.StaticQuery,{query:"1307080370",render:function(e){return o.a.createElement(N,Object.assign({},e.all,e.limited))},data:n})}},265:function(e,t,a){"use strict";var n=a(29),r=a(146),o=a(28);e.exports=function(e){for(var t=n(this),a=o(t.length),i=arguments.length,l=r(i>1?arguments[1]:void 0,a),c=i>2?arguments[2]:void 0,m=void 0===c?a:r(c,a);m>l;)t[l++]=e;return t}},266:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(110),i=a.n(o),l=a(5),c=a.n(l),m=function(e){var t=e.url,a=e.title,n=e.description,o=e.image,l=(e.siteTitleAlt,e.isPost);return r.a.createElement(i.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:o}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,o=e.image,i=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:o}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:o},description:i}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),l?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:o}),r.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID?c.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:c.a.twitter_username?c.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:o}))};m.defaultProps={title:c.a.title},t.a=m},268:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"c",function(){return l}),a.d(t,"d",function(){return c}),a.d(t,"a",function(){return s}),a.d(t,"e",function(){return m});a(272),a(50);var n=a(111),r=a.n(n),o=a(5),i=(o.config.maxPostsInPage,function(){return"undefined"!=typeof window}),l=function(e){return r()(e).format("DD/MM/YYYY")},c=function(e){return r()(e).format("YYYY, MMM DD | HH:mm")},m=function(e){return r()(e).format("MMM, YYYY")},s=function(e,t){if(!t)return"Working";var a=r()(e),n=r()(t),o=n.diff(a,"hour");if(o<=24)return o+" hour"+(o>1?"s":"");var i=n.diff(a,"day");if(i<=30)return i+" day"+(i>1?"s":"");var l=n.diff(a,"month");return l+" month"+(l>1?"s":"")}},270:function(e,t,a){"use strict";a(20);var n=a(0),r=a.n(n),o=function(e){var t=e.name,a=e.count;return r.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a&&"("+a+")")};o.defaultProps={count:""},t.a=o},271:function(e,t,a){a(7),a(50);var n=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},r=function(e){var t=e.href,a=e.title,r=e.text;return'<img class="lozad d-block mx-auto" data-src='+n(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(a,r)+" />"};e.exports={parseImgur:n,parseImageTag:r,getGalleryImage:function(e){var t=e.href,a=e.title,o=e.text;return'<a data-fancybox="gallery" href="'+n(t,"huge")+'">'+r({href:t,title:a,text:o})+"</a>"}}},272:function(e,t,a){var n=a(8);n(n.P,"Array",{fill:a(265)}),a(81)("fill")},278:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(46),i=a(270),l=a(271),c=a(268),m=(a(244),function(e){var t,a,n=e.url,i=e.image,c=e.backgroundColor;return r.a.createElement(o.Link,{to:n,href:n},r.a.createElement("div",{className:"wrapper",style:(t=i,a=c,{backgroundColor:"#"+a,backgroundImage:" url("+Object(l.parseImgur)(t,"large")+")"})}))}),s=function(e){var t=e.title,a=e.date,n=e.url,l=e.headerImage,s=e.headerBackgroundColor,u=e.description,d=e.tags,f=void 0===d?[]:d;return r.a.createElement("div",{className:"col-sm-12 pb-4"},r.a.createElement("div",{className:"custom-card"},l&&r.a.createElement(m,{url:n,image:l,backgroundColor:s}),r.a.createElement("div",{className:"data"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"stats"},r.a.createElement("span",{className:"date"},Object(c.c)(a)),f&&f.map(function(e){return r.a.createElement(i.a,{name:e,key:e})})),r.a.createElement(o.Link,{to:n,href:n},r.a.createElement("h4",{className:"title"},t)),r.a.createElement("p",null,u),r.a.createElement(o.Link,{to:n,href:n},"Read more...")))))};s.defaultProps={headerImage:"",tags:[],date:"",headerBackgroundColor:""},t.a=s}}]);
//# sourceMappingURL=component---src-templates-tag-js-3600efff99818325e060.js.map