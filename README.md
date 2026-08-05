# Swarnali Mollick - Data Science & Applied AI Portfolio

A recruiter-friendly Next.js portfolio organised around one clear identity:

**Data Scientist specialising in Machine Learning and Applied AI**

## Updates included

- Added **Available remotely · Venice, Italy** at the top of the hero.
- Added **MSc · AI & Data Engineering** directly below the main professional heading.
- Changed the main CTA to **View Projects**.
- Replaced the static hero workflow graphic with an auto-rotating, one-project-at-a-time project carousel.
- Reorganised projects into:
  - Data Science & Predictive Analytics
  - Applied AI
  - Going Deeper Into
- Uses compact, category-based project carousels that rotate automatically and also support arrows, keyboard focus and swipe navigation.
- Added short recruiter-friendly descriptions and visible technology tags.
- Added eye-catching conceptual project thumbnails instead of application screenshots.
- Added a complete local case-study route for every project.
- Added the live demo button for the AI Study Assistant.
- Preserved a dedicated **Skills** section alongside the project-level technology lists.

## Project thumbnails

All project images are stored locally in `public/projects/`. They are sharp 3840 × 2400 conceptual illustrations designed for portfolio presentation rather than screenshots of notebooks or application interfaces. The Financial Market Intelligence image combines a company graph, an LLM symbol and market signals.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run validate
npm run build
npm start
```

## Deploy to Vercel

Push the folder to GitHub, import the repository in Vercel, and set:

```env
NEXT_PUBLIC_SITE_URL=https://swarnalimollick.vercel.app
```

Add `FORMSPREE_ENDPOINT` only when the contact form should deliver messages.

## CV

The project expects the CV at:

`public/Swarnali_Mollick_CV.pdf`

A copy-ready portfolio CV is included. Replace it later only when a newer final CV is available.
