"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects, label, autoPlay = false }) {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);

  const move = (direction) => {
    const track = ref.current;
    if (!track) return;
    const first = track.querySelector(".project-card");
    const amount = (first?.getBoundingClientRect().width || 360) + 20;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 12;
    const atStart = track.scrollLeft <= 12;

    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction < 0 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!autoPlay || paused || projects.length < 2) return undefined;
    const id = window.setInterval(() => move(1), 4800);
    return () => window.clearInterval(id);
  }, [autoPlay, paused, projects.length]);

  return (
    <div
      className="project-carousel-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {projects.length > 1 && (
        <div className="project-carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label={`Scroll ${label} projects left`}>‹</button>
          <button type="button" onClick={() => move(1)} aria-label={`Scroll ${label} projects right`}>›</button>
        </div>
      )}
      <div className="project-carousel-track" ref={ref} aria-live="polite">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}
