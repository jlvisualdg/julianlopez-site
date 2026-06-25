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
              style={{
                background: "#39ff14",
                color: "#000",
                fontWeight: "bold",
                padding: "4px 16px",
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 10px rgba(57, 255, 20, 0.7), 0 0 20px rgba(57, 255, 20, 0.5), 0 0 30px rgba(57, 255, 20, 0.3)"
              }}
            >
              Humans Click Here
            </button>
          </div>
          <div className="flex-1" />
        </div>
      </nav>
      <div className="min-h-screen bg-[#0d0d0d] text-[#3