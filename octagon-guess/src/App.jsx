import { useState, useEffect } from "react";
import Header from "./components/Header";
import Silhouette from "./components/Silhouette";
import BaseStats from "./components/BaseStats";
import HintsList from "./components/HintsList";
import GuessHistory from "./components/GuessHistory";
import GuessInput from "./components/GuessInput";
import fighters from "./data/fighters";

export default function App() {
  const [currentAnswer, setCurrentAnswer] = useState(
    fighters[Math.floor(Math.random() * fighters.length)]
  );

  const [guesses, setGuesses] = useState([]);
  const [hintsRevealed, setHintsRevealed] = useState(1);
  const [gameStatus, setGameStatus] = useState("playing");

  const MAX_GUESSES = 6;

  function startNewGame() {
    const randomFighter =
      fighters[Math.floor(Math.random() * fighters.length)];

    setCurrentAnswer(randomFighter);
    setGuesses([]);
    setHintsRevealed(1);
    setGameStatus("playing");
  }

  useEffect(() => {
    if (gameStatus === "won") {
      const timer = setTimeout(() => {
        startNewGame();
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [gameStatus]);

  function handleGuess(name) {
    if (gameStatus !== "playing") return;

    const fighter = fighters.find(
      (f) => f.name.toLowerCase() === name.toLowerCase()
    );

    if (!fighter) return;

    const isCorrect = fighter.name === currentAnswer.name;

    const newGuess = {
      name: fighter.name,
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
    }
  }

  function requestHint() {
    if (hintsRevealed >= currentAnswer.hints.length) return;

    setHintsRevealed((prev) => prev + 1);
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white">

      <Header
        guesses={guesses}
        hintsUsed={hintsRevealed}
      />

      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-28 max-w-lg mx-auto w-full">

        <Silhouette
          fighter={currentAnswer}
          gameStatus={gameStatus}
        />

        <BaseStats fighter={currentAnswer} />

        <HintsList
          fighter={currentAnswer}
          hintsRevealed={hintsRevealed}
          onRequestHint={requestHint}
        />

        <GuessHistory guesses={guesses} />

      </main>

      <GuessInput
        onGuess={handleGuess}
        gameStatus={gameStatus}
      />

    </div>
  );
}