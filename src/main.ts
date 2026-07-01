import "./styles.css";

type Locale = "zh-CN" | "en" | "ja" | "ms-MY" | "zh-SG";

type ProjectCopy = {
  kicker: string;
  description: string;
};

type Project = {
  name: string;
  language: string;
  stars: number;
  updated: string;
  url: string;
  image: string;
  accent: string;
  scale: "large" | "medium" | "small";
  copy: Record<Locale, ProjectCopy>;
};

type FocusCard = {
  code: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  body: Record<Locale, string>;
  tags: string[];
  accent: string;
};

type Capability = {
  label: Record<Locale, string>;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
  points: Record<Locale, string[]>;
};

type UITranslation = {
  pageLabel: string;
  githubAria: string;
  imageAlt: (name: string) => string;
  heroTitle: string;
  heroLede: string;
  viewRepos: string;
  exploreCards: string;
  featuredAria: string;
  sideNote: string;
  focusEyebrow: string;
  focusTitle: string;
  focusLead: string;
  capabilityEyebrow: string;
  capabilityTitle: string;
  capabilityLead: string;
  wallEyebrow: string;
  wallTitle: string;
  updated: string;
  star: string;
  stars: string;
  openGitHub: string;
  languageLabel: string;
  bgmLabel: string;
  bgmOn: string;
  bgmOff: string;
};

const localeNames: Record<Locale, string> = {
  "zh-CN": "简",
  en: "EN",
  ja: "日",
  "ms-MY": "BM",
  "zh-SG": "新",
};

