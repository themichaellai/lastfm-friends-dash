webpackJsonp([1],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(5),s=n(a),i=r(181),u=n(i),o=r(45),d=r(52),f=r(214),c=n(f),l=r(51),p=n(l),m=r(218),h=n(m),v=r(223),y=n(v),T=(0,o.createStore)(y["default"],(0,o.applyMiddleware)(c["default"])),g=p["default"].parse(location.search);u["default"].render(s["default"].createElement(d.Provider,{store:T},s["default"].createElement(h["default"],{username:g.username})),document.getElementById("main"))},25:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(n[s]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},33:function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=p[n.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](n.parts[s]);for(;s<n.parts.length;s++)a.parts.push(d(n.parts[s],t))}else{for(var i=[],s=0;s<n.parts.length;s++)i.push(d(n.parts[s],t));p[n.id]={id:n.id,refs:1,parts:i}}}}function a(e){for(var t=[],r={},n=0;n<e.length;n++){var a=e[n],s=a[0],i=a[1],u=a[2],o=a[3],d={css:i,media:u,sourceMap:o};r[s]?r[s].parts.push(d):t.push(r[s]={id:s,parts:[d]})}return t}function s(e,t){var r=v(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function o(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function d(e,t){var r,n,a;if(t.singleton){var s=T++;r=y||(y=u(t)),n=f.bind(null,r,s,!1),a=f.bind(null,r,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=o(t),n=l.bind(null,r),a=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=u(t),n=c.bind(null,r),a=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}function f(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=k(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function c(e,t){var r=t.css,n=t.media;if(t.sourceMap,n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function l(e,t){var r=t.css,n=(t.media,t.sourceMap);n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,T=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=a(e);return n(r,t),function(e){for(var s=[],i=0;i<r.length;i++){var u=r[i],o=p[u.id];o.refs--,s.push(o)}if(e){var d=a(e);n(d,t)}for(var i=0;i<s.length;i++){var o=s[i];if(0===o.refs){for(var f=0;f<o.parts.length;f++)o.parts[f]();delete p[o.id]}}}};var k=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},46:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.parseTrack=t.parseLatestTrack=t.UserType=t.TrackType=void 0;var a=r(5),s=n(a),i=r(34),u=n(i),o=t.TrackType=s["default"].PropTypes.shape({name:s["default"].PropTypes.string.isRequired,url:s["default"].PropTypes.string.isRequired,album:s["default"].PropTypes.shape({name:s["default"].PropTypes.string.isRequired}),artist:s["default"].PropTypes.shape({name:s["default"].PropTypes.string.isRequired}),epoch:s["default"].PropTypes.string,nowPlaying:s["default"].PropTypes.bool.isRequired});t.UserType=s["default"].PropTypes.shape({name:s["default"].PropTypes.string.isRequired,realname:s["default"].PropTypes.string,url:s["default"].PropTypes.string.isRequired,tracks:s["default"].PropTypes.arrayOf(o).isRequired}),t.parseLatestTrack=function(e){return{name:e.name,url:e.url,album:{name:e.album.name},artist:{name:e.artist.name},epoch:u["default"].has(e,"@attr")?e["@attr"].uts:void 0,nowPlaying:!1}},t.parseTrack=function(e){return{name:e.name,url:e.url,album:{name:e.album["#text"]},artist:{name:e.artist["#text"]},epoch:u["default"].has(e,"date")?e.date.uts:void 0,nowPlaying:u["default"].has(e,"@attr")?"true"===e["@attr"].nowplaying:!1}}},74:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchLatestTracks=t.fetchFriends=t.recieveRecentTracks=t.RECIEVE_RECENT_TRACKS=t.recieveFriends=t.RECIEVE_FRIENDS=t.getFriends=t.GET_FRIENDS=void 0;var a=r(34),s=n(a),i=r(36),u=n(i),o=r(46),d=r(226),f=r(75),c=t.GET_FRIENDS="GET_FRIENDS",l=(t.getFriends=function(){return{type:c}},t.RECIEVE_FRIENDS="RECIEVE_FRIENDS"),p=t.recieveFriends=function(e,t,r){return{type:l,username:e,friends:t,friendsOrder:r}},m=t.RECIEVE_RECENT_TRACKS="RECIEVE_RECENT_TRACKS",h=t.recieveRecentTracks=function(e,t){return{type:m,username:e,tracks:t}},v=function(e){return"http://ws.audioscrobbler.com/2.0/?method=user.getfriends&user="+e+"&api_key="+d.LAST_FM_API_KEY+"&format=json&recentTracks=1"},y=function(e){return"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user="+e+"&api_key="+d.LAST_FM_API_KEY+"&format=json"},T=(t.fetchFriends=function(e){return function(t){return fetch(v(e)).then(function(e){return e.json()}).then(function(e){return e.friends.user.map(function(e){var t=void 0;return t=void 0===e.recenttrack?[]:[(0,o.parseLatestTrack)(e.recenttrack)],s["default"].extend(e,{tracks:t})})}).then(function(r){var n=r.map(function(e){return e.name}),a=s["default"].object(r.map(function(e){return[e.name,e]}));t(p(e,u["default"].fromJS(a),u["default"].fromJS(n)))})}},function(e,t){return e.friends.getIn(["friends",t,"tracks"]).size<2});t.fetchLatestTracks=function(e){return function(t,r){return t((0,f.selectFriend)(e)),T(r(),e)?fetch(y(e)).then(function(e){return e.json()}).then(function(r){var n=r.recenttracks.track.map(o.parseTrack);t(h(e,n))}):void 0}}},75:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.SELECT_FRIEND="SELECT_FRIEND";t.selectFriend=function(e){return{type:r,username:e}}},218:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5),s=n(a),i=r(52),u=r(74),o=r(220),d=n(o),f=r(222),c=n(f),l=r(338),p=n(l),m=s["default"].createClass({displayName:"App",propTypes:{friends:s["default"].PropTypes.object.isRequired,friendsOrder:s["default"].PropTypes.array.isRequired,uiState:s["default"].PropTypes.shape({selectedFriend:s["default"].PropTypes.string}),dispatch:s["default"].PropTypes.func.isRequired,username:s["default"].PropTypes.string},getDefaultProps:function(){return{friends:[],username:""}},componentDidMount:function(){""!==this.props.username&&(this.refs.usernameInput.value=this.props.username,this.props.dispatch((0,u.fetchFriends)(this.props.username)))},getFriends:function(){this.props.dispatch((0,u.fetchFriends)(this.refs.usernameInput.value))},handleFriendClick:function(e){this.props.dispatch((0,u.fetchLatestTracks)(e))},handleKeyPress:function(e){if("Enter"===e.key){var t=this.refs.usernameInput.value,r=window.location.pathname;this.getFriends(),window.history.pushState(t,t,r+"/?username="+t+"&")}},renderTracks:function(){var e=this.props,t=e.uiState,r=e.friends;return t.selectedFriend?s["default"].createElement(c["default"],{tracks:r[t.selectedFriend].tracks}):void 0},render:function(){return s["default"].createElement("div",{className:p["default"].main},s["default"].createElement("div",null,s["default"].createElement("div",{className:p["default"].usernameInput},s["default"].createElement("input",{type:"text",ref:"usernameInput",className:p["default"].usernameInputInput,onKeyPress:this.handleKeyPress}),s["default"].createElement("button",{className:p["default"].usernameInputButton,onClick:this.getFriends},"Go")),s["default"].createElement(d["default"],{friends:this.props.friends,friendsOrder:this.props.friendsOrder,handleFriendClick:this.handleFriendClick})),s["default"].createElement("div",null,this.renderTracks()))}}),h=function(e){return{friends:e.friends.get("friends").toJS(),friendsOrder:e.friends.get("friendsOrder").toJS(),uiState:e.uiState.toJS()}};t["default"]=(0,i.connect)(h)(m)},219:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5),s=n(a),i=r(34),u=n(i),o=r(339),d=n(o),f=s["default"].createClass({displayName:"Friend",propTypes:{friend:s["default"].PropTypes.object.isRequired,handleFriendClick:s["default"].PropTypes.func},getDefaultProps:function(){return{handleFriendClick:u["default"].identity}},handleFriendClick:function(){this.props.handleFriendClick(this.props.friend.name)},render:function(){var e=this.props.friend,t=e.tracks,r=null;if(t.length>=1){var n=u["default"].first(t);r=s["default"].createElement("div",{className:d["default"].friendMostRecentTrack},s["default"].createElement("a",{href:n.url},n.artist.name," - ",n.name))}return s["default"].createElement("div",{className:d["default"].friendRow},s["default"].createElement("div",{onClick:this.handleFriendClick,className:d["default"].friendName},e.name),r)}});t["default"]=f},220:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};Object.defineProperty(t,"__esModule",{value:!0});var s=r(5),i=n(s),u=r(219),o=n(u),d=r(340),f=n(d),c=function(e){var t=e.friends,r=e.friendsOrder,n=r.map(function(r){var n=t[r];return i["default"].createElement(o["default"],a({friend:n,key:n.name},e))});return i["default"].createElement("div",{className:f["default"].friends},n)};c.propTypes={friends:i["default"].PropTypes.object,friendsOrder:i["default"].PropTypes.arrayOf(i["default"].PropTypes.string).isRequired},t["default"]=c},221:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5),s=n(a),i=r(34),u=n(i),o=r(1),d=n(o),f=r(46),c=r(341),l=n(c),p=function(e){return e.nowPlaying?"now playing":u["default"].isUndefined(e.epoch)?"":(0,d["default"])(1e3*parseInt(e.epoch,10)).fromNow()},m=function(e){var t=e.track;return s["default"].createElement("li",{key:t.epoch+t.name,className:l["default"].track},s["default"].createElement("div",{className:l["default"].trackName},s["default"].createElement("a",{href:t.url},t.name)),s["default"].createElement("div",{className:l["default"].trackDetails},t.artist.name," — ",t.album.name,s["default"].createElement("span",{className:l["default"].timeAgo},p(t))))};m.propTypes={track:f.TrackType},t["default"]=m},222:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(5),s=n(a),i=r(46),u=r(221),o=n(u),d=r(342),f=n(d),c=function(e){var t=e.tracks,r=t.slice(0,20).map(function(e){return s["default"].createElement(o["default"],{key:e.epoch+e.name,track:e})});return s["default"].createElement("ul",{className:f["default"].tracks},r)};c.propTypes={tracks:s["default"].PropTypes.arrayOf(i.TrackType).isRequired},t["default"]=c},223:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(45),s=r(224),i=n(s),u=r(225),o=n(u),d=(0,a.combineReducers)({friends:i["default"],uiState:o["default"]});t["default"]=d},224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(36),a=r(74),s=function(e,t){switch(t.type){case a.GET_FRIENDS:return e;case a.RECIEVE_FRIENDS:var r=t.friendsOrder;return e.merge({friends:t.friends,friendsOrder:r});case a.RECIEVE_RECENT_TRACKS:var s=t.username,i=t.tracks;return e.setIn(["friends",s,"tracks"],i);default:return void 0===e?(0,n.Map)({friends:(0,n.Map)(),friendsOrder:(0,n.List)()}):e}};t["default"]=s},225:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(36),a=r(75),s=function(e,t){switch(t.type){case a.SELECT_FRIEND:return e.set("selectedFriend",t.username);default:return void 0===e?(0,n.Map)({selectedFriend:void 0}):e}};t["default"]=s},226:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LAST_FM_API_KEY="daefd5f6abde76dac2d88d5b9bd633fe"},227:function(e,t,r){t=e.exports=r(25)(),t.push([e.id,"body{font-family:Helvetica Neue,sans-serif}a{color:#336ab7;text-decoration:none}.App---main---1UbCf{display:flex;flex-direction:row}.App---usernameInput---pWNxS{margin-bottom:4px}.App---usernameInputButton---2MATH,.App---usernameInputInput---3l3o4{padding:6px 12px;font-size:1em;border-radius:4px;border:1px solid #ccc}.App---usernameInputButton---2MATH{margin:0 0 0 3px;background-color:#fff;color:#333}",""]),t.locals={main:"App---main---1UbCf",usernameInput:"App---usernameInput---pWNxS",usernameInputInput:"App---usernameInputInput---3l3o4",usernameInputButton:"App---usernameInputButton---2MATH"}},228:function(e,t,r){t=e.exports=r(25)(),t.push([e.id,".Friend---friendRow---1sDIJ{margin-bottom:10px}.Friend---friendName---2HmFP{font-weight:800;font-size:1.35em;cursor:pointer}.Friend---friendMostRecentTrack---UEF4g{font-size:.9em}",""]),t.locals={friendRow:"Friend---friendRow---1sDIJ",friendName:"Friend---friendName---2HmFP",friendMostRecentTrack:"Friend---friendMostRecentTrack---UEF4g"}},229:function(e,t,r){t=e.exports=r(25)(),t.push([e.id,".Friends---friends---3yMIl{padding-left:12px}",""]),t.locals={friends:"Friends---friends---3yMIl"}},230:function(e,t,r){t=e.exports=r(25)(),t.push([e.id,".Track---track---1VZG5{max-width:300px;margin-bottom:6px;padding:0 10px 0 0}.Track---trackName---m7Oto{margin-bottom:4px}.Track---trackDetails---3jKjr{font-size:.8em}.Track---timeAgo---1JugS{margin-left:10px}",""]),t.locals={track:"Track---track---1VZG5",trackName:"Track---trackName---m7Oto",trackDetails:"Track---trackDetails---3jKjr",timeAgo:"Track---timeAgo---1JugS"}},231:function(e,t,r){t=e.exports=r(25)(),t.push([e.id,".Tracks---tracks---O1q7a{list-style-type:none;display:flex;flex-direction:column;flex-wrap:wrap;padding-left:0;margin-top:0;max-width:300px;overflow:hidden}",""]),t.locals={tracks:"Tracks---tracks---O1q7a"}},338:function(e,t,r){var n=r(227);"string"==typeof n&&(n=[[e.id,n,""]]),r(33)(n,{}),n.locals&&(e.exports=n.locals)},339:function(e,t,r){var n=r(228);"string"==typeof n&&(n=[[e.id,n,""]]),r(33)(n,{}),n.locals&&(e.exports=n.locals)},340:function(e,t,r){var n=r(229);"string"==typeof n&&(n=[[e.id,n,""]]),r(33)(n,{}),n.locals&&(e.exports=n.locals)},341:function(e,t,r){var n=r(230);"string"==typeof n&&(n=[[e.id,n,""]]),r(33)(n,{}),n.locals&&(e.exports=n.locals)},342:function(e,t,r){var n=r(231);"string"==typeof n&&(n=[[e.id,n,""]]),r(33)(n,{}),n.locals&&(e.exports=n.locals)}});