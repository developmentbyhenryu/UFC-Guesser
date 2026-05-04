import { useState } from "react";
import fighters from "../data/fighters";

export default function GuessInput({onGuess}) {
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleChange(e) {
    const input = e.target.value;
    setValue(input);

    if (input.length === 0) {
      setFiltered([]);
      setShowDropdown(false);
      return;
    }

  const results = fighters
    .filter((fighter) =>
      fighter.name.toLowerCase().includes(input.toLowerCase())
    )
  .slice(0, 5);

    setFiltered(results);
    setShowDropdown(true);
  }

  function handleSelect(name) {
    setValue(name);
    setShowDropdown(false);
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-3">
      <div className="flex gap-2 max-w-lg mx-auto relative">
        
        {/* INPUT */}
        <input
          type="text"
          placeholder="Guess the fighter..."
          value={value}
          onChange={handleChange}
          onFocus={() => value && setShowDropdown(true)}
          className="flex-1 bg-gray-900 p-3 rounded-lg outline-none border border-gray-800 focus:border-red-500"
        />

        {/* BUTTON */}
        <button
  onClick={() => {
    if (!value) return;
    onGuess(value);
    setValue("");
  }}
  className="bg-red-500 px-4 rounded-lg font-semibold hover:bg-red-600 transition"
>
  Guess
</button>

        {/* DROPDOWN */}
        {showDropdown && filtered.length > 0 && (
          <div className="absolute bottom-14 left-0 right-0 bg-gray-900 border border-gray-800 rounded-lg max-h-48 overflow-y-auto z-50">
            {filtered.map((fighter, index) => (
              <div
                key={index}
                onClick={() => handleSelect(fighter.name)}
                className="p-3 hover:bg-gray-800 cursor-pointer text-sm"
              >
                {fighter.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}