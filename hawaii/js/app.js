/* =========================================================
   DRIP Direct Hawaii — Store JS
   ========================================================= */

// -------- Product Images --------
const PRODUCT_IMAGES = {
  "Semaglutide Injection": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/semaglutide-injection.png",
  "Semaglutide Sublingual": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/semaglutide-sublingual.png",
  "Tirzepatide": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/tirzepatide.png",
  "Liraglutide": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/liraglutide.png",
  "Oral Weight Loss Capsules": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/oral-weight-loss.png",
  "Metformin HCl ER Tablet": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/metformin.png",
  "Phentermine HCl Tablet": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/phentermine.png",
  "Testosterone Replacement Therapy - 3 Month Supply": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/trt-3mo.png",
  "Testosterone Replacement Therapy - 1 Month Supply": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/trt-1mo.png",
  "Hormone Replacement Therapy for Women - 1 Month Supply": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/hrt-women.png",
  "L-Carnitine": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/l-carnitine.png",
  "Sermorelin Troche": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/sermorelin-troche.png",
  "Skinny Shots - MICC": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/micc.png",
  "Sermorelin Sublingual": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/sermorelin-sublingual.png",
  "Sermorelin Injection": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/sermorelin-injection.png",
  "NAD+ Patches": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/nad-patches.png",
  "Glutathione": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/glutathione.png",
  "Nicotinamide Riboside (NR) Injectable": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/nr-injectable.png",
  "Vitamin B12 Injection": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/b12-injection.png",
  "Low Dose Naltrexone": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/naltrexone.png",
  "NAD+ Nasal Spray": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/nad-nasal.png",
  "NAD+ Injection": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/nad-injection.png",
  "Anti Aging Topical Gel": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/anti-aging-gel.png",
  "Anti Aging Topical Cream": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/anti-aging-cream.png",
  "Methylene Blue Capsules": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/methylene-blue.png",
  "Scream Cream - Libido Enhancement for Women": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/scream-cream.png",
  "Erectile Dysfunction Medication": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/ed-medication.png",
  "Tadalafil + Oxytocin Troche": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/tadalafil-oxytocin.png",
  "Oxybutynin": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/oxybutynin.png",
  "PT-141 (bremelanotide) Injectable": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/pt141.png",
  "Oxytocin 100 IU Troche": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/oxytocin-troche.png",
  "Oxytocin Nasal Spray": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/oxytocin-spray.png",
  "Hair Loss Scalp Topical Medication": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/hair-topical.png",
  "Hair Loss Oral Medication": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/hair-oral.png",
  "Acne Cream": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/acne-cream.png",
  "Acne Gel": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/acne-gel.png",
  "Doxycycline Hyclate for Acne": "https://betterbranding.github.io/dripbar-pages/hawaii/img/products/doxycycline.png",
};

