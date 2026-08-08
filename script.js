// ============================================
// VelunTech — interações
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu mobile ---------- */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  /* ---------- Demo: Sem site / Com VelunTech ---------- */
  const demoContent = {
    antes: {
      url: 'instagram.com/seunegocio',
      html: `
        <h4>"Manda o link do Insta"</h4>
        <p>Cliente novo tem que rolar o feed pra achar preço, endereço ou horário.
        Se você trocar de rede social, o link antigo já era.</p>
        <div class="demo-tags">
          <span class="demo-tag is-bad">Sem endereço fixo</span>
          <span class="demo-tag is-bad">Difícil de achar no Google</span>
          <span class="demo-tag is-bad">Depende do algoritmo</span>
        </div>
      `
    },
    depois: {
      url: 'seunegocio.com.br',
      html: `
        <h4>Um endereço só seu, sempre no ar</h4>
        <p>O cliente entra, entende o que você vende e já sabe como te chamar —
        sem depender de rede social ou de achar o post certo.</p>
        <div class="demo-tags">
          <span class="demo-tag is-good">Aparece no Google</span>
          <span class="demo-tag is-good">Funciona no celular</span>
          <span class="demo-tag is-good">Seu, não emprestado</span>
        </div>
      `
    }
  };

  const toggleBtns = document.querySelectorAll('.demo-toggle-btn');
  const demoUrl = document.getElementById('demoUrl');
  const demoContentEl = document.getElementById('demoContent');

  function renderDemo(state) {
    const data = demoContent[state];
    demoContentEl.style.opacity = 0;
    setTimeout(() => {
      demoUrl.textContent = data.url;
      demoContentEl.innerHTML = data.html;
      demoContentEl.style.opacity = 1;
    }, 150);
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      renderDemo(btn.dataset.state);
    });
  });

  if (demoContentEl) renderDemo('antes');

  /* ---------- Processo: abas de etapas ---------- */
  const stepTabs = document.querySelectorAll('.step-tab');
  const stepsBarFill = document.getElementById('stepsBarFill');
  const stepDetailTitle = document.getElementById('stepDetailTitle');
  const stepDetailText = document.getElementById('stepDetailText');
  const stepDetail = document.getElementById('stepDetail');

  stepTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      stepTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      if (stepsBarFill) {
        const pct = 100 / stepTabs.length;
        stepsBarFill.style.width = pct + '%';
        stepsBarFill.style.left = (pct * index) + '%';
      }

      if (stepDetailTitle && stepDetailText) {
        stepDetailTitle.textContent = tab.dataset.title;
        stepDetailText.textContent = tab.dataset.desc;
        // reinicia a animação de entrada
        stepDetail.querySelectorAll('h3, p').forEach(el => {
          el.style.animation = 'none';
          void el.offsetWidth;
          el.style.animation = '';
        });
      }
    });
  });

  /* ---------- Header: sombra ao rolar ---------- */
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 12) header.style.borderBottomColor = 'rgba(255,255,255,0.16)';
    else header.style.borderBottomColor = 'rgba(255,255,255,0.09)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Reveal ao rolar: qualquer elemento .reveal ---------- */
  const revealTargets = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach(el => io.observe(el));
});