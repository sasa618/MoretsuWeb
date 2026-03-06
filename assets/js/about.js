(function () {
  const memberGrid = document.getElementById('memberGrid');
  const modal = document.getElementById('memberModal');
  if (!memberGrid || !modal) return;

  const modalImage = document.getElementById('memberModalImage');
  const modalName = document.getElementById('memberModalName');
  const modalRole = document.getElementById('memberModalRole');
  const modalGreeting = document.getElementById('memberModalGreeting');
  const modalCloseButton = document.getElementById('memberModalClose');

  function createAvatarDataUri(name, tone) {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="360" height="420" viewBox="0 0 360 420" role="img" aria-label="${name}のサンプル画像">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${tone}" />
            <stop offset="100%" stop-color="#fff7ed" />
          </linearGradient>
        </defs>
        <rect width="360" height="420" rx="22" fill="url(#bg)" />
        <circle cx="180" cy="145" r="60" fill="#f59e0b" />
        <rect x="108" y="218" width="144" height="120" rx="34" fill="#f97316" />
        <text x="180" y="382" text-anchor="middle" font-size="24" font-weight="700" fill="#7c2d12">SAMPLE</text>
      </svg>
    `.trim();

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  const members = [
    {
      id: 'member-1',
      name: '吉津 瑛史',
      role: '代表取締役 CEO',
      image: createAvatarDataUri('吉津 瑛史', '#fed7aa'),
      greeting: 'こんにちは、吉津です。挑戦する人を全力で後押しするサービスを目指しています。日々の学びと実践が循環する場を、チーム全員で育てていきます。',
    },
    {
      id: 'member-2',
      name: '宮崎 星海',
      role: 'CMO',
      image: createAvatarDataUri('宮崎 星海', '#fdba74'),
      greeting: 'はじめまして、宮崎です。ユーザーに寄り添った体験設計を大切にしています。小さな違和感まで丁寧に拾い、使いやすさを磨いていきます。',
    },
    {
      id: 'member-3',
      name: '服部 友規',
      role: 'マーケティングデータ',
      image: createAvatarDataUri('服部 友規', '#ffedd5'),
      greeting: '服部です。データとアイデアをつなぎ、チームの意思決定を支えていきます。数字をわかりやすく翻訳し、次の一歩を明確にするのが役割です。',
    },
  ];

  const cardsMarkup = members
    .map(
      (member) => `
      <article class="member-card" data-member-id="${member.id}">
        <button class="member-card__button" type="button" aria-label="${member.name}の挨拶を見る">
          <span class="member-card__image-wrap">
            <img class="member-card__image" src="${member.image}" alt="${member.name}のサンプル画像" loading="lazy" />
          </span>
          <p class="member-card__role">${member.role}</p>
          <p class="member-card__name">${member.name}</p>
        </button>
      </article>
      `,
    )
    .join('');

  memberGrid.innerHTML = cardsMarkup;

  function openModal(member) {
    modalImage.src = member.image;
    modalImage.alt = `${member.name}のサンプル画像`;
    modalName.textContent = member.name;
    modalRole.textContent = member.role;
    modalGreeting.textContent = member.greeting;

    modal.hidden = false;
    document.body.classList.add('is-modal-open');
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('is-modal-open');
  }

  memberGrid.addEventListener('click', function (event) {
    const button = event.target.closest('.member-card__button');
    if (!button) return;

    const card = button.closest('.member-card');
    const memberId = card.getAttribute('data-member-id');
    const member = members.find((item) => item.id === memberId);
    if (!member) return;

    openModal(member);
  });

  modalCloseButton.addEventListener('click', closeModal);

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal();
    }
  });
})();