const translations: Record<Locale, UITranslation> = {
  "zh-CN": {
    pageLabel: "neko233 项目作品集",
    githubAria: "在 GitHub 打开 neko233-com",
    imageAlt: (name) => `${name} 项目预览`,
    heroTitle: "NEKO233 作品卡片",
    heroLede: "展示代理网关、可靠 UDP、消息序列化、Unity 运行时工具，以及围绕游戏基础设施构建的项目。",
    viewRepos: "查看仓库",
    exploreCards: "浏览卡片",
    featuredAria: "精选项目",
    sideNote: "紧凑、快速、偏引擎侧的工具",
    focusEyebrow: "主攻方向",
    focusTitle: "游戏技术与 Agent 系统",
    focusLead: "我主要投入在实时游戏基础设施、跨端引擎工具，以及能参与研发和运维流程的智能 Agent。",
    capabilityEyebrow: "能力矩阵",
    capabilityTitle: "从协议到底层工具，再到自动化执行",
    capabilityLead: "这些方向不是独立摆件，而是围绕游戏项目研发闭环组织起来：通信、运行时、工具链、部署和 Agent 协作。",
    wallEyebrow: "精选技术栈",
    wallTitle: "neko233-com 顶级项目",
    updated: "更新于",
    star: "star",
    stars: "stars",
    openGitHub: "打开 GitHub",
    languageLabel: "语言",
    bgmLabel: "背景音乐",
    bgmOn: "关闭 BGM",
    bgmOff: "开启 BGM",
  },
  en: {
    pageLabel: "neko233 project portfolio",
    githubAria: "Open neko233-com on GitHub",
    imageAlt: (name) => `${name} project preview`,
    heroTitle: "NEKO233 PROJECT CARDS",
    heroLede: "A portfolio wall for proxy gateways, reliable UDP, message serialization, Unity runtime tooling and the systems around them.",
    viewRepos: "View repositories",
    exploreCards: "Explore cards",
    featuredAria: "Featured projects",
    sideNote: "compact, fast, engine-side tools",
    focusEyebrow: "core focus",
    focusTitle: "Game tech and agent systems",
    focusLead: "My main lane is real-time game infrastructure, cross-platform engine tooling, and agents that can participate in development and operations workflows.",
    capabilityEyebrow: "capability map",
    capabilityTitle: "From protocols to low-level tools to automated execution",
    capabilityLead: "These are not isolated pieces. They form an engineering loop for game projects: networking, runtime, tooling, deployment and agent collaboration.",
    wallEyebrow: "selected stack",
    wallTitle: "Top projects from neko233-com",
    updated: "Updated",
    star: "star",
    stars: "stars",
    openGitHub: "Open GitHub",
    languageLabel: "Language",
    bgmLabel: "Background music",
    bgmOn: "Turn BGM off",
    bgmOff: "Turn BGM on",
  },
  ja: {
    pageLabel: "neko233 プロジェクトポートフォリオ",
    githubAria: "GitHub で neko233-com を開く",
    imageAlt: (name) => `${name} プロジェクトプレビュー`,
    heroTitle: "NEKO233 作品カード",
    heroLede: "プロキシゲートウェイ、信頼性の高い UDP、メッセージシリアライズ、Unity ランタイムツールと周辺システムをまとめたポートフォリオです。",
    viewRepos: "リポジトリを見る",
    exploreCards: "カードを見る",
    featuredAria: "注目プロジェクト",
    sideNote: "コンパクトで高速なエンジン寄りツール",
    focusEyebrow: "主な専門領域",
    focusTitle: "ゲーム技術と Agent システム",
    focusLead: "リアルタイムゲーム基盤、クロスプラットフォームのエンジンツール、開発と運用に参加できる Agent を主軸にしています。",
    capabilityEyebrow: "能力マップ",
    capabilityTitle: "プロトコルから低レイヤーツール、自動実行まで",
    capabilityLead: "それぞれを単体ではなく、ゲーム開発のための通信、ランタイム、ツール、デプロイ、Agent 協調の流れとして組み立てています。",
    wallEyebrow: "選定スタック",
    wallTitle: "neko233-com の主要プロジェクト",
    updated: "更新",
    star: "star",
    stars: "stars",
    openGitHub: "GitHub を開く",
    languageLabel: "言語",
    bgmLabel: "BGM",
    bgmOn: "BGM をオフ",
    bgmOff: "BGM をオン",
  },
  "ms-MY": {
    pageLabel: "portfolio projek neko233",
    githubAria: "Buka neko233-com di GitHub",
    imageAlt: (name) => `Pratonton projek ${name}`,
    heroTitle: "KAD PROJEK NEKO233",
    heroLede: "Dinding portfolio untuk gerbang proksi, UDP boleh dipercayai, serialisasi mesej, alat runtime Unity dan sistem di sekelilingnya.",
    viewRepos: "Lihat repositori",
    exploreCards: "Teroka kad",
    featuredAria: "Projek pilihan",
    sideNote: "alat sisi enjin yang padat dan pantas",
    focusEyebrow: "fokus utama",
    focusTitle: "Teknologi permainan dan sistem Agent",
    focusLead: "Fokus utama saya ialah infrastruktur permainan masa nyata, alat enjin rentas platform, dan agent yang membantu aliran pembangunan serta operasi.",
    capabilityEyebrow: "peta keupayaan",
    capabilityTitle: "Daripada protokol ke alat aras rendah dan pelaksanaan automatik",
    capabilityLead: "Bidang ini disusun sebagai gelung kejuruteraan untuk projek permainan: rangkaian, runtime, alat, deploy dan kolaborasi agent.",
    wallEyebrow: "susunan pilihan",
    wallTitle: "Projek utama neko233-com",
    updated: "Dikemas kini",
    star: "star",
    stars: "stars",
    openGitHub: "Buka GitHub",
    languageLabel: "Bahasa",
    bgmLabel: "Muzik latar",
    bgmOn: "Matikan BGM",
    bgmOff: "Hidupkan BGM",
  },
  "zh-SG": {
    pageLabel: "neko233 项目作品集",
    githubAria: "在 GitHub 打开 neko233-com",
    imageAlt: (name) => `${name} 项目预览`,
    heroTitle: "NEKO233 作品卡片",
    heroLede: "面向代理网关、可靠 UDP、消息序列化、Unity 运行时工具，以及游戏基础设施生态的项目展示。",
    viewRepos: "查看仓库",
    exploreCards: "浏览卡片",
    featuredAria: "精选项目",
    sideNote: "紧凑、快速、偏引擎侧的工具",
    focusEyebrow: "主攻方向",
    focusTitle: "游戏技术与 Agent 系统",
    focusLead: "我主要投入实时游戏基础设施、跨端引擎工具，以及能参与研发和运维流程的智能 Agent。",
    capabilityEyebrow: "能力矩阵",
    capabilityTitle: "从协议到底层工具，再到自动化执行",
    capabilityLead: "这些方向围绕游戏项目研发闭环组织：通信、运行时、工具链、部署和 Agent 协作。",
    wallEyebrow: "精选技术栈",
    wallTitle: "neko233-com 重点项目",
    updated: "更新于",
    star: "star",
    stars: "stars",
    openGitHub: "打开 GitHub",
    languageLabel: "语言",
    bgmLabel: "背景音乐",
    bgmOn: "关闭 BGM",
    bgmOff: "开启 BGM",
  },
};

