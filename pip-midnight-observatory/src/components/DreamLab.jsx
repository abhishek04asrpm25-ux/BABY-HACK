import { useState } from "react";

function DreamLab() {
  const [selectedDream, setSelectedDream] = useState(null);
  const [dreamNumber, setDreamNumber] = useState(27);

  const dreams = {
    calm: {
      icon: "☁️",
      name: "CALM",
      text: "Pip has packed a soft cloud journey for a peaceful night.",
    },
    adventure: {
      icon: "✨",
      name: "ADVENTURE",
      text: "Pip has prepared a rooftop adventure beneath a sky full of stars.",
    },
    mystery: {
      icon: "🌙",
      name: "MYSTERY",
      text: "Pip has packed a moonlit path through a quiet cloud forest.",
    },
    happiness: {
      icon: "🌈",
      name: "HAPPINESS",
      text: "Pip has prepared a bright little dream filled with laughter and warm sunshine.",
    },
  };

  const createDream = () => {
    if (!selectedDream) return;

    setDreamNumber((number) => number + 1);
  };

  return (
    <section className="dream-lab" id="dream-lab">
      <div className="dream-lab-inner">
        <p className="section-eyebrow">PIP'S DREAM LAB</p>

        <h2>What kind of dream should Pip deliver?</h2>

        <p className="dream-intro">
          Choose a feeling. Pip will prepare the rest.
        </p>

        <div className="dream-options">
          {Object.entries(dreams).map(([key, dream]) => (
            <button
              key={key}
              type="button"
              className={`dream-option ${
                selectedDream === key ? "dream-selected" : ""
              }`}
              onClick={() => setSelectedDream(key)}
            >
              <span className="dream-icon">{dream.icon}</span>
              <span>{dream.name}</span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="create-dream-button"
          onClick={createDream}
          disabled={!selectedDream}
        >
          CREATE DREAM ✦
        </button>

        {selectedDream && (
          <div className="dream-result">
            <p className="dream-number">
              DREAM #{String(dreamNumber).padStart(3, "0")}
            </p>

            <div className="dream-result-icon">
              {dreams[selectedDream].icon}
            </div>

            <h3>{dreams[selectedDream].name}</h3>

            <p>{dreams[selectedDream].text}</p>

            <span className="dream-status">
              DREAM STATUS: READY ✦
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default DreamLab;
