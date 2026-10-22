const grid = document.getElementById('bookGrid');
const search = document.getElementById('search');
const genre = document.getElementById('genre');
const availability = document.getElementById('availability');
const sort = document.getElementById('sort');
const resultCount = document.getElementById('resultCount');
const loadMore = document.getElementById('loadMore');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const toast = document.getElementById('toast');
let visible = 20;
let current = [];
const symbols = ['✦','狐','★','漫','☾','⚡','♢','✧','龍','☄'];
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),3200);}
function fillGenres(){[...new Set(BOOKS.map(b=>b.genre))].sort().forEach(g=>{const o=document.createElement('option');o.value=g;o.textContent=g;genre.appendChild(o);});}
function filteredBooks(){
 let list=BOOKS.filter(b=>{
  const q=search.value.trim().toLowerCase();
  const matches=!q||b.title.toLowerCase().includes(q)||b.genre.toLowerCase().includes(q)||b.synopsis.toLowerCase().includes(q);
  const genreOk=genre.value==='all'||b.genre===genre.value;
  const availOk=availability.value==='all'||(availability.value==='free'?b.free:!b.free);
  return matches&&genreOk&&availOk;
 });
 if(sort.value==='az')list.sort((a,b)=>a.title.localeCompare(b.title));
 if(sort.value==='za')list.sort((a,b)=>b.title.localeCompare(a.title));
 return list;
}
function render(){
 current=filteredBooks();resultCount.textContent=current.length;
 const items=current.slice(0,visible);
 grid.innerHTML=items.map((b,i)=>`<article class="book-card" tabindex="0" role="button" aria-label="View ${escapeHtml(b.title)}" data-id="${b.id}">
  <div class="cover" style="--cover:${b.color}"><span class="cover-no">MV / ${String(b.id).padStart(3,'0')}</span><span class="${b.free?'free-badge':'paid-badge'}">${b.free?'FREE':'BUNDLE'}</span><span class="cover-symbol">${symbols[(b.id-1)%symbols.length]}</span><span class="cover-label">MANGAVERSE ORIGINAL</span></div>
  <h3 class="book-title">${escapeHtml(b.title)}</h3><div class="book-meta"><span>${escapeHtml(b.genre)}</span><span>${b.free?'Free':'In bundles'}</span></div>
 </article>`).join('');
 loadMore.style.display=items.length<current.length?'inline-flex':'none';
}
function openBook(id){
 const b=BOOKS.find(x=>x.id===Number(id));if(!b)return;
 modalBody.innerHTML=`<div class="modal-cover" style="background:${b.color}">${symbols[(b.id-1)%symbols.length]}</div><div class="modal-tag">${b.free?'FREE STARTER STORY':'PAID BUNDLE TITLE'} · ${escapeHtml(b.genre.toUpperCase())}</div><h2 id="modalTitle">${escapeHtml(b.title)}</h2><p>${escapeHtml(b.synopsis)}</p><p><strong>By ${escapeHtml(b.author)}</strong></p><p>${b.free?'This title is in the free starter collection.':'This title is listed in the paid bundle catalog. The full illustrated book is not yet included in this demo storefront.'}</p><div class="modal-actions">${b.free?'<button class="btn btn-primary" id="readSample">Open free preview →</button>':'<button class="btn btn-primary" id="bundleInfo">View bundle options →</button>'}<button class="btn btn-outline" id="modalCloseAlt">Keep browsing</button></div>`;
 modal.hidden=false;
 document.getElementById('modalCloseAlt').onclick=closeModal;
 if(b.free)document.getElementById('readSample').onclick=()=>{closeModal();showToast('Preview placeholder: add the completed illustrated chapter to publish this book.');};
 else document.getElementById('bundleInfo').onclick=()=>{closeModal();document.getElementById('plans').scrollIntoView({behavior:'smooth'});};
}
function closeModal(){modal.hidden=true;}
grid.addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(card)openBook(card.dataset.id);});
grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-id]')){e.preventDefault();openBook(e.target.dataset.id);}});
[search,genre,availability,sort].forEach(el=>el.addEventListener('input',()=>{visible=20;render();}));
loadMore.addEventListener('click',()=>{visible+=20;render();});
document.getElementById('closeModal').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
document.getElementById('headerPublish').addEventListener('click',()=>document.getElementById('publish').scrollIntoView({behavior:'smooth'}));
document.querySelectorAll('[data-buy]').forEach(btn=>btn.addEventListener('click',()=>showToast(`Demo checkout: ${btn.dataset.buy} manga bundle selected. Connect a payment provider to accept orders.`)));
document.getElementById('publishForm').addEventListener('submit',e=>{
 e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget).entries());
 const submissions=JSON.parse(sessionStorage.getItem('mangaverse_demo_submissions')||'[]');submissions.push({...data,submittedAt:new Date().toISOString()});sessionStorage.setItem('mangaverse_demo_submissions',JSON.stringify(submissions));
 e.currentTarget.reset();showToast('Demo submission saved in this browser session only. A backend is needed for real publishing.');
});
fillGenres();render();
