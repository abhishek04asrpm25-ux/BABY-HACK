import { useState } from "react";
import { Music, Moon, Cloud, ArrowUpRight } from "lucide-react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      number: "01",
      icon: Music,
      title: "Lullaby Lab",
      category: "SOUND DESIGN",
      description:
        "Pip designs tiny lullabies that help sleepy creatures drift into their dreams.",
      extra:
        "Every lullaby starts with three ingredients: a gentle melody, a sleepy rhythm, and a little midnight magic.",
    },
    {
      number: "02",
      icon: Moon,
      title: "Nightlight Collection",
      category: "AMBIENT DESIGN",
      description:
        "Warm bedside lights designed to make every midnight feel a little safer.",
      extra:
        "Each nightlight is designed to glow softly without disturbing the dreams already in progress.",
    },
    {
      number: "03",
      icon: Cloud,
      title: "Dream Delivery Routes",
      category: "DREAM LOGISTICS",
      description:
        "Pip plans magical rooftop routes to deliver carefully crafted dreams.",
      extra:
        "Pip studies the moon, clouds, rooftops, and wind patterns before choosing the perfect delivery route.",
    },
  ];

  const handleProjectClick = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <div className="projects-heading">
          <p className="section-eyebrow">PIP'S WORKSHOP</p>

          <h1>Things I make after bedtime.</h1>

          <p className="projects-intro">
            Welcome to Pip's workshop — where small ideas become
            strange little creations after everyone goes to sleep.
          </p>
        </div>

        <div className="workshop-status">
          <span className="status-dot"></span>
          WORKSHOP STATUS: OPEN
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isActive = activeProject === index;

            return (
              <article
                className={`project-card ${
                  isActive ? "project-active" : ""
                }`}
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <Icon
                    className="project-icon"
                    size={42}
                    strokeWidth={1.4}
                  />
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h2>{project.title}</h2>

                <p className="project-description">
                  {project.description}
                </p>

                {isActive && (
                  <div className="project-extra">
                    <span>✦</span>
                    <p>{project.extra}</p>
                  </div>
                )}

                <button
                  type="button"
                  className="project-button"
                  onClick={() => handleProjectClick(index)}
                  aria-expanded={isActive}
                >
                  <span>
                    {isActive ? "Close" : "Explore"}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={isActive ? "arrow-rotate" : ""}
                  />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="projects-footer">
        <p className="section-eyebrow">MORE DREAMS IN PROGRESS</p>

        <h2>
          Pip's workshop is never really finished.
        </h2>

        <p>
          Some ideas are still waiting for their turn to become
          something real.
        </p>
      </section>
    </main>
  );
}

export default Projects;