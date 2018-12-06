(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),s=n.n(c),o=(n(23),n(6)),i=n(7),l=n(8),u=n(13),m=n(9),h=n(12),d=n(3),v=(n(25),n(34)),b=n(36),f=n(35),p=function(e){var t=e.styles,n=void 0===t?"success":t,a=e.children,c=void 0===a?"BTN":a,s=e.type,o=void 0===s?"button":s;return r.a.createElement("button",{className:"btn btn-"+n,type:o},c)},E=function(e){var t,n=e.onSearch,a=void 0===n?function(e){return e}:n;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(t.value)}},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"text",className:"form-control",ref:function(e){return t=e},placeholder:"Type a city name..."})),r.a.createElement("div",{className:"col"},r.a.createElement(p,{styles:"success form-control",type:"submit"},"SEARCH"))))};E.defaultProps={onSearch:function(e){return e}};var k=E,S=n(33),y=function(e){var t=e.onSearch,n=void 0===t?function(e){return e}:t;return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/home",className:"navbar-brand"},"Global Clock"),r.a.createElement("ul",{className:"navbar-nav flex-row mr-md-auto"},r.a.createElement("li",{className:"nav-item mr-2"},r.a.createElement(S.a,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item mr-2"},r.a.createElement(S.a,{to:"/about",className:"nav-link"},"About"))),r.a.createElement("div",{className:"mx-auto mx-md-0"},r.a.createElement(k,{onSearch:n}))))},j=function(e){var t=e.onToggle,n=void 0===t?function(e){return e}:t;return r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:function(){return n()}},"12/24")},N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={hour:0,minute:0,ampm:"24"},n.handleToggle=n.handleToggle.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(function(t,n){return{hour:e.hour,minute:e.minute+n.increment}})}},{key:"handleToggle",value:function(){"24"===this.state.ampm?this.setState(Object(o.a)({},this.state,{ampm:"12"})):"12"===this.state.ampm&&this.setState(Object(o.a)({},this.state,{ampm:"24"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-6 col-md-4"},r.a.createElement("div",{className:"clockBorder p-3"},r.a.createElement("div",{className:"clockDisplay"},r.a.createElement("span",null,"24"===this.state.ampm?this.state.hour>9?this.state.hour:"0"+this.state.hour:this.state.hour<10?"0"+this.state.hour:this.state.hour<13?this.state.hour:24===this.state.hour?"00":this.state.hour-12,":"),r.a.createElement("span",null,this.state.minute>9?this.state.minute:"0"+this.state.minute),r.a.createElement("span",null," "),r.a.createElement("span",null,"24"===this.state.ampm?"":this.state.hour<13?"AM":"PM"))),r.a.createElement("div",{className:"mt-2"},r.a.createElement(j,{onToggle:this.handleToggle})))}}]),t}(a.Component),g=function(e){var t=e.site,n=e.children;return r.a.createElement("div",{className:"icon d-inline-block mx-1 mt-2 mb-5 pt-3"},r.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:n})))},O=function(){return r.a.createElement("div",{className:"about col-10 col-md-6"},r.a.createElement("h1",{className:"display-3"},"Hello, stranger!"),r.a.createElement("p",null,"Thank you for exploring the React Global Clock! "),r.a.createElement("p",null,"I am Matheus Souza and this is a portfolio project I have developed using React. "),r.a.createElement("p",null,"Check out my other projects:"),r.a.createElement(g,{site:"https://github.com/souzasmatheus/"},"fab fa-github"),r.a.createElement(g,{site:"https://www.linkedin.com/in/matheus-souza-6ab17616b/"},"fab fa-linkedin-in"))},w=function(e){var t=e.children,n=e.onSearch;return r.a.createElement("div",{className:"App"},r.a.createElement(y,{onSearch:n}),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row justify-content-center"},t)))},C=function(e){var t=e.onSearch,n=e.hour,a=e.minute,c=e.increment;return r.a.createElement(w,{onSearch:t},r.a.createElement(N,{hour:n,minute:a,increment:c}))},T=function(e){var t=e.onSearch;return r.a.createElement(w,{onSearch:t},r.a.createElement(O,null))},x=function(e){var t=e.hour,n=e.minute,a=e.increment,c=e.onSearch;return r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(C,{onSearch:c,hour:t,minute:n,increment:a})}}),r.a.createElement(f.a,{path:"/about",render:function(){return r.a.createElement(T,{onSearch:c})}})))},R=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={hour:0,minute:0,increment:0},e.getCityTime=e.getCityTime.bind(Object(d.a)(Object(d.a)(e))),e.handleResponse=e.handleResponse.bind(Object(d.a)(Object(d.a)(e))),e.checkSeconds=e.checkSeconds.bind(Object(d.a)(Object(d.a)(e))),e.resetLastSearch=e.resetLastSearch.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"checkSeconds",value:function(){var e=this,t=this.state.minute+this.state.increment,n=this.state.hour;if(this.seconds%60===0&&t<59){var a=this.seconds/60;clearInterval(this.counter),this.setState(Object(o.a)({},this.state,{increment:a}))}else if(this.seconds%60===0&&59===t&&23===n){this.seconds=0;clearInterval(this.counter),this.setState(function(t,n){return Object(o.a)({},e.state,{hour:0,minute:0,increment:0})})}else if(this.seconds%60===0&&59===t){this.seconds=0;clearInterval(this.counter),this.setState(function(t,n){return Object(o.a)({},e.state,{hour:t.hour+1,minute:0,increment:0})})}}},{key:"componentDidUpdate",value:function(){var e=this;this.counter=setInterval(function(){e.seconds=e.seconds+1,e.checkSeconds()},1e3)}},{key:"componentDidMount",value:function(){this.seconds=0,this.searchClicks=0}},{key:"handleResponse",value:function(e){var t=e.data.time_zone[0].localtime.split(" ")[1],n=t.split(":")[0],a=t.split(":")[1];this.setState(Object(o.a)({},this.state,{hour:Number(n),minute:Number(a),increment:0}))}},{key:"getCityTime",value:function(e){var t=this;new Promise(function(t,n){var a="https://api.worldweatheronline.com/premium/v1/tz.ashx?key=6bdee2019bc74d3bb34145746182611&q=".concat(e,"&format=json"),r=new XMLHttpRequest;r.open("GET",a),r.onload=function(){return 200===r.status?t(JSON.parse(r.response)):n(Error(r.statusText))},r.onerror=function(e){return n(e)},r.send()}).then(function(e){t.handleResponse(e)},function(e){return console.error(new Error("didn't work"))})}},{key:"resetLastSearch",value:function(e){this.searchClicks++,this.searchClicks>0&&(this.searchClicks=0,clearInterval(this.counter),this.seconds=0,this.getCityTime(e))}},{key:"render",value:function(){return r.a.createElement(x,{hour:this.state.hour,minute:this.state.minute,increment:this.state.increment,onSearch:this.resetLastSearch})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(30);s.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.74e884cd.chunk.js.map