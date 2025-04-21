
import { Medal, Star } from "lucide-react";

type Featured = {
  name: string;
  photo: string;
  team: string;
  description: string;
  stats: {
    goals: number;
    assists: number;
    appearances: number;
  };
  achievement?: string;
};

const feature: Featured = {
  name: "Eleanor Watts",
  photo:
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=128&h=128",
  team: "Red Hawks",
  description:
    "Star forward renowned for creativity and finishing. Player of the Month, breaking club records.",
  stats: { goals: 16, assists: 9, appearances: 22 },
  achievement: "Player of the Month",
};

export default function FeaturedPlayer({ player = feature }: { player?: Featured }) {
  return (
    <div className="glass-morphism max-w-lg w-full mx-auto p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 shadow-xl">
      <div className="flex flex-col items-center md:items-start">
        <img
          src={player.photo}
          alt={player.name}
          className="w-24 h-24 rounded-2xl border-4 border-yellow-300/50 object-cover mb-2 shadow-lg"
        />
        <div className="font-bold text-xl text-gradient">{player.name}</div>
        <span className="text-sm text-gray-300 mt-1">{player.team}</span>
        {player.achievement && (
          <span className="flex items-center gap-1 bg-yellow-400/80 text-gray-900 px-2 py-1 rounded-full mt-2 text-xs font-semibold shadow">
            <Medal size={16} /> {player.achievement}
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between gap-4">
        <p className="text-sm text-gray-200">{player.description}</p>
        <div className="grid grid-cols-3 gap-6 mt-2">
          <Stat label="Goals" value={player.stats.goals} />
          <Stat label="Assists" value={player.stats.assists} />
          <Stat label="Appearances" value={player.stats.appearances} />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center bg-white/10 px-2 py-2 rounded-lg">
      <span className="text-xs text-gray-300">{label}</span>
      <span className="font-bold text-lg text-white">{value}</span>
    </div>
  );
}