const projects: Project[] = [
  {
    name: "proxysss",
    language: "Rust",
    stars: 1,
    updated: "2026-06-30",
    url: "https://github.com/neko233-com/proxysss",
    image: "/previews/proxysss.png",
    accent: "#ff3fb7",
    scale: "large",
    copy: {
      "zh-CN": {
        kicker: "TCP / UDP / HTTP 代理网关",
        description: "Rust 代理网关，可用 TypeScript 与 JavaScript 编写业务规则。",
      },
      en: {
        kicker: "TCP / UDP / HTTP proxy gateway",
        description: "Rust proxy gateway with programmable TypeScript and JavaScript business rules.",
      },
      ja: {
        kicker: "TCP / UDP / HTTP プロキシゲートウェイ",
        description: "TypeScript と JavaScript で業務ルールを書ける Rust プロキシゲートウェイ。",
      },
      "ms-MY": {
        kicker: "Gerbang proksi TCP / UDP / HTTP",
        description: "Gerbang proksi Rust dengan aturan perniagaan TypeScript dan JavaScript yang boleh diprogram.",
      },
      "zh-SG": {
        kicker: "TCP / UDP / HTTP 代理网关",
        description: "Rust 代理网关，可通过 TypeScript 与 JavaScript 自定义业务规则。",
      },
    },
  },
  {
    name: "QCP",
    language: "Protocol",
    stars: 0,
    updated: "2026-06-28",
    url: "https://github.com/neko233-com/QCP",
    image: "/previews/qcp.png",
    accent: "#7c5cff",
    scale: "medium",
    copy: {
      "zh-CN": {
        kicker: "分布式游戏可靠 UDP",
        description: "面向 2026 分布式游戏的超高性能 UDP 协议。",
      },
      en: {
        kicker: "Reliable UDP for distributed games",
        description: "Ultra-high-performance UDP protocol for 2026 distributed gaming.",
      },
      ja: {
        kicker: "分散型ゲーム向け信頼性 UDP",
        description: "2026 年の分散型ゲームに向けた超高性能 UDP プロトコル。",
      },
      "ms-MY": {
        kicker: "UDP boleh dipercayai untuk permainan teragih",
        description: "Protokol UDP berprestasi sangat tinggi untuk permainan teragih 2026.",
      },
      "zh-SG": {
        kicker: "分布式游戏可靠 UDP",
        description: "面向 2026 分布式游戏场景的高性能 UDP 协议。",
      },
    },
  },
  {
    name: "bytemsg233",
    language: "Go",
    stars: 2,
    updated: "2026-06-30",
    url: "https://github.com/neko233-com/bytemsg233",
    image: "/previews/bytemsg233.png",
    accent: "#70f6ff",
    scale: "large",
    copy: {
      "zh-CN": {
        kicker: "游戏消息序列化",
        description: "游戏数据字节消息格式，支持 map<K,V>、List<T> 与 struct。",
      },
      en: {
        kicker: "Game message serialization",
        description: "Byte message format for game data, including map<K,V>, List<T> and struct support.",
      },
      ja: {
        kicker: "ゲームメッセージシリアライズ",
        description: "map<K,V>、List<T>、struct を扱えるゲームデータ向けバイトメッセージ形式。",
      },
      "ms-MY": {
        kicker: "Serialisasi mesej permainan",
        description: "Format mesej bait untuk data permainan, termasuk sokongan map<K,V>, List<T> dan struct.",
      },
      "zh-SG": {
        kicker: "游戏消息序列化",
        description: "面向游戏数据的字节消息格式，支持 map<K,V>、List<T> 与 struct。",
      },
    },
  },
  {
    name: "hotc233-unity",
    language: "C++",
    stars: 0,
    updated: "2026-07-01",
    url: "https://github.com/neko233-com/hotc233-unity",
    image: "/previews/hotc233-unity.png",
    accent: "#ffe168",
    scale: "small",
    copy: {
      "zh-CN": {
        kicker: "Unity 热更新运行时",
        description: "面向 Unity 的 C# 热更新编译与运行时。",
      },
      en: {
        kicker: "Unity hot update runtime",
        description: "C# hot update compile and runtime for Unity.",
      },
      ja: {
        kicker: "Unity ホットアップデートランタイム",
        description: "Unity 向け C# ホットアップデートのコンパイルとランタイム。",
      },
      "ms-MY": {
        kicker: "Runtime kemas kini panas Unity",
        description: "Kompilasi dan runtime kemas kini panas C# untuk Unity.",
      },
      "zh-SG": {
        kicker: "Unity 热更新运行时",
        description: "用于 Unity 的 C# 热更新编译与运行时。",
      },
    },
  },
  {
    name: "unity233-websocket",
    language: "C#",
    stars: 2,
    updated: "2026-06-29",
    url: "https://github.com/neko233-com/unity233-websocket",
    image: "/previews/unity233-websocket.png",
    accent: "#55ff9b",
    scale: "medium",
    copy: {
      "zh-CN": {
        kicker: "低延迟 Unity 传输",
        description: "面向 Unity WebGL 与原生平台的近零 GC WebSocket。",
      },
      en: {
        kicker: "Low-latency Unity transport",
        description: "Near-zero-GC WebSocket for Unity WebGL and native platforms.",
      },
      ja: {
        kicker: "低遅延 Unity トランスポート",
        description: "Unity WebGL とネイティブプラットフォーム向けのほぼゼロ GC WebSocket。",
      },
      "ms-MY": {
        kicker: "Pengangkutan Unity latensi rendah",
        description: "WebSocket hampir sifar GC untuk Unity WebGL dan platform native.",
      },
      "zh-SG": {
        kicker: "低延迟 Unity 传输",
        description: "面向 Unity WebGL 与原生平台的近零 GC WebSocket。",
      },
    },
  },
  {
    name: "cnext",
    language: "Go",
    stars: 0,
    updated: "2026-06-28",
    url: "https://github.com/neko233-com/cnext",
    image: "/previews/cnext.png",
    accent: "#ff815c",
    scale: "small",
    copy: {
      "zh-CN": {
        kicker: "下一代 C/C++ 编译器",
        description: "Go 编写的编译器工具链，内置包管理与多版本支持。",
      },
      en: {
        kicker: "Next-gen C/C++ compiler",
        description: "Go-based compiler toolchain with package management and multi-version support.",
      },
      ja: {
        kicker: "次世代 C/C++ コンパイラ",
        description: "パッケージ管理と複数バージョン対応を備えた Go 製コンパイラツールチェーン。",
      },
      "ms-MY": {
        kicker: "Pengkompil C/C++ generasi baharu",
        description: "Rantaian alat pengkompil berasaskan Go dengan pengurusan pakej dan sokongan pelbagai versi.",
      },
      "zh-SG": {
        kicker: "下一代 C/C++ 编译器",
        description: "基于 Go 的编译器工具链，支持包管理与多版本。",
      },
    },
  },
];

