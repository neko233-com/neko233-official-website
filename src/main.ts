import "./styles.css";

type Project = {
  name: string;
  kicker: string;
  description: string;
  language: string;
  stars: number;
  updated: string;
  url: string;
  image: string;
  accent: string;
  scale: "large" | "medium" | "small";
};

const projects: Project[] = [
  {
    name: "proxysss",
    kicker: "TCP / UDP / HTTP proxy gateway",
    description: "Rust proxy gateway with programmable TypeScript and JavaScript business rules.",
    language: "Rust",
    stars: 1,
    updated: "2026-06-30",
    url: "https://github.com/neko233-com/proxysss",
    image: "/previews/proxysss.png",
    accent: "#ff3fb7",
    scale: "large",
  },
  {
    name: "QCP",
    kicker: "Reliable UDP for distributed games",
    description: "Ultra-high-performance UDP protocol for 2026 distributed gaming.",
    language: "Protocol",
    stars: 0,
    updated: "2026-06-28",
    url: "https://github.com/neko233-com/QCP",
    image: "/previews/qcp.png",
    accent: "#7c5cff",
    scale: "medium",
  },
  {
    name: "bytemsg233",
    kicker: "Game message serialization",
    description: "Byte message format for game data, including map<K,V>, List<T> and struct support.",
    language: "Go",
    stars: 2,
    updated: "2026-06-30",
    url: "https://github.com/neko233-com/bytemsg233",
    image: "/previews/bytemsg233.png",
    accent: "#70f6ff",
    scale: "large",
  },
  {
    name: "hotc233-unity",
    kicker: "Unity hot update runtime",
    description: "C# hot update compile and runtime for Unity.",
    language: "C++",
    stars: 0,
    updated: "2026-07-01",
    url: "https://github.com/neko233-com/hotc233-unity",
    image: "/previews/hotc233-unity.png",
    accent: "#ffe168",
    scale: "small",
  },
  {
    name: "unity233-websocket",
    kicker: "Low-latency Unity transport",
    description: "Near-zero-GC WebSocket for Unity WebGL and native platforms.",
    language: "C#",
    stars: 2,
    updated: "2026-06-29",
    url: "https://github.com/neko233-com/unity233-websocket",
    image: "/previews/unity233-websocket.png",
    accent: "#55ff9b",
    scale: "medium",
  },
  {
    name: "cnext",
    kicker: "Next-gen C/C++ compiler",
    description: "Go-based compiler toolchain with package management and multi-version support.",
    language: "Go",
    stars: 0,
    updated: "2026-06-28",
    url: "https://github.com/neko233-com/cnext",
    image: "/previews/cnext.png",
    accent: "#ff815c",
    scale: "small",
  },
];

const featured = projects.slice(0, 3);
const supporting = projects.slice(3);

function statLabel(project: Project) {
  const starText = project.stars === 1 ? "star" : "stars";
  return `${project.stars} ${starText} · ${project.language}`;
}

function card(project: Project, index: number, variant = "") {
  return `
    <a class="project-card ${project.scale} ${variant}" href="${project.url}" target="_blank" rel="noreferrer" style="--accent: ${project.accent}; --delay: ${index * 90}ms">
      <span class="card-glow"></span>
      <img src="${project.image}" alt="${project.name} project preview" loading="${index > 1 ? "lazy" : "eager"}" />
      <span class="card-body">
        <span class="card-kicker">${project.kicker}</span>
        <span class="card-title">${project.name}</span>
        <span class="card-copy">${project.description}</span>
        <span class="card-meta">
          <span>${statLabel(project)}</span>
          <span>Updated ${project.updated}</span>
        </span>
      </span>
    </a>
  `;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="portfolio-shell" aria-label="neko233 project portfolio">
    <div class="noise"></div>
    <div class="beam beam-one"></div>
    <div class="beam beam-two"></div>

    <header class="site-header">
      <a class="brand" href="https://github.com/neko233-com" target="_blank" rel="noreferrer">neko233</a>
      <a class="github-link" href="https://github.com/neko233-com" target="_blank" rel="noreferrer" aria-label="Open neko233-com on GitHub">
        GitHub
      </a>
    </header>

    <section class="hero-grid">
      <div class="copy-panel">
        <p class="eyebrow">neko233-com / project cards</p>
        <h1>NEKO233 PROJECT CARDS</h1>
        <p class="lede">
          A portfolio wall for proxy gateways, reliable UDP, message serialization, Unity runtime tooling and the systems around them.
        </p>
        <div class="hero-actions">
          <a href="https://github.com/neko233-com?tab=repositories" target="_blank" rel="noreferrer">View repositories</a>
          <a href="#projects">Explore cards</a>
        </div>
      </div>

      <div class="card-stage" aria-label="Featured projects">
        ${featured.map((project, index) => card(project, index, `feature feature-${index + 1}`)).join("")}
      </div>

      <p class="side-note">compact, fast, engine-side tools</p>
      <strong class="score">233%</strong>
    </section>

    <section class="project-wall" id="projects">
      <div class="wall-heading">
        <p>selected stack</p>
        <h2>Top projects from neko233-com</h2>
      </div>
      <div class="wall-grid">
        ${projects.map((project, index) => card(project, index)).join("")}
      </div>
    </section>

    <footer class="site-footer">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备2021040191号</a>
    </footer>
  </section>
`;

const stage = document.querySelector<HTMLElement>(".card-stage");

window.addEventListener("pointermove", (event) => {
  if (!stage) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 20;
  const y = (event.clientY / window.innerHeight - 0.5) * 20;
  stage.style.setProperty("--tilt-x", `${y.toFixed(2)}deg`);
  stage.style.setProperty("--tilt-y", `${-x.toFixed(2)}deg`);
});
