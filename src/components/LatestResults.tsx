
import { Flag } from "lucide-react";

type Result = {
  home: string;
  away: string;
  hLogo: string;
  aLogo: string;
  homeScore: number;
  awayScore: number;
  date: string;
};

const results: Result[] = [
  {
    home: "Phoenix Strikers",
    away: "Red Hawks",
    hLogo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=48&h=48",
    aLogo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=48&h=48",
    homeScore: 2,
    awayScore: 1,
    date: "Mar 12",
  },
  {
    home: "Bluefleet FC",
    away: "Phoenix Strikers",
    hLogo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=48&h=48",
    aLogo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=48&h=48",
    homeScore: 1,
    awayScore: 1,
    date: "Mar 9",
  },
];

export default function LatestResults({ resultsData = results }: { resultsData?: Result[] }) {
  return (
    <div className="glass-morphism max-w-xl w-full mx-auto rounded-2xl shadow-xl p-6">
      <h2 className="text-gradient-primary font-bold text-xl mb-4 flex items-center gap-2">
        <Flag /> Latest Results
      </h2>
      <div className="flex flex-col gap-4">
        {resultsData.map((game, idx) => (
          <div key={idx} className="flex items-center gap-4 bg-white/10 rounded-xl px-4 py-2 hover:bg-blue-900/40 transition">
            <img src={game.hLogo} alt={game.home} className="w-8 h-8 rounded-full" />
            <span className="flex-1 text-right text-white">{game.home}</span>
            <span className="mx-2 text-xl font-bold text-gradient">{game.homeScore}</span>
            <span className="mx-1 text-gray-200">:</span>
            <span className="mx-2 text-xl font-bold text-gradient">{game.awayScore}</span>
            <span className="flex-1 text-left text-white">{game.away}</span>
            <img src={game.aLogo} alt={game.away} className="w-8 h-8 rounded-full" />
            <span className="text-xs text-gray-300 ml-2">{game.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
