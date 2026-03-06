(function () {
  if (document.body.dataset.page !== 'about') return;

  const members = [
    {
      id: 'member-1',
      name: '山田 太郎',
      role: '代表取締役',
      greeting:
        'こんにちは、山田です。\n\n当社は、企業のDX推進と業務効率化を支援するサービスを提供しています。\n特に、現場で使いやすいUI設計と導入後の伴走支援を強みにしています。\n\n現在は、教育・採用・社内ナレッジ共有の領域で、\n中小企業から大手企業まで幅広いお客様にご活用いただいています。\n\n今後も、挑戦する人と組織を後押しできるサービスづくりに取り組んでまいります。',
      image: '../assets/img/about-member-1.svg',
      imageAlt: 'サンプル画像 1',
    },
    {
      id: 'member-2',
      name: '鈴木 花子',
      role: 'プロダクトマネージャー',
      greeting:
        'はじめまして、鈴木です。\n\n私はプロダクトマネージャーとして、\nお客様の課題を事業成果につなげるプロダクト企画を担当しています。\n\nヒアリングから要件整理、運用設計までを一気通貫で進め、\n現場の業務フローにフィットする改善提案を行っています。\n\n機能追加だけでなく、導入後の定着・活用まで見据えた設計を重視し、\n継続的に価値を届けられるサービス運営を目指しています。',
      image: '../assets/img/about-member-2.svg',
      imageAlt: 'サンプル画像 2',
    },
    {
      id: 'member-3',
      name: '佐藤 健',
      role: 'エンジニア',
      greeting:
        '佐藤です。\n\nエンジニアとして、安定性・拡張性・セキュリティを軸に、\n長期運用に耐えるシステム基盤の開発を担当しています。\n\n開発では、保守しやすい設計と自動化を重視し、\n品質とスピードの両立を図りながら継続的に改善を進めています。\n\nお客様の成長に合わせて機能を柔軟に拡張できるよう、\n技術面から事業の成長を支えてまいります。',
      image: '../assets/img/about-member-3.svg',
      imageAlt: 'サンプル画像 3',
    },
  ];

  const grid = document.getElementById('memberGrid');
  const modal = document.getElementById('memberModal');
  const modalImage = document.getElementById('memberModalImage');
  const modalRole = document.getElementById('memberModalRole');
  const modalName = document.getElementById('memberModalName');
  const modalGreeting = document.getElementById('memberModalGreeting');

  if (!grid || !modal || !modalImage || !modalRole || !modalName || !modalGreeting) return;

  function renderMembers() {
    const cards = members
      .map(
        (member) => `
          <button class="member-card" type="button" data-member-id="${member.id}">
            <div class="member-card__image-wrap">
              <img class="member-card__image" src="${member.image}" alt="${member.imageAlt}" loading="lazy" />
            </div>
            <div class="member-card__meta">
              <p class="member-card__role">${member.role}</p>
              <p class="member-card__name">${member.name}</p>
            </div>
          </button>
        `
      )
      .join('');

    grid.innerHTML = cards;
  }

  function openModal(member) {
    modalImage.src = member.image;
    modalImage.alt = `${member.name}の写真`;
    modalRole.textContent = member.role;
    modalName.textContent = member.name;
    modalGreeting.textContent = member.greeting;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', function (event) {
    const button = event.target.closest('[data-member-id]');
    if (!button) return;

    const member = members.find((item) => item.id === button.dataset.memberId);
    if (!member) return;

    openModal(member);
  });

  modal.addEventListener('click', function (event) {
    const closeTarget = event.target.closest('[data-close="modal"]');
    if (!closeTarget) return;
    closeModal();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  renderMembers();
})();
