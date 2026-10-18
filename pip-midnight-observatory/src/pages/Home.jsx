import pipAvatar from "../assets/pip_avatar_cloud.webp";

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          MIDNIGHT NURSERY · DREAM DEPARTMENT
        </p>

        <h1>Meet Pip.</h1>

        <p className="role">
          Junior Dream Engineer
        </p>

        <p className="tagline">
          I build the dreams you fall asleep inside.
        </p>

        <button className="dream-button">
          Enter the Dream Lab ✦
        </button>
      </div>

      <div className="pip-container">
        <div className="pip-avatar-wrapper">
          <img
            src={pipAvatar}
            alt="Pip, the gentle Skull Baby"
            className="pip-avatar"
          />
        </div>
      </div>

      <p className="scroll-hint">
        ↓ explore Pip's world ↓
      </p>
    </main>
  );
}

export default Home;