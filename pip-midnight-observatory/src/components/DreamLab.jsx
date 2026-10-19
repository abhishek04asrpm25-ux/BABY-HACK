import { useState } from "react";

const dreams = {
  calm: {
    icon: "\u2601\uFE0F",
    name: "CALM",
    color: "soft",
    location: "CLOUD GARDEN",
    stories: [
      {
        text: "Pip has packed a soft cloud journey for a peaceful night.",
        detail:
          "A quiet sky, slow-moving clouds, and gentle moonlight create a little space to breathe.",
      },
      {
        text: "Pip invites you to a garden where the stars grow like flowers.",
        detail:
          "Follow a silver path through glowing petals while the night breeze carries your worries away.",
      },
      {
        text: "Pip has found a tiny lighthouse above the clouds.",
        detail:
          "Its warm light travels across a silent sky, guiding every wandering cloud safely home.",
      },
    ],
  },

  adventure: {
    icon: "\u2728",
    name: "ADVENTURE",
    color: "bright",
    location: "STAR EXPRESS",
    stories: [
      {
        text: "Pip has prepared a rooftop adventure beneath a sky full of stars.",
        detail:
          "Cross sleepy rooftops and glowing bridges to discover a secret observatory.",
      },
      {
        text: "Pip has discovered a train that travels between constellations.",
        detail:
          "Every station opens onto a new world, and your next destination is written in the stars.",
      },
      {
        text: "Pip invites you to explore a floating island beyond the moon.",
        detail:
          "Discover upside-down waterfalls, unusual creatures, and a map that draws itself as you travel.",
      },
    ],
  },

  mystery: {
    icon: "\uD83C\uDF19",
    name: "MYSTERY",
    color: "mysterious",
    location: "MOON FOREST",
    stories: [
      {
        text: "Pip has packed a moonlit path through a quiet cloud forest.",
        detail:
          "Silver trees whisper secrets, and a trail of tiny lights leads somewhere unknown.",
      },
      {
        text: "Pip has found a mysterious door hidden inside a falling star.",
        detail:
          "Behind it waits a room full of floating clocks, forgotten maps, and one unanswered question.",
      },
      {
        text: "Pip noticed that one star is missing from the night sky.",
        detail:
          "Follow the clues left by the moon and discover why the smallest star has disappeared.",
      },
    ],
  },

  happiness: {
    icon: "\uD83C\uDF08",
    name: "HAPPINESS",
    color: "happy",
    location: "RAINBOW ISLAND",
    stories: [
      {
        text: "Pip has prepared a bright little dream filled with laughter and sunshine.",
        detail:
          "Warm sunlight, impossible colors, and cheerful clouds turn an ordinary day into something magical.",
      },
      {
        text: "Pip invites you to a festival floating above a rainbow.",
        detail:
          "Music fills the sky, lanterns dance in the breeze, and every cloud seems to be smiling.",
      },
      {
        text: "Pip has discovered a tiny bakery run by friendly moon rabbits.",
        detail:
          "Sweet star-shaped treats appear from the oven while the whole village celebrates together.",
      },
    ],
  },
};

const pipReactions = {
  calm: "Pip whispers: Take a deep breath. Your peaceful dream is ready.",
  adventure:
    "Pip cheers: Adventure awaits! Let's explore the impossible.",
  mystery:
    "Pip whispers: A little mystery is hiding among the stars.",
  happiness:
    "Pip smiles: Let's fill your dream with color and joy.",
};

