
type Player = {
  name: string;
  photo: string;
  goals: number;
};

const p1: Player = {
  name: "Samuel Brooks",
  photo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=facearea&w=128&h=128",
  goals: 12,
};
const p2: Player = {
  name: "Eliot Reeves",
  photo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=128&h=128",
  goals: 14,
};

export default function PlayerMatchup({
  a = p1,
  b = p2,
}: {
  a?: Player;
  b?: Player;
}) {
  return (
    <div className="glass-morphism w-full max-w-lg mx-auto rounded-2xl p-6 shadow-xl flex flex-col items-center">
      <h2 className="text-gradient-primary font-bold text-lg mb-4">Player Matchup</h2>
      <div className="flex gap-6 w-full justify-center items-center">
        <VersusPlayer player={a} winner={a.goals > b.goals} />
        <span className="text-3xl font-extrabold text-gradient">VS</span>
        <VersusPlayer player={b} winner={b.goals > a.goals} />
      </div>
      <div className="mt-6 w-full flex justify-evenly text-sm text-gray-300">
        <div>
          <span className="font-bold text-white">{a.goals}</span> Goals
        </div>
        <div>
          <span className="font-bold text-white">{b.goals}</span> Goals
        </div>
      </div>
    </div>
  );
}

function VersusPlayer({ player, winner }: { player: Player; winner: boolean }) {
  return (
    <div className={`flex flex-col items-center ${winner ? "scale-105" : "opacity-70"}`}>
      <img
        src={player.photo}
        alt={player.name}
        className={`w-20 h-20 rounded-full border-4 ${
          winner ? "border-green-400 shadow-xl" : "border-gray-400"
        } object-cover mb-2`}
      />
      <div className={`font-semibold ${winner ? "text-green-300" : "text-white"}`}>{player.name}</div>
    </div>
  );
}
