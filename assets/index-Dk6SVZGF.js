var sg=Object.defineProperty;var rg=(n,e,t)=>e in n?sg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var G=(n,e,t)=>rg(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const ig={check:'<path d="M20 6 9 17l-5-5"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',arrowRight:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m16 6-4-4-4 4"/><path d="M12 2v13"/>',copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',sparkles:'<path d="m12 3 1.9 5.7 5.8 1.9-5.8 1.9L12 18.4l-1.9-5.9-5.8-1.9 5.8-1.9L12 3z"/><path d="M19 14.5l.8 2.4 2.4.8-2.4.8-.8 2.4-.8-2.4-2.4-.8 2.4-.8.8-2.4z"/><path d="M5 3l.7 2.1 2.1.7-2.1.7L5 8.6l-.7-2.1L2.2 5.8l2.1-.7L5 3z"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',alert:'<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',trendUp:'<path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',fileText:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',refresh:'<path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',mapPin:'<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',history:'<path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',plus:'<path d="M12 5v14"/><path d="M5 12h14"/>',trash:'<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',sliders:'<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',chart:'<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',paste:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>'};function ee(n,e="h-5 w-5"){return`<svg class="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ig[n]}</svg>`}function nu(n,e="h-4 w-4"){return n==="google"?`<svg class="${e}" viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z"/>
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.96v2.33A9 9 0 0 0 9 18z"/>
      <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.03l2.99-2.33z"/>
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.97l2.99 2.33C4.66 5.17 6.65 3.58 9 3.58z"/>
    </svg>`:`<svg class="${e}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .32.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
  </svg>`}const og={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function q(n){return n.replace(/[&<>"']/g,e=>og[e])}let su=0;function Qe(n){const e=document.getElementById("toast");e&&(e.textContent=n,e.classList.add("toast-show"),window.clearTimeout(su),su=window.setTimeout(()=>e.classList.remove("toast-show"),2800))}async function Mi(n){try{return await navigator.clipboard.writeText(n),!0}catch{try{const e=document.createElement("textarea");e.value=n,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select();const t=document.execCommand("copy");return e.remove(),t}catch{return!1}}}function ag(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function lg(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Va(n,e,t){return e+Math.floor(n()*(t-e+1))}function ru(n,e){return e[Math.min(e.length-1,Math.floor(n()*e.length))]}function cg(n,e,t){const s=[...e];for(let r=s.length-1;r>0;r--){const i=Math.floor(n()*(r+1));[s[r],s[i]]=[s[i],s[r]]}return s.slice(0,Math.min(t,s.length))}function Pn(n,e,t){return Math.max(e,Math.min(t,n))}function bt(n){return n<50?"#e11d48":n<70?"#d97706":"#059669"}function Gl(n,e=170,t=14){const s=(e-t)/2,r=2*Math.PI*s,i=r*(1-Pn(n,0,100)/100),o=bt(n);return`<svg width="${e}" height="${e}" viewBox="0 0 ${e} ${e}" class="-rotate-90" aria-hidden="true">
  <circle cx="${e/2}" cy="${e/2}" r="${s}" fill="none" stroke="rgba(100,116,139,0.18)" stroke-width="${t}"/>
  <circle cx="${e/2}" cy="${e/2}" r="${s}" fill="none" stroke="${o}" stroke-width="${t}" stroke-linecap="round" stroke-dasharray="${r.toFixed(1)}" stroke-dashoffset="${i.toFixed(1)}"/>
</svg>`}function Bg(n,e=380){const t=e/2,s=e/2,r=e/2-64,i=n.length,o=(D,P)=>{const V=-Math.PI/2+D*2*Math.PI/i;return[t+r*P*Math.cos(V),s+r*P*Math.sin(V)]},l=D=>n.map((P,V)=>o(V,D).map(H=>H.toFixed(1)).join(",")).join(" "),c=[.25,.5,.75,1].map(D=>`<polygon points="${l(D)}" fill="none" stroke="#e2e8f0" stroke-width="1"/>`).join(""),B=n.map((D,P)=>{const[V,H]=o(P,1);return`<line x1="${t}" y1="${s}" x2="${V.toFixed(1)}" y2="${H.toFixed(1)}" stroke="#e2e8f0" stroke-width="1"/>`}).join(""),h=n.map((D,P)=>o(P,Pn(D.value,0,100)/100)),f=h.map(D=>D.map(P=>P.toFixed(1)).join(",")).join(" "),C=h.map(D=>`<circle cx="${D[0].toFixed(1)}" cy="${D[1].toFixed(1)}" r="3.5" fill="#0a66c2"/>`).join(""),_=n.map((D,P)=>{const[V,H]=o(P,1.16),se=Math.cos(-Math.PI/2+P*2*Math.PI/i),ge=Math.abs(se)<.35?"middle":se>0?"start":"end";return`<text x="${V.toFixed(1)}" y="${(H+4).toFixed(1)}" text-anchor="${ge}" font-size="11.5" font-weight="600" fill="#475569">${q(D.label)}</text>`}).join("");return`<svg width="100%" viewBox="0 0 ${e} ${e}" role="img" aria-label="Radar chart of section scores">
  ${c}${B}
  <polygon points="${f}" fill="rgba(10,102,194,0.22)" stroke="#0a66c2" stroke-width="2.5" stroke-linejoin="round"/>
  ${C}${_}
</svg>`}function ug(n,e=640,t=190){if(n.length<2)return"";const s=38,r=16,i=16,o=34,l=e-s-r,c=t-i-o,B=n.map(re=>Pn(re.value,0,100)),h=Math.max(0,Math.floor((Math.min(...B)-8)/10)*10),f=Math.min(100,Math.ceil((Math.max(...B)+8)/10)*10),C=Math.max(10,f-h),_=re=>s+(n.length===1?l/2:re*l/(n.length-1)),D=re=>i+c-(Pn(re,0,100)-h)/C*c,P=[],V=C/4;for(let re=0;re<=4;re++){const I=h+V*re,E=D(I);P.push(`<line x1="${s}" y1="${E.toFixed(1)}" x2="${e-r}" y2="${E.toFixed(1)}" stroke="#e2e8f0" stroke-width="1"/>`,`<text x="${s-8}" y="${(E+4).toFixed(1)}" text-anchor="end" font-size="10" fill="#94a3b8">${Math.round(I)}</text>`)}const H=n.map((re,I)=>[_(I),D(re.value)]),se=H.map((re,I)=>`${I===0?"M":"L"}${re[0].toFixed(1)} ${re[1].toFixed(1)}`).join(" "),ge=`${se} L${H[H.length-1][0].toFixed(1)} ${(i+c).toFixed(1)} L${H[0][0].toFixed(1)} ${(i+c).toFixed(1)} Z`,Te=H.map((re,I)=>`<circle cx="${re[0].toFixed(1)}" cy="${re[1].toFixed(1)}" r="4" fill="${bt(n[I].value)}" stroke="#fff" stroke-width="2"/><text x="${re[0].toFixed(1)}" y="${(re[1]-10).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="${bt(n[I].value)}">${n[I].value}</text>`).join(""),Ae=n.map((re,I)=>`<text x="${_(I).toFixed(1)}" y="${(t-12).toFixed(1)}" text-anchor="middle" font-size="10" fill="#94a3b8">${q(re.when)}</text>`).join("");return`<svg width="100%" viewBox="0 0 ${e} ${t}" role="img" aria-label="Score history over time">
  ${P.join("")}
  <path d="${ge}" fill="rgba(10,102,194,0.10)"/>
  <path d="${se}" fill="none" stroke="#0a66c2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  ${Te}${Ae}
</svg>`}const fo=[{slug:"sarah-mitchell-marketing",url:"https://www.linkedin.com/in/sarah-mitchell-marketing",name:"Sarah Mitchell",initials:"SM",role:"Marketing Manager",company:"Bloom & Co.",industry:"Marketing",location:"Amsterdam, NL",headline:"Marketing enthusiast looking for new opportunities",percentile:62,sections:[{key:"headline",score:42},{key:"about",score:60},{key:"experience",score:74},{key:"education",score:84},{key:"skills",score:52},{key:"activity",score:34},{key:"media",score:25},{key:"presence",score:75}],keywords:["SEO","Content Strategy","GA4","Email Marketing","CRO","A/B Testing","Brand Strategy","Lifecycle Marketing"],headlineFix:{before:"Marketing enthusiast looking for new opportunities",after:"Marketing Manager | Growth & Content for DTC Brands | +142% organic traffic in 12 months",why:"Recruiters search by role, niche and outcome. This headline matches all three — and the number gives it proof."},summary:"Sarah has genuinely strong, quantified experience — but her profile hides it. A generic headline, a dormant feed and zero featured media mean recruiters never see the best of her. The 3 fixes below take about an hour and target exactly those leaks."},{slug:"michael-chen-swe",url:"https://www.linkedin.com/in/michael-chen-swe",name:"Michael Chen",initials:"MC",role:"Senior Software Engineer",company:"Cloudwave",industry:"Software",location:"Singapore",headline:"Senior Software Engineer at Cloudwave",percentile:86,sections:[{key:"headline",score:78},{key:"about",score:84},{key:"experience",score:92},{key:"education",score:76},{key:"skills",score:78},{key:"activity",score:58},{key:"media",score:64},{key:"presence",score:88}],keywords:["System Design","AWS","Kubernetes","Observability","Technical Leadership","Incident Response","Mentoring","Open Source"],headlineFix:{before:"Senior Software Engineer at Cloudwave",after:"Senior Software Engineer | Distributed Systems & Cloud (AWS, K8s) | 99.95% uptime",why:'Your stack and the result you own should be searchable — an employer name alone matches zero recruiter searches for "AWS" or "distributed systems".'},summary:"Michael is in the top ~15% of software profiles: deep, well-quantified experience and a complete education block. The remaining points are all about visibility — posting cadence, leadership keywords and 1–2 featured projects."}],qt=[{key:"headline",label:"Headline",icon:"trendUp",weight:.18,desc:"The first thing a recruiter reads — role, niche, proof.",weakIssues:["Headline is a job title or vague phrase — no differentiator","Missing the keywords recruiters actually search for","No quantified result in the headline"],midIssues:["Headline reads like a keyword list rather than a value proposition","No clear outcome or number to earn attention"],fixTitle:"Rewrite your headline",fixDetail:'Turn your headline into: Role | Differentiator | Proof. Example: "Marketing Manager | B2B SaaS | +40% pipeline". Recruiters search all three parts.'},{key:"about",label:"About section",icon:"fileText",weight:.14,desc:"Your 200-word pitch, checked for story and search keywords.",weakIssues:["About section is under 100 words or missing entirely","Written in third person or generic job-description language","No measurable achievements and no call-to-action"],midIssues:["About lists duties instead of one clear story with proof","No call-to-action (contact, portfolio, what you want next)"],fixTitle:"Rewrite your About section",fixDetail:"Lead with who you help and one proof point. Keep it under 200 words, first person, and close with a call-to-action. Aim for 3–5 keywords you want to rank for."},{key:"experience",label:"Experience",icon:"briefcase",weight:.2,desc:"Bullets, metrics and keywords in every role you list.",weakIssues:["Roles with fewer than 2 bullets each","Bullets describe duties, not outcomes or numbers","Most recent role has no summary line"],midIssues:['Bullets are missing numbers ("led the team" vs "+18% conversion")',"Target-role keywords are absent from your bullets"],fixTitle:"Quantify your experience",fixDetail:'Rewrite each bullet as Action + Result + Number. "Cut onboarding time from 14 to 3 days" beats "responsible for onboarding". Two strong bullets per role is enough.'},{key:"education",label:"Education",icon:"book",weight:.08,desc:"Degrees, certifications and courses that back your claims.",weakIssues:["No degree, certification or relevant course listed","Education block incomplete (missing school or years)"],midIssues:["No certifications or courses that reinforce your positioning"],fixTitle:"Complete your education block",fixDetail:"Add degrees, relevant certifications and 2–3 courses. It is a one-time 10-minute fix that removes a common recruiter red flag."},{key:"skills",label:"Skills",icon:"star",weight:.12,desc:"The visible skills that decide which searches you appear in.",weakIssues:["Fewer than 5 skills, and few endorsed","Top skills do not match the roles you are targeting"],midIssues:["Skills list is missing in-demand terms for your industry","Top 3 skills (the ones shown on your profile) are not prioritized"],fixTitle:"Expand and reorder your skills",fixDetail:"List 10–15 skills in the order you want to be found for — the top 3 appear on your profile card. Add the keywords recruiters search, not just what you do daily."},{key:"activity",label:"Activity",icon:"activity",weight:.12,desc:'Posts, comments and recency — the "alive" signal.',weakIssues:["No posts or comments in the last 90 days","Dormant profiles surface far less in recruiter searches"],midIssues:["Posting cadence is inconsistent","No comments on peers’ posts — half the algorithm is replies"],fixTitle:"Post or comment twice a week",fixDetail:"One short post from your week plus two thoughtful comments a day is enough. Recency is a ranking factor — a 6-week streak reliably lifts profile views."},{key:"media",label:"Media & featured",icon:"image",weight:.08,desc:"Featured posts, projects and results people can open.",weakIssues:["No featured section configured","Zero media attached to any experience item"],midIssues:["Media is generic — screenshots of work without context or results"],fixTitle:"Add 2–3 featured items",fixDetail:"Pin one post, one project or one talk to Featured, and attach one media item to your two most recent roles. Recruiters judge depth in the first 5 seconds of media."},{key:"presence",label:"Visual presence",icon:"user",weight:.08,desc:"Photo, banner and custom URL — the visual first impression.",weakIssues:["No professional photo","No custom banner and no custom public URL"],midIssues:["Banner is the default grey block — wasted prime space"],fixTitle:"Upgrade your visual presence",fixDetail:"Photo, a banner with your role and one keyword, and a clean custom URL. Profiles with photos get dramatically more views — it is the cheapest win on this list."}],ls=120;function Hl(n){const e=n.reduce((t,s)=>{const r=qt.find(i=>i.key===s.key);return t+s.score*(r?r.weight:0)},0);return Math.round(e)}function ld(n,e,t){const s=qt.find(i=>i.key===n);if(!s)return[];const r=i=>t?i[Math.floor(t()*i.length)]:i[0];if(e<55){const i=r(s.weakIssues),o=s.weakIssues.filter(l=>l!==i);return[i,...o.length>0?[r(o)]:[]]}return e<75?[r(s.midIssues)]:[]}const Vo="ky.v1",Go=`${Vo}.audits`,Ul=`${Vo}.trackedKeywords`,cd=`${Vo}.waitlist`,hg=`${Vo}.account`,dg=60;function Ho(n,e){try{const t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}}function Ks(n,e){try{return localStorage.setItem(n,JSON.stringify(e)),!0}catch{return!1}}function Un(){return Ho(Go,[]).slice().sort((e,t)=>t.createdAt.localeCompare(e.createdAt))}function Bd(n){const e=Un().filter(s=>s.id!==n.id),t=[n,...e].slice(0,dg);return Ks(Go,t),t.slice().sort((s,r)=>r.createdAt.localeCompare(s.createdAt))}function fg(n){const e=Un().filter(t=>t.id!==n);return Ks(Go,e),e}function pg(){Ks(Go,[])}function Cg(n,e){return Un().filter(s=>s.profileKey===n&&s.id!==e)[0]??null}function gg(){return`a${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`}function Vr(){return Ho(Ul,[])}function mg(n){const e=n.trim().replace(/\s+/g," ");if(!e)return Vr();const t=[...new Set([...Vr(),e])].slice(0,40);return Ks(Ul,t),t}function Eg(n){const e=Vr().filter(t=>t.toLowerCase()!==n.toLowerCase());return Ks(Ul,e),e}function $l(){return Ho(cd,[])}function yg(n,e){const t={email:n.trim(),createdAt:new Date().toISOString(),plan:e},s=[...$l().filter(r=>r.email.toLowerCase()!==t.email.toLowerCase()),t];return Ks(cd,s),s}function ud(){return Ho(hg,null)}function wg(){return JSON.stringify({product:"KY — LinkedIn Profile Audit",exportedAt:new Date().toISOString(),account:ud(),trackedKeywords:Vr(),waitlist:$l(),audits:Un()},null,2)}function _g(){return[["created_at","label","source","mode","industry","overall","percentile","gaps"].join(","),...Un().map(e=>[e.createdAt,e.label,e.source,e.mode,e.industry,e.overall,e.percentile,`"${e.gaps.join("; ")}"`].map(Dg).join(","))].join(`
`)}function Dg(n){const e=String(n);return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function iu(n,e,t="text/plain"){const s=new Blob([e],{type:`${t};charset=utf-8`}),r=URL.createObjectURL(s),i=document.createElement("a");i.href=r,i.download=n,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e3)}const Ig=()=>{};var ou={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},bg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],l=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,l=o?n[r+1]:0,c=r+2<n.length,B=c?n[r+2]:0,h=i>>2,f=(i&3)<<4|l>>4;let C=(l&15)<<2|B>>6,_=B&63;c||(_=64,o||(C=64)),s.push(t[h],t[f],t[C],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const B=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||B==null||f==null)throw new vg;const C=i<<2|l>>4;if(s.push(C),B!==64){const _=l<<4&240|B>>2;if(s.push(_),f!==64){const D=B<<6&192|f;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tg=function(n){const e=hd(n);return dd.encodeByteArray(e,!0)},po=function(n){return Tg(n).replace(/\./g,"")},fd=function(n){try{return dd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=()=>Ag().__FIREBASE_DEFAULTS__,Rg=()=>{if(typeof process>"u"||typeof ou>"u")return;const n=ou.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&fd(n[1]);return e&&JSON.parse(e)},Uo=()=>{try{return Ig()||xg()||Rg()||Sg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pd=n=>{var e,t;return(t=(e=Uo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Pg=n=>{const e=pd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Cd=()=>{var n;return(n=Uo())==null?void 0:n.config},gd=n=>{var e;return(e=Uo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[po(JSON.stringify(t)),po(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ng(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Lg(){var e;const n=(e=Uo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gg(){const n=Ye();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hg(){return!Lg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ug(){try{return typeof indexedDB=="object"}catch{return!1}}function $g(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="FirebaseError";class ln extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=jg,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Jg(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new ln(r,l,s)}}function Jg(n,e){try{let t=0,s="";for(;t<n.length;){const r=n.indexOf("{$",t);if(r===-1){s+=n.substring(t);break}const i=n.indexOf("}",r+2);if(i===-1){s+=n.substring(t);break}const o=n.substring(r+2,i),l=e[o];s+=n.substring(t,r)+(l!=null?String(l):`<${o}?>`),t=i+1}return s}catch{return n}}function qg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(au(i)&&au(o)){if(!cs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function au(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Kg(n,e){const t=new zg(n,e);return t.subscribe.bind(t)}class zg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Qg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Ga),r.error===void 0&&(r.error=Ga),r.complete===void 0&&(r.complete=Ga);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ga(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function md(n){return(await fetch(n,{credentials:"include"})).ok}class Bs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new kg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xg(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Yg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yg(n){return n===Xn?void 0:n}function Xg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const em={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},tm=ue.INFO,nm={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},sm=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=nm[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jl{constructor(e){this.name=e,this._logLevel=tm,this._logHandler=sm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?em[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const rm=(n,e)=>e.some(t=>n instanceof t);let lu,cu;function im(){return lu||(lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function om(){return cu||(cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ed=new WeakMap,al=new WeakMap,yd=new WeakMap,Ha=new WeakMap,Jl=new WeakMap;function am(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(In(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ed.set(t,n)}).catch(()=>{}),Jl.set(e,n),e}function lm(n){if(al.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});al.set(n,e)}let ll={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return al.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return In(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cm(n){ll=n(ll)}function Bm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ua(this),e,...t);return yd.set(s,e.sort?e.sort():[e]),In(s)}:om().includes(n)?function(...e){return n.apply(Ua(this),e),In(Ed.get(this))}:function(...e){return In(n.apply(Ua(this),e))}}function um(n){return typeof n=="function"?Bm(n):(n instanceof IDBTransaction&&lm(n),rm(n,im())?new Proxy(n,ll):n)}function In(n){if(n instanceof IDBRequest)return am(n);if(Ha.has(n))return Ha.get(n);const e=um(n);return e!==n&&(Ha.set(n,e),Jl.set(e,n)),e}const Ua=n=>Jl.get(n);function hm(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),l=In(o);return s&&o.addEventListener("upgradeneeded",c=>{s(In(o.result),c.oldVersion,c.newVersion,In(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",B=>r(B.oldVersion,B.newVersion,B))}).catch(()=>{}),l}const dm=["get","getKey","getAll","getAllKeys","count"],fm=["put","add","delete","clear"],$a=new Map;function Bu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=fm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||dm.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let B=c.store;return s&&(B=B.index(l.shift())),(await Promise.all([B[t](...l),r&&c.done]))[0]};return $a.set(e,i),i}cm(n=>({...n,get:(e,t,s)=>Bu(e,t)||n.get(e,t,s),has:(e,t)=>!!Bu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Cm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cl="@firebase/app",uu="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new jl("@firebase/app"),gm="@firebase/app-compat",mm="@firebase/analytics-compat",Em="@firebase/analytics",ym="@firebase/app-check-compat",wm="@firebase/app-check",_m="@firebase/auth",Dm="@firebase/auth-compat",Im="@firebase/database",bm="@firebase/data-connect",vm="@firebase/database-compat",Tm="@firebase/functions",Am="@firebase/functions-compat",xm="@firebase/installations",Rm="@firebase/installations-compat",Sm="@firebase/messaging",Pm="@firebase/messaging-compat",km="@firebase/performance",Om="@firebase/performance-compat",Nm="@firebase/remote-config",Lm="@firebase/remote-config-compat",Fm="@firebase/storage",Mm="@firebase/storage-compat",Vm="@firebase/firestore",Gm="@firebase/ai",Hm="@firebase/firestore-compat",Um="firebase",$m="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="[DEFAULT]",jm={[cl]:"fire-core",[gm]:"fire-core-compat",[Em]:"fire-analytics",[mm]:"fire-analytics-compat",[wm]:"fire-app-check",[ym]:"fire-app-check-compat",[_m]:"fire-auth",[Dm]:"fire-auth-compat",[Im]:"fire-rtdb",[bm]:"fire-data-connect",[vm]:"fire-rtdb-compat",[Tm]:"fire-fn",[Am]:"fire-fn-compat",[xm]:"fire-iid",[Rm]:"fire-iid-compat",[Sm]:"fire-fcm",[Pm]:"fire-fcm-compat",[km]:"fire-perf",[Om]:"fire-perf-compat",[Nm]:"fire-rc",[Lm]:"fire-rc-compat",[Fm]:"fire-gcs",[Mm]:"fire-gcs-compat",[Vm]:"fire-fst",[Hm]:"fire-fst-compat",[Gm]:"fire-vertex","fire-js":"fire-js",[Um]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map,Jm=new Map,ul=new Map;function hu(n,e){try{n.container.addComponent(e)}catch(t){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ls(n){const e=n.name;if(ul.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;ul.set(e,n);for(const t of Co.values())hu(t,n);for(const t of Jm.values())hu(t,n);return!0}function ql(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new oi("app","Firebase",qm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=$m;function wd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Bl,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Yt.create("bad-app-name",{appName:String(r)});if(t||(t=Cd()),!t)throw Yt.create("no-options");const i=Co.get(r);if(i)if(cs(t,i.options)){if(cs(s,i.config))return i;throw Yt.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(s)})}else throw Yt.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Zg(r);for(const c of ul.values())o.addComponent(c);const l=new Km(t,s,o);return Co.set(r,l),l}function _d(n=Bl){const e=Co.get(n);if(!e&&n===Bl&&Cd())return wd();if(!e)throw Yt.create("no-app",{appName:n});return e}function bn(n,e,t){let s=jm[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(o.join(" "));return}Ls(new Bs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="firebase-heartbeat-database",Qm=1,Gr="firebase-heartbeat-store";let ja=null;function Dd(){return ja||(ja=hm(zm,Qm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),ja}async function Wm(n){try{const t=(await Dd()).transaction(Gr),s=await t.objectStore(Gr).get(Id(n));return await t.done,s}catch(e){if(e instanceof ln)sn.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(t.message)}}}async function du(n,e){try{const s=(await Dd()).transaction(Gr,"readwrite");await s.objectStore(Gr).put(e,Id(n)),await s.done}catch(t){if(t instanceof ln)sn.warn(t.message);else{const s=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});sn.warn(s.message)}}}function Id(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=1024,Xm=30;class Zm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Xm){const o=nE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){sn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fu(),{heartbeatsToSend:s,unsentEntries:r}=eE(this._heartbeatsCache.heartbeats),i=po(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return sn.warn(t),""}}}function fu(){return new Date().toISOString().substring(0,10)}function eE(n,e=Ym){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),pu(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),pu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class tE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ug()?$g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return du(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return du(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pu(n){return po(JSON.stringify({version:2,heartbeats:n})).length}function nE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(n){Ls(new Bs("platform-logger",e=>new pm(e),"PRIVATE")),Ls(new Bs("heartbeat",e=>new Zm(e),"PRIVATE")),bn(cl,uu,n),bn(cl,uu,"esm2020"),bn("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sE("");function bd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rE=bd,vd=new oi("auth","Firebase",bd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new jl("@firebase/auth");function eo(n,...e){go.logLevel<=ue.WARN&&go.warn(`Auth (${zs}): ${n}`,...e)}function to(n,...e){go.logLevel<=ue.ERROR&&go.error(`Auth (${zs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,...e){throw Kl(n,...e)}function xt(n,...e){return Kl(n,...e)}function $o(n,e,t){const s={...rE(),[e]:t};return new oi("auth","Firebase",s).create(e,{appName:n.name})}function vn(n){return $o(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Td(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&$t(n,"argument-error"),$o(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kl(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return vd.create(n,...e)}function ie(n,e,...t){if(!n)throw Kl(e,...t)}function Xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw to(e),new Error(e)}function rn(n,e){n||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function iE(){return Cu()==="http:"||Cu()==="https:"}function Cu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iE()||Mg()||"connection"in navigator)?navigator.onLine:!0}function aE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.shortDelay=e,this.longDelay=t,rn(t>e,"Short delay should be less than long delay!"),this.isMobile=Ng()||Vg()}get(){return oE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n,e){rn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],BE=new ci(3e4,6e4);function Ql(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Qs(n,e,t,s,r={}){return xd(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=ai({...o,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const B={method:e,headers:c,...i};return Fg()||(B.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&li(n.emulatorConfig.host)&&(B.credentials="include"),Ad.fetch()(await Rd(n,n.config.apiHost,t,l),B)})}async function xd(n,e,t){n._canInitEmulator=!1;const s={...lE,...e};try{const r=new hE(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,B]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vi(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(B)throw $o(n,h,B);$t(n,h)}}catch(r){if(r instanceof ln)throw r;$t(n,"network-request-failed",{message:String(r)})}}async function uE(n,e,t,s,r={}){const i=await Qs(n,e,t,s,r);return"mfaPendingCredential"in i&&$t(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Rd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?zl(n.config,r):`${n.config.apiScheme}://${r}`;return cE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class hE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(xt(this.auth,"network-request-failed")),BE.get())})}}function Vi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=xt(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(n,e){return Qs(n,"POST","/v1/accounts:delete",e)}async function mo(n,e){return Qs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fE(n,e=!1){const t=Bt(n),s=await t.getIdToken(e),r=Wl(s);ie(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:xr(Ja(r.auth_time)),issuedAtTime:xr(Ja(r.iat)),expirationTime:xr(Ja(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ja(n){return Number(n)*1e3}function Wl(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return to("JWT malformed, contained fewer than 3 sections"),null;try{const r=fd(t);return r?JSON.parse(r):(to("Failed to decode base64 JWT payload"),null)}catch(r){return to("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gu(n){const e=Wl(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ln&&pE(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function pE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(n){var f;const e=n.auth,t=await n.getIdToken(),s=await Hr(n,mo(e,{idToken:t}));ie(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(f=r.providerUserInfo)!=null&&f.length?Sd(r.providerUserInfo):[],o=mE(n.providerData,i),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),B=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new dl(r.createdAt,r.lastLoginAt),isAnonymous:B};Object.assign(n,h)}async function gE(n){const e=Bt(n);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mE(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Sd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(n,e){const t=await xd(n,{},async()=>{const s=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await Rd(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return n.emulatorConfig&&li(n.emulatorConfig.host)&&(c.credentials="include"),Ad.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function yE(n,e){return Qs(n,"POST","/v2/accounts:revokeToken",Ql(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=gu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await EE(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Ss;return s&&(ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ie(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tt{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new CE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new dl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Hr(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fE(this,e)}reload(){return gE(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await Hr(this,dE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,B=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:C,isAnonymous:_,providerData:D,stsTokenManager:P}=t;ie(f&&P,e,"internal-error");const V=Ss.fromJSON(this.name,P);ie(typeof f=="string",e,"internal-error"),pn(s,e.name),pn(r,e.name),ie(typeof C=="boolean",e,"internal-error"),ie(typeof _=="boolean",e,"internal-error"),pn(i,e.name),pn(o,e.name),pn(l,e.name),pn(c,e.name),pn(B,e.name),pn(h,e.name);const H=new Tt({uid:f,auth:e,email:r,emailVerified:C,displayName:s,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:V,createdAt:B,lastLoginAt:h});return D&&Array.isArray(D)&&(H.providerData=D.map(se=>({...se}))),c&&(H._redirectEventId=c),H}static async _fromIdTokenResponse(e,t,s=!1){const r=new Ss;r.updateFromServerResponse(t);const i=new Tt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Eo(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];ie(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Sd(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Ss;l.updateFromIdToken(s);const c=new Tt({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),B={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new dl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,B),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Map;function Zt(n){rn(n instanceof Function,"Expected a class definition");let e=mu.get(n);return e?(rn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,mu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pd.type="NONE";const Eu=Pd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n,e,t){return`firebase:${n}:${e}:${t}`}class is{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=no(this.userKey,r.apiKey,i),this.fullPersistenceKey=no("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await mo(this.auth,{idToken:e}).catch(()=>{});return t?Tt._fromGetAccountInfoResponse(this.auth,t,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,s="authUser"){if(!t.length)return new is(Zt(Eu),e,s);const r=(await Promise.all(t.map(async B=>{try{if(await B._isAvailable())return B}catch{return}}))).filter(B=>B);let i=r[0]||Zt(Eu);const o=no(s,e.config.apiKey,e.name);let l=null;for(const B of t)try{const h=await B._get(o);if(h){let f;if(typeof h=="string"){const C=await mo(e,{idToken:h}).catch(()=>{});if(!C)break;f=await Tt._fromGetAccountInfoResponse(e,C,h)}else f=Tt._fromJSON(e,h);B!==i&&(l=f),i=B;break}}catch{}const c=r.filter(B=>B._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new is(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async B=>{if(B!==i)try{await B._remove(o)}catch{}})),new is(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ld(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Md(e))return"Blackberry";if(Vd(e))return"Webos";if(Od(e))return"Safari";if((e.includes("chrome/")||Nd(e))&&!e.includes("edge/"))return"Chrome";if(Fd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function kd(n=Ye()){return/firefox\//i.test(n)}function Od(n=Ye()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nd(n=Ye()){return/crios\//i.test(n)}function Ld(n=Ye()){return/iemobile/i.test(n)}function Fd(n=Ye()){return/android/i.test(n)}function Md(n=Ye()){return/blackberry/i.test(n)}function Vd(n=Ye()){return/webos/i.test(n)}function Yl(n=Ye()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wE(n=Ye()){var e;return Yl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function _E(){return Gg()&&document.documentMode===10}function Gd(n=Ye()){return Yl(n)||Fd(n)||Vd(n)||Md(n)||/windows phone/i.test(n)||Ld(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n,e=[]){let t;switch(n){case"Browser":t=yu(Ye());break;case"Worker":t=`${yu(Ye())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(n,e={}){return Qs(n,"GET","/v2/passwordPolicy",Ql(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=6;class vE{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??bE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wu(this),this.idTokenSubscription=new wu(this),this.beforeStateQueue=new DE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted){try{this.persistenceManager=await is.create(this,e)}catch(o){eo(`Failed to initialize persistence: ${o}`),this.persistenceManager=await is.create(this,[])}finally{(s=this._resolvePersistenceManagerAvailable)==null||s.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){eo(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await mo(this,{idToken:e}),s=await Tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(vn(this));const t=e?Bt(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IE(this),t=new vE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await yE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zt(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[Zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}).catch(c=>{if(!o)if(typeof t!="function"&&t.error)t.error(c);else if(s)s(c);else throw c}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const s=(t==null?void 0:t.message)||String(t),r=$o(this,"internal-error",`An internal AuthError has occurred: ${s}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&eo(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ws(n){return Bt(n)}class wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kg(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AE(n){Xl=n}function xE(n){return Xl.loadJS(n)}function RE(){return Xl.gapiScript}function SE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(n,e){const t=ql(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(cs(i,e??{}))return r;$t(r,"already-initialized")}return t.initialize({options:e})}function kE(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Zt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function OE(n,e,t){const s=Ws(n);ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Ud(e),{host:o,port:l}=NE(e),c=l===null?"":`:${l}`,B={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ie(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ie(cs(B,s.config.emulator)&&cs(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=B,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,li(o)?md(`${i}//${o}${c}`):LE()}function Ud(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function NE(n){const e=Ud(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:_u(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:_u(o)}}}function _u(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function LE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(n,e){return uE(n,"POST","/v1/accounts:signInWithIdp",Ql(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="http://localhost";class us extends $d{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new us(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ps(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ps(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ps(e,t)}buildRequest(){const e={requestUri:FE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ai(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends jo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Bi{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return us._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return zt.credential(t,s)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Bi{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Bi{constructor(){super("twitter.com")}static credential(e,t){return us._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return wn.credential(t,s)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Tt._fromIdTokenResponse(e,s,r),o=Du(s);return new Fs({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Du(s);return new Fs({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Du(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends ln{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new yo(e,t,s,r)}}function jd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yo._fromErrorAndOperation(n,i,e,s):i})}async function ME(n,e,t=!1){const s=await Hr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fs._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(n,e,t=!1){const{auth:s}=n;if(Dt(s.app))return Promise.reject(vn(s));const r="reauthenticate";try{const i=await Hr(n,jd(s,r,e,n),t);ie(i.idToken,s,"internal-error");const o=Wl(i.idToken);ie(o,s,"internal-error");const{sub:l}=o;return ie(n.uid===l,s,"user-mismatch"),Fs._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(n,e,t=!1){if(Dt(n.app))return Promise.reject(vn(n));const s="signIn",r=await jd(n,s,e),i=await Fs._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function HE(n,e,t,s){return Bt(n).onIdTokenChanged(e,t,s)}function UE(n,e,t){return Bt(n).beforeAuthStateChanged(e,t)}function $E(n,e,t,s){return Bt(n).onAuthStateChanged(e,t,s)}function jE(n){return Bt(n).signOut()}const wo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wo,"1"),this.storage.removeItem(wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=1e3,qE=10;class qd extends Jd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);_E()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,qE):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},JE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qd.type="LOCAL";const KE=qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends Jd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kd.type="SESSION";const zd=Kd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Jo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async B=>B(t.origin,i)),c=await zE(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const B=Zl("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const C=f;if(C.data.eventId===B)switch(C.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(C.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:B,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function WE(n){Mt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function YE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function ZE(){return Qd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="firebaseLocalStorageDb",ey=1,_o="firebaseLocalStorage",Yd="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qo(n,e){return n.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function ty(){const n=indexedDB.deleteDatabase(Wd);return new ui(n).toPromise()}function Xd(){const n=indexedDB.open(Wd,ey);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(_o,{keyPath:Yd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(_o)?e(s):(s.close(),await ty(),e(await Xd()))})})}async function Iu(n,e,t){const s=qo(n,!0).put({[Yd]:e,value:t});return new ui(s).toPromise()}async function ny(n,e){const t=qo(n,!1).get(e),s=await new ui(t).toPromise();return s===void 0?null:s.value}function bu(n,e){const t=qo(n,!0).delete(e);return new ui(t).toPromise()}const sy=800,ry=3;class Zd{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Xd(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>ry)throw s;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Qd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(ZE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await YE(),!this.activeServiceWorker)return;this.sender=new QE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Iu(e,wo,"1"),await bu(e,wo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Iu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ny(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=qo(r,!1).getAll();return new ui(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||eo(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Zd.type="LOCAL";const iy=Zd;new ci(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n,e){return e?Zt(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends $d{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ps(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oy(n){return GE(n.auth,new tc(n),n.bypassAuthState)}function ay(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),VE(t,new tc(n),n.bypassAuthState)}async function ly(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),ME(t,new tc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(B){this.reject(B)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oy;case"linkViaPopup":case"linkViaRedirect":return ly;case"reauthViaPopup":case"reauthViaRedirect":return ay;default:$t(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new ci(2e3,1e4);async function By(n,e,t){if(Dt(n.app))return Promise.reject(xt(n,"operation-not-supported-in-this-environment"));const s=Ws(n);Td(n,e,jo);const r=ec(s,t);return new ts(s,"signInViaPopup",e,r).executeNotNull()}class ts extends ef{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Zl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cy.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="pendingRedirect",so=new Map;class hy extends ef{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=so.get(this.auth._key());if(!e){try{const s=await dy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}so.set(this.auth._key(),e)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dy(n,e){const t=nf(e),s=tf(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}async function fy(n,e){return tf(n)._set(nf(e),"true")}function py(n,e){so.set(n._key(),e)}function tf(n){return Zt(n._redirectPersistence)}function nf(n){return no(uy,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n,e,t){return gy(n,e,t)}async function gy(n,e,t){if(Dt(n.app))return Promise.reject(vn(n));const s=Ws(n);Td(n,e,jo),await s._initializationPromise;const r=ec(s,t);return await fy(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function my(n,e){return await Ws(n)._initializationPromise,sf(n,e,!1)}async function sf(n,e,t=!1){if(Dt(n.app))return Promise.reject(vn(n));const s=Ws(n),r=ec(s,e),o=await new hy(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=600*1e3;class yy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!rf(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ey&&this.cachedEventUids.clear(),this.cachedEventUids.has(vu(e))}saveEventToCache(e){this.cachedEventUids.add(vu(e)),this.lastProcessedEventTime=Date.now()}}function vu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _y(n,e={}){return Qs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iy=/^https?/;async function by(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _y(n);for(const t of e)try{if(vy(t))return}catch{}$t(n,"unauthorized-domain")}function vy(n){const e=hl(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Iy.test(t))return!1;if(Dy.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new ci(3e4,6e4);function Tu(){const n=Mt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ay(n){return new Promise((e,t)=>{var r,i,o;function s(){Tu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tu(),t(xt(n,"network-request-failed"))},timeout:Ty.get()})}if((i=(r=Mt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Mt().gapi)!=null&&o.load)s();else{const l=SE("iframefcb");return Mt()[l]=()=>{gapi.load?s():t(xt(n,"network-request-failed"))},xE(`${RE()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ro=null,e})}let ro=null;function xy(n){return ro=ro||Ay(n),ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new ci(5e3,15e3),Sy="__/auth/iframe",Py="emulator/auth/iframe",ky={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Oy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ny(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zl(e,Py):`https://${n.config.authDomain}/${Sy}`,s={apiKey:e.apiKey,appName:n.name,v:zs},r=Oy.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${ai(s).slice(1)}`}async function Ly(n){const e=await xy(n),t=Mt().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:Ny(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ky,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=xt(n,"network-request-failed"),l=Mt().setTimeout(()=>{i(o)},Ry.get());function c(){Mt().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},My=500,Vy=600,Gy="_blank",Hy="http://localhost";class Au{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uy(n,e,t,s=My,r=Vy){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...Fy,width:s.toString(),height:r.toString(),top:i,left:o},B=Ye().toLowerCase();t&&(l=Nd(B)?Gy:t),kd(B)&&(e=e||Hy,c.scrollbars="yes");const h=Object.entries(c).reduce((C,[_,D])=>`${C}${_}=${D},`,"");if(wE(B)&&l!=="_self")return $y(e||"",l),new Au(null);const f=window.open(e||"",l,h);ie(f,n,"popup-blocked");try{f.focus()}catch{}return new Au(f)}function $y(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="__/auth/handler",Jy="emulator/auth/handler",qy=encodeURIComponent("fac");async function xu(n,e,t,s,r,i){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:zs,eventId:r};if(e instanceof jo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",qg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Bi){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await n._getAppCheckToken(),B=c?`#${qy}=${encodeURIComponent(c)}`:"";return`${Ky(n)}?${ai(l).slice(1)}${B}`}function Ky({config:n}){return n.emulator?zl(n,Jy):`https://${n.authDomain}/${jy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="webStorageSupport";class zy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zd,this._completeRedirectFn=sf,this._overrideRedirectResult=py}async _openPopup(e,t,s,r){var o;rn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await xu(e,t,s,hl(),r);return Uy(e,i,Zl())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await xu(e,t,s,hl(),r);return WE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(rn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Ly(e),s=new yy(e);return t.register("authEvent",r=>(ie(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qa,{type:qa},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[qa];i!==void 0&&t(!!i),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=by(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gd()||Od()||Yl()}}const Qy=zy;var Ru="@firebase/auth",Su="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xy(n){Ls(new Bs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hd(n)},B=new TE(s,r,i,c);return kE(B,t),B},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ls(new Bs("auth-internal",e=>{const t=Ws(e.getProvider("auth").getImmediate());return(s=>new Wy(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(Ru,Su,Yy(n)),bn(Ru,Su,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=300,ew=gd("authIdTokenMaxAge")||Zy;let Pu=null;const tw=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>ew)return;const r=t==null?void 0:t.token;Pu!==r&&(Pu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function nw(n=_d()){const e=ql(n,"auth");if(e.isInitialized())return e.getImmediate();const t=PE(n,{popupRedirectResolver:Qy,persistence:[iy,KE,zd]}),s=gd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=tw(i.toString());UE(t,o,()=>o(t.currentUser)),HE(t,l=>o(l))}}const r=pd("auth");return r&&OE(t,`http://${r}`),t}function sw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}AE({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=xt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",sw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xy("Browser");var rw="firebase",iw="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(rw,iw,"app");var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,of;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,E){function w(){}w.prototype=E.prototype,I.F=E.prototype,I.prototype=new w,I.prototype.constructor=I,I.D=function(b,A,R){for(var y=Array(arguments.length-2),st=2;st<arguments.length;st++)y[st-2]=arguments[st];return E.prototype[A].apply(b,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,E,w){w||(w=0);const b=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)b[A]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(A=0;A<16;++A)b[A]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=I.g[0],w=I.g[1],A=I.g[2];let R=I.g[3],y;y=E+(R^w&(A^R))+b[0]+3614090360&4294967295,E=w+(y<<7&4294967295|y>>>25),y=R+(A^E&(w^A))+b[1]+3905402710&4294967295,R=E+(y<<12&4294967295|y>>>20),y=A+(w^R&(E^w))+b[2]+606105819&4294967295,A=R+(y<<17&4294967295|y>>>15),y=w+(E^A&(R^E))+b[3]+3250441966&4294967295,w=A+(y<<22&4294967295|y>>>10),y=E+(R^w&(A^R))+b[4]+4118548399&4294967295,E=w+(y<<7&4294967295|y>>>25),y=R+(A^E&(w^A))+b[5]+1200080426&4294967295,R=E+(y<<12&4294967295|y>>>20),y=A+(w^R&(E^w))+b[6]+2821735955&4294967295,A=R+(y<<17&4294967295|y>>>15),y=w+(E^A&(R^E))+b[7]+4249261313&4294967295,w=A+(y<<22&4294967295|y>>>10),y=E+(R^w&(A^R))+b[8]+1770035416&4294967295,E=w+(y<<7&4294967295|y>>>25),y=R+(A^E&(w^A))+b[9]+2336552879&4294967295,R=E+(y<<12&4294967295|y>>>20),y=A+(w^R&(E^w))+b[10]+4294925233&4294967295,A=R+(y<<17&4294967295|y>>>15),y=w+(E^A&(R^E))+b[11]+2304563134&4294967295,w=A+(y<<22&4294967295|y>>>10),y=E+(R^w&(A^R))+b[12]+1804603682&4294967295,E=w+(y<<7&4294967295|y>>>25),y=R+(A^E&(w^A))+b[13]+4254626195&4294967295,R=E+(y<<12&4294967295|y>>>20),y=A+(w^R&(E^w))+b[14]+2792965006&4294967295,A=R+(y<<17&4294967295|y>>>15),y=w+(E^A&(R^E))+b[15]+1236535329&4294967295,w=A+(y<<22&4294967295|y>>>10),y=E+(A^R&(w^A))+b[1]+4129170786&4294967295,E=w+(y<<5&4294967295|y>>>27),y=R+(w^A&(E^w))+b[6]+3225465664&4294967295,R=E+(y<<9&4294967295|y>>>23),y=A+(E^w&(R^E))+b[11]+643717713&4294967295,A=R+(y<<14&4294967295|y>>>18),y=w+(R^E&(A^R))+b[0]+3921069994&4294967295,w=A+(y<<20&4294967295|y>>>12),y=E+(A^R&(w^A))+b[5]+3593408605&4294967295,E=w+(y<<5&4294967295|y>>>27),y=R+(w^A&(E^w))+b[10]+38016083&4294967295,R=E+(y<<9&4294967295|y>>>23),y=A+(E^w&(R^E))+b[15]+3634488961&4294967295,A=R+(y<<14&4294967295|y>>>18),y=w+(R^E&(A^R))+b[4]+3889429448&4294967295,w=A+(y<<20&4294967295|y>>>12),y=E+(A^R&(w^A))+b[9]+568446438&4294967295,E=w+(y<<5&4294967295|y>>>27),y=R+(w^A&(E^w))+b[14]+3275163606&4294967295,R=E+(y<<9&4294967295|y>>>23),y=A+(E^w&(R^E))+b[3]+4107603335&4294967295,A=R+(y<<14&4294967295|y>>>18),y=w+(R^E&(A^R))+b[8]+1163531501&4294967295,w=A+(y<<20&4294967295|y>>>12),y=E+(A^R&(w^A))+b[13]+2850285829&4294967295,E=w+(y<<5&4294967295|y>>>27),y=R+(w^A&(E^w))+b[2]+4243563512&4294967295,R=E+(y<<9&4294967295|y>>>23),y=A+(E^w&(R^E))+b[7]+1735328473&4294967295,A=R+(y<<14&4294967295|y>>>18),y=w+(R^E&(A^R))+b[12]+2368359562&4294967295,w=A+(y<<20&4294967295|y>>>12),y=E+(w^A^R)+b[5]+4294588738&4294967295,E=w+(y<<4&4294967295|y>>>28),y=R+(E^w^A)+b[8]+2272392833&4294967295,R=E+(y<<11&4294967295|y>>>21),y=A+(R^E^w)+b[11]+1839030562&4294967295,A=R+(y<<16&4294967295|y>>>16),y=w+(A^R^E)+b[14]+4259657740&4294967295,w=A+(y<<23&4294967295|y>>>9),y=E+(w^A^R)+b[1]+2763975236&4294967295,E=w+(y<<4&4294967295|y>>>28),y=R+(E^w^A)+b[4]+1272893353&4294967295,R=E+(y<<11&4294967295|y>>>21),y=A+(R^E^w)+b[7]+4139469664&4294967295,A=R+(y<<16&4294967295|y>>>16),y=w+(A^R^E)+b[10]+3200236656&4294967295,w=A+(y<<23&4294967295|y>>>9),y=E+(w^A^R)+b[13]+681279174&4294967295,E=w+(y<<4&4294967295|y>>>28),y=R+(E^w^A)+b[0]+3936430074&4294967295,R=E+(y<<11&4294967295|y>>>21),y=A+(R^E^w)+b[3]+3572445317&4294967295,A=R+(y<<16&4294967295|y>>>16),y=w+(A^R^E)+b[6]+76029189&4294967295,w=A+(y<<23&4294967295|y>>>9),y=E+(w^A^R)+b[9]+3654602809&4294967295,E=w+(y<<4&4294967295|y>>>28),y=R+(E^w^A)+b[12]+3873151461&4294967295,R=E+(y<<11&4294967295|y>>>21),y=A+(R^E^w)+b[15]+530742520&4294967295,A=R+(y<<16&4294967295|y>>>16),y=w+(A^R^E)+b[2]+3299628645&4294967295,w=A+(y<<23&4294967295|y>>>9),y=E+(A^(w|~R))+b[0]+4096336452&4294967295,E=w+(y<<6&4294967295|y>>>26),y=R+(w^(E|~A))+b[7]+1126891415&4294967295,R=E+(y<<10&4294967295|y>>>22),y=A+(E^(R|~w))+b[14]+2878612391&4294967295,A=R+(y<<15&4294967295|y>>>17),y=w+(R^(A|~E))+b[5]+4237533241&4294967295,w=A+(y<<21&4294967295|y>>>11),y=E+(A^(w|~R))+b[12]+1700485571&4294967295,E=w+(y<<6&4294967295|y>>>26),y=R+(w^(E|~A))+b[3]+2399980690&4294967295,R=E+(y<<10&4294967295|y>>>22),y=A+(E^(R|~w))+b[10]+4293915773&4294967295,A=R+(y<<15&4294967295|y>>>17),y=w+(R^(A|~E))+b[1]+2240044497&4294967295,w=A+(y<<21&4294967295|y>>>11),y=E+(A^(w|~R))+b[8]+1873313359&4294967295,E=w+(y<<6&4294967295|y>>>26),y=R+(w^(E|~A))+b[15]+4264355552&4294967295,R=E+(y<<10&4294967295|y>>>22),y=A+(E^(R|~w))+b[6]+2734768916&4294967295,A=R+(y<<15&4294967295|y>>>17),y=w+(R^(A|~E))+b[13]+1309151649&4294967295,w=A+(y<<21&4294967295|y>>>11),y=E+(A^(w|~R))+b[4]+4149444226&4294967295,E=w+(y<<6&4294967295|y>>>26),y=R+(w^(E|~A))+b[11]+3174756917&4294967295,R=E+(y<<10&4294967295|y>>>22),y=A+(E^(R|~w))+b[2]+718787259&4294967295,A=R+(y<<15&4294967295|y>>>17),y=w+(R^(A|~E))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+E&4294967295,I.g[1]=I.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+R&4294967295}s.prototype.v=function(I,E){E===void 0&&(E=I.length);const w=E-this.blockSize,b=this.C;let A=this.h,R=0;for(;R<E;){if(A==0)for(;R<=w;)r(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<E;)if(b[A++]=I.charCodeAt(R++),A==this.blockSize){r(this,b),A=0;break}}else for(;R<E;)if(b[A++]=I[R++],A==this.blockSize){r(this,b),A=0;break}}this.h=A,this.o+=E},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var E=1;E<I.length-8;++E)I[E]=0;E=this.o*8;for(var w=I.length-8;w<I.length;++w)I[w]=E&255,E/=256;for(this.v(I),I=Array(16),E=0,w=0;w<4;++w)for(let b=0;b<32;b+=8)I[E++]=this.g[w]>>>b&255;return I};function i(I,E){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=E(I)}function o(I,E){this.h=E;const w=[];let b=!0;for(let A=I.length-1;A>=0;A--){const R=I[A]|0;b&&R==E||(w[A]=R,b=!1)}this.g=w}var l={};function c(I){return-128<=I&&I<128?i(I,function(E){return new o([E|0],E<0?-1:0)}):new o([I|0],I<0?-1:0)}function B(I){if(isNaN(I)||!isFinite(I))return f;if(I<0)return V(B(-I));const E=[];let w=1;for(let b=0;I>=w;b++)E[b]=I/w|0,w*=4294967296;return new o(E,0)}function h(I,E){if(I.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(I.charAt(0)=="-")return V(h(I.substring(1),E));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=B(Math.pow(E,8));let b=f;for(let R=0;R<I.length;R+=8){var A=Math.min(8,I.length-R);const y=parseInt(I.substring(R,R+A),E);A<8?(A=B(Math.pow(E,A)),b=b.j(A).add(B(y))):(b=b.j(w),b=b.add(B(y)))}return b}var f=c(0),C=c(1),_=c(16777216);n=o.prototype,n.m=function(){if(P(this))return-V(this).m();let I=0,E=1;for(let w=0;w<this.g.length;w++){const b=this.i(w);I+=(b>=0?b:4294967296+b)*E,E*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(P(this))return"-"+V(this).toString(I);const E=B(Math.pow(I,6));var w=this;let b="";for(;;){const A=Te(w,E).g;w=H(w,A.j(E));let R=((w.g.length>0?w.g[0]:w.h)>>>0).toString(I);if(w=A,D(w))return R+b;for(;R.length<6;)R="0"+R;b=R+b}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(let E=0;E<I.g.length;E++)if(I.g[E]!=0)return!1;return!0}function P(I){return I.h==-1}n.l=function(I){return I=H(this,I),P(I)?-1:D(I)?0:1};function V(I){const E=I.g.length,w=[];for(let b=0;b<E;b++)w[b]=~I.g[b];return new o(w,~I.h).add(C)}n.abs=function(){return P(this)?V(this):this},n.add=function(I){const E=Math.max(this.g.length,I.g.length),w=[];let b=0;for(let A=0;A<=E;A++){let R=b+(this.i(A)&65535)+(I.i(A)&65535),y=(R>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=y>>>16,R&=65535,y&=65535,w[A]=y<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function H(I,E){return I.add(V(E))}n.j=function(I){if(D(this)||D(I))return f;if(P(this))return P(I)?V(this).j(V(I)):V(V(this).j(I));if(P(I))return V(this.j(V(I)));if(this.l(_)<0&&I.l(_)<0)return B(this.m()*I.m());const E=this.g.length+I.g.length,w=[];for(var b=0;b<2*E;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<I.g.length;A++){const R=this.i(b)>>>16,y=this.i(b)&65535,st=I.i(A)>>>16,Jn=I.i(A)&65535;w[2*b+2*A]+=y*Jn,se(w,2*b+2*A),w[2*b+2*A+1]+=R*Jn,se(w,2*b+2*A+1),w[2*b+2*A+1]+=y*st,se(w,2*b+2*A+1),w[2*b+2*A+2]+=R*st,se(w,2*b+2*A+2)}for(I=0;I<E;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=E;I<2*E;I++)w[I]=0;return new o(w,0)};function se(I,E){for(;(I[E]&65535)!=I[E];)I[E+1]+=I[E]>>>16,I[E]&=65535,E++}function ge(I,E){this.g=I,this.h=E}function Te(I,E){if(D(E))throw Error("division by zero");if(D(I))return new ge(f,f);if(P(I))return E=Te(V(I),E),new ge(V(E.g),V(E.h));if(P(E))return E=Te(I,V(E)),new ge(V(E.g),E.h);if(I.g.length>30){if(P(I)||P(E))throw Error("slowDivide_ only works with positive integers.");for(var w=C,b=E;b.l(I)<=0;)w=Ae(w),b=Ae(b);var A=re(w,1),R=re(b,1);for(b=re(b,2),w=re(w,2);!D(b);){var y=R.add(b);y.l(I)<=0&&(A=A.add(w),R=y),b=re(b,1),w=re(w,1)}return E=H(I,A.j(E)),new ge(A,E)}for(A=f;I.l(E)>=0;){for(w=Math.max(1,Math.floor(I.m()/E.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),R=B(w),y=R.j(E);P(y)||y.l(I)>0;)w-=b,R=B(w),y=R.j(E);D(R)&&(R=C),A=A.add(R),I=H(I,y)}return new ge(A,I)}n.B=function(I){return Te(this,I).h},n.and=function(I){const E=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<E;b++)w[b]=this.i(b)&I.i(b);return new o(w,this.h&I.h)},n.or=function(I){const E=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<E;b++)w[b]=this.i(b)|I.i(b);return new o(w,this.h|I.h)},n.xor=function(I){const E=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<E;b++)w[b]=this.i(b)^I.i(b);return new o(w,this.h^I.h)};function Ae(I){const E=I.g.length+1,w=[];for(let b=0;b<E;b++)w[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(w,I.h)}function re(I,E){const w=E>>5;E%=32;const b=I.g.length-w,A=[];for(let R=0;R<b;R++)A[R]=E>0?I.i(R+w)>>>E|I.i(R+w+1)<<32-E:I.i(R+w);return new o(A,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,of=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=B,o.fromString=h,Tn=o}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var af,br,lf,io,fl,cf,Bf,uf;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gi=="object"&&Gi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(a,u){if(u)e:{var d=s;a=a.split(".");for(var p=0;p<a.length-1;p++){var x=a[p];if(!(x in d))break e;d=d[x]}a=a[a.length-1],p=d[a],u=u(p),u!=p&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,d){return a.call.apply(a.bind,arguments)}function B(a,u,d){return B=c,B.apply(null,arguments)}function h(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function f(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(p,x,S){for(var j=Array(arguments.length-2),le=2;le<arguments.length;le++)j[le-2]=arguments[le];return u.prototype[x].apply(p,j)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const u=a.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=a[p];return d}return[]}function D(a,u){for(let p=1;p<arguments.length;p++){const x=arguments[p];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=a.length||0;const S=x.length||0;a.length=d+S;for(let j=0;j<S;j++)a[d+j]=x[j]}else a.push(x)}}class P{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(a){o.setTimeout(()=>{throw a},0)}function H(){var a=I;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class se{constructor(){this.h=this.g=null}add(u,d){const p=ge.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ge=new P(()=>new Te,a=>a.reset());class Te{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,re=!1,I=new se,E=()=>{const a=Promise.resolve(void 0);Ae=()=>{a.then(w)}};function w(){for(var a;a=H();){try{a.h.call(a.g)}catch(d){V(d)}var u=ge;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}re=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function st(a,u){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}f(st,A),st.prototype.init=function(a,u){const d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&st.Z.h.call(this)},st.prototype.h=function(){st.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Jn="closure_listenable_"+(Math.random()*1e6|0),bC=0;function vC(a,u,d,p,x){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=x,this.key=++bC,this.da=this.fa=!1}function Di(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ii(a,u,d){for(const p in a)u.call(d,a[p],p,a)}function TC(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function tB(a){const u={};for(const d in a)u[d]=a[d];return u}const nB="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sB(a,u){let d,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(d in p)a[d]=p[d];for(let S=0;S<nB.length;S++)d=nB[S],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function bi(a){this.src=a,this.g={},this.h=0}bi.prototype.add=function(a,u,d,p,x){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const j=Ca(a,u,p,x);return j>-1?(u=a[j],d||(u.fa=!1)):(u=new vC(u,this.src,S,!!p,x),u.fa=d,a.push(u)),u};function pa(a,u){const d=u.type;if(d in a.g){var p=a.g[d],x=Array.prototype.indexOf.call(p,u,void 0),S;(S=x>=0)&&Array.prototype.splice.call(p,x,1),S&&(Di(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ca(a,u,d,p){for(let x=0;x<a.length;++x){const S=a[x];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==p)return x}return-1}var ga="closure_lm_"+(Math.random()*1e6|0),ma={};function rB(a,u,d,p,x){if(Array.isArray(u)){for(let S=0;S<u.length;S++)rB(a,u[S],d,p,x);return null}return d=aB(d),a&&a[Jn]?a.J(u,d,l(p)?!!p.capture:!1,x):AC(a,u,d,!1,p,x)}function AC(a,u,d,p,x,S){if(!u)throw Error("Invalid event type");const j=l(x)?!!x.capture:!!x;let le=ya(a);if(le||(a[ga]=le=new bi(a)),d=le.add(u,d,p,j,S),d.proxy)return d;if(p=xC(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)R||(x=j),x===void 0&&(x=!1),a.addEventListener(u.toString(),p,x);else if(a.attachEvent)a.attachEvent(oB(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function xC(){function a(d){return u.call(a.src,a.listener,d)}const u=RC;return a}function iB(a,u,d,p,x){if(Array.isArray(u))for(var S=0;S<u.length;S++)iB(a,u[S],d,p,x);else p=l(p)?!!p.capture:!!p,d=aB(d),a&&a[Jn]?(a=a.i,S=String(u).toString(),S in a.g&&(u=a.g[S],d=Ca(u,d,p,x),d>-1&&(Di(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[S],a.h--)))):a&&(a=ya(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Ca(u,d,p,x)),(d=a>-1?u[a]:null)&&Ea(d))}function Ea(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Jn])pa(u.i,a);else{var d=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(d,p,a.capture):u.detachEvent?u.detachEvent(oB(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=ya(u))?(pa(d,a),d.h==0&&(d.src=null,u[ga]=null)):Di(a)}}}function oB(a){return a in ma?ma[a]:ma[a]="on"+a}function RC(a,u){if(a.da)a=!0;else{u=new st(u,this);const d=a.listener,p=a.ha||a.src;a.fa&&Ea(a),a=d.call(p,u)}return a}function ya(a){return a=a[ga],a instanceof bi?a:null}var wa="__closure_events_fn_"+(Math.random()*1e9>>>0);function aB(a){return typeof a=="function"?a:(a[wa]||(a[wa]=function(u){return a.handleEvent(u)}),a[wa])}function qe(){b.call(this),this.i=new bi(this),this.M=this,this.G=null}f(qe,b),qe.prototype[Jn]=!0,qe.prototype.removeEventListener=function(a,u,d,p){iB(this,a,u,d,p)};function Ze(a,u){var d,p=a.G;if(p)for(d=[];p;p=p.G)d.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new A(u,a);else if(u instanceof A)u.target=u.target||a;else{var x=u;u=new A(p,a),sB(u,x)}x=!0;let S,j;if(d)for(j=d.length-1;j>=0;j--)S=u.g=d[j],x=vi(S,p,!0,u)&&x;if(S=u.g=a,x=vi(S,p,!0,u)&&x,x=vi(S,p,!1,u)&&x,d)for(j=0;j<d.length;j++)S=u.g=d[j],x=vi(S,p,!1,u)&&x}qe.prototype.N=function(){if(qe.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let p=0;p<d.length;p++)Di(d[p]);delete a.g[u],a.h--}}this.G=null},qe.prototype.J=function(a,u,d,p){return this.i.add(String(a),u,!1,d,p)},qe.prototype.K=function(a,u,d,p){return this.i.add(String(a),u,!0,d,p)};function vi(a,u,d,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let x=!0;for(let S=0;S<u.length;++S){const j=u[S];if(j&&!j.da&&j.capture==d){const le=j.listener,Ve=j.ha||j.src;j.fa&&pa(a.i,j),x=le.call(Ve,p)!==!1&&x}}return x&&!p.defaultPrevented}function SC(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=B(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function lB(a){a.g=SC(()=>{a.g=null,a.i&&(a.i=!1,lB(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class PC extends b{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:lB(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function or(a){b.call(this),this.h=a,this.g={}}f(or,b);var cB=[];function BB(a){Ii(a.g,function(u,d){this.g.hasOwnProperty(d)&&Ea(u)},a),a.g={}}or.prototype.N=function(){or.Z.N.call(this),BB(this)},or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _a=o.JSON.stringify,kC=o.JSON.parse,OC=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function uB(){}function hB(){}var ar={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Da(){A.call(this,"d")}f(Da,A);function Ia(){A.call(this,"c")}f(Ia,A);var qn={},dB=null;function Ti(){return dB=dB||new qe}qn.Ia="serverreachability";function fB(a){A.call(this,qn.Ia,a)}f(fB,A);function lr(a){const u=Ti();Ze(u,new fB(u))}qn.STAT_EVENT="statevent";function pB(a,u){A.call(this,qn.STAT_EVENT,a),this.stat=u}f(pB,A);function et(a){const u=Ti();Ze(u,new pB(u,a))}qn.Ja="timingevent";function CB(a,u){A.call(this,qn.Ja,a),this.size=u}f(CB,A);function cr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Br(){this.g=!0}Br.prototype.ua=function(){this.g=!1};function NC(a,u,d,p,x,S){a.info(function(){if(a.g)if(S){var j="",le=S.split("&");for(let Ee=0;Ee<le.length;Ee++){var Ve=le[Ee].split("=");if(Ve.length>1){const He=Ve[0];Ve=Ve[1];const kt=He.split("_");j=kt.length>=2&&kt[1]=="type"?j+(He+"="+Ve+"&"):j+(He+"=redacted&")}}}else j=null;else j=S;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+u+`
`+d+`
`+j})}function LC(a,u,d,p,x,S,j){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+u+`
`+d+`
`+S+" "+j})}function ys(a,u,d,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+MC(a,d)+(p?" "+p:"")})}function FC(a,u){a.info(function(){return"TIMEOUT: "+u})}Br.prototype.info=function(){};function MC(a,u){if(!a.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var x=p[0];if(x!="noop"&&x!="stop"&&x!="close")for(let j=1;j<p.length;j++)p[j]=""}}}}return _a(S)}catch{return u}}var Ai={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},gB={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},mB;function ba(){}f(ba,uB),ba.prototype.g=function(){return new XMLHttpRequest},mB=new ba;function ur(a){return encodeURIComponent(String(a))}function VC(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function cn(a,u,d,p){this.j=a,this.i=u,this.l=d,this.S=p||1,this.V=new or(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new EB}function EB(){this.i=null,this.g="",this.h=!1}var yB={},va={};function Ta(a,u,d){a.M=1,a.A=Ri(Pt(u)),a.u=d,a.R=!0,wB(a,null)}function wB(a,u){a.F=Date.now(),xi(a),a.B=Pt(a.A);var d=a.B,p=a.S;Array.isArray(p)||(p=[String(p)]),OB(d.i,"t",p),a.C=0,d=a.j.L,a.h=new EB,a.g=XB(a.j,d?u:null,!a.u),a.P>0&&(a.O=new PC(B(a.Y,a,a.g),a.P)),u=a.V,d=a.g,p=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(cB[0]=x.toString()),x=cB);for(let S=0;S<x.length;S++){const j=rB(d,x[S],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=a.J?tB(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),lr(),NC(a.i,a.v,a.B,a.l,a.S,a.u)}cn.prototype.ba=function(a){a=a.target;const u=this.O;u&&hn(a)==3?u.j():this.Y(a)},cn.prototype.Y=function(a){try{if(a==this.g)e:{const le=hn(this.g),Ve=this.g.ya(),Ee=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||HB(this.g)))){this.K||le!=4||Ve==7||(Ve==8||Ee<=0?lr(3):lr(2)),Aa(this);var u=this.g.ca();this.X=u;var d=GC(this);if(this.o=u==200,LC(this.i,this.v,this.B,this.l,this.S,le,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,x=this.g;if((p=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var S=p;break t}}S=null}if(a=S)ys(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xa(this,a);else{this.o=!1,this.m=3,et(12),Kn(this),hr(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<d.length;)if(He=HC(this,d),He==va){le==4&&(this.m=4,et(14),a=!1),ys(this.i,this.l,null,"[Incomplete Response]");break}else if(He==yB){this.m=4,et(15),ys(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ys(this.i,this.l,He,null),xa(this,He);if(_B(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||d.length!=0||this.h.h||(this.m=1,et(16),a=!1),this.o=this.o&&a,!a)ys(this.i,this.l,d,"[Invalid Chunked Response]"),Kn(this),hr(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Fa(j),j.P=!0,et(11))}}else ys(this.i,this.l,d,null),xa(this,d);le==4&&Kn(this),this.o&&!this.K&&(le==4?zB(this.j,this):(this.o=!1,xi(this)))}else tg(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),Kn(this),hr(this)}}}catch{}finally{}};function GC(a){if(!_B(a))return a.g.la();const u=HB(a.g);if(u==="")return"";let d="";const p=u.length,x=hn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Kn(a),hr(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<p;S++)a.h.h=!0,d+=a.h.i.decode(u[S],{stream:!(x&&S==p-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function _B(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function HC(a,u){var d=a.C,p=u.indexOf(`
`,d);return p==-1?va:(d=Number(u.substring(d,p)),isNaN(d)?yB:(p+=1,p+d>u.length?va:(u=u.slice(p,p+d),a.C=p+d,u)))}cn.prototype.cancel=function(){this.K=!0,Kn(this)};function xi(a){a.T=Date.now()+a.H,DB(a,a.H)}function DB(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=cr(B(a.aa,a),u)}function Aa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}cn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(FC(this.i,this.B),this.M!=2&&(lr(),et(17)),Kn(this),this.m=2,hr(this)):DB(this,this.T-a)};function hr(a){a.j.I==0||a.K||zB(a.j,a)}function Kn(a){Aa(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,BB(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function xa(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Ra(d.h,a))){if(!a.L&&Ra(d.h,a)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ni(d),ki(d);else break e;La(d),et(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=cr(B(d.Va,d),6e3));vB(d.h)<=1&&d.ta&&(d.ta=void 0)}else Qn(d,11)}else if((a.L||d.g==a)&&Ni(d),!y(u))for(x=d.Ba.g.parse(u),u=0;u<x.length;u++){let Ee=x[u];const He=Ee[0];if(!(He<=d.K))if(d.K=He,Ee=Ee[1],d.I==2)if(Ee[0]=="c"){d.M=Ee[1],d.ba=Ee[2];const kt=Ee[3];kt!=null&&(d.ka=kt,d.j.info("VER="+d.ka));const Wn=Ee[4];Wn!=null&&(d.za=Wn,d.j.info("SVER="+d.za));const dn=Ee[5];dn!=null&&typeof dn=="number"&&dn>0&&(p=1.5*dn,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const fn=a.g;if(fn){const Fi=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var S=p.h;S.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Sa(S,S.h),S.h=null))}if(p.G){const Ma=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ma&&(p.wa=Ma,De(p.J,p.G,Ma))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var j=a;if(p.na=YB(p,p.L?p.ba:null,p.W),j.L){TB(p.h,j);var le=j,Ve=p.O;Ve&&(le.H=Ve),le.D&&(Aa(le),xi(le)),p.g=j}else qB(p);d.i.length>0&&Oi(d)}else Ee[0]!="stop"&&Ee[0]!="close"||Qn(d,7);else d.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Qn(d,7):Na(d):Ee[0]!="noop"&&d.l&&d.l.qa(Ee),d.A=0)}}lr(4)}catch{}}var UC=class{constructor(a,u){this.g=a,this.map=u}};function IB(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bB(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vB(a){return a.h?1:a.g?a.g.size:0}function Ra(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Sa(a,u){a.g?a.g.add(u):a.h=u}function TB(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}IB.prototype.cancel=function(){if(this.i=AB(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function AB(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return _(a.i)}var xB=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $C(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const p=a[d].indexOf("=");let x,S=null;p>=0?(x=a[d].substring(0,p),S=a[d].substring(p+1)):x=a[d],u(x,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Bn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Bn?(this.l=a.l,dr(this,a.j),this.o=a.o,this.g=a.g,fr(this,a.u),this.h=a.h,Pa(this,NB(a.i)),this.m=a.m):a&&(u=String(a).match(xB))?(this.l=!1,dr(this,u[1]||"",!0),this.o=pr(u[2]||""),this.g=pr(u[3]||"",!0),fr(this,u[4]),this.h=pr(u[5]||"",!0),Pa(this,u[6]||"",!0),this.m=pr(u[7]||"")):(this.l=!1,this.i=new gr(null,this.l))}Bn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Cr(u,RB,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Cr(u,RB,!0),"@"),a.push(ur(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Cr(d,d.charAt(0)=="/"?qC:JC,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Cr(d,zC)),a.join("")},Bn.prototype.resolve=function(a){const u=Pt(this);let d=!!a.j;d?dr(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var p=a.h;if(d)fr(u,a.u);else if(d=!!a.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var x=u.h.lastIndexOf("/");x!=-1&&(p=u.h.slice(0,x+1)+p)}if(x=p,x==".."||x==".")p="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){p=x.lastIndexOf("/",0)==0,x=x.split("/");const S=[];for(let j=0;j<x.length;){const le=x[j++];le=="."?p&&j==x.length&&S.push(""):le==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&j==x.length&&S.push("")):(S.push(le),p=!0)}p=S.join("/")}else p=x}return d?u.h=p:d=a.i.toString()!=="",d?Pa(u,NB(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Pt(a){return new Bn(a)}function dr(a,u,d){a.j=d?pr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function fr(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Pa(a,u,d){u instanceof gr?(a.i=u,QC(a.i,a.l)):(d||(u=Cr(u,KC)),a.i=new gr(u,a.l))}function De(a,u,d){a.i.set(u,d)}function Ri(a){return De(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function pr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Cr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,jC),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jC(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var RB=/[#\/\?@]/g,JC=/[#\?:]/g,qC=/[#\?]/g,KC=/[#\?@]/g,zC=/#/g;function gr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function zn(a){a.g||(a.g=new Map,a.h=0,a.i&&$C(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=gr.prototype,n.add=function(a,u){zn(this),this.i=null,a=ws(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function SB(a,u){zn(a),u=ws(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function PB(a,u){return zn(a),u=ws(a,u),a.g.has(u)}n.forEach=function(a,u){zn(this),this.g.forEach(function(d,p){d.forEach(function(x){a.call(u,x,p,this)},this)},this)};function kB(a,u){zn(a);let d=[];if(typeof u=="string")PB(a,u)&&(d=d.concat(a.g.get(ws(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return zn(this),this.i=null,a=ws(this,a),PB(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=kB(this,a),a.length>0?String(a[0]):u):u};function OB(a,u,d){SB(a,u),d.length>0&&(a.i=null,a.g.set(ws(a,u),_(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const x=ur(d);d=kB(this,d);for(let S=0;S<d.length;S++){let j=x;d[S]!==""&&(j+="="+ur(d[S])),a.push(j)}}return this.i=a.join("&")};function NB(a){const u=new gr;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function ws(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function QC(a,u){u&&!a.j&&(zn(a),a.i=null,a.g.forEach(function(d,p){const x=p.toLowerCase();p!=x&&(SB(this,p),OB(this,x,d))},a)),a.j=u}function WC(a,u){const d=new Br;if(o.Image){const p=new Image;p.onload=h(un,d,"TestLoadImage: loaded",!0,u,p),p.onerror=h(un,d,"TestLoadImage: error",!1,u,p),p.onabort=h(un,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=h(un,d,"TestLoadImage: timeout",!1,u,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function YC(a,u){const d=new Br,p=new AbortController,x=setTimeout(()=>{p.abort(),un(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(S=>{clearTimeout(x),S.ok?un(d,"TestPingServer: ok",!0,u):un(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(x),un(d,"TestPingServer: error",!1,u)})}function un(a,u,d,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(d)}catch{}}function XC(){this.g=new OC}function ka(a){this.i=a.Sb||null,this.h=a.ab||!1}f(ka,uB),ka.prototype.g=function(){return new Si(this.i,this.h)};function Si(a,u){qe.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Si,qe),n=Si.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Er(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Er(this)),this.g&&(this.readyState=3,Er(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;LB(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function LB(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?mr(this):Er(this),this.readyState==3&&LB(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,mr(this))},n.Na=function(a){this.g&&(this.response=a,mr(this))},n.ga=function(){this.g&&mr(this)};function mr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Er(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Er(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function FB(a){let u="";return Ii(a,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Oa(a,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=FB(d),typeof a=="string"?d!=null&&ur(d):De(a,u,d))}function Re(a){qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Re,qe);var ZC=/^https?$/i,eg=["POST","PUT"];n=Re.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():mB.g(),this.g.onreadystatechange=C(B(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){MB(this,S);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)d.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())d.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(eg,u,void 0)>=0)||p||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,j]of d)this.g.setRequestHeader(S,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){MB(this,S)}};function MB(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,VB(a),Pi(a)}function VB(a){a.A||(a.A=!0,Ze(a,"complete"),Ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ze(this,"complete"),Ze(this,"abort"),Pi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pi(this,!0)),Re.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?GB(this):this.Xa())},n.Xa=function(){GB(this)};function GB(a){if(a.h&&typeof i<"u"){if(a.v&&hn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ze(a,"readystatechange"),hn(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=S===0){let j=String(a.D).match(xB)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),p=!ZC.test(j?j.toLowerCase():"")}d=p}if(d)Ze(a,"complete"),Ze(a,"success");else{a.o=6;try{var x=hn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",VB(a)}}finally{Pi(a)}}}}function Pi(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||Ze(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return hn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),kC(u)}};function HB(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function tg(a){const u={};a=(a.g&&hn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(y(a[p]))continue;var d=VC(a[p]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[x]||[];u[x]=S,S.push(d)}TC(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function yr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function UB(a){this.za=0,this.i=[],this.j=new Br,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=yr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=yr("baseRetryDelayMs",5e3,a),this.Za=yr("retryDelaySeedMs",1e4,a),this.Ta=yr("forwardChannelMaxRetries",2,a),this.va=yr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new IB(a&&a.concurrentRequestLimit),this.Ba=new XC,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=UB.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,p){et(0),this.W=a,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=YB(this,null,this.W),Oi(this)};function Na(a){if($B(a),a.I==3){var u=a.V++,d=Pt(a.J);if(De(d,"SID",a.M),De(d,"RID",u),De(d,"TYPE","terminate"),wr(a,d),u=new cn(a,a.j,u),u.M=2,u.A=Ri(Pt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=XB(u.j,null),u.g.ea(u.A)),u.F=Date.now(),xi(u)}WB(a)}function ki(a){a.g&&(Fa(a),a.g.cancel(),a.g=null)}function $B(a){ki(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ni(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Oi(a){if(!bB(a.h)&&!a.m){a.m=!0;var u=a.Ea;Ae||E(),re||(Ae(),re=!0),I.add(u,a),a.D=0}}function ng(a,u){return vB(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=cr(B(a.Ea,a,u),QB(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new cn(this,this.j,a);let S=this.o;if(this.U&&(S?(S=tB(S),sB(S,this.U)):S=this.U),this.u!==null||this.R||(x.J=S,S=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=JB(this,x,u),d=Pt(this.J),De(d,"RID",a),De(d,"CVER",22),this.G&&De(d,"X-HTTP-Session-Id",this.G),wr(this,d),S&&(this.R?u="headers="+ur(FB(S))+"&"+u:this.u&&Oa(d,this.u,S)),Sa(this.h,x),this.Ra&&De(d,"TYPE","init"),this.S?(De(d,"$req",u),De(d,"SID","null"),x.U=!0,Ta(x,d,null)):Ta(x,d,u),this.I=2}}else this.I==3&&(a?jB(this,a):this.i.length==0||bB(this.h)||jB(this))};function jB(a,u){var d;u?d=u.l:d=a.V++;const p=Pt(a.J);De(p,"SID",a.M),De(p,"RID",d),De(p,"AID",a.K),wr(a,p),a.u&&a.o&&Oa(p,a.u,a.o),d=new cn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=JB(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Sa(a.h,d),Ta(d,p,u)}function wr(a,u){a.H&&Ii(a.H,function(d,p){De(u,p,d)}),a.l&&Ii({},function(d,p){De(u,p,d)})}function JB(a,u,d){d=Math.min(a.i.length,d);const p=a.l?B(a.l.Ka,a.l,a):null;e:{var x=a.i;let le=-1;for(;;){const Ve=["count="+d];le==-1?d>0?(le=x[0].g,Ve.push("ofs="+le)):le=0:Ve.push("ofs="+le);let Ee=!0;for(let He=0;He<d;He++){var S=x[He].g;const kt=x[He].map;if(S-=le,S<0)le=Math.max(0,x[He].g-100),Ee=!1;else try{S="req"+S+"_"||"";try{var j=kt instanceof Map?kt:Object.entries(kt);for(const[Wn,dn]of j){let fn=dn;l(dn)&&(fn=_a(dn)),Ve.push(S+Wn+"="+encodeURIComponent(fn))}}catch(Wn){throw Ve.push(S+"type="+encodeURIComponent("_badmap")),Wn}}catch{p&&p(kt)}}if(Ee){j=Ve.join("&");break e}}j=void 0}return a=a.i.splice(0,d),u.G=a,j}function qB(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Ae||E(),re||(Ae(),re=!0),I.add(u,a),a.A=0}}function La(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=cr(B(a.Da,a),QB(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,KB(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=cr(B(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),ki(this),KB(this))};function Fa(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function KB(a){a.g=new cn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Pt(a.na);De(u,"RID","rpc"),De(u,"SID",a.M),De(u,"AID",a.K),De(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&De(u,"TO",a.ia),De(u,"TYPE","xmlhttp"),wr(a,u),a.u&&a.o&&Oa(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ri(Pt(u)),d.u=null,d.R=!0,wB(d,a)}n.Va=function(){this.C!=null&&(this.C=null,ki(this),La(this),et(19))};function Ni(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function zB(a,u){var d=null;if(a.g==u){Ni(a),Fa(a),a.g=null;var p=2}else if(Ra(a.h,u))d=u.G,TB(a.h,u),p=1;else return;if(a.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var x=a.D;p=Ti(),Ze(p,new CB(p,d)),Oi(a)}else qB(a);else if(x=u.m,x==3||x==0&&u.X>0||!(p==1&&ng(a,u)||p==2&&La(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),x){case 1:Qn(a,5);break;case 4:Qn(a,10);break;case 3:Qn(a,6);break;default:Qn(a,2)}}}function QB(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function Qn(a,u){if(a.j.info("Error code "+u),u==2){var d=B(a.bb,a),p=a.Ua;const x=!p;p=new Bn(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||dr(p,"https"),Ri(p),x?WC(p.toString(),d):YC(p.toString(),d)}else et(2);a.I=0,a.l&&a.l.pa(u),WB(a),$B(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function WB(a){if(a.I=0,a.ja=[],a.l){const u=AB(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ja,u),D(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function YB(a,u,d){var p=d instanceof Bn?Pt(d):new Bn(d);if(p.g!="")u&&(p.g=u+"."+p.g),fr(p,p.u);else{var x=o.location;p=x.protocol,u=u?u+"."+x.hostname:x.hostname,x=+x.port;const S=new Bn(null);p&&dr(S,p),u&&(S.g=u),x&&fr(S,x),d&&(S.h=d),p=S}return d=a.G,u=a.wa,d&&u&&De(p,d,u),De(p,"VER",a.ka),wr(a,p),p}function XB(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Re(new ka({ab:d})):new Re(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ZB(){}n=ZB.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Li(){}Li.prototype.g=function(a,u){return new ft(a,u)};function ft(a,u){qe.call(this),this.g=new UB(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!y(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new _s(this)}f(ft,qe),ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Na(this.g)},ft.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=_a(a),a=d);u.i.push(new UC(u.Ya++,a)),u.I==3&&Oi(u)},ft.prototype.N=function(){this.g.l=null,delete this.j,Na(this.g),delete this.g,ft.Z.N.call(this)};function eu(a){Da.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}f(eu,Da);function tu(){Ia.call(this),this.status=1}f(tu,Ia);function _s(a){this.g=a}f(_s,ZB),_s.prototype.ra=function(){Ze(this.g,"a")},_s.prototype.qa=function(a){Ze(this.g,new eu(a))},_s.prototype.pa=function(a){Ze(this.g,new tu)},_s.prototype.oa=function(){Ze(this.g,"b")},Li.prototype.createWebChannel=Li.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,uf=function(){return new Li},Bf=function(){return Ti()},cf=qn,fl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ai.NO_ERROR=0,Ai.TIMEOUT=8,Ai.HTTP_ERROR=6,io=Ai,gB.COMPLETE="complete",lf=gB,hB.EventType=ar,ar.OPEN="a",ar.CLOSE="b",ar.ERROR="c",ar.MESSAGE="d",qe.prototype.listen=qe.prototype.J,br=hB,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,af=Re}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var ye,M=(ye=class{},G(ye,"FOLD_CASE",1),G(ye,"LITERAL",2),G(ye,"CLASS_NL",4),G(ye,"DOT_NL",8),G(ye,"ONE_LINE",16),G(ye,"NON_GREEDY",32),G(ye,"PERL_X",64),G(ye,"UNICODE_GROUPS",128),G(ye,"WAS_DOLLAR",256),G(ye,"LOOKBEHIND",512),G(ye,"MATCH_NL",ye.CLASS_NL|ye.DOT_NL),G(ye,"PERL",ye.CLASS_NL|ye.ONE_LINE|ye.PERL_X|ye.UNICODE_GROUPS),G(ye,"POSIX",0),G(ye,"UNANCHORED",0),G(ye,"ANCHOR_START",1),G(ye,"ANCHOR_BOTH",2),ye);const Ds={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Ur=128,pl=new Int32Array(Ur),Cl=new Int32Array(Ur),Hi=65535;for(let n=0;n<Ur;n++)n>=97&&n<=122?pl[n]=n-32:pl[n]=n,n>=65&&n<=90?Cl[n]=n+32:Cl[n]=n;var ol,k=(ol=class{static toUpperCase(n){if(n<Ur)return pl[n];const e=String.fromCodePoint(n).toUpperCase(),t=e.codePointAt(0)>Hi?2:1;if(e.length>t)return n;const s=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),r=s.codePointAt(0)>Hi?2:1;return s.length>r||s.codePointAt(0)!==n?n:e.codePointAt(0)}static toLowerCase(n){if(n<Ur)return Cl[n];const e=String.fromCodePoint(n).toLowerCase(),t=e.codePointAt(0)>Hi?2:1;if(e.length>t)return n;const s=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),r=s.codePointAt(0)>Hi?2:1;return s.length>r||s.codePointAt(0)!==n?n:e.codePointAt(0)}},G(ol,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),ol),g=class{constructor(n,e=!1){this.data=n,this.isStride1=e,this.SIZE=e?2:3}getLo(n){return this.data[n*this.SIZE]}getHi(n){return this.data[n*this.SIZE+1]}getStride(n){return this.isStride1?1:this.data[n*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const hf=new Uint8Array(256);for(let n=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";n<64;n++)hf[e.charCodeAt(n)]=n;const df=n=>{const e=[];let t=0,s=0;for(let r=0;r<n.length;r++){let i=hf[n.charCodeAt(r)];t|=(i&31)<<s,(i&32)===0?(e.push(t),t=0,s=0):s+=5}return e},m=(n,e)=>{const t=df(n),s=e?t.length/2:t.length/3,r=new Uint32Array(s*3);let i=0,o=0;for(let l=0;l<s;l++)i+=t[o++],r[l*3]=i,i+=t[o++],r[l*3+1]=i,r[l*3+2]=e?1:t[o++];return r},ow=n=>{const e=df(n),t=new Map;let s=0;for(let r=0;r<e.length;r+=2){s+=e[r];const i=e[r+1],o=i>>>1^-(i&1);t.set(s,s+o)}return t};var Ui=class{constructor(n){this.initializer=n,this.cache=new Map}has(n){return n in this.initializer}get(n){if(this.cache.has(n))return this.cache.get(n);const e=this.initializer[n],t=e?e():null;return this.cache.set(n,t),t}},gn,it=(gn=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=ow("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},G(gn,"_CASE_ORBIT",null),G(gn,"_Print",null),G(gn,"CATEGORIES",new Ui({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),G(gn,"SCRIPTS",new Ui({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))})),G(gn,"FOLD_CATEGORIES",new Ui({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),G(gn,"FOLD_SCRIPT",new Ui({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})),gn),we,z=(we=class{static is32(e,t){let s=0,r=e.length;for(;s<r;){const i=s+Math.floor((r-s)/2),o=e.getLo(i),l=e.getHi(i);if(o<=t&&t<=l){const c=e.getStride(i);return(t-o)%c===0}t<o?r=i:s=i+1}return!1}static is(e,t){if(t<=we.MAX_LATIN1){for(let s=0;s<e.length;s++){if(t>e.getHi(s))continue;const r=e.getLo(s);if(t<r)return!1;const i=e.getStride(s);return(t-r)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&we.is32(e,t)}static isUpper(e){if(e<=we.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return we.is(it.Upper,e)}static isPrint(e){return e<=we.MAX_LATIN1?e>=32&&e<we.MAX_ASCII||e>=161&&e!==173:we.is(it.Print,e)}static simpleFold(e){if(it.CASE_ORBIT.has(e))return it.CASE_ORBIT.get(e);const t=k.toLowerCase(e);return t!==e?t:k.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=we.MAX_ASCII&&t<=we.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let s=we.simpleFold(e);s!==e;s=we.simpleFold(s))if(s===t)return!0;return!1}},G(we,"MAX_RUNE",1114111),G(we,"MAX_ASCII",127),G(we,"MAX_LATIN1",255),G(we,"MAX_BMP",65535),G(we,"MIN_FOLD",65),G(we,"MAX_FOLD",125251),G(we,"MIN_HIGH_SURROGATE",55296),G(we,"MAX_HIGH_SURROGATE",56319),G(we,"MIN_LOW_SURROGATE",56320),G(we,"MAX_LOW_SURROGATE",57343),G(we,"MIN_SUPPLEMENTARY_CODE_POINT",65536),we);const nc=256,ff=new Uint8Array(nc);for(let n=0;n<nc;n++)ff[n]=97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57||n===95?1:0;let Ka=null,za=null;var be,Y=(be=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")||k.CODES.get("a")<=e&&e<=k.CODES.get("z")||k.CODES.get("A")<=e&&e<=k.CODES.get("Z")}static unhex(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")?e-k.CODES.get("0"):k.CODES.get("a")<=e&&e<=k.CODES.get("f")?e-k.CODES.get("a")+10:k.CODES.get("A")<=e&&e<=k.CODES.get("F")?e-k.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(z.isPrint(e))be.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case k.CODES.get('"'):t+='\\"';break;case k.CODES.get("\\"):t+="\\\\";break;case k.CODES.get("	"):t+="\\t";break;case k.CODES.get(`
`):t+="\\n";break;case k.CODES.get("\r"):t+="\\r";break;case k.CODES.get("\b"):t+="\\b";break;case k.CODES.get("\f"):t+="\\f";break;default:{let s=e.toString(16);e<256?(t+="\\x",s.length===1&&(t+="0"),t+=s):t+=`\\x{${s}}`;break}}return t}static stringToRunes(e){const t=String(e),s=[];let r=0;for(;r<t.length;){const i=t.codePointAt(r);s.push(i),r+=i>z.MAX_BMP?2:1}return s}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<nc?ff[e]===1:!1}static emptyOpContext(e,t){let s=0;return e<0&&(s|=be.EMPTY_BEGIN_TEXT|be.EMPTY_BEGIN_LINE),e===10&&(s|=be.EMPTY_BEGIN_LINE),t<0&&(s|=be.EMPTY_END_TEXT|be.EMPTY_END_LINE),t===10&&(s|=be.EMPTY_END_LINE),be.isWordRune(e)!==be.isWordRune(t)?s|=be.EMPTY_WORD_BOUNDARY:s|=be.EMPTY_NO_WORD_BOUNDARY,s}static quoteMeta(e){return e.split("").map(t=>be.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>z.MAX_BMP?2:1}static toArray(e){const t=e.length,s=new Array(t);for(let r=0;r<t;r++)s[r]=e[r];return s}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Ka||(Ka=new TextEncoder),Ka.encode(e);{let t=[],s=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[s++]=i:i<2048?(t[s++]=i>>6|192,t[s++]=i&63|128):(i&64512)===z.MIN_HIGH_SURROGATE&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===z.MIN_LOW_SURROGATE?(i=z.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[s++]=i>>18|240,t[s++]=i>>12&63|128,t[s++]=i>>6&63|128,t[s++]=i&63|128):(t[s++]=i>>12|224,t[s++]=i>>6&63|128,t[s++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){za||(za=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return za.decode(t)}else{let t=[],s=0,r=0;for(;s<e.length;){let i=e[s++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[s++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[s++],l=e[s++],c=e[s++],B=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-z.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode(z.MIN_HIGH_SURROGATE+(B>>10)),t[r++]=String.fromCharCode(z.MIN_LOW_SURROGATE+(B&1023))}else{let o=e[s++],l=e[s++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")}}},G(be,"METACHARACTERS","\\.+*?()|[]{}^$"),G(be,"EMPTY_BEGIN_LINE",1),G(be,"EMPTY_END_LINE",2),G(be,"EMPTY_BEGIN_TEXT",4),G(be,"EMPTY_END_TEXT",8),G(be,"EMPTY_WORD_BOUNDARY",16),G(be,"EMPTY_NO_WORD_BOUNDARY",32),G(be,"EMPTY_ALL",-1),be);const pf=(n=[],e=0)=>{const t=Object.create(null);for(let s=0;s<n.length;s++){const r=n[s],i=e+s;t[r]=i,t[i]=r}return Object.freeze(t)};var Dn,hs=(Dn=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Dn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Dn.Encoding.UTF_16}},G(Dn,"Encoding",pf(["UTF_16","UTF_8"])),Dn),Ou=class extends hs{constructor(n=null){super(),this.bytes=n}getEncoding(){return hs.Encoding.UTF_8}asCharSequence(){return Y.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},aw=class extends hs{constructor(n=null){super(),this.charSequence=n}getEncoding(){return hs.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return Y.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},ns=class{static utf16(n){return new aw(n)}static utf8(n){return Y.isByteArray(n)?new Ou(n):new Ou(Y.stringToUtf8ByteArray(n))}},nt=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},lw=class extends nt{constructor(n,e=0,t=n.length){super(),this.bytes=n,this.start=e,this.end=t}hasString(n,e){const t=n.bytes;if(t.length===0)return!0;const s=this.indexOf(this.bytes,t,this.start+e);return s!==-1&&s<=this.end-t.length}hasAnyString(n,e){return n.ac8?n.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return nt.EOF();const e=this.bytes[n]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&n+1<this.end){const t=this.bytes[n+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&n+2<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const s=this.bytes[n+2]&255;return(s&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|s&63)<<3|3}else if(e>=240&&e<=244&&n+3<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const s=this.bytes[n+2]&255;if((s&192)!==128)return e<<3|1;const r=this.bytes[n+3]&255;return(r&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(s&63)<<6|r&63)<<3|4}else return e<<3|1}index(n,e){e+=this.start;const t=this.indexOf(this.bytes,n.prefixUTF8,e);return t<0?t:t-e}context(n){n+=this.start;let e=-1;if(n>this.start&&n<=this.end){let s=n-1;if(e=this.bytes[s--],e>=128){let r=n-4;for(r<this.start&&(r=this.start);s>=r&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),e=this.step(s-this.start)>>3}}const t=n<this.end?this.step(n-this.start)>>3:-1;return Y.emptyOpContext(e,t)}indexOf(n,e,t=0){let s=e.length;if(s===0)return t<=this.end?t:-1;const r=e[0];let i=this.end-s;const o=typeof n.indexOf=="function";let l=t;for(;l<=i;){if(o){if(l=n.indexOf(r,l),l===-1||l>i)return-1}else{for(;l<=i&&n[l]!==r;)l++;if(l>i)return-1}let c=!0;for(let B=1;B<s;B++)if(n[l+B]!==e[B]){c=!1;break}if(c)return l;l++}return-1}prefixLength(n){return n.prefixUTF8.length}},cw=class extends nt{constructor(n,e=0,t=n.length){super(),this.charSequence=n,this.start=e,this.end=t}hasString(n,e){const t=this.charSequence.indexOf(n.str,this.start+e);return t!==-1&&t<=this.end-n.str.length}hasAnyString(n,e){return n.ac16?n.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return nt.EOF();const e=this.charSequence.charCodeAt(n);if(e<z.MIN_HIGH_SURROGATE||e>z.MAX_HIGH_SURROGATE||n+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(n+1);return t>=z.MIN_LOW_SURROGATE&&t<=z.MAX_LOW_SURROGATE?(e-z.MIN_HIGH_SURROGATE)*1024+(t-z.MIN_LOW_SURROGATE)+z.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(n,e){e+=this.start;const t=this.charSequence.indexOf(n.prefix,e);return t<0||t>this.end-n.prefix.length?-1:t-e}context(n){n+=this.start;const e=n>this.start&&n<=this.end?this.charSequence.charCodeAt(n-1):-1,t=n<this.end?this.charSequence.charCodeAt(n):-1;return Y.emptyOpContext(e,t)}prefixLength(n){return n.prefix.length}},Ie=class{static fromUTF8(n,e=0,t=n.length){return new lw(n,e,t)}static fromUTF16(n,e=0,t=n.length){return new cw(n,e,t)}},hi=class extends Error{constructor(n){super(n),this.name="RE2JSException"}},_e=class extends hi{constructor(n,e=null){let t=`error parsing regexp: ${n}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=n,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},Bw=class extends hi{constructor(n){super(n),this.name="RE2JSCompileException"}},rt=class extends hi{constructor(n){super(n),this.name="RE2JSGroupException"}},uw=class extends hi{constructor(n){super(n),this.name="RE2JSFlagsException"}},Rr=class extends hi{constructor(n){super(n),this.name="RE2JSInternalException"}},rs,Nu=(rs=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(s=>{const r=s.codePointAt(0);return r===k.CODES.get("\\")||r===k.CODES.get("$")?`\\${s}`:s}).join(""):e.indexOf("$")<0?e:e.split("").map(s=>s.codePointAt(0)===k.CODES.get("$")?"$$":s).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const s=this.patternInput.re2();this.patternGroupCount=s.numberOfCapturingGroups(),this.groups=[],this.namedGroups=s.namedGroups,this.numberOfInstructions=s.numberOfInstructions(),t instanceof hs?this.resetMatcherInput(t):Y.isByteArray(t)?this.resetMatcherInput(ns.utf8(t)):this.resetMatcherInput(ns.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof hs||(Y.isByteArray(e)?e=ns.utf8(e):e=ns.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new rt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new rt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new rt(`group '${e}' not found`);e=r}const t=this.start(e),s=this.end(e);return t<0&&s<0?null:this.substring(t,s)}getNamedGroups(){if(!this.hasMatch)throw new rt("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new rt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new rt("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,s=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!s[0])throw new rt("inconsistency in matching group data");this.groups=s[1],this.hasGroups=!0}matches(){return this.genMatch(0,M.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,M.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new rt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Ie.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Ie.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,M.UNANCHORED)}genMatch(e,t){const s=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return s[0]?(this.groups=s[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?Y.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let s="";const r=this.start(),i=this.end();return this.appendPos<r&&(s+=this.substring(this.appendPos,r)),this.appendPos=i,s+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),s}appendReplacementInternalJava(e){let t="",s=0;const r=e.length;let i=0;for(;i<r;){const o=e.codePointAt(i);if(o===k.CODES.get("\\")){if(s<i&&(t+=e.substring(s,i)),i++,i>=r)throw new rt("character to be escaped is missing");s=i,i++;continue}if(o===k.CODES.get("$")){if(s<i&&(t+=e.substring(s,i)),i+1>=r)throw new rt("Illegal group reference: group index is missing");const l=e.codePointAt(i+1);if(k.CODES.get("0")<=l&&l<=k.CODES.get("9")){let c=l-k.CODES.get("0"),B=i+2;for(;B<r;B++){const f=e.codePointAt(B);if(f<k.CODES.get("0")||f>k.CODES.get("9")||c*10+f-k.CODES.get("0")>this.patternGroupCount)break;c=c*10+f-k.CODES.get("0")}if(c>this.patternGroupCount)throw new rt(`n > number of groups: ${c}`);const h=this.group(c);h!==null&&(t+=h),i=B,s=i}else if(l===k.CODES.get("{")){let c=i+2;for(;c<r&&e.codePointAt(c)!==k.CODES.get("}");)c++;if(c>=r)throw new rt("named capture group is missing trailing '}'");const B=e.substring(i+2,c),h=this.group(B);h!==null&&(t+=h),i=c+1,s=i}else throw new rt("Illegal group reference");continue}i++}return s<r&&(t+=e.substring(s,r)),t}appendReplacementInternalJs(e){let t="",s=0;const r=e.length;for(let i=0;i<r-1;i++)if(e.codePointAt(i)===k.CODES.get("$")){let o=e.codePointAt(i+1);if(k.CODES.get("$")===o){s<i&&(t+=e.substring(s,i)),t+="$",i++,s=i+1;continue}else if(k.CODES.get("&")===o){s<i&&(t+=e.substring(s,i));const l=this.group(0);l!==null?t+=l:t+="$&",i++,s=i+1;continue}else if(k.CODES.get("`")===o){s<i&&(t+=e.substring(s,i)),t+=this.substring(0,this.start(0)),i++,s=i+1;continue}else if(k.CODES.get("'")===o){s<i&&(t+=e.substring(s,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,s=i+1;continue}else if(k.CODES.get("1")<=o&&o<=k.CODES.get("9")){let l=o-k.CODES.get("0");for(s<i&&(t+=e.substring(s,i)),i+=2;i<r&&(o=e.codePointAt(i),!(o<k.CODES.get("0")||o>k.CODES.get("9")||l*10+o-k.CODES.get("0")>this.patternGroupCount));i++)l=l*10+o-k.CODES.get("0");if(l>this.patternGroupCount){t+=`$${l}`,s=i,i--;continue}const c=this.group(l);c!==null&&(t+=c),s=i,i--;continue}else if(o===k.CODES.get("<")){s<i&&(t+=e.substring(s,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==k.CODES.get(">")&&e.codePointAt(l)!==k.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==k.CODES.get(">")){t+=e.substring(i-1,l+1),s=l+1,i=l;continue}const c=e.substring(i+1,l);if(Object.prototype.hasOwnProperty.call(this.namedGroups,c)){const B=this.group(c);B!==null&&(t+=B)}else t+=`$<${c}>`;s=l+1,i=l;continue}}return s<r&&(t+=e.substring(s,r)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,s=!1){let r="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let l=null;if(i){if(this.groupCount()>=rs.MAX_REPLACER_ARGS)throw new rt("Too many capture groups to safely invoke replacer function");l=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(r+=i?this.appendReplacementFunc(e,o,l):this.appendReplacement(e,s),!!t););return r+=this.appendTail(),r}appendReplacementFunc(e,t,s){let r="";const i=this.start(),o=this.end();this.appendPos<i&&(r+=this.substring(this.appendPos,i)),this.appendPos=o;const l=this.buildReplacerArgs(i,t,s);return r+=String(e(...l)),r}buildReplacerArgs(e,t,s){const r=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const l=this.start(o);l<0?r.push(void 0):r.push(this.substring(l,this.end(o)))}if(r.push(e),r.push(s),t){const o=this.getNamedGroups();for(const l in o)o[l]===null&&(o[l]=void 0);r.push(o)}return r}},G(rs,"MAX_REPLACER_ARGS",65535),rs),he,O=(he=class{static isRuneOp(e){return he.RUNE<=e&&e<=he.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let s of e)t+=Y.escapeRune(s);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?z.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let s=0,r=t>>1;for(;r>1;){const o=r>>1;s+=this.runes[s+o<<1]<=e?o:0,r-=o}s+=this.runes[s<<1]<=e?1:0;const i=s-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?z.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let s=0,r=t>>1;for(;r>1;){const o=r>>1;s+=this.runes[s+o<<1]<=e?o:0,r-=o}s+=this.runes[s<<1]<=e?1:0;const i=s-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case he.ALT:return`alt -> ${this.out}, ${this.arg}`;case he.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case he.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case he.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case he.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case he.FAIL:return"fail";case he.NOP:return`nop -> ${this.out}`;case he.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case he.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case he.RUNE:return this.runes===null?"rune <null>":["rune ",he.escapeRunes(this.runes),(this.arg&M.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case he.RUNE1:return`rune1 ${he.escapeRunes(this.runes)} -> ${this.out}`;case he.RUNE_ANY:return`any -> ${this.out}`;case he.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},G(he,"ALT",1),G(he,"ALT_MATCH",2),G(he,"CAPTURE",3),G(he,"EMPTY_WIDTH",4),G(he,"FAIL",5),G(he,"MATCH",6),G(he,"NOP",7),G(he,"RUNE",8),G(he,"RUNE1",9),G(he,"RUNE_ANY",10),G(he,"RUNE_ANY_NOT_NL",11),G(he,"LB_WRITE",12),G(he,"LB_CHECK",13),he),Lu=class{constructor(n){this.sparse=new Int32Array(n),this.densePcs=new Int32Array(n),this.denseCaps=null,this.size=0,this.ncap=0}init(n){this.ncap=n;const e=this.densePcs.length*n;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(n){const e=this.sparse[n];return e<this.size&&this.densePcs[e]===n}isEmpty(){return this.size===0}add(n){const e=this.size++;return this.sparse[n]=e,this.densePcs[e]=n,e}clear(){this.size=0}toString(){let n="{";for(let e=0;e<this.size;e++)e!==0&&(n+=", "),n+=this.densePcs[e];return n+="}",n}},hw=class gl{static fromRE2(e){const t=new gl;return t.prog=e.prog,t.re2=e,t.q0=new Lu(t.prog.numInst()),t.q1=new Lu(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return gl.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?Y.emptyInts():Y.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,s){const r=this.re2.cond;if(r===Y.EMPTY_ALL||(s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,l=this.q0,c=this.q1,B=e.step(i),h=B>>3,f=B&7,C=-1,_=0;B!==nt.EOF()&&(B=e.step(i+f),C=B>>3,_=B&7);let D;for(i===0?D=Y.emptyOpContext(-1,h):D=e.context(i);;){if(l.isEmpty()){if((r&Y.EMPTY_BEGIN_TEXT)!==0&&i!==0||(s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&C!==this.re2.prefixRune&&e.canCheckPrefix()){const H=e.index(this.re2,i);if(H<0)break;i+=H,B=e.step(i),h=B>>3,f=B&7,B=e.step(i+f),C=B>>3,_=B&7,D=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let H=0;H<this.prog.lbStarts.length;H++)this.add(l,this.prog.lbStarts[H],i,this.matchcap,0,D);!this.matched&&(i===0||s===M.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(l,this.prog.start,i,this.matchcap,0,D));const P=i+f;if(D=e.context(P),this.step(l,c,i,P,h,D,s,i===e.endPos()),f===0||this.ncap===0&&this.matched)break;i+=f,h=C,f=_,h!==-1&&(B=e.step(i+f),C=B>>3,_=B&7);const V=l;l=c,c=V}return c.clear(),this.matched}matchSet(e,t,s){const r=this.re2.cond;if(r===Y.EMPTY_ALL)return[];if((s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,l=this.q0,c=this.q1,B=e.step(i),h=B>>3,f=B&7,C=-1,_=0;B!==nt.EOF()&&(B=e.step(i+f),C=B>>3,_=B&7);let D=i===0?Y.emptyOpContext(-1,h):e.context(i);const P=new Set;for(;!(l.isEmpty()&&((r&Y.EMPTY_BEGIN_TEXT)!==0&&i!==0||(s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let se=0;se<this.prog.lbStarts.length;se++)this.add(l,this.prog.lbStarts[se],i,this.matchcap,0,D);(i===0||s===M.UNANCHORED)&&i>=o&&this.add(l,this.prog.start,i,this.matchcap,0,D);const V=i+f;D=e.context(V);for(let se=0;se<l.size;se++){const ge=l.densePcs[se],Te=this.prog.inst[ge],Ae=se*this.ncap;let re=!1;switch(Te.op){case O.MATCH:if(s===M.ANCHOR_BOTH&&i!==e.endPos())break;P.add(Te.arg);break;case O.RUNE:re=Te.matchRune(h);break;case O.RUNE1:re=h===Te.runes[0];break;case O.RUNE_ANY:re=!0;break;case O.RUNE_ANY_NOT_NL:re=h!==10;break;default:continue}re&&this.add(c,Te.out,V,l.denseCaps,Ae,D)}if(l.clear(),f===0)break;i+=f,h=C,f=_,h!==-1&&(B=e.step(i+f),C=B>>3,_=B&7);const H=l;l=c,c=H}return c.clear(),Array.from(P).sort((V,H)=>V-H)}step(e,t,s,r,i,o,l,c){const B=this.re2.longest;for(let h=0;h<e.size;h++){const f=e.densePcs[h],C=h*this.ncap;if(B&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[C])continue;const _=this.prog.inst[f];let D=!1;switch(_.op){case O.MATCH:if(l===M.ANCHOR_BOTH&&!c)break;if(this.ncap>0&&(!B||!this.matched||this.matchcap[1]<s)){e.denseCaps[C+1]=s;for(let P=0;P<this.ncap;P++)this.matchcap[P]=e.denseCaps[C+P]}B||(e.size=0),this.matched=!0;break;case O.RUNE:D=_.matchRune(i);break;case O.RUNE1:D=i===_.runes[0];break;case O.RUNE_ANY:D=!0;break;case O.RUNE_ANY_NOT_NL:D=i!==10;break;default:continue}D&&this.add(t,_.out,r,e.denseCaps,C,o)}e.clear()}add(e,t,s,r,i,o){for(;;){if(t===0||e.contains(t))return;const l=e.add(t),c=this.prog.inst[t];switch(c.op){case O.FAIL:return;case O.ALT:case O.ALT_MATCH:this.add(e,c.out,s,r,i,o),t=c.arg;continue;case O.EMPTY_WIDTH:if((c.arg&~o)===0){t=c.out;continue}return;case O.NOP:t=c.out;continue;case O.CAPTURE:if(c.arg<this.ncap){const B=r[i+c.arg];r[i+c.arg]=s,this.add(e,c.out,s,r,i,o),r[i+c.arg]=B;return}else{t=c.out;continue}case O.LB_WRITE:this.lbTable[Math.abs(c.arg)]=s,t=c.out;continue;case O.LB_CHECK:if(c.arg>0){if(this.lbTable[c.arg]===s){t=c.out;continue}}else if(this.lbTable[-c.arg]!==s){t=c.out;continue}return;case O.MATCH:case O.RUNE:case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:if(this.ncap>0){const B=l*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[B+h]=r[i+h]}return;default:throw new Rr("unhandled")}}}};const Fu=n=>{let e=-2128831035;for(let t=0;t<n.length;t++)e^=n[t],e=Math.imul(e,16777619);return e},dw=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0};var fw=class{constructor(n,e,t=[]){this.nfaStates=n,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(z.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(z.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},Wt,pw=(Wt=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/Wt.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,s=[...e];let r=!1;const i=[];for(;s.length>0;){const l=s.pop();if(t.has(l))continue;t.add(l);const c=this.prog.getInst(l);switch(c.op){case O.MATCH:r=!0,i.includes(c.arg)||i.push(c.arg);break;case O.ALT:case O.ALT_MATCH:s.push(c.out),s.push(c.arg);break;case O.NOP:case O.CAPTURE:s.push(c.out);break;case O.EMPTY_WIDTH:case O.LB_WRITE:case O.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((l,c)=>l-c),{pcs:o,isMatch:r,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const s=t.pcs,r=Fu(s);let i=this.stateCache.get(r);if(i)for(let l=0;l<i.length;l++){const c=i[l];if(dw(c.nfaStates,s))return c.lastSeen=++this.clock,c}else i=[],this.stateCache.set(r,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=Wt.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(r),i||(i=[],this.stateCache.set(r,i))}const o=new fw(s,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let l=0;l<o.length;l++)e.push(o[l]);e.sort((o,l)=>o.lastSeen-l.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),s=e.length-t,r=e.slice(s),i=new Set(r);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<r.length;o++){const l=r[o];l.nextLatin1.fill(null),l.nextLatin1Anchored.fill(null),l.transKeys.length=0,l.transVals.length=0;const c=Fu(l.nfaStates);let B=this.stateCache.get(c);B||(B=[],this.stateCache.set(c,B)),B.push(l),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,s){if(t<=z.MAX_LATIN1)if(s===M.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(s===M.UNANCHORED?0:z.MAX_RUNE+1),l=e.transKeys,c=l.length;for(let B=0;B<c;B++)if(l[B]===o)return e.transVals[B]}const r=[];for(let o=0;o<e.nfaStates.length;o++){const l=e.nfaStates[o],c=this.prog.getInst(l);O.isRuneOp(c.op)&&c.matchRune(t)&&r.push(c.out)}s===M.UNANCHORED&&r.push(this.prog.start);const i=this.getState(r);if(t<=z.MAX_LATIN1)s===M.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(s===M.UNANCHORED?0:z.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,s){if((s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;if(i.isMatch)if(s===M.ANCHOR_BOTH){if(t===r)return!0}else return!0;let o=t;for(;o<r;){const l=e.step(o),c=l>>3,B=l&7;if(B===0)break;if(i=s===M.UNANCHORED&&c<=z.MAX_LATIN1&&i.nextLatin1[c]||this.step(i,c,s),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(s===M.ANCHOR_BOTH){if(o+B===r)return!0}else return!0;if(i.nfaStates.length===0&&s!==M.UNANCHORED)return!1;o+=B}return!1}matchSet(e,t,s){if((s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;const o=new Set,l=(B,h)=>{B.isMatch&&(s===M.ANCHOR_BOTH?h===r&&B.matchIDs.forEach(f=>o.add(f)):B.matchIDs.forEach(f=>o.add(f)))};l(i,t);let c=t;for(;c<r;){const B=e.step(c),h=B>>3,f=B&7;if(f===0)break;if(i=s===M.UNANCHORED&&h<=z.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,s),i===null)return null;if(i.lastSeen=++this.clock,c+=f,l(i,c),i.nfaStates.length===0&&s!==M.UNANCHORED)break}return Array.from(o).sort((B,h)=>B-h)}},G(Wt,"MAX_CACHE_CLEARS",5),G(Wt,"STATE_MEMORY_ESTIMATE",838),Wt);const Cw=32,gw=500,Qa=256,mw=256*1024;var Ew=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(Qa),this.jobArg=new Uint8Array(Qa),this.jobPos=new Int32Array(Qa),this.jobLen=0,this.visited=new Uint32Array(0)}reset(n,e,t){this.end=e,this.jobLen=0,this.ncap=t;const s=n.numInst()*(e+1)+Cw-1>>>5;this.visited.length<s?this.visited=new Uint32Array(s):this.visited.fill(0,0,s),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(n,e){const t=n*(this.end+1)+e,s=t>>>5,r=1<<(t&31);return(this.visited[s]&r)!==0?!1:(this.visited[s]|=r,!0)}push(n,e,t,s){if(n.prog.getInst(e).op!==O.FAIL&&(s||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const r=this.jobPc.length*2,i=new Int32Array(r);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(r);o.set(this.jobArg),this.jobArg=o;const l=new Int32Array(r);l.set(this.jobPos),this.jobPos=l}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=s?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(n,e,t,s,r){const i=n.longest;for(this.push(n,t,s,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],l=this.jobArg[this.jobLen]===1,c=this.jobPos[this.jobLen],B=!0;for(;!(!B&&!this.shouldVisit(o,c));){B=!1;const h=n.prog.getInst(o);switch(h.op){case O.FAIL:throw new Rr("unexpected InstFail");case O.ALT:if(l){l=!1,o=h.arg;continue}else{this.push(n,o,c,!0),o=h.out;continue}case O.ALT_MATCH:{const f=n.prog.getInst(h.out);if(O.isRuneOp(f.op)){this.push(n,h.arg,c,!1),o=h.arg,c=this.end;continue}this.push(n,h.out,this.end,!1),o=h.out;continue}case O.RUNE:{const f=e.step(c);if(f===nt.EOF()||!h.matchRune(f>>3))break;c+=f&7,o=h.out;continue}case O.RUNE1:{const f=e.step(c);if(f===nt.EOF()||f>>3!==h.runes[0])break;c+=f&7,o=h.out;continue}case O.RUNE_ANY_NOT_NL:{const f=e.step(c);if(f===nt.EOF()||f>>3===10)break;c+=f&7,o=h.out;continue}case O.RUNE_ANY:{const f=e.step(c);if(f===nt.EOF())break;c+=f&7,o=h.out;continue}case O.CAPTURE:if(l){this.cap[h.arg]=c;break}else{h.arg<this.ncap&&(this.push(n,o,this.cap[h.arg],!0),this.cap[h.arg]=c),o=h.out;continue}case O.EMPTY_WIDTH:{const f=e.context(c);if((h.arg&~f)!==0)break;o=h.out;continue}case O.NOP:o=h.out;continue;case O.MATCH:{if(r===M.ANCHOR_BOTH&&c!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=c);const f=this.matchcap[1];if((f===-1||i&&c>0&&c>f)&&this.matchcap.set(this.cap),!i||c===this.end)return!0;break}case O.LB_WRITE:case O.LB_CHECK:throw new Rr("Backtracker cannot evaluate Lookbehind instructions");default:throw new Rr("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const $i=[];var ji=class Cf{static shouldBacktrack(e){return e.numInst()<=gw}static maxBitStateLen(e){return Cf.shouldBacktrack(e)?Math.floor(mw/e.numInst()):0}static execute(e,t,s,r,i){const o=e.cond;if(o===Y.EMPTY_ALL||(r===M.ANCHOR_START||r===M.ANCHOR_BOTH)&&s!==0||(o&Y.EMPTY_BEGIN_TEXT)!==0&&s!==0)return null;const l=$i.length>0?$i.pop():new Ew,c=t.endPos();l.reset(e.prog,c,i);let B=!1;if((o&Y.EMPTY_BEGIN_TEXT)!==0||r===M.ANCHOR_START||r===M.ANCHOR_BOTH)l.ncap>0&&(l.cap[0]=s),l.tryBacktrack(e,t,e.prog.start,s,r)&&(B=!0);else{let f=-1;for(;s<=c&&f!==0;s+=f){if(e.prefix.length>0){const _=t.index(e,s);if(_<0)break;s+=_}if(l.ncap>0&&(l.cap[0]=s),l.tryBacktrack(e,t,e.prog.start,s,r)){B=!0;break}const C=t.step(s);f=C===nt.EOF()?0:C&7}}if(!B)return $i.push(l),null;const h=i===0?[]:Y.toArray(l.matchcap.subarray(0,i));return $i.push(l),h}},Mu=class{constructor(n){this.sparse=new Uint32Array(n),this.dense=new Uint32Array(n),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(n){return n<this.sparse.length&&this.sparse[n]<this.size&&this.dense[this.sparse[n]]===n}insert(n){this.contains(n)||this.insertNew(n)}insertNew(n){n>=this.sparse.length||(this.sparse[n]=this.size,this.dense[this.size]=n,this.size++)}};const yw=(n,e,t,s)=>{const r=n.length,i=e.length;let o=0,l=0;const c=[],B=[];let h=!0,f=-1;const C=_=>{const D=_?n:e,P=_?o:l,V=_?t:s;return f>0&&D[P]<=c[f]?!1:(c.push(D[P],D[P+1]),_?o+=2:l+=2,f+=2,B.push(V),!0)};for(;o<r||l<i;)if(l>=i?h=C(!0):o>=r||e[l]<n[o]?h=C(!1):h=C(!0),!h)return null;return{merged:c,next:B}};var ww=class{constructor(n){this.start=n.start,this.numCap=n.numCap,this.inst=new Array(n.inst.length);for(let e=0;e<n.inst.length;e++){const t=n.inst[e],s=new O(t.op);s.out=t.out,s.arg=t.arg,s.runes=t.runes?t.runes.slice():[],s.next=null,this.inst[e]=s}}};const _w=n=>{const e=new ww(n);for(let t=0;t<e.inst.length;t++){const s=e.inst[t];if(s.op!==O.ALT&&s.op!==O.ALT_MATCH)continue;let r="out",i="arg",o=e.inst[s[i]];if(o.op!==O.ALT&&o.op!==O.ALT_MATCH&&(r="arg",i="out",o=e.inst[s[i]],o.op!==O.ALT&&o.op!==O.ALT_MATCH))continue;const l=e.inst[s[r]];if(l.op===O.ALT||l.op===O.ALT_MATCH)continue;let c="out",B="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,c="arg",B="out"),h&&(o[c]=s[r]),s[r]===o[c]&&(s[i]=o[B])}return e},Dw=n=>{if(n.inst.length>=1e3)return null;const e=new Mu(n.inst.length),t=new Mu(n.inst.length),s=new Array(n.inst.length),r=new Array(n.inst.length).fill(!1),i=o=>{let l=!0;const c=n.inst[o];if(t.contains(o))return!0;switch(t.insert(o),c.op){case O.ALT:case O.ALT_MATCH:{l=i(c.out)&&i(c.arg);let B=r[c.out],h=r[c.arg];if(B&&h)return!1;if(h){const D=c.out;c.out=c.arg,c.arg=D;const P=B;B=h,h=P}B&&(r[o]=!0,c.op=O.ALT_MATCH);const f=s[c.out]||[],C=s[c.arg]||[],_=yw(f,C,c.out,c.arg);if(!_)return!1;s[o]=_.merged,c.next=new Uint32Array(_.next);break}case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:l=i(c.out),r[o]=r[c.out],s[o]=s[c.out]?s[c.out].slice():[],c.next=new Uint32Array(Math.floor(s[o].length/2)+1).fill(c.out);break;case O.MATCH:case O.FAIL:r[o]=c.op===O.MATCH;break;case O.RUNE:{if(r[o]=!1,c.next&&c.next.length>0)break;if(e.insert(c.out),!c.runes||c.runes.length===0){s[o]=[],c.next=new Uint32Array([c.out]);break}let B=[];if(c.runes.length===1&&(c.arg&M.FOLD_CASE)!==0){const h=c.runes[0];B.push(h,h);for(let f=z.simpleFold(h);f!==h;f=z.simpleFold(f))B.push(f,f);B.sort((f,C)=>f-C)}else for(let h=0;h<c.runes.length;h++)B.push(c.runes[h]);s[o]=B,c.next=new Uint32Array(Math.floor(B.length/2)+1).fill(c.out),c.op=O.RUNE;break}case O.RUNE1:{if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out);let B=[];if((c.arg&M.FOLD_CASE)!==0){const h=c.runes[0];B.push(h,h);for(let f=z.simpleFold(h);f!==h;f=z.simpleFold(f))B.push(f,f);B.sort((f,C)=>f-C)}else B.push(c.runes[0],c.runes[0]);s[o]=B,c.next=new Uint32Array(Math.floor(B.length/2)+1).fill(c.out),c.op=O.RUNE;break}case O.RUNE_ANY:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),s[o]=[0,z.MAX_RUNE],c.next=new Uint32Array([c.out]);break;case O.RUNE_ANY_NOT_NL:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),s[o]=[0,9,11,z.MAX_RUNE],c.next=new Uint32Array(Math.floor(s[o].length/2)+1).fill(c.out);break}return l};for(e.clear(),e.insert(n.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<n.inst.length;o++)s[o]&&(n.inst[o].runes=s[o]);return n},Iw=(n,e)=>{for(let t=0;t<e.inst.length;t++){const s=e.inst[t];switch(s.op){case O.ALT:case O.ALT_MATCH:case O.RUNE:break;case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:case O.MATCH:case O.FAIL:n.inst[t].next=null;break;case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:n.inst[t].next=null,n.inst[t].op=s.op,n.inst[t].runes=s.runes?s.runes.slice():[];break}}};var Vu=class gf{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==O.EMPTY_WIDTH||(t.arg&Y.EMPTY_BEGIN_TEXT)===0)return null;let s=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===O.ALT||e.inst[i].op===O.ALT_MATCH){s=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],l=e.inst[o.out].op;switch(o.op){case O.ALT:case O.ALT_MATCH:if(l===O.MATCH||e.inst[o.arg].op===O.MATCH)return null;break;case O.EMPTY_WIDTH:if(l===O.MATCH){if((o.arg&Y.EMPTY_END_TEXT)===Y.EMPTY_END_TEXT)continue;return null}break;default:if(l===O.MATCH&&s)return null;break}}let r=_w(e);return r=Dw(r),r!==null&&Iw(r,e),r}static next(e,t){const s=e.matchRunePos(t);return s>=0?e.next[s]:e.op===O.ALT_MATCH?e.out:0}static execute(e,t,s,r,i){const o=e.onepass;if(!o)return null;const l=new Int32Array(i).fill(-1);let c=!1,B=t.step(s),h=B>>3,f=B&7,C=nt.EOF(),_=-1,D=0;B!==nt.EOF()&&(C=t.step(s+f),C!==nt.EOF()&&(_=C>>3,D=C&7));let P=s===0?Y.emptyOpContext(-1,h):t.context(s),V=o.start,H;for(;;){switch(H=o.inst[V],V=H.out,H.op){case O.MATCH:return r===M.ANCHOR_BOTH&&s!==t.endPos()?null:(c=!0,l.length>0&&(l[0]=0,l[1]=s),i===0?[]:Y.toArray(l));case O.RUNE:if(!H.matchRune(h))return null;break;case O.RUNE1:if(h!==H.runes[0])return null;break;case O.RUNE_ANY:break;case O.RUNE_ANY_NOT_NL:if(h===10)return null;break;case O.ALT:case O.ALT_MATCH:V=gf.next(H,h);continue;case O.FAIL:return null;case O.NOP:continue;case O.EMPTY_WIDTH:if((H.arg&~P)!==0)return null;continue;case O.CAPTURE:H.arg<l.length&&(l[H.arg]=s);continue;default:throw new Rr("bad inst")}if(f===0)break;P=Y.emptyOpContext(h,_),s+=f,h=_,f=D,h!==-1&&(C=t.step(s+f),C!==nt.EOF()?(_=C>>3,D=C&7):(_=-1,D=0))}return c?i===0?[]:Y.toArray(l):null}},Z,T=(Z=class{static isPseudoOp(e){return e>=Z.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===k.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new Z(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=Z.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=Z.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Z.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Z.Op.EMPTY_MATCH:e+="(?:)";break;case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:case Z.Op.REPEAT:{const t=this.subs[0];switch(t.op>Z.Op.CAPTURE||t.op===Z.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case Z.Op.STAR:e+="*";break;case Z.Op.PLUS:e+="+";break;case Z.Op.QUEST:e+="?";break;case Z.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&M.NON_GREEDY)!==0&&(e+="?");break}case Z.Op.CONCAT:for(let t of this.subs)t.op===Z.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case Z.Op.ALTERNATE:{let t="";for(let s of this.subs)e+=t,t="|",e+=s.appendTo();break}case Z.Op.LITERAL:(this.flags&M.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=Y.escapeRune(t);(this.flags&M.FOLD_CASE)!==0&&(e+=")");break;case Z.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Z.Op.ANY_CHAR:e+="(?s:.)";break;case Z.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case Z.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case Z.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Z.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Z.Op.BEGIN_TEXT:e+="\\A";break;case Z.Op.END_TEXT:(this.flags&M.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case Z.Op.BEGIN_LINE:e+="^";break;case Z.Op.END_LINE:e+="$";break;case Z.Op.WORD_BOUNDARY:e+="\\b";break;case Z.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Z.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===z.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const s=this.runes[t]+1,r=this.runes[t+1]-1;e+=Z.quoteIfHyphen(s),e+=Y.escapeRune(s),s!==r&&(e+="-",e+=Z.quoteIfHyphen(r),e+=Y.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const s=this.runes[t],r=this.runes[t+1];e+=Z.quoteIfHyphen(s),e+=Y.escapeRune(s),s!==r&&(e+="-",e+=Z.quoteIfHyphen(r),e+=Y.escapeRune(r))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===Z.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const s=t.maxCap();e<s&&(e=s)}return e}equals(e){if(!(e!==null&&e instanceof Z)||this.op!==e.op)return!1;switch(this.op){case Z.Op.END_TEXT:if((this.flags&M.WAS_DOLLAR)!==(e.flags&M.WAS_DOLLAR))return!1;break;case Z.Op.LITERAL:case Z.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case Z.Op.ALTERNATE:case Z.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case Z.Op.REPEAT:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case Z.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case Z.Op.PLB:case Z.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},G(Z,"Op",pf(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),Z),Gu=class{constructor(n){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of n){let s=0;for(let r=0;r<t.length;r++){const i=t[r];i in this.next[s]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[s][i]=this.next.length-1),s=this.next[s][i]}this.match[s]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const s=this.next[0][t];this.fail[s]=0,e.push(s)}for(;e.length>0;){const t=e.shift();for(const s in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],s)){const r=this.next[t][s];let i=this.fail[t];for(;i!==0&&!(s in this.next[i]);)i=this.fail[i];s in this.next[i]?this.fail[r]=this.next[i][s]:this.fail[r]=0,this.match[r]=this.match[r]||this.match[this.fail[r]],e.push(r)}}}searchUTF16(n,e,t){let s=0;for(let r=e;r<t;r++){const i=n.charCodeAt(r);for(;s!==0&&!(i in this.next[s]);)s=this.fail[s];if(i in this.next[s]&&(s=this.next[s][i]),this.match[s])return!0}return!1}searchUTF8(n,e,t){let s=0;for(let r=e;r<t;r++){const i=n[r];for(;s!==0&&!(i in this.next[s]);)s=this.fail[s];if(i in this.next[s]&&(s=this.next[s][i]),this.match[s])return!0}return!1}},Ft,pe=(Ft=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Ft.Type.NONE:return!0;case Ft.Type.EXACT:return e.hasString(this,t);case Ft.Type.AND:for(let s=0;s<this.subs.length;s++)if(!this.subs[s].eval(e,t))return!1;return!0;case Ft.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let s=0;s<this.subs.length;s++)if(this.subs[s].eval(e,t))return!0;return!1;default:return!0}}},G(Ft,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Ft),bw=class Kt{static build(e){const t=Kt.fromRegexp(e);return Kt.simplify(t)}static fromRegexp(e){if(!e)return new pe(pe.Type.NONE);switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.NO_MATCH:case T.Op.EMPTY_MATCH:case T.Op.BEGIN_LINE:case T.Op.END_LINE:case T.Op.BEGIN_TEXT:case T.Op.END_TEXT:case T.Op.WORD_BOUNDARY:case T.Op.NO_WORD_BOUNDARY:case T.Op.CHAR_CLASS:case T.Op.ANY_CHAR_NOT_NL:case T.Op.ANY_CHAR:return new pe(pe.Type.NONE);case T.Op.LITERAL:{if(e.runes.length===0||(e.flags&M.FOLD_CASE)!==0)return new pe(pe.Type.NONE);const t=new pe(pe.Type.EXACT);let s="";for(let r=0;r<e.runes.length;r++)s+=String.fromCodePoint(e.runes[r]);return t.str=s,t.bytes=Y.stringToUtf8ByteArray(t.str),t}case T.Op.CAPTURE:case T.Op.PLUS:return Kt.fromRegexp(e.subs[0]);case T.Op.REPEAT:return e.min>=1?Kt.fromRegexp(e.subs[0]):new pe(pe.Type.NONE);case T.Op.CONCAT:{const t=new pe(pe.Type.AND);for(const s of e.subs)t.subs.push(Kt.fromRegexp(s));return t}case T.Op.ALTERNATE:{const t=new pe(pe.Type.OR);for(const s of e.subs)t.subs.push(Kt.fromRegexp(s));return t}default:return new pe(pe.Type.NONE)}}static simplify(e){if(e.type===pe.Type.EXACT||e.type===pe.Type.NONE)return e;if(e.type===pe.Type.AND){const t=[];for(const s of e.subs){const r=Kt.simplify(s);if(r.type!==pe.Type.NONE)if(r.type===pe.Type.AND)for(let i=0;i<r.subs.length;i++)t.push(r.subs[i]);else t.push(r)}return t.length===0?new pe(pe.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===pe.Type.OR){const t=[];for(const o of e.subs){const l=Kt.simplify(o);if(l.type===pe.Type.NONE)return new pe(pe.Type.NONE);if(l.type===pe.Type.OR)for(let c=0;c<l.subs.length;c++)t.push(l.subs[c]);else t.push(l)}if(t.length===0)return new pe(pe.Type.NONE);if(t.length===1)return t[0];const s=new Set,r=[];for(const o of t)o.type===pe.Type.EXACT?s.has(o.str)||(s.add(o.str),r.push(o)):r.push(o);e.subs=r;let i=!0;for(const o of r)if(o.type!==pe.Type.EXACT){i=!1;break}return i&&r.length>1&&(e.ac16=new Gu(r.map(o=>{const l=[];for(let c=0;c<o.str.length;c++)l.push(o.str.charCodeAt(c));return l})),e.ac8=new Gu(r.map(o=>o.bytes))),e}return e}},_t=class{constructor(n=0,e=0){this.head=n,this.tail=e}},vw=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(n){return this.inst[n]}numInst(){return this.inst.length}addInst(n){this.inst.push(new O(n))}skipNop(n){let e=this.inst[n];for(;e.op===O.NOP||e.op===O.CAPTURE;)e=this.inst[n],n=e.out;return e}prefix(){let n="",e=this.skipNop(this.start);if(!O.isRuneOp(e.op)||e.runes.length!==1)return[e.op===O.MATCH,n];for(;O.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&M.FOLD_CASE)===0;)n+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===O.MATCH,n]}startCond(){let n=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case O.EMPTY_WIDTH:n|=t.arg;break;case O.FAIL:return-1;case O.CAPTURE:case O.NOP:break;default:break e}e=t.out}return n}patch(n,e){let t=n.head;for(;t!==0;){const s=this.inst[t>>1];(t&1)===0?(t=s.out,s.out=e):(t=s.arg,s.arg=e)}}append(n,e){if(n.head===0)return e;if(e.head===0)return n;const t=this.inst[n.tail>>1];return(n.tail&1)===0?t.out=e.head:t.arg=e.head,new _t(n.head,e.tail)}toString(){let n="";for(let e=0;e<this.inst.length;e++){const t=n.length;n+=e,e===this.start&&(n+="*"),n+="        ".substring(n.length-t),n+=this.inst[e],n+=`
`}return n}},Ji=class{constructor(n=0,e=new _t,t=!1){this.i=n,this.out=e,this.nullable=t}},Tw=class Is{static ANY_RUNE_NOT_NL(){return[0,k.CODES.get(`
`)-1,k.CODES.get(`
`)+1,z.MAX_RUNE]}static ANY_RUNE(){return[0,z.MAX_RUNE]}static compileRegexp(e){const t=new Is,s=t.compile(e);return t.prog.patch(s.out,t.newInst(O.MATCH).i),t.prog.start=s.i,t.prog}static compileSet(e){const t=new Is;if(e.length===0)return t.prog.start=t.newInst(O.FAIL).i,t.prog;let s=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),l=t.newInst(O.MATCH);t.prog.getInst(l.i).arg=i,t.prog.patch(o.out,l.i),s.push(o.i)}let r=s[0];for(let i=1;i<s.length;i++){const o=t.newInst(O.ALT),l=t.prog.getInst(o.i);l.out=r,l.arg=s[i],r=o.i}return t.prog.start=r,t.prog}constructor(){this.prog=new vw,this.newInst(O.FAIL)}newInst(e){return this.prog.addInst(e),new Ji(this.prog.numInst()-1,new _t,!0)}nop(){const e=this.newInst(O.NOP);return e.out=new _t(e.i<<1,e.i<<1),e}fail(){return new Ji}cap(e){const t=this.newInst(O.CAPTURE);return t.out=new _t(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Ji(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const s=this.newInst(O.ALT),r=this.prog.getInst(s.i);return r.out=e.i,r.arg=t.i,s.out=this.prog.append(e.out,t.out),s.nullable=e.nullable||t.nullable,s}loop(e,t){const s=this.newInst(O.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=new _t(s.i<<1,s.i<<1)):(r.out=e.i,s.out=new _t(s.i<<1|1,s.i<<1|1)),this.prog.patch(e.out,s.i),s}quest(e,t){const s=this.newInst(O.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=new _t(s.i<<1,s.i<<1)):(r.out=e.i,s.out=new _t(s.i<<1|1,s.i<<1|1)),s.out=this.prog.append(s.out,e.out),s}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Ji(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(O.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new _t(t.i<<1,t.i<<1),t}rune(e,t){const s=this.newInst(O.RUNE);s.nullable=!1;const r=this.prog.getInst(s.i);return r.runes=e,t&=M.FOLD_CASE,(e.length!==1||z.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,s.out=new _t(s.i<<1,s.i<<1),(t&M.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=O.RUNE1:e.length===2&&e[0]===0&&e[1]===z.MAX_RUNE?r.op=O.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===k.CODES.get(`
`)-1&&e[2]===k.CODES.get(`
`)+1&&e[3]===z.MAX_RUNE&&(r.op=O.RUNE_ANY_NOT_NL),s}lookBehind(e,t){const s=this.newInst(O.LB_WRITE);this.prog.getInst(s.i).arg=t;const r=this.rune(Is.ANY_RUNE(),0),i=this.star(r,!0),o=this.cat(i,e);this.prog.patch(o.out,s.i);const l=this.newInst(O.LB_CHECK);return this.prog.getInst(l.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),l.out=new _t(l.i<<1,l.i<<1),l}compile(e){switch(e.op){case T.Op.NO_MATCH:return this.fail();case T.Op.EMPTY_MATCH:return this.nop();case T.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let s of e.runes){const r=this.rune([s],e.flags);t=t===null?r:this.cat(t,r)}return t}case T.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case T.Op.ANY_CHAR_NOT_NL:return this.rune(Is.ANY_RUNE_NOT_NL(),0);case T.Op.ANY_CHAR:return this.rune(Is.ANY_RUNE(),0);case T.Op.BEGIN_LINE:return this.empty(Y.EMPTY_BEGIN_LINE);case T.Op.END_LINE:return this.empty(Y.EMPTY_END_LINE);case T.Op.BEGIN_TEXT:return this.empty(Y.EMPTY_BEGIN_TEXT);case T.Op.END_TEXT:return this.empty(Y.EMPTY_END_TEXT);case T.Op.WORD_BOUNDARY:return this.empty(Y.EMPTY_WORD_BOUNDARY);case T.Op.NO_WORD_BOUNDARY:return this.empty(Y.EMPTY_NO_WORD_BOUNDARY);case T.Op.PLB:case T.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case T.Op.CAPTURE:{const t=this.cap(e.cap<<1),s=this.compile(e.subs[0]),r=this.cap(e.cap<<1|1);return this.cat(this.cat(t,s),r)}case T.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&M.NON_GREEDY)!==0);case T.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&M.NON_GREEDY)!==0);case T.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&M.NON_GREEDY)!==0);case T.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let s of e.subs){const r=this.compile(s);t=t===null?r:this.cat(t,r)}return t}case T.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let s of e.subs){const r=this.compile(s);t=t===null?r:this.alt(t,r)}return t}default:throw new Bw("regexp: unhandled case in compile")}}},Aw=class pt{static simplify(e){if(e===null)return null;switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:{const t=pt.simplify(e.subs[0]);if(t!==e.subs[0]){const s=T.fromRegexp(e);return s.runes=[],s.subs=[t],s}return e}case T.Op.CONCAT:case T.Op.ALTERNATE:{const t=[];let s=!1;for(let r=0;r<e.subs.length;r++){const i=e.subs[r],o=pt.simplify(i);if(o!==i&&(s=!0),e.op===T.Op.CONCAT){if(o.op===T.Op.NO_MATCH)return new T(T.Op.NO_MATCH);if(o.op===T.Op.EMPTY_MATCH){s=!0;continue}if(o.op===T.Op.CONCAT){s=!0;for(let l=0;l<o.subs.length;l++)t.push(o.subs[l]);continue}}else if(e.op===T.Op.ALTERNATE){if(o.op===T.Op.NO_MATCH){s=!0;continue}if(o.op===T.Op.ALTERNATE){s=!0;for(let l=0;l<o.subs.length;l++)t.push(o.subs[l]);continue}}t.push(o)}if(s){if(t.length===0)return new T(e.op===T.Op.CONCAT?T.Op.EMPTY_MATCH:T.Op.NO_MATCH);if(t.length===1)return t[0];const r=T.fromRegexp(e);return r.runes=[],r.subs=t,r}return e}case T.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new T(T.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?new T(T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES.get(`
`)-1&&e.runes[2]===k.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE?new T(T.Op.ANY_CHAR_NOT_NL):e;case T.Op.STAR:case T.Op.PLUS:case T.Op.QUEST:{const t=pt.simplify(e.subs[0]);return pt.simplify1(e.op,e.flags,t,e)}case T.Op.REPEAT:{if(e.min===0&&e.max===0)return new T(T.Op.EMPTY_MATCH);const t=pt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return pt.simplify1(T.Op.STAR,e.flags,t,null);if(e.min===1)return pt.simplify1(T.Op.PLUS,e.flags,t,null);const r=new T(T.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(pt.simplify1(T.Op.PLUS,e.flags,t,null)),r.subs=i.slice(0),pt.simplify(r)}if(e.min===1&&e.max===1)return t;let s=null;if(e.min>0){s=[];for(let r=0;r<e.min;r++)s.push(t)}if(e.max>e.min){let r=pt.simplify1(T.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new T(T.Op.CONCAT);o.subs=[t,r],r=pt.simplify1(T.Op.QUEST,e.flags,o,null)}if(s===null)return r;s.push(r)}if(s!==null){const r=new T(T.Op.CONCAT);return r.subs=s.slice(0),pt.simplify(r)}return new T(T.Op.NO_MATCH)}}return e}static simplify1(e,t,s,r){if(s.op===T.Op.EMPTY_MATCH)return s;if(s.op===T.Op.NO_MATCH)return e===T.Op.PLUS?s:new T(T.Op.EMPTY_MATCH);if(e===s.op&&(t&M.NON_GREEDY)===(s.flags&M.NON_GREEDY))return s;if(r!==null&&r.op===e&&(r.flags&M.NON_GREEDY)===(t&M.NON_GREEDY)&&s===r.subs[0])return r;const i=new T(e);return i.flags=t,i.subs=[s],i}},fe=class{constructor(n,e){this.sign=n,this.cls=e}};const Hu=[48,57],Uu=[9,10,12,13,32,32],$u=[48,57,65,90,95,95,97,122],ju=new Map([["\\d",new fe(1,Hu)],["\\D",new fe(-1,Hu)],["\\s",new fe(1,Uu)],["\\S",new fe(-1,Uu)],["\\w",new fe(1,$u)],["\\W",new fe(-1,$u)]]),Ju=[48,57,65,90,97,122],qu=[65,90,97,122],Ku=[0,127],zu=[9,9,32,32],Qu=[0,31,127,127],Wu=[48,57],Yu=[33,126],Xu=[97,122],Zu=[32,126],eh=[33,47,58,64,91,96,123,126],th=[9,13,32,32],nh=[65,90],sh=[48,57,65,90,95,95,97,122],rh=[48,57,65,70,97,102],ih=new Map([["[:alnum:]",new fe(1,Ju)],["[:^alnum:]",new fe(-1,Ju)],["[:alpha:]",new fe(1,qu)],["[:^alpha:]",new fe(-1,qu)],["[:ascii:]",new fe(1,Ku)],["[:^ascii:]",new fe(-1,Ku)],["[:blank:]",new fe(1,zu)],["[:^blank:]",new fe(-1,zu)],["[:cntrl:]",new fe(1,Qu)],["[:^cntrl:]",new fe(-1,Qu)],["[:digit:]",new fe(1,Wu)],["[:^digit:]",new fe(-1,Wu)],["[:graph:]",new fe(1,Yu)],["[:^graph:]",new fe(-1,Yu)],["[:lower:]",new fe(1,Xu)],["[:^lower:]",new fe(-1,Xu)],["[:print:]",new fe(1,Zu)],["[:^print:]",new fe(-1,Zu)],["[:punct:]",new fe(1,eh)],["[:^punct:]",new fe(-1,eh)],["[:space:]",new fe(1,th)],["[:^space:]",new fe(-1,th)],["[:upper:]",new fe(1,nh)],["[:^upper:]",new fe(-1,nh)],["[:word:]",new fe(1,sh)],["[:^word:]",new fe(-1,sh)],["[:xdigit:]",new fe(1,rh)],["[:^xdigit:]",new fe(-1,rh)]]);var Cn=class mn{static charClassToString(e,t){let s="[";for(let r=0;r<t;r+=2){r>0&&(s+=" ");const i=e[r],o=e[r+1];i===o?s+=`0x${i.toString(16)}`:s+=`0x${i.toString(16)}-0x${o.toString(16)}`}return s+="]",s}static cmp(e,t,s,r){const i=e[t]-s;return i!==0?i:r-e[t+1]}static qsortIntPair(e,t,s){const r=((t+s)/2|0)&-2,i=e[r],o=e[r+1];let l=t,c=s;for(;l<=c;){for(;l<s&&mn.cmp(e,l,i,o)<0;)l+=2;for(;c>t&&mn.cmp(e,c,i,o)>0;)c-=2;if(l<=c){if(l!==c){let B=e[l];e[l]=e[c],e[c]=B,B=e[l+1],e[l+1]=e[c+1],e[c+1]=B}l+=2,c-=2}}t<c&&mn.qsortIntPair(e,t,c),l<s&&mn.qsortIntPair(e,l,s)}constructor(e=Y.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;mn.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const s=this.r[t],r=this.r[t+1];if(s<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=s,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&M.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let s=2;s<=4;s+=2)if(this.len>=s){const r=this.r[this.len-s],i=this.r[this.len-s+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-s]=e),t>i&&(this.r[this.len-s+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=z.MIN_FOLD&&t>=z.MAX_FOLD)return this.appendRange(e,t);if(t<z.MIN_FOLD||e>z.MAX_FOLD)return this.appendRange(e,t);e<z.MIN_FOLD&&(this.appendRange(e,z.MIN_FOLD-1),e=z.MIN_FOLD),t>z.MAX_FOLD&&(this.appendRange(z.MAX_FOLD+1,t),t=z.MAX_FOLD);for(let s=e;s<=t;s++){this.appendRange(s,s);for(let r=z.simpleFold(s);r!==s;r=z.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let s=0;s<e.length;s+=2){const r=e[s],i=e[s+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const s=e.getLo(t),r=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(s,r);continue}for(let o=s;o<=r;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let s=0;s<e.length;++s){const r=e.getLo(s),i=e.getHi(s),o=e.getStride(s);if(o===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let l=r;l<=i;l+=o)t<=l-1&&this.appendRange(t,l-1),t=l+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let s=0;s<this.len;s+=2){const r=this.r[s],i=this.r[s+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=z.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=z.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let s=e.cls;return t&&(s=new mn().appendFoldedClass(s).cleanClass().toArray()),this.appendClassWithSign(s,e.sign)}toString(){return mn.charClassToString(this.r,this.len)}},xw=class{constructor(n){this.str=n,this.position=0}pos(){return this.position}rewindTo(n){this.position=n}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(n){this.position+=n}skipString(n){this.position+=n.length}pop(){const n=this.str.codePointAt(this.position);return this.position+=Y.charCount(n),n}lookingAt(n){return this.str.startsWith(n,this.position)}rest(){return this.str.substring(this.position)}from(n){return this.str.substring(n,this.position)}toString(){return this.rest()}},U,Rw=(U=class{static unicodeTable(e){return e==="Any"?{tab:U.ANY_TABLE,fold:U.ANY_TABLE,sign:1}:e==="Ascii"?{tab:U.ASCII_TABLE,fold:U.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:it.CATEGORIES.get("Cn"),fold:it.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:it.CATEGORIES.get("LC"),fold:it.FOLD_CATEGORIES.get("LC"),sign:1}:it.CATEGORIES.has(e)?{tab:it.CATEGORIES.get(e),fold:it.FOLD_CATEGORIES.get(e),sign:1}:it.SCRIPTS.has(e)?{tab:it.SCRIPTS.get(e),fold:it.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<z.MIN_FOLD||e>z.MAX_FOLD)return e;let t=e;const s=e;for(e=z.simpleFold(e);e!==s;e=z.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===T.Op.EMPTY_MATCH)return null;if(e.op===T.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===T.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const s=new T(T.Op.LITERAL);return s.flags=t,s.runes=Y.stringToRunes(e),s}static parse(e,t){return new U(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const s=U.parseInt(e);if(s===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=s;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=U.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),s<0||s>1e3||r===-2||r>1e3||r>=0&&s>r)throw new _e(U.ERR_INVALID_REPEAT_SIZE,e.from(t));return s<<16|r&z.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const s=e.codePointAt(t);if(s!==k.CODES.get("_")&&!Y.isalnum(s))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=k.CODES.get("0")&&e.peek()<=k.CODES.get("9");)e.skip(1);const s=e.from(t);return s.length===0||s.length>1&&s.codePointAt(0)===k.CODES.get("0")?-1:s.length>8?-2:parseInt(s,10)}static isCharClass(e){return e.op===T.Op.LITERAL&&e.runes.length===1||e.op===T.Op.CHAR_CLASS||e.op===T.Op.ANY_CHAR_NOT_NL||e.op===T.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case T.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case T.Op.CHAR_CLASS:for(let s=0;s<e.runes.length;s+=2)if(e.runes[s]<=t&&t<=e.runes[s+1])return!0;return!1;case T.Op.ANY_CHAR_NOT_NL:return t!==k.CODES.get(`
`);case T.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case T.Op.ANY_CHAR:break;case T.Op.ANY_CHAR_NOT_NL:U.matchRune(t,k.CODES.get(`
`))&&(e.op=T.Op.ANY_CHAR);break;case T.Op.CHAR_CLASS:t.op===T.Op.LITERAL?e.runes=new Cn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Cn(e.runes).appendClass(t.runes).toArray();break;case T.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=T.Op.CHAR_CLASS,e.runes=new Cn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new _e(U.ERR_TRAILING_BACKSLASH);let s=e.pop();e:switch(s){case k.CODES.get("1"):case k.CODES.get("2"):case k.CODES.get("3"):case k.CODES.get("4"):case k.CODES.get("5"):case k.CODES.get("6"):case k.CODES.get("7"):if(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"))break;case k.CODES.get("0"):{let r=s-k.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"));i++)r=r*8+e.peek()-k.CODES.get("0"),e.skip(1);return r}case k.CODES.get("x"):{if(!e.more())break;if(s=e.pop(),s===k.CODES.get("{")){let o=0,l=0;for(;;){if(!e.more())break e;if(s=e.pop(),s===k.CODES.get("}"))break;const c=Y.unhex(s);if(c<0||(l=l*16+c,l>z.MAX_RUNE))break e;o++}if(o===0)break e;return l}const r=Y.unhex(s);if(!e.more())break;s=e.pop();const i=Y.unhex(s);if(r<0||i<0)break;return r*16+i}case k.CODES.get("a"):return k.CODES.get("\x07");case k.CODES.get("f"):return k.CODES.get("\f");case k.CODES.get("n"):return k.CODES.get(`
`);case k.CODES.get("r"):return k.CODES.get("\r");case k.CODES.get("t"):return k.CODES.get("	");case k.CODES.get("v"):return k.CODES.get("\v");default:if(s<=z.MAX_ASCII&&!Y.isalnum(s))return s;break}throw new _e(U.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new _e(U.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?U.parseEscape(e):e.pop()}static concatRunes(e,t){for(let s=0;s<t.length;s++)e.push(t[s]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===T.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(U.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new T(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>U.MAX_RUNES)throw new _e(U.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===T.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(U.MAX_SIZE/this.repeats)?this.repeats=U.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(U.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>U.MAX_SIZE)throw new _e(U.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let s=0;switch(e.op){case T.Op.LITERAL:s=e.runes.length;break;case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:case T.Op.STAR:s=2+this.calcSize(e.subs[0]);break;case T.Op.PLUS:case T.Op.QUEST:s=1+this.calcSize(e.subs[0]);break;case T.Op.CONCAT:for(let r of e.subs)s=s+this.calcSize(r);break;case T.Op.ALTERNATE:for(let r of e.subs)s=s+this.calcSize(r);e.subs.length>1&&(s=s+e.subs.length-1);break;case T.Op.REPEAT:{let r=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?s=2+r:s=1+e.min*r;break}s=e.max*r+(e.max-e.min);break}}return s=Math.max(1,s),this.size===null&&(this.size=new Map),this.size.set(e,s),s}checkHeight(e){if(!(this.numRegexp<U.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>U.MAX_HEIGHT)throw new _e(U.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let s=1;for(let r of e.subs){const i=this.calcHeight(r);s<1+i&&(s=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,s),s}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!T.isPseudoOp(this.stack[t-1].op);)t--;const s=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),s}push(e){if(this.numRunes+=e.runes.length,e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===T.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&z.simpleFold(e.runes[0])===e.runes[2]&&z.simpleFold(e.runes[2])===e.runes[0]||e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&z.simpleFold(e.runes[0])===e.runes[1]&&z.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|M.FOLD_CASE))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|M.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const s=this.stack.length;if(s<2)return!1;const r=this.stack[s-1],i=this.stack[s-2];return r.op!==T.Op.LITERAL||i.op!==T.Op.LITERAL||(r.flags&M.FOLD_CASE)!==(i.flags&M.FOLD_CASE)?!1:(i.runes=U.concatRunes(i.runes,r.runes),e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1))}newLiteral(e,t){const s=this.newRegexp(T.Op.LITERAL);return s.flags=t,(t&M.FOLD_CASE)!==0&&(e=U.minFoldRune(e)),s.runes=[e],s}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,s,r,i,o){let l=this.flags;if((l&M.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),l^=M.NON_GREEDY),o!==-1))throw new _e(U.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new _e(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const B=this.stack[c-1];if(T.isPseudoOp(B.op))throw new _e(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const h=this.newRegexp(e);if(h.min=t,h.max=s,h.flags=l,h.subs=[B],this.stack[c-1]=h,this.checkLimits(h),e===T.Op.REPEAT&&(t>=2||s>=2)&&!this.repeatIsValid(h,1e3))throw new _e(U.ERR_INVALID_REPEAT_SIZE,i.from(r))}repeatIsValid(e,t){if(e.op===T.Op.REPEAT){let s=e.max;if(s===0)return!0;if(s<0&&(s=e.min),s>t)return!1;s>0&&(t=Math.trunc(t/s))}for(let s of e.subs)if(!this.repeatIsValid(s,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(T.Op.EMPTY_MATCH)):this.push(this.collapse(e,T.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(T.Op.NO_MATCH)):this.push(this.collapse(e,T.Op.ALTERNATE))}cleanAlt(e){e.op===T.Op.CHAR_CLASS&&(e.runes=new Cn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?(e.runes=[],e.op=T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES.get(`
`)-1&&e.runes[2]===k.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE&&(e.runes=[],e.op=T.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let s=0;for(let l of e)s+=l.op===t?l.subs.length:1;let r=new Array(s).fill(null),i=0;for(let l of e)if(l.op===t){for(let c=0;c<l.subs.length;c++)r[i++]=l.subs[c];this.reuse(l)}else r[i++]=l;let o=this.newRegexp(t);if(o.subs=r,t===T.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const l=o;o=o.subs[0],this.reuse(l)}return o}factor(e){if(e.length<2)return e;let t=0,s=e.length,r=0,i=null,o=0,l=0,c=0;for(let h=0;h<=s;h++){let f=null,C=0,_=0;if(h<s){let D=e[t+h];if(D.op===T.Op.CONCAT&&D.subs.length>0&&(D=D.subs[0]),D.op===T.Op.LITERAL&&(f=D.runes,C=D.runes.length,_=D.flags&M.FOLD_CASE),_===l){let P=0;for(;P<o&&P<C&&i[P]===f[P];)P++;if(P>0){o=P;continue}}}if(h!==c)if(h===c+1)e[r++]=e[t+c];else{const D=this.newRegexp(T.Op.LITERAL);D.flags=l,D.runes=i.slice(0,o);for(let H=c;H<h;H++)e[t+H]=this.removeLeadingString(e[t+H],o),this.checkLimits(e[t+H]);const P=this.collapse(e.slice(t+c,t+h),T.Op.ALTERNATE),V=this.newRegexp(T.Op.CONCAT);V.subs=[D,P],e[r++]=V}c=h,i=f,o=C,l=_}s=r,t=0,c=0,r=0;let B=null;for(let h=0;h<=s;h++){let f=null;if(!(h<s&&(f=U.leadingRegexp(e[t+h]),B!==null&&B.equals(f)&&(U.isCharClass(B)||B.op===T.Op.REPEAT&&B.min===B.max&&U.isCharClass(B.subs[0]))))){if(h!==c)if(h===c+1)e[r++]=e[t+c];else{const C=B;for(let P=c;P<h;P++){const V=P!==c;e[t+P]=this.removeLeadingRegexp(e[t+P],V),this.checkLimits(e[t+P])}const _=this.collapse(e.slice(t+c,t+h),T.Op.ALTERNATE),D=this.newRegexp(T.Op.CONCAT);D.subs=[C,_],e[r++]=D}c=h,B=f}}s=r,t=0,c=0,r=0;for(let h=0;h<=s;h++)if(!(h<s&&U.isCharClass(e[t+h]))){if(h!==c)if(h===c+1)e[r++]=e[t+c];else{let f=c;for(let _=c+1;_<h;_++){const D=e[t+f],P=e[t+_];(D.op<P.op||D.op===P.op&&(D.runes!==null?D.runes.length:0)<(P.runes!==null?P.runes.length:0))&&(f=_)}const C=e[t+c];e[t+c]=e[t+f],e[t+f]=C;for(let _=c+1;_<h;_++)U.mergeCharClass(e[t+c],e[t+_]),this.reuse(e[t+_]);this.cleanAlt(e[t+c]),e[r++]=e[t+c]}h<s&&(e[r++]=e[t+h]),c=h+1}s=r,t=0,c=0,r=0;for(let h=0;h<s;++h)h+1<s&&e[t+h].op===T.Op.EMPTY_MATCH&&e[t+h+1].op===T.Op.EMPTY_MATCH||(e[r++]=e[t+h]);return s=r,t=0,e.slice(t,s)}removeLeadingString(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){const s=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=s,s.op===T.Op.EMPTY_MATCH)switch(this.reuse(s),e.subs.length){case 0:case 1:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===T.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=T.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 1:{const s=e;e=e.subs[0],this.reuse(s);break}}return e}return t&&this.reuse(e),this.newRegexp(T.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&M.LITERAL)!==0)return U.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,s=-1;const r=new xw(this.wholeRegexp);for(;r.more();){let i=-1;e:switch(r.peek()){case k.CODES.get("("):if((this.flags&M.LOOKBEHIND)!==0){if(r.lookingAt("(?<=")){this.parsePosLookBehind(),r.skip(4);break}if(r.lookingAt("(?<!")){this.parseNegLookBehind(),r.skip(4);break}}if((this.flags&M.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(T.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case k.CODES.get("|"):this.parseVerticalBar(),r.skip(1);break;case k.CODES.get(")"):this.parseRightParen(),r.skip(1);break;case k.CODES.get("^"):(this.flags&M.ONE_LINE)!==0?this.op(T.Op.BEGIN_TEXT):this.op(T.Op.BEGIN_LINE),r.skip(1);break;case k.CODES.get("$"):(this.flags&M.ONE_LINE)!==0?this.op(T.Op.END_TEXT).flags|=M.WAS_DOLLAR:this.op(T.Op.END_LINE),r.skip(1);break;case k.CODES.get("."):(this.flags&M.DOT_NL)!==0?this.op(T.Op.ANY_CHAR):this.op(T.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case k.CODES.get("["):this.parseClass(r);break;case k.CODES.get("*"):case k.CODES.get("+"):case k.CODES.get("?"):{i=r.pos();let o=null;switch(r.pop()){case k.CODES.get("*"):o=T.Op.STAR;break;case k.CODES.get("+"):o=T.Op.PLUS;break;case k.CODES.get("?"):o=T.Op.QUEST;break}this.repeat(o,t,s,i,r,e);break}case k.CODES.get("{"):{i=r.pos();const o=U.parseRepeat(r);if(o<0){r.rewindTo(i),this.literal(r.pop());break}t=o>>16,s=(o&z.MAX_BMP)<<16>>16,this.repeat(T.Op.REPEAT,t,s,i,r,e);break}case k.CODES.get("\\"):{const o=r.pos();if(r.skip(1),(this.flags&M.PERL_X)!==0&&r.more())switch(r.pop()){case k.CODES.get("A"):this.op(T.Op.BEGIN_TEXT);break e;case k.CODES.get("b"):this.op(T.Op.WORD_BOUNDARY);break e;case k.CODES.get("B"):this.op(T.Op.NO_WORD_BOUNDARY);break e;case k.CODES.get("C"):throw new _e(U.ERR_INVALID_ESCAPE,"\\C");case k.CODES.get("Q"):{let B=r.rest();const h=B.indexOf("\\E");h>=0?(B=B.substring(0,h),r.skipString(B),r.skipString("\\E")):r.skipString(B);let f=0;for(;f<B.length;){const C=B.codePointAt(f);this.literal(C),f+=Y.charCount(C)}break e}case k.CODES.get("z"):this.op(T.Op.END_TEXT);break e;default:r.rewindTo(o);break}else r.rewindTo(o);const l=this.newRegexp(T.Op.CHAR_CLASS);if(l.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const B=new Cn;if(this.parseUnicodeClass(r,B)){l.runes=B.toArray(),this.push(l);break e}}const c=new Cn;if(this.parsePerlClassEscape(r,c)){l.runes=c.toArray(),this.push(l);break e}r.rewindTo(o),this.reuse(l),this.literal(U.parseEscape(r));break}default:this.literal(r.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new _e(U.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),s=e.rest();if(s.startsWith("(?P<")||s.startsWith("(?<")){const l=s.charAt(2)==="P"?4:3,c=s.indexOf(">");if(c<0)throw new _e(U.ERR_INVALID_NAMED_CAPTURE,s);const B=s.substring(l,c);if(e.skipString(B),e.skip(l+1),!U.isValidCaptureName(B))throw new _e(U.ERR_INVALID_NAMED_CAPTURE,s.substring(0,c+1));const h=this.op(T.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[B])throw new _e(U.ERR_DUPLICATE_NAMED_CAPTURE,B);this.namedGroups[B]=this.numCap,h.name=B;return}e.skip(2);let r=this.flags,i=1,o=!1;e:for(;e.more();){const l=e.pop();switch(l){case k.CODES.get("i"):r|=M.FOLD_CASE,o=!0;break;case k.CODES.get("m"):r&=-17,o=!0;break;case k.CODES.get("s"):r|=M.DOT_NL,o=!0;break;case k.CODES.get("U"):r|=M.NON_GREEDY,o=!0;break;case k.CODES.get("-"):if(i<0)break e;i=-1,r=~r,o=!1;break;case k.CODES.get(":"):case k.CODES.get(")"):if(i<0){if(!o)break e;r=~r}l===k.CODES.get(":")&&this.op(T.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new _e(U.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(T.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===T.Op.VERTICAL_BAR&&U.isCharClass(this.stack[e-1])&&U.isCharClass(this.stack[e-3])){let t=this.stack[e-1],s=this.stack[e-3];if(t.op>s.op){const r=s;s=t,t=r,this.stack[e-3]=s}return U.mergeCharClass(s,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],s=this.stack[e-2];if(s.op===T.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=s,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new _e(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==T.Op.LEFT_PAREN)throw new _e(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(U.hasCapture(e))throw new _e(U.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=T.Op.PLB:t.op=T.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=T.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const s=e.pos();if((this.flags&M.PERL_X)===0||!e.more()||e.pop()!==k.CODES.get("\\")||!e.more())return!1;e.pop();const r=e.from(s),i=ju.has(r)?ju.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&M.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const s=e.rest(),r=s.indexOf(":]");if(r<0)return!1;const i=s.substring(0,r+2);e.skipString(i);const o=ih.has(i)?ih.get(i):null;if(o===null)throw new _e(U.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&M.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const s=e.pos();if((this.flags&M.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===k.CODES.get("P")&&(r=-1),!e.more())throw e.rewindTo(s),new _e(U.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==k.CODES.get("{"))o=Y.runeToString(i);else{const h=e.rest(),f=h.indexOf("}");if(f<0)throw e.rewindTo(s),new _e(U.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,f),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===k.CODES.get("^")&&(r=0-r,o=o.substring(1));const l=U.unicodeTable(o);if(l===null)throw new _e(U.ERR_INVALID_CHAR_RANGE,e.from(s));l.sign<0&&(r=0-r);const c=l.tab,B=l.fold;if((this.flags&M.FOLD_CASE)===0||B===null)t.appendTableWithSign(c,r);else{const h=new Cn().appendTable(c).appendTable(B).cleanClass().toArray();t.appendClassWithSign(h,r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const s=this.newRegexp(T.Op.CHAR_CLASS);s.flags=this.flags;const r=new Cn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&M.CLASS_NL)===0&&r.appendRange(k.CODES.get(`
`),k.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==k.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&M.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new _e(U.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const l=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(l)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(l);const c=U.parseClassChar(e,t);let B=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(B=U.parseClassChar(e,t),B<c)throw new _e(U.ERR_INVALID_CHAR_RANGE,e.from(l))}(this.flags&M.FOLD_CASE)===0?r.appendRange(c,B):r.appendFoldedRange(c,B)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),s.runes=r.toArray(),this.push(s)}},G(U,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),G(U,"ERR_INVALID_CHAR_RANGE","invalid character class range"),G(U,"ERR_INVALID_ESCAPE","invalid escape sequence"),G(U,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),G(U,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),G(U,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),G(U,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),G(U,"ERR_MISSING_BRACKET","missing closing ]"),G(U,"ERR_MISSING_PAREN","missing closing )"),G(U,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),G(U,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),G(U,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),G(U,"ERR_UNEXPECTED_PAREN","unexpected )"),G(U,"ERR_NESTING_DEPTH","expression nests too deeply"),G(U,"ERR_LARGE","expression too large"),G(U,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),G(U,"MAX_HEIGHT",1e3),G(U,"MAX_SIZE",3355443),G(U,"MAX_RUNES",33554432),G(U,"ANY_TABLE",new g(new Uint32Array([0,z.MAX_RUNE,1]))),G(U,"ASCII_TABLE",new g(new Uint32Array([0,127,1]))),G(U,"ASCII_FOLD_TABLE",new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),U),Sw=class Zn{static initTest(e){const t=Zn.compile(e),s=new Zn(t.expr,t.prog,t.numSubexp,t.longest);return s.cond=t.cond,s.prefix=t.prefix,s.prefixUTF8=t.prefixUTF8,s.prefixComplete=t.prefixComplete,s.prefixRune=t.prefixRune,s.prefilter=t.prefilter,s}static compile(e){return Zn.compileImpl(e,M.PERL,!1)}static compilePOSIX(e){return Zn.compileImpl(e,M.POSIX,!0)}static compileImpl(e,t,s){let r=Rw.parse(e,t);const i=r.maxCap();r=Aw.simplify(r);const o=bw.build(r),l=Tw.compileRegexp(r),c=new Zn(e,l,i,s);c.prefilter=o.type===pe.Type.NONE?null:o;const[B,h]=l.prefix();return c.prefixComplete=B,c.prefix=h,c.prefixUTF8=Y.stringToUtf8ByteArray(c.prefix),c.prefix.length>0&&(c.prefixRune=c.prefix.codePointAt(0)),c.namedGroups=r.namedGroups,c}static match(e,t){return Zn.compile(e).match(t)}constructor(e,t,s=0,r=0){this.expr=e,this.prog=t,this.numSubexp=s,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new pw(this.prog),this.onepass=Vu.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,s,r){if((s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const l=e.prefixLength(this);if(s===M.UNANCHORED){const c=e.index(this,t);if(c<0)return null;i=t+c,o=i+l}else if(s===M.ANCHOR_BOTH){if(e.endPos()!==l||e.index(this,0)!==0)return null;i=0,o=l}else if(s===M.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=l}if(i<0)return null;if(r>0){const c=new Int32Array(r).fill(-1);return c[0]=i,c[1]=o,Array.from(c)}return[]}executeEngine(e,t,s,r){if(this.prefixComplete&&(r===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,s,r);if(this.prefilter!==null&&s===M.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return Vu.execute(this,e,t,s,r);if(r>0)return this.prog.numLb===0&&e.endPos()<=ji.maxBitStateLen(this.prog)?ji.execute(this,e,t,s,r):this.doExecuteNFA(e,t,s,r);if(this.prog.numLb===0){const i=this.dfa.match(e,t,s);if(i!==null)return i?[]:null;if(e.endPos()<=ji.maxBitStateLen(this.prog))return ji.execute(this,e,t,s,r)}return this.doExecuteNFA(e,t,s,r)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,s,r){let i=this.get();i||(i=hw.fromRE2(this)),i.init(r);const o=i.match(e,t,s)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(Ie.fromUTF16(e),0,M.UNANCHORED,0)!==null}matchWithGroup(e,t,s,r,i){return e instanceof hs||(Y.isByteArray(e)?e=ns.utf8(e):e=ns.utf16(e)),this.matchMachineInput(e,t,s,r,i)}matchMachineInput(e,t,s,r,i){if(t>s)return[!1,null];const o=e.isUTF16Encoding()?Ie.fromUTF16(e.asCharSequence(),0,s):Ie.fromUTF8(e.asBytes(),0,s),l=this.executeEngine(o,t,r,2*i);return l===null?[!1,null]:[!0,l]}matchUTF8(e){return this.executeEngine(Ie.fromUTF8(e),0,M.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,s){let r=0,i=0,o="";const l=Ie.fromUTF16(e);let c=0;for(;i<=e.length;){const B=this.executeEngine(l,i,M.UNANCHORED,2);if(B===null||B.length===0)break;o+=e.substring(r,B[0]),(B[1]>r||B[0]===0)&&(o+=t(e.substring(B[0],B[1])),c++),r=B[1];const h=l.step(i)&7;if(i+h>B[1]?i+=h:i+1>B[1]?i++:i=B[1],c>=s)break}return o+=e.substring(r),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let s=new Array(t).fill(-1);for(let r=0;r<e.length;r++)s[r]=e[r];e=s}return e}allMatches(e,t,s=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let o=0,l=0,c=-1;for(;l<t&&o<=i;){const B=this.executeEngine(e,o,M.UNANCHORED,this.prog.numCap);if(B===null||B.length===0)break;let h=!0;if(B[1]===o){B[0]===c&&(h=!1);const f=e.step(o);f<0?o=i+1:o+=f&7}else o=B[1];c=B[1],h&&(r.push(s(this.pad(B))),l++)}return r}findUTF8(e){const t=this.executeEngine(Ie.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Ie.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(Ie.fromUTF16(e),0,M.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Ie.fromUTF16(e),0,M.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Ie.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.slice(t[2*r],t[2*r+1]));return s}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Ie.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.substring(t[2*r],t[2*r+1]));return s}findSubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const s=this.allMatches(Ie.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return s.length===0?null:s}findAllUTF8Index(e,t){const s=this.allMatches(Ie.fromUTF8(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAll(e,t){const s=this.allMatches(Ie.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return s.length===0?null:s}findAllIndex(e,t){const s=this.allMatches(Ie.fromUTF16(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAllUTF8Submatch(e,t){const s=this.allMatches(Ie.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.slice(r[2*o],r[2*o+1]));return i});return s.length===0?null:s}findAllUTF8SubmatchIndex(e,t){const s=this.allMatches(Ie.fromUTF8(e),t);return s.length===0?null:s}findAllSubmatch(e,t){const s=this.allMatches(Ie.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.substring(r[2*o],r[2*o+1]));return i});return s.length===0?null:s}findAllSubmatchIndex(e,t){const s=this.allMatches(Ie.fromUTF16(e),t);return s.length===0?null:s}},Pw=class bs{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let s="",r=!1,i=e.length;i===0&&(s="(?:)",r=!0);let o=!1,l=0;for(;l<i;){let B=e[l];if(B==="\\"){if(l+1<i)switch(B=e[l+1],B){case"\\":s+="\\\\",l+=2;continue;case"c":if(l+2<i){let C=e[l+2].charCodeAt(0);if(C>=65&&C<=90||C>=97&&C<=122){let _=C%32;s+="\\x",s+=(_>>4).toString(16).toUpperCase(),s+=(_&15).toString(16).toUpperCase(),l+=3,r=!0;continue}}s+="c",l+=2,r=!0;continue;case"u":if(l+2<i){if(e[l+2]==="{"){let C=l+3,_=!1,D=!1;for(;C<i;){const P=e[C];if(P==="}"){D=!0;break}if(!bs.isHexadecimal(P))break;_=!0,C++}if(D&&_){s+="\\x",l+=2,r=!0;continue}}else if(l+5<i){let C=!0;for(let _=0;_<4;_++)if(!bs.isHexadecimal(e[l+2+_])){C=!1;break}if(C){s+="\\x{"+e.substring(l+2,l+6)+"}",l+=6,r=!0;continue}}}s+="u",l+=2,r=!0;continue;case"x":{let C=!1;if(l+2<i&&e[l+2]==="{"){let _=l+3,D=!1,P=!1;for(;_<i;){const V=e[_];if(V==="}"){P=!0;break}if(!bs.isHexadecimal(V))break;D=!0,_++}P&&D&&(C=!0)}else l+3<i&&bs.isHexadecimal(e[l+2])&&bs.isHexadecimal(e[l+3])&&(C=!0);C?(s+="\\x",l+=2):(s+="x",l+=2,r=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":s+="\\"+B,l+=2;continue;default:{let C=e.codePointAt(l+1);if(C>=48&&C<=57||C>=65&&C<=90||C>=97&&C<=122){let _=Y.charCount(C);s+=e.substring(l+1,l+1+_),l+=_+1,r=!0}else{s+="\\";let _=Y.charCount(C);s+=e.substring(l+1,l+1+_),l+=_+1}continue}}}else if(B==="/"){s+="\\/",l+=1,r=!0;continue}else if(B==="[")o=!0;else if(B==="]")o=!1;else if(!o&&B==="("&&l+2<i&&e[l+1]==="?"&&e[l+2]==="<"&&l+3<i&&!"=!>)".includes(e[l+3])){s+="(?P<",l+=3,r=!0;continue}let h=e.codePointAt(l),f=Y.charCount(h);s+=e.substring(l,l+f),l+=f}const c=r?s:e;return t.length>0?`(?${t})${c}`:c}},Pe,sc=(Pe=class{static quote(e){return Y.quoteMeta(e)}static quoteReplacement(e,t=!1){return Nu.quoteReplacement(e,t)}static translateRegExp(e){return Pw.translate(e)}static compile(e,t=0){let s=e;if((t&Pe.CASE_INSENSITIVE)!==0&&(s=`(?i)${s}`),(t&Pe.DOTALL)!==0&&(s=`(?s)${s}`),(t&Pe.MULTILINE)!==0&&(s=`(?m)${s}`),(t&-544)!==0)throw new uw("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let r=M.PERL;(t&Pe.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129),(t&Pe.LOOKBEHINDS)!==0&&(r|=M.LOOKBEHIND);const i=new Pe(e,t);return i.re2Input=Sw.compileImpl(s,r,(t&Pe.LONGEST_MATCH)!==0),i}static matches(e,t){return Pe.compile(e).testExact(t)}static initTest(e,t,s){if(e==null)throw new Error("pattern is null");if(s==null)throw new Error("re2 is null");const r=new Pe(e,t);return r.re2Input=s,r}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return Y.isByteArray(e)&&(e=ns.utf8(e)),new Nu(this,e)}test(e){return Y.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=Y.isByteArray(e)?Ie.fromUTF8(e):Ie.fromUTF16(e);return this.re2Input.executeEngine(t,0,M.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const s=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);s.push(o===null?void 0:o)}s.index=t.start(0),s.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);s.groups=i}else s.groups=void 0;return s}split(e,t=0){const s=this.matcher(e),r=[];let i=0,o=0;for(;s.find();){if(o===0&&s.end()===0){o=s.end();continue}if(t>0&&r.length===t-1)break;if(o===s.start()){if(t===0){i+=1,o=s.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(s.substring(o,s.start())),o=s.end()}if(t===0&&o!==s.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(s.substring(o,s.inputLength()))}return(t!==0||r.length===0&&!(o===s.inputLength()&&o>0))&&r.push(s.substring(o,s.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();){const s=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);s.push(o===null?void 0:o)}s.index=t.start(0),s.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);s.groups=i}else s.groups=void 0;yield s}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},G(Pe,"CASE_INSENSITIVE",Ds.CASE_INSENSITIVE),G(Pe,"DOTALL",Ds.DOTALL),G(Pe,"MULTILINE",Ds.MULTILINE),G(Pe,"DISABLE_UNICODE_GROUPS",Ds.DISABLE_UNICODE_GROUPS),G(Pe,"LONGEST_MATCH",Ds.LONGEST_MATCH),G(Pe,"LOOKBEHINDS",Ds.LOOKBEHINDS),Pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys="12.19.0";function kw(n){Ys=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new jl("@firebase/firestore");function vs(){return ds.logLevel}function K(n,...e){if(ds.logLevel<=ue.DEBUG){const t=e.map(rc);ds.debug(`Firestore (${Ys}): ${n}`,...t)}}function on(n,...e){if(ds.logLevel<=ue.ERROR){const t=e.map(rc);ds.error(`Firestore (${Ys}): ${n}`,...t)}}function Rt(n,...e){if(ds.logLevel<=ue.WARN){const t=e.map(rc);ds.warn(`Firestore (${Ys}): ${n}`,...t)}}function rc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,mf(n,s,t)}function mf(n,e,t){let s=`FIRESTORE (${Ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw on(s),new Error(s)}function W(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||mf(e,r,s)}function ae(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Ow(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Be(n,e){return n<e?-1:n>e?1:0}function ml(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return Wa(r)===Wa(i)?Be(r,i):Wa(r)?1:-1}return Be(n.length,e.length)}const Nw=55296,Lw=57343;function Wa(n){const e=n.charCodeAt(0);return e>=Nw&&e<=Lw}function Ms(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||je.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qi(this.root,e,this.comparator,!0)}}class qi{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??je.RED,this.left=r??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new je(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new oh(this.data.getIterator())}getIteratorFrom(e){return new oh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class oh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends ln{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="__name__";class Ot{constructor(e,t,s){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ot.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ot?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Ot.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Be(e.length,t.length)}static compareSegments(e,t){const s=Ot.isNumericId(e),r=Ot.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Ot.extractNumericId(e).compare(Ot.extractNumericId(t)):ml(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tn.fromString(e.substring(4,e.length-2))}}class Ce extends Ot{construct(e,t,s){return new Ce(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new J(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new Ce(t)}static emptyPath(){return new Ce([])}}const Fw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Et=class Ts extends Ot{construct(e,t,s){return new Ts(e,t,s)}static isValidIdentifier(e){return Fw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ts.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nt}static keyField(){return new Ts([Nt])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new J(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new J(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ts(t)}static emptyPath(){return new Ts([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new At([])}unionWith(e){let t=new Le(Et.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new At(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ms(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ps(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Mw(n,e){const t=[];for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.push(e(n[s],s,n));return t}function Ef(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ce.fromString(e))}static fromName(e){return new X(Ce.fromString(e).popFirst(5))}static empty(){return new X(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n,e,t){if(!t)throw new J(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Vw(n,e,t,s){if(e===!0&&s===!0)throw new J(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ah(n){if(!X.isDocumentKey(n))throw new J(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lh(n){if(X.isDocumentKey(n))throw new J(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function di(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ko(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function Vs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ko(n);throw new J(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,e){const t={typeString:n};return e&&(t.value=e),t}function fi(n,e){if(!di(n))throw new J(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new J(L.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=-62135596800,Bh=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Bh);return new me(t,s)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new J(L.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return me._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,s;if(e>=0n)t=Number(e/1000000000n),s=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(t=Number(e/1000000000n),s=0):(t=Number(e/1000000000n-1n),s=Number(r+1000000000n))}return new me(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ch)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bh}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new J(L.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fi(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ch;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Oe("string",me._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wf("Invalid base64 string: "+i):i}})(e);return new Fe(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Gw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(n){if(W(!!n,39018),typeof n=="string"){let e=0;const t=Gw.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function On(n){return typeof n=="string"?Fe.fromBase64String(n):Fe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="server_timestamp",Df="__type__",If="__previous_value__",bf="__local_write_time__";function zo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Df])==null?void 0:s.stringValue)===_f}function pi(n){const e=n.mapValue.fields[If];return zo(e)?pi(e):e}function Gs(n){const e=kn(n.mapValue.fields[bf].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t,s,r,i,o,l,c,B,h,f,C,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=B,this.isUsingEmulator=h,this.apiKey=f,this._customHeaders=C,this.grpcFlowControlWindow=_}}const Io="(default)";class $r{constructor(e,t){this.projectId=e,this.database=t||Io}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database===Io}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}function Uw(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new J(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=-1;function Qo(n){return n==null}function jr(n){return n===0&&1/n==-1/0}function $w(n){return typeof n=="number"&&Number.isInteger(n)&&!jr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function jw(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="__type__",Jw="__max__",Ki={mapValue:{}},Tf="__vector__",Jr="value",Hs={nullValue:"NULL_VALUE"},ut={booleanValue:!0},$e={booleanValue:!1};function Me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zo(n)?4:qw(n)?9007199254740991:bo(n)?10:11:te(28295,{value:n})}function vt(n,e,t){if(n===e)return!0;const s=Me(n);if(s!==Me(e))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Gs(n).isEqual(Gs(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=kn(i.timestampValue),c=kn(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,o){return On(i.bytesValue).isEqual(On(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,o){return xe(i.geoPointValue.latitude)===xe(o.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(o.geoPointValue.longitude)})(n,e);case 2:return(function(i,o,l){if("integerValue"in i&&"integerValue"in o)return xe(i.integerValue)===xe(o.integerValue);let c,B;if("doubleValue"in i&&"doubleValue"in o)c=xe(i.doubleValue),B=xe(o.doubleValue);else{if(!(l!=null&&l.i))return!1;c=xe(i.integerValue??i.doubleValue),B=xe(o.integerValue??o.doubleValue)}return c===B?!!(l!=null&&l.o)||jr(c)===jr(B):!!(l===void 0||l.u)&&isNaN(c)&&isNaN(B)})(n,e,t);case 9:return Ms(n.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>vt(r,i,t)));case 10:case 11:return(function(i,o,l){const c=i.mapValue.fields||{},B=o.mapValue.fields||{};if(Do(c)!==Do(B))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(B[h]===void 0||!vt(c[h],B[h],l)))return!1;return!0})(n,e,t);default:return te(52216,{left:n})}}function qr(n,e){return(n.values||[]).find((t=>vt(t,e)))!==void 0}function ht(n,e){if(n===e)return 0;const t=Me(n),s=Me(e);if(t!==s)return Be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=xe(i.integerValue||i.doubleValue),c=xe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return uh(n.timestampValue,e.timestampValue);case 4:return uh(Gs(n),Gs(e));case 5:return ml(n.stringValue,e.stringValue);case 6:return(function(i,o){const l=On(i),c=On(o);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let B=0;B<l.length&&B<c.length;B++){const h=Be(l[B],c[B]);if(h!==0)return h}return Be(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=Be(xe(i.latitude),xe(o.latitude));return l!==0?l:Be(xe(i.longitude),xe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return hh(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var C,_,D,P;const l=i.fields||{},c=o.fields||{},B=(C=l[Jr])==null?void 0:C.arrayValue,h=(_=c[Jr])==null?void 0:_.arrayValue,f=Be(((D=B==null?void 0:B.values)==null?void 0:D.length)||0,((P=h==null?void 0:h.values)==null?void 0:P.length)||0);return f!==0?f:hh(B,h)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Ki.mapValue&&o===Ki.mapValue)return 0;if(i===Ki.mapValue)return 1;if(o===Ki.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),B=o.fields||{},h=Object.keys(B);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const C=ml(c[f],h[f]);if(C!==0)return C;const _=ht(l[c[f]],B[h[f]]);if(_!==0)return _}return Be(c.length,h.length)})(n.mapValue,e.mapValue);default:throw te(23264,{l:t})}}function uh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Be(n,e);const t=kn(n),s=kn(e),r=Be(t.seconds,s.seconds);return r!==0?r:Be(t.nanos,s.nanos)}function hh(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=ht(t[r],s[r]);if(i!==void 0&&i!==0)return i}return Be(t.length,s.length)}function Us(n){return El(n)}function El(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=kn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return On(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=El(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${El(t.fields[o])}`;return r+"}"})(n.mapValue):te(61005,{value:n})}function oo(n){switch(Me(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pi(n);return e?16+oo(e):16;case 5:return 2*n.stringValue.length;case 6:return On(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+oo(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return ps(s.fields,((i,o)=>{r+=i.length+oo(o)})),r})(n.mapValue);default:throw te(13486,{value:n})}}function dh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Lt(n){return!!n&&"integerValue"in n}function ss(n){return!!n&&"doubleValue"in n}function Nn(n){return Lt(n)||ss(n)}function $s(n){return!!n&&"arrayValue"in n}function mt(n){return!!n&&"nullValue"in n}function dt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function os(n){return!!n&&"mapValue"in n}function bo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[vf])==null?void 0:s.stringValue)===Tf}function yl(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Jr])==null?void 0:t.arrayValue}function Sr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ps(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Sr(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sr(n.arrayValue.values[t]);return e}return{...n}}function qw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Jw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!os(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sr(t)}setAll(e){let t=Et.emptyPath(),s={},r=[];e.forEach(((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=l.popLast()}o?s[l.lastSegment()]=Sr(o):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());os(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];os(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){ps(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new gt(Sr(this.value))}}function Af(n){const e=[];return ps(n.fields,((t,s)=>{const r=new Et([t]);if(os(s)){const i=Af(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new At(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(e)?"-0":e}}function ac(n){return{integerValue:""+n}}function lc(n,e,t){return $w(e)?ac(e):Wo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this._=void 0}}function Kw(n,e,t){return n instanceof Kr?(function(r,i){const o={fields:{[Df]:{stringValue:_f},[bf]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&zo(i)&&(i=pi(i)),i&&(o.fields[If]=i),{mapValue:o}})(t,e):n instanceof zr?Rf(n,e):n instanceof Qr?Sf(n,e):n instanceof Wr?(function(r,i){const o=xf(r,i),l=Ao(o)+Ao(r.h);return Lt(o)&&Lt(r.h)?ac(l):Wo(r.serializer,l)})(n,e):n instanceof vo?(function(r,i){return fh(r,i,Math.min)})(n,e):n instanceof To?(function(r,i){return fh(r,i,Math.max)})(n,e):void 0}function zw(n,e,t){return n instanceof zr?Rf(n,e):n instanceof Qr?Sf(n,e):t}function xf(n,e){return n instanceof Wr?Nn(e)?e:{integerValue:0}:null}class Kr extends Yo{}class zr extends Yo{constructor(e){super(),this.elements=e}}function Rf(n,e){const t=Pf(e);for(const s of n.elements)t.some((r=>vt(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Qr extends Yo{constructor(e){super(),this.elements=e}}function Sf(n,e){let t=Pf(e);for(const s of n.elements)t=t.filter((r=>!vt(r,s)));return{arrayValue:{values:t}}}class cc extends Yo{constructor(e,t){super(),this.serializer=e,this.h=t}}class Wr extends cc{}class vo extends cc{}class To extends cc{}function fh(n,e,t){if(!Nn(e))return n.h;const s=t(Ao(e),Ao(n.h));return Lt(e)&&Lt(n.h)?ac(s):Wo(n.serializer,s)}function Ao(n){return xe(n.integerValue||n.doubleValue)}function Pf(n){return $s(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t){this.field=e,this.transform=t}}function Ww(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof zr&&r instanceof zr||s instanceof Qr&&r instanceof Qr?Ms(s.elements,r.elements,vt):s instanceof Wr&&r instanceof Wr||s instanceof vo&&r instanceof vo||s instanceof To&&r instanceof To?vt(s.h,r.h):s instanceof Kr&&r instanceof Kr})(n.transform,e.transform)}class Yw{constructor(e,t){this.version=e,this.transformResults=t}}class Vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ao(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xo{}function kf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Nf(n.key,Vt.none()):new Ci(n.key,n.data,Vt.none());{const t=n.data,s=gt.empty();let r=new Le(Et.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Cs(n.key,s,new At(r.toArray()),Vt.none())}}function Xw(n,e,t){n instanceof Ci?(function(r,i,o){const l=r.value.clone(),c=Ch(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Cs?(function(r,i,o){if(!ao(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ch(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Of(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Pr(n,e,t,s){return n instanceof Ci?(function(i,o,l,c){if(!ao(i.precondition,o))return l;const B=i.value.clone(),h=gh(i.fieldTransforms,c,o);return B.setAll(h),o.convertToFoundDocument(o.version,B).setHasLocalMutations(),null})(n,e,t,s):n instanceof Cs?(function(i,o,l,c){if(!ao(i.precondition,o))return l;const B=gh(i.fieldTransforms,c,o),h=o.data;return h.setAll(Of(i)),h.setAll(B),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(n,e,t,s):(function(i,o,l){return ao(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(n,e,t)}function Zw(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=xf(s.transform,r||null);i!=null&&(t===null&&(t=gt.empty()),t.set(s.field,i))}return t||null}function ph(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ms(s,r,((i,o)=>Ww(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ci extends Xo{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Cs extends Xo{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Of(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Ch(n,e,t){const s=new Map;W(n.length===t.length,32656,{T:t.length,P:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,zw(o,l,t[r]))}return s}function gh(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,Kw(i,o,e))}return s}class Nf extends Xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class e_ extends Xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t){this.position=e,this.inclusive=t}}function mh(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=X.comparator(X.fromName(o.referenceValue),t.key):s=ht(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Eh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{}class ke extends Lf{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new n_(e,t,s):t==="array-contains"?new i_(e,s):t==="in"?new o_(e,s):t==="not-in"?new a_(e,s):t==="array-contains-any"?new l_(e,s):new ke(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new s_(e,s):new r_(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ht(t,this.value)):t!==null&&Me(this.value)===Me(t)&&this.matchesComparison(ht(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Lf{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new St(e,t)}matches(e){return Ff(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function Ff(n){return n.op==="and"}function Mf(n){return t_(n)&&Ff(n)}function t_(n){for(const e of n.filters)if(e instanceof St)return!1;return!0}function wl(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+Us(n.value);if(Mf(n))return n.filters.map((e=>wl(e))).join(",");{const e=n.filters.map((t=>wl(t))).join(",");return`${n.op}(${e})`}}function Vf(n,e){return n instanceof ke?(function(s,r){return r instanceof ke&&s.op===r.op&&s.field.isEqual(r.field)&&vt(s.value,r.value)})(n,e):n instanceof St?(function(s,r){return r instanceof St&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,l)=>i&&Vf(o,r.filters[l])),!0):!1})(n,e):void te(19439)}function Gf(n){return n instanceof ke?(function(t){return`${t.field.canonicalString()} ${t.op} ${Us(t.value)}`})(n):n instanceof St?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gf).join(" ,")+"}"})(n):"Filter"}class n_ extends ke{constructor(e,t,s){super(e,t,s),this.key=X.fromName(s.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class s_ extends ke{constructor(e,t){super(e,"in",t),this.keys=Hf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class r_ extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Hf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Hf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>X.fromName(s.referenceValue)))}class i_ extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $s(t)&&qr(t.arrayValue,this.value)}}class o_ extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qr(this.value.arrayValue,t)}}class a_ extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qr(this.value.arrayValue,t)}}class l_ extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$s(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>qr(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t="asc"){this.field=e,this.dir=t}}function c_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new me(0,0))}static max(){return new oe(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t,s,r,i,o,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new We(e,0,oe.min(),oe.min(),oe.min(),gt.empty(),0)}static newFoundDocument(e,t,s,r){return new We(e,1,t,oe.min(),s,r,0)}static newNoDocument(e,t){return new We(e,2,t,oe.min(),oe.min(),gt.empty(),0)}static newUnknownDocument(e,t){return new We(e,3,t,oe.min(),oe.min(),gt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=-1;function B_(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=oe.fromTimestamp(s===1e9?new me(t+1,0):new me(t,s));return new Ln(r,X.empty(),e)}function u_(n){return new Ln(n.readTime,n.key,Xr)}class Ln{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ln(oe.min(),X.empty(),Xr)}static max(){return new Ln(oe.max(),X.empty(),Xr)}}function h_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:Be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.R=null}}function yh(n,e=null,t=[],s=[],r=null,i=null,o=null){return new d_(n,e,t,s,r,i,o)}function Uf(n){const e=ae(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>wl(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Qo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Us(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Us(s))).join(",")),e.R=t}return e.R}function $f(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!c_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Eh(n.startAt,e.startAt)&&Eh(n.endAt,e.endAt)}function es(n){return!!n.isCorePipeline}function jf(n){return!!n.path&&X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function f_(n,e,t,s,r,i,o,l){return new Xs(n,e,t,s,r,i,o,l)}function Jf(n){return new Xs(n)}function wh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function p_(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function qf(n){return n.collectionGroup!==null}function kr(n){const e=ae(n);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le(Et.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((B=>{B.isInequality()&&(l=l.add(B.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new Yr(i,s))})),t.has(Et.keyField().canonicalString())||e.A.push(new Yr(Et.keyField(),s))}return e.A}function Gt(n){const e=ae(n);return e.V||(e.V=C_(e,kr(n))),e.V}function C_(n,e){if(n.limitType==="F")return yh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Yr(r.field,i)}));const t=n.endAt?new xo(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new xo(n.startAt.position,n.startAt.inclusive):null;return yh(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function _l(n,e){const t=n.filters.concat([e]);return new Xs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function g_(n,e){const t=n.explicitOrderBy.concat([e]);return new Xs(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Ro(n,e,t){return new Xs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function m_(n,e){return $f(Gt(n),Gt(e))&&n.limitType===e.limitType}function Or(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>Gf(r))).join(", ")}]`),Qo(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Us(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Us(r))).join(",")),`Target(${s})`})(Gt(n))}; limitType=${n.limitType})`}function Zo(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):X.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of kr(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(o,l,c){const B=mh(o,l,c);return o.inclusive?B<=0:B<0})(s.startAt,kr(s),r)||s.endAt&&!(function(o,l,c){const B=mh(o,l,c);return o.inclusive?B>=0:B>0})(s.endAt,kr(s),r))})(n,e)}function Bc(n){return(e,t)=>{let s=!1;for(const r of kr(n)){const i=E_(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function E_(n,e,t){const s=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,o,l){const c=o.data.field(i),B=l.data.field(i);return c!==null&&B!==null?ht(c,B):te(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,de;function w_(n){switch(n){case L.OK:return te(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function Kf(n){if(n===void 0)return on("GRPC error has no .code"),L.UNKNOWN;switch(n){case Se.OK:return L.OK;case Se.CANCELLED:return L.CANCELLED;case Se.UNKNOWN:return L.UNKNOWN;case Se.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Se.INTERNAL:return L.INTERNAL;case Se.UNAVAILABLE:return L.UNAVAILABLE;case Se.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Se.NOT_FOUND:return L.NOT_FOUND;case Se.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Se.ABORTED:return L.ABORTED;case Se.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Se.DATA_LOSS:return L.DATA_LOSS;default:return te(39323,{code:n})}}(de=Se||(Se={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Ef(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new ve(X.comparator);function lt(){return __}const zf=new ve(X.comparator);function As(...n){let e=zf;for(const t of n)e=e.insert(t.key,t);return e}function Qf(n){let e=zf;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function _n(){return Nr()}function Wf(){return Nr()}function Nr(){return new gs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const D_=new ve(X.comparator),I_=new Le(X.comparator);function ce(...n){let e=I_;for(const t of n)e=e.add(t);return e}const b_=new Le(Be);function v_(){return b_}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new Tn([4294967295,4294967295],0);function _h(n){const e=T_().encode(n),t=new of;return t.update(e),new Uint8Array(t.digest())}function Dh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tn([t,s],0),new Tn([r,i],0)]}class uc{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new vr(`Invalid padding: ${t}`);if(s<0)throw new vr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new vr(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new vr(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=Tn.fromNumber(this.p)}v(e,t,s){let r=e.add(t.multiply(Tn.fromNumber(s)));return r.compare(A_)===1&&(r=new Tn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=_h(e),[s,r]=Dh(t);for(let i=0;i<this.hashCount;i++){const o=this.v(s,r,i);if(!this.D(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new uc(i,r,t);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.p===0)return;const t=_h(e),[s,r]=Dh(t);for(let i=0;i<this.hashCount;i++){const o=this.v(s,r,i);this.C(o)}}C(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,s,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,mi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new gi(oe.min(),r,new ve(Be),lt(),lt(),ce())}}class mi{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new mi(s,t,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,s,r){this.F=e,this.removedTargetIds=t,this.key=s,this.O=r}}class Yf{constructor(e,t){this.targetId=e,this.M=t}}class Xf{constructor(e,t,s=Fe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Ih{constructor(e){this.targetId=e,this.N=0,this.L=bh(),this.B=Fe.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=ce(),t=ce(),s=ce();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:te(38017,{changeType:i})}})),new mi(this.B,this.U,e,t,s)}G(){this.k=!1,this.L=bh()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,W(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const _r="WatchChangeAggregator";class x_{constructor(e){this.X=e,this.ee=new Map,this.te=lt(),this.ne=zi(),this.re=lt(),this.ie=zi(),this.se=new ve(Be)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,(t=>{const s=this.ee.get(t);if(s)switch(e.state){case 0:this.ce(t)&&s.K(e.resumeToken);break;case 1:s.Y(),s.q||s.G(),s.K(e.resumeToken);break;case 2:s.Y(),s.q||this.removeTarget(t);break;case 3:this.ce(t)&&(s.Z(),s.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),s.K(e.resumeToken));break;default:te(56790,{state:e.state})}else K(_r,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach(((s,r)=>{this.ce(r)&&t(r)}))}Ee(e){var t;return es(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:jf(e)}he(e){const t=e.targetId,s=e.M.count,r=this.Te(t);if(r){const i=r.target;if(this.Ee(i))if(s===0){const o=new X(es(i)?Ce.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,We.newNoDocument(o,oe.min()))}else W(s===1,20013,"Single document existence filter with count: "+s);else{const o=this.Pe(t);if(o!==s){const l=this.Ie(e),c=l?this.Re(l,e,o):1;if(c!==0){this.le(t);const B=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,B)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,l;try{o=On(s).toUint8Array()}catch(c){if(c instanceof wf)return Rt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new uc(o,r,i)}catch(c){return Rt(c instanceof vr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.p===0?null:l}Re(e,t,s){return t.M.count===s-this.de(e,t.targetId)?0:2}de(e,t){const s=this.X.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const o=this.X.Ve(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.ae(t,i,null),r++)})),r}fe(e){const t=new Map;this.ee.forEach(((i,o)=>{const l=this.Te(o);if(l){if(i.current&&this.Ee(l.target)){const c=es(l.target)?Ce.fromString(l.target.getPipelineDocuments()[0]):l.target.path,B=new X(c);this.me(B).has(o)||this.pe(o,B)||this.ae(o,B,We.newNoDocument(B,e))}i.$&&(t.set(o,i.W()),i.G())}}));let s=ce();this.ie.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const B=this.Te(c);return!B||B.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.te.forEach(((i,o)=>o.setReadTime(e))),this.re.forEach(((i,o)=>o.setReadTime(e)));const r=new gi(e,t,this.se,this.te,this.re,s);return this.te=lt(),this.ne=zi(),this.re=lt(),this.ie=zi(),this.se=new ve(Be),r}oe(e,t){const s=this.ee.get(e);if(!s||!this.ce(e))return void K(_r,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.pe(e,t.key)?2:0;s.j(t.key,r),es(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,s){const r=this.ee.get(e);r&&this.ce(e)?(this.pe(e,t)?r.j(t,1):r.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),s&&(es(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,s):this.te=this.te.insert(t,s))):K(_r,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const s=t.W();return this.X.getRemoteKeysForTarget(e).size+s.addedDocuments.size-s.removedDocuments.size}J(e){let t=this.ee.get(e);t||(K(_r,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Ih(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new Le(Be),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new Le(Be),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||K(_r,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new Ih(e)),this.X.getRemoteKeysForTarget(e).forEach((t=>{this.ae(e,t,null)}))}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function zi(){return new ve(X.comparator)}function bh(){return new ve(X.comparator)}const R_={asc:"ASCENDING",desc:"DESCENDING"},S_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P_={and:"AND",or:"OR"};class k_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dl(n,e){return n.useProto3Json||Qo(e)?e:{value:e}}function Lr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hc(n){const e=kn(n);return new me(e.seconds,e.nanos)}function Zf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function co(n,e){return Lr(n,e.toTimestamp())}function Ht(n){return W(!!n,49232),oe.fromTimestamp(hc(n))}function dc(n,e){return Il(n,e).canonicalString()}function Il(n,e){const t=(function(r){return new Ce(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ep(n){const e=Ce.fromString(n);return W(ip(e),10190,{key:e.toString()}),e}function So(n,e){return dc(n.databaseId,e.path)}function Ya(n,e){const t=ep(e);if(t.get(1)!==n.databaseId.projectId)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(np(t))}function tp(n,e){return dc(n.databaseId,e)}function O_(n){const e=ep(n);return e.length===4?Ce.emptyPath():np(e)}function bl(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function np(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function vh(n,e,t){return{name:So(n,e),fields:t.value.mapValue.fields}}function N_(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(B){return B==="NO_CHANGE"?0:B==="ADD"?1:B==="REMOVE"?2:B==="CURRENT"?3:B==="RESET"?4:te(39313,{state:B})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(B,h){return B.useProto3Json?(W(h===void 0||typeof h=="string",58123),Fe.fromBase64String(h||"")):(W(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Fe.fromUint8Array(h||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(B){const h=B.code===void 0?L.UNKNOWN:Kf(B.code);return new J(h,B.message||"")})(o);t=new Xf(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ya(n,s.document.name),i=Ht(s.document.updateTime),o=s.document.createTime?Ht(s.document.createTime):oe.min(),l=new gt({mapValue:{fields:s.document.fields}}),c=We.newFoundDocument(r,i,o,l),B=s.targetIds||[],h=s.removedTargetIds||[];t=new lo(B,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ya(n,s.document),i=s.readTime?Ht(s.readTime):oe.min(),o=We.newNoDocument(r,i),l=s.removedTargetIds||[];t=new lo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ya(n,s.document),i=s.removedTargetIds||[];t=new lo([],i,r,null)}else{if(!("filter"in e))return te(11601,{we:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new y_(r,i),l=s.targetId;t=new Yf(l,o)}}return t}function L_(n,e){let t;if(e instanceof Ci)t={update:vh(n,e.key,e.value)};else if(e instanceof Nf)t={delete:So(n,e.key)};else if(e instanceof Cs)t={update:vh(n,e.key,e.data),updateMask:q_(e.fieldMask)};else{if(!(e instanceof e_))return te(16599,{be:e.type});t={verify:So(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const l=o.transform;if(l instanceof Kr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Qr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Wr)return{fieldPath:o.field.canonicalString(),increment:l.h};if(l instanceof vo)return{fieldPath:o.field.canonicalString(),minimum:l.h};if(l instanceof To)return{fieldPath:o.field.canonicalString(),maximum:l.h};throw te(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:co(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(n,e.precondition)),t}function F_(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map((t=>(function(r,i){let o=r.updateTime?Ht(r.updateTime):Ht(i);return o.isEqual(oe.min())&&(o=Ht(i)),new Yw(o,r.transformResults||[])})(t,e)))):[]}function M_(n,e){return{documents:[tp(n,e.path)]}}function V_(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=tp(n,r);const i=(function(B){if(B.length!==0)return rp(St.create(B,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(B){if(B.length!==0)return B.map((h=>(function(C){return{field:xs(C.field),direction:$_(C.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Dl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(B){return{before:B.inclusive,values:B.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(B){return{before:!B.inclusive,values:B.position}})(e.endAt)),{Se:t,parent:r}}function G_(n){let e=O_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){W(s===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(f){const C=sp(f);return C instanceof St&&Mf(C)?C.getFilters():[C]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((C=>(function(D){return new Yr(Rs(D.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(C)))})(t.orderBy));let l=null;t.limit&&(l=(function(f){let C;return C=typeof f=="object"?f.value:f,Qo(C)?null:C})(t.limit));let c=null;t.startAt&&(c=(function(f){const C=!!f.before,_=f.values||[];return new xo(_,C)})(t.startAt));let B=null;return t.endAt&&(B=(function(f){const C=!f.before,_=f.values||[];return new xo(_,C)})(t.endAt)),f_(e,r,o,i,l,"F",c,B)}function H_(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function U_(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function sp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Rs(t.unaryFilter.field);return ke.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Rs(t.unaryFilter.field);return ke.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(t.unaryFilter.field);return ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(t.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ke.create(Rs(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return St.create(t.compositeFilter.filters.map((s=>sp(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(t.compositeFilter.op))})(n):te(30097,{filter:n})}function $_(n){return R_[n]}function j_(n){return S_[n]}function J_(n){return P_[n]}function xs(n){return{fieldPath:n.canonicalString()}}function Rs(n){return Et.fromServerFormat(n.fieldPath)}function rp(n){return n instanceof ke?(function(t){if(t.op==="=="){if(dt(t.value))return{unaryFilter:{field:xs(t.field),op:"IS_NAN"}};if(mt(t.value))return{unaryFilter:{field:xs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dt(t.value))return{unaryFilter:{field:xs(t.field),op:"IS_NOT_NAN"}};if(mt(t.value))return{unaryFilter:{field:xs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(t.field),op:j_(t.op),value:t.value}}})(n):n instanceof St?(function(t){const s=t.getFilters().map((r=>rp(r)));return s.length===1?s[0]:{compositeFilter:{op:J_(t.op),filters:s}}})(n):te(54877,{filter:n})}function q_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ip(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function op(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Zr(n,e){const t={fields:{}};return e.forEach(((s,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=s._toProto(n)})),{mapValue:t}}function ap(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n){return new k_(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this._byteString=e}static fromBase64String(e){try{return new It(Fe.fromBase64String(e))}catch(t){throw new J(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new It(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:It._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fi(e,It._jsonSchema))return It.fromBase64String(e.bytes)}}It._jsonSchemaVersion="firestore/bytes/1.0",It._jsonSchema={type:Oe("string",It._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function K_(){return new fc(Nt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(e){if(fi(e,Ut._jsonSchema))return new Ut(e.latitude,e.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:Oe("string",Ut._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ze.UNAUTHENTICATED)))}shutdown(){}}class Q_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class W_{constructor(e){this.De=e,this.currentUser=ze.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.Ce===void 0,42304);let s=this.xe;const r=c=>this.xe!==s?(s=this.xe,t(c)):Promise.resolve();let i=new An;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new An,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.De.getImmediate({optional:!0});c?l(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new An)}}),0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.xe!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(W(typeof s.accessToken=="string",31837,{Oe:s}),new lp(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{Me:e}),new ze(e)}}class Y_{constructor(e,t,s){this.Ne=e,this.Le=t,this.Be=s,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class X_{constructor(e,t,s){this.Ne=e,this.Le=t,this.Be=s}getToken(){return Promise.resolve(new Y_(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable((()=>t(ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Th{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z_{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,Dt(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){W(this.Ce===void 0,3512);const s=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?r(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.Ke)return Promise.resolve(new Th(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new Th(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function cp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{Qe(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="ConnectivityMonitor";class xh{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){K(Ah,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){K(Ah,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi=null;function vl(){return Qi===null?Qi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Qi++,"0x"+Qi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="RestConnection",tD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class nD{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${s}/databases/${r}`,this.tt=this.databaseId.database===Io?`project_id=${s}`:`project_id=${s}&database_id=${r}`}nt(e,t,s,r,i){const o=vl(),l=this.rt(e,t.toUriEncodedString());K(Xa,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(c,r,i);const{host:B}=new URL(l),h=li(B);return this.st(e,l,c,s,h).then((f=>(K(Xa,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw Rt(Xa,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",s),f}))}_t(e,t,s,r,i,o){return this.nt(e,t,s,r,i)}it(e,t,s){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ys})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r)),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}rt(e,t){const s=tD[e];let r=`${this.Xe}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection",Dr=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class ks extends nD{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!ks.yt){const e=Bf();Dr(e,cf.STAT_EVENT,(t=>{t.stat===fl.PROXY?K(Ke,"STAT_EVENT: detected buffering proxy"):t.stat===fl.NOPROXY&&K(Ke,"STAT_EVENT: detected no buffering proxy")})),ks.yt=!0}}st(e,t,s,r,i){const o=vl();return new Promise(((l,c)=>{const B=new af;B.setWithCredentials(!0),B.listenOnce(lf.COMPLETE,(()=>{try{switch(B.getLastErrorCode()){case io.NO_ERROR:const f=B.getResponseJson();K(Ke,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case io.TIMEOUT:K(Ke,`RPC '${e}' ${o} timed out`),c(new J(L.DEADLINE_EXCEEDED,"Request time out"));break;case io.HTTP_ERROR:const C=B.getStatus();if(K(Ke,`RPC '${e}' ${o} failed with status:`,C,"response text:",B.getResponseText()),C>0){let _=B.getResponseJson();Array.isArray(_)&&(_=_[0]);const D=_==null?void 0:_.error;if(D&&D.status&&D.message){const P=(function(H){const se=H.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(se)>=0?se:L.UNKNOWN})(D.status);c(new J(P,D.message))}else c(new J(L.UNKNOWN,"Server responded with status "+B.getStatus()))}else c(new J(L.UNAVAILABLE,"Connection failed."));break;default:te(9055,{wt:e,streamId:o,bt:B.getLastErrorCode(),St:B.getLastError()})}}finally{K(Ke,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);K(Ke,`RPC '${e}' ${o} sending request:`,r),B.send(t,"POST",h,s,15)}))}vt(e,t,s){const r=vl(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.it(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const B=i.join("");K(Ke,`Creating RPC '${e}' stream ${r}: ${B}`,l);const h=o.createWebChannel(B,l);this.Dt(h);let f=!1,C=!1;const _=new sD({ot:D=>{C?K(Ke,`Not sending because RPC '${e}' stream ${r} is closed:`,D):(f||(K(Ke,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),K(Ke,`RPC '${e}' stream ${r} sending:`,D),h.send(D))},ut:()=>h.close()});return Dr(h,br.EventType.OPEN,(()=>{C||(K(Ke,`RPC '${e}' stream ${r} transport opened.`),_.Rt())})),Dr(h,br.EventType.CLOSE,(()=>{C||(C=!0,K(Ke,`RPC '${e}' stream ${r} transport closed`),_.Vt(),this.xt(h))})),Dr(h,br.EventType.ERROR,(D=>{C||(C=!0,Rt(Ke,`RPC '${e}' stream ${r} transport errored. Name:`,D.name,"Message:",D.message),_.Vt(new J(L.UNAVAILABLE,"The operation could not be completed")))})),Dr(h,br.EventType.MESSAGE,(D=>{var P;if(!C){const V=D.data[0];W(!!V,16349);const H=V,se=(H==null?void 0:H.error)||((P=H[0])==null?void 0:P.error);if(se){K(Ke,`RPC '${e}' stream ${r} received error:`,se);const ge=se.status;let Te=(function(I){const E=Se[I];if(E!==void 0)return Kf(E)})(ge),Ae=se.message;ge==="NOT_FOUND"&&Ae.includes("database")&&Ae.includes("does not exist")&&Ae.includes(this.databaseId.database)&&Rt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Te===void 0&&(Te=L.INTERNAL,Ae="Unknown error status: "+ge+" with message "+se.message),C=!0,_.Vt(new J(Te,Ae)),h.close()}else K(Ke,`RPC '${e}' stream ${r} received:`,V),_.dt(V)}})),ks.gt(),setTimeout((()=>{_.At()}),0),_}terminate(){this.ft.forEach((e=>e.close())),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter((t=>t===e))}it(e,t,s){super.it(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return uf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(n){return new ks(n)}ks.yt=!1;class Bp{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=s,this.Ot=r,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),s=Math.max(0,Date.now()-this.Bt),r=Math.max(0,t-s);r>0&&K("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,r,(()=>(this.Bt=Date.now(),e()))),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="PersistentStream";class up{constructor(e,t,s,r,i,o,l,c){this.Ct=e,this.Kt=s,this.Qt=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new Bp(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,(()=>this.tn())))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(on(t.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.Wt===t&&this.un(s,r)}),(s=>{e((()=>{const r=new J(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.cn(r)}))}))}un(e,t){const s=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct((()=>{s((()=>this.listener.ct()))})),this.stream.Et((()=>{s((()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,(()=>(this.Yt()&&(this.state=3),Promise.resolve()))),this.listener.Et())))})),this.stream.Tt((r=>{s((()=>this.cn(r)))})),this.stream.onMessage((r=>{s((()=>++this.jt==1?this.hn(r):this.onNext(r)))}))}Zt(){this.state=5,this.Ht.kt((async()=>{this.state=0,this.start()}))}cn(e){return K(Rh,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget((()=>this.Wt===e?t():(K(Rh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iD extends up{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=N_(this.serializer,e),s=(function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?Ht(o.readTime):oe.min()})(e);return this.listener.Tn(t,s)}Pn(e){const t={};t.database=bl(this.serializer),t.addTarget=(function(i,o){let l;const c=o.target;if(l=es(c)?{pipelineQuery:U_(i,c)}:jf(c)?{documents:M_(i,c)}:{query:V_(i,c).Se},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Zf(i,o.resumeToken);const B=Dl(i,o.expectedCount);B!==null&&(l.expectedCount=B)}else if(o.snapshotVersion.compareTo(oe.min())>0){l.readTime=Lr(i,o.snapshotVersion.toTimestamp());const B=Dl(i,o.expectedCount);B!==null&&(l.expectedCount=B)}return l})(this.serializer,e);const s=H_(this.serializer,e);s&&(t.labels=s),this.nn(t)}In(e){const t={};t.database=bl(this.serializer),t.removeTarget=e,this.nn(t)}}class oD extends up{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=F_(e.writeResults,e.commitTime),s=Ht(e.commitTime);return this.listener.dn(s,t)}fn(){const e={};e.database=bl(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>L_(this.serializer,s)))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{}class lD extends aD{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.mn=!1}pn(){if(this.mn)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,s,r){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.nt(e,Il(t,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(L.UNKNOWN,i.toString())}))}_t(e,t,s,r,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection._t(e,Il(t,s),r,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(L.UNKNOWN,o.toString())}))}terminate(){this.mn=!0,this.connection.terminate()}}function cD(n,e,t,s){return new lD(n,e,t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD="ComponentProvider",Sh=new Map;function uD(n,e,t,s,r){return new Hw(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,cp(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s,r._customHeaders,r.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hp=41943040;class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(hp,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.gn(s),this.yn=s=>t.writeSequenceNumber(s))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}ta.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==hD)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):F.reject(t)}static resolve(e){return new F(((t,s)=>{t(e)}))}static reject(e){return new F(((t,s)=>{s(e)}))}static waitFor(e){return new F(((t,s)=>{let r=0,i=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++i,o&&i===r&&t()}),(c=>s(c)))})),o=!0,i===r&&t()}))}static or(e){let t=F.resolve(!1);for(const s of e)t=t.next((r=>r?F.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new F(((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const B=c;t(e[B]).next((h=>{o[B]=h,++l,l===i&&s(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new F(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function fD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function er(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="LruGarbageCollector",pD=1048576;function Oh([n,e],[t,s]){const r=Be(n,t);return r===0?Be(e,s):r}class CD{constructor(e){this.Yn=e,this.buffer=new Le(Oh),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Oh(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class gD{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){K(kh,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){er(t)?K(kh,"Ignoring IndexedDB error during garbage collection: ",t):await Zs(t)}await this.nr(3e5)}))}}class mD{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return F.resolve(ta.wn);const s=new CD(t);return this.rr.forEachTarget(e,(r=>s.er(r.sequenceNumber))).next((()=>this.rr.sr(e,(r=>s.er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.rr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Ph)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ph):this._r(e,t)))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let s,r,i,o,l,c,B;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r)))).next((f=>(s=f,l=Date.now(),this.removeTargets(e,s,t)))).next((f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((f=>(B=Date.now(),vs()<=ue.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(B-c)+`ms
Total Duration: ${B-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f}))))}}function ED(n,e){return new mD(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="firestore.googleapis.com",Nh=!0;class Lh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dp,this.ssl=Nh}else this.host=e.host,this.ssl=e.ssl??Nh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=hp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pD)throw new J(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Vw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cp(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new J(L.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(s,r){if(s===r)return!0;if(!s||!r)return!1;const i=Object.keys(s),o=Object.keys(r);if(i.length!==o.length)return!1;for(const l of i)if(s[l]!==r[l])return!1;return!0})(this._customHeaders,e._customHeaders)}}let na=class{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new z_;switch(s.type){case"firstParty":return new X_(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new J(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Sh.get(t);s&&(K(BD,"Removing Datastore"),Sh.delete(t),s.terminate())})(this),Promise.resolve()}};function yD(n,e,t,s={}){var B;n=Vs(n,na);const r=li(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&md(`https://${l}`),i.host!==dp&&i.host!==l&&Rt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:s};if(!cs(c,o)&&(n._setSettings(c),s.mockUserToken)){let h,f;if(typeof s.mockUserToken=="string")h=s.mockUserToken,f=ze.MOCK_USER;else{h=Og(s.mockUserToken,(B=n._app)==null?void 0:B.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new J(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ze(C)}n._authCredentials=new Q_(new lp(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $n(this.firestore,e,this._query)}}class Ne{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(fi(t,Ne._jsonSchema))return new Ne(e,s||null,new X(Ce.fromString(t.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:Oe("string",Ne._jsonSchemaVersion),referencePath:Oe("string")};class xn extends $n{constructor(e,t,s){super(e,t,Jf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new X(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function fp(n,e,...t){if(n=Bt(n),yf("collection","path",e),n instanceof na){const s=Ce.fromString(e,...t);return lh(s),new xn(n,null,s)}{if(!(n instanceof Ne||n instanceof xn))throw new J(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ce.fromString(e,...t));return lh(s),new xn(n.firestore,null,s)}}function pp(n,e,...t){if(n=Bt(n),arguments.length===1&&(e=ic.newId()),yf("doc","path",e),n instanceof na){const s=Ce.fromString(e,...t);return ah(s),new Ne(n,null,new X(s))}{if(!(n instanceof Ne||n instanceof xn))throw new J(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Ce.fromString(e,...t));return ah(s),new Ne(n.firestore,n instanceof xn?n.converter:null,new X(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fi(e,ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ct(e.vectorValues);throw new J(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ct._jsonSchemaVersion="firestore/vectorValue/1.0",ct._jsonSchema={type:Oe("string",ct._jsonSchemaVersion),vectorValues:Oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=/^__.*__$/;class _D{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ci(e,this.data,t,this.fieldTransforms)}}function Cp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{dataSource:n})}}class Cc{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Cc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Po(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Cp(this.dataSource)&&wD.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class DD{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ea(e)}createContext(e,t,s,r=!1){return new Cc({dataSource:e,methodName:t,targetDoc:s,path:Et.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gc(n){const e=n._freezeSettings(),t=ea(n._databaseId);return new DD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gp(n,e,t,s,r,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);wp("Data must be an object, but it was:",o,s);const l=mp(s,o);let c,B;if(i.merge)c=new At(o.fieldMask),B=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const C=Ei(e,f,t);if(!o.contains(C))throw new J(L.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);TD(h,C)||h.push(C)}c=new At(h),B=o.fieldTransforms.filter((f=>c.covers(f.field)))}else c=null,B=o.fieldTransforms;return new _D(new gt(l),c,B)}class mc extends pc{_toFieldTransform(e){return new Qw(e.path,new Kr)}isEqual(e){return e instanceof mc}}function ID(n,e,t,s=!1){return js(t,n.createContext(s?4:3,e))}function js(n,e,t){if(yp(n=Bt(n)))return wp("Unsupported field value:",e,n),mp(n,e);if(n instanceof pc)return(function(r,i){if(!Cp(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const o=[];let l=0;for(const c of r){let B=js(c,i.childContextForArray(l));B==null&&(B={nullValue:"NULL_VALUE"}),o.push(B),l++}return{arrayValue:{values:o}}})(n,e)}return(function(r,i,o){if((r=Bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lc(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=me.fromDate(r);return{timestampValue:Lr(i.serializer,l)}}if(r instanceof me){const l=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lr(i.serializer,l)}}if(Ep(r)){const l=me.fromInstant(r),c=new me(l.seconds,1e3*Math.floor(l.nanoseconds/1e3));return{timestampValue:Lr(i.serializer,c)}}if(r instanceof Ut)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof It)return{bytesValue:Zf(i.serializer,r._byteString)};if(r instanceof Ne){const l=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(l))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:dc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ct)return(function(c,B){const h=c instanceof ct?c.toArray():c;return{mapValue:{fields:{[vf]:{stringValue:Tf},[Jr]:{arrayValue:{values:h.map((C=>{if(typeof C!="number")throw B.createError("VectorValues must only contain numeric values.");return Wo(B.serializer,C)}))}}}}}})(r,i);if(op(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Ko(r)}`)})(n,e)}function mp(n,e){const t={};return Ef(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(n,((s,r)=>{const i=js(r,e.childContextForField(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Ep(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const e=n;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function yp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof Ut||n instanceof It||n instanceof Ne||n instanceof pc||n instanceof ct||Ep(n)||op(n))}function wp(n,e,t){if(!yp(t)||!di(t)){const s=Ko(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Ei(n,e,t){if((e=Bt(e))instanceof fc)return e._internalPath;if(typeof e=="string")return vD(n,e);throw Po("Field path arguments must be of type string or ",n,!1,void 0,t)}const bD=new RegExp("[~\\*/\\[\\]]");function vD(n,e,t){if(e.search(bD)>=0)throw Po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fc(...e.split("."))._internalPath}catch{throw Po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Po(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new J(L.INVALID_ARGUMENT,l+n+c)}function TD(n,e){return n.some((t=>t.isEqual(e)))}function _p(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const s=gt.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const o=e[r];let l;i.nestedOptions&&di(o)?l={mapValue:{fields:new Xe(i.nestedOptions).getOptionsProto(t,o)}}:o&&(l=js(o,t)??void 0),l&&s.set(Et.fromServerFormat(i.serverName),l)}}return s}getOptionsProto(e,t,s){const r=this._getKnownOptions(t,e);if(s){const i=new Map(Mw(s,((o,l)=>[Et.fromServerFormat(l),o!==void 0?js(o,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!di(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function xD(){return new mc("serverTimestamp")}function RD(n){return new ct(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n){let e;return n instanceof ms?n:(e=di(n)?ND(n):n instanceof Array?LD(n):Dp(n,void 0),e)}function Za(n){if(n instanceof ms)return n;if(n instanceof ct)return ei(n);if(Array.isArray(n))return ei(RD(n));throw new Error("Unsupported value: "+typeof n)}function Ec(n){return jw(n)?Bo(n):$(n)}class ms{constructor(){this._protoValueType="ProtoValue"}add(e){return new N("add",[this,$(e)],"add")}asBoolean(){if(this instanceof Fn)return this;if(this instanceof nr)return new bp(this);if(this instanceof tr)return new OD(this);if(this instanceof N)return new Ip(this);throw new J("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new N("subtract",[this,$(e)],"subtract")}multiply(e){return new N("multiply",[this,$(e)],"multiply")}divide(e){return new N("divide",[this,$(e)],"divide")}mod(e){return new N("mod",[this,$(e)],"mod")}equal(e){return new N("equal",[this,$(e)],"equal").asBoolean()}notEqual(e){return new N("not_equal",[this,$(e)],"notEqual").asBoolean()}lessThan(e){return new N("less_than",[this,$(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new N("less_than_or_equal",[this,$(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new N("greater_than",[this,$(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new N("greater_than_or_equal",[this,$(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const s=[e,...t].map((r=>$(r)));return new N("array_concat",[this,...s],"arrayConcat")}arrayContains(e){return new N("array_contains",[this,$(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Tr(e.map($),"arrayContainsAll"):e;return new N("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Tr(e.map($),"arrayContainsAny"):e;return new N("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new N("array_reverse",[this])}arrayLength(){return new N("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Tr(e.map($),"equalAny"):e;return new N("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Tr(e.map($),"notEqualAny"):e;return new N("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new N("exists",[this],"exists").asBoolean()}charLength(){return new N("char_length",[this],"charLength")}like(e){return new N("like",[this,$(e)],"like").asBoolean()}regexContains(e){return new N("regex_contains",[this,$(e)],"regexContains").asBoolean()}regexFind(e){return new N("regex_find",[this,$(e)],"regexFind")}regexFindAll(e){return new N("regex_find_all",[this,$(e)],"regexFindAll")}regexMatch(e){return new N("regex_match",[this,$(e)],"regexMatch").asBoolean()}stringContains(e){return new N("string_contains",[this,$(e)],"stringContains").asBoolean()}startsWith(e){return new N("starts_with",[this,$(e)],"startsWith").asBoolean()}endsWith(e){return new N("ends_with",[this,$(e)],"endsWith").asBoolean()}toLower(){return new N("to_lower",[this],"toLower")}toUpper(){return new N("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push($(e)),new N("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push($(e)),new N("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push($(e)),new N("rtrim",t,"rtrim")}type(){return new N("type",[this])}isType(e){return new N("is_type",[this,ei(e)],"isType").asBoolean()}stringConcat(e,...t){const s=[e,...t].map($);return new N("string_concat",[this,...s],"stringConcat")}stringIndexOf(e){return new N("string_index_of",[this,$(e)],"stringIndexOf")}stringRepeat(e){return new N("string_repeat",[this,$(e)],"stringRepeat")}stringReplaceAll(e,t){return new N("string_replace_all",[this,$(e),$(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new N("string_replace_one",[this,$(e),$(t)],"stringReplaceOne")}concat(e,...t){const s=[e,...t].map($);return new N("concat",[this,...s],"concat")}reverse(){return new N("reverse",[this],"reverse")}arrayFilter(e,t){return new N("array_filter",[this,$(e),t],"arrayFilter")}arrayTransform(e,t){return new N("array_transform",[this,$(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,s){return new N("array_transform",[this,$(e),$(t),s],"arrayTransformWithIndex")}arraySlice(e,t){const s=[this,$(e)];return t!==void 0&&s.push($(t)),new N("array_slice",s,"arraySlice")}arrayFirst(){return new N("array_first",[this],"arrayFirst")}arrayFirstN(e){return new N("array_first_n",[this,$(e)],"arrayFirstN")}arrayLast(){return new N("array_last",[this],"arrayLast")}arrayLastN(e){return new N("array_last_n",[this,$(e)],"arrayLastN")}arrayMaximum(){return new N("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new N("maximum_n",[this,$(e)],"arrayMaximumN")}arrayMinimum(){return new N("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new N("minimum_n",[this,$(e)],"arrayMinimumN")}arrayIndexOf(e){return new N("array_index_of",[this,$(e),$("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new N("array_index_of",[this,$(e),$("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new N("array_index_of_all",[this,$(e)],"arrayIndexOfAll")}byteLength(){return new N("byte_length",[this],"byteLength")}ceil(){return new N("ceil",[this])}floor(){return new N("floor",[this])}abs(){return new N("abs",[this])}exp(){return new N("exp",[this])}mapGet(e){return new N("map_get",[this,ei(e)],"mapGet")}mapSet(e,t,...s){const r=[this,$(e),$(t),...s.map($)];return new N("map_set",r,"mapSet")}mapKeys(){return new N("map_keys",[this],"mapKeys")}mapValues(){return new N("map_values",[this],"mapValues")}mapEntries(){return new N("map_entries",[this],"mapEntries")}getField(e){return new N("get_field",[this,$(e)],"get_field")}count(){return Ct._create("count",[this],"count")}sum(){return Ct._create("sum",[this],"sum")}average(){return Ct._create("average",[this],"average")}minimum(){return Ct._create("minimum",[this],"minimum")}maximum(){return Ct._create("maximum",[this],"maximum")}first(){return Ct._create("first",[this],"first")}last(){return Ct._create("last",[this],"last")}arrayAgg(){return Ct._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Ct._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Ct._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const s=[e,...t];return new N("maximum",[this,...s.map($)],"logicalMaximum")}logicalMinimum(e,...t){const s=[e,...t];return new N("minimum",[this,...s.map($)],"minimum")}vectorLength(){return new N("vector_length",[this],"vectorLength")}cosineDistance(e){return new N("cosine_distance",[this,Za(e)],"cosineDistance")}dotProduct(e){return new N("dot_product",[this,Za(e)],"dotProduct")}euclideanDistance(e){return new N("euclidean_distance",[this,Za(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new N("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new N("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new N("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new N("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new N("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new N("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new N("timestamp_add",[this,$(e),$(t)],"timestampAdd")}timestampSubtract(e,t){return new N("timestamp_subtract",[this,$(e),$(t)],"timestampSubtract")}timestampDiff(e,t){return new N("timestamp_diff",[this,Ec(e),$(t)],"timestampDiff")}timestampExtract(e,t){const s=[this,$(e)];return t&&s.push($(t)),new N("timestamp_extract",s,"timestampExtract")}documentId(){return new N("document_id",[this],"documentId")}parent(){return new N("parent",[this],"parent")}substring(e,t){const s=$(e);return new N("substring",t===void 0?[this,s]:[this,s,$(t)],"substring")}arrayGet(e){return new N("array_get",[this,$(e)],"arrayGet")}isError(){return new N("is_error",[this],"isError").asBoolean()}ifError(e){const t=new N("if_error",[this,$(e)],"ifError");return e instanceof Fn?t.asBoolean():t}isAbsent(){return new N("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new N("map_remove",[this,$(e)],"mapRemove")}mapMerge(e,...t){const s=$(e),r=t.map($);return new N("map_merge",[this,s,...r],"mapMerge")}pow(e){return new N("pow",[this,$(e)])}trunc(e){return e===void 0?new N("trunc",[this]):new N("trunc",[this,$(e)],"trunc")}round(e){return e===void 0?new N("round",[this]):new N("round",[this,$(e)],"round")}collectionId(){return new N("collection_id",[this])}length(){return new N("length",[this])}ln(){return new N("ln",[this])}sqrt(){return new N("sqrt",[this])}stringReverse(){return new N("string_reverse",[this])}ifAbsent(e){return new N("if_absent",[this,$(e)],"ifAbsent")}ifNull(e){return new N("if_null",[this,$(e)],"ifNull")}coalesce(e,...t){return new N("coalesce",[this,$(e),...t.map($)],"coalesce")}join(e){return new N("join",[this,$(e)],"join")}log10(){return new N("log10",[this])}arraySum(){return new N("sum",[this])}split(e){return new N("split",[this,$(e)])}timestampTruncate(e,t){const s=[this,$(e)];return t&&s.push($(t)),new N("timestamp_trunc",s)}ascending(){return FD(this)}descending(){return MD(this)}as(e){return new PD(this,e,"as")}}class Ct{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,s){const r=new Ct(e,t);return r._methodName=s,r}as(e){return new SD(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class SD{constructor(e,t,s){this.aggregate=e,this.alias=t,this._methodName=s}_readUserData(e){this.aggregate._readUserData(e)}}class PD{constructor(e,t,s){this.expr=e,this.alias=t,this._methodName=s,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Tr extends ms{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map((t=>t._toProto(e)))}}}_readUserData(e){this.cr.forEach((t=>t._readUserData(e)))}}class tr extends ms{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new N("geo_distance",[this,$(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Bo(n){return kD(n,"field")}function kD(n,e){return new tr(typeof n=="string"?Nt===n?K_()._internalPath:Ei("field",n):n._internalPath,e)}class nr extends ms{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new nr(e,void 0);return t._protoValue=e,t}_toProto(e){return W(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,AD(this._protoValue)||(this._protoValue=js(this.value,e))}}function ei(n,e){return Dp(n,"constant")}function Dp(n,e){const t=new nr(n,e);return typeof n=="boolean"?new bp(t):t}class N extends ms{constructor(e,t,s,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,s!==void 0&&(this._methodName=s),r!==void 0&&(this._options=r)}get _optionsUtil(){return new Xe({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((s=>s._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Fn extends ms{get _methodName(){return this._expr._methodName}countIf(){return Ct._create("count_if",[this],"countIf")}not(){return new N("not",[this],"not").asBoolean()}conditional(e,t){return new N("conditional",[this,e,t],"conditional")}ifError(e){const t=$(e),s=new N("if_error",[this,t],"ifError");return t instanceof Fn?s.asBoolean():s}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Ip extends Fn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class bp extends Fn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class OD extends Fn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function ND(n,e){const t=[];for(const s in n)if(Object.prototype.hasOwnProperty.call(n,s)){const r=n[s];t.push(ei(s)),t.push($(r))}return new N("map",t,"map")}function LD(n){return(function(t,s){return new N("array",t.map((r=>$(r))),s)})(n,"array")}function FD(n){return new vp(Ec(n),"ascending","ascending")}function MD(n){return new vp(Ec(n),"descending","descending")}class vp{constructor(e,t,s){this.expr=e,this.direction=t,this._methodName=s,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:ap(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Tp extends wt{get _name(){return"add_fields"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Zr(e,this.fields)]}}_readUserData(e){super._readUserData(e),Mn(this.fields,e)}}class Ap extends wt{get _name(){return"aggregate"}get _optionsUtil(){return new Xe({})}constructor(e,t,s){super(s),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Zr(e,this.accumulators),Zr(e,this.groups)]}}_readUserData(e){super._readUserData(e),Mn(this.groups,e),Mn(this.accumulators,e)}}class xp extends wt{get _name(){return"distinct"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Zr(e,this.groups)]}}_readUserData(e){super._readUserData(e),Mn(this.groups,e)}}class sa extends wt{get _name(){return"collection"}get _optionsUtil(){return new Xe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class ra extends wt{get _name(){return"collection_group"}get _optionsUtil(){return new Xe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class yc extends wt{get _name(){return"database"}get _optionsUtil(){return new Xe({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class wc extends wt{get _name(){return"documents"}get _optionsUtil(){return new Xe({})}constructor(e,t){if(super(t),!e||e.length===0)throw new J(L.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const s=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(s);if(r.size!==s.length)throw new J(L.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=s,this.Pr=r}_toProto(e){return{...super._toProto(e),args:this.Tr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class ia extends wt{get _name(){return"where"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Mn(this.condition,e)}}class fs extends wt{get _name(){return"limit"}get _optionsUtil(){return new Xe({})}constructor(e,t){W(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[lc(e,this.limit)]}}}class Fh extends wt{get _name(){return"offset"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[lc(e,this.offset)]}}}class VD extends wt{get _name(){return"select"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Zr(e,this.selections)]}}_readUserData(e){super._readUserData(e),Mn(this.selections,e)}}class en extends wt{get _name(){return"sort"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),Mn(this.orderings,e)}}class _c extends wt{get _name(){return"replace_with"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),ap(_c.Ir)]}}_readUserData(e){super._readUserData(e),Mn(this.map,e)}}_c.Ir="full_replace";function Mn(n,e){return _p(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,s,r){this._db=e,this.userDataReader=t,this._userDataWriter=s,this.stages=r}Vr(e,t){const s=this.userDataReader.createContext(3,e);return _p(t)?t._readUserData(s):Array.isArray(t)?t.forEach((r=>r._readUserData(s))):t.forEach((r=>r._readUserData(s))),t}where(e){const t=this.stages.map((s=>s));return this.Vr("where",e),t.push(new ia(e,{})),new Fr(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((s=>s));return t.push(new fs(e,{})),new Fr(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const s=this.stages.map((r=>r));return"orderings"in e?s.push(new en(this.Vr("sort",e.orderings),{})):s.push(new en(this.Vr("sort",[e,...t]),{})),new Fr(this._db,this.userDataReader,this._userDataWriter,s)}dr(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class tt{constructor(e,t,s){this.serializer=e,this.stages=t,this.listenOptions=s,this.isCorePipeline=!0}getPipelineCollection(){return oa(this)}getPipelineCollectionGroup(){return Dc(this)}getPipelineCollectionId(){return GD(this)}getPipelineDocuments(){return Tl(this)}getPipelineFlavor(){return(function(t){let s="exact";return t.stages.forEach(((r,i)=>{r._name!==xp.name&&r._name!==Ap.name||(s="keyless"),r._name===VD.name&&s==="exact"&&(s="augmented"),r._name===Tp.name&&i<t.stages.length-1&&s==="exact"&&(s="augmented")})),s})(this)}getPipelineSourceType(){return Rn(this)}}function Rn(n){const e=n.stages[0];return e instanceof sa||e instanceof ra||e instanceof yc||e instanceof wc?e._name:"unknown"}function oa(n){if(Rn(n)==="collection")return n.stages[0].hr}function Dc(n){if(Rn(n)==="collection_group")return n.stages[0].collectionId}function GD(n){switch(Rn(n)){case"collection":return Ce.fromString(oa(n)).lastSegment();case"collection_group":return Dc(n);default:return}}function Tl(n){if(Rn(n)==="documents")return n.stages[0].Tr}class v{constructor(e,t){this.type=e,this.value=t}static mr(){return new v("ERROR",void 0)}static pr(){return new v("UNSET",void 0)}static gr(){return new v("NULL",Hs)}static newValue(e){return mt(e)?new v("NULL",Hs):(function(s){return!!s&&"booleanValue"in s})(e)?new v("BOOLEAN",e):Lt(e)?new v("INT",e):ss(e)?new v("DOUBLE",e):(function(s){return!!s&&"timestampValue"in s&&!!s.timestampValue})(e)?new v("TIMESTAMP",e):(function(s){return!!s&&"stringValue"in s})(e)?new v("STRING",e):(function(s){return!!s&&"bytesValue"in s})(e)?new v("BYTES",e):e.referenceValue?new v("REFERENCE",e):e.geoPointValue?new v("GEO_POINT",e):$s(e)?new v("ARRAY",e):bo(e)?new v("VECTOR",e):os(e)?new v("MAP",e):new v("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Mr(n){if(!n.yr())return n.value}function Rp(n){return n instanceof Fn?n._expr:n}function ne(n){if((n=Rp(n))instanceof tr)return new HD(n);if(n instanceof nr)return new UD(n);if(n instanceof Tr)return new $D(n);if(n instanceof N){if(n.name==="add")return new qD(n);if(n.name==="subtract")return new KD(n);if(n.name==="multiply")return new zD(n);if(n.name==="divide")return new QD(n);if(n.name==="mod")return new WD(n);if(n.name==="and")return new YD(n);if(n.name==="equal")return new c0(n);if(n.name==="not_equal")return new B0(n);if(n.name==="less_than")return new u0(n);if(n.name==="less_than_or_equal")return new h0(n);if(n.name==="greater_than")return new d0(n);if(n.name==="greater_than_or_equal")return new f0(n);if(n.name==="array_concat")return new p0(n);if(n.name==="array_reverse")return new C0(n);if(n.name==="array_contains")return new g0(n);if(n.name==="array_contains_all")return new m0(n);if(n.name==="array_contains_any")return new E0(n);if(n.name==="array_length")return new y0(n);if(n.name==="array_element")return new w0(n);if(n.name==="equal_any")return new Sp(n);if(n.name==="not_equal_any")return new ZD(n);if(n.name==="is_nan")return new e0(n);if(n.name==="is_not_nan")return new t0(n);if(n.name==="is_null")return new n0(n);if(n.name==="is_not_null")return new s0(n);if(n.name==="is_error")return new r0(n);if(n.name==="exists")return new i0(n);if(n.name==="not")return new aa(n);if(n.name==="or")return new XD(n);if(n.name==="xor")return new Ic(n);if(n.name==="conditional")return new o0(n);if(n.name==="maximum")return new a0(n);if(n.name==="minimum")return new l0(n);if(n.name==="reverse")return new _0(n);if(n.name==="replace_first")return new D0(n);if(n.name==="replace_all")return new I0(n);if(n.name==="char_length")return new b0(n);if(n.name==="byte_length")return new v0(n);if(n.name==="like")return new T0(n);if(n.name==="regex_contains")return new A0(n);if(n.name==="regex_match")return new x0(n);if(n.name==="string_contains")return new R0(n);if(n.name==="starts_with")return new S0(n);if(n.name==="ends_with")return new P0(n);if(n.name==="to_lower")return new k0(n);if(n.name==="to_upper")return new O0(n);if(n.name==="trim")return new N0(n);if(n.name==="string_concat")return new L0(n);if(n.name==="map_get")return new F0(n);if(n.name==="cosine_distance")return new M0(n);if(n.name==="dot_product")return new V0(n);if(n.name==="euclidean_distance")return new G0(n);if(n.name==="vector_length")return new H0(n);if(n.name==="unix_micros_to_timestamp")return new q0(n);if(n.name==="timestamp_to_unix_micros")return new Q0(n);if(n.name==="unix_millis_to_timestamp")return new K0(n);if(n.name==="timestamp_to_unix_millis")return new W0(n);if(n.name==="unix_seconds_to_timestamp")return new z0(n);if(n.name==="timestamp_to_unix_seconds")return new Y0(n);if(n.name==="timestamp_add")return new X0(n);if(n.name==="timestamp_subtract")return new Z0(n)}throw new Error(`Unknown Expr : ${n}`)}class HD{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Nt)return v.newValue({referenceValue:So(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return v.newValue({timestampValue:co(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return v.newValue({timestampValue:co(e.serializer,t.createTime)});const s=t.data.field(this.expr._fieldPath);return s?zo(s)?v.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:co(i.serializer,oe.fromTimestamp(Gs(o)))};if(i.serverTimestampBehavior==="previous"){const l=pi(o);if(l)return l}return{nullValue:"NULL_VALUE"}})(e,s)):v.newValue(s):v.pr()}}class UD{constructor(e){this.expr=e}evaluate(e,t){return v.newValue(this.expr._getValue())}}class $D{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.cr.map((r=>ne(r).evaluate(e,t)));return s.some((r=>r.yr()))?v.mr():v.newValue({arrayValue:{values:s.map((r=>r.value))}})}}function Je(n){return ss(n)?Number(n.doubleValue):Number(n.integerValue)}function jt(n){return BigInt(n.integerValue)}const jD=BigInt("0x7fffffffffffffff"),JD=-BigInt("0x8000000000000000");class yi{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length>=2,24778);const s=ne(this.expr.params[0]).evaluate(e,t),r=ne(this.expr.params[1]).evaluate(e,t);let i=this.br(s,r);for(const o of this.expr.params.slice(2)){const l=ne(o).evaluate(e,t);i=this.br(i,l)}return i}br(e,t){if(e.yr()||t.yr())return v.mr();if(e.wr()||t.wr())return v.gr();const s=e.value,r=t.value;if(!ss(s)&&!Lt(s)||!ss(r)&&!Lt(r))return v.mr();if(ss(s)||ss(r)){const i=this.Sr(s,r);return i?v.newValue(i):v.mr()}if(Lt(s)&&Lt(r)){const i=this.vr(s,r);return i===void 0?v.mr():typeof i=="number"?v.newValue({doubleValue:i}):i<JD||i>jD?v.mr():v.newValue({integerValue:`${i}`})}return v.mr()}}function an(n,e){return Me(n)!==Me(e)?"TYPE_MISMATCH":dt(n)||dt(e)?"NOT_EQ":mt(n)&&mt(e)?"EQ":mt(n)||mt(e)?"NULL":$s(n)&&$s(e)?(function(s,r){var o,l,c;if(((o=s.values)==null?void 0:o.length)!==((l=r.values)==null?void 0:l.length))return"NOT_EQ";let i=!1;for(let B=0;B<(((c=s.values)==null?void 0:c.length)??0);B++){const h=s.values[B],f=r.values[B];switch(an(h,f)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:te(44609,{Dr:h,Cr:f})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):bo(n)&&bo(e)||os(n)&&os(e)?(function(s,r){const i=s.fields||{},o=r.fields||{};if(Do(i)!==Do(o))return"NOT_EQ";let l=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(an(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":l=!0}}return l?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(s,r){return vt(s,r,{u:!1,i:!0,o:!0})})(n,e)?"EQ":"NOT_EQ"}class qD extends yi{vr(e,t){return jt(e)+jt(t)}Sr(e,t){return{doubleValue:Je(e)+Je(t)}}}class KD extends yi{constructor(e){super(e),this.expr=e}vr(e,t){return jt(e)-jt(t)}Sr(e,t){return{doubleValue:Je(e)-Je(t)}}}class zD extends yi{constructor(e){super(e),this.expr=e}vr(e,t){return jt(e)*jt(t)}Sr(e,t){return{doubleValue:Je(e)*Je(t)}}}class QD extends yi{constructor(e){super(e),this.expr=e}vr(e,t){const s=jt(t);if(s!==BigInt(0))return jt(e)/s}Sr(e,t){const s=Je(t);return s===0?{doubleValue:jr(s)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Je(e)/s}}}class WD extends yi{constructor(e){super(e),this.expr=e}vr(e,t){const s=jt(t);if(s!==BigInt(0))return jt(e)%s}Sr(e,t){const s=Je(t);if(s!==0)return{doubleValue:Je(e)%s}}}class YD{constructor(e){this.expr=e}evaluate(e,t){var i;let s=!1,r=!1;for(const o of this.expr.params){const l=ne(o).evaluate(e,t);switch(l.type){case"BOOLEAN":if(!((i=l.value)!=null&&i.booleanValue))return v.newValue($e);break;case"NULL":r=!0;break;default:s=!0}}return s?v.mr():r?v.gr():v.newValue(ut)}}class aa{constructor(e){this.expr=e}evaluate(e,t){var r;W(this.expr.params.length===1,9634);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return v.newValue({booleanValue:!((r=s.value)!=null&&r.booleanValue)});case"NULL":return v.gr();default:return v.mr()}}}class XD{constructor(e){this.expr=e}evaluate(e,t){var i;let s=!1,r=!1;for(const o of this.expr.params){const l=ne(o).evaluate(e,t);switch(l.type){case"BOOLEAN":if((i=l.value)!=null&&i.booleanValue)return v.newValue(ut);break;case"NULL":r=!0;break;default:s=!0}}return s?v.mr():r?v.gr():v.newValue($e)}}class Ic{constructor(e){this.expr=e}evaluate(e,t){var i;let s=!1,r=!1;for(const o of this.expr.params){const l=ne(o).evaluate(e,t);switch(l.type){case"BOOLEAN":s=Ic.xor(s,!!((i=l.value)!=null&&i.booleanValue));break;case"NULL":r=!0;break;default:return v.mr()}}return r?v.gr():v.newValue({booleanValue:s})}static xor(e,t){return(e||t)&&!(e&&t)}}class Sp{constructor(e){this.expr=e}evaluate(e,t){var o,l;W(this.expr.params.length===2,55094);let s=!1;const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":s=!0;break;case"ERROR":case"UNSET":return v.mr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return v.mr()}if(s)return v.gr();for(const c of((l=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:l.values)??[])switch(mt(r.value)&&mt(c)?"EQ":an(r.value,c)){case"EQ":return v.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:te(44608,{value:r.value,candidate:c})}return s?v.gr():v.newValue($e)}}class ZD{constructor(e){this.expr=e}evaluate(e,t){return new aa(new N("not",[new N("equal_any",this.expr.params)])).evaluate(e,t)}}class e0{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,23322);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return v.newValue($e);case"DOUBLE":return v.newValue({booleanValue:isNaN(Je(s.value))});case"NULL":return v.gr();default:return v.mr()}}}class t0{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,50406),new aa(new N("not",[new N("is_nan",this.expr.params)])).evaluate(e,t)}}class n0{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,23123),ne(this.expr.params[0]).evaluate(e,t).type){case"NULL":return v.newValue(ut);case"UNSET":case"ERROR":return v.mr();default:return v.newValue($e)}}}class s0{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,23167),new aa(new N("not",[new N("is_null",this.expr.params)])).evaluate(e,t)}}class r0{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,5228),ne(this.expr.params[0]).evaluate(e,t).type==="ERROR"?v.newValue(ut):v.newValue($e)}}class i0{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,6877),ne(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return v.mr();case"UNSET":return v.newValue($e);default:return v.newValue(ut)}}}class o0{constructor(e){this.expr=e}evaluate(e,t){var r;W(this.expr.params.length===3,11706);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return(r=s.value)!=null&&r.booleanValue?ne(this.expr.params[1]).evaluate(e,t):ne(this.expr.params[2]).evaluate(e,t);case"NULL":return ne(this.expr.params[2]).evaluate(e,t);default:return v.mr()}}}class a0{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>ne(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||ht(i.value,r.value)>0?i:r}return r===void 0?v.gr():r}}class l0{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>ne(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||ht(i.value,r.value)<0?i:r}return r===void 0?v.gr():r}}class sr{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return v.mr()}const r=ne(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return v.mr()}return this.Fr(s,r)}}class c0 extends sr{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return v.newValue(ut);if(e.wr()||t.wr()||dt(e.value)||dt(t.value)||Me(e.value)!==Me(t.value))return v.newValue($e);switch(an(e.value,t.value)){case"EQ":return v.newValue(ut);case"NOT_EQ":return v.newValue($e);case"NULL":return v.gr();default:te(44615,{left:e,right:t})}}}class B0 extends sr{constructor(e){super(e),this.expr=e}Fr(e,t){switch(an(e.value,t.value)){case"EQ":return v.newValue($e);case"NOT_EQ":case"TYPE_MISMATCH":return v.newValue(ut);case"NULL":return v.gr();default:te(44614,{left:e,right:t})}}}class u0 extends sr{constructor(e){super(e),this.expr=e}Fr(e,t){return Me(e.value)!==Me(t.value)||dt(e.value)||dt(t.value)?v.newValue($e):v.newValue({booleanValue:ht(e.value,t.value)<0})}}class h0 extends sr{constructor(e){super(e),this.expr=e}Fr(e,t){return Me(e.value)!==Me(t.value)||dt(e.value)||dt(t.value)?v.newValue($e):an(e.value,t.value)==="EQ"?v.newValue(ut):v.newValue({booleanValue:ht(e.value,t.value)<0})}}class d0 extends sr{constructor(e){super(e),this.expr=e}Fr(e,t){return Me(e.value)!==Me(t.value)||dt(e.value)||dt(t.value)?v.newValue($e):v.newValue({booleanValue:ht(e.value,t.value)>0})}}class f0 extends sr{constructor(e){super(e),this.expr=e}Fr(e,t){return Me(e.value)!==Me(t.value)||dt(e.value)||dt(t.value)?v.newValue($e):an(e.value,t.value)==="EQ"?v.newValue(ut):v.newValue({booleanValue:ht(e.value,t.value)>0})}}class p0{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class C0{constructor(e){this.expr=e}evaluate(e,t){var r;W(this.expr.params.length===1,216);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return v.gr();case"ARRAY":{const i=((r=s.value.arrayValue)==null?void 0:r.values)??[];return v.newValue({arrayValue:{values:[...i].reverse()}})}default:return v.mr()}}}class g0{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===2,52884),new Sp(new N("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class m0{constructor(e){this.expr=e}evaluate(e,t){var c,B,h,f;W(this.expr.params.length===2,1392);let s=!1;const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return v.mr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return v.mr()}if(s)return v.gr();const o=((B=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:B.values)??[],l=((f=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const C of o){let _=!1;s=!1;for(const D of l){switch(mt(C)&&mt(D)?"EQ":an(C,D)){case"EQ":_=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:te(44613,{value:D,search:C})}if(_)break}if(!_)return v.newValue($e)}return v.newValue(ut)}}class E0{constructor(e){this.expr=e}evaluate(e,t){var c,B,h,f;W(this.expr.params.length===2,2680);let s=!1;const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return v.mr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return v.mr()}if(s)return v.gr();const o=((B=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:B.values)??[],l=((f=(h=r.value)==null?void 0:h.arrayValue)==null?void 0:f.values)??[];for(const C of l)for(const _ of o)switch(mt(C)&&mt(_)?"EQ":an(C,_)){case"EQ":return v.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:te(60403,{value:C,search:_})}return s?v.gr():v.newValue($e)}}class y0{constructor(e){this.expr=e}evaluate(e,t){var r,i,o;W(this.expr.params.length===1,38605);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return v.gr();case"ARRAY":return v.newValue({integerValue:`${((o=(i=(r=s.value)==null?void 0:r.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return v.mr()}}}class w0{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class _0{constructor(e){this.expr=e}evaluate(e,t){var r,i;W(this.expr.params.length===1,1508);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return v.gr();case"BYTES":{const o=(r=s.value)==null?void 0:r.bytesValue;if(typeof o=="string"){const l=Fe.fromBase64String(o).toUint8Array();return l.reverse(),v.newValue({bytesValue:Fe.fromUint8Array(l).toBase64()})}return v.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=s.value)==null?void 0:i.stringValue,l=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),c=Array.from(l,(B=>B.segment)).reverse();return v.newValue({stringValue:c.join("")})}default:return v.mr()}}}class D0{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class I0{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class b0{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,19400);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return v.gr();case"STRING":{const r=(function(o){let l=0;for(let c=0;c<o.length;c++){const B=o.codePointAt(c);if(B===void 0)return;if(B<=65535)if(B>=55296&&B<=57343)if(B<=56319){const h=o.codePointAt(c+1);h!==void 0&&h>=56320&&h<=57343?(l+=1,c++):l+=1}else l+=1;else l+=1;else{if(!(B<=1114111))return;l+=1,c++}}return l})(s.value.stringValue);return r===void 0?v.mr():v.newValue({integerValue:r})}default:return v.mr()}}}class v0{constructor(e){this.expr=e}evaluate(e,t){var r,i;W(this.expr.params.length===1,8486);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BYTES":{const o=(r=s.value)==null?void 0:r.bytesValue;return typeof o=="string"?v.newValue({integerValue:Fe.fromBase64String(o).toUint8Array().length}):v.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(c){let B=0;for(let h=0;h<c.length;h++){const f=c.codePointAt(h);if(f===void 0)return;if(f>=55296&&f<=57343){if(!(f<=56319))return;{const C=c.codePointAt(h+1);if(C===void 0||!(C>=56320&&C<=57343))return;B+=4,h++}}else if(f<=127)B+=1;else if(f<=2047)B+=2;else if(f<=65535)B+=3;else{if(!(f<=1114111))return;B+=4,h++}}return B})((i=s.value)==null?void 0:i.stringValue);return o===void 0?v.mr():v.newValue({integerValue:o})}case"NULL":return v.gr();default:return v.mr()}}}class rr{constructor(e){this.expr=e}evaluate(e,t){var o,l;W(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let s=!1;const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":s=!0;break;default:return v.mr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":s=!0;break;default:return v.mr()}return s?v.gr():this.Or((o=r.value)==null?void 0:o.stringValue,(l=i.value)==null?void 0:l.stringValue)}}class T0 extends rr{Or(e,t){try{const s=(function(o){let l="";for(let c=0;c<o.length;c++){const B=o.charAt(c);switch(B){case"_":l+=".";break;case"%":l+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":l+="\\"+B;break;default:l+=B}}return"^"+l+"$"})(t),r=sc.compile(s);return v.newValue({booleanValue:r.matches(e)})}catch(s){return Rt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${s}`),v.mr()}}}class A0 extends rr{Or(e,t){try{const s=sc.compile(t);return v.newValue({booleanValue:s.test(e)})}catch{return Rt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),v.mr()}}}class x0 extends rr{Or(e,t){try{return v.newValue({booleanValue:sc.compile(t).matches(e)})}catch{return Rt(`Invalid regex pattern found in regex_match: ${t}, returning error`),v.mr()}}}class R0 extends rr{Or(e,t){return v.newValue({booleanValue:e.includes(t)})}}class S0 extends rr{Or(e,t){return v.newValue({booleanValue:e.startsWith(t)})}}class P0 extends rr{Or(e,t){return v.newValue({booleanValue:e.endsWith(t)})}}class k0{constructor(e){this.expr=e}evaluate(e,t){var r,i;W(this.expr.params.length===1,29079);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return v.newValue({stringValue:(i=(r=s.value)==null?void 0:r.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return v.gr();default:return v.mr()}}}class O0{constructor(e){this.expr=e}evaluate(e,t){var r,i;W(this.expr.params.length===1,60487);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return v.newValue({stringValue:(i=(r=s.value)==null?void 0:r.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return v.gr();default:return v.mr()}}}class N0{constructor(e){this.expr=e}evaluate(e,t){var r,i;W(this.expr.params.length===1,28544);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return v.newValue({stringValue:(i=(r=s.value)==null?void 0:r.stringValue)==null?void 0:i.trim()});case"NULL":return v.gr();default:return v.mr()}}}class L0{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((o=>ne(o).evaluate(e,t)));let r="",i=!1;for(const o of s)switch(o.type){case"STRING":r+=o.value.stringValue;break;case"NULL":i=!0;break;default:return v.mr()}return i?v.gr():v.newValue({stringValue:r})}}class F0{constructor(e){this.expr=e}evaluate(e,t){var o,l,c,B;W(this.expr.params.length===2,4483);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"UNSET":return v.pr();case"MAP":break;default:return v.mr()}const r=ne(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return v.mr();const i=(B=(l=(o=s.value)==null?void 0:o.mapValue)==null?void 0:l.fields)==null?void 0:B[(c=r.value)==null?void 0:c.stringValue];return i===void 0?v.pr():v.newValue(i)}}class bc{constructor(e){this.expr=e}evaluate(e,t){var B,h;W(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let s=!1;const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":s=!0;break;default:return v.mr()}const i=ne(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":s=!0;break;default:return v.mr()}if(s)return v.gr();const o=yl(r.value),l=yl(i.value);if(o===void 0||l===void 0||((B=o.values)==null?void 0:B.length)!==((h=l.values)==null?void 0:h.length))return v.mr();const c=this.Mr(o,l);return c===void 0||isNaN(c)?v.mr():v.newValue({doubleValue:c})}}class M0 extends bc{Mr(e,t){const s=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(s.length===0)return;let i=0,o=0,l=0;for(let B=0;B<s.length;B++){if(!Nn(s[B])||!Nn(r[B]))return;const h=Je(s[B]),f=Je(r[B]);i+=h*f,o+=h*h,l+=f*f}const c=Math.sqrt(o)*Math.sqrt(l);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class V0 extends bc{Mr(e,t){const s=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(s.length===0)return 0;let i=0;for(let o=0;o<s.length;o++){if(!Nn(s[o])||!Nn(r[o]))return;i+=Je(s[o])*Je(r[o])}return i}}class G0 extends bc{Mr(e,t){const s=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(s.length===0)return 0;let i=0;for(let o=0;o<s.length;o++){if(!Nn(s[o])||!Nn(r[o]))return;const l=Je(s[o]),c=Je(r[o]);i+=Math.pow(l-c,2)}return Math.sqrt(i)}}class H0{constructor(e){this.expr=e}evaluate(e,t){var r;W(this.expr.params.length===1,39044);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":{const i=yl(s.value);return v.newValue({integerValue:((r=i==null?void 0:i.values)==null?void 0:r.length)??0})}case"NULL":return v.gr();default:return v.mr()}}}const ti=BigInt(-62135596800),ni=BigInt(253402300799),ko=BigInt(1e3),Sn=BigInt(1e6),U0=ti*ko,$0=ni*ko+BigInt(999),j0=ti*Sn,J0=ni*Sn+BigInt(999999);function vc(n){return n>=j0&&n<=J0}function Pp(n){return n>=ti&&n<=ni}function si(n,e){const t=BigInt(n);return!(t<ti||t>ni)&&!(e<0||e>=1e9)&&(t!==ti||e===0)&&!(t===ni&&e>999999999)}function kp(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Tc(n){return BigInt(n.seconds)*Sn+BigInt(Math.trunc(n.nanoseconds/1e3))}class Ac{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return this.toTimestamp(BigInt(s.value.integerValue));case"NULL":return v.gr();default:return v.mr()}}}class q0 extends Ac{toTimestamp(e){if(!vc(e))return v.mr();let t=Number(e/Sn),s=Number(e%Sn*BigInt(1e3));const r=kp(t,s);return t=r.seconds,s=r.nanos,si(t,s)?v.newValue({timestampValue:{seconds:t,nanos:s}}):v.mr()}}class K0 extends Ac{toTimestamp(e){if(!(function(o){return o>=U0&&o<=$0})(e))return v.mr();let t=Number(e/ko),s=Number(e%ko*BigInt(1e6));const r=kp(t,s);return t=r.seconds,s=r.nanos,si(t,s)?v.newValue({timestampValue:{seconds:t,nanos:s}}):v.mr()}}class z0 extends Ac{toTimestamp(e){if(!Pp(e))return v.mr();const t=Number(e);return v.newValue({timestampValue:{seconds:t,nanos:0}})}}class xc{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const s=ne(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":return v.gr();default:return v.mr()}const r=hc(s.value.timestampValue);return si(r.seconds,r.nanoseconds)?this.Nr(r):v.mr()}}class Q0 extends xc{Nr(e){const t=Tc(e);return vc(t)?v.newValue({integerValue:`${t.toString()}`}):v.mr()}}class W0 extends xc{Nr(e){const t=Tc(e),s=t/BigInt(1e3),r=t%BigInt(1e3);return s>BigInt(0)||r===BigInt(0)?v.newValue({integerValue:s.toString()}):v.newValue({integerValue:(s-BigInt(1)).toString()})}}class Y0 extends xc{Nr(e){const t=BigInt(e.seconds);return Pp(t)?v.newValue({integerValue:t.toString()}):v.mr()}}class Op{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let s=!1;const r=ne(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":s=!0;break;default:return v.mr()}const i=ne(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(se){switch(se){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return v.mr();break;case"NULL":s=!0;break;default:return v.mr()}const l=ne(this.expr.params[2]).evaluate(e,t);switch(l.type){case"INT":break;case"NULL":s=!0;break;default:return v.mr()}if(s)return v.gr();const c=BigInt(l.value.integerValue);let B;try{switch(o){case"microsecond":B=c;break;case"millisecond":B=c*BigInt(1e3);break;case"second":B=c*BigInt(1e6);break;case"minute":B=c*BigInt(6e7);break;case"hour":B=c*BigInt(36e8);break;case"day":B=c*BigInt(864e8);break;default:return v.mr()}if(o!=="microsecond"&&c!==BigInt(0)&&B/c!==BigInt(this.Lr(o)))return v.mr()}catch(H){return Rt(`Error during timestamp arithmetic: ${H}`),v.mr()}const h=hc(r.value.timestampValue);if(!si(h.seconds,h.nanoseconds))return v.mr();const f=Tc(h),C=this.Br(f,B);if(!vc(C))return v.mr();const _=Number(C/Sn),D=C%Sn,P=Number((D<0?D+Sn:D)*BigInt(1e3)),V=D<0?_-1:_;return si(V,P)?v.newValue({timestampValue:{seconds:V,nanos:P}}):v.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class X0 extends Op{Br(e,t){return e+t}}class Z0 extends Op{Br(e,t){return e-t}}function ri(n){if((n=Rp(n))instanceof tr)return`fld(${n.fieldName})`;if(n instanceof nr)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ne?`ref(${t.path})`:t instanceof ct?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof N)return`fn(${n.name},[${n.params.map(ri).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.cr.map(ri).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function eI(n){if(n instanceof Tp)return`${n._name}(${Wi(n.fields)})`;if(n instanceof Ap){let e=`${n._name}(${Wi(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Wi(n.groups)})`),e}if(n instanceof xp)return`${n._name}(${Wi(n.groups)})`;if(n instanceof sa)return`${n._name}(${n.hr})`;if(n instanceof ra)return`${n._name}(${n.collectionId})`;if(n instanceof yc)return`${n._name}()`;if(n instanceof wc)return`${n._name}(${n.Tr.sort()})`;if(n instanceof ia)return`${n._name}(${ri(n.condition)})`;if(n instanceof fs)return`${n._name}(${n.limit})`;if(n instanceof en)return`${n._name}(${(function(t){return t.map((s=>`${ri(s.expr)}${s.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Wi(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${ri(t)}`)).join(",")}`}function nn(n){return n.stages.map((e=>eI(e))).join("|")}function Np(n,e){return nn(n)===nn(e)}function Ge(n){return n instanceof tt}function Mh(n){return Ge(n)?nn(n):Or(n)}function Lp(n){return Ge(n)?nn(n):(function(t){return`${Uf(Gt(t))}|lt:${t.limitType}`})(n)}function la(n,e){return n instanceof tt&&e instanceof tt?Np(n,e):!(n instanceof tt&&!(e instanceof tt)||!(n instanceof tt)&&e instanceof tt)&&m_(n,e)}function Fp(n){return es(n)?nn(n):Uf(n)}function Mp(n,e){return n instanceof tt&&e instanceof tt?Np(n,e):!(n instanceof tt&&!(e instanceof tt)||!(n instanceof tt)&&e instanceof tt)&&$f(n,e)}function tI(n,e){const t=(function(r){let i=!1;const o=[];for(const l of r)if(l instanceof en)if(i=!0,l.orderings.some((c=>c.expr instanceof tr&&c.expr.fieldName===Nt)))o.push(l);else{const c=l.orderings.map((B=>B));c.push(Bo(Nt).ascending()),o.push(new en(c,{}))}else l instanceof fs&&(i||(o.push(new en([Bo(Nt).ascending()],{})),i=!0)),o.push(l);return i||o.push(new en([Bo(Nt).ascending()],{})),o})(n.stages);if(n.userDataReader){const s=n.userDataReader.createContext(3,"toCorePipeline");t.forEach((r=>r._readUserData(s)))}return new tt(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Xw(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Pr(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Pr(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Wf();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(r.key)?null:l;const c=kf(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ce())}isEqual(e){return this.batchId===e.batchId&&Ms(this.mutations,e.mutations,((t,s)=>ph(t,s)))&&Ms(this.baseMutations,e.baseMutations,((t,s)=>ph(t,s)))}}class Rc{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){W(e.mutations.length===s.length,58842,{Ur:e.mutations.length,kr:s.length});let r=(function(){return D_})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Rc(e,t,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="";function sI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Vh(e)),e=rI(n.get(t),e);return Vh(e)}function rI(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Vp:t+="";break;default:t+=i}}return t}function Vh(n){return n+Vp+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,s,r,i=oe.min(),o=oe.min(),l=Fe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.$r=e}}function aI(n){const e=G_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ro(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.Zi=new cI}addToCollectionParentIndex(e,t){return this.Zi.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(Ln.min())}updateCollectionGroup(e,t,s){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class cI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Le(Ce.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Le(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new Vn(0)}static bs(){return new Vn(-1)}}// Copyright 2024 Google LLC* @license
function Gp(n,e){var s;let t=e;for(const r of n.stages)t=uI({serializer:n.serializer,serverTimestampBehavior:(s=n.listenOptions)==null?void 0:s.serverTimestampBehavior},r,t);return t}function ca(n,e){return Gp(n,[e]).length>0}function BI(n,e){return Ge(n)?ca(n,e):Zo(n,e)}function uI(n,e,t){if(e instanceof sa)return(function(r,i,o){return o.filter((l=>l.isFoundDocument()&&`/${l.key.getCollectionPath().canonicalString()}`===i.hr))})(0,e,t);if(e instanceof ia)return(function(r,i,o){return o.filter((l=>{const c=Mr(ne(i.condition).evaluate(r,l));return c!==void 0&&vt(c,ut)}))})(n,e,t);if(e instanceof ra)return(function(r,i,o){return o.filter((l=>l.isFoundDocument()&&l.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof yc)return(function(r,i,o){return o.filter((l=>l.isFoundDocument()))})(0,0,t);if(e instanceof wc)return(function(r,i,o){return o.filter((l=>l.isFoundDocument()&&i.Pr.has(l.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof fs)return(function(r,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof en)return(function(r,i,o){const l=i.orderings.map((c=>({Ms:ne(c.expr),direction:c.direction})));return[...o].sort(((c,B)=>{for(const{Ms:h,direction:f}of l){const C=Mr(h.evaluate(r,c)),_=Mr(h.evaluate(r,B)),D=ht(C??Hs,_??Hs);if(D!==0)return f==="ascending"?D:-D}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Al(n){const e=(function(s){for(let r=s.stages.length-1;r>=0;r--){const i=s.stages[r];if(i instanceof en)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,s)=>{for(const r of e){const i=Mr(ne(r.expr).evaluate({serializer:n.serializer},t)),o=Mr(ne(r.expr).evaluate({serializer:n.serializer},s)),l=ht(i||Hs,o||Hs);if(l!==0)return r.direction==="ascending"?l:-l}return 0}}function el(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof fs)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.changes=new gs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?F.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Pr(s.mutation,r,At.empty(),me.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ce()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ce()){const r=_n();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let o=As();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=_n();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ce())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,l)=>{t.set(o,l)}))}))}computeViews(e,t,s,r){let i=lt();const o=Nr(),l=(function(){return Nr()})();return t.forEach(((c,B)=>{const h=s.get(B.key);r.has(B.key)&&(h===void 0||h.mutation instanceof Cs)?i=i.insert(B.key,B):h!==void 0?(o.set(B.key,h.mutation.getFieldMask()),Pr(h.mutation,B,h.mutation.getFieldMask(),me.now())):o.set(B.key,At.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((B,h)=>o.set(B,h))),t.forEach(((B,h)=>l.set(B,new dI(h,o.get(B)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=Nr();let r=new ve(((o,l)=>o-l)),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const l of o)l.keys().forEach((c=>{const B=t.get(c);if(B===null)return;let h=s.get(c)||At.empty();h=l.applyToLocalView(B,h),s.set(c,h);const f=(r.get(l.batchId)||ce()).add(c);r=r.insert(l.batchId,f)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),B=c.key,h=c.value,f=Wf();h.forEach((C=>{if(!i.has(C)){const _=kf(t.get(C),s.get(C));_!==null&&f.set(C,_),i=i.add(C)}})),o.push(this.documentOverlayCache.saveOverlays(e,B,f))}return F.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return Ge(t)?this.getDocumentsMatchingPipeline(e,t,s,r):p_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):F.resolve(_n());let l=Xr,c=i;return o.next((B=>F.forEach(B,((h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next((C=>{c=c.insert(h,C)}))))).next((()=>this.populateOverlays(e,B,i))).next((()=>this.computeViews(e,c,B,ce()))).next((h=>({batchId:l,changes:Qf(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((s=>{let r=As();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=As();return this.indexManager.getCollectionParents(e,i).next((l=>F.forEach(l,(c=>{const B=(function(f,C){return new Xs(C,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,B,s,r).next((h=>{h.forEach(((f,C)=>{o=o.insert(f,C)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(l=>Zo(t,l)))))}getDocumentsMatchingPipeline(e,t,s,r){if(Rn(t)==="collection_group"){const i=Dc(t);let o=As();return this.indexManager.getCollectionParents(e,i).next((l=>F.forEach(l,(c=>{const B=(function(f,C){const _=f.stages.map((D=>D instanceof ra?new sa(C.canonicalString(),{}):D));return new tt(f.serializer,_)})(t,c.child(i));return this.getDocumentsMatchingPipeline(e,B,s,r).next((h=>{h.forEach(((f,C)=>{o=o.insert(f,C)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,s.largestBatchId).next((o=>{switch(i=o,Rn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r);case"documents":let l=ce();for(const c of Tl(t))l=l.add(X.fromPath(c));return this.remoteDocumentCache.getEntries(e,l);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new J("invalid-argument",`Invalid pipeline source to execute offline: ${nn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(l=>ca(t,l)))))}}retrieveMatchingLocalDocuments(e,t,s){e.forEach(((i,o)=>{const l=o.getKey();t.get(l)===null&&(t=t.insert(l,We.newInvalidDocument(l)))}));let r=As();return t.forEach(((i,o)=>{const l=e.get(i);l!==void 0&&Pr(l.mutation,o,At.empty(),me.now()),s(o)&&(r=r.insert(i,o))})),r}getOverlaysForPipeline(e,t,s){switch(Rn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Ce.fromString(oa(t)),s);case"collection_group":throw new J("invalid-argument",`Unexpected collection group pipeline: ${nn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Tl(t).map((r=>X.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,s);default:throw new J("invalid-argument",`Failed to get overlays for pipeline: ${nn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return F.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Ht(r.createTime)}})(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(r){return{name:r.name,query:aI(r.bundledQuery),readTime:Ht(r.readTime)}})(t)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.overlays=new ve(X.comparator),this.Gs=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_n();return F.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}getAllOverlays(e,t){const s=_n();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&s.set(r,i)})),F.resolve(s)}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.Zr(e,t,i)})),F.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Gs.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Gs.delete(s)),F.resolve()}getOverlaysForCollection(e,t,s){const r=_n(),i=t.length+1,o=new X(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,B=c.getKey();if(!t.isPrefixOf(B.path))break;B.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return F.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ve(((B,h)=>B-h));const o=this.overlays.getIterator();for(;o.hasNext();){const B=o.getNext().value;if(B.getKey().getCollectionGroup()===t&&B.largestBatchId>s){let h=i.get(B.largestBatchId);h===null&&(h=_n(),i=i.insert(B.largestBatchId,h)),h.set(B.getKey(),B)}}const l=_n(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((B,h)=>l.set(B,h))),!(l.size()>=r)););return F.resolve(l)}Zr(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Gs.get(r.largestBatchId).delete(s.key);this.Gs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new iI(t,s));let i=this.Gs.get(t);i===void 0&&(i=ce(),this.Gs.set(t,i)),this.Gs.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.zs=new Le(Ue.js),this.Hs=new Le(Ue.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const s=new Ue(e,t);this.zs=this.zs.add(s),this.Hs=this.Hs.add(s)}Ys(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Zs(new Ue(e,t))}Xs(e,t){e.forEach((s=>this.removeReference(s,t)))}e_(e){const t=new X(new Ce([])),s=new Ue(t,e),r=new Ue(t,e+1),i=[];return this.Hs.forEachInRange([s,r],(o=>{this.Zs(o),i.push(o.key)})),i}t_(){this.zs.forEach((e=>this.Zs(e)))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new X(new Ce([])),s=new Ue(t,e),r=new Ue(t,e+1);let i=ce();return this.Hs.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Ue(e,0),s=this.zs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ue{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return X.comparator(e.key,t.key)||Be(e.r_,t.r_)}static Js(e,t){return Be(e.r_,t.r_)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new Le(Ue.js)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nI(i,t,s,r);this.mutationQueue.push(o);for(const l of r)this.i_=this.i_.add(new Ue(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,t){return F.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.__(s),i=r<0?0:r;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?oc:this.Gr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ue(t,0),r=new Ue(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([s,r],(o=>{const l=this.s_(o.r_);i.push(l)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Le(Be);return t.forEach((r=>{const i=new Ue(r,0),o=new Ue(r,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],(l=>{s=s.add(l.r_)}))})),F.resolve(this.o_(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;X.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new X(i),0);let l=new Le(Be);return this.i_.forEachWhile((c=>{const B=c.key.path;return!!s.isPrefixOf(B)&&(B.length===r&&(l=l.add(c.r_)),!0)}),o),F.resolve(this.o_(l))}o_(e){const t=[];return e.forEach((s=>{const r=this.s_(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){W(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.i_;return F.forEach(t.mutations,(r=>{const i=new Ue(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.i_=s}))}Hr(e){}containsKey(e,t){const s=new Ue(t,0),r=this.i_.firstAfterOrEqual(s);return F.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.u_=e,this.docs=(function(){return new ve(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.u_(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return F.resolve(s?s.document.mutableCopy():We.newInvalidDocument(t))}getEntries(e,t){let s=lt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():We.newInvalidDocument(r))})),F.resolve(s)}getAllEntries(e){let t=lt();return this.docs.forEach(((s,r)=>{t=t.insert(s,r.document)})),F.resolve(t)}getDocumentsMatchingQuery(e,t,s,r){let i,o;Ge(t)?(i=Ce.fromString(oa(t)),o=h=>ca(t,h)):(i=t.path,o=h=>Zo(t,h));let l=lt();const c=new X(i.child("__id-9223372036854775808__")),B=this.docs.getIteratorFrom(c);for(;B.hasNext();){const{key:h,value:{document:f}}=B.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||h_(u_(f),s)<=0||(r.has(f.key)||o(f))&&(l=l.insert(f.key,f.mutableCopy()))}return F.resolve(l)}getAllFromCollectionGroup(e,t,s,r){te(9500)}c_(e,t){return F.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new yI(this)}getSize(e){return F.resolve(this.size)}}class yI extends hI{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.$s.addEntry(e,r)):this.$s.removeEntry(s)})),F.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.persistence=e,this.l_=new gs((t=>Fp(t)),Mp),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.E_=0,this.h_=new Sc,this.targetCount=0,this.T_=Vn.ws()}forEachTarget(e,t){return this.l_.forEach(((s,r)=>t(r))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.E_&&(this.E_=t),F.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new Vn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.Ds(t),F.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.l_.forEach(((o,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),F.waitFor(i).next((()=>r))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const s=this.l_.get(t)||null;return F.resolve(s)}addMatchingKeys(e,t,s){return this.h_.Ys(t,s),F.resolve()}removeMatchingKeys(e,t,s){this.h_.Xs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),F.resolve()}getMatchingKeysForTargetId(e,t){const s=this.h_.n_(t);return F.resolve(s)}containsKey(e,t){return F.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t){this.P_={},this.overlays={},this.I_=new ta(0),this.R_=!1,this.R_=!0,this.A_=new gI,this.referenceDelegate=e(this),this.V_=new wI(this),this.indexManager=new lI,this.remoteDocumentCache=(function(r){return new EI(r)})((s=>this.referenceDelegate.d_(s))),this.serializer=new oI(t),this.f_=new pI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new CI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.P_[e.toKey()];return s||(s=new mI(t,this.referenceDelegate),this.P_[e.toKey()]=s),s}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,s){K("MemoryPersistence","Starting transaction:",e);const r=new _I(this.I_.next());return this.referenceDelegate.m_(),s(r).next((i=>this.referenceDelegate.p_(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}g_(e,t){return F.or(Object.values(this.P_).map((s=>()=>s.containsKey(e,t))))}}class _I extends dD{constructor(e){super(),this.currentSequenceNumber=e}}class Pc{constructor(e){this.persistence=e,this.y_=new Sc,this.w_=null}static b_(e){return new Pc(e)}get S_(){if(this.w_)return this.w_;throw te(60996)}addReference(e,t,s){return this.y_.addReference(s,t),this.S_.delete(s.toString()),F.resolve()}removeReference(e,t,s){return this.y_.removeReference(s,t),this.S_.add(s.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),F.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach((r=>this.S_.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.S_.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.S_,(s=>{const r=X.fromPath(s);return this.v_(e,r).next((i=>{i||t.removeEntry(r,oe.min())}))})).next((()=>(this.w_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((s=>{s?this.S_.delete(t.toString()):this.S_.add(t.toString())}))}d_(e){return 0}v_(e,t){return F.or([()=>F.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class Oo{constructor(e,t){this.persistence=e,this.D_=new gs((s=>sI(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=ED(this,t)}static b_(e,t){return new Oo(e,t)}m_(){}p_(e){return F.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}Cs(e){let t=0;return this.sr(e,(s=>{t++})).next((()=>t))}sr(e,t){return F.forEach(this.D_,((s,r)=>this.Os(e,s,r).next((i=>i?F.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.c_(e,(o=>this.Os(e,o,t).next((l=>{l||(s++,i.removeEntry(o,oe.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),F.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.D_.set(s,e.currentSequenceNumber),F.resolve()}removeReference(e,t,s){return this.D_.set(s,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),F.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=oo(e.data.value)),t}Os(e,t,s){return F.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.D_.get(t);return F.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Vo=s,this.fo=r}static mo(e,t){let s=ce(),r=ce();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new kc(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n,e){return X.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=(function(){return Hg()?8:fD(Ye())>0?6:4})()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.vo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Do(e,t,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new II;return this.xo(e,t,o).next((l=>{if(i.result=l,this.yo)return this.Co(e,t,o,l.size)}))})).next((()=>i.result))}Co(e,t,s,r){return Ge(t)?F.resolve():s.documentReadCount<this.wo?(vs()<=ue.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),F.resolve()):(vs()<=ue.DEBUG&&K("QueryEngine","Query:",Or(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.bo*r?(vs()<=ue.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(t))):F.resolve())}vo(e,t){if(Ge(t))return F.resolve(null);let s=t;if(wh(s))return F.resolve(null);let r=Gt(s);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(s.limit!==null&&i===1&&(s=Ro(s,null,"F"),r=Gt(s)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const l=ce(...o);return this.So.getDocuments(e,l).next((c=>this.indexManager.getMinOffset(e,r).next((B=>{const h=this.Fo(s,c);return this.Oo(s,h,l,B.readTime)?this.vo(e,Ro(s,null,"F")):this.Mo(e,h,s,B)}))))})))))}Do(e,t,s,r){return(Ge(t)?(function(o){for(const l of o.stages){if(l instanceof fs||l instanceof Fh)return!1;if(l instanceof ia){if(l.condition instanceof Ip&&l.condition._expr.name==="exists"&&l.condition._expr.params[0]instanceof tr&&l.condition._expr.params[0].fieldName===Nt)continue;return!1}}return!0})(t):wh(t))||r.isEqual(oe.min())?F.resolve(null):this.So.getDocuments(e,s).next((i=>{const o=this.Fo(t,i);return this.Oo(t,o,s,r)?F.resolve(null):(vs()<=ue.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mh(t)),this.Mo(e,o,t,B_(r,Xr)).next((l=>l)))}))}Fo(e,t){let s,r;return Ge(e)?(s=new Le(DI),r=i=>ca(e,i)):(s=new Le(Bc(e)),r=i=>Zo(e,i)),t.forEach(((i,o)=>{r(o)&&(s=s.add(o))})),s}Oo(e,t,s,r){if(Ge(e))return(function(l){return l.stages.some((c=>c instanceof fs||c instanceof Fh))})(e);if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}xo(e,t,s){return vs()<=ue.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Mh(t)),this.So.getDocumentsMatchingQuery(e,t,Ln.min(),s)}Mo(e,t,s,r){return this.So.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="LocalStore",vI=3e8;class TI{constructor(e,t,s,r){this.persistence=e,this.No=t,this.serializer=r,this.Lo=new ve(Be),this.Bo=new gs((i=>Fp(i)),Mp),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(s)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fI(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Lo)))}}function AI(n,e,t,s){return new TI(n,e,t,s)}async function Up(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.qo(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],l=[];let c=ce();for(const B of r){o.push(B.batchId);for(const h of B.mutations)c=c.add(h.key)}for(const B of i){l.push(B.batchId);for(const h of B.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next((B=>({$o:B,removedBatchIds:o,addedBatchIds:l})))}))}))}function xI(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return(function(l,c,B,h){const f=B.batch,C=f.keys();let _=F.resolve();return C.forEach((D=>{_=_.next((()=>h.getEntry(c,D))).next((P=>{const V=B.docVersions.get(D);W(V!==null,48541),P.version.compareTo(V)<0&&(f.applyToRemoteDocument(P,B),P.isValidDocument()&&(P.setReadTime(B.commitVersion),h.addEntry(P)))}))})),_.next((()=>l.mutationQueue.removeMutationBatch(c,f)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=ce();for(let B=0;B<l.mutationResults.length;++B)l.mutationResults[B].transformResults.length>0&&(c=c.add(l.batch.mutations[B].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function $p(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.V_.getLastRemoteSnapshotVersion(t)))}function RI(n,e){const t=ae(n),s=e.snapshotVersion;let r=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});r=t.Lo;const l=[];e.targetChanges.forEach(((h,f)=>{const C=r.get(f);if(!C)return;l.push(t.V_.removeMatchingKeys(i,h.removedDocuments,f).next((()=>t.V_.addMatchingKeys(i,h.addedDocuments,f))));let _=C.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Fe.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,s)),r=r.insert(f,_),(function(P,V,H){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=vI?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(C,_,h)&&l.push(t.V_.updateTargetData(i,_))}));let c=lt(),B=ce();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),l.push(SI(i,o,e.documentUpdates).next((h=>{c=h.Ko,B=h.Qo}))),!s.isEqual(oe.min())){const h=t.V_.getLastRemoteSnapshotVersion(i).next((f=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(h)}return F.waitFor(l).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,B))).next((()=>c))})).then((i=>(t.Lo=r,i)))}function SI(n,e,t){let s=ce(),r=ce();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let o=lt();return t.forEach(((l,c)=>{const B=i.get(l);c.isFoundDocument()!==B.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!B.isValidDocument()||c.version.compareTo(B.version)>0||c.version.compareTo(B.version)===0&&B.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):K(Oc,"Ignoring outdated watch update for ",l,". Current version:",B.version," Watch version:",c.version)})),{Ko:o,Qo:r}}))}function PI(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=oc),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function kI(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.V_.getTargetData(s,e).next((i=>i?(r=i,F.resolve(r)):t.V_.allocateTargetId(s).next((o=>(r=new tn(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.V_.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Lo.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(s.targetId,s),t.Bo.set(e,s.targetId)),s}))}async function xl(n,e,t){const s=ae(n),r=s.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!er(o))throw o;K(Oc,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Lo=s.Lo.remove(e),s.Bo.delete(r.target)}function Gh(n,e,t){const s=ae(n);let r=oe.min(),i=ce();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,B,h){const f=ae(c),C=f.Bo.get(h);return C!==void 0?F.resolve(f.Lo.get(C)):f.V_.getTargetData(B,h)})(s,o,Ge(e)?e:Gt(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.V_.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>s.No.getDocumentsMatchingQuery(o,e,t?r:oe.min(),t?i:ce()))).next((l=>(OI(s,l),{documents:l,Wo:i})))))}function OI(n,e){e.forEach(((t,s)=>{const r=s.key.getCollectionGroup(),i=n.Uo.get(r)||oe.min();s.readTime.compareTo(i)>0&&n.Uo.set(r,s.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve()))))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(on(t),this.Xo=!1):K("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="RemoteStore";class LI{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new Vn(1e3),this.ca=new Vn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe((o=>{s.enqueueAndForget((async()=>{Es(this)&&(K(Jt,"Restarting streams for network reachability change."),await(async function(c){const B=ae(c);B.la.add(4),await wi(B),B.Ta.set("Unknown"),B.la.delete(4),await Ba(B)})(this))}))})),this.Ta=new NI(s,r)}}async function Ba(n){if(Es(n))for(const e of n.Ea)await e(!0)}async function wi(n){for(const e of n.Ea)await e(!1)}function Rl(n,e){return n.oa.get(e)||void 0}function jp(n,e){const t=ae(n),s=Rl(t,e.targetId);if(s!==void 0&&t._a.has(s))return;const r=(function(l,c){const B=Rl(l,c);B!==void 0&&l.aa.delete(B);const h=(function(C,_){return _%2!=0?C.ca.next():C.ua.next()})(l,c);return l.oa.set(c,h),l.aa.set(h,c),h})(t,e.targetId);K(Jt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new tn(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(r,i),Mc(t)?Fc(t):ir(t).Yt()&&Lc(t,i)}function Nc(n,e){const t=ae(n),s=ir(t),r=Rl(t,e);K(Jt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t._a.delete(r),t.oa.delete(e),t.aa.delete(r),s.Yt()&&Jp(t,r),t._a.size===0&&(s.Yt()?s.en():Es(t)&&t.Ta.set("Unknown"))}function Lc(n,e){if(n.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const t=n.aa.get(e.targetId);if(t===void 0)return void K(Jt,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}ir(n).Pn(e)}function Jp(n,e){n.Pa.J(e),ir(n).In(e)}function Fc(n){n.Pa=new x_({getRemoteKeysForTarget:e=>{const t=n.aa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ce()},ye:e=>n._a.get(e)||null,Ve:()=>n.datastore.serializer.databaseId}),ir(n).start(),n.Ta.ea()}function Mc(n){return Es(n)&&!ir(n).Jt()&&n._a.size>0}function Es(n){return ae(n).la.size===0}function qp(n){n.Pa=void 0}async function FI(n){n.Ta.set("Online")}async function MI(n){n._a.forEach(((e,t)=>{Lc(n,e)}))}async function VI(n,e){qp(n),Mc(n)?(n.Ta.ra(e),Fc(n)):n.Ta.set("Unknown")}async function GI(n,e,t){if(n.Ta.set("Online"),e instanceof Xf&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const l of i.targetIds){if(r._a.has(l)){const c=r.aa.get(l);c!==void 0&&(await r.remoteSyncer.rejectListen(c,o),r.oa.delete(c),r.aa.delete(l)),r._a.delete(l)}r.Pa.removeTarget(l)}})(n,e)}catch(s){K(Jt,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await No(n,s)}else if(e instanceof lo?n.Pa._e(e):e instanceof Yf?n.Pa.he(e):n.Pa.ue(e),!t.isEqual(oe.min()))try{const s=await $p(n.localStore);t.compareTo(s)>=0&&await(function(i,o){const l=i.Pa.fe(o);l.targetChanges.forEach(((B,h)=>{if(B.resumeToken.approximateByteSize()>0){const f=i._a.get(h);f&&i._a.set(h,f.withResumeToken(B.resumeToken,o))}})),l.targetMismatches.forEach(((B,h)=>{const f=i._a.get(B);if(!f)return;i._a.set(B,f.withResumeToken(Fe.EMPTY_BYTE_STRING,f.snapshotVersion)),Jp(i,B);const C=new tn(f.target,B,h,f.sequenceNumber);Lc(i,C)}));const c=(function(h,f){const C=new Map;f.targetChanges.forEach(((D,P)=>{const V=h.aa.get(P);V!==void 0&&C.set(V,D)}));let _=new ve(Be);return f.targetMismatches.forEach(((D,P)=>{const V=h.aa.get(D);V!==void 0&&(_=_.insert(V,P))})),new gi(f.snapshotVersion,C,_,f.documentUpdates,f.augmentedDocumentUpdates,f.resolvedLimboDocuments)})(i,l);return i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){K(Jt,"Failed to raise snapshot:",s),await No(n,s)}}async function No(n,e,t){if(!er(e))throw e;n.la.add(1),await wi(n),n.Ta.set("Offline"),t||(t=()=>$p(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{K(Jt,"Retrying IndexedDB access"),await t(),n.la.delete(1),await Ba(n)}))}function Kp(n,e){return e().catch((t=>No(n,t,e)))}async function ua(n){const e=ae(n),t=Gn(e);let s=e.sa.length>0?e.sa[e.sa.length-1].batchId:oc;for(;HI(e);)try{const r=await PI(e.localStore,s);if(r===null){e.sa.length===0&&t.en();break}s=r.batchId,UI(e,r)}catch(r){await No(e,r)}zp(e)&&Qp(e)}function HI(n){return Es(n)&&n.sa.length<10}function UI(n,e){n.sa.push(e);const t=Gn(n);t.Yt()&&t.Rn&&t.An(e.mutations)}function zp(n){return Es(n)&&!Gn(n).Jt()&&n.sa.length>0}function Qp(n){Gn(n).start()}async function $I(n){Gn(n).fn()}async function jI(n){const e=Gn(n);for(const t of n.sa)e.An(t.mutations)}async function JI(n,e,t){const s=n.sa.shift(),r=Rc.from(s,e,t);await Kp(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await ua(n)}async function qI(n,e){e&&Gn(n).Rn&&await(async function(s,r){if((function(o){return w_(o)&&o!==L.ABORTED})(r.code)){const i=s.sa.shift();Gn(s).Xt(),await Kp(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await ua(s)}})(n,e),zp(n)&&Qp(n)}async function Hh(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),K(Jt,"RemoteStore received new credentials");const s=Es(t);t.la.add(3),await wi(t),s&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await Ba(t)}async function KI(n,e){const t=ae(n);e?(t.la.delete(2),await Ba(t)):e||(t.la.add(2),await wi(t),t.Ta.set("Unknown"))}function ir(n){return n.Ia||(n.Ia=(function(t,s,r){const i=ae(t);return i.pn(),new iD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{ct:FI.bind(null,n),Et:MI.bind(null,n),Tt:VI.bind(null,n),Tn:GI.bind(null,n)}),n.Ea.push((async e=>{e?(n.Ia.Xt(),Mc(n)?Fc(n):n.Ta.set("Unknown")):(await n.Ia.stop(),qp(n))}))),n.Ia}function Gn(n){return n.Ra||(n.Ra=(function(t,s,r){const i=ae(t);return i.pn(),new oD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{ct:()=>Promise.resolve(),Et:$I.bind(null,n),Tt:qI.bind(null,n),Vn:jI.bind(null,n),dn:JI.bind(null,n)}),n.Ea.push((async e=>{e?(n.Ra.Xt(),await ua(n)):(await n.Ra.stop(),n.sa.length>0&&(K(Jt,`Stopping write stream with ${n.sa.length} pending writes`),n.sa=[]))}))),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,l=new Vc(e,t,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gc(n,e){if(on("AsyncQueue",`${e}: ${n}`),er(n))return new J(L.UNAVAILABLE,`${e}: ${n}`);throw n}class Uh{constructor(){this.activeTargetIds=v_()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QI{constructor(){this.fu=new Uh,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,s){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new Uh,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function tl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{static emptySet(e){return new as(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||X.comparator(t.key,s.key):(t,s)=>X.comparator(t.key,s.key),this.keyedMap=As(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new as;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.pu=new ve(X.comparator)}track(e){const t=e.doc.key,s=this.pu.get(t);s?e.type!==0&&s.type===3?this.pu=this.pu.insert(t,e):e.type===3&&s.type!==1?this.pu=this.pu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pu=this.pu.remove(t):e.type===1&&s.type===2?this.pu=this.pu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):te(63341,{we:e,gu:s}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Js{constructor(e,t,s,r,i,o,l,c,B){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=B}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach((l=>{o.push({type:0,doc:l})})),new Js(e,t,as.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some((e=>e.vu()))}}class YI{constructor(){this.queries=jh(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,s){const r=ae(t),i=r.queries;r.queries=jh(),i.forEach(((o,l)=>{for(const c of l.bu)c.onError(s)}))})(this,new J(L.ABORTED,"Firestore shutting down"))}}function jh(){return new gs((n=>Lp(n)),la)}async function XI(n,e){const t=ae(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Su()&&e.vu()&&(s=2):(i=new WI,s=e.vu()?0:1);try{switch(s){case 0:i.wu=await t.onListen(r,!0);break;case 1:i.wu=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const l=Gc(o,`Initialization of query '${Ge(e.query)?nn(e.query):Or(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&Hc(t)}async function ZI(n,e){const t=ae(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?r=e.vu()?0:1:!i.Su()&&e.vu()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function eb(n,e){const t=ae(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const l of o.bu)l.Cu(r)&&(s=!0);o.wu=r}}s&&Hc(t)}function tb(n,e,t){const s=ae(n),r=s.queries.get(e);if(r)for(const i of r.bu)i.onError(t);s.queries.delete(e)}function Hc(n){n.Du.forEach((e=>{e.next()}))}var Sl;(function(n){n.Default="default",n.Cache="cache"})(Sl||(Sl={}));class nb{constructor(e,t,s){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=s||{}}Cu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Js(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const s=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==Sl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.key=e}}class Yp{constructor(e){this.key=e}}class sb{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=ce(),this.mutatedKeys=ce(),this.Ju=Ge(e)?Al(e):Bc(e),this.Yu=new as(this.Ju)}get Zu(){return this.zu}Xu(e,t){const s=t?t.ec:new $h,r=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,l=!1;const[c,B]=this.tc(this.query,r);e.inorderTraversal(((f,C)=>{const _=r.get(f),D=BI(this.query,C)?C:null,P=!!_&&this.mutatedKeys.has(_.key),V=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let H=!1;_&&D?_.data.isEqual(D.data)?P!==V&&(s.track({type:3,doc:D}),H=!0):this.nc(_,D)||(s.track({type:2,doc:D}),H=!0,(c&&this.Ju(D,c)>0||B&&this.Ju(D,B)<0)&&(l=!0)):!_&&D?(s.track({type:0,doc:D}),H=!0):_&&!D&&(s.track({type:1,doc:_}),H=!0,(c||B)&&(l=!0)),H&&(D?(o=o.add(D),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}));const h=this.rc(this.query);if(h)if(Ge(this.query)){const f=[];o.forEach((D=>f.push(D)));const C=Gp(this.query,f);let _=new as(Al(this.query));for(const D of C)_=_.add(D);o.forEach((D=>{_.has(D.key)||(i=i.delete(D.key),s.track({type:1,doc:D}))})),o=_}else{const f=this.sc(this.query);for(;o.size>h;){const C=f==="F"?o.last():o.first();o=o.delete(C.key),i=i.delete(C.key),s.track({type:1,doc:C})}}return{Yu:o,ec:s,Oo:l,mutatedKeys:i}}rc(e){var t;return Ge(e)?(t=el(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(Ge(e)){const t=el(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var s;if(Ge(e)){const r=(s=el(e))==null?void 0:s.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort(((h,f)=>(function(_,D){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{we:V})}};return P(_)-P(D)})(h.type,f.type)||this.Ju(h.doc,f.doc))),this._c(s),r=r??!1;const l=t&&!r?this.oc():[],c=this.Hu.size===0&&this.current&&!r?1:0,B=c!==this.ju;return this.ju=c,o.length!==0||B?{snapshot:new Js(this.query,e.Yu,i,o,e.mutatedKeys,c===0,B,!1,!!s&&s.resumeToken.approximateByteSize()>0),ac:l}:{ac:l}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new $h,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach((t=>this.zu=this.zu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.zu=this.zu.delete(t))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=ce(),this.Yu.forEach((s=>{this.uc(s.key)&&(this.Hu=this.Hu.add(s.key))}));const t=[];return e.forEach((s=>{this.Hu.has(s)||t.push(new Yp(s))})),this.Hu.forEach((s=>{e.has(s)||t.push(new Wp(s))})),t}cc(e){this.zu=e.Wo,this.Hu=ce();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return Js.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Uc="SyncEngine";class rb{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class ib{constructor(e){this.key=e,this.Ec=!1}}class ob{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new gs((l=>Lp(l)),la),this.Pc=new Map,this.Ic=new Set,this.Rc=new ve(X.comparator),this.Ac=new Map,this.Vc=new Sc,this.dc={},this.fc=new Map,this.mc=Vn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function ab(n,e,t=!0){const s=sC(n);let r;const i=s.Tc.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lc()):r=await Xp(s,e,t,!0),r}async function lb(n,e){const t=sC(n);await Xp(t,e,!0,!1)}async function Xp(n,e,t,s){const r=await kI(n.localStore,Ge(e)?e:Gt(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await cb(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&jp(n.remoteStore,r),l}async function cb(n,e,t,s,r){n.yc=(f,C,_)=>(async function(P,V,H,se){let ge=V.view.Xu(H);ge.Oo&&(ge=await Gh(P.localStore,V.query,!1).then((({documents:I})=>V.view.Xu(I,ge))));const Te=se&&se.targetChanges.get(V.targetId),Ae=se&&se.targetMismatches.get(V.targetId)!=null,re=V.view.applyChanges(ge,P.isPrimaryClient,Te,Ae);return qh(P,V.targetId,re.ac),re.snapshot})(n,f,C,_);const i=await Gh(n.localStore,e,!0),o=new sb(e,i.Wo),l=o.Xu(i.documents),c=mi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),B=o.applyChanges(l,n.isPrimaryClient,c);qh(n,t,B.ac);const h=new rb(e,t,o);return n.Tc.set(e,h),n.Pc.has(t)?n.Pc.get(t).push(e):n.Pc.set(t,[e]),B.snapshot}async function Bb(n,e,t){const s=ae(n),r=s.Tc.get(e),i=s.Pc.get(r.targetId);if(i.length>1)return s.Pc.set(r.targetId,i.filter((o=>!la(o,e)))),void s.Tc.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await xl(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Nc(s.remoteStore,r.targetId),Pl(s,r.targetId)})).catch(Zs)):(Pl(s,r.targetId),await xl(s.localStore,r.targetId,!0))}async function ub(n,e){const t=ae(n),s=t.Tc.get(e),r=t.Pc.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Nc(t.remoteStore,s.targetId))}async function hb(n,e,t){const s=Eb(n);try{const r=await(function(o,l){const c=ae(o),B=me.now(),h=l.reduce(((_,D)=>_.add(D.key)),ce());let f,C;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let D=lt(),P=ce();return c.ko.getEntries(_,h).next((V=>{D=V,D.forEach(((H,se)=>{se.isValidDocument()||(P=P.add(H))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,D))).next((V=>{f=V;const H=[];for(const se of l){const ge=Zw(se,f.get(se.key).overlayedDocument);ge!=null&&H.push(new Cs(se.key,ge,Af(ge.value.mapValue),Vt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,B,H,l)})).next((V=>{C=V;const H=V.applyToLocalDocumentSet(f,P);return c.documentOverlayCache.saveOverlays(_,V.batchId,H)}))})).then((()=>({batchId:C.batchId,changes:Qf(f)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,l,c){let B=o.dc[o.currentUser.toKey()];B||(B=new ve(Be)),B=B.insert(l,c),o.dc[o.currentUser.toKey()]=B})(s,r.batchId,t),await _i(s,r.changes),await ua(s.remoteStore)}catch(r){const i=Gc(r,"Failed to persist write");t.reject(i)}}async function Zp(n,e){const t=ae(n);try{const s=await RI(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Ac.get(i);o&&(W(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.Ec=!0:r.modifiedDocuments.size>0?W(o.Ec,14607):r.removedDocuments.size>0&&(W(o.Ec,42227),o.Ec=!1))})),await _i(t,s,e)}catch(s){await Zs(s)}}function Jh(n,e,t){const s=ae(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tc.forEach(((i,o)=>{const l=o.view.xu(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const c=ae(o);c.onlineState=l;let B=!1;c.queries.forEach(((h,f)=>{for(const C of f.bu)C.xu(l)&&(B=!0)})),B&&Hc(c)})(s.eventManager,e),r.length&&s.hc.Tn(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function db(n,e,t){const s=ae(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Ac.get(e),i=r&&r.key;if(i){let o=new ve(X.comparator);o=o.insert(i,We.newNoDocument(i,oe.min()));const l=ce().add(i),c=new gi(oe.min(),new Map,new ve(Be),o,lt(),l);await Zp(s,c),s.Rc=s.Rc.remove(i),s.Ac.delete(e),$c(s)}else await xl(s.localStore,e,!1).then((()=>Pl(s,e,t))).catch(Zs)}async function fb(n,e){const t=ae(n),s=e.batch.batchId;try{const r=await xI(t.localStore,e);tC(t,s,null),eC(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await _i(t,r)}catch(r){await Zs(r)}}async function pb(n,e,t){const s=ae(n);try{const r=await(function(o,l){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(B=>{let h;return c.mutationQueue.lookupMutationBatch(B,l).next((f=>(W(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(B,f)))).next((()=>c.mutationQueue.performConsistencyCheck(B))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(B,h,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(B,h))).next((()=>c.localDocuments.getDocuments(B,h)))}))})(s.localStore,e);tC(s,e,t),eC(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await _i(s,r)}catch(r){await Zs(r)}}function eC(n,e){(n.fc.get(e)||[]).forEach((t=>{t.resolve()})),n.fc.delete(e)}function tC(n,e,t){const s=ae(n);let r=s.dc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.dc[s.currentUser.toKey()]=r}}function Pl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Pc.get(e))n.Tc.delete(s),t&&n.hc.wc(s,t);n.Pc.delete(e),n.isPrimaryClient&&n.Vc.e_(e).forEach((s=>{n.Vc.containsKey(s)||nC(n,s)}))}function nC(n,e){n.Ic.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(Nc(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ac.delete(t),$c(n))}function qh(n,e,t){for(const s of t)s instanceof Wp?(n.Vc.addReference(s.key,e),Cb(n,s)):s instanceof Yp?(K(Uc,"Document no longer in limbo: "+s.key),n.Vc.removeReference(s.key,e),n.Vc.containsKey(s.key)||nC(n,s.key)):te(19791,{bc:s})}function Cb(n,e){const t=e.key,s=t.path.canonicalString();n.Rc.get(t)||n.Ic.has(s)||(K(Uc,"New document in limbo: "+t),n.Ic.add(s),$c(n))}function $c(n){for(;n.Ic.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Ic.values().next().value;n.Ic.delete(e);const t=new X(Ce.fromString(e)),s=n.mc.next();n.Ac.set(s,new ib(t)),n.Rc=n.Rc.insert(t,s),jp(n.remoteStore,new tn(Gt(Jf(t.path)),s,"TargetPurposeLimboResolution",ta.wn))}}async function _i(n,e,t){const s=ae(n),r=[],i=[],o=[];s.Tc.isEmpty()||(s.Tc.forEach(((l,c)=>{o.push(s.yc(c,e,t).then((B=>{var h;if((B||t)&&s.isPrimaryClient){const f=B?!B.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(B){r.push(B);const f=kc.mo(c.targetId,B);i.push(f)}})))})),await Promise.all(o),s.hc.Tn(r),await(async function(c,B){const h=ae(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>F.forEach(B,(C=>F.forEach(C.Vo,(_=>h.persistence.referenceDelegate.addReference(f,C.targetId,_))).next((()=>F.forEach(C.fo,(_=>h.persistence.referenceDelegate.removeReference(f,C.targetId,_)))))))))}catch(f){if(!er(f))throw f;K(Oc,"Failed to update sequence numbers: "+f)}for(const f of B){const C=f.targetId;if(!f.fromCache){const _=h.Lo.get(C),D=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(D);h.Lo=h.Lo.insert(C,P)}}})(s.localStore,i))}async function gb(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){K(Uc,"User change. New user:",e.toKey());const s=await Up(t.localStore,e);t.currentUser=e,(function(i,o){i.fc.forEach((l=>{l.forEach((c=>{c.reject(new J(L.CANCELLED,o))}))})),i.fc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await _i(t,s.$o)}}function mb(n,e){const t=ae(n),s=t.Ac.get(e);if(s&&s.Ec)return ce().add(s.key);{let r=ce();const i=t.Pc.get(e);if(!i)return r;for(const o of i??[]){const l=t.Tc.get(o);r=r.unionWith(l.view.Zu)}return r}}function sC(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=db.bind(null,e),e.hc.Tn=eb.bind(null,e.eventManager),e.hc.wc=tb.bind(null,e.eventManager),e}function Eb(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pb.bind(null,e),e}class Lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ea(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return AI(this.persistence,new bI,e.initialUser,this.serializer)}Dc(e){return new Hp(Pc.b_,this.serializer)}vc(e){return new QI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lo.provider={build:()=>new Lo};class yb extends Lo{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){W(this.persistence.referenceDelegate instanceof Oo,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new gD(s,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new Hp((s=>Oo.b_(s,t)),this.serializer)}}class kl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gb.bind(null,this.syncEngine),await KI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new YI})()}createDatastore(e){const t=ea(e.databaseInfo.databaseId),s=rD(e.databaseInfo);return cD(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,o,l){return new LI(s,r,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Jh(this.syncEngine,t,0)),(function(){return xh.Ye()?new xh:new eD})())}createSyncEngine(e,t){return(function(r,i,o,l,c,B,h){const f=new ob(r,i,o,l,c,B);return h&&(f.gc=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=ae(r);K(Jt,"RemoteStore shutting down."),i.la.add(5),await wi(i),i.ha.shutdown(),i.Ta.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}kl.provider={build:()=>new kl};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="FirestoreClient";class wb{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=ze.UNAUTHENTICATED,this.clientId=ic.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{K(Hn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(K(Hn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Gc(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function nl(n,e){n.asyncQueue.verifyOperationInProgress(),K(Hn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Up(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Kh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _b(n);K(Hn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Hh(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Hh(e.remoteStore,r))),n._onlineComponents=e}async function _b(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(Hn,"Using user provided OfflineComponentProvider");try{await nl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===L.FAILED_PRECONDITION||r.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Rt("Error using user provided cache. Falling back to memory cache: "+t),await nl(n,new Lo)}}else K(Hn,"Using default OfflineComponentProvider"),await nl(n,new yb(void 0));return n._offlineComponents}async function rC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(Hn,"Using user provided OnlineComponentProvider"),await Kh(n,n._uninitializedComponentsProvider._online)):(K(Hn,"Using default OnlineComponentProvider"),await Kh(n,new kl))),n._onlineComponents}function Db(n){return rC(n).then((e=>e.syncEngine))}async function Ib(n){const e=await rC(n),t=e.eventManager;return t.onListen=ab.bind(null,e.syncEngine),t.onUnlisten=Bb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=lb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ub.bind(null,e.syncEngine),t}function bb(n,e,t={}){const s=new An;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,B){const h=new zI({next:C=>{h.Va(),o.enqueueAndForget((()=>ZI(i,f))),C.fromCache&&c.source==="server"?B.reject(new J(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):B.resolve(C)},error:C=>B.reject(C)}),f=new nb(l instanceof Fr?tI(l):l,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return XI(i,f)})(await Ib(n),n.asyncQueue,e,t,s))),s.promise}function vb(n,e){const t=new An;return n.asyncQueue.enqueueAndForget((async()=>hb(await Db(n),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iC=class{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ei("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Tb=class extends iC{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{convertValue(e,t="none"){switch(Me(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(On(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ps(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[Jr].arrayValue)==null?void 0:r.values)==null?void 0:i.map((o=>xe(o.doubleValue)));return new ct(t)}convertGeoPoint(e){return new Ut(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Gs(e));default:return null}}convertTimestamp(e){const t=kn(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ce.fromString(e);W(ip(s),9688,{name:e});const r=new $r(s.get(1),s.get(3)),i=new X(s.popFirst(5));return r.isEqual(t)||on(`A document reference to ${i} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="AsyncQueue";class Qh{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new Bp(this,"async_queue_retry"),this.Hc=()=>{const s=tl();s&&K(zh,"Visibility state changed to "+s.visibilityState),this.Ht.$t()},this.Jc=e;const t=tl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=tl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise((()=>{}));const t=new An;return this.Zc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$c.push(e),this.Xc())))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!er(e))throw e;K(zh,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt((()=>this.Xc()))}}Zc(e){const t=this.Jc.then((()=>(this.Gc=!0,e().catch((s=>{throw this.Wc=s,this.Gc=!1,on("INTERNAL UNHANDLED ERROR: ",Wh(s)),s})).then((s=>(this.Gc=!1,s))))));return this.Jc=t,t}enqueueAfterDelay(e,t,s){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const r=Vc.createAndSchedule(this,e,t,s,(i=>this.el(i)));return this.Qc.push(r),r}Yc(){this.Wc&&te(47125,{tl:Wh(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then((()=>{this.Qc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()}))}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function Wh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ha extends na{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Qh,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qh(e),this._firestoreClient=void 0,await e}}}function xb(n,e){const t=typeof n=="object"?n:_d(),s=typeof n=="string"?n:Io,r=ql(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Pg("firestore");i&&yD(r,...i)}return r}function aC(n){if(n._terminated)throw new J(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Rb(n),n._firestoreClient}function Rb(n){var s,r,i,o;const e=n._freezeSettings(),t=uD(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new wb(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const B=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(B),_online:B}})(n._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb extends Ab{constructor(e){super(),this.firestore=e}convertBytes(e){return new It(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}class Yi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Os extends iC{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ei("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Os._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Os._jsonSchemaVersion="firestore/documentSnapshot/1.0",Os._jsonSchema={type:Oe("string",Os._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class uo extends Os{data(e={}){return super.data(e)}}class Ns{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Yi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new uo(this._firestore,this._userDataWriter,s.key,s,new Yi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{Ge(r._snapshot.query)?Al(r._snapshot.query):Bc(r.query._query);const c=new uo(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Yi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new uo(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Yi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let B=-1,h=-1;return l.type!==0&&(B=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:Pb(l.type),doc:c,oldIndex:B,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ic.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Pb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ns._jsonSchemaVersion="firestore/querySnapshot/1.0",Ns._jsonSchema={type:Oe("string",Ns._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jc{}class Jc extends jc{}function Ob(n,e,...t){let s=[];e instanceof jc&&s.push(e),s=s.concat(t),(function(i){const o=i.filter((c=>c instanceof Kc)).length,l=i.filter((c=>c instanceof qc)).length;if(o>1||o>0&&l>0)throw new J(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class qc extends Jc{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new qc(e,t,s)}_apply(e){const t=this._parse(e);return lC(e._query,t),new $n(e.firestore,e.converter,_l(e._query,t))}_parse(e){const t=gc(e.firestore);return(function(i,o,l,c,B,h,f){let C;if(B.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new J(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Xh(f,h);const D=[];for(const P of f)D.push(Yh(c,i,P));C={arrayValue:{values:D}}}else C=Yh(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Xh(f,h),C=ID(l,o,f,h==="in"||h==="not-in");return ke.create(B,h,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Kc extends jc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kc(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:St.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let o=r;const l=i.getFlattenedFilters();for(const c of l)lC(o,c),o=_l(o,c)})(e._query,t),new $n(e.firestore,e.converter,_l(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zc extends Jc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new zc(e,t)}_apply(e){const t=(function(r,i,o){if(r.startAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new J(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yr(i,o)})(e._query,this._field,this._direction);return new $n(e.firestore,e.converter,g_(e._query,t))}}function Nb(n,e="asc"){const t=e,s=Ei("orderBy",n);return zc._create(s,t)}class Qc extends Jc{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Qc(e,t,s)}_apply(e){return new $n(e.firestore,e.converter,Ro(e._query,this._limit,this._limitType))}}function Lb(n){return Qc._create("limit",n,"F")}function Yh(n,e,t){if(typeof(t=Bt(t))=="string"){if(t==="")throw new J(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qf(e)&&t.indexOf("/")!==-1)throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ce.fromString(t));if(!X.isDocumentKey(s))throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return dh(n,new X(s))}if(t instanceof Ne)return dh(n,t._key);throw new J(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ko(t)}.`)}function Xh(n,e){if(!Array.isArray(n)||n.length===0)throw new J(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lC(n,e){const t=(function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Fb(n){n=Vs(n,$n);const e=Vs(n.firestore,ha),t=aC(e),s=new Sb(e);return kb(n._query),bb(t,n._query).then((r=>new Ns(e,s,n,r)))}function Mb(n,e,t){n=Vs(n,Ne);const s=Vs(n.firestore,ha),r=oC(n.converter,e),i=gc(s);return cC(s,[gp(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Vt.none())])}function Vb(n,e){const t=Vs(n.firestore,ha),s=pp(n),r=oC(n.converter,e),i=gc(n.firestore);return cC(t,[gp(i,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,Vt.exists(!1))]).then((()=>s))}function cC(n,e){const t=aC(n);return vb(t,e)}const Zh="@firebase/firestore",ed="4.17.2";(function(e,t=!0){kw(zs),Ls(new Bs("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new ha(new W_(s.getProvider("auth-internal")),new Z_(o,s.getProvider("app-check-internal")),Uw(o,r),o);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),bn(Zh,ed,e),bn(Zh,ed,"esm2020")})();const Ar={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},BC=!!(Ar.apiKey&&Ar.authDomain&&Ar.projectId&&Ar.appId);let Xi=null,Ol=null,Nl=null;if(BC)try{Xi=wd(Ar),Ol=nw(Xi),Nl=xb(Xi)}catch{Xi=null,Ol=null,Nl=null}const yt=Ol,qs=Nl,Gb=new zt,Hb=new Qt;function Ub(n){var e;return{uid:n.uid,name:n.displayName||n.email||"Signed in",email:n.email,photoUrl:n.photoURL,provider:((e=n.providerData[0])==null?void 0:e.providerId)??"unknown"}}function uC(){return BC&&yt!==null}function hC(n){return yt?$E(yt,e=>n(e?Ub(e):null)):(n(null),()=>{})}async function dC(n){if(!yt)throw new Error("Sign-in is not configured for this build.");try{await By(yt,n)}catch(e){const t=e.code??"";if(t==="auth/popup-blocked"||t==="auth/operation-not-supported-in-this-environment"){await Cy(yt,n);return}if(t==="auth/popup-closed-by-user"||t==="auth/cancelled-popup-request")return;throw e}}function $b(){return dC(Gb)}function jb(){return dC(Hb)}async function Jb(){if(yt)try{await my(yt)}catch{}}function qb(){return yt?jE(yt):Promise.resolve()}function Kb(n){const e=n.trim().split(/\s+/).filter(Boolean);return(e.length>=2?`${e[0][0]}${e[1][0]}`:n.slice(0,2)).toUpperCase()}function zb(){return`<div class="relative" data-auth-root>
  <button type="button" data-auth-open class="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white">
    ${ee("user","h-4 w-4")} Sign in
  </button>
</div>`}function Qb(n){return`<div class="relative" data-auth-root>
  <button type="button" data-auth-open class="flex items-center gap-2 rounded-lg border border-white/15 px-2 py-1.5 transition hover:border-white/30">
    ${n.photoUrl?`<img src="${q(n.photoUrl)}" alt="" class="h-7 w-7 rounded-full object-cover"/>`:`<span class="grid h-7 w-7 place-items-center rounded-full bg-brand/30 text-[11px] font-bold text-white">${q(Kb(n.name))}</span>`}
    <span class="hidden max-w-[9rem] truncate text-sm font-medium text-slate-200 sm:inline">${q(n.name)}</span>
  </button>
</div>`}function Wb(n){return n?`<div data-auth-menu class="absolute right-0 top-[calc(100%+8px)] z-50 w-64 rounded-xl border border-slate-200 bg-white p-2 text-left shadow-xl">
    <div class="px-2.5 py-2">
      <p class="truncate text-sm font-bold text-slate-900">${q(n.name)}</p>
      ${n.email?`<p class="truncate text-xs text-slate-500">${q(n.email)}</p>`:""}
    </div>
    <div class="my-1 border-t border-slate-100"></div>
    <button type="button" data-auth-signout class="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
      ${ee("logout","h-4 w-4")} Sign out
    </button>
  </div>`:`<div data-auth-menu class="absolute right-0 top-[calc(100%+8px)] z-50 w-64 rounded-xl border border-slate-200 bg-white p-2 text-left shadow-xl">
    <p class="px-2 pb-2 pt-1 text-xs leading-relaxed text-slate-500">Sign in to sync your audit history across devices. Running an audit never requires this.</p>
    <button type="button" data-auth-google class="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
      ${nu("google","h-4 w-4")} Continue with Google
    </button>
    <button type="button" data-auth-github class="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
      ${nu("github","h-4 w-4")} Continue with GitHub
    </button>
  </div>`}function Yb(n){if(!uC())return n.innerHTML="",()=>{};let e=null;const t=()=>{n.innerHTML=e?Qb(e):zb(),r()},s=()=>{var o;(o=n.querySelector("[data-auth-menu]"))==null||o.remove()},r=()=>{const o=n.querySelector("[data-auth-open]"),l=n.querySelector("[data-auth-root]");!o||!l||o.addEventListener("click",c=>{var B,h,f;if(c.stopPropagation(),l.querySelector("[data-auth-menu]")){s();return}l.insertAdjacentHTML("beforeend",Wb(e)),(B=l.querySelector("[data-auth-google]"))==null||B.addEventListener("click",async()=>{s();try{await $b()}catch{Qe("Google sign-in failed. Try again.")}}),(h=l.querySelector("[data-auth-github]"))==null||h.addEventListener("click",async()=>{s();try{await jb()}catch{Qe("GitHub sign-in failed. Try again.")}}),(f=l.querySelector("[data-auth-signout]"))==null||f.addEventListener("click",async()=>{s(),await qb(),Qe("Signed out")})})};document.addEventListener("click",s);const i=hC(o=>{e=o,t()});return()=>{document.removeEventListener("click",s),i()}}function da(n,e={}){qs&&Vb(fp(qs,"analytics_events"),{type:n,...e,createdAt:xD()}).catch(()=>{})}function Xb(n){var t;const e=(t=yt==null?void 0:yt.currentUser)==null?void 0:t.uid;return!qs||!e?Promise.resolve():Mb(pp(qs,"users",e,"audits",n.id),n).catch(()=>{})}async function Zb(n){if(!qs)return[];try{return(await Fb(Ob(fp(qs,"users",n,"audits"),Nb("createdAt","desc"),Lb(60)))).docs.map(t=>t.data())}catch{return[]}}const ev="modulepreload",tv=function(n,e){return new URL(n,e).href},td={},Ll=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let o=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),B=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=o(t.map(h=>{if(h=tv(h,s),h in td)return;td[h]=!0;const f=h.endsWith(".css"),C=f?'[rel="stylesheet"]':"";if(!!s)for(let P=l.length-1;P>=0;P--){const V=l[P];if(V.href===h&&(!f||V.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${C}`))return;const D=document.createElement("link");if(D.rel=f?"stylesheet":ev,f||(D.as="script"),D.crossOrigin="",D.href=h,B&&D.setAttribute("nonce",B),document.head.appendChild(D),f)return new Promise((P,V)=>{D.addEventListener("load",P),D.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};class ho extends Error{}const nv=15*1024*1024;function sv(n){return/\.(pdf|docx|txt)$/i.test(n.name)}async function rv(n){if(n.size>nv)throw new ho("That file is too large (max 15MB).");const e=n.name.toLowerCase();let t;if(e.endsWith(".pdf"))t=await iv(n);else if(e.endsWith(".docx"))t=await ov(n);else if(e.endsWith(".txt"))t=await n.text();else throw new ho("Unsupported file type. Upload a PDF, DOCX or TXT file.");const s=t.trim();if(!s)throw new ho("No readable text found in that file — it may be a scanned image without a text layer.");return s}async function iv(n){const[e,{default:t}]=await Promise.all([Ll(()=>import("./pdf-CfP-JzcY.js"),[],import.meta.url),Ll(()=>import("./pdf.worker.min-dSxz6soH.js"),[],import.meta.url)]);e.GlobalWorkerOptions.workerSrc=t;const s=await n.arrayBuffer(),r=await e.getDocument({data:s}).promise,i=[];for(let o=1;o<=r.numPages;o++){const B=(await(await r.getPage(o)).getTextContent()).items.map(h=>"str"in h?h.str:"").join(" ");i.push(B)}return i.join(`

`)}async function ov(n){const e=await Ll(()=>import("./index-Ba-7Z3_y.js").then(r=>r.i),[],import.meta.url),t=await n.arrayBuffer();return(await e.extractRawText({arrayBuffer:t})).value}function av(){return`${lv()}
  <main>
    ${cv()}
    ${Bv()}
    ${uv()}
    ${hv()}
    ${dv()}
    ${fv()}
    ${pv()}
    ${Cv()}
  </main>
  ${gv()}`}function fC(){return'<span class="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-sky-400 text-white text-xs font-black tracking-tight">KY</span>'}function lv(){return`<header class="no-print sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
    <a href="#top" class="flex items-center gap-2.5">
      ${fC()}
      <span class="text-lg font-extrabold tracking-tight text-white">KY</span>
      <span class="mt-1 hidden text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:inline">LinkedIn Profile Audit</span>
    </a>
    <nav class="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
      <a class="transition hover:text-white" href="#how">How it works</a>
      <a class="transition hover:text-white" href="#samples">Sample reports</a>
      <a class="transition hover:text-white" href="#pricing">Pricing</a>
      <a class="transition hover:text-white" href="#faq">FAQ</a>
      <button type="button" data-open-history class="inline-flex items-center gap-1.5 transition hover:text-white">
        ${ee("history","h-4 w-4")} History
      </button>
    </nav>
    <div class="flex items-center gap-3">
      <div id="auth-widget"></div>
      <a href="#audit" class="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
        Audit my profile ${ee("arrowRight","h-4 w-4")}
      </a>
    </div>
  </div>
</header>`}function sl(n,e){const t=bt(e),s=e<50?"bg-rose-500":e<70?"bg-amber-500":"bg-emerald-500";return`<div>
  <div class="flex items-center justify-between text-xs">
    <span class="font-medium text-slate-300">${n}</span>
    <span class="font-bold tabular-nums" style="color:${t}">${e}</span>
  </div>
  <div class="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
    <div class="h-full rounded-full ${s}" style="width:${e}%"></div>
  </div>
</div>`}function cv(){const n=`<div class="relative animate-rise" style="animation-delay:0.15s">
  <div class="max-w-sm rounded-2xl border border-white/10 bg-ink-soft/80 p-6 shadow-2xl shadow-black/40 backdrop-blur">
    <div class="flex items-center gap-4">
      <div class="relative h-[120px] w-[120px] shrink-0">
        ${Gl(87,120,10)}
        <div class="absolute inset-0 grid place-items-center">
          <span class="text-3xl font-extrabold text-white">87</span>
        </div>
      </div>
      <div class="min-w-0">
        <p class="text-sm font-semibold text-white">Profile score</p>
        <p class="mt-1 text-xs leading-relaxed text-slate-400">Top 13% of Software<br/>profiles this month</p>
      </div>
    </div>
    <div class="mt-5 space-y-3">
      ${sl("Headline",78)}
      ${sl("Experience",92)}
      ${sl("Activity",58)}
    </div>
    <div class="mt-5 flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-2">
      ${ee("zap","h-4 w-4 shrink-0 text-emerald-400")}
      <p class="text-xs font-medium text-emerald-300">Top fix: post or comment 2x a week</p>
    </div>
  </div>
  <div class="absolute -bottom-5 -left-5 hidden animate-rise items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-xl sm:flex" style="animation-delay:0.35s">
    ${ee("trendUp","h-5 w-5 text-emerald-600")}
    <div>
      <p class="text-sm font-bold leading-none text-slate-900">+23 pts</p>
      <p class="mt-0.5 text-[11px] text-slate-500">after 30 days</p>
    </div>
  </div>
</div>`;return`<section id="top" class="relative overflow-hidden bg-ink text-white">
  <div class="hero-glow absolute inset-0"></div>
  <div class="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-24 pt-16 sm:pt-20 lg:grid-cols-2 lg:pt-24">
    <div class="animate-rise">
      <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200">
        ${ee("sparkles","h-3.5 w-3.5 text-sky-400")} Real analysis &middot; No LinkedIn API &middot; Free &middot; No sign-up required
      </span>
      <h1 class="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
        Your resume or profile,<br/>
        <span class="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">scored in 60 seconds.</span>
      </h1>
      <p class="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
        Upload a resume — no LinkedIn API, no permissions, no password — and KY scores it for real: headline, About, bullets, skills and education across ${ls}+ checkpoints. Find a LinkedIn link in it and KY offers a demo audit of that profile too. Then it rewrites your weakest sections and tracks your score over time.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="#audit" class="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark">
          Audit my profile — it's free ${ee("arrowRight","h-5 w-5")}
        </a>
        <a href="#samples" class="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
          See a sample report
        </a>
      </div>
      <dl class="mt-10 grid max-w-md grid-cols-3 gap-4">
        <div>
          <dt class="text-2xl font-extrabold text-white">${ls}+</dt>
          <dd class="mt-1 text-xs text-slate-400">checkpoints</dd>
        </div>
        <div>
          <dt class="text-2xl font-extrabold text-white">8</dt>
          <dd class="mt-1 text-xs text-slate-400">sections audited</dd>
        </div>
        <div>
          <dt class="text-2xl font-extrabold text-white">Free</dt>
          <dd class="mt-1 text-xs text-slate-400">no sign-up</dd>
        </div>
      </dl>
    </div>
    ${n}
  </div>
</section>`}function nd(n,e,t,s){const r=bt(s);return`<button type="button" data-sample="${n}" class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand">
  <span class="grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold" style="background:rgba(10,102,194,.12);color:#0a66c2">${q(e.slice(0,2).toUpperCase())}</span>
  ${q(e)}
  <span class="rounded-full px-2 py-0.5 text-xs font-bold" style="background:rgba(100,116,139,.1);color:${r}">${s}</span>
  <span class="hidden text-slate-400 sm:inline">${q(t)}</span>
</button>`}function sd(n,e,t){return`<button type="button" data-tab="${n}" class="flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition">
  <span class="block">${e}</span>
  <span class="mt-0.5 block text-[11px] font-medium opacity-70">${t}</span>
</button>`}function Ir(n,e){return`<label class="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs font-medium text-slate-600 transition hover:border-brand/40 hover:bg-white">
  <input type="checkbox" data-flag="${n}" class="h-3.5 w-3.5 accent-brand"/>
  ${e}
</label>`}function Bv(){return`<section id="audit" class="bg-white py-20 sm:py-24">
  <div class="mx-auto max-w-3xl animate-rise px-4">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Upload a resume. Get your report.</h2>
      <p class="mt-3 text-lg text-slate-600">No LinkedIn API, no login, no LinkedIn password required. Upload a resume — or paste text, or try the LinkedIn URL demo.</p>
    </div>

    <div class="mx-auto mt-8 flex max-w-lg gap-1 rounded-xl bg-slate-100 p-1">
      ${sd("paste","Upload resume","Real analysis")}
      ${sd("url","LinkedIn URL","Demo data")}
    </div>

    <div data-panel="paste" class="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
      <p class="text-sm leading-relaxed text-slate-600">
        KY scores your headline, About, bullets, skills and education. Upload a resume or profile export, or paste the
        text directly — either way it is read and scored in your own browser and never sent to LinkedIn.
      </p>
      <details class="mt-3 rounded-lg bg-slate-50 px-3 py-2">
        <summary class="cursor-pointer text-sm font-semibold text-brand">How do I copy my profile?</summary>
        <ol class="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
          <li>Open your LinkedIn profile and press <kbd class="rounded border border-slate-300 bg-white px-1">Ctrl</kbd>+<kbd class="rounded border border-slate-300 bg-white px-1">A</kbd>, then <kbd class="rounded border border-slate-300 bg-white px-1">Ctrl</kbd>+<kbd class="rounded border border-slate-300 bg-white px-1">C</kbd>.</li>
          <li>Or use <em>More → Save to PDF</em> and upload the PDF below, or paste the text from it.</li>
          <li>A resume in PDF, DOCX or TXT works too — upload it and KY reads the text out of it for you.</li>
        </ol>
      </details>

      <div class="mt-4">
        <label for="resume-file" data-dropzone class="flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-center transition hover:border-brand hover:bg-brand/5">
          ${ee("fileText","h-5 w-5 text-slate-400")}
          <span data-upload-label class="text-sm font-semibold text-slate-700">Upload a resume or profile export — PDF, DOCX or TXT</span>
          <span class="text-xs text-slate-400">or drag a file here — read locally in your browser, never uploaded to a server</span>
        </label>
        <input id="resume-file" type="file" accept=".pdf,.docx,.txt,application/pdf,text/plain,application/vnd.openxmlformats-officedocument.wordprocessingml.document" class="sr-only"/>
        <p id="upload-status" class="mt-2 hidden text-xs font-medium"></p>
      </div>

      <div class="mt-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
        <span class="h-px flex-1 bg-slate-200"></span> or paste it directly <span class="h-px flex-1 bg-slate-200"></span>
      </div>

      <form id="paste-form" class="mt-4" novalidate>
        <label class="sr-only" for="profile-text">Your profile text</label>
        <textarea id="profile-text" name="profile-text" rows="11" spellcheck="false"
          placeholder="Alex Morgan&#10;Senior Product Manager | B2B SaaS | +38% activation&#10;&#10;About&#10;I'm a product manager with 9 years in B2B SaaS…&#10;&#10;Experience&#10;&#10;Senior Product Manager&#10;Acme Cloud&#10;Jan 2021 - Present&#10;• Led onboarding redesign that increased activation by 38%&#10;&#10;Skills&#10;Product Strategy, A/B Testing, SQL"
          class="w-full rounded-xl border border-slate-300 bg-white p-4 font-mono text-xs leading-relaxed text-slate-800 transition placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"></textarea>

        <p class="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">Things a text paste cannot see (optional)</p>
        <div class="mt-2 grid gap-2 sm:grid-cols-2">
          ${Ir("photo","I have a professional photo")}
          ${Ir("banner","I have a custom banner")}
          ${Ir("customUrl","I use a custom public URL")}
          ${Ir("featured","Featured section is set up")}
          ${Ir("active90","Posted or commented in the last 90 days")}
        </div>

        <p id="paste-error" class="mt-3 hidden text-sm font-medium text-rose-600"></p>
        <button type="submit" class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
          ${ee("zap","h-5 w-5")} Run real audit
        </button>
        <p class="mt-3 flex items-start gap-1.5 text-xs text-slate-400">
          ${ee("shield","h-3.5 w-3.5 mt-0.5 shrink-0")} Runs entirely in your browser. No account required, no file ever leaves your device, no LinkedIn access.
        </p>
      </form>
    </div>

    <div data-panel="url" class="mt-6 hidden text-center">
      <form id="audit-form" class="flex flex-col gap-3 sm:flex-row" novalidate>
        <label class="sr-only" for="profile-url">LinkedIn profile URL</label>
        <div class="relative flex-1 text-left">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">${ee("link","h-5 w-5")}</span>
          <input id="profile-url" name="profile-url" type="text" inputmode="url" autocomplete="off"
            placeholder="https://www.linkedin.com/in/your-profile"
            class="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-4 text-slate-900 transition placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"/>
        </div>
        <button type="submit" class="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
          ${ee("search","h-5 w-5")} Run demo audit
        </button>
      </form>
      <p id="audit-error" class="mt-3 hidden text-sm font-medium text-rose-600"></p>
      <div class="mt-6 flex flex-wrap items-center justify-center gap-2.5">
        <span class="text-sm font-medium text-slate-500">Or try a sample:</span>
        ${nd("sarah-mitchell-marketing","Sarah Mitchell","Marketing",56)}
        ${nd("michael-chen-swe","Michael Chen","Software",79)}
      </div>
      <p class="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800 ring-1 ring-amber-200">
        Demo mode scores <strong>sample</strong> data, not your profile — it exists so you can explore the full report
        without pasting anything. For a real score, use <em>Paste profile text</em>.
      </p>
    </div>
  </div>
</section>`}function rl(n,e,t,s){return`<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <div class="flex items-center gap-3">
    <span class="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">${ee(e,"h-5 w-5")}</span>
    <span class="text-sm font-bold text-slate-400">Step ${n}</span>
  </div>
  <h3 class="mt-4 text-lg font-bold text-slate-900">${t}</h3>
  <p class="mt-2 text-sm leading-relaxed text-slate-600">${s}</p>
</div>`}function uv(){return`<section id="how" class="bg-slate-50 py-20 sm:py-24">
  <div class="mx-auto max-w-6xl px-4">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">How it works</h2>
      <p class="mt-3 text-lg text-slate-600">Three steps. No LinkedIn API, no account required, nothing to install, nothing leaves your browser.</p>
    </div>
    <div class="mt-12 grid gap-6 md:grid-cols-3">
      ${rl("1","fileText","Upload your resume","A PDF, DOCX or TXT resume, or your pasted profile text — read and scored in your own browser. No LinkedIn API, no login, no credentials.")}
      ${rl("2","zap",`Runs ${ls}+ checkpoints`,"Headline, About, experience, education, skills, activity, media and presence. Sections a text paste cannot prove are left out of the score instead of guessed.")}
      ${rl("3","edit","Get rewrites, not just scores","A benchmarked score, your real keyword gaps, rewrites for your weakest sections, and a score history that shows whether the changes worked.")}
    </div>
  </div>
</section>`}function rd(n){const e=fo.find(i=>i.slug===n);if(!e)return"";const t=Hl(e.sections),r=[...e.sections].sort((i,o)=>i.score-o.score).slice(0,2).map(i=>{const o=qt.find(c=>c.key===i.key),l=bt(i.score);return`<span class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">${q(o?o.label:i.key)} <span style="color:${l}">${i.score}</span></span>`}).join("");return`<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
  <div class="flex items-center gap-4">
    <div class="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand/10 font-bold text-brand">${e.initials}</div>
    <div class="min-w-0 flex-1">
      <p class="font-bold text-slate-900">${q(e.name)}</p>
      <p class="text-sm text-slate-500">${q(e.role)} · ${q(e.company)}</p>
    </div>
    <div class="relative h-16 w-16 shrink-0">
      ${Gl(t,64,6)}
      <div class="absolute inset-0 grid place-items-center">
        <span class="text-sm font-extrabold" style="color:${bt(t)}">${t}</span>
      </div>
    </div>
  </div>
  <p class="mt-4 text-sm text-slate-600">Better than <strong class="text-slate-900">${e.percentile}%</strong> of ${q(e.industry)} profiles</p>
  <div class="mt-3 flex flex-wrap gap-2">${r}</div>
  <button type="button" data-sample-view="${e.slug}" class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand py-2.5 font-semibold text-brand transition hover:bg-brand hover:text-white">
    View full report ${ee("arrowRight","h-4 w-4")}
  </button>
</div>`}function hv(){return`<section id="samples" class="bg-white py-20 sm:py-24">
  <div class="mx-auto max-w-6xl px-4">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Sample reports</h2>
      <p class="mt-3 text-lg text-slate-600">Two realistic profiles. One underperforms, one nearly peaks — see exactly what KY points out in each.</p>
    </div>
    <div class="mt-12 grid gap-6 md:grid-cols-2">
      ${rd("sarah-mitchell-marketing")}
      ${rd("michael-chen-swe")}
    </div>
  </div>
</section>`}function dv(){const n=qt.map(e=>`<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div class="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">${ee(e.icon,"h-5 w-5")}</div>
    <h3 class="mt-3 font-bold text-slate-900">${q(e.label)}</h3>
    <p class="mt-1.5 text-sm leading-relaxed text-slate-600">${q(e.desc)}</p>
  </div>`);return`<section class="bg-slate-50 py-20 sm:py-24">
  <div class="mx-auto max-w-6xl px-4">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">What we audit</h2>
      <p class="mt-3 text-lg text-slate-600">Eight sections, ${ls}+ checkpoints — everything a recruiter or client scans in the first 60 seconds.</p>
    </div>
    <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      ${n.join("")}
    </div>
  </div>
</section>`}function fv(){return`<section id="pricing" class="bg-white py-20 sm:py-24">
  <div class="mx-auto max-w-6xl px-4">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Pricing</h2>
      <p class="mt-3 text-lg text-slate-600">The audit is free. Pro adds the tracking layer — and it is unlocked here so you can try it before it is charged for.</p>
    </div>
    <div class="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
      <div class="rounded-2xl border-2 border-brand bg-white p-7 shadow-sm">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-slate-900">Free</h3>
          <span class="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">Live now</span>
        </div>
        <p class="mt-2 text-sm text-slate-500">A real audit of the profile text you paste.</p>
        <p class="mt-5 text-4xl font-extrabold text-slate-900">$0<span class="text-base font-medium text-slate-400"> / forever</span></p>
        <ul class="mt-6 space-y-3 text-sm text-slate-600">
          ${["Real 8-section analysis of your text","Industry benchmark & percentile","Keyword gaps found in your actual profile","Rewrites for your weakest sections","1-page PDF report, resume-ready","Shareable LinkedIn post"].map(n=>`<li class="flex items-start gap-2.5">${ee("check","h-4 w-4 shrink-0 text-emerald-600")} ${n}</li>`).join("")}
        </ul>
        <a href="#audit" class="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-brand py-3 font-semibold text-white transition hover:bg-brand-dark">Run your free audit</a>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-slate-900">Pro</h3>
          <span class="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">Phase 2.5 preview</span>
        </div>
        <p class="mt-2 text-sm text-slate-500">For anyone who edits their profile more than once.</p>
        <p class="mt-5 text-4xl font-extrabold text-slate-900">$12<span class="text-base font-medium text-slate-400"> / month early bird</span></p>
        <ul class="mt-6 space-y-3 text-sm text-slate-600">
          ${["Score history & trend line","Keyword tracking with alerts on drops","What changed since your last audit","Unlimited saved audits in your browser","CSV & JSON export of every run"].map(n=>`<li class="flex items-start gap-2.5">${ee("check","h-4 w-4 shrink-0 text-brand")} ${n}</li>`).join("")}
        </ul>
        <button type="button" data-open-plan class="mt-7 inline-flex w-full items-center justify-center rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 transition hover:border-brand hover:text-brand">Try Pro features</button>
        <p class="mt-3 text-xs leading-relaxed text-slate-400">
          Billing is not connected in this build — Pro features are unlocked so you can evaluate them. Your data stays in
          your browser.
        </p>
      </div>
    </div>
  </div>
</section>`}function pv(){return`<section id="waitlist" class="bg-ink py-16 text-white sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center">
    <h2 class="text-3xl font-extrabold tracking-tight">Get the Pro launch</h2>
    <p class="mt-3 text-lg text-slate-300">
      Resume upload, real analysis and (optional) sign-in are live. Pro billing — weekly re-audits with email alerts and
      Stripe billing — is next. Waitlist members get early access and 3 months free.
    </p>
    <form id="waitlist-form" class="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" novalidate>
      <label class="sr-only" for="waitlist-email">Email address</label>
      <input id="waitlist-email" type="email" placeholder="you@example.com"
        class="w-full flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"/>
      <button type="submit" class="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-ink transition hover:bg-sky-400">Join waitlist</button>
    </form>
    <p class="mt-4 text-xs text-slate-500">
      Saved to this browser only (<span data-waitlist-count>${$l().length}</span> so far) — there is no server to send it to yet.
    </p>
  </div>
</section>`}function Yn(n,e){return`<details class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
    ${n}
    <span class="shrink-0 text-slate-400 transition-transform group-open:rotate-180">${ee("chevronDown","h-5 w-5")}</span>
  </summary>
  <p class="mt-3 text-sm leading-relaxed text-slate-600">${e}</p>
</details>`}function Cv(){return`<section id="faq" class="bg-slate-50 py-20 sm:py-24">
  <div class="mx-auto max-w-3xl px-4">
    <div class="text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">FAQ</h2>
    </div>
    <div class="mt-10 space-y-4">
      ${Yn("Is this using my real profile data?","It uses exactly what you paste or upload, and nothing else. KY runs in your browser: it never contacts LinkedIn, never asks for your password, and an uploaded file is read locally — only the resulting text is used, and it is never sent to a server. Sections a text paste cannot prove — photo, banner, posting cadence — are excluded from the score rather than guessed, unless you tick the boxes that confirm them.")}
      ${Yn("How is the score calculated?",`Each of the 8 sections is scored 0–100 against ${ls}+ checkpoints (length, keywords, quantified results, recency, media, visual polish). The overall score is a weighted blend — experience and headline weigh most, because that's what recruiters read first.`)}
      ${Yn("Is KY affiliated with LinkedIn?","No. KY is an independent, unofficial tool. We never ask for your LinkedIn credentials, and Phase 1 reads no real data at all.")}
      ${Yn("Where does my data go?","By default, nowhere: audits, tracked keywords and your saved history live in your browser's local storage. Clearing your browser data clears them, and you can export everything as JSON or CSV from the History page first. If you choose to sign in with Google or GitHub, your saved audits also sync to your account so you can see them on another device — that is opt-in, and your resume/profile text is never part of what gets synced or analysed.")}
      ${Yn("What does signing in add?","Nothing is required to run an audit — sign-in is entirely optional. Signing in with Google or GitHub lets your saved audit history follow you to another browser or device. It also lets KY log anonymous, aggregate usage stats (which mode was used, industry, score) to understand how the tool is used — never your resume or profile text, and never readable back from the client. See the README for the exact data model.")}
      ${Yn("Are the rewrites written by AI?","They are template rewrites assembled from facts found in your own text — your role, your numbers, your keywords. That is deliberate: no API key, no network call, and nothing invented. Anything KY cannot know is left as a [bracketed placeholder] for you to fill in.")}
      ${Yn("What is Phase 2.5?",'The tracking layer between the audit and the team features: score history with a trend line, keyword tracking with alerts when coverage drops, a "what changed since last audit" diff, and export. All of it is in this build, running locally.')}
    </div>
  </div>
</section>`}function gv(){return`<footer class="bg-ink py-12 text-slate-400">
  <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center">
    <div class="flex items-center gap-2.5">
      ${fC()}
      <span class="text-lg font-extrabold tracking-tight text-white">KY</span>
    </div>
    <p class="max-w-md text-sm">LinkedIn profile intelligence for job hunters, founders and the people hiring them.</p>
    <p class="max-w-md text-xs text-slate-500">
      Not affiliated with LinkedIn Corporation. Analysis runs in your browser on text you paste; nothing is uploaded and
      no LinkedIn data is fetched. The URL tab is labelled demo mode and scores sample data.
    </p>
    <p class="text-xs text-slate-600">© 2026 KY</p>
  </div>
</footer>`}function mv(n,e){var s,r;Ev(n),yv(n,e.onPaste),wv(n),_v(n,e.onAudit),Dv(n,e.onAudit),Iv(n),(s=n.querySelector("[data-open-history]"))==null||s.addEventListener("click",e.onHistory),(r=n.querySelector("[data-open-plan]"))==null||r.addEventListener("click",e.onOpenPlan);const t=n.querySelector("#auth-widget");return t?Yb(t):()=>{}}function Ev(n){const e=Array.from(n.querySelectorAll("[data-tab]")),t=Array.from(n.querySelectorAll("[data-panel]")),s=r=>{e.forEach(i=>{const o=i.dataset.tab===r;i.classList.toggle("bg-white",o),i.classList.toggle("text-brand",o),i.classList.toggle("shadow-sm",o),i.classList.toggle("text-slate-500",!o),i.setAttribute("aria-selected",o?"true":"false")}),t.forEach(i=>i.classList.toggle("hidden",i.dataset.panel!==r))};e.forEach(r=>r.addEventListener("click",()=>s(r.dataset.tab??"paste"))),s("paste")}function yv(n,e){const t=n.querySelector("#paste-form"),s=n.querySelector("#profile-text"),r=n.querySelector("#paste-error");!t||!s||!r||t.addEventListener("submit",i=>{i.preventDefault();const o=s.value.trim();if(o.length<80){r.textContent="Paste a bit more of your profile first — 80 characters is not enough to score.",r.classList.remove("hidden"),s.focus();return}r.classList.add("hidden");const l={};n.querySelectorAll("[data-flag]").forEach(c=>{c.dataset.flag&&(l[c.dataset.flag]=c.checked)}),e(o,l)})}function wv(n){const e=n.querySelector("#resume-file"),t=n.querySelector("[data-dropzone]"),s=n.querySelector("#upload-status"),r=n.querySelector("#profile-text");if(!e||!t||!s||!r)return;const i=(l,c)=>{s.textContent=l,s.classList.remove("hidden","text-emerald-600","text-rose-600","text-slate-500"),s.classList.add(c==="ok"?"text-emerald-600":c==="error"?"text-rose-600":"text-slate-500")},o=async l=>{if(l){if(!sv(l)){i("Unsupported file type. Upload a PDF, DOCX or TXT file.","error");return}i(`Reading ${l.name}…`,"busy");try{const c=await rv(l);r.value=c,i(`Loaded ${l.name} (${c.length.toLocaleString()} characters). Review it below, then run the audit.`,"ok"),da("resume_uploaded",{ext:l.name.split(".").pop()??"",chars:c.length}),r.scrollIntoView({behavior:"smooth",block:"center"})}catch(c){const B=c instanceof ho?c.message:"Could not read that file. Try pasting the text instead.";i(B,"error")}}};e.addEventListener("change",()=>{var l;o((l=e.files)==null?void 0:l[0]),e.value=""}),t.addEventListener("dragover",l=>{l.preventDefault(),t.classList.add("border-brand","bg-brand/5")}),t.addEventListener("dragleave",()=>{t.classList.remove("border-brand","bg-brand/5")}),t.addEventListener("drop",l=>{var c,B;l.preventDefault(),t.classList.remove("border-brand","bg-brand/5"),o((B=(c=l.dataTransfer)==null?void 0:c.files)==null?void 0:B[0])})}function _v(n,e){const t=n.querySelector("#audit-form"),s=n.querySelector("#profile-url"),r=n.querySelector("#audit-error");!t||!s||!r||t.addEventListener("submit",i=>{i.preventDefault();const o=s.value.trim();if(!o){r.textContent="Paste a LinkedIn profile URL first.",r.classList.remove("hidden"),s.focus();return}r.classList.add("hidden"),e(o)})}function Dv(n,e){const t=n.querySelector("#profile-url");n.querySelectorAll("[data-sample]").forEach(s=>{s.addEventListener("click",()=>{const r=fo.find(i=>i.slug===(s.dataset.sample??""));r&&(t&&(t.value=r.url),e(r.url))})}),n.querySelectorAll("[data-sample-view]").forEach(s=>{s.addEventListener("click",()=>{const r=fo.find(i=>i.slug===(s.dataset.sampleView??""));r&&e(r.url)})})}function Iv(n){const e=n.querySelector("#waitlist-form"),t=n.querySelector("#waitlist-email");!e||!t||e.addEventListener("submit",s=>{s.preventDefault();const r=t.value.trim();if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(r)){Qe("Enter a valid email first."),t.focus();return}const i=yg(r,"pro-early-bird");Qe(`Saved to this browser (${i.length} on your list). Nothing is sent — there is no server yet.`),t.value="";const o=n.querySelector("[data-waitlist-count]");o&&(o.textContent=String(i.length))})}function bv(n){const e=n.mode==="text"?["Parsing the text you pasted","Extracting roles, bullets, skills and dates",`Running ${ls}+ checkpoints`,`Searching for ${n.industry} keywords`,"Writing rewrites for your weakest sections","Comparing against your previous audits","Building your report"]:["Loading sample profile data",`Running ${ls}+ checkpoints`,`Benchmarking against ${n.industry} peers`,"Finding missing keywords","Writing your 3 priority fixes","Building your report"];return`<div class="grid min-h-screen place-items-center bg-slate-50 px-4">
  <div class="w-full max-w-md animate-pop rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
    <div class="flex items-center gap-3">
      <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">${ee("search","h-5 w-5")}</span>
      <div class="min-w-0">
        <p class="font-bold text-slate-900">Auditing ${q(n.name)}</p>
        <p class="truncate text-xs text-slate-500">${q(n.input.display)}</p>
      </div>
    </div>
    <ol class="mt-7 space-y-4">
      ${e.map(t=>`<li data-step data-state="pending" class="flex items-center gap-3">
          <span class="step-dot grid h-6 w-6 shrink-0 place-items-center rounded-full"></span>
          <span class="step-label text-sm">${t}</span>
        </li>`).join("")}
    </ol>
    <div class="mt-7 h-1.5 overflow-hidden rounded-full bg-slate-100">
      <div data-progress class="h-full rounded-full bg-brand transition-all duration-300" style="width:0%"></div>
    </div>
  </div>
</div>`}function vv(n,e){const t=Array.from(n.querySelectorAll("[data-step]")),s=n.querySelector("[data-progress]");let r=0;const i=()=>{var o;if(r>0){const l=t[r-1];if(l){l.setAttribute("data-state","done");const c=l.querySelector(".step-dot");c&&(c.innerHTML=ee("check","h-3.5 w-3.5 text-white"))}}r<t.length?((o=t[r])==null||o.setAttribute("data-state","active"),s&&(s.style.width=`${Math.round((r+1)/t.length*100)}%`),r+=1,window.setTimeout(i,360+r%2*140)):(s&&(s.style.width="100%"),window.setTimeout(e,500))};window.setTimeout(i,250)}const Tv={High:"bg-rose-50 text-rose-700 ring-1 ring-rose-200",Medium:"bg-amber-50 text-amber-700 ring-1 ring-amber-200",Low:"bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"},Av={up:"border-emerald-200 bg-emerald-50 text-emerald-800",down:"border-rose-200 bg-rose-50 text-rose-800","keyword-lost":"border-amber-200 bg-amber-50 text-amber-800","keyword-won":"border-emerald-200 bg-emerald-50 text-emerald-800","section-down":"border-amber-200 bg-amber-50 text-amber-800"};function xv(n){return n<50?"bg-rose-500":n<70?"bg-amber-500":"bg-emerald-500"}function Rv(n){const e=window.location.href.split("#")[0],t=n.mode==="text"?"":" (demo data)";return[`Just scored my LinkedIn profile: ${n.overall}/100 with KY${t}.`,"",`That's better than ${n.percentile}% of ${n.industry} profiles.`,"","The 3 fixes KY flagged:",...n.fixes.map((s,r)=>`${r+1}. ${s.title}`),"",`Try it free: ${e}`,"","#LinkedIn #PersonalBrand #CareerGrowth"].join(`
`)}function Sv(n){const e=n.mode==="text"?"real analysis of pasted text":"demo estimate",t=[`KY Profile Audit — ${n.name}`,`Source: ${n.input.display} (${e})`,`Generated: ${new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}`,"",`Overall: ${n.overall}/100 — better than ${n.percentile}% of ${n.industry} profiles`];if(n.excluded.length&&t.push(`Scored from ${n.measuredCount} of 8 sections (not readable from text: ${n.excluded.join(", ")})`),n.signals.length&&t.push(`Parsed: ${n.signals.join(" · ")}`),t.push("","Section scores:",...n.sections.map(s=>`  - ${s.label}: ${s.basis==="unknown"?"not scored":`${s.score}/100`}${s.issues.length?` (${s.issues.join("; ")})`:""}`),"","Top 3 fixes:",...n.fixes.map((s,r)=>`${r+1}. [${s.impact}] ${s.title} — ${s.detail}`)),n.keywordReport?(t.push("",`Keywords found (${n.keywordReport.covered.length}): ${n.keywordReport.covered.join(", ")||"none"}`),t.push(`Keyword gaps (${n.keywordReport.gaps.length}): ${n.keywordReport.gaps.join(", ")||"none"}`)):t.push("",`Keyword gaps: ${n.keywords.join(", ")}`),n.rewrites.length){t.push("","Rewrites:");for(const s of n.rewrites)t.push(`  ${s.title}`),t.push(`    Before: ${s.before.replace(/\n/g," ")}`),t.push(`    After:  ${s.after.replace(/\n/g," ")}`)}else t.push("","Headline:",`  Before: ${n.headlineFix.before}`,`  After:  ${n.headlineFix.after}`);return t.push("","KY — LinkedIn Profile Audit. Not affiliated with LinkedIn."),t.join(`
`)}function Pv(n){const e=bt(n.overall),t=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),s=n.mode==="text",r=Un().length,i=s?`Real analysis of the text you pasted — ${q(n.input.display)}`:n.source==="curated"?"Sample profile — demo data, not your profile":`Demo estimate for ${q(n.input.display)} — sample-based data`;return`<div class="min-h-screen bg-slate-50">
  <header class="no-print sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <a href="#" data-home class="flex items-center gap-2.5">
        <span class="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-sky-400 text-xs font-black text-white">KY</span>
        <span class="font-extrabold tracking-tight text-white">KY</span>
      </a>
      <div class="flex items-center gap-2 sm:gap-3">
        ${s?`<span class="hidden items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 sm:inline-flex">
          ${ee("check","h-3.5 w-3.5")} Real analysis
        </span>`:`<span class="hidden items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300 sm:inline-flex">
          ${ee("alert","h-3.5 w-3.5")} Demo data
        </span>`}
        <button data-action="history" class="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
          ${ee("history","h-4 w-4")} <span class="hidden sm:inline">History${r?` (${r})`:""}</span>
        </button>
        <button data-action="restart" class="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
          ${ee("refresh","h-4 w-4")} <span class="hidden sm:inline">New audit</span>
        </button>
      </div>
    </div>
  </header>

  <main class="screen-only mx-auto max-w-6xl px-4 py-8">
    <p class="no-print text-xs text-slate-500">${i}. Generated ${t}. Not affiliated with LinkedIn.</p>

    ${kv(n)}
    ${Ov(n)}

    <section class="animate-rise rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div class="flex flex-col gap-8 sm:flex-row sm:items-center">
        <div class="flex min-w-0 flex-1 items-center gap-4">
          <div class="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand/10 text-xl font-extrabold text-brand">${q(n.initials)}</div>
          <div class="min-w-0">
            <h1 class="truncate text-2xl font-extrabold text-slate-900">${q(n.name)}</h1>
            <p class="truncate text-slate-600">${q(n.role)}</p>
            <p class="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
              <span class="inline-flex items-center gap-1.5">${ee("globe","h-4 w-4")} ${q(n.industry)}</span>
              <span class="inline-flex items-center gap-1.5">${ee("mapPin","h-4 w-4")} ${q(n.location)}</span>
            </p>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="relative h-[170px] w-[170px] shrink-0">
            ${Gl(n.overall,170,14)}
            <div class="absolute inset-0 grid place-items-center">
              <div class="text-center">
                <span class="text-5xl font-extrabold tabular-nums" style="color:${e}">${n.overall}</span>
                <span class="mt-1 block text-xs font-medium text-slate-400">out of 100</span>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <p class="text-sm font-semibold text-slate-900">Better than ${n.percentile}%</p>
            <p class="text-sm text-slate-500">of ${q(n.industry)} profiles</p>
            ${s&&n.excluded.length?`<p class="mt-2 text-xs text-slate-400">Scored from ${n.measuredCount} of 8 sections</p>`:""}
          </div>
        </div>
      </div>

      ${Nv(n)}

      <p class="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">${q(n.summary)}</p>

      ${n.signals.length?`<div class="mt-4 flex flex-wrap gap-2">
        ${n.signals.map(o=>`<span class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">${q(o)}</span>`).join("")}
      </div>`:""}
    </section>

    <div class="mt-6 grid items-start gap-6 lg:grid-cols-5">
      <div class="space-y-6 lg:col-span-3">
        ${Lv(n)}
        ${n.keywordReport?Fv(n):Gv(n)}
        ${n.rewrites.length?Mv(n):Hv(n)}
      </div>
      <div class="space-y-6 lg:col-span-2">
        ${Uv(n)}
        ${$v(n)}
        ${n.excluded.length?Vv(n):""}
      </div>
    </div>

    <section class="no-print mt-8 flex flex-wrap gap-3">
      <button data-action="share" class="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark">
        ${ee("share","h-5 w-5")} Share on LinkedIn
      </button>
      <button data-action="save" class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
        ${ee("history","h-5 w-5")} Save to history
      </button>
      <button data-action="copy" class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
        ${ee("copy","h-5 w-5")} Copy report
      </button>
      <button data-action="print" class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-brand hover:text-brand">
        ${ee("download","h-5 w-5")} Download PDF
      </button>
    </section>
  </main>

  <footer class="no-print py-8 text-center text-xs text-slate-400">KY · ${s?"Phase 2 real analysis":"demo data"} · ${t}</footer>

  ${jv(n)}
</div>`}function kv(n){return n.linkedInUrl?`<section class="no-print animate-rise mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3">
  <p class="flex items-center gap-2 text-sm text-sky-900">
    ${ee("link","h-4 w-4 shrink-0 text-sky-600")}
    Found a LinkedIn profile link in your text: <span class="font-semibold">${q(n.linkedInUrl)}</span>
  </p>
  <button type="button" data-action="linkedin-demo" data-linkedin-url="${q(n.linkedInUrl)}"
    class="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-sky-300 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-sky-100">
    See a demo LinkedIn audit for it too ${ee("arrowRight","h-3.5 w-3.5")}
  </button>
</section>`:""}function Ov(n){return n.alerts.length?`<section class="no-print animate-rise mt-4 space-y-2">
  ${n.alerts.map(e=>`<div class="flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium ${Av[e.kind]}">
      <span class="mt-0.5 shrink-0">${ee(e.kind==="up"||e.kind==="keyword-won"?"trendUp":"bell","h-4 w-4")}</span>
      <span>${q(e.text)}</span>
    </div>`).join("")}
</section>`:""}function Nv(n){const e=n.delta;if(!e)return"";const t=e.overall>0,s=e.overall===0,r=s?"text-slate-500":t?"text-emerald-600":"text-rose-600",i=s?"→":t?"↑":"↓",o=e.sections.length?e.sections.map(l=>{const c=l.change>0?"text-emerald-600":"text-rose-600";return`<span class="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
        ${q(l.label)} <span class="${c}">${l.change>0?"+":""}${l.change}</span></span>`}).join(""):'<span class="text-xs text-slate-400">No individual section moved.</span>';return`<div class="mt-6 rounded-xl border border-slate-200 bg-white p-4">
  <p class="flex flex-wrap items-baseline gap-2 text-sm">
    <span class="font-bold ${r}">${i} ${t?"+":""}${e.overall} points</span>
    <span class="text-slate-500">vs your audit on ${q(e.previousDate)}</span>
  </p>
  <div class="mt-2.5 flex flex-wrap gap-2">${o}</div>
</div>`}function Lv(n){return`<section class="animate-rise rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style="animation-delay:0.05s">
  <h2 class="text-lg font-bold text-slate-900">Section scores</h2>
  <p class="mt-0.5 text-sm text-slate-500">
    ${n.mode==="text"?`8 sections · ${n.measuredCount} scored from your text`:"8 sections · 120+ checkpoints"}
  </p>
  <div class="mt-5 space-y-5">
    ${n.sections.map(e=>{const t=qt.find(i=>i.key===e.key),s=bt(e.score),r=e.basis==="unknown";return`<div class="flex items-start gap-3">
        <div class="grid h-9 w-9 shrink-0 place-items-center rounded-lg ${r?"bg-slate-50 text-slate-300":"bg-slate-100 text-slate-500"}">${ee(t?t.icon:"target")}</div>
        <div class="min-w-0 flex-1">
          <div class="flex items-baseline justify-between gap-2">
            <p class="text-sm font-semibold text-slate-800">${q(e.label)}</p>
            ${r?'<p class="text-xs font-semibold text-slate-400">not scored</p>':`<p class="text-sm font-bold tabular-nums" style="color:${s}">${e.score}</p>`}
          </div>
          ${r?"":`<div class="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
            <div class="bar-fill h-full rounded-full ${xv(e.score)}" style="width:${e.score}%"></div>
          </div>`}
          ${e.issues.length?`<p class="mt-1.5 text-xs leading-relaxed text-slate-500">${e.issues.map(q).join(" · ")}</p>`:r?"":'<p class="mt-1.5 text-xs font-medium text-emerald-600">No major issues found here.</p>'}
          ${e.wins.length?`<p class="mt-1 flex flex-wrap gap-1.5">${e.wins.slice(0,3).map(i=>`<span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">${ee("check","h-3 w-3")} ${q(i)}</span>`).join("")}</p>`:""}
        </div>
      </div>`}).join("")}
  </div>
</section>`}function Fv(n){const e=n.keywordReport;if(!e)return"";const t=e.coverage.length?Math.round(e.covered.length/e.coverage.length*100):0,s=r=>{const i=r.tracked?ee("star","h-3 w-3 text-amber-500"):"";return r.found?`<span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-800" title="Found in: ${r.where.map(q).join(", ")}">
      ${ee("check","h-3.5 w-3.5 text-emerald-600")} ${i} ${q(r.keyword)}</span>`:`<span class="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-sm font-medium text-rose-800">
      ${ee("x","h-3.5 w-3.5 text-rose-500")} ${i} ${q(r.keyword)}</span>`};return`<section class="animate-rise rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style="animation-delay:0.1s">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <h2 class="text-lg font-bold text-slate-900">Keyword coverage</h2>
    <span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">${e.covered.length}/${e.coverage.length} found · ${t}%</span>
  </div>
  <p class="mt-0.5 text-sm text-slate-500">
    Every ${q(e.industry.label)} term recruiters search, actually searched for in the text you pasted.
  </p>
  <p class="mt-3 rounded-lg border border-slate-100 bg-slate-50 p-3 text-xs leading-relaxed text-slate-500">
    <span class="font-semibold text-slate-600">What KY benchmarks ${q(e.industry.label)} against:</span>
    ${q(e.industry.description)}
  </p>

  ${e.gaps.length?`<p class="mt-4 text-xs font-bold uppercase tracking-wide text-rose-500">Missing (${e.gaps.length})</p>
  <div class="mt-2 flex flex-wrap gap-2">${e.coverage.filter(r=>!r.found).map(s).join("")}</div>`:'<p class="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-medium text-emerald-700">Every tracked term is present.</p>'}

  ${e.covered.length?`<p class="mt-5 text-xs font-bold uppercase tracking-wide text-emerald-600">Found (${e.covered.length})</p>
  <div class="mt-2 flex flex-wrap gap-2">${e.coverage.filter(r=>r.found).map(s).join("")}</div>`:""}

  <p class="mt-4 text-xs text-slate-400">
    ${ee("star","h-3 w-3 inline text-amber-500")} = a keyword you track. Add them on the History page to get alerted if one drops off.
  </p>
</section>`}function Mv(n){return`<section class="animate-rise rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style="animation-delay:0.15s">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <h2 class="text-lg font-bold text-slate-900">Rewrites</h2>
    <span class="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-bold text-brand">built from your own text</span>
  </div>
  <p class="mt-0.5 text-sm text-slate-500">
    Template rewrites assembled from facts KY found in your paste — no invented credentials. Fill the
    <span class="rounded bg-slate-100 px-1 font-mono text-xs">[brackets]</span> and delete them.
  </p>
  <div class="mt-5 space-y-5">
    ${n.rewrites.map((e,t)=>`<div class="rounded-xl border border-slate-200 p-4">
      <div class="flex items-center justify-between gap-3">
        <p class="text-sm font-bold text-slate-900">${q(e.title)}</p>
        ${e.needsEdit?'<span class="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700 ring-1 ring-amber-200">needs your input</span>':'<span class="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-200">ready to use</span>'}
      </div>
      <p class="mt-3 text-xs font-semibold uppercase tracking-wide text-rose-400">Before</p>
      <p class="mt-1 rounded-lg bg-rose-50 p-3 text-sm leading-relaxed text-slate-700">${q(e.before)}</p>
      <p class="mt-3 text-xs font-semibold uppercase tracking-wide text-emerald-600">After</p>
      <p class="mt-1 whitespace-pre-line rounded-lg bg-emerald-50 p-3 text-sm font-medium leading-relaxed text-slate-900">${q(e.after)}</p>
      <div class="mt-3 flex items-start justify-between gap-3">
        <p class="text-xs leading-relaxed text-slate-500">${q(e.why)}</p>
        <button data-action="copy-rewrite" data-index="${t}" class="no-print shrink-0 rounded-lg border border-slate-300 bg-white p-2 text-slate-600 transition hover:border-brand hover:text-brand" title="Copy this rewrite">
          ${ee("copy","h-3.5 w-3.5")}
        </button>
      </div>
    </div>`).join("")}
  </div>
</section>`}function Vv(n){return`<section class="animate-rise rounded-2xl border border-dashed border-slate-300 bg-white p-5 shadow-sm" style="animation-delay:0.2s">
  <h2 class="text-sm font-bold text-slate-900">${n.excluded.length} sections were not scored</h2>
  <p class="mt-1.5 text-xs leading-relaxed text-slate-500">
    ${q(n.excluded.join(", "))} cannot be read from pasted text. KY left them out of your score rather than
    guessing — tick the boxes on the audit form to include them.
  </p>
</section>`}function Gv(n){return`<section class="animate-rise rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style="animation-delay:0.1s">
  <div class="flex items-center gap-2">
    <h2 class="text-lg font-bold text-slate-900">Keyword gaps</h2>
    <span class="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">top ${n.keywords.length}</span>
  </div>
  <p class="mt-0.5 text-sm text-slate-500">Terms recruiters and clients search for in ${q(n.industry)}.</p>
  <div class="mt-4 flex flex-wrap gap-2">
    ${n.keywords.map(e=>`<span class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
        ${ee("x","h-3.5 w-3.5 text-rose-500")} ${q(e)}</span>`).join("")}
  </div>
  <p class="mt-4 rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-500">
    Demo mode shows sample gaps. Paste your profile text for a real keyword check against your own words.
  </p>
</section>`}function Hv(n){return`<section class="animate-rise rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style="animation-delay:0.15s">
  <h2 class="text-lg font-bold text-slate-900">Headline, rewritten</h2>
  <p class="mt-0.5 text-sm text-slate-500">The single highest-impact change on your profile.</p>
  <div class="mt-4 space-y-3">
    <div class="flex items-start gap-3 rounded-xl border border-rose-100 bg-rose-50 p-4">
      <span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-600">${ee("x","h-3.5 w-3.5")}</span>
      <div class="min-w-0">
        <p class="text-xs font-semibold uppercase tracking-wide text-rose-400">Before</p>
        <p class="mt-1 text-sm text-slate-700">${q(n.headlineFix.before)}</p>
      </div>
    </div>
    <div class="flex justify-center">${ee("arrowRight","h-5 w-5 rotate-90 text-slate-300")}</div>
    <div class="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
      <span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">${ee("check","h-3.5 w-3.5")}</span>
      <div class="min-w-0 flex-1">
        <p class="text-xs font-semibold uppercase tracking-wide text-emerald-600">After</p>
        <p class="mt-1 text-sm font-semibold text-slate-900">${q(n.headlineFix.after)}</p>
      </div>
      <button data-action="copy-headline" class="no-print shrink-0 rounded-lg border border-emerald-300 bg-white p-1.5 text-emerald-700 transition hover:bg-emerald-100" title="Copy this headline">
        ${ee("copy","h-3.5 w-3.5")}
      </button>
    </div>
    <div class="rounded-lg border border-slate-100 bg-slate-50 p-3.5 text-sm leading-relaxed text-slate-600">
      <span class="font-semibold text-slate-800">Why it works:</span> ${q(n.headlineFix.why)}
    </div>
  </div>
</section>`}function Uv(n){const e=n.sections.filter(t=>t.basis!=="unknown").map(t=>({label:t.label,value:t.score}));return`<section class="animate-rise rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style="animation-delay:0.1s">
  <h2 class="text-lg font-bold text-slate-900">Profile radar</h2>
  <p class="mt-0.5 text-sm text-slate-500">Where you're strong, where you leak impressions.</p>
  <div class="mt-2">${Bg(e)}</div>
</section>`}function $v(n){return`<section class="animate-rise rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" style="animation-delay:0.15s">
  <h2 class="text-lg font-bold text-slate-900">Your top 3 fixes</h2>
  <p class="mt-0.5 text-sm text-slate-500">Ranked by impact on your overall score.</p>
  <div class="mt-4 space-y-3">
    ${n.fixes.map((e,t)=>`<div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-bold text-slate-900"><span class="mr-1.5 text-slate-400">${t+1}.</span>${q(e.title)}</p>
          <span class="shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${Tv[e.impact]}">${e.impact}</span>
        </div>
        <p class="mt-1.5 text-sm leading-relaxed text-slate-600">${q(e.detail)}</p>
      </div>`).join("")}
  </div>
</section>`}function jv(n){const e=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),t=n.sections.filter(i=>i.basis!=="unknown"),s=n.keywordReport?n.keywordReport.gaps:n.keywords,r=n.rewrites.find(i=>i.key==="headline");return`<div class="print-only">
  <div class="print-head">
    <div>
      <h1 class="print-name">${q(n.name)}</h1>
      <p class="print-sub">${q(n.role)} · ${q(n.industry)} · ${q(n.location)}</p>
    </div>
    <div class="print-score">
      <span class="print-score-num" style="color:${bt(n.overall)}">${n.overall}</span>
      <span class="print-score-of">/100 · top ${100-n.percentile}%</span>
    </div>
  </div>
  <p class="print-meta">
    ${n.mode==="text"?"Real analysis of pasted profile text":"Demo data"} · ${e} ·
    ${n.mode==="text"?`${n.measuredCount} of 8 sections scored`:"8 sections scored"} · KY Profile Audit
  </p>

  <div class="print-grid">
    <div>
      <h2 class="print-h">Section scores</h2>
      <table class="print-table">
        ${t.map(i=>`<tr><td>${q(i.label)}</td><td class="print-num">${i.score}</td><td class="print-bar"><span style="width:${i.score}%;background:${bt(i.score)}"></span></td></tr>`).join("")}
      </table>
      ${n.excluded.length?`<p class="print-note">Not scored (not readable from text): ${q(n.excluded.join(", "))}</p>`:""}

      <h2 class="print-h">Top 3 fixes</h2>
      <ol class="print-list">
        ${n.fixes.map(i=>`<li><strong>${q(i.title)}</strong> — ${q(i.detail)}</li>`).join("")}
      </ol>
    </div>

    <div>
      <h2 class="print-h">Keyword gaps</h2>
      <p class="print-chips">${s.length?s.map(q).join(" · "):"None — full coverage."}</p>
      ${n.keywordReport?`<p class="print-note">Found: ${q(n.keywordReport.covered.join(", ")||"none")}</p>`:""}

      <h2 class="print-h">Headline</h2>
      <p class="print-before">${q(r?r.before:n.headlineFix.before)}</p>
      <p class="print-after">${q(r?r.after:n.headlineFix.after)}</p>
      <p class="print-note">${q(r?r.why:n.headlineFix.why)}</p>

      ${n.rewrites.filter(i=>i.key==="about").length?`<h2 class="print-h">About — skeleton</h2>
      <p class="print-pre">${q(n.rewrites.find(i=>i.key==="about").after)}</p>`:""}
    </div>
  </div>

  <p class="print-foot">Generated by KY — LinkedIn Profile Audit. Not affiliated with LinkedIn Corporation.</p>
</div>`}function Jv(n,e,t){n.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",async()=>{const i=r.dataset.action;if(i==="restart")t.onRestart();else if(i==="history")t.onHistory();else if(i==="save")t.onSave(e),Qe("Saved to this browser — the next audit will show what changed"),r.textContent="Saved to history",r.disabled=!0,r.classList.add("opacity-60");else if(i==="share"){const o=await Mi(Rv(e));Qe(o?"Copied — paste it straight into LinkedIn":"Copy failed — select the text manually")}else if(i==="copy"){const o=await Mi(Sv(e));Qe(o?"Full report copied to clipboard":"Copy failed")}else if(i==="print")window.print();else if(i==="copy-headline"){const o=await Mi(e.headlineFix.after);Qe(o?"Headline copied":"Copy failed")}else if(i==="copy-rewrite"){const o=Number(r.dataset.index),l=e.rewrites[o];if(!l)return;const c=await Mi(l.after);Qe(c?"Rewrite copied":"Copy failed")}else if(i==="linkedin-demo"){const o=r.dataset.linkedinUrl;o&&t.onLinkedInDemo(o)}})});const s=n.querySelector("[data-home]");s==null||s.addEventListener("click",r=>{r.preventDefault(),t.onRestart()})}function qv(n){return new Date(n).toLocaleDateString("en-GB",{day:"numeric",month:"short"})}function Kv(n){return new Date(n).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}function zv(n){return n.mode==="text"?'<span class="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-200">Real</span>':'<span class="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700 ring-1 ring-amber-200">Demo</span>'}function pC(){var l;const n=Un(),e=Vr(),t=ud(),s=new Map;for(const c of n)s.set(c.profileKey,(s.get(c.profileKey)??0)+1);const r=((l=[...s.entries()].sort((c,B)=>B[1]-c[1])[0])==null?void 0:l[0])??null,i=r?n.filter(c=>c.profileKey===r).sort((c,B)=>c.createdAt.localeCompare(B.createdAt)):[],o=i.map(c=>({label:c.label,value:c.overall,when:qv(c.createdAt)}));return`<div class="min-h-screen bg-slate-50">
  <header class="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
      <button type="button" data-back class="inline-flex items-center gap-2 text-sm font-semibold text-white">
        ${ee("arrowRight","h-4 w-4 rotate-180")} Back
      </button>
      <div class="flex items-center gap-2.5">
        <span class="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-sky-400 text-xs font-black text-white">KY</span>
        <span class="font-extrabold tracking-tight text-white">Audit history</span>
      </div>
      <div class="flex items-center gap-2">
        <button type="button" data-export="csv" class="hidden rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10 sm:inline-flex">CSV</button>
        <button type="button" data-export="json" class="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10">Export</button>
      </div>
    </div>
  </header>

  <main class="mx-auto max-w-5xl px-4 py-8">
    <p class="text-xs text-slate-500">
      ${t?`Account: ${q(t.name||t.email)} · `:""}Stored in this browser only. Nothing is uploaded.
    </p>

    ${n.length===0?Wv():""}

    ${o.length>=2?`<section class="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h2 class="text-lg font-bold text-slate-900">Score trend</h2>
        <p class="text-sm text-slate-500">${q(i[0].label)} · ${i.length} audits</p>
      </div>
      <p class="mt-0.5 text-sm text-slate-500">${Qv(i)}</p>
      <div class="mt-4">${ug(o)}</div>
    </section>`:""}

    ${Xv(e)}

    ${n.length?`<section class="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex items-center justify-between gap-3">
        <h2 class="text-lg font-bold text-slate-900">Saved audits</h2>
        <button type="button" data-clear class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition hover:text-rose-600">
          ${ee("trash","h-3.5 w-3.5")} Clear all
        </button>
      </div>
      <ul class="mt-4 divide-y divide-slate-100">
        ${n.map(Yv).join("")}
      </ul>
    </section>`:""}
  </main>
</div>`}function Qv(n){const e=n[0],t=n[n.length-1],s=t.overall-e.overall,r=s>0?"up":s<0?"down":"flat";return`First audit ${e.overall} → latest ${t.overall} — ${r} ${Math.abs(s)} point${Math.abs(s)===1?"":"s"} across ${n.length} runs.`}function Wv(){return`<section class="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
  <span class="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">${ee("history","h-6 w-6")}</span>
  <h2 class="mt-4 text-lg font-bold text-slate-900">No audits saved yet</h2>
  <p class="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
    Run an audit and choose <em>Save to history</em> on the report. Your score, keyword coverage and section scores are
    kept in this browser so the next run can show you what changed.
  </p>
</section>`}function Yv(n){const e=bt(n.overall);return`<li class="flex flex-wrap items-center gap-3 py-3.5">
  <div class="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-extrabold" style="background:${e}1a;color:${e}">${n.overall}</div>
  <div class="min-w-0 flex-1">
    <p class="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900">
      ${q(n.label)} ${zv(n)}
    </p>
    <p class="truncate text-xs text-slate-500">${q(n.industry)} · ${Kv(n.createdAt)} · ${q(n.source)}</p>
    ${n.gaps.length?`<p class="mt-1 truncate text-xs text-slate-400">Gaps: ${q(n.gaps.slice(0,5).join(", "))}</p>`:""}
  </div>
  <button type="button" data-delete="${n.id}" class="shrink-0 rounded-lg p-2 text-slate-300 transition hover:bg-rose-50 hover:text-rose-600" title="Delete this audit">
    ${ee("trash","h-4 w-4")}
  </button>
</li>`}function Xv(n){return`<section class="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 class="text-lg font-bold text-slate-900">Tracked keywords</h2>
  <p class="mt-0.5 text-sm text-slate-500">
    Terms you want to rank for. Every audit checks whether each one still appears on your profile, and alerts you if it
    disappears.
  </p>
  <form id="tracked-form" class="mt-4 flex gap-2">
    <label class="sr-only" for="tracked-input">Keyword</label>
    <input id="tracked-input" type="text" placeholder="e.g. Lifecycle Marketing"
      class="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40"/>
    <button type="submit" class="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark">
      ${ee("plus","h-4 w-4")} Track
    </button>
  </form>
  <div class="mt-4 flex flex-wrap gap-2">
    ${n.length?n.map(e=>`<span class="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 py-1.5 pl-3 pr-1.5 text-sm font-medium text-brand">
        ${q(e)}
        <button type="button" data-untrack="${q(e)}" class="grid h-5 w-5 place-items-center rounded-full transition hover:bg-brand/15" title="Stop tracking">
          ${ee("x","h-3 w-3")}
        </button>
      </span>`).join(""):'<p class="text-sm text-slate-400">Nothing tracked yet — add the terms recruiters should find you for.</p>'}
  </div>
</section>`}function CC(n,e){var r,i;(r=n.querySelector("[data-back]"))==null||r.addEventListener("click",e.onBack),n.querySelectorAll("[data-export]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.export;if(!Un().length){Qe("Nothing to export yet — run an audit first.");return}const c=new Date().toISOString().slice(0,10);l==="csv"?(iu(`ky-audits-${c}.csv`,_g(),"text/csv"),Qe("CSV downloaded")):(iu(`ky-audits-${c}.json`,wg(),"application/json"),Qe("JSON downloaded"))})}),n.querySelectorAll("[data-delete]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.delete;l&&(fg(l),Zi(n,e),Qe("Audit deleted"))})}),(i=n.querySelector("[data-clear]"))==null||i.addEventListener("click",()=>{pg(),Zi(n,e),Qe("History cleared")});const t=n.querySelector("#tracked-form"),s=n.querySelector("#tracked-input");t==null||t.addEventListener("submit",o=>{o.preventDefault();const l=(s==null?void 0:s.value.trim())??"";l&&(mg(l),s&&(s.value=""),Zi(n,e),Qe(`Tracking "${l}"`))}),n.querySelectorAll("[data-untrack]").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.untrack;l&&(Eg(l),Zi(n,e))})})}function Zi(n,e){n.parentElement&&(n.innerHTML=pC(),CC(n,e))}const Zv=["Score history with a trend line across every run","Keyword tracking — alerts when a term drops off your profile",'"What changed since your last audit" diff on each report',"Unlimited saved audits, plus CSV and JSON export"],eT=["Weekly automated re-audits and email alerts","Stripe billing — no payment provider is connected","Team and agency features (Phase 4)"];function tT(){const n=document.createElement("div");n.id="plan-modal",n.className="fixed inset-0 z-50 grid place-items-center bg-ink/60 p-4 backdrop-blur-sm",n.innerHTML=`<div role="dialog" aria-modal="true" aria-labelledby="plan-title" class="animate-pop w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
  <div class="flex items-start justify-between gap-4 border-b border-slate-100 bg-slate-50 p-6">
    <div>
      <p class="text-xs font-bold uppercase tracking-wider text-amber-600">Phase 2.5 preview</p>
      <h2 id="plan-title" class="mt-1 text-xl font-extrabold text-slate-900">KY Pro</h2>
      <p class="mt-1 text-sm text-slate-500">$12 / month early bird — not chargeable in this build.</p>
    </div>
    <button type="button" data-close class="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700" aria-label="Close">
      ${ee("x","h-5 w-5")}
    </button>
  </div>

  <div class="max-h-[60vh] overflow-y-auto p-6">
    <h3 class="text-sm font-bold text-slate-900">What Pro adds</h3>
    <ul class="mt-3 space-y-2 text-sm text-slate-600">
      ${Zv.map(e=>`<li class="flex items-start gap-2.5">${ee("check","h-4 w-4 mt-0.5 shrink-0 text-emerald-600")} ${e}</li>`).join("")}
    </ul>

    <h3 class="mt-6 text-sm font-bold text-slate-900">Not in this build</h3>
    <ul class="mt-3 space-y-2 text-sm text-slate-500">
      ${eT.map(e=>`<li class="flex items-start gap-2.5">${ee("x","h-4 w-4 mt-0.5 shrink-0 text-slate-300")} ${e}</li>`).join("")}
    </ul>

    <div class="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h3 class="text-sm font-bold text-slate-900">Account</h3>
      <p class="mt-1 text-xs leading-relaxed text-slate-500">
        ${uC()?"Sign in with Google or GitHub from the top of the page to sync your saved audits across devices. It is optional — every audit mode works fully signed out.":"Sign-in is not configured for this build (no Firebase project). Every audit mode still works fully — this only affects cross-device history."}
      </p>
    </div>
  </div>

  <div class="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
    <p class="text-xs text-slate-400">Pro features are already unlocked in this preview.</p>
    <button type="button" data-close class="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">Close</button>
  </div>
</div>`,document.body.appendChild(n),nT(n)}function nT(n){const e=()=>n.remove();n.querySelectorAll("[data-close]").forEach(t=>t.addEventListener("click",e)),n.addEventListener("click",t=>{t.target===n&&e()})}const Fl=[{key:"marketing",label:"Marketing",description:'A strong Marketing profile or resume names the channels actually owned (SEO, paid, lifecycle, brand), ties every campaign to a measurable outcome (traffic, CAC, conversion, pipeline), and shows fluency with the tools recruiters search for (GA4, HubSpot, Looker) rather than listing "digital marketing" as a buzzword.',keywords:["SEO","Content Strategy","GA4","Email Marketing","CRO","A/B Testing","Brand Strategy","Lifecycle Marketing","Paid Media","HubSpot","Marketing Automation","Demand Generation","Attribution","Positioning"],headlines:[{before:"Marketing enthusiast looking for new opportunities",after:"Marketing Manager | Growth & Content for DTC Brands | +142% organic traffic in 12 months",why:"Recruiters search by role, niche and outcome. This headline matches all three — and the number gives it proof."},{before:"Digital marketing / social media / content",after:"Content & Social Lead | B2B SaaS | 3.2M impressions across 12 channels",why:"Keyword soup reads as spam; role + niche + proof reads as expertise."}]},{key:"software",label:"Software",description:"A strong Software profile or resume states the stack and scale you actually operate at (languages, cloud, distributed systems), attaches an ownership outcome to each role (uptime, latency, throughput, incidents resolved), and shows technical leadership (design docs, mentoring, on-call) rather than just a list of frameworks.",keywords:["System Design","AWS","Kubernetes","Observability","Technical Leadership","Incident Response","Mentoring","Open Source","CI/CD","Microservices","API Design","Code Review","Scalability","Cloud Architecture"],headlines:[{before:"Software Engineer at Acme",after:"Senior Software Engineer | Distributed Systems & Cloud (AWS, K8s) | 99.95% uptime",why:"Your stack and the result you own should be searchable — not just your employer."},{before:"Full stack developer. Python. JS. SQL",after:"Full-Stack Engineer | React & Go | Shipped 3 products used by 400k people",why:"Adding the scale you have shipped turns a tool list into evidence."}]},{key:"sales",label:"Sales",description:"A strong Sales profile or resume states the deal size, segment and quota you carried (SMB vs. enterprise, ACV, quota attainment), names the CRM and methodology you run (Salesforce, MEDDIC, discovery), and proves performance with a number every recruiter checks first — quota percentage or revenue closed.",keywords:["Pipeline Management","Salesforce","SaaS","Forecasting","Deal Desk","Enterprise Sales","Discovery","Negotiation","Quota Attainment","Account Management","MEDDIC","Prospecting","Territory Planning","Renewals"],headlines:[{before:"Sales professional seeking challenges",after:"Enterprise AE | SaaS $1–10M ACV | 128% of quota for 3 consecutive years",why:"Buyers and recruiters both filter on deal size and quota performance."},{before:"Business development / partnerships",after:"Partnerships Lead | Cloud & SaaS | 14 strategic deals closed in 2025",why:'"BD" is vague; the industry plus a closed count makes you specific and memorable.'}]},{key:"product",label:"Product",description:"A strong Product profile or resume names the product surface owned (0-to-1, growth, platform), shows a research/data method (user research, A/B testing, SQL, cohorts) behind every decision, and reports outcomes in user or business metrics (activation, retention, revenue) rather than feature ship lists.",keywords:["Roadmapping","A/B Testing","SQL","User Research","Onboarding","Cohort Analysis","GTM","OKRs","Prioritization","Stakeholder Management","Product Analytics","Discovery","North Star Metric","Experimentation"],headlines:[{before:"Product Manager",after:"Product Manager | B2B Onboarding | Cut time-to-value from 14d to 3d",why:"A role plus a metric outcome shows you ship — not just manage."},{before:"PM looking for great teams",after:"Senior PM | 0-to-1 Consumer Apps | 2.1M installs across 3 launches",why:"Recruiters search for the problems you have solved, not the teams you want."}]},{key:"design",label:"Design",description:"A strong Design profile or resume names the discipline and domain (product, brand, motion; fintech, mobile), shows craft with the tools recruiters expect (Figma, prototyping, design systems), and proves impact with shipped volume and validated results (usability testing, accessibility, conversion lift) rather than a portfolio link alone.",keywords:["Design Systems","Figma","Prototyping","Usability Testing","Accessibility","Motion Design","Design Tokens","Developer Handoff","User Research","Wireframing","Information Architecture","Visual Design","Design Ops","Interaction Design"],headlines:[{before:"UX/UI designer",after:"Product Designer | Fintech & Mobile | 40+ shipped flows, 2 design systems",why:"Discipline + domain + volume of shipped work is what hiring managers search."},{before:"Graphic designer | open to work",after:"Brand & Product Designer | Identity systems with 3 award nominations",why:'Drop "open to work" into your headline; state your craft and your proof instead.'}]},{key:"finance",label:"Finance",description:'A strong Finance profile or resume names the specialty (FP&A, RevOps, M&A, controllership), states the scale owned (ARR, budget size, headcount modeled) and shows fluency with the frameworks and tools finance recruiters search for (financial modeling, IFRS/GAAP, Excel/SQL) rather than a generic "finance professional" label.',keywords:["FP&A","P&L","Budgeting","RevOps","M&A Modeling","IFRS","Cash Flow","Unit Economics","Financial Modeling","Forecasting","GAAP","Variance Analysis","Treasury","Investor Relations"],headlines:[{before:"Finance manager",after:"Finance Manager | SaaS RevOps | Built P&L for 3 product lines, $12M ARR",why:'Niche (RevOps) plus scale (ARR) separates you from 90% of "finance" profiles.'},{before:"Looking for finance opportunities",after:"Senior Financial Analyst | FP&A & M&A Modeling | Big 4 to SaaS",why:"Career trajectory plus speciality is the fastest way to be picked from search."}]},{key:"operations",label:"Operations",description:"A strong Operations profile or resume names the function owned (supply chain, logistics, RevOps, facilities), quantifies scope (hubs, volume, headcount, budget) and proves impact with efficiency or cost numbers (cycle time, cost reduction, error rate) rather than a list of responsibilities.",keywords:["Process Improvement","Lean","Supply Chain","ERP","Vendor Management","KPI Dashboards","SOPs","Capacity Planning","Six Sigma","Inventory Management","Logistics","Cross-Functional Leadership","Cost Reduction","Change Management"],headlines:[{before:"Operations manager",after:"Operations Lead | Logistics & 3PL | 38% cost reduction across 5 hubs",why:"Operations credibility lives in the number, not the title."},{before:"Supply chain / logistics",after:"Supply Chain Manager | Cold-chain, EU | 120k units/month, zero compliance incidents",why:"Scope (region, volume) and risk ownership (compliance) are your differentiators."}]},{key:"education",label:"Education",description:"A strong Education profile or resume names the subject, level and program owned (AP/IB, K-12, EdTech), shows a teaching or design method (differentiated instruction, curriculum design, data-driven coaching) and reports a student or program outcome (pass rate, adoption, growth) rather than years of tenure alone.",keywords:["Curriculum Design","IEP","EdTech","Differentiated Instruction","Classroom Management","Data Literacy","AP/IB","Coaching","Student Assessment","Instructional Design","Professional Development","Learning Outcomes","Special Education","Curriculum Alignment"],headlines:[{before:"Teacher",after:"High-School Physics Teacher | AP Program Lead | 94% pass rate, 5 yrs",why:"Subject + program + student outcome — the three things school leaders search."},{before:"Looking for teaching positions",after:"Learning Designer | K-12 EdTech | Curriculum used by 60+ schools",why:"The move into ed-tech is a differentiator — say it explicitly."}]}],gC=/^\s*(?:[•·◦▪*+‣]|[-–—]{1,2})\s+/,sT=/\b(?:19|20)\d{2}\b/g,Fo=/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+(?:19|20)\d{2}\b|\b(?:19|20)\d{2}\s*(?:-|–|—|to)\s*(?:present|now|current|(?:19|20)\d{2})\b|\b\d{1,2}\s*(?:yrs?|years?)\b/i,rT=/\b(?:looking for|seeking|open to|enthusiast|passionate about|aspiring|new opportunities|unemployed|helping (?:companies|businesses) grow)\b/i,iT=[{key:"about",re:/^(?:about|summary|profile\s+summary|overview|professional\s+summary)\s*[:.]?\s*$/i},{key:"experience",re:/^(?:experience|work\s+experience|employment(?:\s+history)?|positions?|professional\s+experience)\s*[:.]?\s*$/i},{key:"education",re:/^(?:education|academics?|academic\s+background)\s*[:.]?\s*$/i},{key:"skills",re:/^(?:skills|top\s+skills|core\s+(?:competencies|skills)|skills\s*(?:&|and)\s*endorsements)\s*[:.]?\s*$/i},{key:"certifications",re:/^(?:licen[sc]es?\s*(?:&|and)?\s*certifications?|certifications?|courses?|test\s*scores)\s*[:.]?\s*$/i},{key:"featured",re:/^(?:featured|projects?|publications?|honors?\s*(?:&|and)?\s*awards?|volunteering)\s*[:.]?\s*$/i},{key:"activity",re:/^(?:activity|posts?|articles?|all\s+star\s+sections)\s*[:.]?\s*$/i}];function mC(n){const e=n.trim();if(!e||e.length>40)return null;for(const t of iT)if(t.re.test(e))return t.key;return null}const oT=/\b(?:increas|reduc|cut|grew|grown|grow|improv|boost|lift|rais|lower|sav|deliver|launch|led|lead|built|build|shipp|optimi|automat|scal|doubl|tripled|expand|shorten|accelerat|onboard\w*d|ran|run|migrat|consolidat|negoti|recruit\w*d|hired|trained)\w*/i;function fa(n){return/(?:[$€£¥₹]\s?\d)|(?:\b\d+(?:[.,]\d+)?\s*(?:%|percent|x|×|k|m|bn|mn|mm|q|pt|pts|bps)\b)/i.test(n)?!0:/\d/.test(n)?oT.test(n)?!0:/\b\d[\d,.]*\+?\s+[A-Za-z]/.test(n):!1}function id(n){const e=n.trim().match(/[A-Za-zÀ-ÿ0-9''-]+/g);return e?e.length:0}function Ml(n){const e=n.match(sT);return e?[...new Set(e.map(t=>Number(t)))].filter(t=>t>=1950&&t<=new Date().getFullYear()+1):[]}function od(n){return gC.test(n)}function aT(n){const e=n.replace(/\r\n?/g,`
`).split(`
`),t={},s=[];let r=s;for(const i of e){const o=mC(i);if(o){r=t[o]??(t[o]=[]);continue}const l=i.match(/^\s*(about|summary|experience|education|skills|certifications|featured|activity)\s*[:]\s*(.+)$/i);if(l){const c=l[1].toLowerCase(),B=t[c]??(t[c]=[]);B.push(l[2]),r=B;continue}r.push(i)}return{head:s,blocks:t}}function En(n){return n.map(e=>e.trim()).filter(e=>e.length>0)}function lT(n){const e=n.trim();if(!e||e.length>60||/\d/.test(e)||/https?:|www\.|@/.test(e)||mC(e)||/^[-•|·]/.test(e))return!1;const t=e.split(/\s+/);return t.length<2||t.length>5?!1:t.every(s=>/^[A-Za-zÀ-ÿ'’.-]+$/.test(s))}function cT(n){const e=n.trim();return e.length>60||/\bconnections\b|\bfollowers\b/i.test(e)?!1:/^[A-ZÀ-Ý][\w .'-]+,\s*[A-ZÀ-Ý][\w .'-]+$/.test(e)||/^(?:greater\s+)?[\w .'-]+\s+area$/i.test(e)}function BT(n){const e=[];let t=[];const s=()=>{const r=En(t);r.length&&e.push(uT(r)),t=[]};for(const r of n)r.trim()?t.push(r):s();return s(),e.filter(r=>r.title||r.bullets.length)}function uT(n){const e=n[0]??"";let t="",s="";const r=[];for(const o of n.slice(1))od(o)?r.push(o.replace(gC,"").trim()):!s&&Fo.test(o)&&o.length<90?s=o:!t&&!Fo.test(o)&&o.length<90?t=o:!od(o)&&o.length<90&&!s?s=o:r.length?r[r.length-1]+=" "+o:t&&(t+=" "+o);const i=Ml(n.join(" "));return{title:e,company:t,dates:s,bullets:r,metricBullets:r.filter(fa).length,year:i.length?Math.max(...i):null,firstYear:i.length?Math.min(...i):null}}function hT(n){const e=[];for(const t of En(n))for(const s of t.split(/[,•·|]/)){const r=s.trim().replace(/^\d+\.\s*/,"");r&&r.length<=48&&/[A-Za-z]/.test(r)&&!Fo.test(r)&&e.push(r)}return[...new Set(e)]}function dT(n,e={}){var Ae,re,I,E,w;const{head:t,blocks:s}=aT(n),r=En(t),i=r.find(lT)??"",o=r.find(cT)??"",l=r.find(b=>b!==i&&b!==o&&b.length<=220&&/[A-Za-z]/.test(b)&&!/https?:|@|\bconnections\b/i.test(b)&&!Fo.test(b))??"",c=s.about??[],B=En(c).join(" ").trim(),h=BT(s.experience??[]),f=En(s.education??[]).filter(b=>b.length<=160),C=hT(s.skills??[]),_=En(s.certifications??[]).filter(b=>b.length<=160),D=En(s.featured??[]),P=En(s.activity??[]).join(" ").trim(),V=[...new Set((n.match(/https?:\/\/[^\s)"'<>]+/g)??[]).map(b=>b.replace(/[.,;]+$/,"")))],H={photo:((Ae=e.flags)==null?void 0:Ae.photo)??null,banner:((re=e.flags)==null?void 0:re.banner)??null,customUrl:((I=e.flags)==null?void 0:I.customUrl)??null,featured:((E=e.flags)==null?void 0:E.featured)??(D.length>0?!0:null),active90:((w=e.flags)==null?void 0:w.active90)??null},se=h.flatMap(b=>b.bullets),ge=Ml(n),Te=h.map(b=>b.firstYear).filter(b=>b!==null);return{raw:n,name:i,headline:l,location:o,about:B,experience:h,education:f,skills:C,certifications:_,links:V,activityBlock:P,flags:H,words:id(n),aboutWords:id(B),bulletCount:se.length,metricCount:se.filter(fa).length,lastActivityYear:P&&Math.max(0,...Ml(P))||null,yearsExperience:Te.length?new Date().getFullYear()-Math.min(...Te):(ge.length,null)}}function fT(n){const e=n.flags.active90!==null||n.activityBlock.length>0,t=n.flags.featured!==null||n.links.length>0,s=n.flags.photo!==null||n.flags.banner!==null||n.flags.customUrl!==null;return{headline:n.headline?"measured":"unknown",about:n.aboutWords>0?"measured":"unknown",experience:n.experience.length>0?"measured":"unknown",education:n.education.length>0||n.certifications.length>0?"measured":"partial",skills:n.skills.length>0?"measured":"partial",activity:e?n.activityBlock.length>0?"measured":"partial":"unknown",media:t?n.links.length>0||n.flags.featured===!0?"measured":"partial":"unknown",presence:s?"partial":"unknown"}}function pT(n){return rT.test(n)}function CT(n){return/\b(?:let'?s talk|let'?s connect|reach (?:out|me)|contact me|get in touch|open to|email me|happy to chat|dm me)\b|[\w.+-]+@[\w-]+\.[\w.]+/i.test(n)}function gT(n){return/\b(?:I\b|I'm|I've|I'll|my\b|we\b|our\b)/.test(n)}const jn=()=>({score:0,issues:[],wins:[]});function Q(n,e,t,s){n.score+=e,t&&n.wins.push(t),s&&n.issues.push(s)}function ii(n,e){const t=s=>s.toLowerCase().replace(/[^a-z0-9+#.\s]/g," ").replace(/\s+/g," ");return t(n).includes(t(e))}function EC(n,e){return e.length?e.filter(t=>ii(n,t)).length/e.length:0}function mT(n,e){const t=jn(),s=n.headline.trim();if(!s)return t.issues.push("No headline found in the pasted text"),t;const r=s.length;r<25?Q(t,8,void 0,"Headline is very short — LinkedIn gives you 220 characters"):r<45?Q(t,18,void 0,"Headline is short for the space available"):r<=160?Q(t,30,"Headline length uses the space well"):Q(t,20,void 0,"Headline is near the 220-character limit and may truncate in search results"),/[|·•‖]| – | — | \/ /.test(s)?Q(t,20,'Clear "Role | Niche | Proof" structure'):t.issues.push('No structure — separate role, niche and proof with "|"'),/\d/.test(s)?Q(t,20,"Headline contains a number — proof recruiters remember"):t.issues.push("No number or measurable result in the headline"),pT(s)?t.issues.push('Reads as a job-seeking status ("looking for…"), not a value proposition'):Q(t,15,"Headline sells an outcome rather than a job search");const i=e.keywords.filter(o=>ii(s,o)).length;return i===0?t.issues.push(`None of the ${e.label} keywords recruiters search appear here`):Q(t,Math.min(15,i*8),`${i} searchable ${e.label} keyword${i>1?"s":""} in the headline`),t}function ET(n,e){const t=jn(),s=n.aboutWords;if(s===0)return t.issues.push("No About section found in the pasted text"),t;s<60?Q(t,8,void 0,`About is only ${s} words — aim for 150–250`):s<120?Q(t,20,void 0,`About is ${s} words — a little thin for the story you can tell`):s<=280?Q(t,35,`About is ${s} words — the sweet spot recruiters actually read`):s<=420?Q(t,24,void 0,`About runs to ${s} words — trim to keep it scannable`):Q(t,14,void 0,`About is ${s} words — far too long; most readers stop at ~300`),gT(n.about)?Q(t,10,"Written in the first person"):t.issues.push("Written in the third person — reads like a job description, not a person"),/\d/.test(n.about)&&yT(n.about)?Q(t,15,"About contains quantified proof"):t.issues.push("No measurable result in the About section"),CT(n.about)?Q(t,15,"About ends with a call-to-action"):t.issues.push("No call-to-action — tell readers what to do next");const r=EC(n.about,e.keywords);return Q(t,Math.round(r*15)),r<.15&&t.issues.push("About is missing the keywords recruiters search for"),n.about.split(/\s{2,}|\n/).filter(o=>o.trim().length>40).length>=2?Q(t,10,"Broken into readable paragraphs"):t.issues.push("About is one unbroken block of text"),t}function yT(n){return/\b(?:\d+(?:[.,]\d+)?\s*%|[$€£¥₹]\s?\d|\b\d+x\b|\b\d+(?:k|m|bn)\b)/i.test(n)}function wT(n,e){const t=jn(),s=n.experience;if(!s.length)return t.issues.push("No experience entries found in the pasted text"),t;const r=s.length;r===1?Q(t,10,void 0,"Only one role listed — add earlier roles for depth"):r<=4?Q(t,20,`${r} roles listed`):Q(t,14,void 0,`${r} roles listed — consider grouping older roles`);const i=n.bulletCount/r;i<1?Q(t,5,void 0,"Roles average under one bullet each"):i<2?Q(t,14,void 0,"Roles average fewer than 2 bullets"):i<=5?Q(t,25,`Roles average ${i.toFixed(1)} bullets`):Q(t,18,void 0,"Some roles carry too many bullets to be scanned");const o=n.bulletCount?n.metricCount/n.bulletCount:0;o===0?Q(t,0,void 0,`${n.bulletCount} bullets and none contain a number — the biggest leak`):o<.3?Q(t,12,void 0,`Only ${Math.round(o*100)}% of bullets are quantified`):o<.6?Q(t,22,`${Math.round(o*100)}% of bullets carry a number`):Q(t,30,`${Math.round(o*100)}% of bullets are quantified`);const l=new Date().getFullYear(),c=Math.max(0,...s.map(h=>h.year??0));c?l-c<=1?Q(t,15,"Most recent role is current"):l-c<=3?Q(t,8,void 0,`Most recent listed role is from ${c}`):Q(t,2,void 0,`Most recent listed role is from ${c} — add your current one`):t.issues.push("No dates on your roles — recruiters cannot see recency");const B=EC(s.map(h=>`${h.title} ${h.company} ${h.bullets.join(" ")}`).join(" "),e.keywords);return Q(t,Math.round(B*10)),B<.2&&t.issues.push(`Target ${e.label} keywords are missing from your bullets`),t}function _T(n){const e=jn(),t=[...n.education,...n.certifications];return t.length?(Q(e,40,`${t.length} education or certification ${t.length>1?"entries":"entry"} listed`),n.education.some(o=>/\b(?:b\.?a\.?|b\.?sc\.?|m\.?a\.?|m\.?sc\.?|m\.?b\.?a\.?|ph\.?d\.?|bachelor|master|doctorate|diploma|degree)\b/i.test(o))?Q(e,25,"A degree is listed"):e.issues.push("No degree listed — if you have one, add it"),n.education.some(o=>/\b(?:university|college|institute|school|polytechnic|academy)\b/i.test(o))?Q(e,15,"Institution named"):e.issues.push("Education entries do not name a school or institution"),n.certifications.length?Q(e,20,`${n.certifications.length} certification${n.certifications.length>1?"s":""} or course${n.certifications.length>1?"s":""} listed`):e.issues.push("No certifications or courses — a 10-minute fix that reinforces positioning"),t.some(o=>/\b(?:19|20)\d{2}\b/.test(o))?Q(e,10,"Years included"):e.issues.push("No years on your education entries"),e):(e.issues.push("No education, certification or course listed"),e)}function DT(n,e){const t=jn(),s=n.skills.length;if(s===0)return t.issues.push("No skills found in the pasted text"),t;s<5?Q(t,10,void 0,`Only ${s} skills listed — add up to 15`):s<10?Q(t,25,void 0,`${s} skills listed — you can list up to 15`):s<=20?Q(t,40,`${s} skills listed`):Q(t,30,void 0,`${s} skills listed — dilution hides your top 3`);const r=e.keywords.filter(l=>n.skills.some(c=>ii(c,l)||ii(l,c))),i=r.length/e.keywords.length;Q(t,Math.round(i*40)),i<.25?t.issues.push(`Only ${r.length} of ${e.keywords.length} in-demand ${e.label} terms appear in your skills`):Q(t,0,`${r.length} in-demand ${e.label} terms in your skills`);const o=n.skills.reduce((l,c)=>l+c.length,0)/s;return o<10?Q(t,10,"Skills are specific terms rather than vague adjectives"):o<=26?Q(t,20,"Skills read as specific, searchable terms"):Q(t,8,void 0,"Some skills read as full sentences rather than searchable terms"),t}function IT(n){const e=jn(),t=n.flags.active90,s=n.activityBlock.length>0;if(t===null&&!s)return e.issues.push("Activity could not be read from the pasted text — confirm on your profile"),e;if(t===!0?Q(e,45,"Posted or commented in the last 90 days"):t===!1?e.issues.push("No posts or comments in the last 90 days — dormant profiles rank lower"):Q(e,20),s){const r=n.lastActivityYear??0;new Date().getFullYear()-r<=1?Q(e,30,"Activity is recent"):Q(e,10,void 0,`Most recent activity is from ${r}`),Q(e,25,"Activity section is populated")}else Q(e,15),e.issues.push("No activity section in the paste — recency is a ranking factor");return e}function bT(n){const e=jn(),t=n.flags.featured;if(t===null&&n.links.length===0)return e.issues.push("Media could not be read from the pasted text"),e;t===!0?Q(e,45,"Featured section is set up"):t===!1?e.issues.push("No Featured section — it is the most-scrolled block on your profile"):Q(e,20);const s=n.links.length;return s===0?e.issues.push("No links to work, projects or writing in the paste"):s<=2?Q(e,30,`${s} link${s>1?"s":""} to your work`):s<=5?Q(e,55,`${s} links to your work`):Q(e,40,void 0,`${s} links — a few strong ones beat many weak ones`),e}function vT(n){const e=jn(),{photo:t,banner:s,customUrl:r}=n.flags;return t===null&&s===null&&r===null?(e.issues.push("Visual presence cannot be read from pasted text"),e):(t===!0?Q(e,45,"Professional photo in place"):t===!1&&e.issues.push("No professional photo — the cheapest win on this list"),s===!0?Q(e,30,"Custom banner in place"):s===!1&&e.issues.push("Banner is the default grey block — wasted prime space"),r===!0?Q(e,25,"Custom public URL"):r===!1&&e.issues.push("No custom public URL"),e)}const TT={headline:mT,about:ET,experience:wT,education:_T,skills:DT,activity:IT,media:bT,presence:vT};function AT(n,e){const t=fT(n),s=qt.map(l=>{const c=t[l.key];if(c==="unknown")return{key:l.key,label:l.label,score:0,basis:c,issues:[`Not readable from pasted text — ${l.label.toLowerCase()} needs your live profile`],wins:[],weight:0};const B=TT[l.key](n,e);return{key:l.key,label:l.label,score:Math.round(Pn(B.score,0,100)),basis:c,issues:B.issues,wins:B.wins,weight:l.weight}}),r=s.filter(l=>l.basis!=="unknown"),i=r.reduce((l,c)=>l+c.weight,0),o=i>0?Math.round(r.reduce((l,c)=>l+c.score*c.weight,0)/i):0;return{sections:s,overall:o,measuredCount:r.length,excluded:s.filter(l=>l.basis==="unknown").map(l=>l.label)}}const xT=["headline","about","experience","education","skills","activity","media","presence"];function RT(n){let e=Fl[0],t=-1;for(const r of Fl){let i=0;for(const o of r.keywords){const l=new RegExp(`\\b${ST(o)}\\b`,"gi"),c=n.match(l);i+=c?Math.min(c.length,4):0}i>t&&(t=i,e=r)}const s=e.keywords.length*4;return{industry:e,confidence:s>0?Math.min(1,t/Math.max(8,s/2)):0}}function ST(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function PT(n,e,t,s=[]){const i=[...s.map(o=>({keyword:o,tracked:!0})),...e.keywords.filter(o=>!s.some(l=>l.toLowerCase()===o.toLowerCase())).map(o=>({keyword:o,tracked:!1}))].map(({keyword:o,tracked:l})=>{const c=xT.filter(B=>ii(n[B],o));return{keyword:o,found:c.length>0,where:c,tracked:l}});return{industry:e,confidence:t,coverage:i,gaps:i.filter(o=>!o.found).map(o=>o.keyword),covered:i.filter(o=>o.found).map(o=>o.keyword)}}function kT(n){return{headline:n.headline,about:n.about,experience:n.experience.map(e=>`${e.title} ${e.company} ${e.bullets.join(" ")}`).join(" "),education:[...n.education,...n.certifications].join(" "),skills:n.skills.join(" "),activity:n.activityBlock,media:n.links.join(" "),presence:n.flags.customUrl===!0?"custom public url vanity url":""}}const OT=/\[[^\]]+\]/;function yC(n){return n.replace(/\w\S*/g,e=>e[0].toUpperCase()+e.slice(1).toLowerCase())}function Wc(n,e){var r;const t=n.experience[0];if(t!=null&&t.title){const i=t.title.replace(/\s*(?:at|@)\s.*$/i,"").replace(/\s*[-|].*$/,"").trim();if(i.length>2&&i.length<70)return i}const s=(r=n.headline.split(/[|·•]/)[0])==null?void 0:r.trim();return s&&s.length>2&&s.length<60?s:`${e.label} professional`}function wC(n){const t=n.experience.flatMap(o=>o.bullets).filter(fa);if(!t.length)return null;const i=[...t].sort((o,l)=>{const c=B=>/%/.test(B)?1:0;return c(l)-c(o)||o.length-l.length})[0].match(/(?:[$€£¥₹]\s?\d[\d.,]*\s*(?:k|m|bn|mn)?|\b\d+(?:[.,]\d+)?\s*(?:%|x|k|m|bn)\b|\b\d[\d,]{1,}\+?)/i);return i?i[0].trim():null}function Mo(n,e){const t=n.skills.slice(0,3).filter(Boolean);return t.length>=2?t.slice(0,2).map(yC).join(" & "):e.keywords.find(r=>n.raw.toLowerCase().includes(r.toLowerCase()))??`${e.label}`}function NT(n,e){const t=Wc(n,e),s=wC(n),r=s?`${t} | ${Mo(n,e)} | ${s} ${LT(n)}`.trim():`${t} | ${Mo(n,e)} | [your strongest number]`;return{key:"headline",title:"Headline",before:n.headline||"(empty)",after:r,why:s?"Role, niche and a real number — the three things recruiters search and scan for, using a result already in your profile.":"Role plus niche plus proof. Only the number is missing: take your single best result and put it here.",needsEdit:OT.test(r)}}function LT(n){return n.headline.length>0,""}function FT(n,e){const t=Wc(n,e),s=wC(n),r=n.yearsExperience&&n.yearsExperience>0?n.yearsExperience:null,i=e.keywords.slice(0,3).join(", "),o=[r?`I'm a ${t.toLowerCase()} with ${r} years in ${e.label.toLowerCase()}, focused on ${Mo(n,e).toLowerCase()}.`:`I'm a ${t.toLowerCase()} focused on ${Mo(n,e).toLowerCase()} in ${e.label.toLowerCase()}.`,s?`Most recently I delivered ${s} — [what you changed, in one line].`:"[Your single best result, with the number that proves it.]",`I work across ${i}. ${n.skills.slice(3,6).join(", ")}${n.skills.length>6?", and more.":"."}`,"[What you want next] — reach me at [your email] or send a message here."].join(`

`);return{key:"about",title:"About section",before:n.about?GT(n.about,320):"(empty)",after:o,why:"Four short paragraphs: who you are, the proof, the searchable keywords, and a call-to-action. Everything in brackets is a fact only you have — fill it in and delete the brackets.",needsEdit:!0}}function MT(n){const e=n.experience.flatMap(s=>s.bullets.map(r=>({role:s.title||"your role",bullet:r,hasNum:fa(r)}))),t=e.filter(s=>!s.hasNum).slice(0,2);return!t.length&&e.length&&t.push(e[0]),t.map(({role:s,bullet:r},i)=>{const o=(r.match(/^[A-Za-z]+/)??[""])[0],l=r.replace(/^[A-Za-z]+\s+/,"").replace(/[.!?]+$/,"").trim(),c=`${yC(o||"Led")} ${HT(l||"[the thing you changed]")} — [result] in [number + timeframe].`;return{key:"experience",title:`Experience bullet ${i+1} · ${s}`,before:r,after:c,why:"Action + result + number. Recruiters skip duty bullets and stop on numbers; keeping your own verb makes it recognisably your work.",needsEdit:!0}})}function VT(n,e){const t=e.keywords.filter(i=>!n.skills.some(o=>o.toLowerCase()===i.toLowerCase())),s=n.skills.slice(0,10),r=[...new Set([...e.keywords.slice(0,4),...s])].slice(0,15).join(" · ");return{key:"skills",title:"Skills list",before:n.skills.length?n.skills.slice(0,10).join(" · "):"(none found)",after:r,why:t.length?`The top 3 skills show on your profile card, so put the searched terms first. Missing today: ${t.slice(0,4).join(", ")}.`:"Already well covered — reorder so the most-searched terms sit in the top 3 shown on your card.",needsEdit:!1}}function ad(n,e){const t=[NT(n,e),FT(n,e),...MT(n)];return t.push(VT(n,e)),t}function GT(n,e){return n.length>e?`${n.slice(0,e).trimEnd()}…`:n}function HT(n){return n.charAt(0).toLowerCase()+n.slice(1)}const UT=/(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[a-zA-Z0-9\-_%]+\/?/i;function $T(n){const e=n.match(UT);if(!e)return null;const t=e[0].replace(/[.,;]+$/,"");return t.startsWith("http")?t:`https://${t}`}function jT(n){const e=fo.find(s=>s.slug===n.slug);return{...e?ZT(e,n):eA(n),keywordReport:null,rewrites:[],measuredCount:8,excluded:[],signals:[],parsed:null,alerts:[],delta:null,linkedInUrl:null}}function JT(n,e={},t=""){var V;const s=dT(n,{flags:e}),r=$T(n),i=RT(n),o=i.industry,l=AT(s,o),c=[],B=PT(kT(s),o,i.confidence,c),h=l.sections.map(H=>({key:H.key,label:H.label,score:H.score,issues:H.issues,wins:H.wins,basis:H.basis,weight:H.weight})),f=Wc(s,o),C=s.name||"Your profile",_=ad(s,o)[0],D={raw:t||"pasted profile text",kind:t?"linkedin":"other",slug:s.name?s.name.toLowerCase().replace(/[^a-z0-9]+/g,"-"):"pasted-profile",display:t||`${s.words.toLocaleString("en-GB")} words of pasted profile text`},P=Pn(l.overall+Math.round((i.confidence-.4)*10),4,97);return{mode:"text",source:"pasted",input:D,profileKey:Yc(D,C),name:C,initials:qT(C),role:(V=s.experience[0])!=null&&V.company?`${f} · ${s.experience[0].company}`:f,industry:o.label,location:s.location||"—",headline:s.headline||"(no headline found)",overall:l.overall,percentile:P,sections:h,fixes:Xc(h),keywords:B.gaps.slice(0,8),headlineFix:{before:_.before,after:_.after,why:_.why},summary:KT(s,l,o),keywordReport:B,rewrites:ad(s,o),measuredCount:l.measuredCount,excluded:l.excluded,signals:zT(s),parsed:s,alerts:[],delta:null,linkedInUrl:r}}function Yc(n,e){const t=(e||n.slug).toLowerCase().replace(/[^a-z0-9]+/g,"-");return`${n.kind}:${t}`}function qT(n){return n.split(/\s+/).filter(Boolean).slice(0,2).map(t=>{var s;return((s=t[0])==null?void 0:s.toUpperCase())??""}).join("")||"KY"}function KT(n,e,t){const s=e.sections.filter(B=>B.basis!=="unknown"),r=[...s].sort((B,h)=>h.score-B.score)[0],i=[...s].sort((B,h)=>B.score-h.score)[0],o=n.metricCount,l=n.bulletCount,c=[];return c.push(`Scored from your real text: ${n.words.toLocaleString("en-GB")} words, ${n.experience.length} role${n.experience.length===1?"":"s"}, ${l} bullet${l===1?"":"s"}.`),r&&i&&r.key!==i.key&&c.push(`Strongest is ${r.label} (${r.score}/100); weakest is ${i.label} (${i.score}/100).`),l>0&&c.push(o===0?`None of your ${l} bullets contain a number — that is usually the single biggest scoring leak.`:`${o} of ${l} bullets carry a number; the rest still read as duties.`),e.excluded.length&&c.push(`${e.excluded.join(" and ")} could not be read from text and were left out of the score.`),c.push(`Detected industry: ${t.label}.`),c.join(" ")}function zT(n){const e=[`${n.words.toLocaleString("en-GB")} words parsed`,`${n.aboutWords} words in About`,`${n.experience.length} roles`,`${n.bulletCount} bullets · ${n.metricCount} with numbers`,`${n.skills.length} skills`,`${n.education.length} education · ${n.certifications.length} certifications`,`${n.links.length} links`];return n.yearsExperience!==null&&n.yearsExperience>0&&e.push(`~${n.yearsExperience} years of history`),e}function QT(n,e){if(!e)return null;const t=n.sections.filter(s=>s.basis!=="unknown").map(s=>{const r=e.sections.find(i=>i.key===s.key);return{key:s.key,label:s.label,change:r?s.score-r.score:0}}).filter(s=>s.change!==0);return{overall:n.overall-e.overall,sections:t.sort((s,r)=>Math.abs(r.change)-Math.abs(s.change)).slice(0,5),previousLabel:e.label,previousDate:new Date(e.createdAt).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}}function WT(n,e,t){if(!e||!t)return[];const s=[];t.overall<=-3?s.push({kind:"down",text:`Overall score dropped ${Math.abs(t.overall)} points since ${t.previousDate}`}):t.overall>=3&&s.push({kind:"up",text:`Overall score up ${t.overall} points since ${t.previousDate}`});const r=n.keywordReport?n.keywordReport.covered:[],i=new Map(e.covered.map(h=>[h.toLowerCase(),h])),o=new Map(r.map(h=>[h.toLowerCase(),h])),l=[...i].filter(([h])=>!o.has(h)).map(([,h])=>h);l.length&&s.push({kind:"keyword-lost",text:`Keyword${l.length>1?"s":""} no longer found on your profile: ${l.slice(0,3).join(", ")}`});const c=[...o].filter(([h])=>!i.has(h)).map(([,h])=>h);c.length&&s.push({kind:"keyword-won",text:`New keyword coverage: ${c.slice(0,3).join(", ")}`});const B=t.sections.filter(h=>h.change<=-8)[0];return B&&s.push({kind:"section-down",text:`${B.label} fell ${Math.abs(B.change)} points — worth a look before it compounds`}),s}function YT(n){var e;return((e=qt.find(t=>t.key===n))==null?void 0:e.label)??n}function XT(n){var e;return((e=qt.find(t=>t.key===n))==null?void 0:e.weight)??0}function Xc(n){const e=[...n].filter(s=>s.basis!=="unknown").sort((s,r)=>s.score-r.score).slice(0,3),t=["High","Medium","Low"];return e.map((s,r)=>{const i=qt.find(o=>o.key===s.key);return{title:i?i.fixTitle:"Improve this section",detail:s.issues[0]??(i?i.fixDetail:"Bring this section in line with the rest of your profile."),impact:t[r]}})}function ZT(n,e){const t=n.sections.map(s=>({key:s.key,label:YT(s.key),score:s.score,issues:ld(s.key,s.score),wins:[],basis:"measured",weight:XT(s.key)}));return{mode:"url-demo",source:"curated",input:e,profileKey:Yc(e,n.name),name:n.name,initials:n.initials,role:`${n.role} · ${n.company}`,industry:n.industry,location:n.location,headline:n.headline,overall:Hl(t),percentile:n.percentile,sections:t,fixes:Xc(t),keywords:n.keywords,headlineFix:n.headlineFix,summary:n.summary,keywordReport:null,rewrites:[],measuredCount:8,excluded:[],signals:[],parsed:null,alerts:[],delta:null,linkedInUrl:null}}function eA(n){const e=lg(ag(`${n.kind}|${n.slug}`)),t=ru(e,Fl),s=Va(e,40,72),r=qt.map(_=>{const D=Pn(s+Va(e,-12,14),18,95);return{key:_.key,label:_.label,score:D,issues:ld(_.key,D,e),wins:[],basis:"measured",weight:_.weight}}),i=Hl(r),o=Pn(i+Va(e,-5,7),4,96),l=ru(e,t.headlines),c=cg(e,t.keywords,5),B=[...r].sort((_,D)=>_.score-D.score),h=B[0],f=B[B.length-1],C=n.slug.replace(/[^a-z0-9]/g,"").slice(0,2).toUpperCase();return{mode:"url-demo",source:"estimated",input:n,profileKey:Yc(n,"your profile"),name:"Your profile",initials:C.length>=2?C:"KY",role:`${t.label} professional`,industry:t.label,location:"—",headline:l.before,overall:i,percentile:o,sections:r,fixes:Xc(r),keywords:c,headlineFix:l,summary:`A ${t.label.toLowerCase()} profile with real signal to work with: strongest section is ${f.label} (${f.score}/100), weakest is ${h.label} (${h.score}/100). Closing the three lowest-scoring sections is usually the fastest route to a visibly better score.`,keywordReport:null,rewrites:[],measuredCount:8,excluded:[],signals:[],parsed:null,alerts:[],delta:null,linkedInUrl:null}}function il(n){return n.toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,48)}function tA(n){const e=n.trim();if(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,79}$/.test(e)){const s=il(e);return{raw:e,kind:"linkedin",slug:s,display:`linkedin.com/in/${s}`}}let t=null;try{t=new URL(e.includes("://")?e:`https://${e}`)}catch{t=null}if(t&&t.hostname){const s=t.hostname.replace(/^www\./,"").toLowerCase(),r=s.includes("linkedin"),i=t.pathname.split("/").filter(Boolean),o=i.findIndex(B=>B==="in"||B==="pub"||B==="company"||B==="school"),l=o>=0&&i[o+1]?i[o+1]:i[0]??"",c=il(l)||"profile";return{raw:e,kind:r?"linkedin":"other",slug:c,display:`${s}${t.pathname}`.slice(0,60)}}return{raw:e,kind:"other",slug:il(e)||"profile",display:e.slice(0,60)}}const at=document.getElementById("app");let Vl=()=>{};function Zc(n){Vl(),Vl=()=>{},n()}function nA(){at&&(Jb(),sA(),eB())}function sA(){let n=null;hC(e=>{const t=(e==null?void 0:e.uid)??null;t&&t!==n&&(da("sign_in",{provider:e.provider}),Zb(t).then(s=>s.forEach(r=>Bd(r)))),n=t})}function eB(){at&&Zc(()=>{at.innerHTML=av(),Vl=mv(at,{onAudit:DC,onPaste:rA,onHistory:_C,onOpenPlan:tT}),window.scrollTo(0,0)})}function _C(){at&&Zc(()=>{at.innerHTML=pC(),CC(at,{onBack:eB}),window.scrollTo(0,0)})}function DC(n){IC(jT(tA(n)))}function rA(n,e){const t={photo:e.photo??null,banner:e.banner??null,customUrl:e.customUrl??null,featured:e.featured??null,active90:e.active90??null};IC(JT(n,t))}function IC(n){if(!at)return;const e=Cg(n.profileKey),t=QT(n,e),s={...n,delta:t,alerts:WT(n,e,t)};da("audit_run",{mode:s.mode,industry:s.industry,overall:s.overall}),Zc(()=>{at&&(at.innerHTML=bv(s),vv(at,()=>{at&&(at.innerHTML=Pv(s),Jv(at,s,{onRestart:eB,onHistory:_C,onSave:r=>iA(r),onLinkedInDemo:r=>DC(r)}),window.scrollTo(0,0))}))})}function iA(n){var t;const e={id:gg(),profileKey:n.profileKey,label:n.name,source:n.input.display,industry:n.industry,mode:n.mode,overall:n.overall,percentile:n.percentile,sections:n.sections.filter(s=>s.basis!=="unknown").map(s=>({key:s.key,score:s.score})),covered:((t=n.keywordReport)==null?void 0:t.covered)??[],gaps:n.keywordReport?n.keywordReport.gaps:n.keywords,createdAt:new Date().toISOString()};Bd(e),da("audit_saved",{mode:e.mode,industry:e.industry,overall:e.overall}),Xb(e)}nA();