function DreamLab() {
  const [selectedDream, setSelectedDream] = useState(null);
  const [generatedDream, setGeneratedDream] = useState(null);
  const [nextDreamNumber, setNextDreamNumber] = useState(1);
  const [dreamHistory, setDreamHistory] = useState([]);
  const [passportOpen, setPassportOpen] = useState(false);
  const [pipMessage, setPipMessage] = useState("");

  const createDream = () => {
    if (!selectedDream) return;

    const options = dreams[selectedDream].stories;

    const availableStories = options.filter(
      (story) =>
        story !== generatedDream?.story ||
        selectedDream !== generatedDream?.key
    );

    const storyPool =
      availableStories.length > 0 ? availableStories : options;

    const story =
      storyPool[Math.floor(Math.random() * storyPool.length)];

    const newDream = {
      id: nextDreamNumber,
      number: nextDreamNumber,
      key: selectedDream,
      name: dreams[selectedDream].name,
      icon: dreams[selectedDream].icon,
      color: dreams[selectedDream].color,
      location: dreams[selectedDream].location,
      story,
    };

    setGeneratedDream(newDream);
    setDreamHistory((history) => [newDream, ...history]);
    setNextDreamNumber((number) => number + 1);
    setPipMessage(pipReactions[selectedDream]);
    setPassportOpen(true);
  };

  const togglePassport = () => {
    setPassportOpen((open) => !open);
  };

  const isDiscovered = (key) => {
    return dreamHistory.some((dream) => dream.key === key);
  };

  return (
    <main className="dream-lab-page">
      {/* HERO */}

      <section className="dream-lab-hero">
        <div className="dream-lab-heading">
          <p className="section-eyebrow">PIP'S DREAM LAB</p>

          <h1>
            What kind of dream
            <br />
            should Pip deliver?
          </h1>

          <p className="dream-intro">
            Choose a feeling. Pip will prepare the rest.
          </p>
        </div>

        <div className="dream-machine" aria-hidden="true">
          <div className="machine-orbit orbit-one"></div>
          <div className="machine-orbit orbit-two"></div>

          <div className="machine-core">
            <span>{"\u2726"}</span>
            <small>DREAM</small>
            <strong>LAB</strong>
          </div>
        </div>
      </section>

      {/* DREAM SELECTOR */}

      <section className="dream-selector">
        <div className="dream-selector-header">
          <p className="section-eyebrow">STEP 01</p>

          <h2>Choose your feeling</h2>
        </div>

        <div className="dream-options">
          {Object.entries(dreams).map(([key, dream]) => (
            <button
              key={key}
              type="button"
              className={`dream-option ${
                selectedDream === key ? "dream-selected" : ""
              }`}
              onClick={() => {
                setSelectedDream(key);
                setPipMessage("");
              }}
              aria-pressed={selectedDream === key}
            >
              <span className="dream-icon">{dream.icon}</span>

              <span className="dream-option-name">
                {dream.name}
              </span>

              <span className="dream-option-arrow">
                {"\u2192"}
              </span>
            </button>
          ))}
        </div>

        <div className="dream-create-area">
          <p className="section-eyebrow">STEP 02</p>

          <button
            type="button"
            className="create-dream-button"
            onClick={createDream}
            disabled={!selectedDream}
          >
            {selectedDream
              ? "CREATE MY DREAM \u2726"
              : "CHOOSE A FEELING FIRST"}
          </button>
        </div>

        {pipMessage && (
          <p
            className="pip-reaction"
            role="status"
            aria-live="polite"
          >
            {pipMessage}
          </p>
        )}
      </section>

      {/* GENERATED DREAM */}

      {generatedDream && (
        <>
          <div className="passport-button-area">
            <button
              type="button"
              className="passport-button"
              onClick={togglePassport}
              aria-expanded={passportOpen}
            >
              {passportOpen
                ? "CLOSE DREAM PASSPORT"
                : "OPEN DREAM PASSPORT \u2726"}
            </button>
          </div>

          <section
            key={generatedDream.id}
            className={`dream-result dream-result-${generatedDream.color}`}
            aria-live="polite"
          >
            <div className="dream-result-top">
              <p className="dream-number">
                DREAM #
                {String(generatedDream.number).padStart(3, "0")}
              </p>

              <span className="dream-status">
                {"\u25CF"} READY FOR DELIVERY
              </span>
            </div>

            <div className="dream-result-content">
              <div className="dream-result-icon">
                {generatedDream.icon}
              </div>

              <div>
                <p className="section-eyebrow">
                  YOUR DREAM
                </p>

                <h2>{generatedDream.name}</h2>

                <p className="dream-result-text">
                  {generatedDream.story.text}
                </p>

                <p className="dream-detail">
                  {generatedDream.story.detail}
                </p>
              </div>
            </div>

            <div className="dream-delivery">
              <span>{"\u2726"}</span>

              <span>
                Pip has prepared your dream.
              </span>

              <span>{"\u2726"}</span>
            </div>
          </section>
        </>
      )}

      {/* DREAM PASSPORT */}

      {generatedDream && passportOpen && (
        <section
          className="dream-passport"
          aria-label="Dream Passport"
        >
          <div className="passport-stars">
            {"\u2726"} {"\u2727"} {"\u2726"}
          </div>

          <p className="section-eyebrow">
            PIP'S DREAM PASSPORT
          </p>

          <h2>
            DREAM #
            {String(generatedDream.number).padStart(3, "0")}
          </h2>

          <div className="passport-icon">
            {generatedDream.icon}
          </div>

          <p className="passport-mood">
            {generatedDream.name}
          </p>

          <div className="passport-story">
            <p>{generatedDream.story.text}</p>
          </div>

          <p className="passport-detail">
            {generatedDream.story.detail}
          </p>

          <div className="passport-footer">
            <span>
              {"\u2726"} DREAM DISCOVERED
            </span>

            <span>
              PIP'S OBSERVATORY
            </span>
          </div>
        </section>
      )}

      {/* DREAM COLLECTION */}

      {dreamHistory.length > 0 && (
        <section className="dream-history">
          <p className="section-eyebrow">
            YOUR COLLECTION
          </p>

          <h2>Dreams you have discovered</h2>

          <p className="dream-intro">
            Every dream you've created during this visit.
          </p>

          <div className="dream-history-list">
            {dreamHistory.map((dream) => (
              <button
                type="button"
                key={dream.id}
                className="dream-history-item"
                onClick={() => {
                  setGeneratedDream(dream);
                  setPassportOpen(true);
                  setPipMessage(pipReactions[dream.key]);
                }}
              >
                <span className="dream-history-icon">
                  {dream.icon}
                </span>

                <span className="dream-history-copy">
                  <strong>
                    DREAM #
                    {String(dream.number).padStart(3, "0")}
                    {" \u2014 "}
                    {dream.name}
                  </strong>

                  <span>
                    {dream.story.text}
                  </span>
                </span>

                <span aria-hidden="true">
                  {"\u2192"}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* DREAM MAP */}

      <section className="dream-map-section">
        <div className="dream-map-heading">
          <p className="section-eyebrow">
            STEP 03
          </p>

          <h2>
            Pip's Dream Observatory
          </h2>

          <p className="dream-intro">
            Create dreams to discover new places in Pip's sky.
          </p>
        </div>

        <div className="dream-map">
          <div className="dream-map-center">
            <span className="map-center-star">
              {"\u2726"}
            </span>

            <strong>
              PIP'S
              <br />
              OBSERVATORY
            </strong>

            <small>
              DREAM SKY
            </small>
          </div>

          <button
            type="button"
            className={`dream-map-node map-calm ${
              isDiscovered("calm")
                ? "map-node-discovered"
                : ""
            }`}
            onClick={() => {
              setSelectedDream("calm");

              if (isDiscovered("calm")) {
                const dream = dreamHistory.find(
                  (item) => item.key === "calm"
                );

                if (dream) {
                  setGeneratedDream(dream);
                  setPassportOpen(true);
                  setPipMessage(
                    pipReactions.calm
                  );
                }
              }
            }}
          >
            <span className="map-node-icon">
              {"\u2601\uFE0F"}
            </span>

            <strong>
              CLOUD GARDEN
            </strong>

            <small>
              {isDiscovered("calm")
                ? "DISCOVERED"
                : "UNDISCOVERED"}
            </small>
          </button>

          <button
            type="button"
            className={`dream-map-node map-adventure ${
              isDiscovered("adventure")
                ? "map-node-discovered"
                : ""
            }`}
            onClick={() => {
              setSelectedDream("adventure");

              if (isDiscovered("adventure")) {
                const dream = dreamHistory.find(
                  (item) => item.key === "adventure"
                );

                if (dream) {
                  setGeneratedDream(dream);
                  setPassportOpen(true);
                  setPipMessage(
                    pipReactions.adventure
                  );
                }
              }
            }}
          >
            <span className="map-node-icon">
              {"\u2728"}
            </span>

            <strong>
              STAR EXPRESS
            </strong>

            <small>
              {isDiscovered("adventure")
                ? "DISCOVERED"
                : "UNDISCOVERED"}
            </small>
          </button>

          <button
            type="button"
            className={`dream-map-node map-mystery ${
              isDiscovered("mystery")
                ? "map-node-discovered"
                : ""
            }`}
            onClick={() => {
              setSelectedDream("mystery");

              if (isDiscovered("mystery")) {
                const dream = dreamHistory.find(
                  (item) => item.key === "mystery"
                );

                if (dream) {
                  setGeneratedDream(dream);
                  setPassportOpen(true);
                  setPipMessage(
                    pipReactions.mystery
                  );
                }
              }
            }}
          >
            <span className="map-node-icon">
              {"\uD83C\uDF19"}
            </span>

            <strong>
              MOON FOREST
            </strong>

            <small>
              {isDiscovered("mystery")
                ? "DISCOVERED"
                : "UNDISCOVERED"}
            </small>
          </button>

          <button
            type="button"
            className={`dream-map-node map-happiness ${
              isDiscovered("happiness")
                ? "map-node-discovered"
                : ""
            }`}
            onClick={() => {
              setSelectedDream("happiness");

              if (isDiscovered("happiness")) {
                const dream = dreamHistory.find(
                  (item) => item.key === "happiness"
                );

                if (dream) {
                  setGeneratedDream(dream);
                  setPassportOpen(true);
                  setPipMessage(
                    pipReactions.happiness
                  );
                }
              }
            }}
          >
            <span className="map-node-icon">
              {"\uD83C\uDF08"}
            </span>

            <strong>
              RAINBOW ISLAND
            </strong>

            <small>
              {isDiscovered("happiness")
                ? "DISCOVERED"
                : "UNDISCOVERED"}
            </small>
          </button>
        </div>

        <div className="dream-map-progress">
          <span>
            {"\u2726"}
          </span>

          <strong>
            {dreamHistory.length > 0
              ? `${new Set(
                  dreamHistory.map(
                    (dream) => dream.key
                  )
                ).size} / 4 dream worlds discovered`
              : "0 / 4 dream worlds discovered"}
          </strong>

          <span>
            {"\u2726"}
          </span>
        </div>
      </section>
    </main>
  );
}

export default DreamLab;