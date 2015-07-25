/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./TextFieldRenderer','sap/ui/core/Renderer'],function(q,T,R){"use strict";var a=R.extend(T);a.getInnerTagName=function(){return('textarea')};a.renderInnerAttributes=function(r,t){var b=r;b.addClass("sapUiTxtA");b.addStyle('overflow','auto');if(t.getWidth()&&t.getWidth()!=''){}else{if(t.getCols()&&t.getCols()!=''){b.writeAttribute('cols',t.getCols())}}if(t.getHeight()&&t.getHeight()!=''){b.addStyle('height',t.getHeight());b.addStyle('margin-top','0');b.addStyle('margin-bottom','0')}else{if(t.getRows()&&t.getRows()!=''){b.writeAttribute('rows',t.getRows())}}switch(t.getWrapping()){case(sap.ui.core.Wrapping.Soft):b.writeAttribute('wrap','soft');break;case(sap.ui.core.Wrapping.Hard):b.writeAttribute('wrap','hard');break;case(sap.ui.core.Wrapping.Off):b.writeAttribute('wrap','off');break}};a.renderARIAInfo=function(r,t){r.writeAccessibilityState(t,{role:t.getAccessibleRole().toLowerCase()||'textbox',labelledby:t.getLabeledBy()?(t.getLabeledBy()+" "+t.getAriaDescribedBy().join(" ")):undefined,required:t.getRequired(),readonly:!t.getEditable(),multiline:true,autocomplete:"none",invalid:t.getValueState()==sap.ui.core.ValueState.Error})};a.renderInnerContent=function(r,t){var b=r;var v=t.getValue();var p=t.getPlaceholder();if(v.length>t.getMaxLength()&&t.getMaxLength()>0){v=v.substring(0,t.getMaxLength())}if(!sap.ui.Device.support.input.placeholder&&p&&!v){b.writeEscaped(p)}else{b.writeEscaped(v)}};return a},true);
