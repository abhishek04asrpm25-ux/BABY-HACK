
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
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
        <nav
          className={`site-nav ${dreamMode ? "nav-dream-mode" : ""}`}
          aria-label="Main navigation"
        >
          <div className="nav-logo">PIP {"\u2726"}</div>

          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/dream-lab">Dream Lab</NavLink>
            <NavLink to="/story">Story</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>

          <div className="nav-controls">
            <button
              type="button"
              className="nav-control"
              onClick={toggleSound}
              aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
              title={soundOn ? "Turn sound off" : "Turn sound on"}
            >
              {soundOn ? "\uD83D\uDD0A" : "\uD83D\uDD07"}
            </button>

            <button
              type="button"
              className="nav-control"
              onClick={toggleDreamMode}
              aria-label={
                dreamMode ? "Switch to day mode" : "Switch to dream mode"
              }
              title={dreamMode ? "\u2600\uFE0F" : "\uD83C\uDF19"}
            >
              {dreamMode ? "\u2600\uFE0F" : "\uD83C\uDF19"}
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/dream-lab" element={<DreamLabPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <section className="not-found">
                <h1>Lost in the Observatory? {"\u2726"}</h1>
                <p>This page hasn't been discovered yet.</p>
                <NavLink to="/">Return Home</NavLink>
              </section>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
