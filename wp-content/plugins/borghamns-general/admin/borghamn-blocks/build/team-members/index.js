(()=>{"use strict";var e,t={452:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,l=window.wp.blockEditor,r=window.wp.components,n=window.wp.data,o=window.wp.element,s=JSON.parse('{"N9":"borghamns-general/team-members"}');(0,e.registerBlockType)(s.N9,{edit:function({attributes:e,setAttributes:s}){const{displayType:i,category:m,itemsNum:d,displayIds:c,columns:p}=e,b=(0,l.useBlockProps)({className:"col-12"}),u=(0,n.useSelect)((e=>e("core").getEntityRecords("postType","team",{_embed:1})),[]);return(0,t.createElement)(o.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,a.__)("Settings","borghamns-general"),initialOpen:!0},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(r.SelectControl,{label:(0,a.__)("Display Type","borghamns-general"),value:i,onChange:e=>{s({displayType:e})},options:[{value:"all",label:(0,a.__)("All","borghamns-general")},{value:"category",label:(0,a.__)("Department","borghamns-general")},{value:"selected",label:(0,a.__)("Manually selected","borghamns-general")}]}))))),(0,t.createElement)("div",{...b},u&&u.length>0&&(0,t.createElement)("div",{className:"row"},u.map(((e,a)=>(0,t.createElement)("div",{className:"col-12 col-md-6 col-lg-4",key:a},(0,t.createElement)("div",{className:"team-item-wrap bg-white pb-4 mb-4"},e._embedded&&e._embedded["wp:featuredmedia"]&&e._embedded["wp:featuredmedia"][0]&&(0,t.createElement)("div",{className:"round-img-wrap position-relative"},(0,t.createElement)("div",{className:"p-2"},(0,t.createElement)("img",{src:e._embedded["wp:featuredmedia"][0].source_url,className:"mw-100",alt:e._embedded["wp:featuredmedia"][0].alt_text,title:e._embedded["wp:featuredmedia"][0].title.rendered}))),(0,t.createElement)("div",{className:"mt-3 text-center"},(0,t.createElement)("h3",{className:"liten h4 mb-1"},e.title.rendered),e.acf.position&&(0,t.createElement)("span",{className:"text-primary"},e.acf.position)))))))))}})}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,a,r,n)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,r,n]=e[d],s=!0,i=0;i<a.length;i++)(!1&n||o>=n)&&Object.keys(l.O).every((e=>l.O[e](a[i])))?a.splice(i--,1):(s=!1,n<o&&(o=n));if(s){e.splice(d--,1);var m=r();void 0!==m&&(t=m)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,r,n]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={420:0,524:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[o,s,i]=a,m=0;if(o.some((t=>0!==e[t]))){for(r in s)l.o(s,r)&&(l.m[r]=s[r]);if(i)var d=i(l)}for(t&&t(a);m<o.length;m++)n=o[m],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(d)},a=globalThis.webpackChunkborghamn_blocks=globalThis.webpackChunkborghamn_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=l.O(void 0,[524],(()=>l(452)));r=l.O(r)})();