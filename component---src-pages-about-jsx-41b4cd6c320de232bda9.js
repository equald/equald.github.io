<<<<<<< HEAD
webpackJsonp([0x83323ebd9d39],{158:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},u=o(1),f=n(u),c=o(2),s=n(c),p=o(24),d=n(p),h=o(14),y=n(h),b=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return f.default.createElement(y.default,l({},this.props,{flat:!0}))},e}(u.PureComponent);b.propTypes={label:s.default.node.isRequired,className:s.default.string,iconBefore:s.default.bool,children:s.default.node,type:s.default.string,primary:s.default.bool,secondary:s.default.bool,disabled:s.default.bool,href:s.default.string,onClick:s.default.func,deprecated:(0,d.default)("The behavior of the `FlatButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `flat`.")},b.defaultProps={type:"button",iconBefore:!0},e.default=b},159:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},f=o(1),c=n(f),s=o(2),p=n(s),d=o(3),h=n(d),y=o(24),b=n(y),m=o(81),w=n(m),g=function(t){function e(){return a(this,e),i(this,t.apply(this,arguments))}return l(e,t),e.prototype.render=function(){var t=this.props,e=t.className,o=t.fixed,n=t.mini,a=t.children,i=t.iconClassName,l=r(t,["className","fixed","mini","children","iconClassName"]);return c.default.createElement(w.default,u({},l,{className:(0,h.default)({"md-btn--floating-fixed":o,"md-btn--floating-mini":n},e),iconClassName:i,floating:!0}),a)},e}(f.PureComponent);g.propTypes={iconClassName:p.default.string,children:p.default.node,className:p.default.string,type:p.default.string,disabled:p.default.bool,href:p.default.string,onClick:p.default.func,tooltipLabel:p.default.node,tooltipPosition:p.default.oneOf(["top","right","bottom","left"]),tooltipDelay:p.default.number,fixed:p.default.bool,mini:p.default.bool,primary:p.default.bool,secondary:p.default.bool,deprecated:(0,b.default)("The behavior of the `FloatingButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `floating`.")},e.default=g},81:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},f=o(1),c=n(f),s=o(2),p=n(s),d=o(24),h=n(d),y=o(7),b=n(y),m=o(87),w=n(m),g=o(14),v=n(g),_=function(t){function e(){return a(this,e),i(this,t.apply(this,arguments))}return l(e,t),e.prototype.render=function(){var t=this.props,e=t.iconClassName,o=t.children,n=t.tooltip,a=t.floating,i=r(t,["iconClassName","children","tooltip","floating"]);return delete i.tooltipLabel,delete i.tooltipPosition,c.default.createElement(v.default,u({},i,{icon:!a,floating:a}),n,c.default.createElement(b.default,{iconClassName:e},o))},e}(f.PureComponent);_.propTypes={iconClassName:p.default.string,children:p.default.node,className:p.default.string,type:p.default.string,disabled:p.default.bool,href:p.default.string,onClick:p.default.func,tooltipLabel:p.default.node,tooltipPosition:p.default.oneOf(["top","right","bottom","left"]),tooltipDelay:p.default.number,tooltip:p.default.node,floating:p.default.bool,deprecated:(0,h.default)("The behavior of the `IconButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `icon`.")},_.defaultProps={type:"button"},e.default=(0,w.default)(_)},160:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},u=o(1),f=n(u),c=o(2),s=n(c),p=o(24),d=n(p),h=o(14),y=n(h),b=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return f.default.createElement(y.default,l({},this.props,{raised:!0}))},e}(u.PureComponent);b.propTypes={label:s.default.node.isRequired,className:s.default.string,iconBefore:s.default.bool,children:s.default.node,type:s.default.string,primary:s.default.bool,secondary:s.default.bool,disabled:s.default.bool,href:s.default.string,onClick:s.default.func,deprecated:(0,d.default)("The behavior of the `RaisedButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `raised`.")},b.defaultProps={type:"button",iconBefore:!0},e.default=b},161:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.IconButton=e.FloatingButton=e.RaisedButton=e.FlatButton=e.Button=void 0;var r=o(14),a=n(r),i=o(158),l=n(i),u=o(160),f=n(u),c=o(159),s=n(c),p=o(81),d=n(p);e.default=a.default,e.Button=a.default,e.FlatButton=l.default,e.RaisedButton=f.default,e.FloatingButton=s.default,e.IconButton=d.default},24:function(t,e){"use strict";function o(t){return function(e,o,n){var r=n||"<<anonymous>>";return new Error("The `"+r+"` has been deprecated and will be removed in the next release. "+t)}}e.__esModule=!0,e.default=o},301:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=o(1),u=n(l),f=o(59),c=n(f),s=o(109),p=n(s),d=o(127),h=n(d),y=o(126),b=n(y),m=o(22),w=n(m);o(478);var g=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return u.default.createElement("div",{className:"about-container md-grid mobile-fix"},u.default.createElement(c.default,{className:"md-grid md-cell--8"},u.default.createElement("div",{className:"about-wrapper"},u.default.createElement(b.default,{width:"300",height:"300"}),u.default.createElement(p.default,null,u.default.createElement("p",{className:"about-text md-body-1"},w.default.userDescription.split("\n").map(function(t){return t.length>0?u.default.createElement(l.Fragment,{key:t},t,u.default.createElement("br",null)):null}))),u.default.createElement(h.default,{labeled:!0,config:w.default}))))},e}(l.Component);e.default=g,t.exports=e.default},478:function(t,e){},126:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=o(1),u=n(l);o(154);var f=function(t){function e(o){r(this,e);var n=a(this,t.call(this,o));return n.updateCanvas=n.updateCanvas.bind(n),n}return i(e,t),e.prototype.componentDidMount=function(){this.updateCanvas()},e.prototype.updateCanvas=function(){var t=this,e={lineWidth:18,eyes:{centerPos:{x:150,y:75},width:18,height:72,eyeSpacing:18},mouth:{centerPos:{x:150,y:205.5},height:107,width:154,mouthShape:"default"}},o=this.refs.canvas.getContext("2d");o.lineWidth=e.lineWidth,o.lineCap="round";var n=function(){var t=e.eyes,o=e.mouth,n={eyesTop:t.centerPos.y-t.height/2,eyesBottom:t.centerPos.y+t.height/2,eyeLeftX:t.centerPos.x-t.eyeSpacing,eyeRightX:t.centerPos.x+t.eyeSpacing};e.eyesDrawData={left:{top:{x:n.eyeLeftX,y:n.eyesTop},bottom:{x:n.eyeLeftX,y:n.eyesBottom}},right:{top:{x:n.eyeRightX,y:n.eyesTop},bottom:{x:n.eyeRightX,y:n.eyesBottom}}},e.mouthDrawData={left:{x:o.centerPos.x-o.width/2,y:o.centerPos.y-o.height/2},right:{x:o.centerPos.x+o.width/2,y:o.centerPos.y-o.height/2},bottom:{x:o.centerPos.x,y:o.centerPos.y+o.height/2}}},r=function(){var n=e.eyesDrawData,r=e.mouthDrawData;o.clearRect(0,0,300,300),o.beginPath(),o.strokeStyle=t.props.strokeStyle,o.moveTo(n.left.top.x,n.left.top.y),o.lineTo(n.left.bottom.x,n.left.bottom.y),o.moveTo(n.right.top.x,n.right.top.y),o.lineTo(n.right.bottom.x,n.right.bottom.y),o.moveTo(r.left.x,r.left.y),o.lineTo(r.right.x,r.right.y),o.moveTo(r.left.x,r.left.y),o.bezierCurveTo(r.left.x,r.bottom.y,r.bottom.x,r.bottom.y,r.bottom.x,r.bottom.y),o.moveTo(r.right.x,r.right.y),o.bezierCurveTo(r.right.x,r.bottom.y,r.bottom.x,r.bottom.y,r.bottom.x,r.bottom.y),o.stroke()},a=function(){var t=e.eyesDrawData,o=t.left.top.y;t.left.top.y=t.left.bottom.y,t.right.top.y=t.right.bottom.y,r();var n=setInterval(function(){o<t.left.top.y?(t.left.top.y=t.left.top.y-10>o?t.left.top.y-10:o,t.right.top.y=t.right.top.y-10>o?t.right.top.y-10:o,r()):clearInterval(n)},20)};n(e),r();setInterval(function(){a()},2e3)},e.prototype.render=function(){return u.default.createElement("div",{className:"logo-wrapper"},u.default.createElement("canvas",{ref:"canvas",id:"my-canvas",width:this.props.width,height:this.props.height}))},e}(u.default.Component);e.default=f,t.exports=e.default},154:function(t,e){},127:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=o(1),u=n(l),f=o(161),c=n(f);o(155);var s=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.getLinkElements=function(){var t=this.props.config.userLinks,e=this.props.labeled;return t.map(function(t){return u.default.createElement(c.default,{icon:!e,flat:e,secondary:!0,key:t.label,iconClassName:t.iconClassName,href:t.url},e?t.label:"")})},e.prototype.render=function(){var t=this.props.config.userLinks;return t?u.default.createElement("div",{className:"user-links"},this.getLinkElements()):null},e}(l.Component);e.default=s,t.exports=e.default},155:function(t,e){},311:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=o(1),u=n(l),f=o(34),c=n(f),s=o(301),p=n(s),d=o(22),h=n(d),y=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return u.default.createElement("div",{className:"about-container"},u.default.createElement(c.default,null,u.default.createElement("title",null,"About | "+h.default.siteTitle),u.default.createElement("link",{rel:"canonical",href:h.default.siteUrl+"/about/"})),u.default.createElement(p.default,null))},e}(l.Component);e.default=y,t.exports=e.default}});
=======
webpackJsonp([0x83323ebd9d39],{158:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},u=o(1),f=n(u),c=o(2),s=n(c),p=o(24),d=n(p),h=o(14),y=n(h),b=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return f.default.createElement(y.default,l({},this.props,{flat:!0}))},e}(u.PureComponent);b.propTypes={label:s.default.node.isRequired,className:s.default.string,iconBefore:s.default.bool,children:s.default.node,type:s.default.string,primary:s.default.bool,secondary:s.default.bool,disabled:s.default.bool,href:s.default.string,onClick:s.default.func,deprecated:(0,d.default)("The behavior of the `FlatButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `flat`.")},b.defaultProps={type:"button",iconBefore:!0},e.default=b},159:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},f=o(1),c=n(f),s=o(2),p=n(s),d=o(3),h=n(d),y=o(24),b=n(y),m=o(81),w=n(m),g=function(t){function e(){return a(this,e),i(this,t.apply(this,arguments))}return l(e,t),e.prototype.render=function(){var t=this.props,e=t.className,o=t.fixed,n=t.mini,a=t.children,i=t.iconClassName,l=r(t,["className","fixed","mini","children","iconClassName"]);return c.default.createElement(w.default,u({},l,{className:(0,h.default)({"md-btn--floating-fixed":o,"md-btn--floating-mini":n},e),iconClassName:i,floating:!0}),a)},e}(f.PureComponent);g.propTypes={iconClassName:p.default.string,children:p.default.node,className:p.default.string,type:p.default.string,disabled:p.default.bool,href:p.default.string,onClick:p.default.func,tooltipLabel:p.default.node,tooltipPosition:p.default.oneOf(["top","right","bottom","left"]),tooltipDelay:p.default.number,fixed:p.default.bool,mini:p.default.bool,primary:p.default.bool,secondary:p.default.bool,deprecated:(0,b.default)("The behavior of the `FloatingButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `floating`.")},e.default=g},81:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},f=o(1),c=n(f),s=o(2),p=n(s),d=o(24),h=n(d),y=o(7),b=n(y),m=o(87),w=n(m),g=o(14),v=n(g),_=function(t){function e(){return a(this,e),i(this,t.apply(this,arguments))}return l(e,t),e.prototype.render=function(){var t=this.props,e=t.iconClassName,o=t.children,n=t.tooltip,a=t.floating,i=r(t,["iconClassName","children","tooltip","floating"]);return delete i.tooltipLabel,delete i.tooltipPosition,c.default.createElement(v.default,u({},i,{icon:!a,floating:a}),n,c.default.createElement(b.default,{iconClassName:e},o))},e}(f.PureComponent);_.propTypes={iconClassName:p.default.string,children:p.default.node,className:p.default.string,type:p.default.string,disabled:p.default.bool,href:p.default.string,onClick:p.default.func,tooltipLabel:p.default.node,tooltipPosition:p.default.oneOf(["top","right","bottom","left"]),tooltipDelay:p.default.number,tooltip:p.default.node,floating:p.default.bool,deprecated:(0,h.default)("The behavior of the `IconButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `icon`.")},_.defaultProps={type:"button"},e.default=(0,w.default)(_)},160:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},u=o(1),f=n(u),c=o(2),s=n(c),p=o(24),d=n(p),h=o(14),y=n(h),b=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return f.default.createElement(y.default,l({},this.props,{raised:!0}))},e}(u.PureComponent);b.propTypes={label:s.default.node.isRequired,className:s.default.string,iconBefore:s.default.bool,children:s.default.node,type:s.default.string,primary:s.default.bool,secondary:s.default.bool,disabled:s.default.bool,href:s.default.string,onClick:s.default.func,deprecated:(0,d.default)("The behavior of the `RaisedButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `raised`.")},b.defaultProps={type:"button",iconBefore:!0},e.default=b},161:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.IconButton=e.FloatingButton=e.RaisedButton=e.FlatButton=e.Button=void 0;var r=o(14),a=n(r),i=o(158),l=n(i),u=o(160),f=n(u),c=o(159),s=n(c),p=o(81),d=n(p);e.default=a.default,e.Button=a.default,e.FlatButton=l.default,e.RaisedButton=f.default,e.FloatingButton=s.default,e.IconButton=d.default},24:function(t,e){"use strict";function o(t){return function(e,o,n){var r=n||"<<anonymous>>";return new Error("The `"+r+"` has been deprecated and will be removed in the next release. "+t)}}e.__esModule=!0,e.default=o},301:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=o(1),u=n(l),f=o(59),c=n(f),s=o(109),p=n(s),d=o(127),h=n(d),y=o(126),b=n(y),m=o(22),w=n(m);o(476);var g=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return u.default.createElement("div",{className:"about-container md-grid mobile-fix"},u.default.createElement(c.default,{className:"md-grid md-cell--8"},u.default.createElement("div",{className:"about-wrapper"},u.default.createElement(b.default,{width:"300",height:"300"}),u.default.createElement(p.default,null,u.default.createElement("p",{className:"about-text md-body-1"},w.default.userDescription.split("\n").map(function(t){return t.length>0?u.default.createElement(l.Fragment,{key:t},t,u.default.createElement("br",null)):null}))),u.default.createElement(h.default,{labeled:!0,config:w.default}))))},e}(l.Component);e.default=g,t.exports=e.default},476:function(t,e){},126:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=o(1),u=n(l);o(154);var f=function(t){function e(o){r(this,e);var n=a(this,t.call(this,o));return n.updateCanvas=n.updateCanvas.bind(n),n}return i(e,t),e.prototype.componentDidMount=function(){this.updateCanvas()},e.prototype.updateCanvas=function(){var t=this,e={lineWidth:18,eyes:{centerPos:{x:150,y:75},width:18,height:72,eyeSpacing:18},mouth:{centerPos:{x:150,y:205.5},height:107,width:154,mouthShape:"default"}},o=this.refs.canvas.getContext("2d");o.lineWidth=e.lineWidth,o.lineCap="round";var n=function(){var t=e.eyes,o=e.mouth,n={eyesTop:t.centerPos.y-t.height/2,eyesBottom:t.centerPos.y+t.height/2,eyeLeftX:t.centerPos.x-t.eyeSpacing,eyeRightX:t.centerPos.x+t.eyeSpacing};e.eyesDrawData={left:{top:{x:n.eyeLeftX,y:n.eyesTop},bottom:{x:n.eyeLeftX,y:n.eyesBottom}},right:{top:{x:n.eyeRightX,y:n.eyesTop},bottom:{x:n.eyeRightX,y:n.eyesBottom}}},e.mouthDrawData={left:{x:o.centerPos.x-o.width/2,y:o.centerPos.y-o.height/2},right:{x:o.centerPos.x+o.width/2,y:o.centerPos.y-o.height/2},bottom:{x:o.centerPos.x,y:o.centerPos.y+o.height/2}}},r=function(){var n=e.eyesDrawData,r=e.mouthDrawData;o.clearRect(0,0,300,300),o.beginPath(),o.strokeStyle=t.props.strokeStyle,o.moveTo(n.left.top.x,n.left.top.y),o.lineTo(n.left.bottom.x,n.left.bottom.y),o.moveTo(n.right.top.x,n.right.top.y),o.lineTo(n.right.bottom.x,n.right.bottom.y),o.moveTo(r.left.x,r.left.y),o.lineTo(r.right.x,r.right.y),o.moveTo(r.left.x,r.left.y),o.bezierCurveTo(r.left.x,r.bottom.y,r.bottom.x,r.bottom.y,r.bottom.x,r.bottom.y),o.moveTo(r.right.x,r.right.y),o.bezierCurveTo(r.right.x,r.bottom.y,r.bottom.x,r.bottom.y,r.bottom.x,r.bottom.y),o.stroke()},a=function(){var t=e.eyesDrawData,o=t.left.top.y;t.left.top.y=t.left.bottom.y,t.right.top.y=t.right.bottom.y,r();var n=setInterval(function(){o<t.left.top.y?(t.left.top.y=t.left.top.y-10>o?t.left.top.y-10:o,t.right.top.y=t.right.top.y-10>o?t.right.top.y-10:o,r()):clearInterval(n)},20)};n(e),r();setInterval(function(){a()},2e3)},e.prototype.render=function(){return u.default.createElement("div",{className:"logo-wrapper"},u.default.createElement("canvas",{ref:"canvas",id:"my-canvas",width:this.props.width,height:this.props.height}))},e}(u.default.Component);e.default=f,t.exports=e.default},154:function(t,e){},127:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=o(1),u=n(l),f=o(161),c=n(f);o(155);var s=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.getLinkElements=function(){var t=this.props.config.userLinks,e=this.props.labeled;return t.map(function(t){return u.default.createElement(c.default,{icon:!e,flat:e,secondary:!0,key:t.label,iconClassName:t.iconClassName,href:t.url},e?t.label:"")})},e.prototype.render=function(){var t=this.props.config.userLinks;return t?u.default.createElement("div",{className:"user-links"},this.getLinkElements()):null},e}(l.Component);e.default=s,t.exports=e.default},155:function(t,e){},311:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=o(1),u=n(l),f=o(34),c=n(f),s=o(301),p=n(s),d=o(22),h=n(d),y=function(t){function e(){return r(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){return u.default.createElement("div",{className:"about-container"},u.default.createElement(c.default,null,u.default.createElement("title",null,"About | "+h.default.siteTitle),u.default.createElement("link",{rel:"canonical",href:h.default.siteUrl+"/about/"})),u.default.createElement(p.default,null))},e}(l.Component);e.default=y,t.exports=e.default}});
>>>>>>> 383502eb221c74a140e83a94608386d23d9748e2
//# sourceMappingURL=component---src-pages-about-jsx-41b4cd6c320de232bda9.js.map