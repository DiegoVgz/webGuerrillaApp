(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{n9ga:function(t,e,r){"use strict";r.r(e),r.d(e,"RankingPageModule",(function(){return b}));var n=r("ofXK"),s=r("3Pt+"),i=r("TEn/"),a=r("tyNb"),o=r("9fo7"),c=r("fXoL");const u=[{path:"",component:o.a}];let h=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[a.h.forChild(u)],a.h]}),t})(),b=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[n.b,s.a,i.w,h]]}),t})()},tnAE:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r("mrSG"),s=r("tk/3"),i=r("2Vo4"),a=r("LRne"),o=r("lJxs"),c=r("JIr8"),u=r("fXoL"),h=r("e8h1");const b={headers:new s.c({"Content-Type":"application/json"})};let l=(()=>{class t{constructor(t,e){this.http=t,this.storage=e,this.username=new i.a("error"),this.currentUsername=this.username.asObservable(),this.enemy=new i.a("error"),this.currentEnemy=this.enemy.asObservable(),this.endPoint=new i.a("https://guerrilla-api-b78225.herokuapp.com/"),this.currentendPoint=this.endPoint.asObservable()}setUser(t){this.username.next(t),this.storage.set("name",t)}setEnemy(t){this.username.next(t),this.storage.set("enemy",t)}setEndPoint(t){return Object(n.a)(this,void 0,void 0,(function*(){return new Promise(e=>{this.endPoint.next(t),e(t)})}))}extractData(t){return t||{}}getCurrentUser(){return Object(n.a)(this,void 0,void 0,(function*(){return new Promise(t=>{this.storage.get("name").then(e=>{this.username.next(e),t(e)})})}))}getCurrentEnemy(){return Object(n.a)(this,void 0,void 0,(function*(){return new Promise(t=>{this.storage.get("enemy").then(e=>{this.enemy.next(e),t(e)})})}))}logout(){return Object(n.a)(this,void 0,void 0,(function*(){return new Promise(t=>{this.storage.remove("name"),this.username.next(""),t("ha cerrado session")})}))}login(t){var e;return this.currentendPoint.subscribe(t=>e=t),this.http.post(e+"guerrilla/"+t.name,t,b).pipe(Object(o.a)(this.extractData),Object(c.a)(this.handleError("login")))}getUserData(t){var e;return this.currentendPoint.subscribe(t=>e=t),this.http.get(e+"guerrilla/"+t,b).pipe(Object(o.a)(this.extractData),Object(c.a)(this.handleError("getData")))}buyUnits(t){var e,r;return console.log(t),this.currentUsername.subscribe(t=>r=t),this.currentendPoint.subscribe(t=>e=t),this.http.put(e+"guerrilla/"+r+"/units",t,b).pipe(Object(o.a)(this.extractData),Object(c.a)(this.handleError("buyUnits")))}attack(t,e){var r;return this.currentendPoint.subscribe(t=>r=t),this.http.post(r+"guerrilla/attack/"+e+"/?guerrillaSrc="+t,b).pipe(Object(o.a)(this.extractData),Object(c.a)(this.handleError("attack")))}getRanking(t,e,r){var n;return this.currentendPoint.subscribe(t=>n=t),this.http.get(n+"guerrilla?name="+t+"&email="+e+"&faction="+r,b).pipe(Object(o.a)(this.extractData),Object(c.a)(this.handleError("ranking")))}handleError(t="operation",e){return r=>(console.error(r),console.log(`${t} failed: ${r.message}`),Object(a.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(s.a),u.Qb(h.b))},t.\u0275prov=u.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);