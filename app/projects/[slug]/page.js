import Image from 'next/image';
import Link from 'next/link';
import {getProject,projects} from '@/data/projects';
import {notFound} from 'next/navigation';

export function generateStaticParams(){
  return projects.filter(p=>p.hasCaseStudy!==false).map(p=>({slug:p.slug}));
}

function DetailSection({section}){
  return <article className="case-detail-card">
    {section.label&&<p className="eyebrow">{section.label}</p>}
    <h2>{section.title}</h2>
    {section.text&&<p>{section.text}</p>}
    {section.items?.length>0&&<ul>{section.items.map(item=><li key={item}>{item}</li>)}</ul>}
  </article>;
}

export default async function Page({params}){
  const{slug}=await params;
  const p=getProject(slug);
  if(!p||p.hasCaseStudy===false)notFound();
  const caseStudy=p.caseStudy||{};
  const sections=caseStudy.sections||[];
  const screenshots=p.screenshots||[];

  return <>
    <section className="case-hero section">
      <div className="container">
        <Link className="back-link" href="/#projects">← Back to projects</Link>
        <div className="case-grid">
          <div>
            <p className="eyebrow">{p.category}</p>
            <h1>{p.title}</h1>
            <p className="case-lead">{p.summary}</p>
            <strong className="case-result">{p.result}</strong>
            <div className="tech-list large">{p.technologies.map(t=><span key={t}>{t}</span>)}</div>
            <div className="project-actions">{p.github&&<a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}</div>
          </div>
          <div className="case-image"><Image src={p.image} alt={p.title} fill unoptimized sizes="(min-width: 900px) 45vw, 94vw"/></div>
        </div>
      </div>
    </section>

    <section className="section case-study-section">
      <div className="container">
        <article className="case-overview-card">
          <p className="eyebrow">Case study</p>
          <h2>Project overview</h2>
          <p>{caseStudy.overview||p.summary}</p>
        </article>
        <div className="case-detail-grid">{sections.map(section=><DetailSection key={`${section.label}-${section.title}`} section={section}/>)}</div>

        {screenshots.length>0&&<div className="case-gallery-block">
          <p className="eyebrow">Project screenshots</p>
          <h2>Working application and system flow</h2>
          <div className={`case-gallery${screenshots.length===1?' case-gallery-single':''}`}>
            {screenshots.map(shot=><figure className="case-shot" key={shot.src}>
              <div className="case-shot-image"><Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} unoptimized sizes="(min-width: 900px) 50vw, 94vw"/></div>
              {shot.caption&&<figcaption>{shot.caption}</figcaption>}
            </figure>)}
          </div>
        </div>}
      </div>
    </section>
  </>;
}
