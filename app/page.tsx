const skills = ["PHP 8.x", "Laravel", "MySQL", "Docker", "AWS", "React", "TypeScript"]

const projects = [
  {
    number: "01",
    title: "Task Tempo",
    category: "Laravel / Webアプリ",
    description: "チームで使うタスク管理アプリを想定したデモ。ログイン後の一覧表示やステータス変更など、日々の操作を小さく丁寧に設計しています。",
    tags: ["Laravel", "MySQL", "Docker"],
  },
  {
    number: "02",
    title: "API Sketchbook",
    category: "REST API / 学習記録",
    description: "LaravelでREST APIを組み立て、OpenAPIの定義と一緒に検証したサンプル。曖昧になりがちな入出力を言葉にする練習です。",
    tags: ["PHP", "OpenAPI", "Testing"],
  },
  {
    number: "03",
    title: "Legacy Notes",
    category: "PHP / リファクタリング",
    description: "既存コードを読み解き、振る舞いを変えずに少しずつ整えるための技術ノート。before / afterの考え方を記録しています。",
    tags: ["PHP", "Refactoring", "Notes"],
  },
]

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="水瀬ひより、トップへ戻る">
          <span className="brand-mark">hm</span>
          <span>Hiyori Minase</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO / 2024 — 2025</p>
          <h1 id="hero-title">
            古いコードも、<br />
            <span>新しい技術も。</span>
          </h1>
          <p className="hero-intro">PHP / Laravelを中心に、Webアプリケーションをつくっています。</p>
          <a className="text-link" href="#projects">
            つくったものを見る <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="hero-aside" aria-label="プロフィール概要">
          <div className="portrait-placeholder" aria-hidden="true">
            <span>h</span>
          </div>
          <div>
            <p className="hero-name">水瀬ひより</p>
            <p className="hero-meta">Hiyori Minase / 23</p>
          </div>
          <p className="fiction-note">This is a fictional portfolio<br />for an AI-assisted workflow PoC.</p>
        </div>
      </section>

      <div className="rule" />

      <section className="section-shell split-section" id="about" aria-labelledby="about-title">
        <SectionLabel>01 / About</SectionLabel>
        <div className="section-content">
          <h2 id="about-title">コードの背景まで<br /><em>想像できる人に。</em></h2>
          <div className="about-copy">
            <p>水瀬ひより、23歳。PHP / Laravelを軸に、Webアプリケーションの開発と改善に取り組んでいます。</p>
            <p>新しいものをつくることだけでなく、誰かが書いたコードを読み、仕様を見つけ、壊さずに少しずつ良くしていくことが好きです。APIやデータベースの設計を学びながら、フロントエンドにも触れています。</p>
            <p className="small-note">※ このプロフィール・経歴・制作物はすべて架空の設定です。</p>
          </div>
        </div>
      </section>

      <section className="section-shell split-section skills-section" id="skills" aria-labelledby="skills-title">
        <SectionLabel>02 / Skills</SectionLabel>
        <div className="section-content">
          <div className="skills-heading">
            <h2 id="skills-title">使う道具、<br /><em>学んでいる道具。</em></h2>
            <p>得意度を数字で決めつけず、実際に手を動かしている技術を並べています。</p>
          </div>
          <ul className="skill-list" aria-label="使用技術">
            {skills.map((skill, index) => <li key={skill}><span>0{index + 1}</span>{skill}</li>)}
          </ul>
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-shell">
          <div className="projects-heading">
            <SectionLabel>03 / Projects</SectionLabel>
            <div>
              <h2 id="projects-title">小さくつくって、<br /><em>深く考える。</em></h2>
              <p>学習・検証のためにつくった架空のデモです。</p>
            </div>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-item" key={project.title}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.title}の技術`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
        <SectionLabel>04 / Contact</SectionLabel>
        <div className="contact-content">
          <h2 id="contact-title">まずは、<br /><em>コードの話から。</em></h2>
          <div>
            <p>このサイトは展示用のため、実際の連絡先や送信フォームは設置していません。</p>
            <p className="small-note">架空の人物・実績を使った、ChatGPT × GitHub × v0 の開発ワークフロー検証用ポートフォリオです。</p>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <span>© 2025 Hiyori Minase — Fictional Portfolio</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  )
}
