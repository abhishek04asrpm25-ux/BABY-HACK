import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useSite } from "./context/SiteContext";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import DreamLabPage from "./pages/DreamLabPage";
import StoryPage from "./pages/StoryPage";
import About from "./pages/About";

function App() {
  const {
    dreamMode,
    soundOn,
    toggleDreamMode,
    toggleSound,
  } = useSite();

  return (
    <BrowserRouter>
  <div className={dreamMode ? "app dream-mode" : "app day-mode"}>
    <nav className={`site-nav ${dreamMode ? "nav-dream-mode" : ""}`}>
  <div className="nav-logo">PIP ✦</div>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/dream-lab">Dream Lab</Link>
    <Link to="/story">Story</Link>
    <Link to="/about">About</Link>
  </div>

  <div className="nav-controls">
    <button
      type="button"
      className="nav-control"
      onClick={toggleSound}
      aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
    >
      {soundOn ? "🔊" : "🔇"}
    </button>

    <button
      type="button"
      className="nav-control"
      onClick={toggleDreamMode}
      aria-label={dreamMode ? "Switch to day mode" : "Switch to dream mode"}
    >
      {dreamMode ? "☀️" : "🌙"}
    </button>
  </div>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/dream-lab" element={<DreamLabPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;