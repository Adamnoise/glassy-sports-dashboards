
import { useState } from "react";

type Stats = {
  category: string;
  value: number;
  max?: number;
};

const sampleStats: Stats[] = [
  { category: "Goals", value: 12, max: 20 },
  { category: "Assists", value: 6, max: 15 },
  { category: "Shots", value: 38, max: 60 },
  { category: "Pass Accuracy", value: 89, max: 100 },
  { category: "Tackles", value: 29, max: 50 },
];

export default function PlayerStats({ stats = sampleStats }: { stats?: Stats[] }) {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  return (
    <div className="glass-morphism w-full max-w-md p-6 rounded-2xl mx-auto shadow-lg interactive-card relative overflow-hidden">
      <div className="shiny-border"></div>
      
      <h2 className="font-bold text-lg mb-4 text-gradient-primary">Player Stats</h2>
      
      <div className="flex flex-col gap-4">
        {stats.map((stat, idx) => {
          const isHovered = hoveredStat === stat.category;
          const delay = idx * 0.05;
          
          return (
            <div 
              key={stat.category} 
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: `${delay}s` }}
              onMouseEnter={() => setHoveredStat(stat.category)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="flex-1">
                <span className={`text-sm transition-all duration-300 ${isHovered ? 'text-white' : 'text-gray-300'}`}>
                  {stat.category.split('').map((char, i) => (
                    <span 
                      key={i}
                      className={isHovered ? "animateCharIn" : ""}
                      style={{ 
                        display: 'inline-block', 
                        animationDelay: `${i * 0.03}s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </div>
              
              <div className="stat-bar w-36">
                <div
                  className="h-2 rounded-full transition-all duration-500 relative"
                  style={{
                    width: stat.max ? `${(stat.value / stat.max) * 100}%` : "100%",
                    background: `linear-gradient(90deg, rgb(124, 58, 237) 0%, rgb(79, 70, 229) 100%)`,
                    boxShadow: isHovered ? "0 0 10px rgba(124, 58, 237, 0.7)" : "none",
                  }}
                  aria-label={`${stat.value} out of ${stat.max ?? ""}`}
                >
                  <div 
                    className={`absolute inset-0 rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                      backgroundSize: '200% 100%',
                      animation: isHovered ? 'reflex 1.5s ease infinite' : 'none',
                    }}
                  ></div>
                </div>
              </div>
              
              <span 
                className={`ml-3 font-bold transition-all duration-300 ${isHovered ? 'text-gradient-primary scale-110' : 'text-white'}`}
                style={{ 
                  transformOrigin: 'center left',
                }}
              >
                {stat.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
