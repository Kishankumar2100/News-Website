(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{27:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),r=s(15),a=s.n(r),l=(s(27),s(12)),o=s.n(l),i=s(16),d=s(17),j=s(18),x=s(22),b=s(21),h=s(1),m=function(e){Object(x.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(d.a)(this,s),c=t.call(this,e),console.log("i am constructor"),c.state={name1:"Wait for sometime...",count:0},c}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("i am coponentdidmount"),e.next=3,fetch("https://newsapi.org/v2/everything?q=".concat(this.props.newsName,"&apiKey=39c3025e706146f99c1db7b6e2295f6e"));case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,console.log(s,typeof s.articles,s.articles,typeof ar),{width:"400px"},c=s.articles.map((function(e){return Object(h.jsx)("div",{class:"p-8",children:Object(h.jsxs)("div",{class:"max-w-sm rounded overflow-hidden shadow-lg",children:[Object(h.jsx)("img",{class:"w-full",src:e.urlToImage}),Object(h.jsxs)("div",{class:"px-6 py-4",children:[Object(h.jsx)("div",{class:"font-bold text-xl mb-2",children:e.title}),Object(h.jsx)("p",{class:"text-gray-700 text-base",children:e.description}),Object(h.jsxs)("button",{class:"font-bold text-xl mb-2",children:[" ",Object(h.jsx)("a",{href:e.url,children:"Read more"})]})]})]})})})),console.log(c),this.setState({name1:c});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(" i am render",this.state.count),Object(h.jsxs)("div",{class:"p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1",children:[this.state.name1," "]})}}]),s}(n.a.Component),p=s(7);var u=function(){return Object(h.jsx)("header",{class:"text-gray-600 body-font",children:Object(h.jsxs)("div",{class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[Object(h.jsxs)("a",{class:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),Object(h.jsx)("span",{class:"ml-3 text-xl",children:"News"})]}),Object(h.jsxs)("nav",{class:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400\tflex flex-wrap items-center text-base justify-center",children:[Object(h.jsx)(p.b,{class:"mr-5 hover:text-gray-900",to:"/Apple",children:"Apple"}),Object(h.jsx)(p.b,{class:"mr-5 hover:text-gray-900",to:"/Tesla",children:"Tesla"}),Object(h.jsx)(p.b,{class:"mr-5 hover:text-gray-900",to:"/Bitcoin",children:"Bitcoin"}),Object(h.jsx)(p.b,{class:"mr-5 hover:text-gray-900",to:"/Nasa",children:"Nasa"}),Object(h.jsx)(p.b,{class:"mr-5 hover:text-gray-900",to:"/upsc",children:"Upsc"})]}),Object(h.jsx)("input",{type:"text",className:"text-base"})]})})},f=s(2),O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(p.a,{children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{}),Object(h.jsx)(f.a,{exact:!0,path:"/Apple",children:Object(h.jsx)(m,{newsName:"iphone"})}),Object(h.jsx)(f.a,{path:"/Tesla",children:Object(h.jsx)(m,{newsName:"tesla"})}),Object(h.jsx)(f.a,{path:"/Bitcoin",children:Object(h.jsx)(m,{newsName:"bitcoin"})}),Object(h.jsx)(f.a,{path:"/nasa",children:Object(h.jsx)(m,{newsName:"nasa"})}),Object(h.jsx)(f.a,{path:"/upsc",children:Object(h.jsx)(m,{newsName:"upsc"})})]})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.e219f1ab.chunk.js.map