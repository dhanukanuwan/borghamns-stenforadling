(()=>{"use strict";const e=window.React,a=window.wp.i18n,s=window.wp.element,l={grabrun:{title:(0,a.__)("Borghamnskalksten, gråbrun","ordersamples"),boxes:[{name:(0,a.__)("Borstad","ordersamples"),val:"borstad",checked:!1},{name:(0,a.__)("Diamantfräst","ordersamples"),val:"diamantfrast",checked:!1},{name:(0,a.__)("Finslipad","ordersamples"),val:"finslipad",checked:!1},{name:(0,a.__)("Hyvlad","ordersamples"),val:"hyvlad",checked:!1},{name:(0,a.__)("Normalslipad","ordersamples"),val:"normalslipad",checked:!1},{name:(0,a.__)("Polerad","ordersamples"),val:"polerad",checked:!1},{name:(0,a.__)("Sandsågad","ordersamples"),val:"sandsagad",checked:!1}]},ljusgra:{title:(0,a.__)("Borghamnskalksten, ljusgrå","ordersamples"),boxes:[{name:(0,a.__)("Borstad","ordersamples"),val:"borstad",checked:!1},{name:(0,a.__)("Diamantfräst","ordersamples"),val:"diamantfrast",checked:!1},{name:(0,a.__)("Finslipad","ordersamples"),val:"finslipad",checked:!1},{name:(0,a.__)("Hyvlad","ordersamples"),val:"hyvlad",checked:!1},{name:(0,a.__)("Normalslipad","ordersamples"),val:"normalslipad",checked:!1},{name:(0,a.__)("Polerad","ordersamples"),val:"polerad",checked:!1},{name:(0,a.__)("Sandsågad","ordersamples"),val:"sandsagad",checked:!1}]},ox:{title:(0,a.__)("Kolmårdsmarmor OX","ordersamples"),boxes:[{name:(0,a.__)("Borstad","ordersamples"),val:"borstad",checked:!1},{name:(0,a.__)("Diamantfräst","ordersamples"),val:"diamantfrast",checked:!1},{name:(0,a.__)("Polerad","ordersamples"),val:"polerad",checked:!1},{name:(0,a.__)("Sandsågad","ordersamples"),val:"sandsagad",checked:!1},{name:(0,a.__)("Slipad","ordersamples"),val:"slipad",checked:!1}]},oxl:{title:(0,a.__)("Kolmårdsmarmor OXL","ordersamples"),boxes:[{name:(0,a.__)("Borstad","ordersamples"),val:"borstad",checked:!1},{name:(0,a.__)("Diamantfräst","ordersamples"),val:"diamantfrast",checked:!1},{name:(0,a.__)("Polerad","ordersamples"),val:"polerad",checked:!1},{name:(0,a.__)("Sandsågad","ordersamples"),val:"sandsagad",checked:!1},{name:(0,a.__)("Slipad","ordersamples"),val:"slipad",checked:!1}]}},r=()=>(0,e.createElement)("div",{className:"order-samples-wrap"},l&&(0,e.createElement)(e.Fragment,null,Object.keys(l).map(((a,s)=>{const r=l[a];return(0,e.createElement)("div",{className:"row",key:s},(0,e.createElement)("div",{className:"col-12"},(0,e.createElement)("h3",{className:"h4"},r.title),(0,e.createElement)("div",{className:"bg-white py-3 px-4 d-flex mb-4 mb-lg-5"},r.boxes.map(((s,l)=>(0,e.createElement)("div",{className:"form-check form-check-inline",key:l},(0,e.createElement)("input",{className:"form-check-input mt-1 me-0",type:"checkbox",id:`${a}_${s.val}`,value:s.val,checked:s.checked}),(0,e.createElement)("label",{className:"form-check-label",htmlFor:`${a}_${s.val}`},s.name)))))))})))),d=document.getElementById("order-samples-wrap");d&&(0,s.createRoot)(d).render((0,e.createElement)(r,null))})();