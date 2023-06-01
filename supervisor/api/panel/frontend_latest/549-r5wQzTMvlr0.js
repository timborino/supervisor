"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[549],{67622:(e,i,t)=>{var a=t(17463),l=t(34541),d=t(47838),n=t(31338),o=t(68144),s=t(79932),r=t(83448),c=t(47181);t(76870),t(5666);(0,a.Z)([(0,s.Mo)("ha-file-upload")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"accept",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.Cb)()],key:"value",value:()=>null},{kind:"field",decorators:[(0,s.Cb)({type:Boolean})],key:"uploading",value:()=>!1},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,attribute:"auto-open-file-dialog"})],key:"autoOpenFileDialog",value:()=>!1},{kind:"field",decorators:[(0,s.SB)()],key:"_drag",value:()=>!1},{kind:"field",decorators:[(0,s.IO)("#input")],key:"_input",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){(0,l.Z)((0,d.Z)(t.prototype),"firstUpdated",this).call(this,e),this.autoOpenFileDialog&&this._openFilePicker()}},{kind:"method",key:"render",value:function(){var e;return o.dy` ${this.uploading?o.dy`<ha-circular-progress alt="Uploading" size="large" active></ha-circular-progress>`:o.dy` <label for="input" class="mdc-text-field mdc-text-field--filled ${(0,r.$)({"mdc-text-field--focused":this._drag,"mdc-text-field--with-leading-icon":Boolean(this.icon),"mdc-text-field--with-trailing-icon":Boolean(this.value)})}" @drop="${this._handleDrop}" @dragenter="${this._handleDragStart}" @dragover="${this._handleDragStart}" @dragleave="${this._handleDragEnd}" @dragend="${this._handleDragEnd}"> <span class="mdc-text-field__ripple"></span> <span class="mdc-floating-label ${this.value||this._drag?"mdc-floating-label--float-above":""}" id="label">${this.label}</span> ${this.icon?o.dy`<span class="mdc-text-field__icon mdc-text-field__icon--leading"> <ha-icon-button @click="${this._openFilePicker}" .path="${this.icon}"></ha-icon-button> </span>`:""} <div class="value">${this.value}</div> <input id="input" type="file" class="mdc-text-field__input file" accept="${this.accept}" @change="${this._handleFilePicked}" aria-labelledby="label"> ${this.value?o.dy`<span class="mdc-text-field__icon mdc-text-field__icon--trailing"> <ha-icon-button slot="suffix" @click="${this._clearValue}" .label="${(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.close"))||"close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button> </span>`:""} <span class="mdc-line-ripple ${this._drag?"mdc-line-ripple--active":""}"></span> </label> `} `}},{kind:"method",key:"_openFilePicker",value:function(){var e;null===(e=this._input)||void 0===e||e.click()}},{kind:"method",key:"_handleDrop",value:function(e){var i;e.preventDefault(),e.stopPropagation(),null!==(i=e.dataTransfer)&&void 0!==i&&i.files&&(0,c.B)(this,"file-picked",{files:e.dataTransfer.files}),this._drag=!1}},{kind:"method",key:"_handleDragStart",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!0}},{kind:"method",key:"_handleDragEnd",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!1}},{kind:"method",key:"_handleFilePicked",value:function(e){(0,c.B)(this,"file-picked",{files:e.target.files})}},{kind:"method",key:"_clearValue",value:function(e){e.preventDefault(),this.value=null,(0,c.B)(this,"change")}},{kind:"get",static:!0,key:"styles",value:function(){return[n.W,o.iv`:host{display:block}.mdc-text-field--filled{height:auto;padding-top:16px;cursor:pointer}.mdc-text-field--filled.mdc-text-field--with-trailing-icon{padding-top:28px}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:var(--secondary-text-color)}.mdc-text-field--filled.mdc-text-field--with-trailing-icon .mdc-text-field__icon{align-self:flex-end}.mdc-text-field__icon--leading{margin-bottom:12px;inset-inline-start:initial;inset-inline-end:0px;direction:var(--direction)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:scale(.75);top:8px}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field--filled .mdc-floating-label{inset-inline-start:48px!important;inset-inline-end:initial!important;direction:var(--direction)}.mdc-text-field__icon--trailing{pointer-events:auto!important}.dragged:before{position:var(--layout-fit_-_position);top:var(--layout-fit_-_top);right:var(--layout-fit_-_right);bottom:var(--layout-fit_-_bottom);left:var(--layout-fit_-_left);background:currentColor;content:"";opacity:var(--dark-divider-opacity);pointer-events:none;border-radius:4px}.value{width:100%}input.file{display:none}img{max-width:100%;max-height:125px}ha-icon-button{--mdc-icon-button-size:24px;--mdc-icon-size:20px}ha-circular-progress{display:block;text-align-last:center}`]}}]}}),o.oi)},20549:(e,i,t)=>{t.r(i),t.d(i,{HaFileSelector:()=>c});var a=t(17463),l=t(34541),d=t(47838),n=t(68144),o=t(79932),s=t(47181);var r=t(26765);t(67622);let c=(0,a.Z)([(0,o.Mo)("ha-selector-file")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,o.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,o.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,o.Cb)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,o.SB)()],key:"_filename",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_busy",value:()=>!1},{kind:"method",key:"render",value:function(){var e,i;return n.dy` <ha-file-upload .hass="${this.hass}" .accept="${null===(e=this.selector.file)||void 0===e?void 0:e.accept}" .icon="${"M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"}" .label="${this.label}" .required="${this.required}" .disabled="${this.disabled}" .helper="${this.helper}" .uploading="${this._busy}" .value="${this.value?(null===(i=this._filename)||void 0===i?void 0:i.name)||"Unknown file":""}" @file-picked="${this._uploadFile}" @change="${this._removeFile}"></ha-file-upload> `}},{kind:"method",key:"willUpdate",value:function(e){(0,l.Z)((0,d.Z)(t.prototype),"willUpdate",this).call(this,e),e.has("value")&&this._filename&&this.value!==this._filename.fileId&&(this._filename=void 0)}},{kind:"method",key:"_uploadFile",value:async function(e){this._busy=!0;const i=e.detail.files[0];try{const e=await(async(e,i)=>{const t=new FormData;t.append("file",i);const a=await e.fetchWithAuth("/api/file_upload",{method:"POST",body:t});if(413===a.status)throw new Error(`Uploaded file is too large (${i.name})`);if(200!==a.status)throw new Error("Unknown error");return(await a.json()).file_id})(this.hass,i);this._filename={fileId:e,name:i.name},(0,s.B)(this,"value-changed",{value:e})}catch(e){(0,r.Ys)(this,{text:this.hass.localize("ui.components.selectors.file.upload_failed",{reason:e.message||e})})}finally{this._busy=!1}}},{kind:"field",key:"_removeFile",value(){return async()=>{this._busy=!0;try{await(async(e,i)=>e.callApi("DELETE","file_upload",{file_id:i}))(this.hass,this.value)}catch(e){}finally{this._busy=!1}this._filename=void 0,(0,s.B)(this,"value-changed",{value:""})}}}]}}),n.oi)}}]);
//# sourceMappingURL=549-r5wQzTMvlr0.js.map