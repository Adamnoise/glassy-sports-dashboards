
type Formation = { position: string; name: string };

const formation: Formation[] = [
  { position: "GK", name: "C. Smith" },
  { position: "DF", name: "B. Rose" },
  { position: "DF", name: "J. Brown" },
  { position: "DF", name: "D. Reed" },
  { position: "MF", name: "K. Lewis" },
  { position: "MF", name: "Z. Adams" },
  { position: "MF", name: "Y. Chan" },
  { position: "FW", name: "P. Watts" },
  { position: "FW", name: "E. Trent" },
];

export default function TeamTactics({ players = formation }: { players?: Formation[] }) {
  return (
    <div className="glass-morphism w-full max-w-lg mx-auto rounded-2xl p-6 flex flex-col shadow-lg">
      <h2 className="font-bold text-lg mb-4 text-gradient-primary">Team Formation</h2>
      <div className="w-full h-72 bg-gradient-to-b from-blue-800/60 to-blue-950/70 rounded-xl relative grid grid-rows-5">
        {/* Example placement - distribute players */}
        <div className="absolute left-1/2 -translate-x-1/2 top-5 flex flex-col items-center z-20">
          <PlayerCircle player={players[0]} />
        </div>
        <div className="absolute flex gap-24 top-[60px] left-1/2 -translate-x-1/2 z-20">
          <PlayerCircle player={players[1]} />
          <PlayerCircle player={players[2]} />
          <PlayerCircle player={players[3]} />
        </div>
        <div className="absolute flex gap-12 top-[130px] left-1/2 -translate-x-1/2 z-20">
          <PlayerCircle player={players[4]} />
          <PlayerCircle player={players[5]} />
          <PlayerCircle player={players[6]} />
        </div>
        <div className="absolute flex gap-16 top-[200px] left-1/2 -translate-x-1/2 z-20">
          <PlayerCircle player={players[7]} />
          <PlayerCircle player={players[8]} />
        </div>
      </div>
      <div className="flex justify-end text-xs mt-2 text-gray-300">Formation: 3-3-2</div>
    </div>
  );
}

function PlayerCircle({ player }: { player: Formation }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-12 h-12 rounded-full bg-white/10 border border-gray-300/40 flex items-center justify-center font-bold text-white text-sm shadow-md transition group-hover:scale-110">
        {player.position}
      </div>
      <span className="mt-1 text-xs text-white">{player.name}</span>
    </div>
  );
}
