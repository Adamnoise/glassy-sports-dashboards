
type Stats = {
  category: string;
  value: number;
  max?: number;
};

const sampleStats: Stats[] = [
  { category: "Goals", value: 12, max: 20 },
  { category: "Assists", value: 6, max: 15 },
  { category: "Shots", value: 38, max: 60 },
  { category: "Pass Accuracy", value: 89, max: 100 },
  { category: "Tackles", value: 29, max: 50 },
];

export default function PlayerStats({ stats = sampleStats }: { stats?: Stats[] }) {
  return (
    <div className="glass-morphism w-full max-w-md p-6 rounded-2xl mx-auto shadow-lg">
      <h2 className="font-bold text-lg mb-4 text-gradient-primary">Player Stats</h2>
      <div className="flex flex-col gap-4">
        {stats.map((stat, idx) => (
          <div key={stat.category} className="flex items-center gap-3">
            <div className="flex-1">
              <span className="text-sm text-gray-300">{stat.category}</span>
            </div>
            <div className="w-36 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                style={{
                  width: stat.max ? `${(stat.value / stat.max) * 100}%` : "100%",
                  transition: "width 0.3s",
                }}
                aria-label={`${stat.value} out of ${stat.max ?? ""}`}
              />
            </div>
            <span className="ml-3 text-white font-bold">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
