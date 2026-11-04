# Initial v0 prompt — Hiyori Portfolio

Create a polished, fully responsive single-page portfolio for a fictional **23-year-old Japanese PHP/Laravel developer**, Hiyori Minase (水瀬ひより).

This is an OSS workflow proof of concept: ChatGPT prepares the specs and reviews PRs, GitHub is the source of truth, and v0 implements the UI. **Respect the existing README.md and docs/ files.**

## Main content

- Hero: Hiyori Minase / 水瀬ひより; title “PHP / Laravel Developer”; catchphrase “古いコードも、新しい技術も。”
- About: early-career web developer who enjoys maintaining PHP code, building Laravel apps, improving APIs, and learning frontend tools. The profile must be clearly marked fictional.
- Skills: PHP, Laravel, MySQL, Docker, AWS, React, TypeScript; show them as a compact readable set, not exaggerated proficiency percentages.
- Projects: three explicitly fictional demo items:
  1. Task Tempo — task management demo built around Laravel
  2. API Sketchbook — sample REST API with OpenAPI notes
  3. Legacy Notes — PHP refactoring notes with before/after examples
- Contact: a tasteful non-functional demo section. Do not invent a working email address, social media identity, real employers, GitHub profile, or submission endpoint.
- Footer: indicate that this is a fictional portfolio created to test an AI-assisted development workflow.

## Visual direction

Clean editorial developer aesthetic, subtle personality, highly readable Japanese typography. Use off-white and charcoal with a restrained blue-green accent. Avoid neon hacker stereotypes, gratuitous gradients, generic dashboard cards, fake terminal screens, and oversized animated effects. Make the design suitable for an actual young developer without pretending the fictional person is real.

A photographic portrait is not required. Prefer an original abstract illustration or typographic identity to scraping third-party photos.

## Technical constraints

- Next.js App Router, TypeScript, React, Tailwind CSS
- Keep content/data separate from presentation where sensible
- Semantic HTML and accessibility; responsive from 360px upwards
- Respect reduced-motion and keyboard navigation
- Static content only: no database, login, backend API, or real form submission
- Use no credentials, private information, or external third-party accounts
- Accessible, functional navigation and real content in every section
- Update README only as needed; preserve the description of the PoC and all files under docs/
- Aim for a small MVP that can build and deploy cleanly

## Definition of done

The Next.js app builds successfully, the portfolio works on mobile and desktop, content is fictional and clearly labeled, and changes can be reviewed as GitHub commits / a pull request. Do not expand scope beyond the MVP.
