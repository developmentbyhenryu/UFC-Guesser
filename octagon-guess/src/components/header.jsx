export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-800 sticky top-0 bg-black z-50">
      <h1 className="text-lg font-bold text-red-500">
        Rear Naked Locks
      </h1>

      <div className="flex items-center gap-3 text-sm">
        <span>🔥 3</span>
        <span>● ● ● ● ○</span>
      </div>
    </header>
  );
}