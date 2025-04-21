
import { BarChart, Users, Star } from "lucide-react";

type Stat = {
  label: string;
  value: number | string;
  icon: JSX.Element;
  trend?: "up" | "down" | "neutral";
  diff?: number;
};

const exampleStats: Stat[] = [
  { label: "Games Played", value: 28, icon: <BarChart className="text-blue-400" /> },
  { label: "Team Rank", value: 3, icon: <Star className="text-yellow-300" /> },
  { label: "Wins", value: 18, icon: <Users className="text-green-400" />, trend: "up", diff: 2 },
  { label: "Losses", value: 7, icon: <Users className="text-red-400" />, trend: "down", diff: -1 },
  { label: "Draws", value: 3, icon: <Users className="text-gray-400" />, trend: "neutral", diff: 0 },
];

function getTrendColor(trend?: "up" | "down" | "neutral") {
  if (trend === "up") return "text-green-400";
  if (trend === "down") return "text-red-400";
  return "text-gray-200";
}

export default function TeamStats({ stats = exampleStats }: { stats?: Stat[] }) {
  return (
    <div className="glass-morphism w-full max-w-xl rounded-2xl p-6 shadow-lg mx-auto bg-gradient-to-br from-white/10 via-white/5 to-transparent">
      <h2 className="text-xl mb-4 font-bold text-gradient-primary">Team Stats</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-4 transition hover:-translate-y-1 hover:shadow-lg"
            aria-label={`${stat.label}: ${stat.value}`}
          >
            <div className="mb-2">{stat.icon}</div>
            <div className="font-bold text-2xl text-white">{stat.value}</div>
            <span className="text-sm text-gray-300">{stat.label}</span>
            {stat.diff !== undefined && (
              <span className={`mt-1 text-xs ${getTrendColor(stat.trend)}`}>
                {stat.trend === "up" && "▲"}
                {stat.trend === "down" && "▼"}
                {stat.trend === "neutral" && "•"}
                &nbsp;
                {Math.abs(stat.diff)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
