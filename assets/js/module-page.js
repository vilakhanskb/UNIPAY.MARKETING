(() => {
  const root = document.querySelector('[data-module-root]');
  if (!root) return;
  const key = root.getAttribute('data-module-root');
  const data = window.UNIPAY_MODULES?.[key];
  if (!data) {
    root.innerHTML = '<section class="module-hero"><div class="container"><h1>ບໍ່ພົບໂມດູນ</h1><a href="../../">ກັບໜ້າຫຼັກ</a></div></section>';
    return;
  }
  document.documentElement.style.setProperty('--module-color', data.color);
  document.documentElement.style.setProperty('--module-soft', data.soft);
  document.title = `${data.label} — UniPay Platform`;

  const list = (items, renderer) => items.map(renderer).join('');
  root.innerHTML = `
    <section class="module-hero">
      <div class="container module-hero-grid">
        <div class="module-hero-copy reveal visible">
          <div class="breadcrumb"><a href="../../">UniPay Platform</a><span>/</span><span>${data.label}</span></div>
          <p class="eyebrow" style="margin-top:24px"><span></span>${data.kicker}</p>
          <h1>${data.title}<span>${data.accentTitle}</span></h1>
          <p class="lead">${data.summary}</p>
          <div class="module-tags">${list(data.tags, (item) => `<span>${item}</span>`)}</div>
        </div>
        <div class="module-window reveal visible" aria-label="ຕົວຢ່າງ UI ${data.label}">
          <div class="window-top"><span class="mini-logo">U</span><b>${data.label} · Backoffice</b><div class="window-actions"><i></i><i></i></div></div>
          <div class="window-body">
            <aside class="mock-sidebar">${list(data.nav, (item, index) => `<span class="${index === 0 ? 'active' : ''}">${item}</span>`)}</aside>
            <div class="mock-content">
              <div class="mock-heading"><div><small>Operations overview</small><strong>ພາບລວມມື້ນີ້</strong></div><span class="live-pill">● Live</span></div>
              <div class="module-metric-row">${list(data.metrics, (item) => `<article><small>${item[0]}</small><strong>${item[1]}</strong><span>${item[2]}</span></article>`)}</div>
              <div class="mock-table"><div class="mock-table-row head"><span>ລາຍການ</span><span>ສະຖານະ</span><span>ມູນຄ່າ</span></div>${list(data.table, (item) => `<div class="mock-table-row"><b>${item[0]}</b><span class="mock-status">${item[1]}</span><span>${item[2]}</span></div>`)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="module-intro"><div class="container intro-grid"><div class="reveal"><p class="eyebrow"><span></span>Business value</p><h2>${data.introTitle}</h2><p>${data.intro}</p></div><div class="benefit-list">${list(data.benefits, (item, index) => `<article class="reveal delay-${Math.min(index, 2)}"><span>${item[0]}</span><div><h3>${item[1]}</h3><p>${item[2]}</p></div></article>`)}</div></div></section>
    <section class="features-section"><div class="container"><div class="feature-heading reveal"><p class="eyebrow"><span></span>Core capabilities</p><h2>ຄວາມສາມາດຫຼັກຂອງ ${data.label}</h2></div><div class="feature-grid">${list(data.features, (item, index) => `<article class="feature-card reveal delay-${index % 3}"><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`)}</div></div></section>
    <section class="journey-section"><div class="container journey-grid"><div class="journey-copy reveal"><p class="eyebrow"><span></span>How it works</p><h2>${data.journeyTitle}</h2><p>ຂັ້ນຕອນຖືກອອກແບບໃຫ້ອ່ານງ່າຍ, ກວດສອບໄດ້ ແລະສົ່ງຕໍ່ວຽກລະຫວ່າງທີມໄດ້ຢ່າງຊັດເຈນ.</p></div><div class="journey-list">${list(data.journey, (item) => `<article class="reveal"><h3>${item[0]}</h3><p>${item[1]}</p></article>`)}</div></div></section>
    <section class="module-cta"><div class="container"><div class="cta-card reveal"><div><p class="eyebrow light"><span></span>${data.label}</p><h2>${data.ctaTitle}</h2><p>ສຳຫຼວດໂມດູນອື່ນໆ ເພື່ອເຫັນວ່າຂໍ້ມູນ ແລະການດຳເນີນງານເຊື່ອມຕໍ່ກັນແນວໃດ.</p></div><a class="button button-light" href="../../#modules">ເບິ່ງທຸກໂມດູນ <span>→</span></a></div></div></section>`;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: '0px 0px -40px' });
    root.querySelectorAll('.reveal:not(.visible)').forEach((node) => observer.observe(node));
  } else root.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible'));
})();
