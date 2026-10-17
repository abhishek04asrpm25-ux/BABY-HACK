import { Music, Moon, Cloud } from "lucide-react";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Things I make after bedtime.</h2>

      <div className="projects-grid">
        <article className="project-card">
          <Music size={40} />
          <p>01</p>
          <h3>Lullaby Lab</h3>
          <p>
            Pip designs tiny lullabies that help sleepy creatures drift into
            their dreams.
          </p>
          <button>Explore ✦</button>
        </article>

        <article className="project-card">
          <Moon size={40} />
          <p>02</p>
          <h3>Nightlight Collection</h3>
          <p>
            Warm bedside lights designed to make every midnight feel a little
            safer.
          </p>
          <button>Explore ✦</button>
        </article>

        <article className="project-card">
          <Cloud size={40} />
          <p>03</p>
          <h3>Dream Delivery Routes</h3>
          <p>
            Pip plans magical rooftop routes to deliver carefully crafted
            dreams.
          </p>
          <button>Explore ✦</button>
        </article>
      </div>
    </section>
  );
}

export default Projects;