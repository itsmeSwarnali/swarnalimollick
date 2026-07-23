"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteConfig";

const links = [
  ["About", "#about"], ["Projects", "#projects"], ["Research", "#research"],
  ["Experience", "#experience"], ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"]
];

export default function Header(){
  const [open,setOpen]=useState(false);
  const [dark,setDark]=useState(true);
  useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light";},[dark]);
  return <header className="site-header"><div className="container nav-wrap">
    <Link href="/#home" className="brand">SM<span>.</span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label,href])=><Link key={href} href={`/${href}`}>{label}</Link>)}</nav>
    <div className="nav-actions">
      <button className="icon-btn" onClick={()=>setDark(!dark)} aria-label="Toggle theme">{dark?"☀":"☾"}</button>
      <a className="btn btn-small" href={siteConfig.cvPath} download>Download CV</a>
      <button className="icon-btn menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?"×":"☰"}</button>
    </div>
  </div>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label,href])=><Link onClick={()=>setOpen(false)} key={href} href={`/${href}`}>{label}</Link>)}</nav>}</header>
}
