const headings = [...document.querySelectorAll('.prose h2')];
const links = [...document.querySelectorAll('[data-section]')];
let scheduled = false;
function updateActive() {
  let current = headings[0]?.id;
  for (const heading of headings) { if (heading.getBoundingClientRect().top <= 120) current = heading.id; }
  for (const link of links) { if (link.dataset.section === current) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); }
  scheduled = false;
}
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateActive)}},{passive:true});
document.querySelectorAll('.mobile-toc a').forEach(link=>link.addEventListener('click',()=>{document.querySelector('.mobile-toc').open=false}));
updateActive();
