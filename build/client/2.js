(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{124:function(e,a,t){"use strict";t.r(a);var n,s,c=t(0),r=t.n(c),l=t(3),m=t(20),i=t(23),o=t(6),d=t.n(o),u=(n=["\n  query get_transaction($id: String!) {\n    transaction(id: $id) {\n      id\n      trx {\n        receipt {\n          status\n          cpu_usage_us\n          net_usage_words\n        }\n      }\n      block_time\n      block_num\n      last_irreversible_block\n      traces {\n        receipt {\n          receiver\n          act_digest\n          global_sequence\n        }\n        act {\n          account\n          name\n          data\n        }\n      }\n    }\n    chain {\n      head_block_num\n    }\n  }\n"],s=["\n  query get_transaction($id: String!) {\n    transaction(id: $id) {\n      id\n      trx {\n        receipt {\n          status\n          cpu_usage_us\n          net_usage_words\n        }\n      }\n      block_time\n      block_num\n      last_irreversible_block\n      traces {\n        receipt {\n          receiver\n          act_digest\n          global_sequence\n        }\n        act {\n          account\n          name\n          data\n        }\n      }\n    }\n    chain {\n      head_block_num\n    }\n  }\n"],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(s)}}))),p=d()(u),v=t(1),E=t(45),b=t(8),N=t(16),_=(t(4),t(32)),f=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}();function g(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}var h=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var s=arguments.length,c=Array(s),r=0;r<s;r++)c[r]=arguments[r];return t=n=g(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(c))),n.notify=function(){return i.toast.error("Not found!",{position:i.toast.POSITION.TOP_RIGHT})},g(n,t)}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,c.Component),f(a,[{key:"render",value:function(){var e=this;return this.action_digests_tmp="",r.a.createElement(l.Query,{query:p,variables:{id:this.props.id}},function(a){var t=a.loading,n=a.error,s=a.data;if(t)return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{icon:"spinner",spin:!0,className:"text-info"})));if(n)return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{icon:"spinner",spin:!0,className:"text-info"})));var c=s.transaction,l=s.chain;return c&&l?(e.action_digests_tmp="",r.a.createElement("div",null,r.a.createElement("div",{className:"card-block "},r.a.createElement("div",{className:"row row-sm stats-container m-0"},r.a.createElement("div",{className:"col-12 col-sm-12 stat-col pr-1 pl-1"},r.a.createElement("div",{className:"stat-icon"},r.a.createElement(v.a,{icon:"table"})),r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"value ftz-11"},c.id),r.a.createElement("div",{className:"name"},"Transaction ID")),r.a.createElement("div",{className:"progress stat-progress"},r.a.createElement("div",{className:"progress-bar",style:{width:"0%"}}))),r.a.createElement("div",{className:"col-12 col-sm-4 stat-col pr-1 pl-1"},r.a.createElement("div",{className:"row m-0"},r.a.createElement("div",{className:"col-6 col-sm-12 col-md-6 p-1"},r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"value ftz-11"},Object(b.c)(c.block_num)),r.a.createElement("div",{className:"name"},"Block num")),r.a.createElement("div",{className:"progress stat-progress"},r.a.createElement("div",{className:"progress-bar",style:{width:"0%"}}))),r.a.createElement("div",{className:"col-6 col-sm-12 col-md-6 p-1"},r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"value ftz-11"},Object(b.a)(new Date(c.block_time)).toLocaleString()),r.a.createElement("div",{className:"name"},"Block time")),r.a.createElement("div",{className:"progress stat-progress"},r.a.createElement("div",{className:"progress-bar",style:{width:"0%"}})))),r.a.createElement("div",{className:"row m-0"},r.a.createElement("div",{className:"col-6 col-sm-12 col-md-6 p-1"},r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"value ftz-11"},c.trx.receipt.status),r.a.createElement("div",{className:"name"},"Transaction status")),r.a.createElement("div",{className:"progress stat-progress"},r.a.createElement("div",{className:"progress-bar",style:{width:"0%"}}))),r.a.createElement("div",{className:"col-6 col-sm-12 col-md-6 p-1"},r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"value ftz-11"},r.a.createElement(_.a,{block_num:c.block_num})),r.a.createElement("div",{className:"name"},"Block status")),r.a.createElement("div",{className:"progress stat-progress"},r.a.createElement("div",{className:"progress-bar",style:{width:"0%"}})))),r.a.createElement("div",{className:"row m-0"},r.a.createElement("div",{className:"col-6 col-sm-12 col-md-6 p-1"},r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"value ftz-11"},Object(N.b)(Number(c.trx.receipt.cpu_usage_us))),r.a.createElement("div",{className:"name"},"CPU usage")),r.a.createElement("div",{className:"progress stat-progress"},r.a.createElement("div",{className:"progress-bar",style:{width:"0%"}}))),r.a.createElement("div",{className:"col-6 col-sm-12 col-md-6 p-1"},r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"value ftz-11"},Object(N.a)(Number(c.trx.receipt.net_usage_words))),r.a.createElement("div",{className:"name"},"Net usage")),r.a.createElement("div",{className:"progress stat-progress"},r.a.createElement("div",{className:"progress-bar",style:{width:"0%"}}))))),r.a.createElement("div",{className:"col-12 col-sm-8  pr-0 pl-1"},r.a.createElement("div",{className:"card sameheight-item mb-0","data-exclude":"xs"},r.a.createElement("div",{className:"card-header card-header-sm bg-light shadow-sm row m-0"},r.a.createElement("div",{className:"header-block pl-2 col"},r.a.createElement(v.a,{icon:"tasks",className:"mr-2 text-info"}),r.a.createElement("h5",{className:"title text-info ftz-12"},"Actions"))),r.a.createElement("div",{className:"card-block pt-0"},r.a.createElement("div",{className:"no-more-tables"},r.a.createElement("table",{className:"table actions_font tablayout mb-0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Info"))),r.a.createElement(m.CSSTransitionGroup,{component:"tbody",transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},c.traces.slice().reverse().map(function(a){return a.receipt.act_digest!==e.action_digests_tmp?(e.action_digests_tmp=a.receipt.act_digest,r.a.createElement(E.a,{key:a.receipt.global_sequence,action_trace:a,block_time:c.block_time,block_num:c.block_num,last_irreversible_block:c.last_irreversible_block,head_block_num:l.head_block_num,get_block_status:!0,trx_id:c.id})):null}))))))))))):(e.notify(),r.a.createElement(i.ToastContainer,{autoClose:2e3}))})}}]),a}(),w=t(21);a.default=function(e){var a=e.match;return r.a.createElement("article",{className:"content dashboard-page"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"row m-0"},r.a.createElement("div",{className:"col col-12 col-sm-12 col-md-12 col-l-12 col-xl-12 stats-col pd-col"},r.a.createElement("div",{className:"card sameheight-item stats mbc","data-exclude":"xs"},r.a.createElement("div",{className:"card-header card-header-sm bg-light shadow-sm"},r.a.createElement("div",{className:"header-block pl-2"},r.a.createElement(v.a,{icon:"table",className:"mr-2 text-info"}),r.a.createElement("h5",{className:"title text-info"},r.a.createElement("div",null,"Transaction ")))),r.a.createElement(w.a,null,r.a.createElement(h,{id:a.params.id})))))))}}}]);