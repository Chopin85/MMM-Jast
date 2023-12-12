/*! *****************************************************************************
  mmm-jast
  Version 2.9.1

  A minimalistic stock ticker based on Yahoo's finance API for the MagicMirror² platform.
  Please submit bugs at https://github.com/jalibu/MMM-Jast/issues

  (c) Jan.Litzenburger@gmail.com
  Licence: MIT

  This file is auto-generated. Do not edit.
***************************************************************************** */

!function(e){"use strict";function t(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var r=t(e);class a{static getCurrentValueStyle(e){return{style:e.showCurrency?"currency":"decimal",useGrouping:e.useGrouping,currencyDisplay:e.currencyStyle,minimumFractionDigits:e.numberDecimalsValues<=8?e.numberDecimalsValues:8,maximumFractionDigits:e.numberDecimalsValues<=8?e.numberDecimalsValues:8}}static getChangeValueStyle(e){return{style:e.showChangeValueCurrency?"currency":"decimal",useGrouping:e.useGrouping,currencyDisplay:e.currencyStyle,minimumFractionDigits:e.numberDecimalsValues<=8?e.numberDecimalsValues:8,maximumFractionDigits:e.numberDecimalsValues<=8?e.numberDecimalsValues:8}}static getPercentStyle(e){return{style:"percent",useGrouping:e.useGrouping,minimumFractionDigits:e.numberDecimalsPercentages<=8?e.numberDecimalsPercentages:8}}static getNumberOfDisplayedStocks(e,t){return t.showHiddenStocks?e.length:e.filter((e=>!e.meta.hidden)).length}static getStockChange(e){var t;return null===(t=e.price)||void 0===t?void 0:t.regularMarketChange}static getStockPerformance(e){return e.meta.purchasePrice?a.getCurrentValue(e)-e.meta.purchasePrice:0}static getStockPerformanceAsString(e,t){return a.getStockPerformance(e).toLocaleString(t.locale,Object.assign(a.getChangeValueStyle(t),{currency:e.price.currency}))}static getStockPerformanceSumAsString(e,t){return(a.getStockPerformance(e)*e.meta.quantity).toLocaleString(t.locale,Object.assign(a.getChangeValueStyle(t),{currency:e.price.currency}))}static getStockPerformancePercentAsString(e,t){return(e.meta.purchasePrice?(a.getCurrentValue(e)-e.meta.purchasePrice)/e.meta.purchasePrice:0).toLocaleString(t.locale,a.getPercentStyle(t))}static getStockChangePercent(e){var t;return null===(t=e.price)||void 0===t?void 0:t.regularMarketChangePercent}static getCurrentValue(e){var t;return null===(t=e.price)||void 0===t?void 0:t.regularMarketPrice}static getStockChangeAsString(e,t){return a.getStockChange(e).toLocaleString(t.locale,Object.assign(a.getChangeValueStyle(t),{currency:e.price.currency}))}static getStockChangePercentAsString(e,t){return a.getStockChangePercent(e).toLocaleString(t.locale,a.getPercentStyle(t))}static getCurrentValueAsString(e,t){return a.getCurrentValue(e).toLocaleString(t.locale,Object.assign(a.getCurrentValueStyle(t),{currency:e.price.currency}))}static getPurchasePriceAsString(e,t){return e.meta.purchasePrice.toLocaleString(t.locale,Object.assign(a.getCurrentValueStyle(t),{currency:e.price.currency}))}static getStockName(e){return e.meta.name||e.price.longName}static getPortfolioValueAsString(e,t){return e.value.toLocaleString(t.locale,Object.assign(a.getCurrentValueStyle(t),{currency:e.currency}))}static getPortfolioPerformanceValueAsString(e,t){return(e.value-e.purchaseValue).toLocaleString(t.locale,Object.assign(a.getCurrentValueStyle(t),{currency:e.currency}))}static getPortfolioPerformancePercentAsString(e,t){return((e.value-e.purchaseValue)/e.purchaseValue).toLocaleString(t.locale,a.getPercentStyle(t))}static getPortfolioChangeAsString(e,t){return(e.value-e.oldValue).toLocaleString(t.locale,Object.assign(a.getCurrentValueStyle(t),{currency:e.currency}))}static getPortfolioChangePercentAsString(e,t){return((e.value-e.oldValue)/e.oldValue).toLocaleString(t.locale,a.getPercentStyle(t))}static getPortfolio(e,t){var a,c,n,i;const o=[];for(const l of e)try{const e=null===(a=t.stocks)||void 0===a?void 0:a.find((e=>{var t;return e.symbol===(null===(t=l.meta)||void 0===t?void 0:t.symbol)}));if(null==e?void 0:e.quantity){const t=(null===(c=l.price)||void 0===c?void 0:c.regularMarketPrice)*e.quantity,r=((null===(n=l.price)||void 0===n?void 0:n.regularMarketPrice)-(null===(i=l.price)||void 0===i?void 0:i.regularMarketChange))*e.quantity,a=o.find((e=>e.currency===l.price.currency)),s=e.purchasePrice?e.purchasePrice*e.quantity:t*e.quantity;a?(a.value+=t,a.oldValue+=r,a.purchaseValue+=s):o.push({value:t,purchaseValue:s,oldValue:r,currency:l.price.currency})}}catch(e){r.warn("There was a problem calculating the detpot growth",e)}return o}}Module.register("MMM-Jast",{defaults:{currencyStyle:"code",fadeSpeedInSeconds:3.5,lastUpdateFormat:"HH:mm",locale:config.locale||"en-GB",maxChangeAge:864e5,maxWidth:"100%",numberDecimalsPercentages:1,numberDecimalsValues:2,displayMode:"vertical",showColors:!0,showCurrency:!0,showChangePercent:!0,showChangeValue:!1,showChangeValueCurrency:!1,showHiddenStocks:!1,showLastUpdate:!1,showPortfolioGrowth:!1,showPortfolioGrowthPercent:!1,showPortfolioValue:!1,showPortfolioPerformanceValue:!1,showPortfolioPerformancePercent:!1,showStockPerformanceValue:!1,showStockPerformanceValueSum:!1,showStockPerformancePercent:!1,updateIntervalInSeconds:600,useGrouping:!1,virtualHorizontalMultiplier:2,stocksPerPage:2,stocks:[{name:"BASF",symbol:"BAS.DE",quantity:10,purchasePrice:70.4},{name:"SAP",symbol:"SAP.DE",quantity:15,purchasePrice:90.3},{name:"Henkel",symbol:"HEN3.DE",hidden:!0},{name:"Bitcoin",symbol:"BTC-EUR"}]},getScripts:()=>["moment.js"],getStyles:()=>["MMM-Jast.css"],getTranslations:()=>({en:"translations/en.json",de:"translations/de.json"}),getTemplate:()=>"templates/MMM-Jast.njk",getTemplateData(){var e,t;return{config:this.config,stocks:null===(e=this.state)||void 0===e?void 0:e.stocks,lastUpdate:moment(null===(t=this.state)||void 0===t?void 0:t.lastUpdate).format(this.config.lastUpdateFormat),utils:a}},start(){this.config.scroll&&(console.warn("MMM-JAST config property 'scroll' is deprecated. Please use displayMode instead."),this.config.displayMode=this.config.scroll),this.loadData(),this.scheduleUpdate(),this.updateDom()},scheduleUpdate(){this.config.updateIntervalInSeconds=this.config.updateIntervalInSeconds<120?120:this.config.updateIntervalInSeconds,setInterval((()=>{this.loadData()}),1e3*this.config.updateIntervalInSeconds)},loadData(){this.sendSocketNotification(`JAST_STOCKS_REQUEST-${this.identifier}`,this.config)},socketNotificationReceived(e,t){e===`JAST_STOCKS_RESPONSE-${this.identifier}`&&(this.state=t,this.updateDom(),console.log("data",t))}})}(Log);
