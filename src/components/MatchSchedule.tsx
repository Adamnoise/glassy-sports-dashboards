
import { Calendar, Clock, Flag } from "lucide-react";

type Schedule = {
  date: string;
  time: string;
  home: string;
  away: string;
  hLogo: string;
  aLogo: string;
  venue: string;
  stage?: string;
};

const schedules: Schedule[] = [
  {
    date: "Mar 19, 2024",
    time: "19:30",
    home: "Phoenix Strikers",
    away: "Bluefleet FC",
    hLogo:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=48&h=48",
    aLogo:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=48&h=48",
    venue: "Sky Arena",
    stage: "Quarterfinal",
  },
  {
    date: "Mar 22, 2024",
    time: "18:00",
    home: "Red Hawks",
    away: "Phoenix Strikers",
    hLogo:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=48&h=48",
    aLogo:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=48&h=48",
    venue: "Eagle Stadium",
  },
];

export default function MatchSchedule({ matches = schedules }: { matches?: Schedule[] }) {
  return (
    <div className="glass-morphism max-w-xl w-full mx-auto rounded-2xl shadow-md p-6">
      <h2 className="text-gradient-primary font-bold text-xl mb-4 flex items-center gap-2">
        <Calendar /> Match Schedules
      </h2>
      <div className="flex flex-col gap-4">
        {matches.map((match, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 bg-white/10 rounded-xl px-4 py-3 hover:bg-blue-900/40 transition">
            <div className="flex-1 flex items-center gap-2">
              <img src={match.hLogo} alt={match.home} className="w-8 h-8 rounded-full" />
              <span className="text-white">{match.home}</span>
              <span className="font-bold text-xl mx-2 text-gradient">VS</span>
              <span className="text-white">{match.away}</span>
              <img src={match.aLogo} alt={match.away} className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex-shrink-0 flex items-center gap-4 text-xs text-gray-300 ml-auto">
              <span className="flex items-center"><Calendar size={14} className="mr-1" /> {match.date}</span>
              <span className="flex items-center"><Clock size={14} className="mr-1" /> {match.time}</span>
              <span className="flex items-center"><Flag size={14} className="mr-1" /> {match.venue}</span>
              {match.stage && (
                <span className="ml-2 bg-indigo-800/80 text-white px-2 py-0.5 rounded-full text-xs font-semibold">{match.stage}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
