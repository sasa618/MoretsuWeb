(function () {
  if (document.body.dataset.page !== 'about-detail') return;

  const leaders = {
    ceo: {
      role: '代表取締役CEO',
      name: '三橋 威吹',
      image: '../assets/img/about-ceo-placeholder.svg',
      imageAlt: 'CEOポートレート',
      lead:
        '技術を知り、現場を知り、社会の痛みを知る。テクノロジーとビジネスを繋ぐ課題解決能力。',
      blocks: [
        {
          type: 'section-title',
          text: '負の感情を熱狂へ。社会の摩擦を、命を燃やすエネルギーに変える。',
        },
        {
          type: 'paragraph',
          text: '私の原動力は、社会に渦巻く「負」の感情への強烈な違和感です。SNSで他人の人生が可視化される現代で、多くの人が本音を見失い閉塞感に埋もれています。',
        },
        { type: 'accent', text: '「命をモーレツに」' },
        {
          type: 'paragraph',
          text: '誰もが生命力を爆発させられる社会を創るため、情熱を経済価値へ変えるビジネスの力で社会実装に挑みます。',
        },
        {
          type: 'section-title',
          text: '理論と実践の越境。「知」の本質を、最速で社会の豊かさへ繋ぐ。',
        },
        {
          type: 'paragraph',
          text: '学術的な裏付けによる信頼と、現場で結果を出す実装力を融合し、研究知見を実用的なサービスとして社会に解き放ちます。',
        },
        {
          type: 'section-title',
          text: '常識からはみ出せ。そして、自らの正解を刻め。',
        },
        {
          type: 'paragraph',
          text: 'AI時代に最も価値を持つのは、代替不可能な個の意志です。自らの選択を正解に導く挑戦を積み重ね、日本全体の生産性向上へ繋げていきます。',
        },
      ],
    },
    coo: {
      role: '取締役COO',
      name: '井上 颯大',
      image: '../assets/img/about-coo-placeholder.svg',
      imageAlt: 'COOポートレート',
      lead: 'AI時代の静寂を、情熱で焼き尽くせ。',
      blocks: [
        {
          type: 'section-title',
          text: '挑戦を成果へ。当事者として「勝てるフィールド」を共に創る。',
        },
        {
          type: 'paragraph',
          text: '「楽しく勝ち続ける」ことを軸に、メンバー全員が当事者意識を持って成果を生み出せる環境を設計します。',
        },
        {
          type: 'section-title',
          text: '「信じて任せる」文化を。仲間と壁を乗り越え、最高の勝利を共有する。',
        },
        {
          type: 'paragraph',
          text: '会社を「自由に走り回れる庭」と捉え、挑戦と成長が循環する組織文化を育てます。個人の限界を越え、集団成功主義で価値を最大化します。',
        },
        {
          type: 'section-title',
          text: '人間臭さを、武器に変える。',
        },
        {
          type: 'paragraph',
          text: 'AIが進化するほど価値を持つのは「人の想い」と「意思ある方向性」です。言語化前の熱量を事業へ昇華し、社会に新しい価値を生み出します。',
        },
      ],
    },
  };

  function escapeHtml(value) {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function withBreaks(value) {
    return escapeHtml(value).replaceAll('\n', '<br />');
  }

  function renderBlock(block) {
    if (block.type === 'section-title') {
      return `<h2 class="about-detail__section-title">${withBreaks(block.text)}</h2>`;
    }
    if (block.type === 'accent') {
      return `<p class="about-detail__accent">${withBreaks(block.text)}</p>`;
    }
    if (block.type === 'profile-title') {
      return `<p class="about-detail__profile-title">${withBreaks(block.text)}</p>`;
    }
    if (block.type === 'profile') {
      return `<p class="about-detail__profile">${withBreaks(block.text)}</p>`;
    }
    return `<p class="about-detail__text">${withBreaks(block.text)}</p>`;
  }

  const root = document.getElementById('aboutDetail');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const key = params.get('leader') === 'coo' ? 'coo' : 'ceo';
  const leader = leaders[key];

  root.innerHTML = `
    <div class="about-detail__inner">
      <a class="about-detail__back" href="./index.html">← Aboutトップへ戻る</a>
      <div class="about-detail__hero">
        <img class="about-detail__image" src="${leader.image}" alt="${escapeHtml(leader.imageAlt)}" />
        <div class="about-detail__head">
          <p class="about-eyebrow">Leadership Message</p>
          <p class="about-detail__role">${escapeHtml(leader.role)}</p>
          <h1 class="about-detail__name">${escapeHtml(leader.name)}</h1>
          <p class="about-detail__lead">${withBreaks(leader.lead)}</p>
        </div>
      </div>
      <section class="about-detail__body">${leader.blocks.map(renderBlock).join('')}</section>
    </div>
  `;
})();
