/* Contact form helper for static site */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const submitButton = document.getElementById('contactSubmitButton');
  const statusEl = document.getElementById('contactStatus');

  function setStatus(message, state) {
    if (!statusEl) return;
    statusEl.textContent = message;
    if (state) {
      statusEl.dataset.state = state;
    } else {
      delete statusEl.dataset.state;
    }
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const company = String(data.get('company') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const summary = String(data.get('summary') || '').trim();
    const message = String(data.get('message') || '').trim();

    setStatus('送信中です。しばらくお待ちください...', 'sending');
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch('https://formsubmit.co/ajax/h2210507@gl.cc.uec.ac.jp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `【お問い合わせ】${summary} / ${name}`,
          _captcha: 'false',
          _template: 'table',
          name,
          company,
          email,
          phone: phone || '未入力',
          summary,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to send inquiry. status=${response.status}`);
      }

      setStatus('お問い合わせを送信しました。ありがとうございます。', 'success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('送信に失敗しました。時間をおいて再度お試しください。', 'error');
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
})();

/* Top page: soft floating reveal */
(function () {
  const body = document.body;
  if (!body || body.dataset.page !== 'top') return;

  const targets = document.querySelectorAll(
    '.image-block img, .section-title, .section-sub, .card-like, .contact-box, .btn'
  );

  if (!targets.length) return;

  targets.forEach((element) => element.classList.add('float-item'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach((element) => element.classList.add('is-inview'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  targets.forEach((element) => observer.observe(element));
})();