const focusCards: FocusCard[] = [
  {
    code: "GAME-CORE",
    title: {
      "zh-CN": "游戏技术",
      en: "Game Tech",
      ja: "ゲーム技術",
      "ms-MY": "Teknologi Permainan",
      "zh-SG": "游戏技术",
    },
    subtitle: {
      "zh-CN": "实时网络、同步、热更新、跨端运行时",
      en: "Realtime networking, sync, hot updates, cross-platform runtime",
      ja: "リアルタイム通信、同期、ホットアップデート、クロスプラットフォーム実行環境",
      "ms-MY": "Rangkaian masa nyata, penyegerakan, kemas kini panas, runtime rentas platform",
      "zh-SG": "实时网络、同步、热更新、跨端运行时",
    },
    body: {
      "zh-CN": "偏底层和工程落地：协议、序列化、Unity/UE 传输层、WebGL 与小游戏环境，把工具做到能扛项目。",
      en: "Low-level, production-minded work: protocols, serialization, Unity/UE transports, WebGL and mini-game runtimes built to carry real projects.",
      ja: "低レイヤーかつ実運用寄り。プロトコル、シリアライズ、Unity/UE トランスポート、WebGL とミニゲーム実行環境を実案件で使える形まで作ります。",
      "ms-MY": "Kerja aras rendah yang sedia produksi: protokol, serialisasi, pengangkutan Unity/UE, WebGL dan runtime mini-game yang mampu menampung projek sebenar.",
      "zh-SG": "偏底层和工程落地：协议、序列化、Unity/UE 传输层、WebGL 与小游戏环境，把工具做到能扛项目。",
    },
    tags: ["QCP", "Unity", "WebGL", "Sync"],
    accent: "#ff3fb7",
  },
  {
    code: "AGENT-OPS",
    title: {
      "zh-CN": "Agent 方向",
      en: "Agent Systems",
      ja: "Agent システム",
      "ms-MY": "Sistem Agent",
      "zh-SG": "Agent 方向",
    },
    subtitle: {
      "zh-CN": "代码执行、工具编排、自动化研发工作流",
      en: "Code execution, tool orchestration, automated engineering workflows",
      ja: "コード実行、ツール編成、自動化された開発ワークフロー",
      "ms-MY": "Pelaksanaan kod, orkestrasi alat, aliran kerja kejuruteraan automatik",
      "zh-SG": "代码执行、工具编排、自动化研发工作流",
    },
    body: {
      "zh-CN": "关注能真正做事的 Agent：连接仓库、CI、浏览器、部署平台和数据上下文，让它从对话进入执行。",
      en: "I care about agents that actually do work: connected to repos, CI, browsers, deploy platforms and data context, moving from chat into execution.",
      ja: "実際に作業できる Agent に注力。リポジトリ、CI、ブラウザ、デプロイ基盤、データ文脈につなぎ、会話から実行へ進めます。",
      "ms-MY": "Saya fokus pada agent yang benar-benar bekerja: disambungkan ke repo, CI, pelayar, platform deploy dan konteks data, dari sembang ke pelaksanaan.",
      "zh-SG": "关注能真正做事的 Agent：连接仓库、CI、浏览器、部署平台和数据上下文，让它从对话进入执行。",
    },
    tags: ["Codex", "Tools", "CI/CD", "Cloudflare"],
    accent: "#70f6ff",
  },
];

