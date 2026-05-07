export default function GuessHistory({ guesses }) {
  return (
    <div className="space-y-2 mt-6">

      {guesses.map((guess, index) => (
        <div
          key={index}
          className={`p-3 rounded-xl border flex justify-between items-center ${
            guess.correct
              ? "bg-green-900 border-green-700"
              : "bg-gray-900 border-gray-800"
          }`}
        >

          <span className="font-medium">
            {guess.name}
          </span>

          <span
            className={`text-sm font-semibold ${
              guess.correct
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {guess.correct ? "CORRECT" : "WRONG"}
          </span>

        </div>
      ))}

    </div>
  );
}