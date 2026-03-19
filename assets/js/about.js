(function () {
  if (document.body.dataset.page !== 'about') return;

  const members = [
    {
      eyebrow: 'Strategy',
      heading: 'Promote<br>transformation',
      title: '要約版CEOメッセージ',
      copy:
        '生成AI・業務改革の推進をテーマにした要約メッセージです。意思決定のスピードを高め、現場の実行まで一貫して伴走する姿勢を表現しています。',
      buttonLabel: 'Service Top',
      buttonHref: '../service/index.html',
      linkLabel: 'CEOインタビュー（仮） →',
      image: '../assets/img/about-ceo-placeholder.svg',
      imageAlt: '仮のCEOポートレート',
    },
    {
      eyebrow: 'Strategy',
      heading: 'Promote<br>transformation',
      title: '要約版COOメッセージ',
      copy:
        '生成AI・業務改革の推進をテーマにした要約メッセージです。現場との対話を通じて、変革を定着させるための設計と実装を支える内容にしています。',
      buttonLabel: 'Contact',
      buttonHref: '../contact/index.html',
      linkLabel: 'COOインタビュー（仮） →',
      image: '../assets/img/about-coo-placeholder.svg',
      imageAlt: '仮のCOOポートレート',
    },
  ];

  const cards = document.getElementById('aboutCards');
  if (!cards) return;

  cards.innerHTML = members
    .map(
      (member) => `
        <article class="about-card">
          <img class="about-card__photo" src="${member.image}" alt="${member.imageAlt}" loading="lazy" />
          <div class="about-card__body">
            <p class="about-eyebrow">${member.eyebrow}</p>
            <h3 class="about-card__heading">${member.heading}</h3>
            <p class="about-card__jp-title">${member.title}</p>
            <p class="about-card__copy">${member.copy}</p>
            <a class="about-card__button" href="${member.buttonHref}">${member.buttonLabel}</a>
            <div class="about-card__link">${member.linkLabel}</div>
          </div>
        </article>
      `
    )
    .join('');
})();
