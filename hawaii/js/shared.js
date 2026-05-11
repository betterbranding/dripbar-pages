/* =========================================================
   DRIP Direct Hawaii — Shared Module
   Common code used across all pages: navbar, footer, cart,
   particles, scroll reveal, toasts
   ========================================================= */

const DD = window.DD || {};
window.DD = DD;

// -------- CDN Base --------
DD.BASE = 'https://cdn.jsdelivr.net/gh/betterbranding/dripbar-pages@main/hawaii';

// -------- Cart (persisted in localStorage) --------
DD.cart = JSON.parse(localStorage.getItem('dd_cart') || '[]');

DD.saveCart = function() {
  localStorage.setItem('dd_cart', JSON.stringify(DD.cart));
  DD.updateCartCount();
};

DD.addToCart = function(product) {
  // Check if already in cart, increment qty
  var existing = DD.cart.find(function(item) { return item.name === product.name; });
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    product.qty = 1;
    DD.cart.push(product);
  }
  DD.saveCart();
  DD.showToast(product.name + ' added to cart');
};

DD.removeFromCart = function(index) {
  DD.cart.splice(index, 1);
  DD.saveCart();
};

DD.updateQty = function(index, delta) {
  DD.cart[index].qty = Math.max(1, (DD.cart[index].qty || 1) + delta);
  DD.saveCart();
};

DD.getCartTotal = function() {
  return DD.cart.reduce(function(sum, item) {
    return sum + (item.price * (item.qty || 1));
  }, 0);
};

DD.getCartCount = function() {
  return DD.cart.reduce(function(sum, item) {
    return sum + (item.qty || 1);
  }, 0);
};

DD.updateCartCount = function() {
  var counts = document.querySelectorAll('.cart-count');
  var n = DD.getCartCount();
  counts.forEach(function(el) {
    el.textContent = n;
    el.classList.toggle('active', n > 0);
  });
};

// -------- Toast --------
var toastTimeout;
DD.showToast = function(message) {
  var toast = document.querySelector('.dd-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'dd-toast toast';
    document.body.appendChild(toast);
  }
  toast.textContent = '✅ ' + message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(function() { toast.classList.remove('show'); }, 2500);
};

// -------- Particles --------
DD.initParticles = function() {
  var canvas = document.getElementById('particles');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var COUNT = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function Particle() { this.reset(); }
  Particle.prototype.reset = function() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '0, 212, 255' : '0, 255, 136';
  };
  Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  };
  Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(' + this.color + ', ' + this.opacity + ')';
    ctx.fill();
  };

  for (var i = 0; i < COUNT; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) { p.update(); p.draw(); });
    // Draw connecting lines
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(0, 212, 255, ' + (0.06 * (1 - dist / 150)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
};

// -------- Navbar --------
DD.initNavbar = function() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  // Mobile hamburger
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }
  // Cart button -> go to cart page
  var cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      // Navigate to cart page - adjust URL as needed for GHL
      var cartUrl = DD.cartPageUrl || '#cart';
      window.location.href = cartUrl;
    });
  }
  DD.updateCartCount();
};

// -------- Scroll Reveal --------
DD.initScrollReveal = function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(function(el) {
    observer.observe(el);
  });
};

