(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(24),a=c(8),n=(c(34),c(35),c(3)),r=c(4),l=c(13),i=c(0),o=c(7),d=c(6),j=c.n(d),b=c(25);function u(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(r.a)(e,2),s=t[0],a=t[1];null===a?c.delete(s):Array.isArray(a)?(c.delete(s),a.forEach((function(e){c.append(s,e)}))):c.set(s,a)})),c.toString()}var h=c(1),m=["children","params"],x=function(e){var t=e.children,c=e.params,s=Object(b.a)(e,m),n=Object(a.d)(),i=Object(r.a)(n,1)[0];return Object(h.jsx)(a.b,Object(l.a)(Object(l.a)({to:{search:u(i,c)}},s),{},{children:t}))},O=function(){var e=Object(a.d)(),t=Object(r.a)(e,2),c=t[0],s=t[1],n=c.get("sex"),l=c.getAll("centuries"),i=c.get("query"),d=function(e){return l.includes(e)?l.filter((function(t){return t!==e})):[].concat(Object(o.a)(l),[e])};return Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(h.jsx)(x,{className:j()({"is-active":null===n}),params:{sex:null},children:"All"}),Object(h.jsx)(x,{className:j()({"is-active":"m"===n}),params:{sex:"m"},children:"Male"}),Object(h.jsx)(x,{className:j()({"is-active":"f"===n}),params:{sex:"f"},children:"Female"})]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left",children:[Object(h.jsx)("input",{value:i||"",onChange:function(e){return""===(t=e.target.value)?c.delete("query"):c.set("query",t),void s(c);var t},"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search"}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(h.jsxs)("div",{className:"level-left",children:[Object(h.jsx)(x,{"data-cy":"century",className:j()("button mr-1",{"is-info":l.includes("16")}),params:{centuries:d("16")},children:"16"}),Object(h.jsx)(x,{"data-cy":"century",className:j()("button mr-1",{"is-info":l.includes("17")}),params:{centuries:d("17")},children:"17"}),Object(h.jsx)(x,{"data-cy":"century",className:j()("button mr-1",{"is-info":l.includes("18")}),params:{centuries:d("18")},children:"18"}),Object(h.jsx)(x,{"data-cy":"century",className:j()("button mr-1",{"is-info":l.includes("19")}),params:{centuries:d("19")},children:"19"}),Object(h.jsx)(x,{"data-cy":"century",className:j()("button mr-1",{"is-info":l.includes("20")}),params:{centuries:d("20")},children:"20"})]}),Object(h.jsx)("div",{className:"level-right ml-4",children:Object(h.jsx)(x,{"data-cy":"centuryALL",className:j()("button is-success",{"is-outlined":0!==l.length}),params:{centuries:null},children:"All"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)(x,{className:"button is-link is-outlined is-fullwidth",params:{centuries:null,query:null,sex:null},children:"Reset all filters"})})]})},f=(c(37),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),p=function(e){var t=e.people,c=Object(a.d)(),s=Object(r.a)(c,2),l=s[0],i=s[1],d=l.get("sort"),b=l.get("order"),u=l.get("sex"),m=l.getAll("centuries"),x=l.get("query"),O=Object(n.q)().slug,f=function(e){null!==l.get("sort")&&l.get("sort")!==e||null===l.get("sort")?l.set("sort",e):l.get("sort")===e&&null===l.get("order")?l.append("order","desc"):(l.delete("order"),l.delete("sort")),i(l)},p=function(e,t,c,s,a,n){var r=Object(o.a)(e);switch(t){case"born":"desc"===c?r.sort((function(e,t){return t.born-e.born})):r.sort((function(e,t){return e.born-t.born}));break;case"died":"desc"===c?r.sort((function(e,t){return t.died-e.died})):r.sort((function(e,t){return e.died-t.died}));break;case"name":"desc"===c?r.sort((function(e,t){return t.name.localeCompare(e.name)})):r.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"sex":"desc"===c?r.sort((function(e,t){return t.sex.localeCompare(e.sex)})):r.sort((function(e,t){return e.sex.localeCompare(t.sex)}))}switch(a.length>0&&(r=r.filter((function(e){return a.includes(String(Math.floor(e.born/100)+1))}))),null!==n&&(r=r.filter((function(e){var t,c;return e.name.toLowerCase().includes(n.toLowerCase())||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(n.toLowerCase()))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(n.toLowerCase()))}))),s){case"m":return r.filter((function(e){return"m"===e.sex}));case"f":return r.filter((function(e){return"f"===e.sex}))}return r}(t,d,b,u,m,x);return Object(h.jsx)(h.Fragment,{children:0===p.length?Object(h.jsx)("p",{children:"There are no people matching the current search criteria"}):Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(h.jsx)("a",{onClick:function(){return f("name")},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:j()({"fas fa-sort":"name"!==d,"fas fa-sort-up":"name"===d&&"desc"!==b,"fas fa-sort-down":"name"===d&&"desc"===b})})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(h.jsx)("a",{onClick:function(){return f("sex")},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:j()({"fas fa-sort":"sex"!==d,"fas fa-sort-up":"sex"===d&&"desc"!==b,"fas fa-sort-down":"sex"===d&&"desc"===b})})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(h.jsx)("a",{onClick:function(){return f("born")},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:j()({"fas fa-sort":"born"!==d,"fas fa-sort-up":"born"===d&&"desc"!==b,"fas fa-sort-down":"born"===d&&"desc"===b})})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(h.jsx)("a",{onClick:function(){return f("died")},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:j()({"fas fa-sort":"died"!==d,"fas fa-sort-up":"died"===d&&"desc"!==b,"fas fa-sort-down":"died"===d&&"desc"===b})})})})]})}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:p.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":O===e.slug}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(a.b,{className:j()({"has-text-danger":"f"===e.sex}),to:"".concat(e.slug,"?").concat(l.toString()),children:e.name})}),Object(h.jsx)("td",{children:e.sex}),Object(h.jsx)("td",{children:e.born}),Object(h.jsx)("td",{children:e.died}),Object(h.jsx)("td",{children:e.mother?Object(h.jsx)(a.b,{className:"has-text-danger",to:"".concat(e.mother.slug,"?").concat(l.toString()),children:e.motherName}):e.motherName||"-"}),Object(h.jsx)("td",{children:e.father?Object(h.jsx)(a.b,{to:"".concat(e.father.slug,"?").concat(l.toString()),children:e.fatherName}):e.fatherName||"-"})]})}))})]})})},N=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(!0),n=Object(r.a)(a,2),o=n[0],d=n[1],j=Object(i.useState)(!1),b=Object(r.a)(j,2),u=b[0],m=b[1],x=function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){var t;s((t=e).map((function(e){var c=t.find((function(t){return t.name===e.motherName})),s=t.find((function(t){return t.name===e.fatherName}));return Object(l.a)(Object(l.a)({},e),{},{mother:c,father:s})})))})).catch((function(){m(!0)})).finally((function(){d(!1)}))};return Object(i.useEffect)((function(){x()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(h.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!o&&Object(h.jsx)(O,{})}),Object(h.jsx)("div",{className:"column",children:Object(h.jsxs)("div",{className:"box table-container",children:[o&&Object(h.jsx)(f,{}),u&&Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===(null===c||void 0===c?void 0:c.length)&&Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c&&Object(h.jsx)(p,{people:c})]})})]})})]})},v=function(){return Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(h.jsx)(a.c,{"aria-current":"page",className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},g=(c(38),function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(n.d,{children:[Object(h.jsx)(n.b,{path:"/",element:Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),Object(h.jsx)(n.b,{path:"*",element:Object(h.jsx)("h1",{className:"title",children:"Page not found"})}),Object(h.jsx)(n.b,{path:"/home",element:Object(h.jsx)(n.a,{to:"/",replace:!0})}),Object(h.jsx)(n.b,{path:"/people",element:Object(h.jsx)(N,{}),children:Object(h.jsx)(n.b,{path:":slug",element:Object(h.jsx)(N,{})})})]})})})]})});Object(s.createRoot)(document.getElementById("root")).render(Object(h.jsx)(a.a,{children:Object(h.jsx)(g,{})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e5c347bc.chunk.js.map