function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="section-eyebrow">THE HUMAN BEHIND PIP</p>

        <h1>Hi, I'm Abhishek.</h1>

        <p className="about-intro">
          A second-year B.Tech student exploring the intersection
          of software, AI/ML, electronics, and creative web experiences.
        </p>

        <div className="about-card">
          <div className="about-card-header">
            <span className="about-dot"></span>
            <span>ABOUT THE CREATOR</span>
          </div>

          <p>
            I enjoy turning ideas into interactive digital experiences.
            Pip started as a creative experiment — a portfolio that feels
            more like a small world than a collection of pages.
          </p>

          <p>
            My current interests include web development, AI/ML,
            programming, and electronics. I am continuously learning,
            experimenting, and building projects that connect these areas.
          </p>
        </div>
      </section>

      <section className="about-skills">
        <p className="section-eyebrow">WHAT I LIKE BUILDING</p>

        <div className="interest-grid">
          <div className="interest-card">
            <span>⌘</span>
            <h3>Web Development</h3>
            <p>Interactive websites and creative user experiences.</p>
          </div>

          <div className="interest-card">
            <span>✦</span>
            <h3>AI / ML</h3>
            <p>Exploring intelligent systems and practical AI ideas.</p>
          </div>

          <div className="interest-card">
            <span>⚡</span>
            <h3>Electronics</h3>
            <p>Learning how hardware and software can work together.</p>
          </div>

          <div className="interest-card">
            <span>◉</span>
            <h3>Creative Interfaces</h3>
            <p>Building interfaces that are memorable and fun to explore.</p>
          </div>
        </div>
      </section>

      <section className="about-note">
        <div>
          <p className="section-eyebrow">WHY PIP?</p>

          <h2>
            Because a portfolio doesn't have to feel like a résumé.
          </h2>

          <p>
            Pip represents my approach to learning: stay curious,
            experiment often, and turn small ideas into something people
            can experience.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;