import{a as d,S as h,i as a}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="52822866-647b6b4c94b7d4074c4dcbe1c",g=d.create({baseURL:"https://pixabay.com/api/"});function p(o){return g.get("",{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r).catch(r=>{throw r})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new h(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${t}</li>
          <li><b>Views:</b> ${s}</li>
          <li><b>Comments:</b> ${f}</li>
          <li><b>Downloads:</b> ${m}</li>
        </ul>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function w(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(o){o.preventDefault();const r=u.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query.",position:"topRight"});return}S(),w(),p(r).then(i=>{if(!i||!Array.isArray(i.hits)||i.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
