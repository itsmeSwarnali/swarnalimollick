import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({project}){
  const hasCaseStudy = project.hasCaseStudy !== false;
  return <article className={`project-card${project.minimal ? " project-card-minimal" : ""}`}>
    <div className="project-image"><Image src={project.image} alt={`${project.title} conceptual thumbnail`} fill unoptimized sizes="(min-width: 1100px) 30vw, (min-width: 700px) 45vw, 88vw" /></div>
    <div className="project-body">
      {!project.minimal&&<div className="project-meta"><span>{project.status}</span><small>{project.category}</small></div>}
      <h3>{project.title}</h3>
      {!project.minimal&&project.summary&&<p>{project.summary}</p>}
      {!project.minimal&&project.result&&<strong>{project.result}</strong>}
      <div className="tech-list">{project.technologies.map(t=><span key={t}>{t}</span>)}</div>
      {project.disclaimer&&<p className="disclaimer">{project.disclaimer}</p>}
      {!project.minimal&&<div className="project-actions">
        {hasCaseStudy&&<Link className="btn btn-small" href={`/projects/${project.slug}`}>Case Study</Link>}
        {project.demo&&<a className="btn btn-small btn-secondary" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
        {project.github&&<a className="text-link" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
      </div>}
    </div>
  </article>
}
