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
