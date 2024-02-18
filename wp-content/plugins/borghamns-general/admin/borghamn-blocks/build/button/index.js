(()=>{"use strict";var e,n={1992:()=>{const e=window.wp.blocks,n=window.React,t=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.components,r=JSON.parse('{"N9":"borghamns-general/button"}');(0,e.registerBlockType)(r.N9,{edit:function({attributes:e,setAttributes:r}){const{btnText:o,url:s,btnColor:c,hideIcon:i,align:m}=e;let u="btn text-decoration-none rounded-0 "+(c?`btn-${c}`:""),b="d-flex";m&&("right"===m&&(b=`${b} justify-content-end`),"center"===m&&(b=`${b} justify-content-center`));const g=(0,l.useBlockProps)({className:b});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)(a.PanelBody,{title:(0,t.__)("Settings","borghamns-general"),initialOpen:!0},(0,n.createElement)(a.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(a.TextControl,{label:(0,t.__)("Button Text","borghamns-general"),value:o,onChange:e=>{r({btnText:e})}}))),(0,n.createElement)(a.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(a.TextControl,{label:(0,t.__)("Button Link","borghamns-general"),value:s,onChange:e=>{r({url:e})}}))),(0,n.createElement)(a.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(a.SelectControl,{label:(0,t.__)("Button Color","borghamns-general"),value:c,onChange:e=>{r({btnColor:e})},options:[{value:"primary",label:(0,t.__)("Green","borghamns-general")},{value:"dark-text",label:(0,t.__)("Dark","borghamns-general")},{value:"secondary",label:(0,t.__)("Gray","borghamns-general")},{value:"white",label:(0,t.__)("White","borghamns-general")}]}))),(0,n.createElement)(a.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(a.ToggleControl,{label:(0,t.__)("Hide Button Icon","borghamns-general"),checked:i,onChange:()=>{r({hideIcon:!i})}}))))),(0,n.createElement)(l.BlockControls,{group:"block"},(0,n.createElement)(l.AlignmentControl,{value:m,onChange:e=>{r({align:void 0===e?"":e})}})),(0,n.createElement)("div",{...g},(0,n.createElement)("a",{className:u,href:s},(0,n.createElement)("div",{className:"d-flex"},(0,n.createElement)("span",{className:i?"":"pe-2"},o),!i&&(0,n.createElement)("div",{className:"d-flex align-items-center"},(0,n.createElement)("span",{className:`line-right bg-${"secondary"===c||"white"===c?"dark-text":"white"} d-inline-block btn-line`}),(0,n.createElement)("span",{className:"icon-ion-ios-arrow-right"}))))))},save:function({attributes:e}){const{btnText:t,url:a,btnColor:r,hideIcon:o,align:s}=e;let c="btn rounded-0 "+(r?`btn-${r}`:""),i="d-flex";s&&("right"===s&&(i=`${i} justify-content-end`),"center"===s&&(i=`${i} justify-content-center`));const m=l.useBlockProps.save({className:i}).className;return(0,n.createElement)("div",{...l.useBlockProps.save(),className:m},(0,n.createElement)("a",{className:c,href:a},(0,n.createElement)("div",{className:"d-flex"},(0,n.createElement)("span",{className:o?"":"pe-2"},t),!o&&(0,n.createElement)("div",{className:"d-flex align-items-center"},(0,n.createElement)("span",{className:`line-right bg-${"secondary"===r||"white"===r?"dark-text":"white"} d-inline-block btn-line`}),(0,n.createElement)("span",{className:"icon-ion-ios-arrow-right"})))))}})}},t={};function l(e){var a=t[e];if(void 0!==a)return a.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,l),r.exports}l.m=n,e=[],l.O=(n,t,a,r)=>{if(!t){var o=1/0;for(m=0;m<e.length;m++){for(var[t,a,r]=e[m],s=!0,c=0;c<t.length;c++)(!1&r||o>=r)&&Object.keys(l.O).every((e=>l.O[e](t[c])))?t.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(m--,1);var i=a();void 0!==i&&(n=i)}}return n}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[t,a,r]},l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={440:0,576:0};l.O.j=n=>0===e[n];var n=(n,t)=>{var a,r,[o,s,c]=t,i=0;if(o.some((n=>0!==e[n]))){for(a in s)l.o(s,a)&&(l.m[a]=s[a]);if(c)var m=c(l)}for(n&&n(t);i<o.length;i++)r=o[i],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},t=globalThis.webpackChunkborghamn_blocks=globalThis.webpackChunkborghamn_blocks||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var a=l.O(void 0,[576],(()=>l(1992)));a=l.O(a)})();