import { machineData } from '@/lib/machineData';

export default function MachineDataView() {
  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#000',
        borderBottom: '1px solid #14532d'
      }}>
        <div style={{ padding: '8px 16px', display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, fontFamily: 'monospace', color: '#22c55e', fontSize: '0.875rem' }}>
            julian_lopez.entity.json
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <button
              style={{
                display: 'inline-block',
                backgroundColor: '#39ff14',
                color: '#000',
                fontWeight: 'bold',
                padding: '4px 16px',
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 10px rgba(57, 255, 20, 0.7), 0 0 20px rgba(57, 255, 20, 0.5), 0 0 30px rgba(57, 255, 20, 0.3)',
                textShadow: 'none'
              }}
            >
              Humans Click Here
            </button>
          </div>
          <div style={{ flex: 1 }} />
        </div>
      </nav>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0d0d0d',
        color: '#39ff14',
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        paddingTop: '3rem',
        paddingBottom: '1rem'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1rem', overflow: 'auto' }}>
          <pre style={{ lineHeight: 1.625, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {JSON.stringify(machineData, null, 2)}
          </pre>
        </div>
      </div>
    </>
  );
}
