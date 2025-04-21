
import DemoDashboard from "../components/DemoDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-slate-900 py-10 px-2 flex flex-col items-center">
      <h1 className="font-extrabold text-4xl md:text-5xl mb-8 text-gradient-primary drop-shadow-lg tracking-tight animate-fade-in">
        Glassy Sports Dashboard Components
      </h1>
      <p className="mb-14 text-gray-300 max-w-xl text-center animate-fade-in">
        Explore interactive, glass-morphic React components inspired by the latest sports dashboard UI - ready to power your next web app!
      </p>
      <DemoDashboard />
    </div>
  );
};

export default Index;
