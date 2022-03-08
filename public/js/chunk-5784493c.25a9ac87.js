(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5784493c"],{1681:function(t,e,i){},"9d01":function(t,e,i){},a844:function(t,e,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("1681"),i("8654")),s=i("58df"),o=Object(s["a"])(n["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var i;t?e.calculateInputHeight():null==(i=e.$refs.input)||i.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b73d:function(t,e,i){"use strict";var a=i("15fd"),n=i("5530"),s=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("d3b7"),i("25f0"),i("4de4"),i("c37a")),o=i("5607"),r=i("2b0e"),l=r["a"].extend({name:"rippleable",directives:{ripple:o["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),u=i("8547"),c=i("58df");function h(t){t.preventDefault()}var d=Object(c["a"])(s["a"],l,u["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:h},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:h},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),p=i("c3f0"),v=i("0789"),f=i("490a"),m=i("80d2"),g=["title"];e["a"]=d.extend({name:"v-switch",directives:{Touch:p["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(a["a"])(t,g));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(v["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(f["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===m["p"].left&&this.isActive||t.keyCode===m["p"].right&&!this.isActive)&&this.onChange()}}})},ec29:function(t,e,i){},fd53:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"pa-7"},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-title",[t._v(" Edit Todo ")]),i("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.save_todo.apply(null,arguments)}}},[i("v-container",{staticClass:"pa-5"},[i("v-row",[i("v-col",[i("v-text-field",{attrs:{color:"purple darken-2",label:"Name",type:"text",required:""},model:{value:t.todo.name,callback:function(e){t.$set(t.todo,"name",e)},expression:"todo.name"}}),i("v-textarea",{attrs:{label:"Description"},model:{value:t.todo.description,callback:function(e){t.$set(t.todo,"description",e)},expression:"todo.description"}}),i("v-switch",{attrs:{label:"Completed"},model:{value:t.todo.completed,callback:function(e){t.$set(t.todo,"completed",e)},expression:"todo.completed"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-btn",{staticClass:"mr-5",attrs:{color:"primary",type:"submit"}},[t._v("Submit")]),i("v-btn",{attrs:{color:"default"},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)],1)],1)},n=[],s={mounted:function(){this.get_todo()},data:function(){return{todo:{name:"",description:"",completed:!1}}},methods:{get_todo:function(){var t=this;this.$todos.select(this.$route.params._id).then((function(e){t.todo=e}))},save_todo:function(){var t=this;this.$todos.update(this.$route.params._id,this.todo).then((function(){t.$router.push("/todos")}))}}},o=s,r=i("2877"),l=i("6544"),u=i.n(l),c=i("8336"),h=i("b0af"),d=i("99d9"),p=i("62ad"),v=i("a523"),f=i("0fd9"),m=i("b73d"),g=i("8654"),w=i("a844"),b=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=b.exports;u()(b,{VBtn:c["a"],VCard:h["a"],VCardTitle:d["b"],VCol:p["a"],VContainer:v["a"],VRow:f["a"],VSwitch:m["a"],VTextField:g["a"],VTextarea:w["a"]})}}]);
//# sourceMappingURL=chunk-5784493c.25a9ac87.js.map