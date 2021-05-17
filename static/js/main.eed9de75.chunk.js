(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(12),a=n.n(s),c=n(0);var i=function(){return Object(c.jsxs)("header",{className:"bg-dark text-white p-3 text-center",children:[Object(c.jsx)("h1",{className:"p-2 m-2",children:"Employee Directory"}),Object(c.jsx)("p",{children:'Click on "Phone Number" to sort numerically or "Email" to sort alphabetically.'})]})},o=n(13),l=n(14),d=n(15),h=n(18),m=n(17),u=n(16),j=n.n(u),p=function(){return j.a.get("https://randomuser.me/api/?results=25")};var b=function(e){return Object(c.jsx)("form",{className:"row",children:Object(c.jsx)("div",{className:"text-center align-middle form-group mb-4",children:Object(c.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control col mx-auto w-50 text-center",placeholder:"Search for an Employee",id:"search"})})})};var x=function(e){var t=e.EmployeeList;return Object(c.jsxs)("table",{className:"col mx-auto w-60 text-center",children:[Object(c.jsx)("caption",{children:"Employees "}),Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{className:"text-center align-middle",children:[Object(c.jsx)("th",{children:"Photo"}),Object(c.jsx)("th",{children:"Full Name"}),Object(c.jsxs)("th",{onClick:function(t){return e.sortBy(t,"phone")},children:[" Phone Number",Object(c.jsx)("span",{class:"ascending"===e.phoneSort?"headerSortDown":"headerSortUp",children:"  "})]}),Object(c.jsxs)("th",{onClick:function(t){return e.sortBy(t,"email")},children:["Email",Object(c.jsx)("span",{class:"ascending"===e.emailSort?"headerSortDown":"headerSortUp"})]})]})}),Object(c.jsx)("tbody",{children:t.map((function(e){return Object(c.jsxs)("tr",{className:"text-center align-middle",children:[Object(c.jsxs)("td",{children:[" ",Object(c.jsx)("img",{src:e.picture.medium,alt:"Thumbnail"})," "]}),Object(c.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email})]},null==e.id.value?Math.random():e.id.value)}))})]})},y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={result:[],direction:{email:"ascending",phone:"ascending"},AllEmployees:[],EmployeeList:[]},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmployees(n.toLowerCase().trim())},e.filterEmployees=function(t){t?e.setState({EmployeeList:e.state.AllEmployees.filter((function(e){return e.name.first.toLowerCase().concat(" ",e.name.last.toLowerCase()).includes(t)||e.email.toLowerCase().includes(t)}))}):e.setState({EmployeeList:e.state.AllEmployees})},e.sortBy=function(t,n){var r=e.state.EmployeeList;e.setState({data:r.sort((function(t,r){var s="ascending"===e.state.direction[n];return t[n]<r[n]?s?-1:1:t[n]>r[n]?s?1:-1:0})),direction:Object(o.a)({},n,"ascending"===e.state.direction[n]?"descending":"ascending")})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){return e.setState({AllEmployees:t.data.results,EmployeeList:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(c.jsx)(x,{sortBy:this.sortBy,EmployeeList:this.state.EmployeeList,emailSort:this.state.direction.email,phoneSort:this.state.direction.phone})]})}}]),n}(r.Component);var O=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(i,{}),Object(c.jsx)(y,{})]})};n(42);a.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.eed9de75.chunk.js.map