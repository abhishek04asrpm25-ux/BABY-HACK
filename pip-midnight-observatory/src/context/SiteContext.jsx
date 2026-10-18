import { createContext, useContext, useState } from "react";
import confetti from "canvas-confetti";

const SiteContext = createContext();

export function SiteProvider({ children }) {
  const [dreamMode, setDreamMode] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [pipClicks, setPipClicks] = useState(0);
  const [secretFound, setSecretFound] = useState(false);

  const playChime = () => {
    if (!soundOn) return;

    const AudioContext =
      window.AudioContext || window.webkitAudioContext;

    const audioContext = new AudioContext();

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
      660,
      audioContext.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      880,
      audioContext.currentTime + 0.12
    );

    gainNode.gain.setValueAtTime(
      0.0001,
      audioContext.currentTime
    );

    gainNode.gain.exponentialRampToValueAtTime(
      0.08,
      audioContext.currentTime + 0.02
    );

    gainNode.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContext.currentTime + 0.18
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.18);
  };

  const toggleDreamMode = () => {
    setDreamMode((current) => !current);
    playChime();
  };

  const toggleSound = () => {
    setSoundOn((current) => !current);
  };

  const handlePipClick = () => {
    const nextClicks = pipClicks + 1;

    setPipClicks(nextClicks);

    if (nextClicks === 5) {
      setSecretFound(true);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: {
          y: 0.6,
        },
      });

      playChime();
    }
  };

  return (
    <SiteContext.Provider
      value={{
        dreamMode,
        soundOn,
        pipClicks,
        secretFound,
        playChime,
        toggleDreamMode,
        toggleSound,
        handlePipClick,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  return useContext(SiteContext);
}