const capabilities: Capability[] = [
  {
    label: {
      "zh-CN": "01 / 网络",
      en: "01 / Network",
      ja: "01 / ネットワーク",
      "ms-MY": "01 / Rangkaian",
      "zh-SG": "01 / 网络",
    },
    title: {
      "zh-CN": "实时协议与同步",
      en: "Realtime protocol and sync",
      ja: "リアルタイムプロトコルと同期",
      "ms-MY": "Protokol masa nyata dan penyegerakan",
      "zh-SG": "实时协议与同步",
    },
    body: {
      "zh-CN": "围绕 QCP、同步服务、WebSocket 和游戏传输层，目标是低延迟、低带宽、可移植。",
      en: "Built around QCP, sync servers, WebSocket and game transport layers, targeting low latency, low bandwidth and portability.",
      ja: "QCP、同期サーバー、WebSocket、ゲーム向けトランスポート層を中心に、低遅延、低帯域、移植性を重視します。",
      "ms-MY": "Berpaksikan QCP, pelayan sync, WebSocket dan lapisan pengangkutan permainan dengan sasaran latensi rendah, jalur lebar rendah dan mudah alih.",
      "zh-SG": "围绕 QCP、同步服务、WebSocket 和游戏传输层，目标是低延迟、低带宽、可移植。",
    },
    points: {
      "zh-CN": ["可靠 UDP", "状态同步", "跨端传输"],
      en: ["Reliable UDP", "State sync", "Cross-platform transport"],
      ja: ["信頼性 UDP", "状態同期", "クロスプラットフォーム通信"],
      "ms-MY": ["UDP boleh dipercayai", "Sync keadaan", "Pengangkutan rentas platform"],
      "zh-SG": ["可靠 UDP", "状态同步", "跨端传输"],
    },
  },
  {
    label: {
      "zh-CN": "02 / 引擎",
      en: "02 / Engine",
      ja: "02 / エンジン",
      "ms-MY": "02 / Enjin",
      "zh-SG": "02 / 引擎",
    },
    title: {
      "zh-CN": "运行时与热更新",
      en: "Runtime and hot updates",
      ja: "ランタイムとホットアップデート",
      "ms-MY": "Runtime dan kemas kini panas",
      "zh-SG": "运行时与热更新",
    },
    body: {
      "zh-CN": "关注 Unity、WebGL、小游戏和 IL2CPP 场景，把底层能力包装成项目可直接使用的工具。",
      en: "Focused on Unity, WebGL, mini-game and IL2CPP scenarios, wrapping low-level capabilities into tools that projects can directly use.",
      ja: "Unity、WebGL、ミニゲーム、IL2CPP を対象に、低レイヤー機能をプロジェクトで直接使えるツールへまとめます。",
      "ms-MY": "Memfokuskan Unity, WebGL, mini-game dan IL2CPP, membungkus keupayaan aras rendah menjadi alat yang terus boleh digunakan projek.",
      "zh-SG": "关注 Unity、WebGL、小游戏和 IL2CPP 场景，把底层能力包装成项目可直接使用的工具。",
    },
    points: {
      "zh-CN": ["热更新", "零 GC 传输", "运行时性能"],
      en: ["Hot updates", "Zero-GC transport", "Runtime performance"],
      ja: ["ホットアップデート", "ゼロ GC 通信", "ランタイム性能"],
      "ms-MY": ["Kemas kini panas", "Pengangkutan sifar GC", "Prestasi runtime"],
      "zh-SG": ["热更新", "零 GC 传输", "运行时性能"],
    },
  },
  {
    label: {
      "zh-CN": "03 / Agent",
      en: "03 / Agent",
      ja: "03 / Agent",
      "ms-MY": "03 / Agent",
      "zh-SG": "03 / Agent",
    },
    title: {
      "zh-CN": "工具编排与代码执行",
      en: "Tool orchestration and code execution",
      ja: "ツール編成とコード実行",
      "ms-MY": "Orkestrasi alat dan pelaksanaan kod",
      "zh-SG": "工具编排与代码执行",
    },
    body: {
      "zh-CN": "让 Agent 能读仓库、改代码、跑测试、看浏览器、发部署，而不是只停留在聊天回答。",
      en: "Make agents read repos, edit code, run tests, inspect browsers and deploy, instead of stopping at chat replies.",
      ja: "Agent がリポジトリを読み、コードを変更し、テストを実行し、ブラウザを確認し、デプロイできる状態を目指します。",
      "ms-MY": "Membolehkan agent membaca repo, mengubah kod, menjalankan ujian, memeriksa pelayar dan deploy, bukan sekadar memberi jawapan chat.",
      "zh-SG": "让 Agent 能读仓库、改代码、跑测试、看浏览器、发部署，而不是只停留在聊天回答。",
    },
    points: {
      "zh-CN": ["仓库上下文", "浏览器验证", "自动部署"],
      en: ["Repo context", "Browser verification", "Automated deploy"],
      ja: ["リポジトリ文脈", "ブラウザ検証", "自動デプロイ"],
      "ms-MY": ["Konteks repo", "Pengesahan pelayar", "Deploy automatik"],
      "zh-SG": ["仓库上下文", "浏览器验证", "自动部署"],
    },
  },
  {
    label: {
      "zh-CN": "04 / 交付",
      en: "04 / Delivery",
      ja: "04 / デリバリー",
      "ms-MY": "04 / Penghantaran",
      "zh-SG": "04 / 交付",
    },
    title: {
      "zh-CN": "Cloudflare 与边缘发布",
      en: "Cloudflare and edge delivery",
      ja: "Cloudflare とエッジ配信",
      "ms-MY": "Cloudflare dan penghantaran edge",
      "zh-SG": "Cloudflare 与边缘发布",
    },
    body: {
      "zh-CN": "用 Workers、Pages、边缘路由和自动化部署，把项目从本地构建推进到可访问的生产入口。",
      en: "Use Workers, Pages, edge routes and automated deploys to move projects from local builds to reachable production entry points.",
      ja: "Workers、Pages、エッジルーティング、自動デプロイで、ローカルビルドから本番入口までつなげます。",
      "ms-MY": "Menggunakan Workers, Pages, route edge dan deploy automatik untuk membawa projek daripada binaan tempatan ke pintu masuk produksi.",
      "zh-SG": "用 Workers、Pages、边缘路由和自动化部署，把项目从本地构建推进到可访问的生产入口。",
    },
    points: {
      "zh-CN": ["Workers 静态资源", "域名路由", "CI/CD"],
      en: ["Workers assets", "Domain routes", "CI/CD"],
      ja: ["Workers 静的アセット", "ドメインルート", "CI/CD"],
      "ms-MY": ["Aset Workers", "Route domain", "CI/CD"],
      "zh-SG": ["Workers 静态资源", "域名路由", "CI/CD"],
    },
  },
];

