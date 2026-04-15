(function () {
  const PAGE = document.body.dataset.page;
  const ALL_ROLE = 'すべて';

  const members = [
    {
      id: 'member-1',
      name: '山田 太郎',
      role: '代表取締役',
      greeting:
        'こんにちは、山田です。\n\n当社は、企業のDX推進と業務効率化を支援するサービスを提供しています。\n特に、現場で使いやすいUI設計と導入後の伴走支援を強みにしています。\n\n現在は、教育・採用・社内ナレッジ共有の領域で、\n中小企業から大手企業まで幅広いお客様にご活用いただいています。\n\n今後も、挑戦する人と組織を後押しできるサービスづくりに取り組んでまいります。',
      image: '../assets/img/about-member-1.svg',
      imageAlt: '山田太郎',
    },
    {
      id: 'member-2',
      name: '鈴木 花子',
      role: 'プロダクトマネージャー',
      greeting:
        'はじめまして、鈴木です。\n\n私はプロダクトマネージャーとして、\nお客様の課題を事業成果につなげるプロダクト企画を担当しています。\n\nヒアリングから要件整理、運用設計までを一気通貫で進め、\n現場の業務フローにフィットする改善提案を行っています。\n\n機能追加だけでなく、導入後の定着・活用まで見据えた設計を重視し、\n継続的に価値を届けられるサービス運営を目指しています。',
      image: '../assets/img/about-member-2.svg',
      imageAlt: '鈴木花子',
    },
    {
      id: 'member-3',
      name: '佐藤 健',
      role: 'エンジニア',
      greeting:
        '佐藤です。\n\nエンジニアとして、安定性・拡張性・セキュリティを軸に、\n長期運用に耐えるシステム基盤の開発を担当しています。\n\n開発では、保守しやすい設計と自動化を重視し、\n品質とスピードの両立を図りながら継続的に改善を進めています。\n\nお客様の成長に合わせて機能を柔軟に拡張できるよう、\n技術面から事業の成長を支えてまいります。',
      image: '../assets/img/about-member-3.svg',
      imageAlt: '佐藤健',
    },
  ];

  function escapeHtml(value) {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function renderFilterButton(role, selectedRole) {
    const activeClass = role === selectedRole ? 'is-active' : '';
    const escapedRole = escapeHtml(role);
    return `
      <button type="button" class="member-filter__btn ${activeClass}" data-role="${escapedRole}">
        ${escapedRole}
      </button>
    `;
  }

  function renderMemberCard(member) {
    return `
      <a class="member-card" href="./detail.html?id=${encodeURIComponent(member.id)}" aria-label="${escapeHtml(member.name)}の詳細を見る">
        <div class="member-card__image-wrap">
          <img class="member-card__image" src="${member.image}" alt="${escapeHtml(member.imageAlt)}" loading="lazy" />
        </div>
        <div class="member-card__meta">
          <p class="member-card__role">${escapeHtml(member.role)}</p>
          <p class="member-card__name">${escapeHtml(member.name)}</p>
        </div>
      </a>
    `;
  }

  function getVisibleMembers(selectedRole) {
    return selectedRole === ALL_ROLE
      ? members
      : members.filter((member) => member.role === selectedRole);
  }

  function renderMemberDetail(member) {
    return `
      <a class="member-detail__back" href="./index.html">← MEMBER一覧に戻る</a>
      <div class="member-detail__layout">
        <img class="member-detail__image" src="${member.image}" alt="${escapeHtml(member.imageAlt)}" />
        <div class="member-detail__meta">
          <p class="member-detail__role">${escapeHtml(member.role)}</p>
          <h1 class="member-detail__name">${escapeHtml(member.name)}</h1>
          <p class="member-detail__greeting">${escapeHtml(member.greeting)}</p>
        </div>
      </div>
    `;
  }

  function initMemberListPage() {
    const grid = document.getElementById('memberGrid');
    const filterRoot = document.getElementById('memberFilter');
    if (!grid || !filterRoot) return;

    const roles = [ALL_ROLE, ...new Set(members.map((member) => member.role))];
    let selectedRole = ALL_ROLE;

    function renderFilterButtons() {
      filterRoot.innerHTML = roles.map((role) => renderFilterButton(role, selectedRole)).join('');
    }

    function renderMembers() {
      grid.innerHTML = getVisibleMembers(selectedRole).map(renderMemberCard).join('');
    }

    filterRoot.addEventListener('click', function (event) {
      const button = event.target.closest('[data-role]');
      if (!button) return;
      selectedRole = button.dataset.role;
      renderFilterButtons();
      renderMembers();
    });

    renderFilterButtons();
    renderMembers();
  }

  function initMemberDetailPage() {
    const detailRoot = document.getElementById('memberDetail');
    if (!detailRoot) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const member = members.find((item) => item.id === id) || members[0];
    detailRoot.innerHTML = renderMemberDetail(member);
  }

  if (PAGE === 'member') {
    initMemberListPage();
  }

  if (PAGE === 'member-detail') {
    initMemberDetailPage();
  }
})();
