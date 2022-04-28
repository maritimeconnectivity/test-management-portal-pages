!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],s=!0,c=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(a){c=!0,i=a}finally{try{s||null==r.return||r.return()}finally{if(c)throw i}}return o}(e,t)||r(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmanagement_portal=self.webpackChunkmanagement_portal||[]).push([[277],{57714:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(93576);t.Observable=n.Observable},46056:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(57714))},93576:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(15730),i=r(67104),o=r(96232),s=r(23915),c=r(68273),a=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(e,t,r){var n=this.operator,o=i.toSubscriber(e,t,r);if(o.add(n?n.call(o,this.source):this.source||c.config.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),c.config.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){c.config.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),n.canReportError(e)?e.error(t):console.warn(t)}},e.prototype.forEach=function(e,t){var r=this;return new(t=u(t))(function(t,n){var i;i=r.subscribe(function(t){try{e(t)}catch(r){n(r),i&&i.unsubscribe()}},n,t)})},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[o.observable]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:s.pipeFromArray(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=u(e))(function(e,r){var n;t.subscribe(function(e){return n=e},function(e){return r(e)},function(){return e(n)})})},e.create=function(t){return new e(t)},e}();function u(e){if(e||(e=c.config.Promise||Promise),!e)throw new Error("no Promise impl found");return e}t.Observable=a},16011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(68273),i=r(32434);t.empty={closed:!0,next:function(e){},error:function(e){if(n.config.useDeprecatedSynchronousErrorHandling)throw e;i.hostReportError(e)},complete:function(){}}},67241:function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(67382),s=r(16011),c=r(43984),a=r(81476),u=r(68273),l=r(32434),h=function(e){function t(r,n,i){var o=e.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=s.empty;break;case 1:if(!r){o.destination=s.empty;break}if("object"==typeof r){r instanceof t?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new d(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new d(o,r,n,i)}return o}return i(t,e),t.prototype[a.rxSubscriber]=function(){return this},t.create=function(e,r,n){var i=new t(e,r,n);return i.syncErrorThrowable=!1,i},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(c.Subscription);t.Subscriber=h;var d=function(e){function t(t,r,n,i){var c,a=e.call(this)||this;a._parentSubscriber=t;var u=a;return o.isFunction(r)?c=r:r&&(c=r.next,n=r.error,i=r.complete,r!==s.empty&&(u=Object.create(r),o.isFunction(u.unsubscribe)&&a.add(u.unsubscribe.bind(u)),u.unsubscribe=a.unsubscribe.bind(a))),a._context=u,a._next=c,a._error=n,a._complete=i,a}return i(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;u.config.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,r=u.config.useDeprecatedSynchronousErrorHandling;if(this._error)r&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)r?(t.syncErrorValue=e,t.syncErrorThrown=!0):l.hostReportError(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;l.hostReportError(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var r=function(){return e._complete.call(e._context)};u.config.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(r){if(this.unsubscribe(),u.config.useDeprecatedSynchronousErrorHandling)throw r;l.hostReportError(r)}},t.prototype.__tryOrSetError=function(e,t,r){if(!u.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(n){return u.config.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=n,e.syncErrorThrown=!0,!0):(l.hostReportError(n),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(h);t.SafeSubscriber=d},43984:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(40993),i=r(54720),o=r(67382),s=r(18574),c=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}var t;return e.prototype.unsubscribe=function(){var t;if(!this.closed){var r=this._parentOrParents,c=this._ctorUnsubscribe,u=this._unsubscribe,l=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(var h=0;h<r.length;++h)r[h].remove(this);if(o.isFunction(u)){c&&(this._unsubscribe=void 0);try{u.call(this)}catch(p){t=p instanceof s.UnsubscriptionError?a(p.errors):[p]}}if(n.isArray(l)){h=-1;for(var d=l.length;++h<d;){var f=l[h];if(i.isObject(f))try{f.unsubscribe()}catch(p){t=t||[],p instanceof s.UnsubscriptionError?t=t.concat(a(p.errors)):t.push(p)}}}if(t)throw new s.UnsubscriptionError(t)}},e.prototype.add=function(t){var r=t;if(!t)return e.EMPTY;switch(typeof t){case"function":r=new e(t);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof e)){var n=r;(r=new e)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var i=r._parentOrParents;if(null===i)r._parentOrParents=this;else if(i instanceof e){if(i===this)return r;r._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return r;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var r=t.indexOf(e);-1!==r&&t.splice(r,1)}},e.EMPTY=((t=new e).closed=!0,t),e}();function a(e){return e.reduce(function(e,t){return e.concat(t instanceof s.UnsubscriptionError?t.errors:t)},[])}t.Subscription=c},68273:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=!1;t.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){var t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},96232:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.observable="function"==typeof Symbol&&Symbol.observable||"@@observable"},81476:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rxSubscriber="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),t.$$rxSubscriber=t.rxSubscriber},18574:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map(function(e,t){return t+1+") "+e.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}();t.UnsubscriptionError=r},15730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67241);t.canReportError=function(e){for(;e;){var t=e.destination;if(e.closed||e.isStopped)return!1;e=t&&t instanceof n.Subscriber?t:null}return!0}},32434:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hostReportError=function(e){setTimeout(function(){throw e},0)}},72516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.identity=function(e){return e}},40993:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isArray=Array.isArray||function(e){return e&&"number"==typeof e.length}},67382:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFunction=function(e){return"function"==typeof e}},54720:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=function(e){return null!==e&&"object"==typeof e}},23915:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(72516);function i(e){return 0===e.length?n.identity:1===e.length?e[0]:function(t){return e.reduce(function(e,t){return t(e)},t)}}t.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(e)},t.pipeFromArray=i},67104:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67241),i=r(81476),o=r(16011);t.toSubscriber=function(e,t,r){if(e){if(e instanceof n.Subscriber)return e;if(e[i.rxSubscriber])return e[i.rxSubscriber]()}return e||t||r?new n.Subscriber(e,t,r):new n.Subscriber(o.empty)}},72277:function(r,n,i){"use strict";i.r(n),i.d(n,{ListViewModule:function(){return B}});var c=i(44466),a=i(38583),u=i(37716),l=i(99763),h=function(){var e=function e(){s(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-list-view"]],decls:1,vars:0,template:function(e,t){1&e&&u["\u0275\u0275element"](0,"router-outlet")},directives:[l.lC],encapsulation:2}),e}(),d=i(46056),f=i(33539),p=i(70419),v=i(58304),m=i(77229),g=i(33667),b=i(47770),y=i(8996),S=i(76009),O=i(53542),_=(i(79774),i(34869),i(1502),i(21831)),C=i(67126),M=i(32826),w=i(36276);i(19454),i(81247),i(43355),i(45556),i(18649);var T=i(33037),P=i(96297),I=i(98609),E=i(50384);function j(e,t){if(1&e){var r=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",10),u["\u0275\u0275listener"]("click",function(){return u["\u0275\u0275restoreView"](r),u["\u0275\u0275nextContext"]().onAddNew()}),u["\u0275\u0275text"](1,"Add new"),u["\u0275\u0275elementEnd"]()}}function R(e,t){if(1&e){var r=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ng2-smart-table",11),u["\u0275\u0275listener"]("edit",function(e){return u["\u0275\u0275restoreView"](r),u["\u0275\u0275nextContext"]().onEdit(e)})("delete",function(e){return u["\u0275\u0275restoreView"](r),u["\u0275\u0275nextContext"]().onDelete(e)}),u["\u0275\u0275elementEnd"]()}if(2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("settings",n.settings)("source",n.source)}}var k=function(){var r=function(){function r(e,t,n,i,o,c,a,u,l,h,g,b,y){var S=this;s(this,r),this.router=e,this.userControllerService=n,this.deviceControllerService=i,this.roleControllerService=o,this.vesselControllerService=c,this.serviceControllerService=a,this.instanceControllerService=u,this.searchControllerService=l,this.mmsControllerService=h,this.organizationControllerService=g,this.notifierService=b,this.authService=y,this.menuType="device",this.title=" for ",this.contextForAttributes="list",this.orgName="MCC",this.orgMrn="",this.iconName="circle",this.menuTypeName="",this.data=[],this.isLoading=!1,this.mySettings={mode:"external",edit:{editButtonContent:'<i class="nb-compose"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:f.O[this.menuType],hideSubHeader:!0},this.showTables=!0,this.source=new p.nC,this.isForServiceForOrg=!1,this.deleteData=function(e,t,r,n,i){return e===v.RJ.user?S.userControllerService.deleteUser(t,r):e===v.RJ.device?S.deviceControllerService.deleteDevice(t,r):e===v.RJ.vessel?S.vesselControllerService.deleteVessel(t,r):e===v.RJ.mms?S.mmsControllerService.deleteMMS(t,r):e===v.RJ.service&&n?S.serviceControllerService.deleteService(t,r,n):e===v.RJ.organization?S.organizationControllerService.deleteOrg(r):e===v.RJ.role&&i?S.roleControllerService.deleteRole(t,i):new d.Observable},this.loadMyOrganization=function(){return S.organizationControllerService.getOrganizationByMrn(S.authService.authState.orgMrn)},this.loadServiceInstances=function(e){return e?S.searchControllerService.searchInstancesUsingGET("","",!1,"organizationId:"+e.split(":").join("\\:")+"*"):S.instanceControllerService.getInstancesUsingGET()},this.loadDataContent=function(e,t){return e===v.og.User?S.userControllerService.getOrganizationUsers(t):e===v.og.Device?S.deviceControllerService.getOrganizationDevices(t):e===v.og.Vessel?S.vesselControllerService.getOrganizationVessels(t):e===v.og.MMS?S.mmsControllerService.getOrganizationMMSes(t):e===v.og.Service?S.serviceControllerService.getOrganizationServices(t):e===v.og.Organization?S.organizationControllerService.getOrganization():e===v.og.UnapprovedOrg?S.organizationControllerService.getUnapprovedOrganizations():new d.Observable},this.loadRoles=function(e){return S.roleControllerService.getRoles(e)},this.isAdmin=function(){var e=S.menuType;return e===v.RJ.user?S.authService.authState.hasPermissionInMIR(m.Xg.UserAdmin):e===v.RJ.device?S.authService.authState.hasPermissionInMIR(m.Xg.DeviceAdmin):e===v.RJ.vessel?S.authService.authState.hasPermissionInMIR(m.Xg.VesselAdmin):e===v.RJ.mms?S.authService.authState.hasPermissionInMIR(m.Xg.MMSAdmin):e===v.RJ.service?S.authService.authState.hasPermissionInMIR(m.Xg.ServiceAdmin):e===v.RJ.organization||e===v.RJ.role?S.authService.authState.hasPermissionInMIR(m.Xg.OrgAdmin):e===v.RJ.instance&&S.authService.authState.hasPermissionInMSR(S.isForServiceForOrg?m.aK.OrgServiceAdmin:m.aK.MSRAdmin)},this.menuType=this.router.url.split("/").pop(),this.menuType=this.menuType.endsWith("s")?this.menuType.replace("-","").substr(0,this.menuType.length-1):this.menuType.replace("-",""),this.menuType===v.og.InstanceOfOrg&&(this.isForServiceForOrg=!0,this.menuType=v.og.Instance),Object.values(v.og).includes(this.menuType)?(this.menuTypeName=v.RJ[this.menuType],this.iconName=v.nZ[this.menuType],this.orgMrn=this.authService.authState.orgMrn,t.registerFontPack("fas",{packClass:"fas",iconClassPrefix:"fa"})):this.router.navigate(["**"])}return o(r,[{key:"ngOnInit",value:function(){this.fetchValues()}},{key:"fetchValues",value:function(){var r,n=this;if(!f.O.hasOwnProperty(this.menuType))throw this.isLoading=!1,new Error("There's no '".concat(this.menuType,"DataService' in ColumnForMenu"));if(this.mySettings.columns=Object.assign.apply(Object,[{}].concat(t(Object.entries(f.O[this.menuType]).filter(function(t){var r=e(t,2),i=(r[0],r[1]);return Array.isArray(i.visibleFrom)&&i.visibleFrom.includes(n.contextForAttributes)}).map(function(t){var r,n,i,o=e(t,2),s=o[0],c=o[1];return i=c,(n=s)in(r={})?Object.defineProperty(r,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[n]=i,r})))),this.settings=Object.assign({},this.mySettings),this.title="".concat("string"!=typeof(r=this.menuTypeName)?"":r.charAt(0).toUpperCase()+r.slice(1)," list"),this.isLoading=!0,!Object.values(v.og).includes(this.menuType))throw this.isLoading=!1,new Error("There's no such thing as '".concat(this.menuType,"DataService'"));this.menuType===v.og.Organization||this.menuType===v.og.UnapprovedOrg?this.loadDataContent(this.menuType).subscribe(function(e){n.source.load(n.formatResponse(e.content)),n.isLoading=!1},function(e){return n.notifierService.notify("error",e.message)}):this.menuType===v.og.Role?this.loadMyOrganization().subscribe(function(e){return n.loadRoles(e.mrn).subscribe(function(e){n.source.load(e),n.isLoading=!1},function(e){return n.notifierService.notify("error",e.message)})},function(e){return n.notifierService.notify("error",e.message)}):this.menuType===v.og.Instance||this.menuType===v.og.InstanceOfOrg?this.loadServiceInstances(this.isForServiceForOrg?this.orgMrn:void 0).subscribe(function(e){n.source.load(n.formatResponseForService(e)),n.isLoading=!1},function(e){return n.notifierService.notify("error",e.message)}):this.menuType===v.og.UnapprovedSvc?this.loadServiceInstances().subscribe(function(e){n.source.load(n.formatResponseForService(e)),n.isLoading=!1},function(e){return n.notifierService.notify("error",e.message)}):this.loadMyOrganization().subscribe(function(e){return n.loadDataContent(n.menuType,e.mrn).subscribe(function(e){n.source.load(n.formatResponse(e.content)),n.isLoading=!1},function(e){return n.notifierService.notify("error",e.message)})},function(e){return n.notifierService.notify("error",e.message)})}},{key:"formatResponse",value:function(e){return e.map(function(e){return(0,g.lv)(e)})}},{key:"formatResponseForService",value:function(e){return e.map(function(e){return(0,g.LP)(e)})}},{key:"onDelete",value:function(e){this.isAdmin()?this.delete(this.menuType,this.orgMrn,e.data.mrn,e.data.instanceVersion,e.data.id):this.notifierService.notify("error","You don't have right permission")}},{key:"delete",value:function(e,t,r,n,i){var o=this,s="Are you sure you want to delete?";s=v.DC.indexOf(this.menuType)>=0?s+" All certificates under this entity will be revoked.":s,confirm(s)&&this.deleteData(e,t,r,n).subscribe(function(e){o.notifierService.notify("success",o.menuTypeName+" has been successfully deleted"),o.fetchValues()},function(e){return o.notifierService.notify("error","There was error in deletion - "+e.message)})}},{key:"onEdit",value:function(e){var t=this.menuType===v.og.Instance?e.data.id:e.data.mrn;this.router.navigate([this.router.url,t?encodeURIComponent(t):e.data.id],{queryParams:{name:e.data.roleName?e.data.roleName:e.data.name?e.data.name:e.data.lastName+" "+e.data.firstName,version:e.data.instanceVersion}})}},{key:"onAddNew",value:function(){this.router.navigate([this.router.url,"new"])}},{key:"onSearch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.source.setFilter([{field:"id",search:e},{field:"name",search:e},{field:"mrn",search:e}],!1)}}]),r}();return r.\u0275fac=function(e){return new(e||r)(u["\u0275\u0275directiveInject"](l.F0),u["\u0275\u0275directiveInject"](b.B7b),u["\u0275\u0275directiveInject"](y.p),u["\u0275\u0275directiveInject"](S.$),u["\u0275\u0275directiveInject"](O.U),u["\u0275\u0275directiveInject"](w.H),u["\u0275\u0275directiveInject"](M.e),u["\u0275\u0275directiveInject"](T.$),u["\u0275\u0275directiveInject"](P.A8),u["\u0275\u0275directiveInject"](_.T),u["\u0275\u0275directiveInject"](C.r),u["\u0275\u0275directiveInject"](I.lG),u["\u0275\u0275directiveInject"](E.e))},r.\u0275cmp=u["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-list"]],decls:15,vars:5,consts:[[1,"row"],[1,"col","my-auto"],[1,"icon_header"],["pack","fas",3,"icon"],[1,"col-md-auto"],["type","button","nbButton","","status","primary",3,"click",4,"ngIf"],["nbSpinnerSize","large","nbSpinnerStatus","primary",3,"nbSpinner"],["type","text","placeholder","Search...",1,"search",3,"keydown.enter"],["search",""],[3,"settings","source","edit","delete",4,"ngIf"],["type","button","nbButton","","status","primary",3,"click"],[3,"settings","source","edit","delete"]],template:function(e,t){if(1&e){var r=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"nb-card"),u["\u0275\u0275elementStart"](1,"nb-card-header"),u["\u0275\u0275elementStart"](2,"div",0),u["\u0275\u0275elementStart"](3,"div",1),u["\u0275\u0275elementStart"](4,"span",2),u["\u0275\u0275element"](5,"nb-icon",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"div",4),u["\u0275\u0275template"](8,j,2,0,"button",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"nb-card-body",6),u["\u0275\u0275elementStart"](10,"div"),u["\u0275\u0275elementStart"](11,"input",7,8),u["\u0275\u0275listener"]("keydown.enter",function(){u["\u0275\u0275restoreView"](r);var e=u["\u0275\u0275reference"](12);return t.onSearch(e.value)}),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](13,R,1,2,"ng2-smart-table",9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](14,"notifier-container")}2&e&&(u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("icon",t.iconName),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"]("",t.title," "),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",t.isAdmin()),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("nbSpinner",t.isLoading),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngIf",t.showTables))},directives:[b.Asz,b.ndF,b.fMN,a.O5,b.yKW,b.Q7R,I.TK,b.DPz,p.T5],styles:["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}"]}),r}(),A=i(4050),D=["editableForm"];function x(e,t){if(1&e){var r=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div"),u["\u0275\u0275elementStart"](1,"button",5),u["\u0275\u0275listener"]("click",function(){return u["\u0275\u0275restoreView"](r),u["\u0275\u0275nextContext"]().cancel()}),u["\u0275\u0275element"](2,"nb-icon",6),u["\u0275\u0275text"](3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate1"](" Back to ",n.entityTypeName," list ")}}var F,U,z=[{path:"",component:h,children:[{path:"",component:k},{path:":id",component:(F=function(){function e(t,r,n,i,o,c,a,u,l,h,p,b,y){var S=this;s(this,e),this.route=t,this.router=r,this.userControllerService=n,this.deviceControllerService=i,this.roleControllerService=o,this.vesselControllerService=c,this.serviceControllerService=a,this.mmsControllerService=u,this.organizationControllerService=l,this.instanceControllerService=h,this.notifierService=p,this.authService=b,this.location=y,this.title="",this.isLoading=!1,this.menuType="device",this.iconName="circle",this.instanceVersion="",this.noBacklink=!1,this.isForNew=!1,this.columnForMenu=f.O[this.menuType],this.contextForAttributes="detail",this.menuTypeName="",this.entityMrn="",this.orgMrn="",this.isUnapprovedorg=!1,this.canApproveOrg=!1,this.values={},this.activeCertificates=[],this.revokedCertificates=[],this.isEditing=!1,this.shortId="",this.numberId=-1,this.isLoaded=!0,this.isShortIdValid=!1,this.data={},this.mrnMask="",this.isForOrgService=!1,this.registerData=function(e,t,r){return e===v.og.User?S.userControllerService.createUser(t,r):e===v.og.Device?S.deviceControllerService.createDevice(t,r):e===v.og.Vessel?S.vesselControllerService.createVessel(t,r):e===v.og.MMS?S.mmsControllerService.createMMS(t,r):e===v.og.Service?S.serviceControllerService.createService(t,r):e===v.og.Organization?S.organizationControllerService.applyOrganization(t):e===v.og.Role?S.roleControllerService.createRole(t,r):e===v.og.Instance?S.instanceControllerService.createInstanceUsingPOST(t):new d.Observable},this.updateData=function(e,t,r,n,i,o){return e===v.og.User?S.userControllerService.updateUser(t,r,n):e===v.og.Device?S.deviceControllerService.updateDevice(t,r,n):e===v.og.Vessel?S.vesselControllerService.updateVessel((0,g.EF)(t),r,n):e===v.og.MMS?S.mmsControllerService.updateMMS(t,r,n):e===v.og.Service&&i?S.serviceControllerService.updateService(t,r,n,i):e===v.og.Organization?S.organizationControllerService.updateOrganization(t,n):e===v.og.Role?S.roleControllerService.updateRole(t,r,S.numberId):e===v.og.Instance?S.instanceControllerService.updateInstanceUsingPUT(o,t):new d.Observable},this.deleteData=function(e,t,r,n,i){return e===v.og.User?S.userControllerService.deleteUser(t,r):e===v.og.Device?S.deviceControllerService.deleteDevice(t,r):e===v.og.Vessel?S.vesselControllerService.deleteVessel(t,r):e===v.og.MMS?S.mmsControllerService.deleteMMS(t,r):e===v.og.Service&&n?S.serviceControllerService.deleteService(t,r,n):e===v.og.Organization?S.organizationControllerService.deleteOrg(r):e===v.og.Role?S.roleControllerService.deleteRole(t,S.numberId):e===v.og.Instance?S.instanceControllerService.deleteInstanceUsingDELETE(i):new d.Observable},this.loadDataContent=function(e,t,r,n,i){return e===v.og.User?S.userControllerService.getUser(t,r):e===v.og.Device?S.deviceControllerService.getDevice(t,r):e===v.og.Vessel?S.vesselControllerService.getVessel(t,r):e===v.og.MMS?S.mmsControllerService.getMMS(t,r):e===v.og.Service&&n?S.serviceControllerService.getServiceVersion(t,r,n):e===v.og.Organization?S.loadOrgContent(r):e===v.og.Instance?S.instanceControllerService.getInstanceUsingGET(i):new d.Observable},this.isAdmin=function(){var e=S.menuType;return e===v.og.User?S.authService.authState.hasPermissionInMIR(m.Xg.UserAdmin):e===v.og.Device?S.authService.authState.hasPermissionInMIR(m.Xg.DeviceAdmin):e===v.og.Vessel?S.authService.authState.hasPermissionInMIR(m.Xg.VesselAdmin):e===v.og.MMS?S.authService.authState.hasPermissionInMIR(m.Xg.MMSAdmin):e===v.og.Service?S.authService.authState.hasPermissionInMIR(m.Xg.ServiceAdmin):e===v.og.Organization||e===v.RJ.role?S.authService.authState.hasPermissionInMIR(m.Xg.OrgAdmin):e===v.og.Instance&&S.authService.authState.hasPermissionInMSR(S.isForOrgService?m.aK.OrgServiceAdmin:m.aK.MSRAdmin)},this.loadOrgContent=function(e){return S.organizationControllerService.getOrganizationByMrn(e)};var O=this.router.url.split("/");this.menuType=O[O.length-2],this.menuType===v.og.InstanceOfOrg?(this.isForOrgService=!0,this.menuType=v.og.Instance):this.menuType=this.menuType.replace("-","").substr(0,this.menuType.length-1),this.entityMrn=decodeURIComponent(this.route.snapshot.paramMap.get("id")),this.orgMrn=this.authService.authState.orgMrn,this.isForNew="new"===this.entityMrn,this.numberId=this.menuType===v.og.Instance?parseInt(this.entityMrn):-1,this.router.routeReuseStrategy.shouldReuseRoute=function(){return!1},this.route.queryParams.subscribe(function(e){S.noBacklink=void 0===e.name,S.title=e.name,S.instanceVersion=e.version}),this.roleControllerService.getMyRole(this.authService.authState.orgMrn).subscribe(function(e){S.authService.authState.permission=(0,m.Kc)(e),m.fQ.canApproveOrg(S.authService.authState.permission)&&(S.canApproveOrg=!0)})}return o(e,[{key:"ngOnInit",value:function(){this.isForNew&&(this.isEditing=!0),this.iconName=v.nZ[this.menuType],this.isForNew?this.title="New "+this.menuType:this.fetchFieldValues()}},{key:"cancel",value:function(){this.location.back()}},{key:"settle",value:function(e){this.isLoading=!1,this.editableForm&&this.editableForm.settled(e)}},{key:"fetchFieldValues",value:function(){var e=this;if(!f.O.hasOwnProperty(this.menuType===v.og.InstanceOfOrg?v.og.Instance:this.menuType))throw this.settle(!1),new Error("There's no '".concat(this.menuType,"DataService' in ColumnForMenu"));if(this.isLoading=!0,!Object.values(v.og).includes(this.menuType))throw this.settle(!1),new Error("There's no such thing as '".concat(this.menuType,"DataService'"));if(this.menuType===v.og.UnapprovedOrg)this.isUnapprovedorg=!0,this.organizationControllerService.getUnapprovedOrganizations().subscribe(function(t){e.settle(!0),e.editableForm.adjustTitle(e.menuType,e.title),e.editableForm.adjustData(t.content.filter(function(t){return t.mrn===e.entityMrn}).pop())},function(t){e.notifierService.notify("error",t.message),e.router.navigateByUrl("/pages/404")});else if(this.menuType===v.og.Role){var t=parseInt(this.entityMrn);this.roleControllerService.getRole(this.orgMrn,t).subscribe(function(t){e.settle(!0),e.numberId=t.id,e.editableForm.adjustTitle(e.menuType,e.title),e.editableForm.adjustData(t)},function(t){e.notifierService.notify("error",t.message),e.router.navigateByUrl("/pages/404")})}else this.route.queryParams.subscribe(function(t){return e.loadDataContent(e.menuType,e.authService.authState.user.organization,e.entityMrn,t.version,e.numberId).subscribe(function(t){e.settle(!0),e.menuType===v.og.User?e.title=t.firstName+" "+t.lastName:e.menuType===v.og.Organization&&(e.title=t.name),e.editableForm.adjustTitle(e.menuType,e.title),e.editableForm.adjustData(t)},function(t){e.notifierService.notify("error",t.message),e.router.navigateByUrl("/pages/404")})})}},{key:"refreshData",value:function(){this.fetchFieldValues()}},{key:"moveToListPage",value:function(){this.router.navigate(["../../"+this.menuType+"s"],{relativeTo:this.route})}},{key:"delete",value:function(){var e=this,t="Are you sure you want to delete?";t=v.DC.indexOf(this.menuType)>=0?t+" All certificates under this entity will be revoked.":t,confirm(t)&&this.deleteData(this.menuType,this.orgMrn,this.entityMrn,this.instanceVersion).subscribe(function(t){e.notifierService.notify("success",e.title+" has been successfully deleted"),e.moveToListPage()},function(t){return e.notifierService.notify("error","There was error in deletion - "+t.message)})}},{key:"submit",value:function(e){var t=this,r=Object.assign({},e.value);"role"===this.menuType?this.loadOrgContent(this.orgMrn).subscribe(function(e){return t.submitDataToBackend(Object.assign(Object.assign({},r),{idOrganization:e.id}))},function(e){return t.notifierService.notify("error","Error in fetching organization information")}):this.submitDataToBackend(Object.assign(Object.assign({},r),{mrn:e.get("mrn").value}),e.get("mrn").value)}},{key:"submitDataToBackend",value:function(e,t){var r=this;this.isForNew?this.registerData(this.menuType,e,this.authService.authState.orgMrn).subscribe(function(e){r.notifierService.notify("success","New "+r.menuType+" has been created"),r.settle(!0),r.moveToListPage()},function(e){r.notifierService.notify("error","Creation has failed - "+e.message),r.settle(!0)}):this.updateData(this.menuType,e,this.authService.authState.orgMrn,t,this.instanceVersion).subscribe(function(e){r.notifierService.notify("success",r.menuType+" has been updated"),r.settle(!0)},function(e){r.notifierService.notify("error","Update has failed - "+e.message),r.settle(!0)})}}]),e}(),F.\u0275fac=function(e){return new(e||F)(u["\u0275\u0275directiveInject"](l.gz),u["\u0275\u0275directiveInject"](l.F0),u["\u0275\u0275directiveInject"](y.p),u["\u0275\u0275directiveInject"](S.$),u["\u0275\u0275directiveInject"](O.U),u["\u0275\u0275directiveInject"](w.H),u["\u0275\u0275directiveInject"](M.e),u["\u0275\u0275directiveInject"](_.T),u["\u0275\u0275directiveInject"](C.r),u["\u0275\u0275directiveInject"](T.$),u["\u0275\u0275directiveInject"](I.lG),u["\u0275\u0275directiveInject"](E.e),u["\u0275\u0275directiveInject"](a.Ye))},F.\u0275cmp=u["\u0275\u0275defineComponent"]({type:F,selectors:[["ngx-detail"]],viewQuery:function(e,t){var r;1&e&&u["\u0275\u0275viewQuery"](D,5),2&e&&u["\u0275\u0275queryRefresh"](r=u["\u0275\u0275loadQuery"]())&&(t.editableForm=r.first)},decls:6,vars:14,consts:[[1,"row"],[1,"col-lg-12"],[4,"ngIf"],[3,"menuType","isForNew","isUnapprovedorg","isAdmin","title","iconName","canApproveOrg","entityMrn","orgMrn","instanceVersion","isLoading","isLoaded","hasHeader","onCancel","onSubmit","onDelete"],["editableForm",""],["nbButton","","status","info","ghost","",3,"click"],["icon","arrow-ios-back","pack","eva"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"div",1),u["\u0275\u0275template"](2,x,4,1,"div",2),u["\u0275\u0275elementStart"](3,"ngx-editable-form",3,4),u["\u0275\u0275listener"]("onCancel",function(){return t.cancel()})("onSubmit",function(e){return t.submit(e)})("onDelete",function(){return t.delete()}),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"notifier-container")),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",!t.noBacklink&&!t.isForNew),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("menuType",t.menuType)("isForNew",t.isForNew)("isUnapprovedorg",t.isUnapprovedorg)("isAdmin",t.isAdmin())("title",t.title)("iconName",t.iconName)("canApproveOrg",t.canApproveOrg)("entityMrn",t.entityMrn)("orgMrn",t.orgMrn)("instanceVersion",t.instanceVersion)("isLoading",t.isLoading)("isLoaded",t.isLoaded)("hasHeader",!0))},directives:[a.O5,A.Q,I.TK,b.DPz,b.fMN],styles:["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.icon_header[_ngcontent-%COMP%]{display:inline-block;width:28px}.nb-theme-default   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-default   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-default   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-dark   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-dark   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-cosmic   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-corporate   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-corporate   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}"]}),F)},{path:"**",component:i(55477).w}]}],V=function(){var e=function e(){s(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({imports:[[l.Bz.forChild(z)],l.Bz]}),e}(),N=i(81718),B=((U=function e(){s(this,e)}).\u0275fac=function(e){return new(e||U)},U.\u0275mod=u["\u0275\u0275defineNgModule"]({type:U}),U.\u0275inj=u["\u0275\u0275defineInjector"]({providers:[I.lG],imports:[[a.ez,c.m,b.nKr,b.zyh,b.KdK,b.uuI,b.EoG,b.T2N,b.spT,b.IIj,b.OA,p.ne,V,I.Eb.withConfig(N.r)]]}),U)}}])}();