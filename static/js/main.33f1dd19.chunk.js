(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),i=(n(13),n(7)),s=n(3),l=n(2),u=(n(14),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1];return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(r.trim()),i("")}},o.a.createElement("input",{value:r,onChange:function(e){var t=e.target;return i(t.value)},type:"text",className:"form__item",placeholder:"Co jest do zrobienia?"}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),m=(n(15),function(e){var t=e.tasks,n=e.hideDone,a=e.removeTask,c=e.toggleTaskDone;return o.a.createElement("ul",{className:"tasks"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"tasks__item".concat(e.done&&n?"  tasks__item--hide":""," ")},o.a.createElement("button",{onClick:function(){return c(e.id)},className:"tasks__checkButton"},o.a.createElement("i",{className:e.done?"icon-ok":""})),o.a.createElement("span",{className:"tasks__text ".concat(e.done?"tasks__text--lineThrough":"")},e.content),o.a.createElement("button",{onClick:function(){return a(e.id)},className:"tasks__deleteButton"},o.a.createElement("i",{className:"icon-trash-empty"})))})))}),d=(n(16),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHideDone,c=e.setAllDone;return 0===t.length?null:o.a.createElement("div",{className:"buttons"},t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:a,className:"buttons__button toggleHideDoneTasks"},n?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement("button",{onClick:c,className:"buttons__button markAllDone",disabled:t.every((function(e){return e.done}))},"Uko\u0144cz wszystkie")))}),f=(n(17),function(e){var t=e.title,n=e.body,a=e.extraContent;return o.a.createElement("section",{className:"section"},o.a.createElement("h2",{className:"section__header"},t),a,o.a.createElement("div",{className:"section__body"},n))}),k=function(e){return o.a.createElement("main",{className:"container"},e.children)};n(18);var b=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([{id:1,content:"przej\u015bc na Reacta",done:!1},{id:2,content:"wyj\u015b\u0107 z psem",done:!0}]),b=Object(l.a)(r,2),h=b[0],E=b[1];return o.a.createElement(k,null,o.a.createElement("h1",{className:"header"},"Lista zada\u0144"),o.a.createElement(f,{title:"Dodaj nowe zadanie",body:o.a.createElement(u,{addNewTask:function(e){E((function(t){return[].concat(Object(i.a)(t),[{content:e,done:!1,id:0===t.length?1:t[t.length-1].id+1}])}))}})}),o.a.createElement(f,{title:"Lista zada\u0144",extraContent:o.a.createElement(d,{tasks:h,hideDone:n,toggleHideDone:function(){c((function(e){return!e}))},setAllDone:function(){E((function(e){return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{done:!0})}))}))}}),body:o.a.createElement(m,{tasks:h,hideDone:n,removeTask:function(e){E((function(t){return t.filter((function(t){return t.id!==e}))}))},toggleTaskDone:function(e){E((function(t){return t.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{done:!t.done}):t}))}))}})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.33f1dd19.chunk.js.map