import { machineData } from '@/lib/machineData';

export default function MachineDataView() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-green-900">
        <div className="px-4 py-2 flex items-center">
          <div className="flex-1 font-mono text-green-500 text-sm">
            julian_lopez.entity.json
          </div>
          <div className="flex-1 flex justify-center">
            <button
              className="inline-block bg-[#39ff14] hover:bg-[#32d912] text-black font-bold px-4 py-1 text-sm transition-all"
              style={{
                boxShadow: "0 0 10px rgba(57, 255, 20, 0.7), 0 0 20px rgba(57, 255, 20, 0.5), 0 0 30px rgba(57, 255, 20, 0.3)",
                textShadow: "none"
              }}
            >
              Humans Click Here
            </button>
          </div>
          <div className="flex-1" />
        </div>
      </nav>
      <div className="min-h-screen bg-[#0d0d0d] text-[#39ff14] font-mono text-sm pt-12 pb-4">
        <div className="max-w-7xl mx-auto p-4 overflow-auto">
          <pre className="leading-relaxed whitespace-pre-wrap break-words">
            {JSON.stringify(machineData, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
}
