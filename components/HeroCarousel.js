"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroCarousel({projects}){
  const [index,setIndex]=useState(0);
  useEffect(()=>{const id=setInterval(()=>setIndex(v=>(v+1)%projects.length),5000);return()=>clearInterval(id);},[projects.length]);
  const project=projects[index];
  const hasCaseStudy=project.hasCaseStudy!==false;
  return <div className="hero-carousel" aria-roledescription="carousel">
    <div className="hero-slide-image"><Image src={project.image} alt={`${project.title} conceptual project thumbnail`} fill priority unoptimized sizes="(min-width: 900px) 40vw, 94vw" /></div>
    <div className="hero-slide-copy"><span>{project.category}</span><h2>{project.title}</h2>
      {project.minimal
        ? <div className="hero-tech-list">{project.technologies.map(t=><em key={t}>{t}</em>)}</div>
        : <>{project.summary&&<p>{project.summary}</p>}{hasCaseStudy&&<Link href={`/projects/${project.slug}`}>Open case study →</Link>}</>}
    </div>
    <button className="carousel-arrow prev" onClick={()=>setIndex((index-1+projects.length)%projects.length)} aria-label="Previous project">‹</button>
    <button className="carousel-arrow next" onClick={()=>setIndex((index+1)%projects.length)} aria-label="Next project">›</button>
    <div className="carousel-dots">{projects.map((p,i)=><button key={p.slug} className={i===index?"active":""} onClick={()=>setIndex(i)} aria-label={`Show ${p.title}`} />)}</div>
  </div>
}
