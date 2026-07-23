import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";
import { projects } from "@/data/projects";

export const metadata={metadataBase:new URL(siteConfig.url),title:{default:"Swarnali Mollick | Data Scientist & Applied AI Engineer",template:"%s | Swarnali Mollick"},description:siteConfig.description,alternates:{canonical:"/"},openGraph:{title:"Swarnali Mollick | Data Scientist & Applied AI Engineer",description:siteConfig.description,url:siteConfig.url,type:"website"},twitter:{card:"summary_large_image",title:"Swarnali Mollick | Data Scientist & Applied AI Engineer",description:siteConfig.description}};

export default function RootLayout({children}){const person={"@context":"https://schema.org","@type":"Person",name:siteConfig.name,url:siteConfig.url,jobTitle:siteConfig.title,alumniOf:"Ca' Foscari University of Venice",knowsAbout:["Data Science","Machine Learning","Applied AI","Natural Language Processing"]};const portfolio={"@context":"https://schema.org","@type":"ItemList",itemListElement:projects.map((p,i)=>({"@type":"ListItem",position:i+1,url:`${siteConfig.url}/projects/${p.slug}`,name:p.title}))};return <html lang="en" data-theme="dark"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(portfolio)}}/></body></html>}
