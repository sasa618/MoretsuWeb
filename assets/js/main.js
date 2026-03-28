/* Contact form helper for static site */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const submitButton = document.getElementById('contactSubmitButton');
  const statusEl = document.getElementById('contactStatus');
  const endpoint = 'https://formsubmit.co/h2210507@gl.cc.uec.ac.jp';

  function setStatus(message, state) {
    if (!statusEl) return;
    statusEl.textContent = message;
    if (state) {
      statusEl.dataset.state = state;
    } else {
      delete statusEl.dataset.state;
    }
  }

  function ensureSubmitFrame() {
    let frame = document.getElementById('contactSubmitFrame');
    if (frame) return frame;

    frame = document.createElement('iframe');
    frame.id = 'contactSubmitFrame';
    frame.name = 'contactSubmitFrame';
    frame.hidden = true;
    frame.setAttribute('aria-hidden', 'true');
    document.body.appendChild(frame);
    return frame;
  }

  function sendByHiddenForm(payload) {
    const frame = ensureSubmitFrame();
    const tempForm = document.createElement('form');
    tempForm.method = 'POST';
    tempForm.action = endpoint;
    tempForm.target = frame.name;
    tempForm.style.display = 'none';

    Object.entries(payload).forEach(function ([key, value]) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      tempForm.appendChild(input);
    });

    document.body.appendChild(tempForm);
    tempForm.submit();
    document.body.removeChild(tempForm);
  }

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

    setStatus('送信中です。しばらくお待ちください...', 'sending');
    if (submitButton) submitButton.disabled = true;

    try {
      sendByHiddenForm({
        _subject: `【お問い合わせ】${summary} / ${name}`,
        _captcha: 'false',
        _template: 'table',
        _replyto: email,
        name,
        company,
        email,
        phone: phone || '未入力',
        summary,
        message,
      });
      setStatus(
        '送信処理を受け付けました。※初回のみ、宛先メールに届く確認メールで有効化が必要です。',
        'success'
      );
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('送信に失敗しました。時間をおいて再度お試しください。', 'error');
    }

    if (submitButton) submitButton.disabled = false;
  });
})();
