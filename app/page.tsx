import Image from "next/image"

type Project = {
  id: string
  number: string
  title: string
  category: string
  description: string
  detail: string
  tags: string[]
}

const projectList: Project[] = [
  {
    id: "task-tempo",
    number: "01",
    title: "Task Tempo",
    category: "タスク管理アプリ / デモ",
    description: "チームのタスクを整理し、進捗を見渡すためのWebアプリを想定したサンプルです。",
    detail: "LaravelのCRUD設計、MySQLのデータ構造、Dockerを用いた開発環境をテーマにしています。実際の稼働サービスではありません。",
    tags: ["Laravel", "MySQL", "Docker"],
  },
  {
    id: "api-sketchbook",
    number: "02",
    title: "API Sketchbook",
    category: "REST API / 学習記録",
    description: "LaravelでAPIを組み立て、入出力の仕様をOpenAPIで明確にするための検証サンプルです。",
    detail: "リソース設計やエラーレスポンス、テストしやすいAPIを考えるための架空プロジェクトです。",
    tags: ["PHP", "OpenAPI", "Testing"],
  },
  {
    id: "legacy-notes",
    number: "03",
    title: "Legacy Notes",
    category: "PHP / リファクタリング",
    description: "既存のPHPコードを読み解き、動作を変えずに少しずつ整える考え方をまとめた技術ノートです。",
    detail: "小さな変更と回帰テストを繰り返し、可読性と保守性を高める手順を題材にしています。",
    tags: ["PHP", "Refactoring", "Notes"],
  },
]

const skillGroups = [
  { title: "バックエンド", icon: "⌘", items: ["PHP 8.x", "Laravel", "MySQL"] },
  { title: "フロントエンド", icon: "▣", items: ["TypeScript", "React", "Next.js"] },
  { title: "開発環境・インフラ", icon: "⚙", items: ["Git", "Docker", "AWS"] },
]

function SectionHeading({ number, english, title }: { number: string; english: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{number} / {english}</span>
      <h2>{title}</h2>
    </div>
  )
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow-icon">{diagonal ? "↗" : "→"}</span>
}

function PreviewIllustration({ id }: { id: string }) {
  if (id === "task-tempo") {
    return (
      <div className="work-preview work-preview--task" aria-hidden="true">
        <div className="mock-app">
          <div className="mock-top"><b>task tempo</b><span>● ● ●</span></div>
          <div className="mock-kanban">
            {["To do", "In progress", "Done"].map((label, index) => (
              <div className="mock-column" key={label}>
                <span className="mock-column-title">{label}</span>
                <span className="mock-tile"><i className="mock-short" /><i /></span>
                {index !== 2 && <span className="mock-tile"><i /><i className="mock-short" /></span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  if (id === "api-sketchbook") {
    return (
      <div className="work-preview work-preview--api" aria-hidden="true">
        <div className="mock-api">
          <div className="mock-api-top">API Sketchbook <span>v1.0</span></div>
          <div className="mock-api-title">People API</div>
          <div className="mock-api-row"><b>GET</b><span>/api/people</span></div>
          <div className="mock-api-row"><b>POST</b><span>/api/people</span></div>
          <div className="mock-api-row"><b>PATCH</b><span>/api/people/&#123;id&#125;</span></div>
        </div>
      </div>
    )
  }
  return (
    <div className="work-preview work-preview--legacy" aria-hidden="true">
      <div className="mock-editor">
        <div className="mock-editor-top"><span className="mock-dots">● ● ●</span> Legacy Notes <span>php</span></div>
        <div className="mock-code"><span>01</span><code><em>function</em> getUser($id) &#123;</code></div>
        <div className="mock-code"><span>02</span><code>  <em>return</em> $repo-&gt;find($id);</code></div>
        <div className="mock-code"><span>03</span><code>&#125;</code></div>
        <div className="mock-editor-footer">readable code, smaller changes_</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="site" id="top">
      <a className="skip-link" href="#main-content">本文へ移動</a>
      <header className="site-header shell">
        <a href="#top" className="brand" aria-label="水瀬ひよりのトップへ">
          <span className="brand-symbol">hm</span><span>Hiyori Minase</span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="メニューを開く"><span /><span /><span /></summary>
          <nav aria-label="モバイルナビゲーション">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <main id="main-content" className="shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">PORTFOLIO / 2026</p>
            <h1 id="hero-title">古いコードも、<br /><span>新しい技術も。</span></h1>
            <p className="hero-lead">PHP / Laravelを中心に、Webアプリケーションの開発と改善に取り組んでいます。</p>
            <a className="pill-link" href="#projects">つくったものを見る <ArrowIcon /></a>
          </div>
          <div className="hero-portrait">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pjiVXhpYgfj3RnQfbVHhcLplp4qqou.png"
              alt="ノートパソコンを使う笑顔の女性"
              width={498}
              height={429}
              sizes="(max-width: 760px) 100vw, 30vw"
              priority
            />
          </div>
          <div className="hero-bio">
            <p className="hero-name">水瀬ひより</p>
            <p className="mono hero-name-en">Hiyori Minase / 23</p>
            <p>PHP / Laravelをメインに、Webアプリケーションの設計と実装を学んでいます。チームでの開発を想定し、読みやすく、直しやすいコードを大切にしています。</p>
            <span className="fiction-label">架空の人物・実績によるデモサイトです。</span>
          </div>
        </section>

        <section className="section-row about-section" id="about" aria-labelledby="about-title">
          <SectionHeading number="01" english="About" title="わたしについて" />
          <div className="section-body about-body">
            <p id="about-title">新しいものをつくることだけでなく、誰かが書いたコードを読み、仕様を見つけ、壊さずに少しずつ良くしていくことが好きです。</p>
            <p>APIやデータベースの設計を学びながら、フロントエンドにも触れています。小さく試し、確かめながら前に進むことを心がけています。</p>
          </div>
        </section>

        <section className="section-row skills-section" id="skills" aria-labelledby="skills-title">
          <SectionHeading number="02" english="Skills" title="できること" />
          <div className="skill-grid" id="skills-title">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3><span aria-hidden="true" className="skill-icon">{group.icon}</span>{group.title}</h3>
                <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section-row projects-section" id="projects" aria-labelledby="projects-title">
          <SectionHeading number="03" english="Projects" title="開発実績" />
          <div className="project-grid" id="projects-title">
            {projectList.map((project) => (
              <article className="project-card" key={project.id}>
                <PreviewIllustration id={project.id} />
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <details className="project-details">
                    <summary>プロジェクトについて <ArrowIcon diagonal /></summary>
                    <p>{project.detail}</p>
                  </details>
                </div>
              </article>
            ))}
            <p className="project-disclaimer">※ ここに掲載しているプロジェクトは、ワークフロー検証用の架空の制作実績です。</p>
          </div>
        </section>

        <section className="contact-panel" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">04 / Contact</p>
            <h2 id="contact-title">お問い合わせ</h2>
          </div>
          <p>このポートフォリオはAIを使った共同開発のPoCです。実際の連絡先やお問い合わせフォームは設けていません。</p>
          <a className="contact-link" href="https://github.com/catatsumuri/hiyori-portfolio-poc" target="_blank" rel="noopener noreferrer">GitHubで制作過程を見る <ArrowIcon diagonal /></a>
        </section>
      </main>

      <footer className="site-footer shell">
        <a href="#top" className="brand brand--small"><span className="brand-symbol">hm</span><span>Hiyori Minase</span></a>
        <span>© 2026 Hiyori Minase · Fictional Portfolio</span>
      </footer>
    </div>
  )
}
