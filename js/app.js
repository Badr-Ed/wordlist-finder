/* App logic: filter state, chip buttons, search, rendering the cards. */
const OZ={S:0,M:1,L:2,X:3},gl=Object.fromEntries(GOALS),zl=Object.fromEntries(SIZES),sl=Object.fromEntries(SRC);
const st={g:new Set,z:new Set,s:new Set,q:''};
function chips(id,list){
  $('#'+id).innerHTML=list.map(([k,l])=>`<button class="chip" type="button" data-k="${k}" aria-pressed="false">${l}</button>`).join('');
  $('#'+id).onclick=e=>{const b=e.target.closest('.chip');if(!b)return;const on=!st[id].has(b.dataset.k);
    on?st[id].add(b.dataset.k):st[id].delete(b.dataset.k);b.setAttribute('aria-pressed',on);render()};
}
chips('g',GOALS);chips('z',SIZES);chips('s',SRC);
$('#q').oninput=e=>{st.q=e.target.value.trim().toLowerCase();render()};
$('#reset').onclick=reset;
function reset(){['g','z','s'].forEach(k=>st[k].clear());st.q='';$('#q').value='';
  document.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed','false'));render()}
let shown=[];
function render(){
  shown=E.filter(e=>(!st.g.size||st.g.has(e.g))&&(!st.z.size||st.z.has(e.z))&&(!st.s.size||st.s.has(e.s))&&(!st.q||(e.n+e.d+e.p).toLowerCase().includes(st.q)))
    .sort((a,b)=>OZ[a.z]-OZ[b.z]);
  $('#count').textContent=shown.length+(shown.length==1?' wordlist matches':' wordlists match');
  if(!shown.length){$('#grid').innerHTML='<div class="empty">Nothing fits those filters. Remove one or clear the search to see more lists.</div>';return}
  const firsts=new Set;
  $('#grid').innerHTML=shown.map((e,i)=>{
    const start=st.g.size==1&&shown.length>1&&!firsts.size&&firsts.add(i);
    const cmd=CMD[e.g].replace('{p}',e.p);
    return `<article class="card" style="--i:${Math.min(i,12)}"><div class="tags">${start?'<span class="tag start">Start here</span>':''}<span class="tag">${gl[e.g]}</span><span class="tag">${zl[e.z]}</span><span class="tag">${sl[e.s]}</span></div>
<h3>${esc(e.n)}</h3><p>${esc(e.d)}</p><code>${esc(e.p)}</code>${cmd?`<code>${esc(cmd)}</code>`:''}
<div class="acts"><button class="btn" data-i="${i}" data-w="p" type="button">Copy path</button>${cmd?`<button class="btn" data-i="${i}" data-w="c" type="button">Copy command</button>`:''}</div></article>`}).join('');
}
$('#grid').addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;
  const x=shown[b.dataset.i];copy(b.dataset.w=='p'?x.p:CMD[x.g].replace('{p}',x.p))});
$('#grid').addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(!c)return;const r=c.getBoundingClientRect();
  c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px')});
render();
