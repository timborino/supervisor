"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8002,7628],{48002:function(a,e,i){i.r(e);var o,r,s,t,n=i(88962),d=i(33368),l=i(71650),c=i(82390),u=i(69205),h=i(70906),p=i(91808),v=i(68144),g=i(14243),m=i(14516),f=i(47181),y=i(85415),_=(i(34821),i(46583),i(5666),i(65040),i(17628)),b=i(11654),k=(0,m.Z)((function(a,e,i,o){return e.devices.filter((function(e){var o;return(a||["tty","gpio","input"].includes(e.subsystem))&&((null===(o=e.by_id)||void 0===o?void 0:o.toLowerCase().includes(i))||e.name.toLowerCase().includes(i)||e.dev_path.toLocaleLowerCase().includes(i)||JSON.stringify(e.attributes).toLocaleLowerCase().includes(i))})).sort((function(a,e){return(0,y.$)(a.name,e.name,o)}))}));(0,p.Z)([(0,g.Mo)("dialog-hassio-hardware")],(function(a,e){var i=function(e){(0,u.Z)(o,e);var i=(0,h.Z)(o);function o(){var e;(0,l.Z)(this,o);for(var r=arguments.length,s=new Array(r),t=0;t<r;t++)s[t]=arguments[t];return e=i.call.apply(i,[this].concat(s)),a((0,c.Z)(e)),e}return(0,d.Z)(o)}(e);return{F:i,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,g.SB)()],key:"_filter",value:void 0},{kind:"method",key:"showDialog",value:function(a){this._dialogParams=a}},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,(0,f.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var a,e=this;if(!this._dialogParams)return v.Ld;var i=k((null===(a=this.hass.userData)||void 0===a?void 0:a.showAdvanced)||!1,this._dialogParams.hardware,(this._filter||"").toLowerCase(),this.hass.locale.language);return(0,v.dy)(o||(o=(0,n.Z)([' <ha-dialog open scrimClickAction hideActions @closed="','" .heading="','"> <div class="header" slot="heading"> <h2> ',' </h2> <ha-icon-button .label="','" .path="','" dialogAction="close"></ha-icon-button> <search-input .hass="','" .filter="','" @value-changed="','" .label="','"> </search-input> </div> '," </ha-dialog> "])),this.closeDialog,this._dialogParams.supervisor.localize("dialog.hardware.title"),this._dialogParams.supervisor.localize("dialog.hardware.title"),this._dialogParams.supervisor.localize("common.close"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this.hass,this._filter,this._handleSearchChange,this._dialogParams.supervisor.localize("dialog.hardware.search"),i.map((function(a){return(0,v.dy)(r||(r=(0,n.Z)(['<ha-expansion-panel .header="','" .secondary="','" outlined> <div class="device-property"> <span> ',": </span> <span>",'</span> </div> <div class="device-property"> <span> ',": </span> <code>","</code> </div> ",' <div class="attributes"> <span> ',": </span> <pre>","</pre> </div> </ha-expansion-panel>"])),a.name,a.by_id||void 0,e._dialogParams.supervisor.localize("dialog.hardware.subsystem"),a.subsystem,e._dialogParams.supervisor.localize("dialog.hardware.device_path"),a.dev_path,a.by_id?(0,v.dy)(s||(s=(0,n.Z)([' <div class="device-property"> <span> ',": </span> <code>","</code> </div>"])),e._dialogParams.supervisor.localize("dialog.hardware.id"),a.by_id):"",e._dialogParams.supervisor.localize("dialog.hardware.attributes"),(0,_.dump)(a.attributes,{indent:2}))})))}},{kind:"method",key:"_handleSearchChange",value:function(a){this._filter=a.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return[b.Qx,b.yu,(0,v.iv)(t||(t=(0,n.Z)(["ha-icon-button{position:absolute;right:16px;top:10px;text-decoration:none;color:var(--primary-text-color)}h2{margin:18px 42px 0 18px;color:var(--primary-text-color)}ha-expansion-panel{margin:4px 0}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family,monospace)}code{font-size:85%;padding:.2em .4em}search-input{margin:8px 16px 0;display:block}.device-property{display:flex;justify-content:space-between}.attributes{margin-top:12px}"])))]}}]}}),v.oi)},17628:function(a,e,i){i.r(e),i.d(e,{dump:function(){return o.$w}});var o=i(77426)}}]);
//# sourceMappingURL=8002-fNG_pQ0oTBM.js.map