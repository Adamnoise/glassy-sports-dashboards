
import { User } from "lucide-react";

type Player = {
  name: string;
  photo: string;
  position: string;
  team: string;
  goals: number;
  assists: number;
  rating: number;
};

const examplePlayer: Player = {
  name: "Samuel Brooks",
  photo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=facearea&w=128&h=128",
  position: "Forward",
  team: "Phoenix Strikers",
  goals: 12,
  assists: 6,
  rating: 7.9,
};

export default function PlayerCard({ player = examplePlayer }: { player?: Player }) {
  return (
    <div className="glass-morphism w-full max-w-xs rounded-2xl p-6 flex flex-col items-center gap-3 mx-auto shadow-md relative">
      <img
        src={player.photo}
        alt={player.name}
        className="w-24 h-24 rounded-full border-4 border-white/20 object-cover shadow-lg"
      />
      <div className="font-bold text-lg text-white">{player.name}</div>
      <div className="text-sm text-gray-300">{player.position} – {player.team}</div>
      <div className="flex gap-8 mt-4">
        <Stat label="G" value={player.goals} />
        <Stat label="A" value={player.assists} />
        <Stat label="Rating" value={player.rating} />
      </div>
      <span className="absolute top-2 left-4 bg-indigo-700/90 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
        <User size={14} className="inline mr-1" /> {player.position}
      </span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="font-bold text-xl text-gradient">{value}</div>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}
