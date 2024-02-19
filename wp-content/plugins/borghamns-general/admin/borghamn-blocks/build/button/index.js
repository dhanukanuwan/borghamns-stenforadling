(()=>{"use strict";var e,t={1992:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.i18n,l=window.wp.blockEditor,a=window.wp.components,r=JSON.parse('{"N9":"borghamns-general/button"}');(0,e.registerBlockType)(r.N9,{edit:function({attributes:e,setAttributes:r}){const{btnText:o,url:s,btnColor:c,hideIcon:i,align:m}=e;let u="btn mt-auto text-decoration-none rounded-0 "+(c?`btn-${c}`:""),g="d-flex flex-grow-1";m&&("right"===m&&(g=`${g} justify-content-end`),"center"===m&&(g=`${g} justify-content-center`));const b=(0,l.useBlockProps)({className:g});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Settings","borghamns-general"),initialOpen:!0},(0,t.createElement)(a.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(a.TextControl,{label:(0,n.__)("Button Text","borghamns-general"),value:o,onChange:e=>{r({btnText:e})}}))),(0,t.createElement)(a.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(a.TextControl,{label:(0,n.__)("Button Link","borghamns-general"),value:s,onChange:e=>{r({url:e})}}))),(0,t.createElement)(a.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(a.SelectControl,{label:(0,n.__)("Button Color","borghamns-general"),value:c,onChange:e=>{r({btnColor:e})},options:[{value:"primary",label:(0,n.__)("Green","borghamns-general")},{value:"dark-text",label:(0,n.__)("Dark","borghamns-general")},{value:"secondary",label:(0,n.__)("Gray","borghamns-general")},{value:"white",label:(0,n.__)("White","borghamns-general")}]}))),(0,t.createElement)(a.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(a.ToggleControl,{label:(0,n.__)("Hide Button Icon","borghamns-general"),checked:i,onChange:()=>{r({hideIcon:!i})}}))))),(0,t.createElement)(l.BlockControls,{group:"block"},(0,t.createElement)(l.AlignmentControl,{value:m,onChange:e=>{r({align:void 0===e?"":e})}})),(0,t.createElement)("div",{...b},(0,t.createElement)("a",{className:u,href:s},(0,t.createElement)("div",{className:"d-flex"},(0,t.createElement)("span",{className:i?"":"pe-2"},o),!i&&(0,t.createElement)("div",{className:"d-flex align-items-center"},(0,t.createElement)("span",{className:`line-right bg-${"secondary"===c||"white"===c?"dark-text":"white"} d-inline-block btn-line`}),(0,t.createElement)("span",{className:"icon-ion-ios-arrow-right"}))))))},save:function({attributes:e}){const{btnText:n,url:a,btnColor:r,hideIcon:o,align:s}=e;let c="btn mt-auto rounded-0 "+(r?`btn-${r}`:""),i="d-flex flex-grow-1";s&&("right"===s&&(i=`${i} justify-content-end`),"center"===s&&(i=`${i} justify-content-center`));const m=l.useBlockProps.save({className:i}).className;return(0,t.createElement)("div",{...l.useBlockProps.save(),className:m},(0,t.createElement)("a",{className:c,href:a},(0,t.createElement)("div",{className:"d-flex"},(0,t.createElement)("span",{className:o?"":"pe-2"},n),!o&&(0,t.createElement)("div",{className:"d-flex align-items-center"},(0,t.createElement)("span",{className:`line-right bg-${"secondary"===r||"white"===r?"dark-text":"white"} d-inline-block btn-line`}),(0,t.createElement)("span",{className:"icon-ion-ios-arrow-right"})))))}})}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,n,a,r)=>{if(!n){var o=1/0;for(m=0;m<e.length;m++){for(var[n,a,r]=e[m],s=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(l.O).every((e=>l.O[e](n[c])))?n.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(m--,1);var i=a();void 0!==i&&(t=i)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[n,a,r]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={440:0,576:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[o,s,c]=n,i=0;if(o.some((t=>0!==e[t]))){for(a in s)l.o(s,a)&&(l.m[a]=s[a]);if(c)var m=c(l)}for(t&&t(n);i<o.length;i++)r=o[i],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(m)},n=globalThis.webpackChunkborghamn_blocks=globalThis.webpackChunkborghamn_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=l.O(void 0,[576],(()=>l(1992)));a=l.O(a)})();