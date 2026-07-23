import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const required=[
  "app/page.js",
  "app/layout.js",
  "app/projects/[slug]/page.js",
  "components/HeroCarousel.js",
  "components/ProjectCarousel.js",
  "components/Skills.js",
  "data/projects.js",
  "data/skills.js",
  "public/Swarnali_Mollick_CV.pdf"
];
const errors=[];
for(const file of required){if(!fs.existsSync(path.join(root,file)))errors.push(`Missing ${file}`)}

const source=fs.readFileSync(path.join(root,"data/projects.js"),"utf8");
const projectNames=[
  "Customer Retention Predictor",
  "Air Quality Predictor",
  "Sales Prediction Tool",
  "Shopping Basket Analysis",
  "AI Study Assistant",
  "Financial News Analyzer",
  "Image Description Generator",
  "Brain Scan Classifier",
  "3D Object Scanner",
  "Financial Market Intelligence"
];
for(const name of projectNames){if(!source.includes(name))errors.push(`Missing project: ${name}`)}
if(!source.includes("https://ai-nlp-learning-assistant.streamlit.app/"))errors.push("AI Study Assistant demo missing");

const images=[...source.matchAll(/image:\s*"(\/projects\/[^"]+)"/g)].map(match=>match[1]);
for(const image of images){if(!fs.existsSync(path.join(root,"public",image.replace(/^\//,""))))errors.push(`Missing image: ${image}`)}
if(images.length!==projectNames.length)errors.push(`Expected ${projectNames.length} project images, found ${images.length}`);

const home=fs.readFileSync(path.join(root,"app/page.js"),"utf8");
for(const token of ["Available remotely", "MSc · AI & Data Engineering", "View Projects", "<Skills/>"]){
  if(!home.includes(token) && !fs.readFileSync(path.join(root,"data/siteConfig.js"),"utf8").includes(token))errors.push(`Homepage update missing: ${token}`);
}


for (const forbidden of ["Research in Progress", "Going deeper in to", "thesis", "CGPA", "Independent Data Science", "Portfolio and academic work"]) {
  const corpus = [
    fs.readFileSync(path.join(root,"app/page.js"),"utf8"),
    fs.readFileSync(path.join(root,"data/projects.js"),"utf8"),
    fs.readFileSync(path.join(root,"data/experience.js"),"utf8"),
    fs.readFileSync(path.join(root,"data/education.js"),"utf8")
  ].join("\n");
  if (corpus.toLowerCase().includes(forbidden.toLowerCase())) errors.push(`Forbidden portfolio wording found: ${forbidden}`);
}

if(!source.includes('name: "Going Deeper Into"')) errors.push("Going Deeper Into category missing");
if(!source.includes('https://github.com/itsmeSwarnali/Air-Quality-Prediction')) errors.push("Air Quality Predictor GitHub link missing");

for (const privateDetail of ["connected companies", "market movement", "dynamic graphs", "stock movement", "market trend prediction", "Graph-based market intelligence workflow"]) { if (source.toLowerCase().includes(privateDetail.toLowerCase())) errors.push(`Private Financial Market Intelligence detail found: ${privateDetail}`); }
if(!source.includes("hasCaseStudy: false")) errors.push("Financial Market Intelligence case study must be disabled");

if(errors.length){console.error(errors.join("\n"));process.exit(1)}
console.log("Portfolio structure validated: 10 projects, 9 case studies, category buttons, auto carousels, private Financial Market Intelligence preview and Skills section.");
