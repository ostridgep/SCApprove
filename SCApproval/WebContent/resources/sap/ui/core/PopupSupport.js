/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./Element','./Control'],function(q,E,C){"use strict";var P=function(){this.getMetadata().addPublicMethods(["getParentPopup","isInPopup","getParentPopupId","addToPopup","removeFromPopup"]);this.isInPopup=function(t){var p=this.getParentPopup(t);return p&&p.length>0};this.getParentPopup=function(t){var T=t?t:this;var $=q(T instanceof sap.ui.core.Element?T.getDomRef():T);return $.closest("[data-sap-ui-popup]")};this.getParentPopupId=function(t){var p=this.getParentPopup(t);return p.attr("data-sap-ui-popup")};this.addChildToPopup=function(p,c){var e="sap.ui.core.Popup.addFocusableContent-"+p;sap.ui.getCore().getEventBus().publish("sap.ui",e,{id:c})};this.removeChildFromPopup=function(p){if(!p){p=this.getPopupId()}var e="sap.ui.core.Popup.removeFocusableContent-"+p;sap.ui.getCore().getEventBus().publish("sap.ui",e,{id:this.getId()})};this.closePopup=function(p){var e="sap.ui.core.Popup.closePopup-"+p;sap.ui.getCore().getEventBus().publish("sap.ui",e)};this.increaseZIndex=function(p,i){var e="sap.ui.core.Popup.increaseZIndex-"+p;sap.ui.getCore().getEventBus().publish("sap.ui",e,{isFromParentPopup:i?i:false})};this.focusTabChain=function(p){var s=p.event.target,n=p.that.getMetadata().getName(),f;if((!!!p.$FocusablesContent||!!!p.$FocusablesFooter)||(!p.$FocusablesContent.length&&!p.$FocusablesFooter.length)){return}if(s.id===p.firstFocusable){q.sap.log.debug("First dummy focus element was focused","",n);if(p.$FocusablesFooter.length>0){q.sap.log.debug("Last footer element will be focused","",n);f=p.$FocusablesFooter[p.$FocusablesFooter.length-1]}else{q.sap.log.debug("Last content element will be focused","",n);f=p.$FocusablesContent[p.$FocusablesContent.length-1]}}else if(s.id===p.lastFocusable){q.sap.log.debug("Last dummy focus element was focues","",n);if(p.$FocusablesContent.length>0){q.sap.log.debug("First content element will be focused","",n);f=p.$FocusablesContent[0]}else{q.sap.log.debug("First footer element will be focused","",n);f=p.$FocusablesFooter[0]}}if(f){var d=sap.ui.Device.browser.msie&&sap.ui.Device.browser.version===9?100:0;q.sap.delayedCall(d,this,function(){var c=sap.ui.getCore().byId(f.id);if(c instanceof C){q.sap.log.debug("Focus will be handled by "+c.getMetadata().getName(),"",n)}else{q.sap.log.debug("oFocusDomRef will be focused","",n)}q.sap.focus(c?c:f);return c?c.getId():f.id})}}};return P},true);
