(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),s=a.n(c),r=(a(8),a(9),function(){return o.a.createElement("form",{className:"form"},o.a.createElement("input",{type:"text",className:"form__item",placeholder:"Co jest do zrobienia?"}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),l=(a(10),function(e){return o.a.createElement("ul",{className:"tasks"},e.tasks.map((function(t){return o.a.createElement("li",{className:"tasks__item".concat(t.done&&e.hideShowButtonFlag?"  tasks__item--hide":""," ")},o.a.createElement("button",{className:"tasks__checkButton"}," ",t.done?"\u2705":""," "),o.a.createElement("span",{className:"tasks__text ".concat(t.done?'style="text-decoration: line-through"':"")},t.content),o.a.createElement("button",{className:"tasks__deleteButton"},"\u274c"))})))}),i=(a(11),function(e){var t=e.tasks,a=e.hideShowButtonFlag;return 0===t.length?null:o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"buttons__button toggleHideDoneTasks"},a?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement("button",{className:"buttons__button markAllDone",disabled:t.every((function(e){return e.done}))},"Uko\u0144cz wszystkie"))}),m=(a(12),function(e){var t=e.title,a=e.body,n=e.extraContent;return o.a.createElement("section",{className:"section"},o.a.createElement("h2",{className:"section__header"},t),n,o.a.createElement("div",{className:"section__body"},a))}),u=function(e){return o.a.createElement("main",{className:"container"},e.children)},d=[{id:1,content:"przej\u015bc na Reacta",done:!1},{id:2,content:"wyj\u015b\u0107 z psem",done:!0}];var h=function(){return o.a.createElement(u,null,o.a.createElement("h1",{className:"header"},"Lista zada\u0144"),o.a.createElement(m,{title:"Dodaj nowe zadanie",body:o.a.createElement(r,null)}),o.a.createElement(m,{title:"Lista zada\u0144",extraContent:o.a.createElement(i,{tasks:d,hideShowButtonFlag:!1}),body:o.a.createElement(l,{tasks:d,hideShowButtonFlag:!1})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.ce2cffb6.chunk.js.map