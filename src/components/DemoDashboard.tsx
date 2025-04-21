
import TeamStats from "./TeamStats";
import TeamCard from "./TeamCard";
import TeamTactics from "./TeamTactics";
import StandingsTable from "./StandingsTable";
import LatestResults from "./LatestResults";
import PlayerCard from "./PlayerCard";
import PlayerStats from "./PlayerStats";
import PlayerMatchup from "./PlayerMatchup";
import MatchSchedule from "./MatchSchedule";
import FeaturedPlayer from "./FeaturedPlayer";

export default function DemoDashboard() {
  return (
    <div className="flex flex-col gap-10 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <TeamStats />
        <TeamCard />
      </div>
      <TeamTactics />
      <StandingsTable />
      <LatestResults />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <PlayerCard />
        <PlayerStats />
      </div>
      <PlayerMatchup />
      <MatchSchedule />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FeaturedPlayer />
        <FeaturedPlayer player={{
          name: "Ivy Chandler",
          photo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=128&h=128",
          team: "Bluefleet FC",
          description: "Midfield maestro and leader. Known for passing vision and stamina.",
          stats: { goals: 4, assists: 14, appearances: 28 },
          achievement: "Top Assists",
        }} />
      </div>
    </div>
  );
}
