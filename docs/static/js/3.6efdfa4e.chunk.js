(this.webpackJsonpmyburger=this.webpackJsonpmyburger||[]).push([[3],{103:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),i=a(14),l=a(13),o=a(0),c=a.n(o),u=a(4),s=a(17),d=a(98),p=a.n(d),m=a(52),h=a(33),v=function(e){return c.a.createElement("div",{className:p.a.CheckoutSummary},c.a.createElement("h1",null,"We hope it tastes well!"),c.a.createElement("div",{style:{width:"100%",margin:"auto"}},c.a.createElement(m.a,{ingredients:e.ingredients})),c.a.createElement(h.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),c.a.createElement(h.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},g=a(1),f=a(19),b=a(99),C=a.n(b),y=a(18),E=a(94),k=a(26),j=a(95),I=a(41),O=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Name"},value:"",validation:{required:!0},valid:!1,touched:!1},address:{elementType:"input",elementConfig:{type:"text",placeholder:"Address"},value:"",validation:{required:!0},valid:!1,touched:!1},phone:{elementType:"tel",elementConfig:{type:"text",placeholder:"Phone Number"},value:"",validation:{required:!0,isNumeric:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"E-Mail"},value:"",validation:{},valid:!0,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ings,price:e.props.price/100,orderData:a,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,a){var n=Object(g.a)({},e.state.orderForm),r=Object(g.a)({},n[a]);r.value=t.target.value,r.valid=Object(E.a)(r.value,r.validation),r.touched=!0,n[a]=r;var i=!0;for(var l in n)i=n[l].valid&&i;e.setState({orderForm:n,formIsValid:i})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=c.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return c.a.createElement(j.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),c.a.createElement(h.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=c.a.createElement(k.a,null)),c.a.createElement("div",{className:C.a.ContactData},c.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),a}(o.Component),_=Object(s.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(y.g(t,a))}}}))(Object(I.a)(O,f.a)),N=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).checkoutCancelled=function(){e.props.history.goBack()},e.checkoutContinued=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=c.a.createElement(u.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?c.a.createElement(u.a,{to:"/"}):null;e=c.a.createElement("div",null,t,c.a.createElement(v,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelled,checkoutContinued:this.checkoutContinued}),c.a.createElement(u.b,{path:this.props.match.path+"/contact-data",component:_}))}return e}}]),a}(o.Component);t.default=Object(s.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(N)},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isNumeric){a=/^\d+$/.test(e)&&a}return a}},95:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(96),l=a.n(i);t.a=function(e){var t=null,a=[l.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(l.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:l.a.Input},r.a.createElement("label",{className:l.a.Label},e.label),t)}},96:function(e,t,a){e.exports={Input:"Input_Input__1u4pb",Label:"Input_Label__3bNmm",InputElement:"Input_InputElement__3zkxl",Invalid:"Input_Invalid__u4Du_"}},98:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__2Kyc7"}},99:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__20nXT"}}}]);
//# sourceMappingURL=3.6efdfa4e.chunk.js.map