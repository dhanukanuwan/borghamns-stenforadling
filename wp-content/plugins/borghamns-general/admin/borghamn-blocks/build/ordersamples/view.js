(()=>{"use strict";const e=window.React,a=window.wp.i18n,l=window.wp.element,s={grabrun:{title:(0,a.__)("Borghamnskalksten, gråbrun","ordersamples"),annan_ytbehandling:"",boxes:[{name:(0,a.__)("Borstad","ordersamples"),val:"borstad",checked:!1},{name:(0,a.__)("Diamantfräst","ordersamples"),val:"diamantfrast",checked:!1},{name:(0,a.__)("Finslipad","ordersamples"),val:"finslipad",checked:!1},{name:(0,a.__)("Hyvlad","ordersamples"),val:"hyvlad",checked:!1},{name:(0,a.__)("Normalslipad","ordersamples"),val:"normalslipad",checked:!1},{name:(0,a.__)("Polerad","ordersamples"),val:"polerad",checked:!1},{name:(0,a.__)("Sandsågad","ordersamples"),val:"sandsagad",checked:!1}]},ljusgra:{title:(0,a.__)("Borghamnskalksten, ljusgrå","ordersamples"),annan_ytbehandling:"",boxes:[{name:(0,a.__)("Borstad","ordersamples"),val:"borstad",checked:!1},{name:(0,a.__)("Diamantfräst","ordersamples"),val:"diamantfrast",checked:!1},{name:(0,a.__)("Finslipad","ordersamples"),val:"finslipad",checked:!1},{name:(0,a.__)("Hyvlad","ordersamples"),val:"hyvlad",checked:!1},{name:(0,a.__)("Normalslipad","ordersamples"),val:"normalslipad",checked:!1},{name:(0,a.__)("Polerad","ordersamples"),val:"polerad",checked:!1},{name:(0,a.__)("Sandsågad","ordersamples"),val:"sandsagad",checked:!1}]},ox:{title:(0,a.__)("Kolmårdsmarmor OX","ordersamples"),annan_ytbehandling:"",boxes:[{name:(0,a.__)("Borstad","ordersamples"),val:"borstad",checked:!1},{name:(0,a.__)("Diamantfräst","ordersamples"),val:"diamantfrast",checked:!1},{name:(0,a.__)("Polerad","ordersamples"),val:"polerad",checked:!1},{name:(0,a.__)("Sandsågad","ordersamples"),val:"sandsagad",checked:!1},{name:(0,a.__)("Slipad","ordersamples"),val:"slipad",checked:!1}]},oxl:{title:(0,a.__)("Kolmårdsmarmor OXL","ordersamples"),annan_ytbehandling:"",boxes:[{name:(0,a.__)("Borstad","ordersamples"),val:"borstad",checked:!1},{name:(0,a.__)("Diamantfräst","ordersamples"),val:"diamantfrast",checked:!1},{name:(0,a.__)("Polerad","ordersamples"),val:"polerad",checked:!1},{name:(0,a.__)("Sandsågad","ordersamples"),val:"sandsagad",checked:!1},{name:(0,a.__)("Slipad","ordersamples"),val:"slipad",checked:!1}]}},r=()=>{const[r,d]=(0,l.useState)(s);return(0,e.createElement)("div",{className:"order-samples-wrap"},Object.keys(r).map(((l,s)=>{const n=r[l];return(0,e.createElement)("div",{className:"row",key:s},(0,e.createElement)("div",{className:"col-12"},(0,e.createElement)("h3",{className:"h4"},n.title),(0,e.createElement)("div",{className:"bg-white p-4 d-flex flex-column mb-4 mb-lg-5"},(0,e.createElement)("div",{className:"boxes-wrap"},n.boxes.map(((a,s)=>(0,e.createElement)("div",{className:"form-check form-check-inline",key:s},(0,e.createElement)("input",{className:"form-check-input mt-1 me-0",type:"checkbox",id:`${l}_${a.val}`,value:a.val,checked:a.checked,onChange:()=>((e,a,l)=>{let s={...r},n=r[e].boxes;if(!n)return;let m={...n[a],checked:l};m&&(n[a]=m,s[e].boxes=n),d(s)})(l,s,!a.checked)}),(0,e.createElement)("label",{className:"form-check-label",htmlFor:`${l}_${a.val}`},a.name))))),(0,e.createElement)("div",{className:"mt-3"},(0,e.createElement)("label",{htmlFor:`${l}_annan_ytbehandling`,className:"form-label h6"},(0,a.__)("Annan ytbehandling","ordersamples")),(0,e.createElement)("input",{type:"text",className:"form-control",id:`${l}_annan_ytbehandling`,value:n.annan_ytbehandling,placeholder:(0,a.__)("Skriv här...","ordersamples"),onChange:e=>((e,a)=>{let l={...r},s={...r[e],annan_ytbehandling:a};s&&(l[e]=s),d(l)})(l,e.target.value)})))))})))},d=document.getElementById("order-samples-wrap");d&&(0,l.createRoot)(d).render((0,e.createElement)(r,null))})();