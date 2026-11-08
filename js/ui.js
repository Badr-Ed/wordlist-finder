/* UI helpers: DOM shortcut, HTML escaping, toast message and copy to clipboard. */
const $=s=>document.querySelector(s);
const esc=t=>t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),1600)}
async function copy(txt){
  try{await navigator.clipboard.writeText(txt);toast('Copied')}
  catch(_){try{const a=document.createElement('textarea');a.value=txt;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove();toast('Copied')}catch(__){toast('Copy failed, select the text instead')}}
}
