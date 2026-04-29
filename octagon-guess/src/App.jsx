import Header from "./components/Header";
import Silhouette from "./components/Silhouette";
import BaseStats from "./components/BaseStats";
import HintsList from "./components/HintsList";
import GuessHistory from "./components/GuessHistory";
import GuessInput from "./components/GuessInput";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-1 overflow-y-auto px-4 pb-24">
        <Silhouette />
        <BaseStats />
        <HintsList />
        <GuessHistory />
      </main>

      <GuessInput />
    </div>
  );
}