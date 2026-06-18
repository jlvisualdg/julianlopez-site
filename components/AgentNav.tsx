'use client';

import { useView } from './ViewProvider';

export default function AgentNav() {
  const { toggleView } = useView();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-green-900">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="font-mono text-green-500 text-sm">
          julian_lopez.entity.json
        </div>
        
        {/* Desktop - Right aligned button */}
        <div className="hidden md:block">
          <button 
            onClick={toggleView}
            className="inline-block bg-[#39ff14] hover:bg-[#32d912] text-black font-bold px-4 py-1 text-sm transition-all"
            style={{
              boxShadow: "0 0 10px rgba(57, 255, 20, 0.7), 0 0 20px rgba(57, 255, 20, 0.5), 0 0 30px rgba(57, 255, 20, 0.3)",
              textShadow: "none"
            }}
          >
            Humans Click Here
          </button>
        </div>
        
        {/* Mobile - Centered button */}
        <div className="md:hidden w-full absolute left-0 top-2">
          <button 
            onClick={toggleView}
            className="inline-block bg-[#39ff14] hover:bg-[#32d912] text-black font-bold px-6 py-2 text-sm mx-auto block transition-all"
            style={{
              boxShadow: "0 0 10px rgba(57, 255, 20, 0.7), 0 0 20px rgba(57, 255, 20, 0.5), 0 0 30px rgba(57, 255, 20, 0.3)",
              textShadow: "none"
            }}
          >
            Humans Click Here
          </button>
        </div>
      </div>
    </nav>
  );
}