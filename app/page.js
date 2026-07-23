import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactForm from "@/components/ContactForm";
import Skills from "@/components/Skills";
import { heroProjects, projectCategories } from "@/data/projects";
import { publications, awards } from "@/data/research";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { siteConfig } from "@/data/siteConfig";
import { socialLinks } from "@/data/socialLinks";

export default function Home(){return <>
  <section id="home" className="hero section"><div className="hero-glow"/><div className="container hero-grid"><div className="hero-copy">
    <p className="availability">● {siteConfig.availability}</p>
    <p className="eyebrow">Swarnali Mollick</p>
    <h1>I&apos;m a freelance <span>Data Scientist</span> &amp; Applied AI Engineer</h1>
    <p className="degree-line">{siteConfig.degree}</p>
    <p className="hero-lead">I build practical machine-learning and AI systems—from clean data and rigorous evaluation to APIs, deployment and usable applications.</p>
    <div className="hero-actions"><Link className="btn" href="#projects">View Projects</Link><a className="btn btn-secondary" href={siteConfig.cvPath} download>Download CV</a></div>
    <div className="social-row"><a href={socialLinks.github}>GitHub</a><a href={socialLinks.linkedin}>LinkedIn</a><a href={socialLinks.scholar}>Google Scholar</a></div>
  </div><HeroCarousel projects={heroProjects}/></div></section>

  <section id="about" className="section"><div className="container narrow"><p className="eyebrow">About</p><h2>Data Scientist specialising in Machine Learning and Applied AI</h2><p className="section-lead">I work with structured data, text, images and graphs to build predictive models, intelligent applications and research-driven solutions. My portfolio is organised by problem type, while every project keeps the technical evidence visible through technologies, results and a complete case study.</p><div className="strength-grid"><article><strong>Business-focused Data Science</strong><p>EDA, statistical modelling, forecasting, classification and actionable interpretation.</p></article><article><strong>Applied AI systems</strong><p>NLP, RAG, transformers, computer vision and deep-learning applications.</p></article><article><strong>Practical delivery</strong><p>Reusable pipelines, APIs, deployment, debugging and clear documentation.</p></article></div></div></section>

  <section id="projects" className="section section-alt"><div className="container"><p className="eyebrow">Projects</p><h2>Work grouped by professional focus</h2><p className="section-lead">Explore practical Data Science and Applied AI work by category.</p>
    <ProjectShowcase categories={projectCategories}/>
  </div></section>

  <section id="research" className="section"><div className="container two-column"><div><p className="eyebrow">Research</p><h2>Peer-reviewed work in applied machine learning</h2><p className="section-lead">Research experience across healthcare analytics, biomedical prediction, environmental modelling and data mining.</p><a className="btn btn-secondary" href={socialLinks.scholar}>View Google Scholar</a></div><div className="stack-list">{publications.map(p=><article key={p.title}><span>{p.year}</span><div><h3>{p.title}</h3><p>{p.venue}</p></div></article>)}</div></div><div className="container awards"><h3>Honours &amp; Awards</h3><div>{awards.map(a=><span key={a}>{a}</span>)}</div></div></section>

  <section id="experience" className="section section-alt"><div className="container"><h2>Professional Experience</h2><div className="timeline">{experience.map(item=><article key={item.role}><span>{item.period}</span><div><h3>{item.role}</h3><strong>{item.organisation}</strong><p>{item.detail}</p></div></article>)}</div></div></section>

  <Skills/>

  <section id="education" className="section section-alt"><div className="container"><p className="eyebrow">Education</p><h2>Academic foundation in AI and Data Engineering</h2><div className="education-grid">{education.map(item=><article key={item.degree}><span>{item.period}</span><h3>{item.degree}</h3><strong>{item.focus}</strong><p>{item.institution}</p><small>{item.detail}</small></article>)}</div></div></section>

  <section id="contact" className="section section-alt"><div className="container contact-grid"><div><p className="eyebrow">Contact</p><h2>Let&apos;s build practical Data Science and AI systems</h2><p className="section-lead">Open to Data Science, Machine Learning, Applied AI, internship, junior and industry collaboration opportunities.</p><div className="contact-links"><a href={socialLinks.email}>{siteConfig.email}</a><a href={socialLinks.linkedin}>LinkedIn</a><a href={socialLinks.github}>GitHub</a></div></div><ContactForm/></div></section>
</>}
