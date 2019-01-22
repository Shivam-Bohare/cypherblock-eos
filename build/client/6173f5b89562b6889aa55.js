(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=(0,s(a(15)).default)(["\n  query get_block($block_num_or_id: String!) {\n    block(block_num_or_id: $block_num_or_id) {\n      id\n      timestamp\n      producer\n      previous\n      block_num\n      transactions {\n        trx\n      }\n    }\n  }\n"],["\n  query get_block($block_num_or_id: String!) {\n    block(block_num_or_id: $block_num_or_id) {\n      id\n      timestamp\n      producer\n      previous\n      block_num\n      transactions {\n        trx\n      }\n    }\n  }\n"]),r=s(a(14));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)(l)},154:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=E(a(49)),r=E(a(3)),s=E(a(7)),c=E(a(6)),d=E(a(5)),n=E(a(4)),m=a(0),o=E(m),u=a(11),i=a(46),f=E(a(142)),p=a(13),v=E(a(70));function E(e){return e&&e.__esModule?e:{default:e}}var N=function(e){return e.isDarkMode,o.default.createElement("div",{className:"card-block "},o.default.createElement("div",{className:"text-center align-middle overlay pt-50"},o.default.createElement("i",{className:"fa fa-spinner fa-spin text-info fa-2x"})),o.default.createElement("div",{className:"row row-sm stats-container m-0 plheight"}))},b=function(e){function t(){var e,a,l,c;(0,s.default)(this,t);for(var n=arguments.length,m=Array(n),o=0;o<n;o++)m[o]=arguments[o];return a=l=(0,d.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(m))),l.notify=function(){return i.toast.error("Not found!",{position:i.toast.POSITION.TOP_RIGHT})},c=a,(0,d.default)(l,c)}return(0,n.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this,t=this.props.isDarkMode;return o.default.createElement(u.Query,{query:f.default,variables:{block_num_or_id:this.props.block_num_or_id}},function(a){var r=a.loading,s=a.error,c=a.data;if(r)return o.default.createElement(N,null);if(s)return o.default.createElement(N,null);var d=c.block;return d?o.default.createElement("div",{className:"row row-sm stats-container m-0"},o.default.createElement("div",{className:"col-12 col-sm-12 stat-col pr-2 pl-2"},o.default.createElement("div",{className:"stat"},o.default.createElement("div",{className:"blocktxid"},d.id),o.default.createElement("div",{className:"name"},"Block ID")),o.default.createElement("div",{className:"progress stat-progress"},o.default.createElement("div",{className:"progress-bar",style:{width:"0%"}}))),o.default.createElement("div",{className:"col-12 col-sm-12 stat-col pr-2 pl-2"},o.default.createElement("div",{className:"stat"},o.default.createElement("div",{className:"value ftz-11"},(0,p.renderBlockLink)(d.previous)),o.default.createElement("div",{className:"name"},"Previous Block")),o.default.createElement("div",{className:"progress stat-progress"},o.default.createElement("div",{className:"progress-bar",style:{width:"0%"}}))),o.default.createElement("div",{className:"col-12 col-sm-12 stat-col pr-1 pl-1"},o.default.createElement("div",{className:"col-6 col-sm-3 col-md-3 stat-col pr-1 pl-1"},o.default.createElement("div",{className:"stat"},o.default.createElement("div",{className:"value ftz-11"},(0,p.renderBlockLink)(d.block_num)),o.default.createElement("div",{className:"name"},"Block num")),o.default.createElement("div",{className:"progress stat-progress"},o.default.createElement("div",{className:"progress-bar",style:{width:"0%"}}))),o.default.createElement("div",{className:"col-6 col-sm-3 col-md-3 stat-col pr-1 pl-1"},o.default.createElement("div",{className:"stat"},o.default.createElement("div",{className:"value ftz-11"},(0,p.convertUTCDateToLocalDate)(new Date(d.timestamp)).toLocaleString()),o.default.createElement("div",{className:"name"},"Timestamp")),o.default.createElement("div",{className:"progress stat-progress"},o.default.createElement("div",{className:"progress-bar",style:{width:"0%"}}))),o.default.createElement("div",{className:"col-6 col-sm-3 col-md-3 stat-col pr-1 pl-1"},o.default.createElement("div",{className:"stat"},o.default.createElement("div",{className:"value ftz-11"},(0,p.renderAccountLink)(d.producer)),o.default.createElement("div",{className:"name"},"Producer")),o.default.createElement("div",{className:"progress stat-progress"},o.default.createElement("div",{className:"progress-bar",style:{width:"0%"}}))),o.default.createElement("div",{className:"col-6 col-sm-3 col-md-3 stat-col pr-1 pl-1"},o.default.createElement("div",{className:"stat"},o.default.createElement("div",{className:"value ftz-11"},o.default.createElement(v.default,{block_num:d.block_num})),o.default.createElement("div",{className:"name"},"Status")),o.default.createElement("div",{className:"progress stat-progress"},o.default.createElement("div",{className:"progress-bar",style:{width:"0%"}})))),o.default.createElement("div",{className:"col-12 col-sm-12 mt-1  pr-0 pl-1"},o.default.createElement("div",{className:"card sameheight-item "+(t?"bg-dark":"bg-actions")+" mb-1 mr-1","data-exclude":"xs"},o.default.createElement("div",{className:"card-header card-header-sm row m-0"},o.default.createElement("div",{className:"header-block pl-2 col"},o.default.createElement("i",{className:"fa fa-list-alt text-info mr-2"}),o.default.createElement("h1",{className:"title text-info"},"Transactions"))),o.default.createElement("div",{className:"card-body rounded-bottom ftz-12 pr-1 pl-1 pt-1 pb-0"},d.transactions.map(function(e,a){return"string"==typeof e.trx?o.default.createElement("div",{key:e.trx,className:(t?"bg-dark":"")+" card-token-price row m-0 mb-1 rounded d-flex"},o.default.createElement("div",{className:"col-2 col-sm-1 "},a+1),o.default.createElement("div",{className:"col-10 col-sm-11 p-0"},(0,p.renderTransLink)(e.trx))):"object"==(0,l.default)(e.trx)&&"string"==typeof e.trx.id?o.default.createElement("div",{key:e.trx.id,className:(t?"bg-dark":"")+" card-token-price row m-0 mb-1 rounded"},o.default.createElement("div",{className:"col-2 col-sm-1"},a+1),o.default.createElement("div",{className:"col-10 col-sm-11 p-0"},(0,p.renderTransLink)(e.trx.id))):null}))))):(e.notify(),o.default.createElement(i.ToastContainer,{autoClose:2e3}))})}}]),t}(m.Component);t.default=b},195:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(0)),r=a(8),s=a(29),c=n(a(154)),d=n(a(69));function n(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.connect)(function(e){return{sidebar:e.myStore.sidebar}},null)(function(e){var t=e.match,a=e.sidebar;return l.default.createElement("article",{className:"content dashboard-page"},l.default.createElement(s.Helmet,null,l.default.createElement("title",null,"Block | Cypherblock | EOS Block Explorer ")),l.default.createElement("section",{className:"section"},l.default.createElement("div",{className:"row m-0"},l.default.createElement("div",{className:"col col-12 col-sm-12 col-md-12 col-l-12 col-xl-12 pd-col"},l.default.createElement("div",{className:"card sameheight-item stats "+(a.isDarkMode?"bg-dark":"")+" mbc","data-exclude":"xs"},l.default.createElement("div",{className:"card-header  bg-white shadow-sm"},l.default.createElement("div",{className:"header-block pl-2"},l.default.createElement("i",{className:"fa fa-cube text-info fa-lg mr-2"}),l.default.createElement("h1",{className:"title text-info"},"Block"))),l.default.createElement(d.default,null,l.default.createElement(c.default,{block_num_or_id:t.params.block_num_or_id,isDarkMode:a.isDarkMode})))))))})}}]);