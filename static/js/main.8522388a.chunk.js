(this["webpackJsonptodo-with-redux"]=this["webpackJsonptodo-with-redux"]||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},18:function(e,t,n){},19:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(5),r=n.n(o),i=(n(18),n(19),n(12)),l=n(4),u=n(2),d=n(1),s=0,m=Object(l.b)({name:"todos",initialState:{list:[],checkAll:!1,value:""},reducers:{todoAdded:function(e,t){"Enter"===t.payload&&(e.list.unshift({id:s,check:!1,value:e.value}),e.value="",s++)},todoChecked:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.todo.id}));t.payload.check?e.list[n].check=!1:e.list[n].check=!0,e.list.filter((function(e){return e.check})).length===e.list.length?e.checkAll=!0:e.checkAll=!1},todoDeleted:function(e,t){var n=e.list.findIndex((function(e){return e.id===t.payload.id}));e.list=e.list.filter((function(t){return t!==e.list[n]}))},todoCheckAll:function(e){if(e.checkAll){for(var t=0;t<e.list.length;t++)e.list[t].check=!1;e.checkAll=!1}else{for(var n=0;n<e.list.length;n++)e.list[n].check=!0;e.checkAll=!0}},updateInputValue:function(e,t){e.value=t.payload}}}),f=m.actions,p=f.todoAdded,h=f.todoCheckAll,k=f.todoChecked,v=f.todoDeleted,g=f.updateInputValue,b=m.reducer,E=Object(d.a)((function(e){return e.entities.todos}),(function(e){return e.list.filter((function(e){return e}))})),y=Object(d.a)((function(e){return e.entities.todos}),(function(e){return e.list.filter((function(e){return!e.check}))})),j=Object(d.a)((function(e){return e.entities.todos}),(function(e){return e.checkAll})),x=Object(d.a)((function(e){return e.entities.todos}),(function(e){return e.value})),O=Object(u.c)({todos:b}),N=Object(u.c)({entities:O}),w=function(e){return function(e){return function(e){return function(t){return e(t)}}}},C=n(3),A=(n(6),function(e){var t="fa fa-check-circle";return t+=!1===e.check?"-o":"",a.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t})}),I=function(e){return a.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:"fa fa-times"})},S=function(e){var t=Object(C.b)();return a.a.createElement("div",{className:"md-form input-group input-group-lg p-1 mx-auto col-md-5"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("div",{className:"input-group-text md-addon"},a.a.createElement(A,{check:e.todo.check,onClick:function(){return t(k({check:e.todo.check,todo:e.todo}))}}))),a.a.createElement("input",{type:"text",className:"form-control ",defaultValue:e.value,disabled:e.todo.check,"aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-lg"}),a.a.createElement("div",{className:"input-group-append"},a.a.createElement("div",{className:"input-group-text md-addon"},a.a.createElement(I,{onClick:function(){return t(v(e.todo))}}))))},z=function(e){var t=!1===e.check?"fa fa-angle-double-down":"fa fa-angle-down";return a.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t})},D=function(){var e=Object(C.b)(),t=Object(C.c)(E),n="There ",c=Object(C.c)(y).length;n+=1===c?"is 1 task left.":"are "+c+" tasks left.";var o=Object(C.c)(j);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("div",{className:"jumbotron jumbotron-fluid"},a.a.createElement("h1",{className:"text-center m-5 display-1"},"TODOS"),a.a.createElement("hr",{className:"my-4"}),a.a.createElement("div",{className:"md-form input-group input-group-lg p-1 mx-auto col-md-5"},a.a.createElement("div",{className:"input-group-prepend"},a.a.createElement("div",{className:"input-group-text md-addon"},a.a.createElement(z,{check:o,onClick:function(){return e(h())}}))),a.a.createElement("input",{required:!0,type:"text",value:Object(C.c)(x),placeholder:"Hit enter to add your to-do",onChange:function(t){return e(g(t.target.value))},onKeyDown:function(t){return e(p(t.key))},className:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-lg"})),t.map((function(e){return a.a.createElement(S,{key:e.id,value:e.value,check:e.check,todo:e})})),a.a.createElement("div",{className:" text-center font-weight-bold text-wrap mx-auto"},n))))},V=Object(l.a)({reducer:N,middleware:[].concat(Object(i.a)(Object(l.c)()),[w({destination:"console"})])});var B=function(){return a.a.createElement(C.a,{store:V},a.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8522388a.chunk.js.map