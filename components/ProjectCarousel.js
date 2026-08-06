'use client'; import {useEffect,useRef} from 'react'; import ProjectCard from './ProjectCard';
export default function ProjectCarousel({projects}){
  const r=useRef(null);
  const go=d=>{
    const el=r.current;
    if(!el)return;
    const max=el.scrollWidth-el.clientWidth;
    const step=el.clientWidth*.85;
    if(d>0&&el.scrollLeft>=max-4)el.scrollTo({left:0,behavior:'smooth'});
    else if(d<0&&el.scrollLeft<=4)el.scrollTo({left:max,behavior:'smooth'});
    else el.scrollBy({left:d*step,behavior:'smooth'});
  };
  useEffect(()=>{
    const el=r.current;
    if(!el)return;
    el.scrollTo({left:0});
    if(projects.length<=1)return;
    const id=setInterval(()=>{
      const track=r.current;
      if(!track)return;
      const max=track.scrollWidth-track.clientWidth;
      if(track.scrollLeft>=max-4)track.scrollTo({left:0,behavior:'smooth'});
      else track.scrollBy({left:track.clientWidth*.85,behavior:'smooth'});
    },5000);
    return()=>clearInterval(id);
  },[projects]);
  return <div className="project-carousel-wrap"><div className="project-carousel-controls"><button onClick={()=>go(-1)}>‹</button><button onClick={()=>go(1)}>›</button></div><div className="project-carousel-track" ref={r}>{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></div>;
}
