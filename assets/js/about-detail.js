(function () {
  if (document.body.dataset.page !== 'about-detail') return;

  const leaders = {
    ceo: {
      role: '代表取締役CEO',
      name: '三橋 威吹',
      image: '../assets/img/about-ceo-placeholder.svg',
      imageAlt: 'CEOポートレート',
      lead:
        '技術を知り、現場を知り、社会の痛みを知る。\nテクノロジーとビジネスを繋ぐ課題解決能力。\nその両方を持つからこそ、辿り着いた今について 。',
      blocks: [
        {
          type: 'section-title',
          text: '負の感情を熱狂へ。\n社会の摩擦を、命を燃やすエネルギーに変える。',
        },
        {
          type: 'paragraph',
          text: '私の原動力は、社会に渦巻く「負」の感情への強烈な違和感です。',
        },
        {
          type: 'paragraph',
          text: 'SNSを通じて他人の人生が容易に可視化される現代。かつての私がそうであったように、多くの人が「敷かれたレール」の上で隣の芝生を眺め、自らの本音を見失い、正体のわからない閉塞感に埋もれています。',
        },
        {
          type: 'paragraph',
          text: '私は、感受性が人一倍強く、こうした社会の「負」に対して極めて敏感でした。当初はボランティア活動を行っていましたが、一時的な支援では構造そのものを変えることはできないと痛感しました。社会を根底から動かすには、情熱を経済価値へと変換し、自立して走り続ける「ビジネス」という装置が必要不可欠です。',
        },
        { type: 'accent', text: '「命をモーレツに」' },
        {
          type: 'paragraph',
          text: 'この言葉を掲げ、誰もが自らの生命力を爆発させ、何かに没頭できる社会を創る。その覚悟が、私の創業の原点です。',
        },
        {
          type: 'section-title',
          text: '理論と実践の越境。\n「知」の本質を、最速で社会の豊かさへ繋ぐ。',
        },
        {
          type: 'paragraph',
          text: '技術（テクノロジー）と、実社会での事業（ビジネス）。この二つを20代という若さで同時に動かしている存在は、今の日本において極めて稀です。',
        },
        {
          type: 'paragraph',
          text: '学術的な裏付けがあるからこそ、一時の流行ではない「本物の信頼」を築ける。そして、私自身がビジネスの最前線にいるからこそ、理屈だけで終わらない「現場で本当に役立つ解決策」を形にできる。',
        },
        {
          type: 'paragraph',
          text: '研究室に眠っている高度な知見を、どこよりも速く、実用的なサービスとして社会に解き放つ。 その圧倒的なスピードと実装力こそが、私たちの最大の強みです。',
        },
        {
          type: 'paragraph',
          text: '常識の外側にある未来。\nAIの時代だからこそ、個の「意志」が循環する社会を。',
        },
        {
          type: 'paragraph',
          text: 'AIの急速な発展により、平均的な作業やスキルの価値は失われつつあります。これからの時代に最も価値を持つのは、システムには代替不可能な「自分が何をしたいのか」という強烈な個の意志です。',
        },
        {
          type: 'paragraph',
          text: '私は、良い意味で「普通」から外れた人を増やしたい。\n自分の感性に蓋をせず、やりたいことを追求し、それが同時にお金を稼ぎ、他者の幸福にも繋がっていく。そんな「個の熱狂」が経済を回し、次の挑戦者を生む。この「意志の循環」を社会に実装することが私の使命です。',
        },
        {
          type: 'paragraph',
          text: '30年間停滞を続けるこの国において、時代の最前線へと舵を切り新しい選択肢を提示し続ける。一人ひとりが命をモーレツに輝かせることが、結果として日本全体の生産性を引き上げていくと確信しています。',
        },
        {
          type: 'section-title',
          text: '常識からはみ出せ。そして、自らの正解を刻め。\n「失敗できるラストチャンス」を、最高の価値に変える。',
        },
        {
          type: 'paragraph',
          text: 'なぜ、安定を捨ててまで学生起業という道を選んだのか。\nそれは、誰かに用意された選択肢の中から選ぶのではなく、自ら選んだ道を切り開いていきたかったからです。自分のビジョンを現実にするには、自ら旗を掲げ、全責任を背負って荒野を切り拓く道しかありませんでした。この決断は、自分一人のためではありません。共に歩む社員、そしてその背後にいる家族までが、自分の人生を誇れるようでなければ、組織としての成功はないと考えています。',
        },
        {
          type: 'paragraph',
          text: '「今が、失敗を恐れずに挑戦できるラストチャンスかもしれない」\nその切実な危機感を武器に、私はこの挑戦にすべてを賭けています。私たちは、「自らの選択を、自らの力で正解に導くこと」にこだわり、人生そのものをモーレツに肯定できる集団であり続けます。',
        },
        {
          type: 'profile',
          text: '電気通信大学大学院 博士後期課程在学中。シミュレーション科学・人工知能の研究に従事しながら、エンジニアリングとマーケティングの両領域でフリーランスとして実務経験を積む。テクノロジーとビジネスをつなぐ力を軸に、環境課題や人口減少といった社会課題の解決を目指し、株式会社モーレツを設立。',
        },
      ],
    },
    coo: {
      role: '取締役COO',
      name: '井上 颯大',
      image: '../assets/img/about-coo-placeholder.svg',
      imageAlt: 'COOポートレート',
      lead: 'AI時代の静寂を、情熱で焼き尽くせ。',
      introTitle: '取締役COO  井上颯大 Souta Inoue',
      introBody:
        '1歳で小児がんを克服した原体験を「燃え盛る使命感」に変え、21歳で三橋と共に創業し取締役COOに就任。\n圧倒的な営業力と情熱を組織のエンジンに据え、AIが加速させる現代にこそ「人間臭さ」を最大の社会的価値へ。\n無機質なシステムに血を通わせ、社会の停滞を突き破る、\n爆速で時代のアップデートを牽引する若きリーダーの挑戦とは。',
      blocks: [
        {
          type: 'section-title',
          text: '挑戦を成果へ。\n当事者として「勝てるフィールド」を共に創る。',
        },
        {
          type: 'paragraph',
          text: '「仕事が楽しい」と言い切れる人生は、それだけで価値があります。私はCOOとして、メンバー全員が当事者意識を持ち、自ら立てた筋道で成果を出すプロセスを何より大切にしています。',
        },
        {
          type: 'paragraph',
          text: '私たちが定義する「楽しさ」とは、単なる仲の良さではありません。プロとして売上を上げ、お客様の信頼を勝ち取ること。「楽しく勝ち続ける」ことこそが、組織の認知を高め、個人の人生を豊かにします。勝てないチームに居続けることは、プロとして面白くない。だからこそ、メンバーが主体的に行動し、挑戦が確実に成果へ結びつくよう、「勝てるフィールド」を整え、共に戦い続けることが私の役割です。',
        },
        {
          type: 'section-title',
          text: '「信じて任せる」文化を。\n仲間と壁を乗り越え、最高の勝利を共有する。',
        },
        {
          type: 'paragraph',
          text: '前提として私は、会社とは「誰もが自由に走り回れる庭」であるべきだと考えています。 そこで思いっきり駆け回り、時には転んで土にまみれる。その痛みも、泥臭い挑戦も、一人ひとりの成長という名の花を咲かせ、やがて庭全体の豊かさ（価値）へと繋がっていく。その循環こそが組織の真髄だと思うからです。',
        },
        {
          type: 'paragraph',
          text: 'そして私が組織運営で貫いているのは、「集団成功主義」です。\nかつて個人で活動していた時代に感じたのは、一人で勝つことの限界でした。組織として動くからこそ、誰かが苦境にある時に手を差し伸べ、共に壁を乗り越える「愛」が必要になります。家族よりも長い時間を共にする仲間だからこそ、誰よりも深い時間を過ごし、全員で勝利を味わいたい。そんな「任される喜び」と「主体的に動ける環境」が溢れる組織文化を、私が醸成していきたいです。',
        },
        {
          type: 'section-title',
          text: '人間臭さを、武器に変える。\n「人の意思」から、新たな社会価値を創り出す。',
        },
        {
          type: 'paragraph',
          text: 'テクノロジーの進化、特にAIの台頭によって、単純な作業の価値は相対的に低下しています。その中で私たちが最大化すべきは、AIが決して奪うことのできない「人の想い」や「意思ある方向性」です。',
        },
        {
          type: 'paragraph',
          text: '想いはあるけれど、まだ言語化できていない。そんな原石のような熱量を、具体的な事業やサービスへと昇華させる。その橋渡しこそが、今の社会に求められているイノベーションだと確信しています。人間臭さを排除せず、むしろそれを武器にする。それが、私たちが社会に対して提示できる独自の価値です。',
        },
        {
          type: 'section-title',
          text: '挑戦の連続で、自分を磨け。\n個の熱狂を、日本全体の生産性向上へ。',
        },
        {
          type: 'paragraph',
          text: '私たちは、人生の約3分の1という膨大な時間を「仕事」に費やしています。この時間がただ耐えるだけのものだとしたら、人生そのものを負け越しているのと同じではないでしょうか。仕事という3分の1の時間で勝てない人生は、決して楽しくない。だからこそ、私たちは「仕事で圧倒的に勝つこと」にこだわります。',
        },
        {
          type: 'paragraph',
          text: '「命をモーレツに」というミッションを体現し、社員だけでなくそのご家族までが誇れる組織でありたい。HRという変革の激しい領域において、常にマーケットの動きを先読みし、個々の能力を最大化させる環境を構築します。モーレツな個人が集まり、モーレツな集団として勝つ。その挑戦の連続が、これからの日本全体の生産性向上につながると確信しています。',
        },
        {
          type: 'profile-title',
          text: '井上颯大 / SoutaInoue',
        },
        {
          type: 'profile',
          text: '2004年、新潟県三条市生まれ。幼少期の小児がん（腎明細胞肉腫）の闘病経験から医療の道を志すも、医療系スタートアップとの出会いを機に「仕組みによる社会インパクト」の創出を追求する。18歳から営業代行や事業開発、組織立ち上げを経験し、複数のベンチャー企業で現場と戦略の両面から経営を推進。2025年10月、株式会社モーレツを創業し取締役COOに就任。現在は組織とテクノロジーを軸とした実行型パートナーとして、企業の非連続的な成長を加速させている。開志専門職大学在学中。',
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
      ${
        leader.introTitle
          ? `<section class="about-detail__intro"><h2 class="about-detail__intro-title">${withBreaks(leader.introTitle)}</h2><p class="about-detail__intro-body">${withBreaks(leader.introBody)}</p></section>`
          : ''
      }
      <section class="about-detail__body">${leader.blocks.map(renderBlock).join('')}</section>
    </div>
  `;
})();
