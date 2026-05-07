export default function HintsList({
  fighter,
  hintsRevealed,
  onRequestHint,
}) {
  return (
    <div className="mb-6 space-y-3">

      {/* REVEALED HINTS */}
      {fighter.hints.slice(0, hintsRevealed).map((hint, index) => (
        <div
          key={index}
          className="bg-gray-900 p-4 rounded-xl border border-gray-800"
        >
          <span className="text-gray-500 text-xs tracking-widest">
            CORNER ADVICE #{index + 1}
          </span>

          <p className="font-medium mt-1">
            {hint}
          </p>
        </div>
      ))}

      {/* REQUEST HINT BUTTON */}
      {hintsRevealed < fighter.hints.length && (
        <button
          onClick={onRequestHint}
          className="w-full bg-red-600 hover:bg-red-700 transition p-4 rounded-xl font-semibold tracking-wide"
        >
          REQUEST CORNER ADVICE
        </button>
      )}

      {/* NO MORE HINTS */}
      {hintsRevealed >= fighter.hints.length && (
        <div className="bg-gray-800 p-4 rounded-xl text-gray-500 border border-gray-800 text-center">
          No more hints available
        </div>
      )}
    </div>
  );
}