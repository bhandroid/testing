(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(7),s=n.n(c),o=(n(14),n(9)),i=n(8),u=n(2),l=n(3),b=n(5),j=n(4),d=n(0),h=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("nav",{class:"navbar navbar-light bg-light",children:Object(d.jsx)("div",{class:"container-fluid",children:Object(d.jsxs)("a",{class:"navbar-brand",href:"#",children:["Navbar"," ",Object(d.jsx)("span",{className:"badge badge-pill badge-secondary",children:this.props.totalCounters})]})})})}}]),n}(r.Component),p=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:this.getBadgeClasses(),children:this.formatCount()}),Object(d.jsx)("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm",children:"Increment"}),Object(d.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2",children:"Delete"})]})}},{key:"getBadgeClasses",value:function(){var e="badge  m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(r.Component),v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:this.props.onReset,className:"btn btn-primary btn-sm m-2",children:"Reset"}),this.props.counters.map((function(t){return Object(d.jsx)(p,{onDelete:e.props.onDelete,onIncrement:e.props.onIncrement,counter:t},t.id)}))]})}}]),n}(r.Component),f=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={counters:[{id:1,value:1},{id:2,value:2},{id:3,value:3},{id:4,value:4}]},e.handleIncrement=function(t){var n=Object(i.a)(e.state.counters),r=n.indexOf(t);n[r]=Object(o.a)({},t),n[r].value++,e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)(h,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),Object(d.jsx)("main",{className:"container",children:Object(d.jsx)(v,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDelete:this.handleDelete})})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(16);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.758f6311.chunk.js.map