const detectLocale = (): Locale => {
  const saved = localStorage.getItem("neko233-locale") as Locale | null;
  if (saved && saved in translations) return saved;

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const rawLanguage of languages) {
    const language = rawLanguage.toLowerCase();
    if (language === "zh-sg" || language === "en-sg") return "zh-SG";
    if (language.startsWith("zh")) return "zh-CN";
    if (language.startsWith("ja")) return "ja";
    if (language.startsWith("ms")) return "ms-MY";
    if (language.startsWith("en")) return "en";
  }

  return "en";
};

let currentLocale: Locale = detectLocale();
let bgmEnabled = localStorage.getItem("neko233-bgm") === "on";
let audioContext: AudioContext | null = null;
let masterGain: GainNode | null = null;
let filterNode: BiquadFilterNode | null = null;
let bgmVoices: OscillatorNode[] = [];
let chordTimer: number | null = null;
let chordIndex = 0;

const chordProgression = [
  [146.83, 220, 277.18],
  [164.81, 246.94, 329.63],
  [130.81, 196, 261.63],
  [174.61, 261.63, 349.23],
];

function setBgmButtonState() {
  const t = translations[currentLocale];
  const button = document.querySelector<HTMLButtonElement>(".bgm-button");
  if (!button) return;
  button.classList.toggle("active", bgmEnabled);
  button.setAttribute("aria-pressed", String(bgmEnabled));
  button.setAttribute("aria-label", bgmEnabled ? t.bgmOn : t.bgmOff);
  button.textContent = bgmEnabled ? "BGM ON" : "BGM";
}

function setChord(frequencies: number[]) {
  if (!audioContext) return;
  bgmVoices.forEach((voice, index) => {
    voice.frequency.setTargetAtTime(frequencies[index], audioContext!.currentTime, 0.8);
  });
}

async function startBgm() {
  if (audioContext) {
    await audioContext.resume();
    if (masterGain) masterGain.gain.setTargetAtTime(0.16, audioContext.currentTime, 0.35);
    return;
  }

  audioContext = new AudioContext();
  masterGain = audioContext.createGain();
  filterNode = audioContext.createBiquadFilter();
  filterNode.type = "lowpass";
  filterNode.frequency.value = 1100;
  filterNode.Q.value = 0.8;
  masterGain.gain.value = 0.0001;
  filterNode.connect(masterGain);
  masterGain.connect(audioContext.destination);

  bgmVoices = chordProgression[0].map((frequency, index) => {
    const oscillator = audioContext!.createOscillator();
    const voiceGain = audioContext!.createGain();
    oscillator.type = index === 1 ? "triangle" : "sine";
    oscillator.frequency.value = frequency;
    oscillator.detune.value = index === 0 ? -4 : index === 2 ? 5 : 0;
    voiceGain.gain.value = index === 1 ? 0.16 : 0.1;
    oscillator.connect(voiceGain);
    voiceGain.connect(filterNode!);
    oscillator.start();
    return oscillator;
  });

  masterGain.gain.setTargetAtTime(0.16, audioContext.currentTime, 0.5);
  chordTimer = window.setInterval(() => {
    chordIndex = (chordIndex + 1) % chordProgression.length;
    setChord(chordProgression[chordIndex]);
  }, 5200);
}

function stopBgm() {
  if (!audioContext || !masterGain) return;
  masterGain.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.25);
  window.setTimeout(() => {
    void audioContext?.suspend();
  }, 450);
}

async function toggleBgm() {
  bgmEnabled = !bgmEnabled;
  localStorage.setItem("neko233-bgm", bgmEnabled ? "on" : "off");
  if (bgmEnabled) {
    await startBgm();
  } else {
    stopBgm();
  }
  setBgmButtonState();
}

