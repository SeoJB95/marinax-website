"use strict";
(() => {
  const button = document.querySelector(".notice-language");
  if (!button) return;
  let english = false;
  button.hidden = false;
  button.addEventListener("click", () => {
    english = !english;
    document.documentElement.lang = english ? "en" : "ko";
    document.querySelectorAll("[data-notice-ko]").forEach(element => {
      element.textContent = english ? element.dataset.noticeEn : element.dataset.noticeKo;
    });
    document.querySelector(".notice-list").setAttribute("aria-label", english ? "Public notices" : "전자공고");
    document.querySelector('meta[name="description"]').content = english
      ? "Official notices and announcements from MarinAX Co., Ltd."
      : "주식회사 마린에이엑스의 전자공고 및 법인설립공고.";
    button.textContent = english ? "KOR" : "ENG";
    button.setAttribute("aria-label", english ? "한국어로 보기" : "Switch to English");
    button.lang = english ? "ko" : "en";
  });
})();
