import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homescreen from './Homescreen.tsx'
import FilterViewA from './FilterViewA.tsx'
import FilterViewB from './FilterViewB.tsx'

type View = 'mobile-a' | 'mobile-b';

const labelStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  cursor: 'pointer',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 14,
  color: '#0f2b4d',
  userSelect: 'none',
};

const App = () => {
  const [view, setView] = useState<View>('mobile-a');

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>

      {/* Left sidebar */}
      <div
        style={{
          flexShrink: 0,
          width: 180,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          padding: '24px 16px',
          borderRight: '1px solid #cfd6de',
          backgroundColor: 'white',
        }}
      >
        <label style={labelStyle}>
          <input
            type="radio"
            name="view"
            value="mobile-a"
            checked={view === 'mobile-a'}
            onChange={() => setView('mobile-a')}
            style={{ accentColor: '#1d7883', cursor: 'pointer' }}
          />
          Filter groups as separate bottom sheets
        </label>
        <label style={labelStyle}>
          <input
            type="radio"
            name="view"
            value="mobile-b"
            checked={view === 'mobile-b'}
            onChange={() => setView('mobile-b')}
            style={{ accentColor: '#1d7883', cursor: 'pointer' }}
          />
          Filter groups as checkbox groups
        </label>
      </div>

      {/* Content area */}
      <div style={{ flex: 1, overflow: 'auto' }}>

        {view === 'mobile-a' && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 24px' }}>
            <div style={{ width: 393, flexShrink: 0 }}>
              <Homescreen FilterView={FilterViewA} />
            </div>
          </div>
        )}

        {view === 'mobile-b' && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 24px' }}>
            <div style={{ width: 393, flexShrink: 0 }}>
              <Homescreen FilterView={FilterViewB} filterChipVariant="B" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
