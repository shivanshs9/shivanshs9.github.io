(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{258:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});a(4),a(3),a(2),a(11),a(47),a(63),a(147);var n=a(0),r=a.n(n),o=a(264),i=a(270),l=a(266);t.default=function(e){var t=e.data.allMarkdownRemark,a={};t.edges.forEach(function(e){e.node.frontmatter.tags.forEach(function(e){a[e]?a[e]+=1:a[e]=1})});var n=Array.from(Object.keys(a)).sort(function(e,t){return a[t]-a[e]});return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:15}},r.a.createElement(o.a,null),r.a.createElement("div",{className:"col order-2"},n.map(function(e){return r.a.createElement(i.a,{name:e,key:e,count:a[e]})}))),r.a.createElement(l.a,{title:"Tags",url:"/tags/",siteTitleAlt:"Shivansh Saini",isPost:!1,description:"Tags Page",image:"https://i.imgur.com/M795H8A.jpg"}))};var m="3215885689"},263:function(e){e.exports={data:{all:{totalCount:2},limited:{latestPosts:[{node:{fields:{slug:"/summers/gsoc/2019-videolan-report"},frontmatter:{id:"GSoC-2019_Final-Report",title:"GSoC 2019 @ VideoLAN | Testing VLC Android",url:"/summers/gsoc/2019-videolan-report",date:"2019-08-23T20:30:47.156Z",tags:["GSoC","VideoLAN","VLC","Android","Tests"],description:"“Tests are stories we tell the next generation of programmers on a project.”",headerImage:"https://i.imgur.com/vBFlDzY.png"}}},{node:{fields:{slug:"/medium/drf-problems-21f7bb4d4675"},frontmatter:{id:"drf-problems-21f7bb4d4675",title:"DRF-Problems: Finally a Django library which implements RFC 7807!",url:"/medium/drf-problems-21f7bb4d4675",date:"2019-06-07T23:30:47.156Z",tags:["Python","Django"],description:"Introduce problem model with your application errors!",headerImage:"https://cdn-images-1.medium.com/max/2560/1*K9Z-b-LPo60LFSUkl-mrUg.png"}}}]}}}},264:function(e,t,a){"use strict";a(16);var n=a(263),r=a(0),o=a.n(r),i=a(46),l=a(109),m=a(5),c=(a(240),function(e){var t=e.posts;return o.a.createElement("div",{className:"latest-post"},o.a.createElement("p",null,"Latest Posts"),t.map(function(e){var t=e.node;return o.a.createElement(i.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)}))}),s=(a(241),function(e){var t=e.totalCount,a=e.posts;return o.a.createElement("div",{className:"d-none d-lg-block information my-2"},o.a.createElement("hr",null),o.a.createElement("p",null,t,"  posts"),o.a.createElement("hr",null),o.a.createElement(c,{posts:a}))});s.defaultProps={posts:[]};var u=s,p=(a(242),m.config.wordings),d=void 0===p?[]:p,f=m.config.githubUsername,g=m.config.email,E=m.config.profileImg,h=m.config.about,b=m.config.facebook,v=m.config.medium,y=m.config.linkedin,w=function(){window.open("https://drive.google.com/file/d/1XsZ-coaklQNZrXsdGmNkp3B-t52t_nmv/view","_blank")},k=function(e){var t=e.href,a=e.icon;return o.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},o.a.createElement("span",{className:"fa-layers fa-fw fa-lg"},o.a.createElement(l.a,{icon:a})))},N=function(e){var t=e.totalCount,a=e.latestPosts;return o.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},o.a.createElement("div",{className:"about-me"},o.a.createElement(i.Link,{to:h,href:h,className:"name"},o.a.createElement("img",{className:"avatar",src:E,alt:"shivanshs9"}),o.a.createElement("h4",null,"Shivansh Saini")),o.a.createElement("p",{className:"mb-3"},d[0]," // ",d[1]),o.a.createElement(k,{href:"https://github.com/"+f,icon:["fab","github"]}),y&&o.a.createElement(k,{href:"https://linkedin.com/in/"+y+"/",icon:["fab","linkedin"]}),v&&o.a.createElement(k,{href:"https://medium.com/@"+v+"/",icon:["fab","medium"]}),b&&o.a.createElement(k,{href:"https://www.facebook.com/"+b+"/",icon:["fab","facebook"]}),o.a.createElement(k,{href:"mailto:"+g,icon:["far","envelope"]}),o.a.createElement("div",{className:"link-resume",onClick:w},"Resume"),o.a.createElement(u,{totalCount:t,posts:a})))};N.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return o.a.createElement(i.StaticQuery,{query:"1307080370",render:function(e){return o.a.createElement(N,Object.assign({},e.all,e.limited))},data:n})}},266:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(110),i=a.n(o),l=a(5),m=a.n(l),c=function(e){var t=e.url,a=e.title,n=e.description,o=e.image,l=(e.siteTitleAlt,e.isPost);return r.a.createElement(i.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:o}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,o=e.image,i=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:o}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:o},description:i}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),l?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:o}),r.a.createElement("meta",{property:"fb:app_id",content:m.a.siteFBAppID?m.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:m.a.twitter_username?m.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:o}))};c.defaultProps={title:m.a.title},t.a=c},270:function(e,t,a){"use strict";a(20);var n=a(0),r=a.n(n),o=function(e){var t=e.name,a=e.count;return r.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a&&"("+a+")")};o.defaultProps={count:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-tags-js-ffa70aa13116e1bce70c.js.map