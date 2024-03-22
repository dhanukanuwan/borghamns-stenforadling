(()=>{"use strict";var e,l={1900:()=>{const e=window.wp.blocks,l=window.React,a=window.wp.i18n,n=window.wp.blockEditor,r=window.wp.components,o=JSON.parse('{"N9":"borghamns-general/content-column"}');(0,e.registerBlockType)(o.N9,{edit:function({attributes:e,setAttributes:o}){const{columnSize:t,columnBg:s,columnPadding:g}=e;let c="col-12 position-relative",m="d-flex flex-column h-100";s&&(m=`${m} bg-${s}`,"primary"!==s&&"dark-text"!==s||(m=`${m} text-white`)),g&&"0"!==g&&(m=`${m} p-${g}`),t&&(c=`${c} col-lg-${t}`);const b=(0,n.useBlockProps)({className:c});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(r.PanelBody,{title:(0,a.__)("Settings","borghamns-general"),initialOpen:!0},(0,l.createElement)(r.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(r.SelectControl,{label:(0,a.__)("Column size","borghamns-general"),value:t,onChange:e=>{o({columnSize:e})},options:[{value:"auto",label:(0,a.__)("Auto","borghamns-general")},{value:"12",label:(0,a.__)("12 ( 100% )","borghamns-general")},{value:"9",label:(0,a.__)("9 ( 75% )","borghamns-general")},{value:"8",label:(0,a.__)("8 ( 66.66% )","borghamns-general")},{value:"7",label:(0,a.__)("7 ( 58.33% )","borghamns-general")},{value:"6",label:(0,a.__)("6 ( 50% )","borghamns-general")},{value:"5",label:(0,a.__)("5 ( 41.66% )","borghamns-general")},{value:"4",label:(0,a.__)("4 ( 33.33% )","borghamns-general")},{value:"3",label:(0,a.__)("3 ( 25% )","borghamns-general")}]}))),(0,l.createElement)(r.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(r.SelectControl,{label:(0,a.__)("Background Color","borghamns-general"),value:s,onChange:e=>{o({columnBg:e})},options:[{value:"transparent",label:(0,a.__)("Default","borghamns-general")},{value:"primary",label:(0,a.__)("Green","borghamns-general")},{value:"secondary",label:(0,a.__)("Gray","borghamns-general")},{value:"dark-text",label:(0,a.__)("Dark","borghamns-general")},{value:"white",label:(0,a.__)("White","borghamns-general")}]}))),(0,l.createElement)(r.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(r.SelectControl,{label:(0,a.__)("Padding Size","borghamns-general"),value:g,onChange:e=>{o({columnPadding:e})},options:[{value:"0",label:(0,a.__)("Default","borghamns-general")},{value:"1",label:(0,a.__)("1","borghamns-general")},{value:"2",label:(0,a.__)("2","borghamns-general")},{value:"3",label:(0,a.__)("3","borghamns-general")},{value:"4",label:(0,a.__)("4","borghamns-general")}]}))))),(0,l.createElement)("div",{...b},(0,l.createElement)("div",{className:m},(0,l.createElement)(n.InnerBlocks,{template:[["core/paragraph",{placeholder:"Lorem Ipsum ...."}]],allowedBlocks:["borghamns-general/section-header-tag","core/heading","core/paragraph","borghamns-general/button","core/image","core/video","core/embed","core/file","borghamns-general/testimonial","borghamns-general/faq-block","borghamns-general/team-members","borghamns-general/slideshow","borghamns-general/gallery"]}))))},save:function({attributes:e}){const{columnSize:a,columnBg:r,columnPadding:o}=e;let t="col-12 position-relative",s="d-flex flex-column h-100";r&&(s=`${s} bg-${r}`,"primary"!==r&&"dark-text"!==r||(s=`${s} text-white`)),o&&"0"!==o&&(s=`${s} p-${o}`),a&&(t=`${t} col-lg-${a}`);const g=n.useBlockProps.save({className:t}).className;return(0,l.createElement)("div",{...n.useBlockProps.save(),className:g},(0,l.createElement)("div",{className:s},(0,l.createElement)(n.InnerBlocks.Content,null)))}})}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return l[e](o,o.exports,n),o.exports}n.m=l,e=[],n.O=(l,a,r,o)=>{if(!a){var t=1/0;for(m=0;m<e.length;m++){for(var[a,r,o]=e[m],s=!0,g=0;g<a.length;g++)(!1&o||t>=o)&&Object.keys(n.O).every((e=>n.O[e](a[g])))?a.splice(g--,1):(s=!1,o<t&&(t=o));if(s){e.splice(m--,1);var c=r();void 0!==c&&(l=c)}}return l}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,r,o]},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={752:0,224:0};n.O.j=l=>0===e[l];var l=(l,a)=>{var r,o,[t,s,g]=a,c=0;if(t.some((l=>0!==e[l]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(g)var m=g(n)}for(l&&l(a);c<t.length;c++)o=t[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(m)},a=globalThis.webpackChunkborghamn_blocks=globalThis.webpackChunkborghamn_blocks||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))})();var r=n.O(void 0,[224],(()=>n(1900)));r=n.O(r)})();