(function () {
  if (document.body.dataset.page !== 'about') return;

  const leaders = [
    {
      id: 'ceo',
      eyebrow: 'CEO Message',
      heading: 'Ignite life<br>with intention',
      title: '代表取締役CEO 三橋智大',
      summary:
        '私の原動力は、社会に渦巻く「負」の感情への強烈な違和感にあります。SNSを通じて他人の人生が容易に可視化される現代、多くの人が「敷かれたレール」の上で隣の芝生を眺め、自らの本音を見失い、正体のわからない閉塞感に埋もれています。人一倍感受性が強く、この「負」に敏感だった私は、かつてボランティアを通じて救いを模索しましたが、一時的な支援では社会の構造そのものを変えられないと痛感しました。社会を根底から動かし、誰もが自らの生命力を爆発させられる世界を創るには、情熱を経済価値へと変換する「ビジネス」という装置が必要不可欠だったのです。',
      buttonLabel: 'CEOメッセージを見る',
      buttonHref: './detail.html?leader=ceo',
      image: '../assets/img/about-ceo-placeholder.svg',
      imageAlt: 'CEOポートレート',
    },
    {
      id: 'coo',
      eyebrow: 'COO Message',
      heading: 'Build a<br>winning field',
      title: '取締役COO 井上 颯大',
      summary:
        '「仕事が楽しい」と言い切れる人生には、それだけで価値がある。人生の3分の1を占める仕事において、自ら筋道を立て、プロとして「勝利」を掴み取る。そのプロセスこそが人生を豊かにすると確信しています。勝てないチームは面白くない。だからこそ私は、メンバーが主体的に動き、その挑戦が確実に成果へと結びつく「勝てる庭」を整え、共に戦い続ける存在でありたい。私が会社を「庭」と呼ぶのは、そこでの転倒も泥臭い挑戦も、すべてが成長という名の花を咲かせ、組織の価値に繋がると信じているからです。',
      buttonLabel: 'COOメッセージを見る',
      buttonHref: './detail.html?leader=coo',
      image: '../assets/img/about-coo-placeholder.svg',
      imageAlt: 'COOポートレート',
    },
  ];

  function renderLeaderCard(leader) {
    return `
      <article class="about-card">
        <img class="about-card__photo" src="${leader.image}" alt="${leader.imageAlt}" loading="lazy" />
        <div class="about-card__body">
          <p class="about-eyebrow">${leader.eyebrow}</p>
          <h3 class="about-card__heading">${leader.heading}</h3>
          <p class="about-card__jp-title">${leader.title}</p>
          <p class="about-card__copy">${leader.summary}</p>
          <a class="about-card__button" href="${leader.buttonHref}">${leader.buttonLabel}</a>
        </div>
      </article>
    `;
  }

  const cards = document.getElementById('aboutCards');
  if (!cards) return;

  cards.innerHTML = leaders.map(renderLeaderCard).join('');
})();
