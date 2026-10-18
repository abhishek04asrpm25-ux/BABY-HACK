import { useState } from "react";

function DreamLab() {
  const [selectedDream, setSelectedDream] = useState(null);
const [generatedDream, setGeneratedDream] = useState(null);
const [dreamNumber, setDreamNumber] = useState(27);

  const dreams = {
    calm: {
      icon: "☁️",
      name: "CALM",
      color: "soft",
      text: "Pip has packed a soft cloud journey for a peaceful night.",
      detail:
        "A quiet sky, slow-moving clouds, and just enough moonlight to help your thoughts settle.",
    },

    adventure: {
      icon: "✨",
      name: "ADVENTURE",
      color: "bright",
      text: "Pip has prepared a rooftop adventure beneath a sky full of stars.",
      detail:
        "Tonight's route crosses sleepy rooftops, glowing windows, and a trail of stars leading somewhere unknown.",
    },

    mystery: {
      icon: "🌙",
      name: "MYSTERY",
      color: "mysterious",
      text: "Pip has packed a moonlit path through a quiet cloud forest.",
      detail:
        "Something is waiting beyond the silver trees. Pip won't say what it is — that's part of the dream.",
    },

    happiness: {
      icon: "🌈",
      name: "HAPPINESS",
      color: "happy",
      text: "Pip has prepared a bright little dream filled with laughter and warm sunshine.",
      detail:
        "Everything feels lighter here: warm sunlight, impossible colors, and the kind of laughter that makes you forget the time.",
    },
  };

  const createDream = () => {
  if (!selectedDream) return;

  setDreamNumber((number) => number + 1);
  setGeneratedDream(selectedDream);
};

  const currentDream = generatedDream
  ? dreams[generatedDream]
  : null;

  return (
    <main className="dream-lab-page">
      <section className="dream-lab-hero">
        <div className="dream-lab-heading">
          <p className="section-eyebrow">
            PIP'S DREAM LAB
          </p>

          <h1>
            What kind of dream
            <br />
            should Pip deliver?
          </h1>

          <p className="dream-intro">
            Choose a feeling. Pip will prepare the rest.
          </p>
        </div>

        <div className="dream-machine">
          <div className="machine-orbit orbit-one"></div>
          <div className="machine-orbit orbit-two"></div>

          <div className="machine-core">
            <span>✦</span>
            <small>DREAM</small>
            <strong>LAB</strong>
          </div>
        </div>
      </section>

      <section className="dream-selector">
        <div className="dream-selector-header">
          <p className="section-eyebrow">
            STEP 01
          </p>

          <h2>Choose your feeling</h2>
        </div>

        <div className="dream-options">
          {Object.entries(dreams).map(([key, dream]) => (
            <button
              key={key}
              type="button"
              className={`dream-option ${
                selectedDream === key
                  ? "dream-selected"
                  : ""
              }`}
              onClick={() => {
  setSelectedDream(key);
  setGeneratedDream(null);
}}
            >
              <span className="dream-icon">
                {dream.icon}
              </span>

              <span className="dream-option-name">
                {dream.name}
              </span>

              <span className="dream-option-arrow">
                ↗
              </span>
            </button>
          ))}
        </div>

        <div className="dream-create-area">
          <p className="section-eyebrow">
            STEP 02
          </p>

          <button
            type="button"
            className="create-dream-button"
            onClick={createDream}
            disabled={!selectedDream}
          >
            {selectedDream
              ? "CREATE MY DREAM ✦"
              : "CHOOSE A FEELING FIRST"}
          </button>
        </div>
      </section>

      {currentDream && (
       <section
  key={`${generatedDream}-${dreamNumber}`}
  className={`dream-result dream-result-${currentDream.color}`}
>
          <div className="dream-result-top">
            <p className="dream-number">
              DREAM #
              {String(dreamNumber).padStart(3, "0")}
            </p>

            <span className="dream-status">
              ● READY FOR DELIVERY
            </span>
          </div>

          <div className="dream-result-content">
            <div className="dream-result-icon">
              {currentDream.icon}
            </div>

            <div>
              <p className="section-eyebrow">
                DREAM SELECTED
              </p>

              <h2>{currentDream.name}</h2>

              <p className="dream-result-text">
                {currentDream.text}
              </p>

              <p className="dream-detail">
                {currentDream.detail}
              </p>
            </div>
          </div>

          <div className="dream-delivery">
            <span>✦</span>
            <span>
              Pip has prepared your dream.
            </span>
            <span>✦</span>
          </div>
        </section>
      )}
    </main>
  );
}

export default DreamLab;