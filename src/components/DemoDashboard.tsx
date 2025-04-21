
import { useEffect, useState } from "react";
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
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = document.querySelectorAll('.observe-section');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
  
  const renderSection = (id: string, title: string, children: React.ReactNode) => {
    const isVisible = visibleSections[id];
    
    return (
      <section 
        id={id} 
        className={`observe-section transition-all duration-1000 mb-16 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200">
          {title}
        </h2>
        {children}
      </section>
    );
  };
  
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      {renderSection("team-overview", "Team Overview", (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <TeamStats />
          <TeamCard />
        </div>
      ))}
      
      {renderSection("team-tactics", "Team Tactics", <TeamTactics />)}
      
      {renderSection("league-data", "League Data", (
        <div className="space-y-10">
          <StandingsTable />
          <LatestResults />
        </div>
      ))}
      
      {renderSection("player-profiles", "Player Profiles", (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <PlayerCard />
          <PlayerStats />
        </div>
      ))}
      
      {renderSection("player-matchup", "Player Matchup", <PlayerMatchup />)}
      
      {renderSection("match-schedule", "Match Schedule", <MatchSchedule />)}
      
      {renderSection("featured-players", "Featured Players", (
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
      ))}
    </div>
  );
}
