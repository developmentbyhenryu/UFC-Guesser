export default function Silhouette({ fighter, gameStatus }) {
  const revealed = gameStatus === "won" || gameStatus === "lost";

  return (
    <div className="flex flex-col items-center mt-6">

      <p className="text-red-500 text-xs tracking-widest mb-1">
        MAIN EVENT
      </p>

      <p className="text-gray-400 text-xs mb-4">
        {revealed ? fighter.name : "UNKNOWN OPPONENT"}
      </p>

      <div className="w-56 h-56 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center shadow-lg border border-gray-700 overflow-hidden">

        {fighter?.image ? (
          <img
            src={fighter.image}
            alt={fighter.name}
            className={`max-h-full object-contain transition-all duration-500 ${
              revealed
                ? "brightness-100 scale-100"
                : "brightness-0 contrast-200 scale-95"
            }`}
          />
        ) : (
          <span className="text-gray-500 tracking-widest">
            UNKNOWN
          </span>
        )}

      </div>

      {/* WIN TEXT */}
      {gameStatus === "won" && (
        <p className="text-green-500 font-semibold mt-4">
          Correct! It was {fighter.name}
        </p>
      )}

      {/* LOSS TEXT */}
      {gameStatus === "lost" && (
        <p className="text-red-500 font-semibold mt-4">
          You ran out of guesses. It was {fighter.name}
        </p>
      )}

    </div>
  );
}