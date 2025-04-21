
import { useEffect, useState } from "react";
import DemoDashboard from "../components/DemoDashboard";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-slate-900 py-10 px-2 flex flex-col items-center relative">
      {/* Dynamic background lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-purple-600/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-blue-600/20 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px]"></div>
      </div>
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <h1 
        className={`font-extrabold text-4xl md:text-5xl mb-8 drop-shadow-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        Glassy Sports Dashboard Components
      </h1>
      
      <p 
        className={`mb-14 text-gray-300 max-w-xl text-center transition-all duration-1000 delay-300 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        Explore interactive, glass-morphic React components inspired by the latest sports dashboard UI - ready to power your next web app!
      </p>
      
      <div 
        className={`transition-all duration-1000 delay-500 w-full ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <DemoDashboard />
      </div>
    </div>
  );
};

export default Index;
