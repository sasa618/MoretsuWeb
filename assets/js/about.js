(function () {
  const memberGrid = document.getElementById('memberGrid');
  if (!memberGrid) return;

  const members = [
    {
      id: 'member-1',
      name: '吉津 瑛史',
      role: '代表取締役 CEO',
      image: '../assets/img/about-member-1.svg',
      greeting: 'こんにちは、吉津です。挑戦する人を全力で後押しするサービスを目指しています。',
    },
    {
      id: 'member-2',
      name: '宮崎 星海',
      role: 'CMO',
      image: '../assets/img/about-member-2.svg',
      greeting: 'はじめまして、宮崎です。ユーザーに寄り添った体験設計を大切にしています。',
    },
    {
      id: 'member-3',
      name: '服部 友規',
      role: 'マーケティングデータ',
      image: '../assets/img/about-member-3.svg',
      greeting: '服部です。データとアイデアをつなぎ、チームの意思決定を支えていきます。',
    },
  ];

  const cardsMarkup = members
    .map(
      (member) => `
      <article class="member-card" data-member-id="${member.id}">
        <button class="member-card__button" type="button" aria-expanded="false" aria-controls="${member.id}-greeting">
          <span class="member-card__image-wrap">
            <img class="member-card__image" src="${member.image}" alt="${member.name}の写真" loading="lazy" />
          </span>
          <p class="member-card__role">${member.role}</p>
          <p class="member-card__name">${member.name}</p>
        </button>
        <p class="member-card__greeting" id="${member.id}-greeting" hidden>${member.greeting}</p>
      </article>
      `,
    )
    .join('');

  memberGrid.innerHTML = cardsMarkup;

  memberGrid.addEventListener('click', function (event) {
    const button = event.target.closest('.member-card__button');
    if (!button) return;

    const card = button.closest('.member-card');
    const greeting = card.querySelector('.member-card__greeting');
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!isOpen));
    greeting.hidden = isOpen;
    card.classList.toggle('is-open', !isOpen);
  });
})();
