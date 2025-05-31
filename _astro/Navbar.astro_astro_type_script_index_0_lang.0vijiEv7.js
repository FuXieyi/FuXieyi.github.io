function B(){localStorage.theme==="dark"?(document.documentElement.classList.remove("dark"),localStorage.theme="light"):(document.documentElement.classList.add("dark"),localStorage.theme="dark")}function E(){let t=document.getElementById("scheme-switch");t&&(t.onclick=function(){B()});let e=document.getElementById("display-settings-switch");e&&(e.onclick=function(){let n=document.getElementById("display-setting");n&&n.classList.toggle("float-panel-closed")});let r=document.getElementById("nav-menu-switch");r&&(r.onclick=function(){let n=document.getElementById("nav-menu-panel");n&&n.classList.toggle("float-panel-closed")})}E();const p=Array.from(document.querySelectorAll(".external-link")).map(t=>({name:t.querySelector(".flex.items-center")?.textContent?.trim()||"",url:t.getAttribute("href")||"",external:!0})),m=document.getElementById("nav-links-container"),f=document.getElementById("external-links-container"),k=document.getElementById("function-buttons"),u=document.getElementById("nav-menu-panel"),v=document.getElementById("nav-menu-switch"),C=t=>{const e=document.createElement("a");return e.setAttribute("aria-label",t.name),e.setAttribute("href",t.url),e.setAttribute("target","_blank"),e.className="btn-plain scale-animation rounded-lg h-11 font-bold px-3 md:px-4 active:scale-95 external-link",e.setAttribute("data-link-id",t.name),e.innerHTML=`
        <div class="flex items-center whitespace-nowrap">
            ${t.name}
            <svg class="text-[0.875rem] transition -translate-y-[1px] ml-1 text-black/[0.2] dark:text-white/[0.2]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
            </svg>
        </div>
    `,e},M=t=>`
    <a href="${t.url}" 
       class="group flex justify-between items-center py-2 pl-3 pr-1 rounded-lg gap-8 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)] transition"
       target="_blank"
       data-link-id="${t.name}"
    >
        <div class="transition text-black/75 dark:text-white/75 font-bold group-hover:text-[var(--primary)] group-active:text-[var(--primary)]">
            ${t.name}
        </div>
        <svg class="transition text-[0.75rem] text-black/25 dark:text-white/25 -translate-x-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
            <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
        </svg>
    </a>
`;if(m&&f&&k&&u&&v){let t=-1,e=new Map;const r=a=>{if(e.has(a))return e.get(a);const s=document.createElement("span");s.style.cssText=`
            visibility: hidden;
            position: absolute;
            white-space: nowrap;
            font: ${getComputedStyle(document.body).font};
            font-weight: bold;
        `,s.textContent=a,document.body.appendChild(s);const y=s.offsetWidth;document.body.removeChild(s);const c=window.innerWidth<=768,h=16,o=c?16:24,d=c?4:8,l=c?4:8,i=y+h+o+d+l;return e.set(a,i),i},n=()=>{const a=m.offsetWidth,s=m.querySelector("div:first-child")?.offsetWidth||0,c=window.innerWidth<=768?4:8,h=a-s-c;let o=0,d=0;for(const l of p){const i=r(l.name);if(d+i+c<=h)d+=i,o++;else break}if(o!==t){const l=p.slice(0,o),i=p.slice(o);f.innerHTML="",l.forEach(L=>{const x=C(L);f.appendChild(x),setTimeout(()=>{x.classList.add("opacity-100")},50)}),u.innerHTML=i.map(M).join("");const g=i.length>0;v.style.display=g?"flex":"none",v.style.opacity=g?"1":"0",!g&&!u.classList.contains("float-panel-closed")&&u.classList.add("float-panel-closed"),t=o}},b=new ResizeObserver(()=>{requestAnimationFrame(n)});b.observe(m),b.observe(k);let w;window.addEventListener("resize",()=>{clearTimeout(w),e.clear(),w=setTimeout(()=>{requestAnimationFrame(n)},100)}),n()}
