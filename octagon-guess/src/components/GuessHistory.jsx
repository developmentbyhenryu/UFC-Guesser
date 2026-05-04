export default function GuessHistory({ guesses }) {
  return (
    <div className="space-y-3 mb-6">
      {guesses.map((guess, index) => (
        <div key={index} className="bg-gray-900 p-3 rounded-xl border border-gray-800">
          
          <div className="flex justify-between items-center">
            <span>{guess.name}</span>
            <span className={guess.correct ? "text-green-500" : "text-red-500"}>
              {guess.correct ? "✔" : "✖"}
            </span>
          </div>

          <div className="text-xs text-gray-400 mt-1">
            Weight Class{" "}
            <span className={guess.feedback.weightClass ? "text-green-400" : "text-red-400"}>
              {guess.feedback.weightClass ? "✔" : "✖"}
            </span>
            {" | "}
            Country{" "}
            <span className={guess.feedback.country ? "text-green-400" : "text-red-400"}>
              {guess.feedback.country ? "✔" : "✖"}
            </span>
            {" | "}
            Title{" "}
            <span className={guess.feedback.hasTitleWin ? "text-green-400" : "text-red-400"}>
              {guess.feedback.hasTitleWin ? "✔" : "✖"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}