# Verification Report

## Confirmed updates

- Preserved the existing portfolio layout, typography and cyan/violet colour palette.
- Kept the dedicated Skills section unchanged.
- Renamed the third project category to **Going Deeper Into**.
- Kept category names as clickable buttons.
- Enabled automatic project-card rotation while preserving optional arrows and swipe navigation.
- Reduced the project showcase width and card typography slightly without changing the overall design.
- Removed references to thesis work, CGPA, and independent-project experience.
- Kept only genuine professional roles under **Professional Experience**.
- Added the Air Quality Predictor GitHub link.
- Replaced all project thumbnails with local 3840 × 2400 conceptual WebP images.
- Used the requested graph + LLM + financial-market combination for Financial Market Intelligence.
- Served local project images without Next.js recompression to preserve clarity.

## Validation

Run:

```bash
npm run validate
```

For a production deployment, also run after installing dependencies:

```bash
npm install
npm run build
```

- Financial Market Intelligence is presented only by title and technology stack, with no description or case-study route.
- The hero project carousel was reduced in size without changing the established visual style.
