
type TeamStanding = {
  team: string;
  logoUrl: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
};

const standings: TeamStanding[] = [
  {
    team: "Phoenix Strikers",
    logoUrl:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=48&h=48",
    played: 28,
    won: 18,
    drawn: 3,
    lost: 7,
    points: 57,
  },
  {
    team: "Bluefleet FC",
    logoUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=facearea&w=48&h=48",
    played: 28,
    won: 17,
    drawn: 5,
    lost: 6,
    points: 56,
  },
  {
    team: "Red Hawks",
    logoUrl:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=facearea&w=48&h=48",
    played: 28,
    won: 15,
    drawn: 8,
    lost: 5,
    points: 53,
  },
];

export default function StandingsTable({ data = standings }: { data?: TeamStanding[] }) {
  return (
    <div className="glass-morphism max-w-2xl w-full mx-auto rounded-2xl shadow-lg p-6 bg-gradient-to-br from-white/10 to-transparent">
      <h2 className="text-gradient-primary font-bold text-xl mb-4">Standings</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300 backdrop-blur-xl">
          <thead>
            <tr>
              <th className="px-2 py-2 text-left">#</th>
              <th className="px-2 py-2 text-left">Team</th>
              <th className="px-2 py-2">P</th>
              <th className="px-2 py-2">W</th>
              <th className="px-2 py-2">D</th>
              <th className="px-2 py-2">L</th>
              <th className="px-2 py-2">Pts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((t, idx) => (
              <tr
                key={t.team}
                className={`transition hover:bg-blue-900/30 rounded-lg ${
                  idx === 0 ? "font-bold text-white backdrop-blur-xl" : ""
                }`}
              >
                <td className="px-2 py-2">{idx + 1}</td>
                <td className="flex items-center gap-2 py-2">
                  <img src={t.logoUrl} alt={t.team} className="w-7 h-7 rounded-full" />
                  {t.team}
                </td>
                <td className="text-center">{t.played}</td>
                <td className="text-center">{t.won}</td>
                <td className="text-center">{t.drawn}</td>
                <td className="text-center">{t.lost}</td>
                <td className="text-center font-semibold">{t.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
