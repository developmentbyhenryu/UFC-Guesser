export default function RevealScreen({
  fighter,
  gameStatus,
  onPlayAgain,
}) {
  if (gameStatus === "playing") return null;

  const won = gameStatus === "won";

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center px-6 text-center">

      <p className={`text-sm tracking-[0.3em] mb-4 ${
        won ? "text-green-500" : "text-red-500"
      }`}>
        {won ? "OFFICIAL RESULT" : "FIGHT ENDED"}
      </p>

      <h1 className="text-5xl font-black mb-6">
        {won ? "WIN" : "LOSS"}
      </h1>

      <img
        src={fighter.image}
        alt={fighter.name}
        className="w-64 max-w-full object-contain mb-6"
      />

      <p className="text-gray-400 text-sm tracking-widest mb-2">
        FIGHTER REVEALED
      </p>

      <h2 className="text-3xl font-bold text-red-500 mb-8">
        {fighter.name}
      </h2>

      <button
        onClick={onPlayAgain}
        className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl font-bold tracking-widest"
      >
        PLAY AGAIN
      </button>

    </div>
  );
}