// -------- Count Up --------
DD.initCountUp = function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseInt(el.dataset.count);
        if (!target) return;
        var current = 0;
        var step = Math.ceil(target / 40);
        var interval = setInterval(function() {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          el.textContent = current;
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(function(el) { observer.observe(el); });
};

// -------- Shared Init --------
DD.initShared = function() {
  DD.initParticles();
  DD.initNavbar();
  DD.initScrollReveal();
  DD.updateCartCount();
};

// -------- Product Image Map --------
DD.PRODUCT_IMAGES = {
  "Semaglutide Injection": "img/products/semaglutide-injection.png",
  "Semaglutide Sublingual": "img/products/semaglutide-sublingual.png",
  "Tirzepatide": "img/products/tirzepatide.png",
  "Liraglutide": "img/products/liraglutide.png",
  "Oral Weight Loss Capsules": "img/products/oral-weight-loss.png",
  "Metformin HCl ER Tablet": "img/products/metformin.png",
  "Phentermine HCl Tablet": "img/products/phentermine.png",
  "Testosterone Replacement Therapy - 3 Month Supply": "img/products/trt-3mo.png",
  "Testosterone Replacement Therapy - 1 Month Supply": "img/products/trt-1mo.png",
  "Hormone Replacement Therapy for Women - 1 Month Supply": "img/products/hrt-women.png",
  "L-Carnitine": "img/products/l-carnitine.png",
  "Sermorelin Troche": "img/products/sermorelin-troche.png",
  "Skinny Shots - MICC": "img/products/micc.png",
  "Sermorelin Sublingual": "img/products/sermorelin-sublingual.png",
  "Sermorelin Injection": "img/products/sermorelin-injection.png",
  "NAD+ Patches": "img/products/nad-patches.png",
  "Glutathione": "img/products/glutathione.png",
  "Nicotinamide Riboside (NR) Injectable": "img/products/nr-injectable.png",
  "Vitamin B12 Injection": "img/products/b12-injection.png",
  "Low Dose Naltrexone": "img/products/naltrexone.png",
  "NAD+ Nasal Spray": "img/products/nad-nasal.png",
  "NAD+ Injection": "img/products/nad-injection.png",
  "Anti Aging Topical Gel": "img/products/anti-aging-gel.png",
  "Anti Aging Topical Cream": "img/products/anti-aging-cream.png",
  "Methylene Blue Capsules": "img/products/methylene-blue.png",
  "Scream Cream - Libido Enhancement for Women": "img/products/scream-cream.png",
  "Erectile Dysfunction Medication": "img/products/ed-medication.png",
  "Tadalafil + Oxytocin Troche": "img/products/tadalafil-oxytocin.png",
  "Oxybutynin": "img/products/oxybutynin.png",
  "PT-141 (bremelanotide) Injectable": "img/products/pt141.png",
  "Oxytocin 100 IU Troche": "img/products/oxytocin-troche.png",
  "Oxytocin Nasal Spray": "img/products/oxytocin-spray.png",
  "Hair Loss Scalp Topical Medication": "img/products/hair-topical.png",
  "Hair Loss Oral Medication": "img/products/hair-oral.png",
  "Acne Cream": "img/products/acne-cream.png",
  "Acne Gel": "img/products/acne-gel.png",
  "Doxycycline Hyclate for Acne": "img/products/doxycycline.png"
};

// -------- Product Data --------
DD.PRODUCTS = {
  categories: [
    {
      id: "weight-management", name: "Weight Management", icon: "💊",
      tagline: "Slim Down and Energize with Tailored Weight Loss Solutions.",
      products: [
        { name: "Semaglutide Injection", subtitle: "Compounded with glycine", price: 160, icon: "💉" },
        { name: "Semaglutide Sublingual", subtitle: "Dissolves under tongue", price: 195, icon: "💊" },
        { name: "Tirzepatide", subtitle: "Compounded with Glycine", price: 200, icon: "💉" },
        { name: "Liraglutide", subtitle: "Daily GLP-1 injection", price: 345, icon: "💉" },
        { name: "Oral Weight Loss Capsules", subtitle: "Easy oral dosing", price: 225, icon: "💊" },
        { name: "Metformin HCl ER Tablet", subtitle: "Extended release", price: 135, icon: "💊" },
        { name: "Phentermine HCl Tablet", subtitle: "Appetite control", price: 135, icon: "💊" }
      ]
    },
    {
      id: "hormone-optimization", name: "Hormone Balance & Optimization", icon: "⚡",
      tagline: "Personalized therapies to restore balance and support overall health.",
      products: [
        { name: "Testosterone Replacement Therapy - 3 Month Supply", subtitle: "3-month kit", price: 220, icon: "💪" },
        { name: "Testosterone Replacement Therapy - 1 Month Supply", subtitle: "1-month kit", price: 90, icon: "💪" },
        { name: "Hormone Replacement Therapy for Women - 1 Month Supply", subtitle: "Women's HRT", price: 109, icon: "🌸" }
      ]
    },
    {
      id: "appetite-suppressant", name: "Appetite Suppressant", icon: "🔥",
      tagline: "Curb cravings and support your weight loss journey.",
      products: [
        { name: "L-Carnitine", subtitle: "Fat metabolism booster", price: 175, icon: "🔥" },
        { name: "Sermorelin Troche", subtitle: "Growth hormone peptide", price: 165, icon: "💊" },
        { name: "Skinny Shots - MICC", subtitle: "Lipotropic injection", price: 145, icon: "💉" },
        { name: "Sermorelin Sublingual", subtitle: "Sublingual peptide", price: 225, icon: "💊" },
        { name: "Sermorelin Injection", subtitle: "Injectable peptide", price: 225, icon: "💉" }
      ]
    },
    {
      id: "anti-aging", name: "Anti-Aging", icon: "✨",
      tagline: "Clinically Backed. Youthfully You.",
      products: [
        { name: "NAD+ Patches", subtitle: "Transdermal delivery", price: 285, icon: "🩹" },
        { name: "Glutathione", subtitle: "Master antioxidant", price: 125, icon: "✨" },
        { name: "Nicotinamide Riboside (NR) Injectable", subtitle: "Cellular energy", price: 495, icon: "💉" },
        { name: "Vitamin B12 Injection", subtitle: "Energy boost", price: 95, icon: "💉" },
        { name: "Low Dose Naltrexone", subtitle: "Immune modulator", price: 135, icon: "💊" },
        { name: "NAD+ Nasal Spray", subtitle: "Nasal delivery", price: 265, icon: "🫁" },
        { name: "NAD+ Injection", subtitle: "Direct cellular NAD+", price: 195, icon: "💉" },
        { name: "Anti Aging Topical Gel", subtitle: "Skin rejuvenation gel", price: 185, icon: "🧴" },
        { name: "Anti Aging Topical Cream", subtitle: "Skin rejuvenation cream", price: 175, icon: "🧴" },
        { name: "Methylene Blue Capsules", subtitle: "Mitochondrial support", price: 300, icon: "💊" }
      ]
    },
    {
      id: "sexual-health", name: "Sexual Health", icon: "❤️",
      tagline: "Revitalize intimacy and confidence.",
      products: [
        { name: "Scream Cream - Libido Enhancement for Women", subtitle: "Topical for women", price: 145, icon: "🌸" },
        { name: "Erectile Dysfunction Medication", subtitle: "Customized ED treatment", price: 125, icon: "💊" },
        { name: "Tadalafil + Oxytocin Troche", subtitle: "Dual-action troche", price: 145, icon: "💊" },
        { name: "Oxybutynin", subtitle: "Bladder control", price: 125, icon: "💊" },
        { name: "PT-141 (bremelanotide) Injectable", subtitle: "Libido peptide", price: 175, icon: "💉" },
        { name: "Oxytocin 100 IU Troche", subtitle: "Bonding hormone", price: 145, icon: "💊" },
        { name: "Oxytocin Nasal Spray", subtitle: "Nasal oxytocin", price: 175, icon: "🫁" }
      ]
    },
    {
      id: "hair-loss", name: "Hair Loss", icon: "💇",
      tagline: "Restore thickness and confidence.",
      products: [
        { name: "Hair Loss Scalp Topical Medication", subtitle: "Topical treatment", price: 175, icon: "🧴" },
        { name: "Hair Loss Oral Medication", subtitle: "Oral treatment", price: 145, icon: "💊" }
      ]
    },
    {
      id: "acne", name: "Acne", icon: "🧴",
      tagline: "Clear skin, clear confidence.",
      products: [
        { name: "Acne Cream", subtitle: "Topical cream", price: 145, icon: "🧴" },
        { name: "Acne Gel", subtitle: "Topical gel", price: 125, icon: "🧴" },
        { name: "Doxycycline Hyclate for Acne", subtitle: "Oral antibiotic", price: 165, icon: "💊" }
      ]
    }
  ]
};

// Helper: get product image URL (absolute or relative based on context)
DD.getImageUrl = function(productName, absolute) {
  var path = DD.PRODUCT_IMAGES[productName];
  if (!path) return null;
  return absolute ? DD.BASE + '/' + path : path;
};

// Helper: find product by slug
DD.slugify = function(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

DD.findProduct = function(slug) {
  for (var i = 0; i < DD.PRODUCTS.categories.length; i++) {
    var cat = DD.PRODUCTS.categories[i];
    for (var j = 0; j < cat.products.length; j++) {
      if (DD.slugify(cat.products[j].name) === slug) {
        return { product: cat.products[j], category: cat };
      }
    }
  }
  return null;
};

console.log('[DripDirect] Shared module loaded ✅');