// -------- Product Data --------
const PRODUCTS = {
  categories: [
    {
      id: "weight-management", name: "Weight Management", icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">",
      tagline: "Slim Down and Energize with Tailored Weight Loss Solutions.",
      products: [
        { name: "Semaglutide Injection", subtitle: "Compounded with glycine", price: 160, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/syringe.png" alt="💉" class="branded-icon">" },
        { name: "Semaglutide Sublingual", subtitle: "Dissolves under tongue", price: 195, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "Tirzepatide", subtitle: "Compounded with Glycine", price: 200, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/syringe.png" alt="💉" class="branded-icon">" },
        { name: "Liraglutide", subtitle: "Daily GLP-1 injection", price: 345, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/syringe.png" alt="💉" class="branded-icon">" },
        { name: "Oral Weight Loss Capsules", subtitle: "Easy oral dosing", price: 225, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "Metformin HCl ER Tablet", subtitle: "Extended release", price: 135, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "Phentermine HCl Tablet", subtitle: "Appetite control", price: 135, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
      ]
    },
    {
      id: "hormone-optimization", name: "Hormone Balance & Optimization", icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/lightning.png" alt="⚡" class="branded-icon">",
      tagline: "Personalized therapies to restore balance and support overall health.",
      products: [
        { name: "Testosterone Replacement Therapy - 3 Month Supply", subtitle: "3-month kit", price: 220, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/muscle.png" alt="💪" class="branded-icon">" },
        { name: "Testosterone Replacement Therapy - 1 Month Supply", subtitle: "1-month kit", price: 90, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/muscle.png" alt="💪" class="branded-icon">" },
        { name: "Hormone Replacement Therapy for Women - 1 Month Supply", subtitle: "Women's HRT", price: 109, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/blossom.png" alt="🌸" class="branded-icon">" },
      ]
    },
    {
      id: "appetite-suppressant", name: "Appetite Suppressant", icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/fire.png" alt="🔥" class="branded-icon">",
      tagline: "Curb cravings and support your weight loss journey.",
      products: [
        { name: "L-Carnitine", subtitle: "Fat metabolism booster", price: 175, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/fire.png" alt="🔥" class="branded-icon">" },
        { name: "Sermorelin Troche", subtitle: "Growth hormone peptide", price: 165, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "Skinny Shots - MICC", subtitle: "Lipotropic injection", price: 145, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/syringe.png" alt="💉" class="branded-icon">" },
        { name: "Sermorelin Sublingual", subtitle: "Sublingual peptide", price: 225, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "Sermorelin Injection", subtitle: "Injectable peptide", price: 225, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/syringe.png" alt="💉" class="branded-icon">" },
      ]
    },
    {
      id: "anti-aging", name: "Anti-Aging", icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/sparkles.png" alt="✨" class="branded-icon">",
      tagline: "Clinically Backed. Youthfully You.",
      products: [
        { name: "NAD+ Patches", subtitle: "Transdermal delivery", price: 285, icon: "🩹" },
        { name: "Glutathione", subtitle: "Master antioxidant", price: 125, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/sparkles.png" alt="✨" class="branded-icon">" },
        { name: "Nicotinamide Riboside (NR) Injectable", subtitle: "Cellular energy", price: 495, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/syringe.png" alt="💉" class="branded-icon">" },
        { name: "Vitamin B12 Injection", subtitle: "Energy boost", price: 95, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/syringe.png" alt="💉" class="branded-icon">" },
        { name: "Low Dose Naltrexone", subtitle: "Immune modulator", price: 135, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "NAD+ Nasal Spray", subtitle: "Nasal delivery", price: 265, icon: "🫁" },
        { name: "NAD+ Injection", subtitle: "Direct cellular NAD+", price: 195, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/syringe.png" alt="💉" class="branded-icon">" },
        { name: "Anti Aging Topical Gel", subtitle: "Skin rejuvenation gel", price: 185, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/lotion.png" alt="🧴" class="branded-icon">" },
        { name: "Anti Aging Topical Cream", subtitle: "Skin rejuvenation cream", price: 175, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/lotion.png" alt="🧴" class="branded-icon">" },
        { name: "Methylene Blue Capsules", subtitle: "Mitochondrial support", price: 300, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
      ]
    },
    {
      id: "sexual-health", name: "Sexual Health", icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/heart.png" alt="<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/heart.png" alt="❤" class="branded-icon">️" class="branded-icon">",
      tagline: "Revitalize intimacy and confidence.",
      products: [
        { name: "Scream Cream - Libido Enhancement for Women", subtitle: "Topical for women", price: 145, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/blossom.png" alt="🌸" class="branded-icon">" },
        { name: "Erectile Dysfunction Medication", subtitle: "Customized ED treatment", price: 125, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "Tadalafil + Oxytocin Troche", subtitle: "Dual-action troche", price: 145, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "Oxybutynin", subtitle: "Bladder control", price: 125, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "PT-141 (bremelanotide) Injectable", subtitle: "Libido peptide", price: 175, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/syringe.png" alt="💉" class="branded-icon">" },
        { name: "Oxytocin 100 IU Troche", subtitle: "Bonding hormone", price: 145, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
        { name: "Oxytocin Nasal Spray", subtitle: "Nasal oxytocin", price: 175, icon: "🫁" },
      ]
    },
    {
      id: "hair-loss", name: "Hair Loss", icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/haircut.png" alt="💇" class="branded-icon">",
      tagline: "Restore thickness and confidence.",
      products: [
        { name: "Hair Loss Scalp Topical Medication", subtitle: "Topical treatment", price: 175, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/lotion.png" alt="🧴" class="branded-icon">" },
        { name: "Hair Loss Oral Medication", subtitle: "Oral treatment", price: 145, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
      ]
    },
    {
      id: "acne", name: "Acne", icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/lotion.png" alt="🧴" class="branded-icon">",
      tagline: "Clear skin, clear confidence.",
      products: [
        { name: "Acne Cream", subtitle: "Topical cream", price: 145, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/lotion.png" alt="🧴" class="branded-icon">" },
        { name: "Acne Gel", subtitle: "Topical gel", price: 125, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/lotion.png" alt="🧴" class="branded-icon">" },
        { name: "Doxycycline Hyclate for Acne", subtitle: "Oral antibiotic", price: 165, icon: "<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/pill.png" alt="💊" class="branded-icon">" },
      ]
    }
  ]
};

// -------- State --------
let cart = [];
let activeCategory = 'all';

// -------- DOM Ready --------
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavbar();
  initCategories();
  renderProducts();
  initScrollReveal();
  initCountUp();
  initModal();
  initMobileNav();
});

// =========================================================
// PARTICLES
// =========================================================
function initParticles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '0, 212, 255' : '0, 255, 136';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }
  animate();
}

// =========================================================
// NAVBAR
// =========================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// =========================================================
// MOBILE NAV
// =========================================================
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// =========================================================
// CATEGORIES
// =========================================================
function initCategories() {
  const scroll = document.getElementById('categoryScroll');

  // "All" pill
  const allPill = document.createElement('button');
  allPill.className = 'category-pill active';
  allPill.innerHTML = `<span class="cat-icon"><img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/home.png" alt="🏠" class="branded-icon"></span> All <span class="cat-count">37</span>`;
  allPill.addEventListener('click', () => {
    activeCategory = 'all';
    updateCategoryPills();
    renderProducts();
  });
  scroll.appendChild(allPill);

  PRODUCTS.categories.forEach(cat => {
    const pill = document.createElement('button');
    pill.className = 'category-pill';
    pill.dataset.catId = cat.id;
    pill.innerHTML = `<span class="cat-icon">${cat.icon}</span> ${cat.name} <span class="cat-count">${cat.products.length}</span>`;
    pill.addEventListener('click', () => {
      activeCategory = cat.id;
      updateCategoryPills();
      renderProducts();
      // Scroll to products
      document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    scroll.appendChild(pill);
  });
}

function updateCategoryPills() {
  document.querySelectorAll('.category-pill').forEach(pill => {
    const isAll = !pill.dataset.catId && activeCategory === 'all';
    const isMatch = pill.dataset.catId === activeCategory;
    pill.classList.toggle('active', isAll || isMatch);
  });
}

// =========================================================
// RENDER PRODUCTS
// =========================================================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  const categories = activeCategory === 'all'
    ? PRODUCTS.categories
    : PRODUCTS.categories.filter(c => c.id === activeCategory);

  categories.forEach(cat => {
    const group = document.createElement('div');
    group.className = 'category-group';
    group.innerHTML = `
      <div class="category-group-header reveal">
        <h3 class="category-group-title">${cat.icon} ${cat.name}</h3>
        <span class="category-group-tag">${cat.tagline}</span>
      </div>
      <div class="product-grid" id="grid-${cat.id}"></div>
    `;
    grid.appendChild(group);

    const productGrid = group.querySelector('.product-grid');
    cat.products.forEach((product, idx) => {
      const card = document.createElement('div');
      card.className = 'product-card reveal';
      card.style.transitionDelay = `${idx * 0.05}s`;
      card.innerHTML = `
        <div class="product-image-wrap">
          ${PRODUCT_IMAGES[product.name]
            ? `<img class="product-image" src="${PRODUCT_IMAGES[product.name]}" alt="${product.name}" loading="lazy" />`
            : `<div class="product-image-placeholder">${product.icon}</div>`
          }
        </div>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-subtitle">${product.subtitle || '&nbsp;'}</div>
          <div class="product-footer">
            <div class="product-price">
              <span class="from">Starting from</span>
              <span class="amount">$${product.price}</span>
            </div>
            <button class="btn-add" data-product="${encodeURIComponent(JSON.stringify(product))}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              Add
            </button>
          </div>
        </div>
      `;

      // Card click -> modal
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-add')) return;
        openModal(product, cat.name);
      });

      // Add to cart
      card.querySelector('.btn-add').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product);
      });

      productGrid.appendChild(card);
    });
  });

  // Re-init scroll reveal for new elements
  initScrollReveal();
}

