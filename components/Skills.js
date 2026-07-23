import { skillGroups } from "@/data/skills";

export default function Skills(){
  return <section id="skills" className="section">
    <div className="container">
      <p className="eyebrow">Core Stack</p>
      <h2>Skills I use in real projects</h2>
      <p className="section-lead">A focused view of the tools and methods most relevant to Data Science, Machine Learning and Applied AI roles.</p>
      <div className="skills-grid">
        {skillGroups.map(group=><article key={group.title}>
          <h3>{group.title}</h3>
          <div className="skill-tags">{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div>
        </article>)}
      </div>
    </div>
  </section>
}
