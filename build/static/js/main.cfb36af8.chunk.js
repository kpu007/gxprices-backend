(this["webpackJsonpgx-frontend"]=this["webpackJsonpgx-frontend"]||[]).push([[0],{168:function(e,t,r){},172:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(23),o=r.n(c),u=r(14),l=r(5),i=r.n(l),s=r(8),m=r(7),d=r(13),p=r.n(d),f=function(){return p.a.get("/products")},E=function(e){return p.a.get("/products/group/"+e)},v=function(){return p.a.get("/groups")},h=null,b={setToken:function(e){h="bearer ".concat(e)},pushToWatchlist:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,p.a.put("/lists/"+t+"/watchlist/"+r,null,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),pushToCollection:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,p.a.put("/lists/"+t+"/collection/"+r,null,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteFromWatchlist:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,p.a.put("/lists/"+t+"/watchlist/delete/"+r,r,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteFromCollection:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,p.a.put("/lists/"+t+"/collection/delete/"+r,r,a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),increment:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,p.a.put("/lists/"+t+"/collection/increment/"+r,r,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),decrement:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,p.a.put("/lists/"+t+"/collection/decrement/"+r,r,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},g=function(){return p.a.get("/meta")},w=r(175),k=r(174),y=function(e){return e.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"})},x=function(e,t,r,a,n,c){var o=n.product.currentMarketPrice-n.product.previousMarketPrice,u=c.product.currentMarketPrice-c.product.previousMarketPrice;return"asc"===r?u-o:o-u},O=function(e,t){var r=(t.product.currentMarketPrice-t.product.previousMarketPrice).toFixed(2),a="black";return r<0?a="red":r>0&&(a="green",r="+"+r),n.a.createElement("font",{color:a},r)},j=function(e,t,r,a,n,c){var o=(n.product.currentMarketPrice-n.product.previousMarketPrice)/n.product.previousMarketPrice,u=(c.product.currentMarketPrice-c.product.previousMarketPrice)/c.product.previousMarketPrice;return"asc"===r?u-o:o-u},P=function(e,t){var r=(100*(t.product.currentMarketPrice-t.product.previousMarketPrice)/t.product.previousMarketPrice).toFixed(2),a="black";return r<0?a="red":r>0&&(a="green",r="+"+r),r+="%",n.a.createElement("font",{color:a},r)},F=function(e,t){return t.product.currentMarketPrice?t.product.currentMarketPrice.toFixed(2):"No price"},C=function(e,t,r,a,n,c){var o=n.currentMarketPrice-n.previousMarketPrice,u=c.currentMarketPrice-c.previousMarketPrice;return"asc"===r?u-o:o-u},S=function(e,t){var r=(t.currentMarketPrice-t.previousMarketPrice).toFixed(2),a="black";return r<0?a="red":r>0&&(a="green",r="+"+r),n.a.createElement("font",{color:a},r)},M=function(e,t,r,a,n,c){var o=(n.currentMarketPrice-n.previousMarketPrice)/n.previousMarketPrice,u=(c.currentMarketPrice-c.previousMarketPrice)/c.previousMarketPrice;return"asc"===r?u-o:o-u},N=function(e,t){var r=(100*(t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice).toFixed(2),a="black";return r<0?a="red":r>0&&(a="green",r="+"+r),r+="%",n.a.createElement("font",{color:a},r)},T=function(e,t){return t.currentMarketPrice?t.currentMarketPrice.toFixed(2):"No price"},U=function(e,t){return(t.product.currentMarketPrice-t.product.previousMarketPrice).toFixed(2)},D=function(e,t){return(100*(t.product.currentMarketPrice-t.product.previousMarketPrice)/t.product.previousMarketPrice).toFixed(2)+"%"},A=function(e,t){return(t.currentMarketPrice-t.previousMarketPrice).toFixed(2)},I=function(e,t){return(100*(t.currentMarketPrice-t.previousMarketPrice)/t.previousMarketPrice).toFixed(2)+"%"},L=function(e,t,r,a,n,c){var o=0;return o="string"===typeof e&&"string"===typeof t?e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"}):e>t?1:e<t?-1:0,"desc"===r&&(o*=-1),o},B=[{dataField:"cardNumber",order:"asc"}],z=r(77),R=r.n(z),J=function(e){var t=e.show,r=e.product,a=e.handleClose;return r?n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{show:t,onHide:a},n.a.createElement(w.a.Header,{closeButton:!0},n.a.createElement(w.a.Title,null,"Card Information")),n.a.createElement(w.a.Body,null,n.a.createElement("div",{align:"center"},n.a.createElement("table",{className:"product"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{rowSpan:"3"},n.a.createElement("div",{className:"product-image"},n.a.createElement("img",{src:r.imageUrl,alt:r.name}))),n.a.createElement("td",{valign:"top"},n.a.createElement("div",{className:"product-name"},r.name),n.a.createElement("div",{className:"product-info"},r.group?r.group.groupName:"Set Name Not Found"),n.a.createElement("div",{className:"product-info"},r.cardNumber),n.a.createElement("div",{className:"product-info"},r.cardRarity))),n.a.createElement("tr",null,n.a.createElement("td",{valign:"top"},n.a.createElement("div",{className:"product-info"},"Market Price: ",r.currentMarketPrice),n.a.createElement("div",{className:"product-info"},"Change: ",S(0,r)," (",N(0,r),")"),n.a.createElement("div",{className:"product-info"},"Last Updated: ",r.currentDate?y(new Date(r.currentDate)):"Unknown"))),n.a.createElement("tr",null,n.a.createElement("td",{valign:"top"},n.a.createElement("img",{width:"36px",height:"18px",alt:"",src:R.a}),"\xa0",n.a.createElement("a",{href:r.storeUrl},"Check TCGplayer prices"))))))),n.a.createElement(w.a.Footer,null,n.a.createElement(k.a,{variant:"primary",onClick:a},"Close")))):null},W=r(32),H=r.n(W),G=r(82),_=r(83),q="LoggedInGxPricesUser",V=function(e,t){return e.groupName<t.groupName?-1:e.groupName>t.groupName?1:0},Q=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)([]),u=Object(m.a)(o,2),l=u[0],d=u[1],p=Object(a.useState)(2594),h=Object(m.a)(p,2),w=h[0],k=h[1],x=Object(a.useState)(null),O=Object(m.a)(x,2),j=O[0],P=O[1],F=Object(a.useState)(null),U=Object(m.a)(F,2),D=U[0],A=U[1],I=Object(a.useState)(!1),z=Object(m.a)(I,2),R=z[0],W=z[1],Q=Object(a.useState)(null),Y=Object(m.a)(Q,2),X=Y[0],K=Y[1],Z=function(e){K(e),W(!0)},$=function(e){0==e?(console.log("getting all"),f().then((function(e){c(e.data)}))):E(e).then((function(e){c(e.data)}))};Object(a.useEffect)((function(){var e=window.localStorage.getItem(q);if(e){var t=JSON.parse(e);P(t),b.setToken(t.token)}}),[]),Object(a.useEffect)((function(){$(2594),v().then((function(e){d(e.data.sort(V))})),g().then((function(e){var t=new Date(e.data.lastUpdated);A(y(t))}))}),[]);var ee=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.pushToCollection(j.id,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.pushToWatchlist(j.id,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=[{dataField:"name",text:"Name",sort:!0,formatter:function(e,t){return n.a.createElement("button",{onClick:function(){return Z(t)}},t.name)}},{dataField:"group.groupName",text:"Set",sort:!0},{dataField:"cardNumber",text:"Number",sort:!0,sortFunc:L},{dataField:"cardRarity",text:"Rarity",sort:!0},{dataField:"currentMarketPrice",text:"Unit Price",sort:!0,formatter:T},{dataField:"difference",text:"Change",isDummyField:!0,sort:!0,sortFunc:C,formatter:S},{dataField:"percentDifference",text:"Change (%)",isDummyField:!0,sort:!0,sortFunc:M,formatter:N},{dataField:"button",isDummyField:!0,hidden:!j,formatter:function(e,t){return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return te(t._id)}},n.a.createElement(G.a,null)),n.a.createElement("button",{onClick:function(){return ee(t._id)}},n.a.createElement(_.a,null)))}}];return n.a.createElement("div",{align:"center"},n.a.createElement("h1",null,"Current Market Prices"),n.a.createElement("div",null,"Last updated: ",D),n.a.createElement("select",{id:"set-selector",name:"sets",value:w,onChange:function(e){return t=e.target.value,$(t),void k(t);var t}},n.a.createElement("option",{value:0,key:0},"All cards (slow!)"),l.map((function(e){return n.a.createElement("option",{value:e.groupId,key:e.groupId},e.groupName)}))),n.a.createElement(J,{product:X,show:R,handleClose:function(){return W(!1)}}),n.a.createElement(H.a,{bootstrap4:!0,keyField:"_id",data:r,columns:re,defaultSorted:B}))},Y=function(){return n.a.createElement("div",{className:"w-100 p-3"},n.a.createElement("h1",null,"FAQ"),n.a.createElement("br",null),n.a.createElement("h3",null,"What does this site have?"),n.a.createElement("p",null,"This site collates the TCGPlayer market price data for English Pok\xe9mon cards to allow for easier visibility of multiple prices at once. It also allows for users to see the general market value of their collection, or of cards that they are looking to buy in the future, and view the short-term changes of price data.",n.a.createElement("br",null),n.a.createElement("br",null),"Market price data is updated regularly, the price/percentage difference since the last update is also shown.",n.a.createElement("br",null),n.a.createElement("br",null),"You must register a free account to use the collection/watchlist features."),n.a.createElement("h3",null,"What does this site not have?"),n.a.createElement("p",null,"This site does not contain data for",n.a.createElement("ul",null,n.a.createElement("li",null,"graded cards"),n.a.createElement("li",null,"non-English cards"),n.a.createElement("li",null,"reverse holofoil cards"),n.a.createElement("li",null,"1st edition cards"),n.a.createElement("li",null,"sealed products"),n.a.createElement("li",null,"any non-Pok\xe9mon products"))),n.a.createElement("h3",null,"What are market prices?"),n.a.createElement("p",null,"Market prices are calculated by TCGPlayer based on the sales that take place through their platform. They serve as a good indicator as to what the card itself is worth.",n.a.createElement("br",null),n.a.createElement("br",null),"Market prices do not seem to take condition into account. Generally, even more expensive modern cards will be much more available as near-mint copies, so the market price will hover around there. But for older cards, the near-mint copies will be rarer and more people will settle for lightly played or similar, having to pay extra for near mint. So if you only want near-mint cards, market prices are more accurate for modern cards than they are for older cards."))},X=null,K={getUser:function(){var e=Object(s.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:X}},e.next=3,p.a.get("/users/"+t,r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),registerUser:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:t,password:r},e.next=3,p.a.post("/users",a);case 3:n=e.sent,console.log(n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),deleteUser:function(){var e=Object(s.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:X}},e.next=3,p.a.delete("/users/"+t,r);case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),changeUsername:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),a={headers:{Authorization:X}},n={newUsername:r},e.next=5,p.a.put("/users/"+t+"/changeusername",n,a);case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),changePassword:function(){var e=Object(s.a)(i.a.mark((function e(t,r){var a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:X}},n={newPassword:r},e.next=4,p.a.put("/users/"+t+"/changepassword",n,a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),setToken:function(e){X="bearer ".concat(e)}},Z=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)(""),u=Object(m.a)(o,2),l=u[0],d=u[1],p=Object(a.useState)(""),f=Object(m.a)(p,2),E=f[0],v=f[1],h=Object(a.useState)(""),g=Object(m.a)(h,2),w=g[0],k=g[1],y=Object(a.useState)(!1),x=Object(m.a)(y,2),O=x[0],j=x[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem(q);if(e){var t=JSON.parse(e);b.setToken(t.token)}}),[]);var P=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r&&0!==r.length){e.next=4;break}return k("Username required!"),e.abrupt("return");case 4:if(l&&0!==l.length){e.next=7;break}return k("Password required!"),e.abrupt("return");case 7:if(l===E){e.next=10;break}return k("Password and confirm password are different!"),e.abrupt("return");case 10:return e.prev=10,e.next=13,K.registerUser(r,l);case 13:j(!0),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),k("Username already in use!");case 19:case"end":return e.stop()}}),e,null,[[10,16]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",null,O?n.a.createElement("div",{className:"w-100 p-3"},"Success! Log in with your new credentials."):n.a.createElement("div",{align:"center",className:"w-100 p-3"},n.a.createElement("h2",null,"New user? Register here:"),n.a.createElement("form",{class:"form",onSubmit:P},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Username"),n.a.createElement("td",null,n.a.createElement("input",{class:"form",type:"text",value:r,onChange:function(e){var t=e.target;return c(t.value)}}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Password"),n.a.createElement("td",null,n.a.createElement("input",{class:"form",type:"password",value:l,onChange:function(e){var t=e.target;return d(t.value)}}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Confirm Password"),n.a.createElement("td",null,n.a.createElement("input",{class:"form",type:"password",value:E,onChange:function(e){var t=e.target;return v(t.value)}}))),n.a.createElement("tr",null,n.a.createElement("td",{align:"center",colSpan:"2"},w)),n.a.createElement("tr",null,n.a.createElement("td",{align:"center",colSpan:"2"},n.a.createElement("button",{type:"submit"},"Register")))))))},$=r(44),ee=r(43),te=r.n(ee),re=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)([]),u=Object(m.a)(o,2),l=u[0],d=u[1],p=Object(a.useState)(!1),f=Object(m.a)(p,2),E=f[0],v=f[1],h=Object(a.useState)(null),g=Object(m.a)(h,2),w=g[0],k=g[1],y=function(e){k(e),v(!0)};Object(a.useEffect)((function(){var e,t=window.localStorage.getItem(q);if(t){var r=JSON.parse(t);c(r),b.setToken(r.token),K.setToken(r.token),e=r.id,K.getUser(e).then((function(e){d(e.data.watchlist)}))}}),[]);var x=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.deleteFromWatchlist(r.id,t);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=[{dataField:"name",text:"Name",sort:!0,formatter:function(e,t){return n.a.createElement("button",{onClick:function(){return y(t)}},t.name)}},{dataField:"group.groupName",text:"Set",sort:!0},{dataField:"cardNumber",text:"Number",sort:!0,sortFunc:L},{dataField:"cardRarity",text:"Rarity",sort:!0},{dataField:"currentMarketPrice",text:"Unit Price",sort:!0,formatter:T},{dataField:"difference",text:"Change",isDummyField:!0,sort:!0,sortFunc:C,formatter:S,csvFormatter:A},{dataField:"percentDifference",text:"Change (%)",isDummyField:!0,sort:!0,sortFunc:M,formatter:N,csvFormatter:I},{dataField:"button",isDummyField:!0,formatter:function(e,t){return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return x(t._id)}},n.a.createElement($.a,null)))},csvExport:!1}],j=function(e){return n.a.createElement("button",{className:"btn btn-success",onClick:function(){e.onExport()}},"Export to CSV")};return n.a.createElement("div",{align:"center"},n.a.createElement("h1",null,"Watchlist"),r?n.a.createElement("div",null,n.a.createElement(J,{product:w,show:E,handleClose:function(){return v(!1)}}),n.a.createElement(te.a,{bootstrap4:!0,keyField:"id",data:l,columns:O,exportCSV:{fileName:"watchlist.csv"}},(function(e){return n.a.createElement("div",null,n.a.createElement(H.a,e.baseProps),n.a.createElement(j,e.csvProps,"Export to CSV"),n.a.createElement("hr",null))}))):n.a.createElement("div",null,"Log in or register first to view or create your watchlist!"))},ae=r(56),ne=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)([]),u=Object(m.a)(o,2),l=u[0],d=u[1],p=Object(a.useState)(null),f=Object(m.a)(p,2),E=f[0],v=f[1],h=Object(a.useState)(!1),g=Object(m.a)(h,2),w=g[0],k=g[1],y=function(e){v(e),k(!0)},C=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.deleteFromCollection(r.id,t);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.increment(r.id,t);case 2:a=e.sent,d(a.ownedProducts);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.decrement(r.id,t);case 2:a=e.sent,d(a.ownedProducts);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=[{dataField:"product.name",text:"Name",sort:!0,formatter:function(e,t){return n.a.createElement("button",{onClick:function(){return y(t.product)}},t.product.name)}},{dataField:"product.group.groupName",text:"Set",sort:!0},{dataField:"product.cardNumber",text:"Number",sort:!0,sortFunc:L},{dataField:"product.cardRarity",text:"Rarity",sort:!0},{dataField:"product.currentMarketPrice",text:"Unit Price",sort:!0,formatter:F},{dataField:"difference",text:"Change",isDummyField:!0,sort:!0,sortFunc:x,formatter:O,csvFormatter:U},{dataField:"percentDifference",text:"Change (%)",isDummyField:!0,sort:!0,sortFunc:j,formatter:P,csvFormatter:D},{dataField:"quantity",text:"Quantity",sort:!0},{dataField:"button",isDummyField:!0,formatter:function(e,t){return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return S(t.product._id)}},n.a.createElement(ae.b,null)),n.a.createElement("button",{onClick:function(){return M(t.product._id)}},n.a.createElement(ae.a,null)),n.a.createElement("button",{onClick:function(){return C(t.product._id)}},n.a.createElement($.a,null)))},csvExport:!1}];Object(a.useEffect)((function(){var e,t=window.localStorage.getItem(q);if(t){var r=JSON.parse(t);c(r),b.setToken(r.token),K.setToken(r.token),e=r.id,K.getUser(e).then((function(e){d(e.data.ownedProducts)}))}}),[]);var T=function(e){return n.a.createElement("button",{className:"btn btn-success",onClick:function(){e.onExport()}},"Export to CSV")};return n.a.createElement("div",{align:"center"},n.a.createElement("h1",null,"Collection"),r?n.a.createElement("div",null,n.a.createElement(J,{product:E,show:w,handleClose:function(){return k(!1)}}),n.a.createElement(te.a,{bootstrap4:!0,keyField:"id",data:l,columns:N,exportCSV:{fileName:"collection.csv"}},(function(e){return n.a.createElement("div",null,n.a.createElement(H.a,e.baseProps),n.a.createElement(T,e.csvProps,"Export to CSV"),n.a.createElement("hr",null))}))):n.a.createElement("div",null,"Log in or register to view or create your collection!"))},ce=r(17),oe=r(177),ue=r(176),le=function(){var e=window.localStorage.getItem(q);return e?JSON.parse(e):null},ie=function(){window.localStorage.clear()},se={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/login",t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),r=(t[0],t[1]),c=Object(a.useState)(""),o=Object(m.a)(c,2),l=o[0],d=o[1],p=Object(a.useState)(""),f=Object(m.a)(p,2),E=f[0],v=f[1],h=Object(a.useState)(!1),g=Object(m.a)(h,2),y=g[0],x=g[1],O=Object(u.f)(),j=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),ie(),r(null),O.push("/"),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,se.login({username:l,password:E});case 4:a=e.sent,window.localStorage.setItem(q,JSON.stringify(a)),b.setToken(a.token),r(a),d(""),v(""),O.push("/"),window.location.reload(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),x(!0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),F=le();return n.a.createElement(oe.a,{bg:"light",expand:"lg"},n.a.createElement(oe.a.Brand,{href:"#home"},"GXPrices"),n.a.createElement(oe.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(oe.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(ue.a,{className:"mr-auto"},n.a.createElement(ue.a.Link,{as:ce.b,to:"/"},"Prices"),n.a.createElement(ue.a.Link,{as:ce.b,to:"/watchlist"},"Watchlist"),n.a.createElement(ue.a.Link,{as:ce.b,to:"/collection"},"Collection"),F?null:n.a.createElement(ue.a.Link,{as:ce.b,to:"/register"},"Register"),F?n.a.createElement(ue.a.Link,{as:ce.b,to:"/userpage"},"Account"):null,n.a.createElement(ue.a.Link,{as:ce.b,to:"/faq"},"FAQ")),n.a.createElement(ue.a,null,F?function(){var e="";return F&&(e="Logged in as "+F.username+" "),n.a.createElement("form",{onSubmit:j},e,n.a.createElement("button",{type:"submit"},"Logout"))}():n.a.createElement("form",{onSubmit:P},function(){var e=function(){return x(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{show:y,onHide:e},n.a.createElement(w.a.Header,{closeButton:!0},n.a.createElement(w.a.Title,null,"Error")),n.a.createElement(w.a.Body,null,n.a.createElement("div",null,"Invalid credentials!")),n.a.createElement(w.a.Footer,null,n.a.createElement(k.a,{variant:"primary",onClick:e},"Close"))))}(),n.a.createElement("input",{id:"username",type:"text",value:l,placeholder:"Username",name:"Username",onChange:function(e){var t=e.target;return d(t.value)}}),"\xa0",n.a.createElement("input",{id:"password",type:"password",value:E,placeholder:"Password",name:"Password",onChange:function(e){var t=e.target;return v(t.value)}}),"\xa0",n.a.createElement("button",{type:"submit"},"Log In")))))},de=function(){return n.a.createElement(oe.a,{sticky:"bottom",bg:"light",expand:"lg"},n.a.createElement(oe.a.Text,null,"\xa9 2020 GXPrices. Pok\xe9mon is \xa9 Nintendo 1996-2020."),n.a.createElement(oe.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(ue.a,{className:"mr-auto align-right"}),n.a.createElement(ue.a,null,n.a.createElement(ue.a.Link,{as:ce.b,to:"/privacy"},"Privacy Policy")))},pe=function(e){var t=e.user,r=e.show,c=e.handleClose,o=Object(a.useState)(""),l=Object(m.a)(o,2),d=l[0],p=l[1],f=Object(a.useState)(""),E=Object(m.a)(f,2),v=E[0],h=E[1],b=Object(a.useState)(""),g=Object(m.a)(b,2),y=g[0],x=g[1],O=Object(u.f)(),j=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d===v){e.next=5;break}return x("Password and confirm password are different!"),e.abrupt("return");case 5:if(0!==d.length){e.next=8;break}return x("Password required!"),e.abrupt("return");case 8:return K.setToken(t.token),e.next=11,K.changePassword(t.id,d);case 11:ie(),O.push("/"),window.location.reload();case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{show:r,onHide:c},n.a.createElement(w.a.Header,{closeButton:!0},n.a.createElement(w.a.Title,null,"Change Password")),n.a.createElement(w.a.Body,null,n.a.createElement("div",{align:"center"},n.a.createElement("form",null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},"If successful, this will log you out.")),n.a.createElement("tr",null,n.a.createElement("td",{align:"right"},"New Password"),n.a.createElement("td",null,n.a.createElement("input",{type:"password",value:d,onChange:function(e){var t=e.target;return p(t.value)}}))),n.a.createElement("tr",null,n.a.createElement("td",{align:"right"},"Confirm Password"),n.a.createElement("td",null,n.a.createElement("input",{type:"password",value:v,onChange:function(e){var t=e.target;return h(t.value)}}))),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2"},y))))),n.a.createElement(w.a.Footer,null,n.a.createElement(k.a,{variant:"primary",onClick:j},"Change Password"),n.a.createElement(k.a,{variant:"secondary",onClick:c},"Close"))))},fe=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),r=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(m.a)(o,2),d=l[0],p=l[1],f=Object(a.useState)(!1),E=Object(m.a)(f,2),v=E[0],h=E[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem(q);if(e){var t=JSON.parse(e);c(t),K.setToken(t.token)}}),[]);var b=Object(u.f)(),g=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=3;break}return e.next=3,K.deleteUser(r.id);case 3:ie(),c(null),b.push("/"),window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r?n.a.createElement("div",{className:"w-100 p-3"},function(){var e=function(){return p(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{show:d,onHide:e},n.a.createElement(w.a.Header,{closeButton:!0},n.a.createElement(w.a.Title,null,"Confirm Deletion")),n.a.createElement(w.a.Body,null,n.a.createElement("div",null,"Are you sure you want to delete your account? This cannot be undone!")),n.a.createElement(w.a.Footer,null,n.a.createElement(k.a,{variant:"primary",onClick:function(){return g()}},"Confirm"),n.a.createElement(k.a,{variant:"secondary",onClick:e},"Cancel"))))}(),n.a.createElement(pe,{user:r,show:v,handleClose:function(){return h(!1)}}),n.a.createElement("div",{align:"center"},n.a.createElement("h1",null,"My Account"),n.a.createElement("br",null),n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Username:"),n.a.createElement("td",null,r.username)),n.a.createElement("tr",null,n.a.createElement("td",{align:"center",colSpan:"2"},n.a.createElement("button",{onClick:function(){return h(!0)}},"Change Password"))),n.a.createElement("tr",null,n.a.createElement("td",{align:"center",colSpan:"2"},n.a.createElement("button",{onClick:function(){return p(!0)}},"Delete Account")))))):n.a.createElement("div",{className:"w-100 p-3"},"You must log in to view this!")},Ee=function(){return n.a.createElement("div",{className:"w-100 p-3"},n.a.createElement("h1",null,"Privacy Policy"),n.a.createElement("br",null),n.a.createElement("p",null,"This site in itself does not store any data about you or your computer."),n.a.createElement("p",null,"This site will store the items you add to your collection and watchlist in its database. This data is not sold or given out to any third parties.",n.a.createElement("br",null),"You may delete your account at any time from your user page. If you delete your account this data will be automatically removed from the database."))},ve=(r(168),r(169),r(170),r(171),function(){return n.a.createElement("main",null,n.a.createElement(me,null),n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/",component:Q,exact:!0}),n.a.createElement(u.a,{path:"/faq",component:Y}),n.a.createElement(u.a,{path:"/register",component:Z}),n.a.createElement(u.a,{path:"/userpage",component:fe}),n.a.createElement(u.a,{path:"/watchlist",component:re}),n.a.createElement(u.a,{path:"/collection",component:ne}),n.a.createElement(u.a,{path:"/privacy",component:Ee})),n.a.createElement(de,null))});o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ce.a,null,n.a.createElement(ve,null))),document.getElementById("root"))},77:function(e,t,r){e.exports=r.p+"static/media/tcgplayerlogo.53964ec9.png"},88:function(e,t,r){e.exports=r(172)}},[[88,1,2]]]);
//# sourceMappingURL=main.cfb36af8.chunk.js.map