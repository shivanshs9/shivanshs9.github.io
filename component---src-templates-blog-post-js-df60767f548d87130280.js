(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{257:function(e,t,a){"use strict";a.r(t);a(16),a(20);var n=a(0),r=a.n(n),o=(a(249),a(266)),i=a(45),l=a(262),c=a(306),m=a.n(c);var s=function(e){var t,a;function n(t){var a,n=(a=e.call(this,t)||this).props.post;return a.post=n,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){Object(o.b)()&&m()(".lozad",{load:function(e){e.src=e.dataset.src,e.onload=function(){e.classList.add("animated"),e.classList.add("fadeIn")}}}).observe()},i.render=function(){var e=this.props.post;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e},style:{padding:30,background:"white"}})},n}(n.Component),u=a(264),f=(a(250),a(270),function(e){var t=e.img,a=e.title,n=e.subTitle,o=e.authorImage,i=e.authorName;return r.a.createElement("div",{className:"col-12 header",style:{padding:0},id:"header"},r.a.createElement("div",{className:"img-container",style:{backgroundImage:"linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("+t+")",marginTop:-58}},a&&r.a.createElement("h1",{className:"u-title"},a),n&&r.a.createElement("div",{className:"u-subtitle"},r.a.createElement("div",{className:"m-left"},o&&r.a.createElement("img",{src:o,className:"author-image",alt:i}),r.a.createElement("span",{className:"author-name"},i)),r.a.createElement("span",{className:"text"},n))))});f.defaultProps={title:"",subTitle:"",authorName:"",authorImage:""};var d=f,p=a(276),g=a(5);a(251);a.d(t,"pageQuery",function(){return k});var h=g.config.name,b=g.config.iconUrl,E=g.config.gitalk,v={padding:"10px 30px",background:"white"},y="undefined"!=typeof window?a(307):void 0,w=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).data=a.props.data,a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.componentDidMount=function(){var e=this.data.content.edges[0].node,t=e.frontmatter,a=e.id,n=t.title,r=t.id;new y(Object.assign({},E,{title:n,id:r||a})).render("gitalk-container")},c.render=function(){var e=this.data.content.edges[0].node,t=e.html,a=e.frontmatter,n=e.fields,c=e.excerpt,m=n.slug,f=a.date,g=a.headerImage,E=a.title;return r.a.createElement("div",{className:"row post order-2"},r.a.createElement(d,{img:g||"https://i.imgur.com/63BR8Nf.jpg",title:E,authorName:h,authorImage:b,subTitle:Object(o.d)(f)}),r.a.createElement(l.a,null),r.a.createElement("div",{className:"col-xl-7 col-lg-6 col-md-12 col-sm-12 order-10 content"},r.a.createElement(s,{post:t}),r.a.createElement("div",{className:"m-message",style:v},"I would love to hear any constructive feedbacks for my contents, by any method you prefer - Medium, Gitalk or even email. If you do like my content, please  ",r.a.createElement(i.a,{href:"https://github.com/shivanshs9/shivanshs9.github.io",title:"star my blog"})," or ",r.a.createElement(i.a,{href:"https://github.com/shivanshs9/",title:"follow me at Github"}),"."),r.a.createElement("div",{id:"gitalk-container"})),r.a.createElement(p.a,{url:m}),r.a.createElement(u.a,{title:E,url:m,siteTitleAlt:"Shivansh Saini",isPost:!1,description:c,image:g||"https://i.imgur.com/63BR8Nf.jpg"}))},n}(n.Component),k="4091093519";t.default=w},261:function(e){e.exports={data:{all:{totalCount:1},limited:{latestPosts:[{node:{fields:{slug:"/medium/drf-problems-21f7bb4d4675"},frontmatter:{id:"drf-problems-21f7bb4d4675",title:"DRF-Problems: Finally a Django library which implements RFC 7807!",url:"/medium/drf-problems-21f7bb4d4675",date:"2019-06-07T23:30:47.156Z",tags:["Python","Django"],description:"Introduce problem model with your application errors!",headerImage:"https://cdn-images-1.medium.com/max/2560/1*K9Z-b-LPo60LFSUkl-mrUg.png"}}}]}}}},262:function(e,t,a){"use strict";a(16);var n=a(261),r=a(0),o=a.n(r),i=a(46),l=a(109),c=a(5),m=(a(240),function(e){var t=e.posts;return o.a.createElement("div",{className:"latest-post"},o.a.createElement("p",null,"Latest Posts"),t.map(function(e){var t=e.node;return o.a.createElement(i.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)}))}),s=(a(241),function(e){var t=e.totalCount,a=e.posts;return o.a.createElement("div",{className:"d-none d-lg-block information my-2"},o.a.createElement("hr",null),o.a.createElement("p",null,t,"  posts"),o.a.createElement("hr",null),o.a.createElement(m,{posts:a}))});s.defaultProps={posts:[]};var u=s,f=(a(242),c.config.wordings),d=void 0===f?[]:f,p=c.config.githubUsername,g=c.config.email,h=c.config.profileImg,b=c.config.about,E=c.config.facebook,v=c.config.medium,y=c.config.linkedin,w=function(e){var t=e.href,a=e.icon;return o.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},o.a.createElement("span",{className:"fa-layers fa-fw fa-lg"},o.a.createElement(l.a,{icon:a})))},k=function(e){var t=e.totalCount,a=e.latestPosts;return o.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},o.a.createElement("div",{className:"about-me"},o.a.createElement(i.Link,{to:b,href:b,className:"name"},o.a.createElement("img",{className:"avatar",src:h,alt:"shivanshs9"}),o.a.createElement("h4",null,"Shivansh Saini")),o.a.createElement("p",{className:"mb-3"},d[0]," // ",d[1]),o.a.createElement(w,{href:"https://github.com/"+p,icon:["fab","github"]}),y&&o.a.createElement(w,{href:"https://linkedin.com/in/"+y+"/",icon:["fab","linkedin"]}),v&&o.a.createElement(w,{href:"https://medium.com/@"+v+"/",icon:["fab","medium"]}),E&&o.a.createElement(w,{href:"https://www.facebook.com/"+E+"/",icon:["fab","facebook"]}),o.a.createElement(w,{href:"mailto:"+g,icon:["far","envelope"]}),o.a.createElement(u,{totalCount:t,posts:a})))};k.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return o.a.createElement(i.StaticQuery,{query:"1307080370",render:function(e){return o.a.createElement(k,Object.assign({},e.all,e.limited))},data:n})}},264:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(110),i=a.n(o),l=a(5),c=a.n(l),m=function(e){var t=e.url,a=e.title,n=e.description,o=e.image,l=(e.siteTitleAlt,e.isPost);return r.a.createElement(i.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:o}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,o=e.image,i=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:o}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:o},description:i}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),l?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:o}),r.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID?c.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:c.a.twitter_username?c.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:o}))};m.defaultProps={title:c.a.title},t.a=m},266:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"c",function(){return l}),a.d(t,"d",function(){return c}),a.d(t,"a",function(){return s}),a.d(t,"e",function(){return m});a(269),a(50);var n=a(111),r=a.n(n),o=a(5),i=(o.config.maxPostsInPage,function(){return"undefined"!=typeof window}),l=function(e){return r()(e).format("DD/MM/YYYY")},c=function(e){return r()(e).format("YYYY, MMM DD | HH:mm")},m=function(e){return r()(e).format("MMM, YYYY")},s=function(e,t){if(!t)return"Working";var a=r()(e),n=r()(t),o=n.diff(a,"hour");if(o<=24)return o+" hour"+(o>1?"s":"");var i=n.diff(a,"day");if(i<=30)return i+" day"+(i>1?"s":"");var l=n.diff(a,"month");return l+" month"+(l>1?"s":"")}},270:function(e,t,a){a(7),a(50);var n=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},r=function(e){var t=e.href,a=e.title,r=e.text;return'<img class="lozad d-block mx-auto" data-src='+n(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(a,r)+" />"};e.exports={parseImgur:n,parseImageTag:r,getGalleryImage:function(e){var t=e.href,a=e.title,o=e.text;return'<a data-fancybox="gallery" href="'+n(t,"huge")+'">'+r({href:t,title:a,text:o})+"</a>"}}},276:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(35),i=a(109),l=(a(244),function(){return r.a.createElement("a",{className:"share-button",style:{lineHeight:"1.7rem",color:"#337ab7",paddingLeft:"0.15rem"},href:"#gitalk-container",onClick:function(){return o.a.event({category:"User",action:"Goto Comment Box"})}},r.a.createElement(i.a,{icon:["far","comment"]}))}),c=function(e){var t=e.url,a=e.hasCommentBox;return r.a.createElement("div",{className:"m-share-box"},r.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+t,title:"",className:"share-button",onClick:function(){return o.a.event({category:"Share",action:"Facebook Share"})}},r.a.createElement(i.a,{icon:["fab","facebook-f"]})),a&&r.a.createElement(l,null),r.a.createElement("a",{className:"share-button",href:"#header",onClick:function(){o.a.event({category:"User",action:"Scroll to Top"})},style:{lineHeight:"1.7rem",paddingLeft:"0.1rem"}},r.a.createElement(i.a,{icon:["fas","chevron-up"]})))};c.defaultProps={hasCommentBox:!0},t.a=c}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-df60767f548d87130280.js.map