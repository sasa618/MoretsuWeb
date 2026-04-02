(function () {
  if (document.body.dataset.page !== 'about') return;

  const members = [
    {
      eyebrow: 'CEO Message',
      heading: 'Ignite life<br>with intention',
      title: '代表取締役CEO 三橋 威吹',
      copy:
        'メッセージ全文は Member ページにて掲載しています。\n省略メッセージは Member 一覧、本文は詳細ページでご覧ください。',
      buttonLabel: 'CEO本文を見る',
      buttonHref: '../member/detail.html?id=ceo',
      linkLabel: 'CEOインタビュー（準備中）',
      image: '../assets/img/about-ceo-placeholder.svg',
      imageAlt: 'CEOポートレート',
    },
    {
      eyebrow: 'COO Message',
      heading: 'Build a<br>winning field',
      title: '取締役COO 井上 颯大',
      copy:
        'メッセージ全文は Member ページにて掲載しています。\n省略メッセージは Member 一覧、本文は詳細ページでご覧ください。',
      buttonLabel: 'COO本文を見る',
      buttonHref: '../member/detail.html?id=coo',
      linkLabel: 'COOインタビュー（準備中）',
      image: '../assets/img/about-coo-placeholder.svg',
      imageAlt: 'COOポートレート',
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
            <p class="about-card__copy">${member.copy.replaceAll('\n', '<br />')}</p>
            <a class="about-card__button" href="${member.buttonHref}">${member.buttonLabel}</a>
            <div class="about-card__link">${member.linkLabel}</div>
          </div>
        </article>
      `
    )
    .join('');
})();
