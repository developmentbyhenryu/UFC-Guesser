import { useState } from "react";

export default function GuessInput() {
  const [value, setValue] = useState("");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 p-3">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Guess the fighter..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 bg-gray-900 p-3 rounded-lg outline-none"
        />

        <button className="bg-red-500 px-4 rounded-lg font-semibold">
          Guess
        </button>
      </div>
    </div>
  );
}