(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{260:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(264),l=a(266),i=(a(50),a(109)),c=a(328),s=a.n(c),m=a(270),u=a(78),d=a(268);a(257);s.a.setAppElement("#___gatsby");var f=function(e){var t,a,n=e.url,o=e.image,l=e.backgroundColor;return r.a.createElement("a",{href:n},r.a.createElement("div",{className:"wrapper",style:(t=o,a=l,{backgroundColor:"#"+a,backgroundImage:" url("+t+")"})}))},p=function(e){var t=e.href,a=e.title,n=Object(u.a)(t);return r.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},r.a.createElement("span",{className:"fa-layers fa-fw fa-lg",title:a},r.a.createElement(i.a,{icon:n})))},g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).openModal=function(){a.setState({modalIsOpen:!0})},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.state={modalIsOpen:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.title,a=e.start,n=e.end,o=e.projectLink,l=e.resultLink,i=e.image,c=e.work,u=e.description,g=e.subtitle,E=e.tags,h=void 0===E?[]:E,b=l||o,v=Object(d.a)(a,n),y=!n||v.match(/months?$/)?"from":"in",k=v+" "+y+" "+Object(d.e)(a);return r.a.createElement("div",{className:"pb-4"},r.a.createElement("div",{className:"grid-card"},i&&r.a.createElement(f,{url:b,image:i}),r.a.createElement("div",{className:"data"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"stats"},r.a.createElement("span",{className:"date"},k),h&&h.map(function(e){return r.a.createElement(m.a,{name:e,key:e})})),r.a.createElement("a",{href:b},r.a.createElement("h4",{className:"title"},t)),r.a.createElement("span",{className:"subtitle"},g),r.a.createElement("p",{className:"description"},u),r.a.createElement("div",{className:"links"},l&&r.a.createElement(p,{href:l,title:"Check it out!"}),r.a.createElement("span",{className:"work",onClick:this.openModal},"What I did"),o&&r.a.createElement(p,{href:o,title:"View source"}))))),r.a.createElement(s.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,className:"Modal",overlayClassName:"Overlay",contentLabel:"My Responsibilities"},r.a.createElement("ul",null,c.map(function(e){return r.a.createElement("li",{key:e},e)}))))},n}(n.Component);g.defaultProps={image:"",tags:[],end:"",subtitle:"",projectLink:"",resultLink:""};var E=g,h=a(280),b=a(335),v=a.n(b),y=a(387);a(246);a.d(t,"query",function(){return k});t.default=Object(h.withSize)()(function(e){var t=e.data.allProjectFiles,a=e.size.width,i=[];t.edges.forEach(function(e){var t=e.node.data;i.push(t)});var c=Object(n.useRef)(null);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:15}},r.a.createElement(o.a,null),r.a.createElement("div",{className:"col order-2"},r.a.createElement(v.a,{columnWidth:a<=768?"100%":"50%",monitorImagesLoaded:!0,gridRef:function(e){return c.current=e}},i.map(function(e){return r.a.createElement(y.a,{handleHeight:!0,handleWidth:!0,onResize:function(){c.current&&c.current.updateLayout()},key:e.id},r.a.createElement(E,e))})))),r.a.createElement(l.a,{title:"Projects",url:"/projects/",siteTitleAlt:"Shivansh Saini",isPost:!1,description:"Projects Page",image:"https://i.imgur.com/M795H8A.jpg"}))});var k="1000147416"},263:function(e){e.exports={data:{all:{totalCount:1},limited:{latestPosts:[{node:{fields:{slug:"/medium/drf-problems-21f7bb4d4675"},frontmatter:{id:"drf-problems-21f7bb4d4675",title:"DRF-Problems: Finally a Django library which implements RFC 7807!",url:"/medium/drf-problems-21f7bb4d4675",date:"2019-06-07T23:30:47.156Z",tags:["Python","Django"],description:"Introduce problem model with your application errors!",headerImage:"https://cdn-images-1.medium.com/max/2560/1*K9Z-b-LPo60LFSUkl-mrUg.png"}}}]}}}},264:function(e,t,a){"use strict";a(16);var n=a(263),r=a(0),o=a.n(r),l=a(46),i=a(109),c=a(5),s=(a(240),function(e){var t=e.posts;return o.a.createElement("div",{className:"latest-post"},o.a.createElement("p",null,"Latest Posts"),t.map(function(e){var t=e.node;return o.a.createElement(l.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)}))}),m=(a(241),function(e){var t=e.totalCount,a=e.posts;return o.a.createElement("div",{className:"d-none d-lg-block information my-2"},o.a.createElement("hr",null),o.a.createElement("p",null,t,"  posts"),o.a.createElement("hr",null),o.a.createElement(s,{posts:a}))});m.defaultProps={posts:[]};var u=m,d=(a(242),c.config.wordings),f=void 0===d?[]:d,p=c.config.githubUsername,g=c.config.email,E=c.config.profileImg,h=c.config.about,b=c.config.facebook,v=c.config.medium,y=c.config.linkedin,k=function(){window.open("https://drive.google.com/file/d/1XsZ-coaklQNZrXsdGmNkp3B-t52t_nmv/view","_blank")},w=function(e){var t=e.href,a=e.icon;return o.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},o.a.createElement("span",{className:"fa-layers fa-fw fa-lg"},o.a.createElement(i.a,{icon:a})))},N=function(e){var t=e.totalCount,a=e.latestPosts;return o.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},o.a.createElement("div",{className:"about-me"},o.a.createElement(l.Link,{to:h,href:h,className:"name"},o.a.createElement("img",{className:"avatar",src:E,alt:"shivanshs9"}),o.a.createElement("h4",null,"Shivansh Saini")),o.a.createElement("p",{className:"mb-3"},f[0]," // ",f[1]),o.a.createElement(w,{href:"https://github.com/"+p,icon:["fab","github"]}),y&&o.a.createElement(w,{href:"https://linkedin.com/in/"+y+"/",icon:["fab","linkedin"]}),v&&o.a.createElement(w,{href:"https://medium.com/@"+v+"/",icon:["fab","medium"]}),b&&o.a.createElement(w,{href:"https://www.facebook.com/"+b+"/",icon:["fab","facebook"]}),o.a.createElement(w,{href:"mailto:"+g,icon:["far","envelope"]}),o.a.createElement("div",{className:"link-resume",onClick:k},"Resume"),o.a.createElement(u,{totalCount:t,posts:a})))};N.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return o.a.createElement(l.StaticQuery,{query:"1307080370",render:function(e){return o.a.createElement(N,Object.assign({},e.all,e.limited))},data:n})}},266:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(110),l=a.n(o),i=a(5),c=a.n(i),s=function(e){var t=e.url,a=e.title,n=e.description,o=e.image,i=(e.siteTitleAlt,e.isPost);return r.a.createElement(l.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:o}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,o=e.image,l=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:o}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:o},description:l}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),i?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:o}),r.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID?c.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:c.a.twitter_username?c.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:o}))};s.defaultProps={title:c.a.title},t.a=s},268:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return c}),a.d(t,"a",function(){return m}),a.d(t,"e",function(){return s});a(272),a(50);var n=a(111),r=a.n(n),o=a(5),l=(o.config.maxPostsInPage,function(){return"undefined"!=typeof window}),i=function(e){return r()(e).format("DD/MM/YYYY")},c=function(e){return r()(e).format("YYYY, MMM DD | HH:mm")},s=function(e){return r()(e).format("MMM, YYYY")},m=function(e,t){if(!t)return"Working";var a=r()(e),n=r()(t),o=n.diff(a,"hour");if(o<=24)return o+" hour"+(o>1?"s":"");var l=n.diff(a,"day");if(l<=30)return l+" day"+(l>1?"s":"");var i=n.diff(a,"month");return i+" month"+(i>1?"s":"")}},270:function(e,t,a){"use strict";a(20);var n=a(0),r=a.n(n),o=function(e){var t=e.name,a=e.count;return r.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a&&"("+a+")")};o.defaultProps={count:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-projects-js-01287906538d34f556cd.js.map