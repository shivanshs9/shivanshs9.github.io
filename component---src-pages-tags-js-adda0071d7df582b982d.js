(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/d1K":function(e,t,a){"use strict";a("E5k/");var n=a("Rwg6"),r=a("q1tI"),o=a.n(r),i=a("Wbzz"),l=a("IP2g"),c=a("8tEE"),m=a("KSab"),s=(a("qfuT"),function(e){var t=e.posts;return o.a.createElement("div",{className:"latest-post"},o.a.createElement("p",null,"Latest Posts"),t.map((function(e){var t=e.node;return o.a.createElement(i.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),u=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return o.a.createElement("div",{className:"d-none d-lg-block information my-2"},o.a.createElement("hr",null),o.a.createElement("p",null,t,"  posts"),o.a.createElement("hr",null),o.a.createElement(s,{posts:a}))});u.defaultProps={posts:[]};var d=u,p=(a("YX5f"),m.config.wordings),f=void 0===p?[]:p,g=m.config.githubUsername,h=m.config.email,b=m.config.profileImg,E=m.config.about,k=m.config.facebook,v=m.config.medium,y=m.config.linkedin,w=m.config.keybase,N=function(e){var t=e.href,a=e.icon,n=e.title;return o.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon",title:n},o.a.createElement("span",{className:"fa-layers fa-fw fa-lg"},o.a.createElement(l.a,{icon:a})))},A=function(e){var t=e.totalCount,a=e.latestPosts;return o.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},o.a.createElement("div",{className:"about-me"},o.a.createElement(i.Link,{to:E,href:E,className:"name"},o.a.createElement("img",{className:"avatar",src:b,alt:"shivanshs9"}),o.a.createElement("h4",null,"Shivansh Saini")),o.a.createElement("p",{className:"mb-3"},f[0]," // ",f[1]),w&&o.a.createElement(N,{href:"https://keybase.io/"+w,icon:c.f,title:"Keybase"}),o.a.createElement(N,{href:"https://github.com/"+g,icon:["fab","github"],title:"Github"}),y&&o.a.createElement(N,{href:"https://linkedin.com/in/"+y+"/",icon:["fab","linkedin"],title:"Linkedin"}),v&&o.a.createElement(N,{href:"https://medium.com/@"+v+"/",icon:["fab","medium"],title:"Medium"}),k&&o.a.createElement(N,{href:"https://www.facebook.com/"+k+"/",icon:["fab","facebook"],title:"Facebook"}),o.a.createElement(N,{href:"mailto:"+h,icon:["far","envelope"],title:"Email"}),o.a.createElement("a",{target:"_blank",rel:"external nofollow noopener noreferrer",className:"link-resume",href:"https://drive.google.com/file/d/1XsZ-coaklQNZrXsdGmNkp3B-t52t_nmv/view"},"Resume"),o.a.createElement(d,{totalCount:t,posts:a})))};A.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return o.a.createElement(i.StaticQuery,{query:"1307080370",render:function(e){return o.a.createElement(A,Object.assign({},e.all,e.limited))},data:n})}},Jz1z:function(e,t,a){"use strict";a("pJf4");var n=a("q1tI"),r=a.n(n),o=function(e){var t=e.name,a=e.count;return r.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a&&"("+a+")")};o.defaultProps={count:""},t.a=o},Rwg6:function(e){e.exports=JSON.parse('{"data":{"all":{"totalCount":4},"limited":{"latestPosts":[{"node":{"fields":{"slug":"/medium/do-github-action-like-a-pro-594bcb813b22"},"frontmatter":{"id":"do-github-action-like-a-pro-594bcb813b22","title":"Do GitHub Action like a Pro!","url":"/medium/do-github-action-like-a-pro-594bcb813b22","date":"2020-07-04T14:25:47.156Z","tags":["GitHub","CI/CD","GitHub Actions","DevOps","Automation","TypeScript"],"description":"A set of development practices you wish you’d known before publishing your first Action.","headerImage":"https://miro.medium.com/max/3780/0*Tv7l1cHUf5kT1l27"}}},{"node":{"fields":{"slug":"/medium/codefest19-hacking-mvp-ca7dcf329208"},"frontmatter":{"id":"CF2019-Haxplore-Hacking-A-MVP","title":"Hacking away an MVP in 24 hours","url":"/medium/codefest19-hacking-mvp-ca7dcf329208","date":"2019-08-26T20:19:47.156Z","tags":["Hackathon","WeekendOfCode","CodeFest","AWS","TeamWork","WebSockets","ML","Django"],"description":"How I spent a weekend building product from scratch in an awesome team and winning it!","headerImage":"https://cdn-images-1.medium.com/max/2560/1*hXNXQJ2pfjnI-A8sEl2xtA.jpeg"}}},{"node":{"fields":{"slug":"/summers/gsoc/2019-videolan-report"},"frontmatter":{"id":"GSoC-2019_Final-Report","title":"GSoC 2019 @ VideoLAN | Testing VLC Android","url":"/summers/gsoc/2019-videolan-report","date":"2019-08-23T16:00:47.156Z","tags":["GSoC","VideoLAN","VLC","Android","Tests"],"description":"“Tests are stories we tell the next generation of programmers on a project.”","headerImage":"https://i.imgur.com/vBFlDzY.png"}}},{"node":{"fields":{"slug":"/medium/drf-problems-21f7bb4d4675"},"frontmatter":{"id":"drf-problems-21f7bb4d4675","title":"DRF-Problems: Finally a Django library which implements RFC 7807!","url":"/medium/drf-problems-21f7bb4d4675","date":"2019-06-07T23:30:47.156Z","tags":["Python","Django"],"description":"Introduce problem model with your application errors!","headerImage":"https://cdn-images-1.medium.com/max/2560/1*K9Z-b-LPo60LFSUkl-mrUg.png"}}}]}}}')},YX5f:function(e,t,a){},enK5:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("YbXK"),a("cFtU"),a("zGcK");var n=a("q1tI"),r=a.n(n),o=a("/d1K"),i=a("Jz1z"),l=a("wtQ5");t.default=function(e){var t=e.data.allMarkdownRemark,a={};t.edges.forEach((function(e){e.node.frontmatter.tags.forEach((function(e){a[e]?a[e]+=1:a[e]=1}))}));var n=Array.from(Object.keys(a)).sort((function(e,t){return a[t]-a[e]}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:15}},r.a.createElement(o.a,null),r.a.createElement("div",{className:"col order-2"},n.map((function(e){return r.a.createElement(i.a,{name:e,key:e,count:a[e]})})))),r.a.createElement(l.a,{title:"Tags",url:"/tags/",siteTitleAlt:"Shivansh Saini",isPost:!1,description:"Tags Page",image:"https://i.imgur.com/M795H8A.jpg"}))};var c="3215885689"},qfuT:function(e,t,a){},usu3:function(e,t,a){},wtQ5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("TJpk"),i=a.n(o),l=a("KSab"),c=a.n(l),m=function(e){var t=e.url,a=e.title,n=e.description,o=e.image,l=(e.siteTitleAlt,e.isPost);return r.a.createElement(i.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:o}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,o=e.image,i=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:o}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:o},description:i}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),l?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:o}),r.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID?c.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:c.a.twitter_username?c.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:o}))};m.defaultProps={title:c.a.title},t.a=m}}]);
//# sourceMappingURL=component---src-pages-tags-js-adda0071d7df582b982d.js.map