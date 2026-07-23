import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

export function generateStaticParams(){return projects.filter(project=>project.hasCaseStudy!==false).map(project=>({slug:project.slug}));}
export async function generateMetadata({params}){const {slug}=await params;const project=getProject(slug);if(!project||project.hasCaseStudy===false)return{};return{title:project.title,description:project.summary,alternates:{canonical:`/projects/${project.slug}`},openGraph:{title:project.title,description:project.summary,url:`${siteConfig.url}/projects/${project.slug}`,images:[project.image]}};}

export default async function ProjectPage({params}){const {slug}=await params;const project=getProject(slug);if(!project||project.hasCaseStudy===false)notFound();const structured={"@context":"https://schema.org","@type":"CreativeWork",name:project.title,description:project.summary,url:`${siteConfig.url}/projects/${project.slug}`,creator:{"@type":"Person",name:siteConfig.name}};return <>
  <section className="case-hero section"><div className="container"><Link className="back-link" href="/#projects">← Back to projects</Link><div className="case-grid"><div><p className="eyebrow">{project.category} · {project.status}</p><h1>{project.title}</h1><p className="case-lead">{project.summary}</p><strong className="case-result">{project.result}</strong><div className="tech-list large">{project.technologies.map(t=><span key={t}>{t}</span>)}</div><div className="project-actions">{project.demo&&<a className="btn" href={project.demo} target="_blank" rel="noreferrer">Open Live Demo</a>}{project.github&&<a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">View GitHub</a>}</div>{project.disclaimer&&<p className="disclaimer">{project.disclaimer}</p>}</div><div className="case-image"><Image src={project.image} alt={`${project.title} conceptual thumbnail`} fill priority unoptimized sizes="(min-width: 900px) 48vw, 92vw"/></div></div></div></section>
  <section className="section section-alt"><div className="container case-content"><article><p className="eyebrow">Problem</p><h2>Why this project matters</h2><p>{project.problem}</p></article><CaseList title="Approach" items={project.approach}/><CaseList title="Outcomes" items={project.outcomes}/><CaseList title="Challenges" items={project.challenges}/><CaseList title="Next steps" items={project.nextSteps}/></div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structured)}}/>
</>}
function CaseList({title,items}){return <article><p className="eyebrow">{title}</p><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>}
