export default function BaseStats({ fighter }) {
  return (
    <div className="flex justify-center gap-3 mb-6">
      <div className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
        {fighter.weightClass}
      </div>
      <div className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
        {fighter.record}
      </div>
    </div>
  );
}