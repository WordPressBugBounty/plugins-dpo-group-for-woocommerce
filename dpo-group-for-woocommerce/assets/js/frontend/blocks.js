!function(){"use strict";var e=window.wp.element,t=window.wp.i18n,n=window.wc.wcBlocksRegistry,o=window.wp.htmlEntities;const l=(0,window.wc.wcSettings.getSetting)("dpo_data",{}),a=(0,t.__)("DPO Payments","woo-gutenberg-products-block"),r=(0,o.decodeEntities)(l.title)||a,c={name:"woocommerce_dpo",placeOrderButtonLabel:(0,t.__)(l.button_text,"woo-gutenberg-products-block"),label:(0,e.createElement)((n=>{const{PaymentMethodLabel:o}=n.components,a=l.title?l.title:(0,t.__)("Credit / Debit Card","woo-gutenberg-products-block");return(0,e.createElement)(o,{text:a})}),null),content:(0,e.createElement)((e=>wp.element.createElement("div",null,wp.element.createElement("div",{id:"dpopayment",onload:i(l)}))),null),edit:(0,e.createElement)("div",null),canMakePayment:()=>!0,ariaLabel:r,supports:{features:l.supports}};function i(e){var t=setInterval((function(){jQuery("#dpopayment").length>0&&(jQuery("#dpopayment").empty(),jQuery("#dpopayment").append(e.icons),clearInterval(t))}),1e3)}(0,n.registerPaymentMethod)(c)}();