"use client";

import { useState } from "react";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectShowcase({ categories }) {
  const [activeName, setActiveName] = useState(categories[0]?.name || "");
  const activeCategory = categories.find((category) => category.name === activeName) || categories[0];

  if (!activeCategory) return null;

  return (
    <div className="project-showcase">
      <div className="project-tabs" role="tablist" aria-label="Project categories">
        {categories.map((category) => {
          const active = category.name === activeCategory.name;
          return (
            <button
              key={category.name}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls="active-project-category"
              className={`project-tab${active ? " active" : ""}`}
              onClick={() => setActiveName(category.name)}
            >
              <strong>{category.name}</strong>
              <span>{category.shortDescription || category.description}</span>
            </button>
          );
        })}
      </div>

      <div id="active-project-category" role="tabpanel" className="project-panel">
        <div className="category-heading">
          <div>
            <h3>{activeCategory.name}</h3>
            {activeCategory.description&&<p>{activeCategory.description}</p>}
          </div>
          <span>
            {activeCategory.projects.length} project{activeCategory.projects.length > 1 ? "s" : ""}
          </span>
        </div>
        <ProjectCarousel
          key={activeCategory.name}
          projects={activeCategory.projects}
          label={activeCategory.name}
          autoPlay
        />
      </div>
    </div>
  );
}
