import { useState } from "react";
import Header from "./components/Header";
import Silhouette from "./components/Silhouette";
import BaseStats from "./components/BaseStats";
import HintsList from "./components/HintsList";
import GuessHistory from "./components/GuessHistory";
import GuessInput from "./components/GuessInput";
import fighters from "./data/fighters";

// 👉 For now: hardcode the answer (we'll randomize later)
const ANSWER = fighters.find(f => f.name === "Charles Oliveira");

export default function App() {
  const [guesses, setGuesses] = useState([]);
  const [hintsRevealed, setHintsRevealed] = useState(1);
  const [gameStatus, setGameStatus] = useState("playing"); // "won" | "lost"
  const MAX_GUESSES = 6;

  function handleGuess(name) {
    if (gameStatus !== "playing") return;

    const fighter = fighters.find(f => f.name === name);
    if (!fighter) return;

    const feedback = {
      weightClass: fighter.weightClass === ANSWER.weightClass,
      country: fighter.country === ANSWER.country,
      hasTitleWin: fighter.hasTitleWin === ANSWER.hasTitleWin,
    };

    const isCorrect = fighter.name === ANSWER.name;

    const newGuess = {
      name: fighter.name,
      feedback,
      correct: isCorrect,
    };

    const updatedGuesses = [...guesses, newGuess];
    setGuesses(updatedGuesses);

    if (isCorrect) {
      setGameStatus("won");
      return;
    }

    if (updatedGuesses.length >= MAX_GUESSES) {
      setGameStatus("lost");
      return;
    }

    // unlock next hint
    setHintsRevealed(prev => prev + 1);
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-28 max-w-lg mx-auto w-full">
        <Silhouette />
        <BaseStats fighter={ANSWER} />
        <HintsList fighter={ANSWER} hintsRevealed={hintsRevealed} />
        <GuessHistory guesses={guesses} />
      </main>

      <GuessInput onGuess={handleGuess} />
    </div>
  );
}