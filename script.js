(function(){
var d=document.documentElement;d.classList.remove('no-js');
var nav=document.querySelector('.nav');
function onScroll(){nav.classList.toggle('scrolled',window.scrollY>8)}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
var b=document.getElementById('burger'),m=document.getElementById('menu');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu')});
m.addEventListener('click',function(e){if(e.target.closest('a')){m.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});els.forEach(function(el){io.observe(el)})}else{els.forEach(function(el){el.classList.add('in')})}
var t=document.getElementById('track'),dots=document.getElementById('dots');
if(t){var slides=t.querySelectorAll('.slide');
slides.forEach(function(_,i){var s=document.createElement('span');if(!i)s.className='on';dots.appendChild(s)});
function step(){return slides.length>1?slides[1].offsetLeft-slides[0].offsetLeft:300}
document.querySelector('.cbtn.prev').addEventListener('click',function(){t.scrollBy({left:-step(),behavior:'smooth'})});
document.querySelector('.cbtn.next').addEventListener('click',function(){t.scrollBy({left:step(),behavior:'smooth'})});
var raf;t.addEventListener('scroll',function(){cancelAnimationFrame(raf);raf=requestAnimationFrame(function(){var c=t.scrollLeft+t.clientWidth/2,best=0,bd=1e9;slides.forEach(function(s,i){var x=s.offsetLeft+s.offsetWidth/2,dd=Math.abs(x-c);if(dd<bd){bd=dd;best=i}});dots.querySelectorAll('span').forEach(function(s,i){s.classList.toggle('on',i===best)})})},{passive:true})}
})();

/* videos: tabs + play overlay */
(function(){
var tabs=[].slice.call(document.querySelectorAll('.vtab'));
function sel(t){tabs.forEach(function(x){var on=x===t;x.classList.toggle('on',on);x.setAttribute('aria-selected',on?'true':'false');x.tabIndex=on?0:-1;var p=document.getElementById(x.getAttribute('aria-controls'));if(p){p.hidden=!on;if(on)p.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')})}});
document.querySelectorAll('.videos video').forEach(function(v){if(!v.closest('.vpanel').hidden)return;v.pause()})}
tabs.forEach(function(t,i){t.addEventListener('click',function(){sel(t)});t.addEventListener('keydown',function(e){var k=e.key,n=null;if(k==='ArrowRight')n=tabs[(i+1)%tabs.length];if(k==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];if(n){e.preventDefault();n.focus();sel(n)}})});
if(tabs.length)sel(tabs[0]);
var vids=[].slice.call(document.querySelectorAll('.videos video'));
vids.forEach(function(v){v.removeAttribute('controls');var s=v.closest('.vscreen'),b=s&&s.querySelector('.vplay');
if(b)b.addEventListener('click',function(){var p=v.play();if(p&&p.catch)p.catch(function(){})});
v.addEventListener('play',function(){v.setAttribute('controls','');s.classList.add('playing');vids.forEach(function(o){if(o!==v&&!o.paused)o.pause()})});
v.addEventListener('ended',function(){s.classList.remove('playing')})})
})();

/* guide: screen tabs */
(function(){
var tabs=[].slice.call(document.querySelectorAll('.gtab'));if(!tabs.length)return;
function sel(t,focus){tabs.forEach(function(x){var on=x===t;x.classList.toggle('on',on);x.setAttribute('aria-selected',on?'true':'false');x.tabIndex=on?0:-1;var p=document.getElementById(x.getAttribute('aria-controls'));if(p){p.hidden=!on;if(on)p.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')})}});if(focus)t.focus()}
tabs.forEach(function(t,i){t.addEventListener('click',function(){sel(t)});t.addEventListener('keydown',function(e){var n=null;if(e.key==='ArrowRight')n=tabs[(i+1)%tabs.length];if(e.key==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];if(n){e.preventDefault();sel(n,true)}})});
})();
