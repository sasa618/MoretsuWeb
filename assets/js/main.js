/* Contact form helper for static site */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const company = String(data.get('company') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const summary = String(data.get('summary') || '').trim();
    const message = String(data.get('message') || '').trim();

    const to = 'info@example.com';
    const subject = `【お問い合わせ】${summary} / ${name}`;
    const body = [
      `お名前: ${name}`,
      `会社名: ${company}`,
      `メアド: ${email}`,
      `電話番号: ${phone || '未入力'}`,
      `問い合わせ概要: ${summary}`,
      '',
      'お問い合わせ内容:',
      message,
    ].join('\n');

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
})();
