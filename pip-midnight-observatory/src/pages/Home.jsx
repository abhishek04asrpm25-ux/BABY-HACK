import pipAvatar from "../assets/pip_avatar_cloud.webp";
import { useSite } from "../context/SiteContext";
function Home() {
  const { handlePipClick, pipClicks, secretFound } = useSite();
  const pipMood =
  pipClicks >= 5
    ? "excited"
    : pipClicks >= 3
    ? "curious"
    : pipClicks >= 1
    ? "happy"
    : "sleepy";

const pipMessage = {
  sleepy: "Pip is waiting for a dream explorer...",
  happy: "Pip is happy you're here! ✨",
  curious: "Pip thinks there might be something hidden nearby...",
  excited: "Pip knows you've discovered something special! 🌟",
}[pipMood];

  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          MIDNIGHT NURSERY {"\u00B7"} DREAM DEPARTMENT
        </p>

        <h1>Meet Pip.</h1>

        <p className="role">
          Junior Dream Engineer
        </p>

        <p className="tagline">
          I build the dreams you fall asleep inside.
        </p>

        
{secretFound && (
  <p className="pip-secret" role="status">
    ✨ You found Pip's secret! You are a true dream explorer.
  </p>
)}

{!secretFound && pipClicks > 0 && (
  <p className="pip-message" role="status">
    {pipClicks < 5
      ? `Pip is happy you visited! ${5 - pipClicks} more ${
          5 - pipClicks === 1 ? "click" : "clicks"
        } to discover a secret.`
      : "You discovered Pip's secret!"}
  </p>
)}
      </div>

      <div className="pip-container">
        <div className="pip-avatar-wrapper">
          <img
  src={pipAvatar}
  alt="Pip, the gentle Skull Baby"
  className="pip-avatar"
  onClick={handlePipClick}
  role="button"
  tabIndex={0}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handlePipClick();
    }
  }}
  style={{ cursor: "pointer" }}
/>
        </div>
        <p className={`pip-mood pip-mood-${pipMood}`} role="status">
  {pipMessage}
</p>
      </div>

      <p className="scroll-hint">
        {"\u2193"} explore Pip's world {"\u2193"}
      </p>
    </main>
  );
}

export default Home;