function statLabel(project: Project, locale: Locale) {
  const t = translations[locale];
  const starText = project.stars === 1 ? t.star : t.stars;
  return `${project.stars} ${starText} · ${project.language}`;
}

function card(project: Project, index: number, locale: Locale, variant = "") {
  const t = translations[locale];
  const copy = project.copy[locale];

  return `
    <a class="project-card ${project.scale} ${variant}" href="${project.url}" target="_blank" rel="noreferrer" style="--accent: ${project.accent}; --delay: ${index * 90}ms">
      <span class="card-rotor">
        <span class="card-face card-front">
          <span class="card-shine"></span>
          <span class="card-glow"></span>
          <img src="${project.image}" alt="${t.imageAlt(project.name)}" loading="${index > 1 ? "lazy" : "eager"}" />
          <span class="card-body">
            <span class="card-kicker">${copy.kicker}</span>
            <span class="card-title notranslate" translate="no">${project.name}</span>
            <span class="card-copy">${copy.description}</span>
            <span class="card-meta">
              <span>${statLabel(project, locale)}</span>
              <span>${t.updated} ${project.updated}</span>
            </span>
          </span>
        </span>
        <span class="card-face card-back">
          <span class="back-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="back-title notranslate" translate="no">${project.name}</span>
          <span class="back-copy">${copy.description}</span>
          <span class="back-stack">
            <span>${project.language}</span>
            <span>${project.stars} ${project.stars === 1 ? t.star : t.stars}</span>
            <span>${project.updated}</span>
          </span>
          <span class="back-action">${t.openGitHub}</span>
        </span>
      </span>
    </a>
  `;
}

function localeSwitcher(locale: Locale) {
  const t = translations[locale];
  return `
    <div class="language-switcher" aria-label="${t.languageLabel}">
      ${Object.entries(localeNames)
        .map(([localeKey, label]) => {
          const isActive = localeKey === locale;
          return `<button type="button" class="locale-button${isActive ? " active" : ""}" data-locale="${localeKey}" aria-pressed="${isActive}">${label}</button>`;
        })
        .join("")}
    </div>
  `;
}

function heroTitleMarkup(locale: Locale) {
  if (locale === "zh-CN" || locale === "zh-SG") {
    return `<span class="title-line notranslate" translate="no">NEKO233</span><span class="title-line">作品卡片</span>`;
  }

  if (locale === "ja") {
    return `<span class="title-line notranslate" translate="no">NEKO233</span><span class="title-line">作品カード</span>`;
  }

  return translations[locale].heroTitle;
}

