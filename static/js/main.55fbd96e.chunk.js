(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),o=a(1),l=(a(14),a(9)),u=a.n(l),d=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(d.jsxs)("article",{"data-id":a,className:u()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(d.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function O(e){return h.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(c.a)(i,2),l=s[0],u=s[1],m=Object(o.useState)(f),j=Object(c.a)(m,2),p=j[0],x=j[1],v=Object(o.useState)(!1),y=Object(c.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(!1),g=Object(c.a)(I,2),C=g[0],T=g[1];function _(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(t))+1}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var t={id:_(p),userId:Number(l),title:a,completed:!1,user:O(Number(l))},i=t.title,c=t.user;i&&c&&(x((function(e){return[].concat(Object(r.a)(e),[t])})),u(""),n("")),i||N(!0),c||T(!0)},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["Title:",Object(d.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter the title for your todo",value:a,onChange:function(e){n(e.currentTarget.value),N(!1)}})]}),S&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["User:",Object(d.jsxs)("select",{"data-cy":"userSelect",value:l,onChange:function(e){u(e.currentTarget.value),T(!1)},children:[Object(d.jsx)("option",{value:"0",children:"Choose a user"}),h.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),C&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(b,{todos:p})]})};i.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.55fbd96e.chunk.js.map