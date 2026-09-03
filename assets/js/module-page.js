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

  const list = (items, renderer) => (items || []).map(renderer).join('');
  const imagePath = (src, scope = 'portal') => `../../assets/images/${scope}/${src}`;
  const heroShot = data.screenshots?.[0];
  const appEvidenceSection = (data.appScreenshots?.length || data.workflowMap?.length) ? `
    <section class="app-evidence-section">
      <div class="container">
        <div class="section-heading reveal"><div><p class="eyebrow"><span></span>App → Backoffice</p><h2>ການໃຊ້ງານໃນ App<br />ເຊື່ອມກັບ Backoffice ແນວໃດ</h2></div><p>ທຸກລາຍການທີ່ເຮັດໃນ UniPay+ ຈະຖືກບັນທຶກພ້ອມສະຖານະ ແລະຂໍ້ມູນອ້າງອີງ ເພື່ອໃຫ້ທີມງານກວດສອບໃນ Backoffice ໄດ້.</p></div>
        ${data.appScreenshots?.length ? `<div class="module-app-gallery">${list(data.appScreenshots, (shot, index) => `<figure class="app-phone reveal delay-${index % 3}"><a class="phone-screen" href="${imagePath(shot.src, 'app')}" target="_blank" rel="noreferrer"><img src="${imagePath(shot.src, 'app')}" alt="UI ຈິງໃນແອັບ: ${shot.title}" width="1080" height="2400" loading="lazy" /></a><figcaption><span>APP UI 0${index + 1}</span><h3>${shot.title}</h3><p>${shot.caption}</p></figcaption></figure>`)}</div>` : ''}
        <div class="module-workflow-map reveal"><div class="workflow-head"><span>Mobile App</span><span>Backoffice Portal</span></div>${list(data.workflowMap, (item) => `<article><strong>${item[0]}</strong><i>→</i><p>${item[1]}</p></article>`)}</div>
      </div>
    </section>` : '';
  const roleSection = data.roleWorkflows?.length ? `
    <section class="role-section">
      <div class="container">
        <div class="section-heading reveal"><div><p class="eyebrow light"><span></span>Role-based MiniApp</p><h2>UniPOS MiniApp<br />ຮອງຮັບ 3 ບົດບາດ</h2></div><p>ຫຼັງຈາກເລືອກຮ້ານ ແລະສາຂາແລ້ວ ລະບົບຈະສະແດງເມນູ ແລະຂໍ້ມູນຕາມ Role ຂອງຜູ້ໃຊ້ແຕ່ລະຄົນ.</p></div>
        <div class="role-grid">${list(data.roleWorkflows, (role, index) => `<article class="role-card reveal delay-${index}"><div class="role-card-head"><span>0${index + 1}</span><b>${role.code}</b></div><h3>${role.label}</h3>${role.image ? `<figure class="role-ui"><a href="${imagePath(role.image, 'app')}" target="_blank" rel="noreferrer"><img src="${imagePath(role.image, 'app')}" alt="UI ຈິງຂອງ UniPOS ສຳລັບ ${role.label}" width="1080" height="2400" loading="lazy" /></a><figcaption><span>REAL APP UI</span><p>${role.evidence}</p></figcaption></figure>` : ''}<p class="role-pitch">${role.pitch}</p><p class="role-scope">${role.scope}</p><ol>${list(role.steps, (step) => `<li>${step}</li>`)}</ol></article>`)}</div>
        <div class="role-control-note reveal"><span>ການກຳນົດສິດ</span><p>ບັນຊີໜຶ່ງສາມາດເຂົ້າໃຊ້ໄດ້ຫຼາຍຮ້ານ ຫຼືຫຼາຍ Role. ສິດການໃຊ້ງານຈະຖືກກຳນົດຕາມ Merchant, ສາຂາ ແລະ Role ເພື່ອໃຫ້ແຕ່ລະຄົນເຫັນສະເພາະວຽກຂອງຕົນ.</p></div>
      </div>
    </section>` : '';

  root.innerHTML = `
    <section class="module-hero">
      <div class="container module-hero-grid">
        <div class="module-hero-copy reveal visible">
          <div class="breadcrumb"><a href="../../">UniPay Platform</a><span>/</span><span>${data.label}</span></div>
          <div class="module-status-pill"><span></span>${data.status || 'ຢູ່ໃນຂອບເຂດ Demo ແລະ Pilot ປັດຈຸບັນ'}</div>
          <p class="eyebrow" style="margin-top:24px"><span></span>${data.kicker}</p>
          <h1>${data.title}<span>${data.accentTitle}</span></h1>
          <p class="lead">${data.summary}</p>
          <div class="module-tags">${list(data.tags, (item) => `<span>${item}</span>`)}</div>
        </div>
        <figure class="real-ui-frame hero-ui reveal visible">
          <a href="${imagePath(heroShot.src)}" target="_blank" rel="noreferrer" aria-label="ເປີດພາບ UI ${heroShot.title} ຂະໜາດເຕັມ"><img src="${imagePath(heroShot.src)}" alt="UI ຈິງ: ${heroShot.title}" width="1440" height="900" fetchpriority="high" /></a>
          <figcaption><span class="verified-dot">●</span><b>UI ຈາກລະບົບຈິງ</b><span>${heroShot.title}</span></figcaption>
        </figure>
      </div>
    </section>

    <section class="module-proof"><div class="container proof-strip reveal"><span>UI ຈິງ · ${data.label}</span><p>${data.proof}</p></div></section>

    ${appEvidenceSection}

    ${roleSection}

    <section class="module-intro"><div class="container intro-grid"><div class="reveal"><p class="eyebrow"><span></span>ປະໂຫຍດຕໍ່ທຸລະກິດ</p><h2>${data.introTitle}</h2><p>${data.intro}</p></div><div class="benefit-list">${list(data.benefits, (item, index) => `<article class="reveal delay-${Math.min(index, 2)}"><span>${item[0]}</span><div><h3>${item[1]}</h3><p>${item[2]}</p></div></article>`)}</div></div></section>

    <section class="problem-section"><div class="container"><div class="feature-heading reveal"><p class="eyebrow light"><span></span>ບັນຫາທີ່ພົບເລື້ອຍ</p><h2>ບັນຫາທີ່ໂມດູນນີ້ຊ່ວຍແກ້ໄຂ</h2></div><div class="problem-grid">${list(data.problems, (item, index) => `<article class="reveal delay-${index}"><span>0${index + 1}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`)}</div></div></section>

    <section class="features-section"><div class="container"><div class="feature-heading reveal"><p class="eyebrow"><span></span>Core features</p><h2>ຟັງຊັນຫຼັກໃນໂມດູນນີ້</h2></div><div class="feature-grid">${list(data.features, (item, index) => `<article class="feature-card reveal delay-${index % 3}"><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`)}</div></div></section>

    <section class="capability-section"><div class="container"><div class="section-heading reveal"><div><p class="eyebrow"><span></span>Current Web Portal</p><h2>ຟັງຊັນທີ່ເປີດໃຊ້<br />ໃນ Web Portal</h2></div><p>ລາຍການຟັງຊັນຕໍ່ໄປນີ້ກວດຈາກ Sidebar ຂອງ Backoffice Portal ໃນປັດຈຸບັນ ແລະສະແດງສະເພາະຟັງຊັນທີ່ເປີດໃຊ້ແລ້ວ.</p></div><div class="capability-groups">${list(data.capabilityGroups, (group, index) => `<article class="capability-group reveal delay-${index}"><span>0${index + 1}</span><h3>${group.title}</h3><ul>${list(group.items, (item) => `<li>${item}</li>`)}</ul></article>`)}</div></div></section>

    <section class="ui-section"><div class="container"><div class="section-heading reveal"><div><p class="eyebrow"><span></span>Real product UI</p><h2>UI ຈາກລະບົບຈິງ</h2></div><p>ພາບເຫຼົ່ານີ້ບັນທຶກຈາກ Backoffice Portal ຕົວຈິງ; ຕົວເລກ ແລະສະຖານະຕ່າງໆເປັນຂໍ້ມູນໃນເວລາທີ່ບັນທຶກພາບ.</p></div><div class="ui-gallery ${data.screenshots.length === 1 ? 'single' : ''}">${list(data.screenshots, (shot, index) => `<figure class="ui-shot reveal delay-${index}"><a href="${imagePath(shot.src)}" target="_blank" rel="noreferrer"><img src="${imagePath(shot.src)}" alt="UI ຈິງ: ${shot.title}" width="1440" height="900" loading="lazy" /></a><figcaption><div><span>UI 0${index + 1}</span><h3>${shot.title}</h3></div><p>${shot.caption}</p></figcaption></figure>`)}</div></div></section>

    <section class="journey-section"><div class="container journey-grid"><div class="journey-copy reveal"><p class="eyebrow"><span></span>ຂັ້ນຕອນການເຮັດວຽກ</p><h2>${data.journeyTitle}</h2><p>ແຕ່ລະຂັ້ນຕອນມີສະຖານະ ແລະຂໍ້ມູນອ້າງອີງທີ່ຊັດເຈນ ຊ່ວຍໃຫ້ກວດສອບ ແລະສົ່ງຕໍ່ວຽກລະຫວ່າງທີມໄດ້ງ່າຍ.</p></div><div class="journey-list">${list(data.journey, (item) => `<article class="reveal"><h3>${item[0]}</h3><p>${item[1]}</p></article>`)}</div></div></section>

    <section class="audience-section"><div class="container"><div class="feature-heading reveal"><p class="eyebrow"><span></span>ກຸ່ມຜູ້ໃຊ້</p><h2>ໂມດູນນີ້ເໝາະກັບໃຜ</h2></div><div class="audience-grid">${list(data.audiences, (item, index) => `<article class="reveal delay-${index}"><span>${String(index + 1).padStart(2, '0')}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`)}</div><div class="outcomes-card reveal"><div><p class="eyebrow light"><span></span>ຜົນຮັບຕໍ່ທຸລະກິດ</p><h2>ສິ່ງທີ່ທຸລະກິດຈະໄດ້ຮັບ</h2></div><ul>${list(data.outcomes, (item) => `<li><span>✓</span>${item}</li>`)}</ul></div></div></section>

    <section class="module-cta"><div class="container"><div class="cta-card reveal"><div><p class="eyebrow light"><span></span>${data.label}</p><h2>${data.ctaTitle}</h2><p>ນຳໂມດູນນີ້ເຂົ້າ Pilot ຮ່ວມກັບ Workflow ທີ່ກ່ຽວຂ້ອງ ແລະວັດຜົນດ້ວຍ KPI ກ່ອນຂະຫຍາຍການນຳໃຊ້.</p></div><div class="cta-actions"><a class="button button-light" href="../../#roadmap">ເບິ່ງແຜນ Pilot <span>→</span></a></div></div></div></section>`;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: '0px 0px -40px' });
    root.querySelectorAll('.reveal:not(.visible)').forEach((node) => observer.observe(node));
  } else root.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible'));
})();
