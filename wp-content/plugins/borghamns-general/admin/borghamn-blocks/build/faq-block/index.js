(()=>{"use strict";var e,a={2739:()=>{const e=window.wp.blocks,a=window.React,t=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.components,o=window.wp.element,r=window.wp.data,c=JSON.parse('{"N9":"borghamns-general/faq-block"}');(0,e.registerBlockType)(c.N9,{edit:function({attributes:e,setAttributes:c}){const{faqID:s}=e,i=(0,r.useSelect)((e=>e("core").getEntityRecords("postType","faq_block",{include:s,_embed:1})),[s]),m=(0,l.useBlockProps)({className:"faq-wrap"});return(0,a.createElement)(o.Fragment,null,(0,a.createElement)(l.InspectorControls,null,(0,a.createElement)(n.PanelBody,{title:(0,t.__)("Settings","borghamns-general"),initialOpen:!0},(0,a.createElement)(n.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(n.TextControl,{label:(0,t.__)("FAQ Block ID","borghamns-general"),value:s,onChange:e=>{const a=e.split(",");c(a?{faqID:a}:{faqID:[]})}}))))),(0,a.createElement)("div",{...m},i&&i.length>0&&(0,a.createElement)(o.Fragment,null,i.map(((e,t)=>(0,a.createElement)("div",{className:"accordion",key:t,id:`accordion-${t}`},e.acf&&e.acf.faq_block&&e.acf.faq_block.length>0&&(0,a.createElement)(o.Fragment,null,e.acf.faq_block.map(((e,l)=>(0,a.createElement)("div",{className:"accordion-item mb-2 "+(0===l?"bg-white":""),key:l},(0,a.createElement)("h2",{className:"accordion-header"},(0,a.createElement)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapse-${t}-${l}`,"aria-expanded":0===l?"true":"false","aria-controls":`collapse-${t}-${l}`},(0,a.createElement)("h3",{className:"liten h5 mb-0 text-white"},e.question))),(0,a.createElement)("div",{id:`collapse-${t}-${l}`,className:"accordion-collapse collapse "+(0===l?"show":""),"data-bs-parent":`#accordion-${t}`},(0,a.createElement)("div",{className:"accordion-body"},(0,a.createElement)("p",null,e.answer)))))))))))))},save:()=>null})}},t={};function l(e){var n=t[e];if(void 0!==n)return n.exports;var o=t[e]={exports:{}};return a[e](o,o.exports,l),o.exports}l.m=a,e=[],l.O=(a,t,n,o)=>{if(!t){var r=1/0;for(m=0;m<e.length;m++){for(var[t,n,o]=e[m],c=!0,s=0;s<t.length;s++)(!1&o||r>=o)&&Object.keys(l.O).every((e=>l.O[e](t[s])))?t.splice(s--,1):(c=!1,o<r&&(r=o));if(c){e.splice(m--,1);var i=n();void 0!==i&&(a=i)}}return a}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[t,n,o]},l.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={96:0,496:0};l.O.j=a=>0===e[a];var a=(a,t)=>{var n,o,[r,c,s]=t,i=0;if(r.some((a=>0!==e[a]))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(s)var m=s(l)}for(a&&a(t);i<r.length;i++)o=r[i],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},t=globalThis.webpackChunkborghamn_blocks=globalThis.webpackChunkborghamn_blocks||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var n=l.O(void 0,[496],(()=>l(2739)));n=l.O(n)})();