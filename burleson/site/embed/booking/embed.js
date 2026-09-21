/* The DRIPBaR Burleson booking widget embed helper. https://thedripbarburleson.com */
(function(){
  var BASE = 'https://betterbranding.github.io/dripbar-pages/burleson/site/embed/booking/';
  var ORIGIN = 'https://betterbranding.github.io';
  var SEL = '.dripbar-booking, #dripbar-booking';
  var thisScript = document.currentScript;

  function mount(el){
    if(el.getAttribute('data-dripbar-mounted')) return;
    el.setAttribute('data-dripbar-mounted', '1');
    var p = new URLSearchParams();
    p.set('embed', '1');
    p.set('host', location.href);
    var pq = new URLSearchParams(location.search);
    ['service', 'goal'].forEach(function(k){
      var v = el.getAttribute('data-' + k) || pq.get(k);
      if(v) p.set(k, v);
    });
    var f = document.createElement('iframe');
    f.src = BASE + '?' + p.toString();
    f.title = 'Book an appointment at The DRIPBaR Burleson';
    f.setAttribute('scrolling', 'no');
    f.setAttribute('loading', 'eager');
    f.setAttribute('allowtransparency', 'true');
    f.style.cssText = 'width:100%;max-width:100%;border:0;display:block;background:transparent;min-height:' + (el.getAttribute('data-min-height') || '760') + 'px;transition:height .25s ease';
    el.style.width = '100%';
    el.appendChild(f);
  }

  window.addEventListener('message', function(e){
    if(e.origin !== ORIGIN || !e.data || e.data.type !== 'dripbar-bw') return;
    var frames = document.querySelectorAll(SEL + ' iframe');
    for(var i = 0; i < frames.length; i++){
      var f = frames[i];
      if(f.contentWindow !== e.source) continue;
      if(e.data.height){ f.style.height = e.data.height + 'px'; f.style.minHeight = '0'; }
      if(e.data.action === 'scroll'){
        var rect = f.getBoundingClientRect();
        var target = rect.top + window.pageYOffset + (e.data.offset || 0) - 24;
        if(e.data.block === 'center') target -= Math.max(0, (window.innerHeight - 200) / 2);
        var offscreen = rect.top < 0 || rect.top > window.innerHeight * 0.6;
        if(e.data.force || offscreen) window.scrollTo({top: Math.max(0, target), behavior: 'smooth'});
      }
    }
  });

  function init(){
    var found = document.querySelectorAll(SEL);
    if(!found.length && thisScript){
      var d = document.createElement('div');
      d.className = 'dripbar-booking';
      thisScript.parentNode.insertBefore(d, thisScript.nextSibling);
      found = [d];
    }
    for(var i = 0; i < found.length; i++) mount(found[i]);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
