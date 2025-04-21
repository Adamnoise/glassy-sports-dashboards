
import { Users } from "lucide-react";

type Team = {
  name: string;
  logoUrl: string;
  league: string;
  wins: number;
  losses: number;
  draws: number;
  rank: number;
};

const exampleTeam: Team = {
  name: "Phoenix Strikers",
  logoUrl:
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=256&h=256",
  league: "Premier League",
  wins: 18,
  losses: 7,
  draws: 3,
  rank: 3,
};

export default function TeamCard({ team = exampleTeam }: { team?: Team }) {
  return (
    <div className="glass-morphism w-full max-w-xs py-8 px-6 rounded-3xl flex flex-col items-center gap-3 mx-auto relative shadow-xl">
      <img
        src={team.logoUrl}
        alt={`${team.name} logo`}
        className="w-20 h-20 rounded-full border-4 border-white/10 object-cover shadow-sm bg-white/10"
      />
      <div className="font-extrabold text-xl mt-2 text-gradient">{team.name}</div>
      <span className="text-sm text-gray-300 mb-1">{team.league}</span>
      <div className="flex w-full justify-between gap-2 mt-3">
        <Stat label="Wins" value={team.wins} color="text-green-300" />
        <Stat label="Draws" value={team.draws} color="text-gray-200" />
        <Stat label="Losses" value={team.losses} color="text-red-300" />
      </div>
      <span className="absolute top-2 right-4 bg-blue-500/90 text-white px-2 py-1 rounded-full text-xs shadow-md font-semibold">
        #{team.rank}
      </span>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="text-center">
      <div className={`font-bold text-lg ${color}`}>{value}</div>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}
