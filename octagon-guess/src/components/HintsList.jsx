export default function HintsList({ fighter, hintsRevealed }) {
  const hints = [
    { label: "Country", value: fighter.country },
    { label: "Career", value: fighter.hasTitleWin ? "Has won a UFC title" : "Has not won a UFC title" },
    { label: "Stance", value: fighter.stance },
    { label: "Finishes", value: `${fighter.kos} KO / ${fighter.subs} SUB` },
  ];

  return (
    <div className="mb-6 space-y-3">
      {hints.slice(0, hintsRevealed).map((hint, index) => (
        <div key={index} className="bg-gray-900 p-4 rounded-xl border border-gray-800">
          <span className="text-gray-400 text-sm">{hint.label}</span>
          <p className="font-medium">{hint.value}</p>
        </div>
      ))}

      {hintsRevealed < hints.length && (
        <div className="bg-gray-800 p-4 rounded-xl text-gray-500 border border-gray-800">
          🔒 Unlock next hint
        </div>
      )}
    </div>
  );
}