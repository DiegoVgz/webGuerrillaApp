(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2ELU":function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var i=e("mrSG"),o=e("fXoL"),c=e("TEn/"),r=e("tyNb"),a=e("tnAE");let s=(()=>{class t{constructor(t,n,e,i){this.menu=t,this.router=n,this.rest=e,this.alertController=i}ngOnInit(){}openEnd(){this.menu.close("start"),this.menu.enable(!0,"start"),this.menu.open("start"),this.menu.close("start")}goToRanking(){this.router.navigate(["/ranking"])}goToSettings(){this.router.navigate(["/connect"])}goToMenu(){this.router.navigate(["/menu"])}goOut(){this.router.navigate([""])}connect(){return Object(i.a)(this,void 0,void 0,(function*(){this.ip=document.getElementById("ip").value,yield this.rest.setEndPoint(this.ip),this.presentAlert()}))}presentAlert(){return Object(i.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",header:"Sucessful",subHeader:"New connection to : "+this.ip,message:"",buttons:["OK"]});yield t.present()}))}}return t.\u0275fac=function(n){return new(n||t)(o.Jb(c.x),o.Jb(r.f),o.Jb(a.a),o.Jb(c.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-connect"]],decls:39,vars:0,consts:[["id","main"],[3,"click"],["name","menu"],["side","start","contentId","main"],["color","#e20d0d"],[2,"color","#e20d0d"],[1,"title"],[1,"content"],["type","text","id","ip","placeholder","ip:port/"],[1,"content2"]],template:function(t,n){1&t&&(o.Kb(0,"ion-router-outlet",0),o.Mb(1,"ion-header"),o.Mb(2,"ion-toolbar"),o.Mb(3,"ion-button",1),o.Ub("click",(function(){return n.openEnd()})),o.Kb(4,"ion-icon",2),o.Lb(),o.Lb(),o.Lb(),o.Mb(5,"ion-content"),o.Mb(6,"ion-menu",3),o.Mb(7,"ion-header"),o.Mb(8,"ion-toolbar",4),o.Mb(9,"ion-title",5),o.hc(10,"Menu"),o.Lb(),o.Lb(),o.Lb(),o.Mb(11,"ion-content"),o.Mb(12,"ion-list"),o.Mb(13,"ion-item",1),o.Ub("click",(function(){return n.goToMenu()})),o.hc(14,"Profile"),o.Lb(),o.Mb(15,"ion-item",1),o.Ub("click",(function(){return n.goToRanking()})),o.hc(16,"Ranking"),o.Lb(),o.Mb(17,"ion-item",1),o.Ub("click",(function(){return n.goToSettings()})),o.hc(18,"Settings"),o.Lb(),o.Mb(19,"ion-item",1),o.Ub("click",(function(){return n.goOut()})),o.hc(20,"Logout"),o.Lb(),o.Mb(21,"ion-item",1),o.Ub("click",(function(){return n.openEnd()})),o.hc(22,"Close"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(23,"h1",6),o.hc(24," Settings "),o.Lb(),o.Mb(25,"div",7),o.Mb(26,"ion-label"),o.hc(27,"Example http://localhost:3000/"),o.Lb(),o.Kb(28,"br"),o.Kb(29,"br"),o.Mb(30,"ion-item"),o.Kb(31,"ion-input",8),o.Lb(),o.Kb(32,"br"),o.Mb(33,"ion-button",1),o.Ub("click",(function(){return n.connect()})),o.hc(34,"Connect"),o.Lb(),o.Kb(35,"br"),o.Lb(),o.Mb(36,"div",9),o.Mb(37,"ion-label"),o.hc(38,"To back to the original server just reload the page"),o.Lb(),o.Lb(),o.Lb())},directives:[c.n,c.f,c.u,c.c,c.g,c.e,c.m,c.t,c.l,c.j,c.k,c.i,c.A],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.imgItem[_ngcontent-%COMP%]{align-items:center;align-content:center;align-self:center;text-align:center;width:20%;height:20%;margin-left:40%;margin-right:40%}"]}),t})()},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const i=`${t*n/e-t}ms`,o=2*Math.PI*n/e;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const i=n/e,o=`${t*i-t}ms`,c=2*Math.PI*i;return{r:5,style:{top:`${9*Math.sin(c)}px`,left:`${9*Math.cos(c)}px`,"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:`${9-9*n}px`,"animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${t*n/e-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${t*n/e-t}ms`}})}}},"9fo7":function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var i=e("mrSG"),o=e("fXoL"),c=e("TEn/"),r=e("tyNb"),a=e("tnAE"),s=e("ofXK");const l=["pageTop"];function b(t,n){if(1&t){const t=o.Nb();o.Mb(0,"ion-button",1),o.Ub("click",(function(){o.dc(t);const n=o.Yb().$implicit;return o.Yb().goToMatch(n.name)})),o.hc(1,"Attack"),o.Lb()}}function u(t,n){if(1&t&&(o.Mb(0,"ion-item"),o.Mb(1,"ion-col"),o.Mb(2,"ion-label"),o.hc(3),o.Lb(),o.Lb(),o.Mb(4,"ion-col"),o.Mb(5,"ion-label"),o.hc(6),o.Lb(),o.Lb(),o.Mb(7,"ion-col"),o.gc(8,b,2,0,"ion-button",18),o.Lb(),o.Lb()),2&t){const t=n.$implicit,e=o.Yb();o.zb(3),o.ic(t.rank),o.zb(3),o.ic(t.name),o.zb(2),o.bc("ngIf",e.name2!=t.name)}}let h=(()=>{class t{constructor(t,n,e){this.menu=t,this.router=n,this.rest=e,this.data=[],this.counter=0,this.name="",this.email="",this.faction=""}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.name2=yield this.rest.getCurrentUser(),yield this.fillData("","","")}))}openEnd(){this.pageTop.scrollToTop(),this.menu.close("start"),this.menu.enable(!0,"start"),this.menu.open("start"),this.menu.close("start")}goToRanking(){this.router.navigate(["/ranking"])}goToSettings(){this.router.navigate(["/connect"])}goToMenu(){this.router.navigate(["/menu"])}goOut(){this.router.navigate([""])}goToMatch(t){this.rest.setEnemy(t),this.router.navigate(["/match"])}fillData(t,n,e){return Object(i.a)(this,void 0,void 0,(function*(){return new Promise(i=>{this.rest.getRanking(t,n,e).subscribe(t=>{for(let n=0;n<=t.length-1;n++)this.data.push(t[n]);i(this.data)})})}))}reload(){this.data=[],this.fillData("","","")}search(){return Object(i.a)(this,void 0,void 0,(function*(){this.data=[],this.counter=0,this.name=document.getElementById("nameFilter").value,this.faction=document.getElementById("factionFilter").value,document.getElementById("emailFilter"),yield this.fillData(this.name,this.email,this.faction)}))}}return t.\u0275fac=function(n){return new(n||t)(o.Jb(c.x),o.Jb(r.f),o.Jb(a.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-ranking"]],viewQuery:function(t,n){var e;1&t&&o.kc(l,!0),2&t&&o.cc(e=o.Vb())&&(n.pageTop=e.first)},decls:67,vars:1,consts:[["id","main"],[3,"click"],["name","menu"],["pageTop",""],["side","start","id","menu","contentId","main"],["color","#e20d0d"],[2,"color","#e20d0d"],[1,"title"],["name","refresh-outline",3,"click"],[1,"content",2,"margin-bottom","5%"],["id","factionFilter","placeholder","Select One"],["value","China"],["value","USMC"],["value","MEC"],["id","emailFilter"],["id","nameFilter",2,"margin-bottom","2%"],[2,"background-color","rgba(245, 245, 245, 0.856)","color","#080808"],[4,"ngFor","ngForOf"],[3,"click",4,"ngIf"]],template:function(t,n){1&t&&(o.Kb(0,"ion-router-outlet",0),o.Mb(1,"ion-header"),o.Mb(2,"ion-toolbar"),o.Mb(3,"ion-button",1),o.Ub("click",(function(){return n.openEnd()})),o.Kb(4,"ion-icon",2),o.Lb(),o.Lb(),o.Lb(),o.Mb(5,"ion-content",null,3),o.Mb(7,"ion-menu",4),o.Mb(8,"ion-header"),o.Mb(9,"ion-toolbar",5),o.Mb(10,"ion-title",6),o.hc(11,"Menu"),o.Lb(),o.Lb(),o.Lb(),o.Mb(12,"ion-content"),o.Mb(13,"ion-list"),o.Mb(14,"ion-item",1),o.Ub("click",(function(){return n.goToMenu()})),o.hc(15,"Profile"),o.Lb(),o.Mb(16,"ion-item",1),o.Ub("click",(function(){return n.goToRanking()})),o.hc(17,"Ranking"),o.Lb(),o.Mb(18,"ion-item",1),o.Ub("click",(function(){return n.goToSettings()})),o.hc(19,"Settings"),o.Lb(),o.Mb(20,"ion-item",1),o.Ub("click",(function(){return n.goOut()})),o.hc(21,"Logout"),o.Lb(),o.Mb(22,"ion-item",1),o.Ub("click",(function(){return n.openEnd()})),o.hc(23,"Close"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(24,"ion-item"),o.Mb(25,"ion-col"),o.Mb(26,"h1",7),o.hc(27,"Ranking"),o.Lb(),o.Lb(),o.Mb(28,"ion-col"),o.Kb(29,"h1",7),o.Lb(),o.Mb(30,"ion-col"),o.Mb(31,"ion-icon",8),o.Ub("click",(function(){return n.reload()})),o.Lb(),o.Lb(),o.Lb(),o.Mb(32,"div",9),o.Mb(33,"h2"),o.hc(34,"Filter"),o.Lb(),o.Mb(35,"ion-item"),o.Mb(36,"ion-label"),o.hc(37,"Faction"),o.Lb(),o.Mb(38,"ion-select",10),o.Mb(39,"ion-select-option",11),o.hc(40,"China"),o.Lb(),o.Mb(41,"ion-select-option",12),o.hc(42,"USMC"),o.Lb(),o.Mb(43,"ion-select-option",13),o.hc(44,"MEC"),o.Lb(),o.Lb(),o.Lb(),o.Mb(45,"ion-item"),o.Mb(46,"ion-label"),o.hc(47,"Email"),o.Lb(),o.Kb(48,"ion-input",14),o.Lb(),o.Mb(49,"ion-item"),o.Mb(50,"ion-label"),o.hc(51,"Name"),o.Lb(),o.Kb(52,"ion-input",15),o.Lb(),o.Mb(53,"ion-button",1),o.Ub("click",(function(){return n.search()})),o.hc(54,"filtrar "),o.Lb(),o.Lb(),o.Mb(55,"ion-row",16),o.Mb(56,"ion-col"),o.Mb(57,"ion-label"),o.hc(58,"Rank"),o.Lb(),o.Lb(),o.Mb(59,"ion-col"),o.Mb(60,"ion-label"),o.hc(61,"Guerrilla"),o.Lb(),o.Lb(),o.Mb(62,"ion-col"),o.Mb(63,"ion-label"),o.hc(64,"Action"),o.Lb(),o.Lb(),o.Lb(),o.Mb(65,"ion-list"),o.gc(66,u,9,3,"ion-item",17),o.Lb(),o.Lb()),2&t&&(o.zb(66),o.bc("ngForOf",n.data))},directives:[c.n,c.f,c.u,c.c,c.g,c.e,c.m,c.t,c.l,c.j,c.d,c.k,c.p,c.z,c.q,c.i,c.A,c.o,s.h,s.i],styles:["ion-list[_ngcontent-%COMP%]{overflow-y:scroll!important}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.imgItem[_ngcontent-%COMP%]{align-items:center;align-content:center;align-self:center;text-align:center;width:20%;height:20%;margin-left:40%;margin-right:40%}"]}),t})()},KwJk:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return a}));const i=(t,n)=>null!==n.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,c=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},r=/^[a-z][a-z0-9+\-.]*:/,a=async(t,n,e)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const i=document.querySelector("ion-router");if(i)return null!=n&&n.preventDefault(),i.push(t,e)}return!1}},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));const i=async(t,n,e,i,o)=>{if(t)return t.attachViewToDom(n,e,o,i);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return i&&i.forEach(t=>c.classList.add(t)),o&&Object.assign(c,o),n.appendChild(c),c.componentOnReady&&await c.componentOnReady(),c},o=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},xgmX:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return o}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},o=()=>{i.selection()},c=()=>{i.selectionStart()},r=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},s=t=>{i.impact(t)}}}]);