function focusCard(card: FocusCard, index: number, locale: Locale) {
  return `
    <article class="focus-card focus-card-${index + 1}" style="--accent: ${card.accent}; --delay: ${index * 120}ms">
      <div class="focus-depth focus-depth-back"></div>
      <div class="focus-depth focus-depth-mid"></div>
      <div class="focus-scan"></div>
      <div class="focus-content">
        <span class="focus-code">${card.code}</span>
        <h3>${card.title[locale]}</h3>
        <p class="focus-subtitle">${card.subtitle[locale]}</p>
        <p class="focus-body">${card.body[locale]}</p>
        <div class="focus-tags">
          ${card.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function capabilityItem(capability: Capability, locale: Locale) {
  return `
    <article class="capability-item">
      <span class="capability-label">${capability.label[locale]}</span>
      <h3>${capability.title[locale]}</h3>
      <p>${capability.body[locale]}</p>
      <ul>
        ${capability.points[locale].map((point) => `<li>${point}</li>`).join("")}
      </ul>
    </article>
  `;
}

function bindInteractions() {
  const stage = document.querySelector<HTMLElement>(".card-stage");
  const cards = [...document.querySelectorAll<HTMLElement>(".project-card")];
  const focusElements = [...document.querySelectorAll<HTMLElement>(".focus-card")];

  window.onpointermove = (event) => {
    if (!stage) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;
    stage.style.setProperty("--tilt-x", `${y.toFixed(2)}deg`);
    stage.style.setProperty("--tilt-y", `${-x.toFixed(2)}deg`);
  };

  cards.forEach((cardElement) => {
    cardElement.addEventListener("pointermove", (event) => {
      const rect = cardElement.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      cardElement.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
      cardElement.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);
      cardElement.style.setProperty("--rx", `${((0.5 - py) * 12).toFixed(2)}deg`);
      cardElement.style.setProperty("--ry", `${((px - 0.5) * 14).toFixed(2)}deg`);
    });

    cardElement.addEventListener("pointerleave", () => {
      cardElement.style.setProperty("--rx", "0deg");
      cardElement.style.setProperty("--ry", "0deg");
      cardElement.style.setProperty("--mx", "50%");
      cardElement.style.setProperty("--my", "50%");
    });

    cardElement.addEventListener("click", (event) => {
      if (!window.matchMedia("(hover: none)").matches) return;
      if (cardElement.classList.contains("is-flipped")) return;
      event.preventDefault();
      cards.forEach((otherCard) => otherCard.classList.remove("is-flipped"));
      cardElement.classList.add("is-flipped");
    });
  });

  focusElements.forEach((focusElement) => {
    focusElement.addEventListener("pointermove", (event) => {
      const rect = focusElement.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      focusElement.style.setProperty("--fx", `${(px * 100).toFixed(2)}%`);
      focusElement.style.setProperty("--fy", `${(py * 100).toFixed(2)}%`);
      focusElement.style.setProperty("--fdx", `${((0.5 - px) * 18).toFixed(2)}px`);
      focusElement.style.setProperty("--fdy", `${((0.5 - py) * 18).toFixed(2)}px`);
      focusElement.style.setProperty("--frx", `${((0.5 - py) * 8).toFixed(2)}deg`);
      focusElement.style.setProperty("--fry", `${((px - 0.5) * 10).toFixed(2)}deg`);
    });

    focusElement.addEventListener("pointerleave", () => {
      focusElement.style.setProperty("--fx", "50%");
      focusElement.style.setProperty("--fy", "50%");
      focusElement.style.setProperty("--fdx", "0px");
      focusElement.style.setProperty("--fdy", "0px");
      focusElement.style.setProperty("--frx", "0deg");
      focusElement.style.setProperty("--fry", "0deg");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.25 },
  );

  [...cards, ...focusElements].forEach((element) => observer.observe(element));
}

function bindLocaleButtons() {
  document.querySelectorAll<HTMLButtonElement>(".locale-button").forEach((button) => {
    button.addEventListener("click", () => {
      const locale = button.dataset.locale as Locale | undefined;
      if (!locale || locale === currentLocale) return;
      currentLocale = locale;
      localStorage.setItem("neko233-locale", locale);
      render(locale);
    });
  });
}

function render(locale: Locale) {
  const t = translations[locale];
  const featured = projects.slice(0, 3);

  document.documentElement.lang = locale;
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <section class="portfolio-shell" aria-label="${t.pageLabel}">
      <div class="noise"></div>
      <div class="beam beam-one"></div>
      <div class="beam beam-two"></div>

      <header class="site-header">
        <a class="brand notranslate" translate="no" href="https://github.com/neko233-com" target="_blank" rel="noreferrer">neko233</a>
        <nav class="header-actions" aria-label="${t.languageLabel}">
          <button class="bgm-button" type="button" aria-pressed="${bgmEnabled}" aria-label="${bgmEnabled ? t.bgmOn : t.bgmOff}">${bgmEnabled ? "BGM ON" : "BGM"}</button>
          ${localeSwitcher(locale)}
          <a class="github-link" href="https://github.com/neko233-com" target="_blank" rel="noreferrer" aria-label="${t.githubAria}">
            GitHub
          </a>
        </nav>
      </header>

      <section class="hero-grid">
        <div class="copy-panel">
          <p class="eyebrow">neko233-com / project cards</p>
          <h1>${heroTitleMarkup(locale)}</h1>
          <p class="lede">${t.heroLede}</p>
          <div class="hero-actions">
            <a href="https://github.com/neko233-com?tab=repositories" target="_blank" rel="noreferrer">${t.viewRepos}</a>
            <a href="#projects">${t.exploreCards}</a>
          </div>
        </div>

        <div class="card-stage" aria-label="${t.featuredAria}">
          ${featured.map((project, index) => card(project, index, locale, `feature feature-${index + 1}`)).join("")}
        </div>

        <p class="side-note">${t.sideNote}</p>
        <strong class="score">233%</strong>
      </section>

      <section class="focus-section" aria-label="${t.focusTitle}">
        <div class="focus-copy">
          <p class="eyebrow">${t.focusEyebrow}</p>
          <h2>${t.focusTitle}</h2>
          <p>${t.focusLead}</p>
        </div>
        <div class="focus-grid">
          ${focusCards.map((focus, index) => focusCard(focus, index, locale)).join("")}
        </div>
      </section>

      <section class="capability-section" aria-label="${t.capabilityTitle}">
        <div class="capability-heading">
          <p class="eyebrow">${t.capabilityEyebrow}</p>
          <h2>${t.capabilityTitle}</h2>
          <p>${t.capabilityLead}</p>
        </div>
        <div class="capability-grid">
          ${capabilities.map((capability) => capabilityItem(capability, locale)).join("")}
        </div>
      </section>

      <section class="project-wall" id="projects">
        <div class="wall-heading">
          <p>${t.wallEyebrow}</p>
          <h2>${t.wallTitle}</h2>
        </div>
        <div class="wall-grid">
          ${projects.map((project, index) => card(project, index, locale)).join("")}
        </div>
      </section>

      <footer class="site-footer">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备2021040191号</a>
      </footer>
    </section>
  `;

  bindInteractions();
  bindLocaleButtons();
  document.querySelector<HTMLButtonElement>(".bgm-button")?.addEventListener("click", () => {
    void toggleBgm();
  });
  setBgmButtonState();
}

render(currentLocale);
