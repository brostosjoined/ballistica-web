"use strict";(self.webpackChunkballistica_web=self.webpackChunkballistica_web||[]).push([[504],{3504:(L,u,a)=>{a.r(u),a.d(u,{ModsComponent:()=>C,ModsModule:()=>z,MyCustomPaginatorIntl:()=>U});var c=a(6696),m=a(773),d=a(7322),h=a(5245),f=a(9062),P=a(7579),g=a(3075),p=a(9808),M=a(7531),O=a(1803),v=a(3774),t=a(5e3),E=a(460),b=a(6627),T=a(367);function D(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.resetSearch())}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function x(o,r){1&o&&(t.TgZ(0,"div",13),t._UZ(1,"mat-spinner"),t.qZA())}function I(o,r){if(1&o&&(t.TgZ(0,"div",19),t._UZ(1,"app-banner",20),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("banner",e.banner)}}function y(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",14),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.openModPage(s))}),t.YNc(1,I,2,1,"div",15),t.TgZ(2,"div",16)(3,"div",17)(4,"h5",18),t._uU(5),t.qZA(),t._uU(6),t.qZA()()()}if(2&o){const e=r.$implicit,n=r.index;t.xp6(1),t.Q6J("ngIf",n%4==0),t.xp6(4),t.Oqu(e.title),t.xp6(1),t.hij(" ",e.description.slice(0,120)," ")}}const A=function(){return[10,50,100]};let U=(()=>{class o{constructor(){this.changes=new P.x,this.firstPageLabel=$localize`First page`,this.itemsPerPageLabel=$localize`Items per page:`,this.lastPageLabel=$localize`Last page`,this.nextPageLabel="Next page",this.previousPageLabel="Previous page"}getRangeLabel(e,n,i){if(0===i)return $localize`Page 1 of 1`;const s=Math.ceil(i/n);return $localize`Page ${e+1} of ${s}`}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),C=(()=>{class o{constructor(e,n,i,s,l,_){this.modsService=e,this.router=n,this.route=i,this._seoService=s,this.activatedRoute=l,this.workspace=_,this.value="",this.totalRows=0,this.pageSize=10,this.currentPage=0,this.pageSizeOptions=[10,50,100],this.isLoading=!0,this.banner=new O.j("ca-pub-7561471327972639",1688169659,"fluid","-6t+ed+2i-1n-4w",!0)}ngOnInit(){this.mods=Array.from({length:5},(l,_)=>({title:`Mod ${_+1}`,description:`Mod ${_+1} description`}));const e=this.route.snapshot.queryParamMap.get("q"),n=this.route.snapshot.queryParamMap.get("page"),i=this.route.snapshot.queryParamMap.get("size");this.value=e||"",this.pageSize=Number(i)?Number(i):10,this.currentPage=Number(n)?Number(n):0,this.loadData(),this.getChild(this.activatedRoute).data.subscribe(l=>{this._seoService.updateTitle(l.title),this._seoService.updateOgUrl(l.ogUrl),this._seoService.updateDescription(l.description)})}getChild(e){return e.firstChild?this.getChild(e.firstChild):e}loadData(){this.modsService.getMods(this.pageSize,this.currentPage,this.value).subscribe(e=>{for(var n of(this.mods=e,this.isLoading=!1,this.mods)){var i="";for(var s of n.attachments)s.endsWith(".py")&&(i=s.split("/").pop());n.title=i}})}pageChanged(e){this.pageSize=e.pageSize,this.currentPage=e.pageIndex,this.loadData()}openModPage(e){this.router.navigate(["/mods/"+e.messageId],{queryParams:{q:this.value,page:this.currentPage,size:this.pageSize}})}valueChange(e){this.loadData()}resetSearch(){this.value="",this.loadData()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(E.w),t.Y36(c.F0),t.Y36(c.gz),t.Y36(b.S),t.Y36(c.gz),t.Y36(T.A))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-mods"]],decls:23,vars:7,consts:[[1,"background"],[1,"heading"],[1,"about-page"],["href","https://discord.gg/ucyaesh"],[1,"search-box"],["appearance","fill",1,"example-form-field"],["matInput","","type","text",3,"ngModel","ngModelChange"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"mods-list"],["class","loading",4,"ngIf"],["class","mod",3,"click",4,"ngFor","ngForOf"],["aria-label","Select page",3,"length","pageSizeOptions","page"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[1,"loading"],[1,"mod",3,"click"],["class","ads",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"ads"],[3,"banner"]],template:function(e,n){1&e&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"h1"),t._uU(4," Mods Repository"),t.qZA()(),t.TgZ(5,"div",2)(6,"p"),t._uU(7," Mods/Plugins made by BombSquad Community , shared over community "),t.TgZ(8,"a",3),t._uU(9,"discord server"),t.qZA(),t._uU(10," . Install at your own risk - contact developers on discord if facing any issue ."),t._UZ(11,"br"),t._uU(12," Become a contributor , post your mod in above mentioned discord server. "),t.qZA()(),t.TgZ(13,"div",4)(14,"mat-form-field",5)(15,"mat-label"),t._uU(16,"Search Mod"),t.qZA(),t.TgZ(17,"input",6),t.NdJ("ngModelChange",function(s){return n.value=s})("ngModelChange",function(s){return n.valueChange(s)}),t.qZA(),t.YNc(18,D,3,0,"button",7),t.qZA()(),t.TgZ(19,"div",8),t.YNc(20,x,2,0,"div",9),t.YNc(21,y,7,3,"div",10),t.TgZ(22,"mat-paginator",11),t.NdJ("page",function(s){return n.pageChanged(s)}),t.qZA()()()()),2&e&&(t.xp6(17),t.Q6J("ngModel",n.value),t.xp6(1),t.Q6J("ngIf",n.value),t.xp6(2),t.Q6J("ngIf",n.isLoading),t.xp6(1),t.Q6J("ngForOf",n.mods),t.xp6(1),t.Q6J("length",200)("pageSizeOptions",t.DdM(6,A)))},dependencies:[p.sg,p.O5,d.KE,d.hX,d.R9,M.Nt,f.NW,m.Ou,h.Hw,v.S,g.Fj,g.JJ,g.On],styles:[".background[_ngcontent-%COMP%]{background-color:#000;min-height:65vh}.heading[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:2em;padding-top:20px}.mat-card[_ngcontent-%COMP%]{background-color:#c9c9c9!important}[_nghost-%COMP%]     .mat-form-field-underline{background-color:#fff!important;border:1px solid}[_nghost-%COMP%]     .mat-form-field-label{color:#fff!important}.search-box[_ngcontent-%COMP%]{color:#f5f5f5;margin:auto;padding-top:2em;width:80%}.about-page[_ngcontent-%COMP%]{width:80%;margin:auto;color:#a09e9e;padding-top:20px;font-size:small}.about-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.mods-list[_ngcontent-%COMP%]{width:80%;margin:auto}.mods-list[_ngcontent-%COMP%]   .mod[_ngcontent-%COMP%]{padding-bottom:2em;cursor:pointer}mat-paginator[_ngcontent-%COMP%]{background-color:#ffffff1a;color:#fff}[_nghost-%COMP%]     .mat-select-value{color:#ebe6e6e7!important}.loading[_ngcontent-%COMP%]{min-height:61vh;align-items:center;justify-content:center;display:flex;width:inherit;position:absolute;z-index:2}.ads[_ngcontent-%COMP%]{margin-bottom:25px}"]}),o})();const Z=[{path:"",component:C}];let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,c.Bz.forChild(Z),d.lN,M.c,f.TU,m.Cq,h.Ps,v.s,g.u5]}),o})()}}]);