// =========================================================
// CART
// =========================================================
function addToCart(product) {
  cart.push(product);
  updateCartCount();
  showToast(`${product.name} added to cart`);
}

function updateCartCount() {
  const count = document.getElementById('cartCount');
  count.textContent = cart.length;
  count.classList.toggle('active', cart.length > 0);
}

// =========================================================
// TOAST
// =========================================================
let toastTimeout;
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = `<img src="https://betterbranding.github.io/dripbar-pages/hawaii/img/icons/checkmark.png" alt="✅" class="branded-icon"> ${message}`;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// =========================================================
// MODAL
// =========================================================
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(product, categoryName) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    ${PRODUCT_IMAGES[product.name]
      ? `<img class="modal-product-image" src="${PRODUCT_IMAGES[product.name]}" alt="${product.name}" />`
      : `<div class="modal-product-icon">${product.icon}</div>`
    }
    <div class="modal-product-name">${product.name}</div>
    <div class="modal-product-subtitle">${product.subtitle || categoryName}</div>
    <div class="modal-product-price">
      <span class="from" style="font-size:0.8rem;color:var(--text-muted);font-weight:400;">Starting from</span><br>
      <span class="amount">$${product.price}</span>
    </div>
    <div class="modal-product-desc">
      This treatment is prescribed by a licensed telehealth provider after a brief health intake.
      Your medication ships directly from a licensed pharmacy — discreet, secure, and straight to your door.
    </div>
    <div class="modal-actions">
      <button class="btn btn--green" onclick="addToCart(${encodeURIComponent(JSON.stringify(product)).split('').map(c => c === "'" ? "\\'" : c).join('')
        ? `JSON.parse(decodeURIComponent('${encodeURIComponent(JSON.stringify(product))}'))`
        : 'null'}); closeModal();">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        Add to Cart
      </button>
      <button class="btn btn--glass" onclick="closeModal()">Close</button>
    </div>
  `;

  // Fix the add to cart button with a proper event listener
  const addBtn = body.querySelector('.btn--green');
  addBtn.removeAttribute('onclick');
  addBtn.addEventListener('click', () => {
    addToCart(product);
    closeModal();
  });

  const closeBtn2 = body.querySelector('.btn--glass');
  closeBtn2.removeAttribute('onclick');
  closeBtn2.addEventListener('click', closeModal);

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// =========================================================
// SCROLL REVEAL
// =========================================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// =========================================================
// COUNT UP ANIMATION
// =========================================================
function initCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        if (!target) return;
        let current = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          el.textContent = current;
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}
