"use strict";
document.addEventListener("DOMContentLoaded",()=>{
  const buttons=document.querySelectorAll(".language-switch button");
  function setLanguage(lang){
    document.documentElement.lang=lang;
    document.querySelectorAll(".ko-copy").forEach(node=>node.hidden=lang!=="ko");
    document.querySelectorAll(".en-copy").forEach(node=>node.hidden=lang!=="en");
    buttons.forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.lang===lang)));
    document.querySelectorAll("[data-alt-ko][data-alt-en]").forEach(image=>image.alt=lang==="ko"?image.dataset.altKo:image.dataset.altEn);
    const back=document.querySelector(".article-back");
    if(back)back.href=`news.html?lang=${lang}`;
    document.title=lang==="ko"?"MAX-Hull 공개 — MarinAX":"MAX-Hull launch — MarinAX";
  }
  buttons.forEach(button=>button.addEventListener("click",()=>setLanguage(button.dataset.lang)));
  setLanguage(new URLSearchParams(location.search).get("lang")==="en"?"en":"ko");
});
