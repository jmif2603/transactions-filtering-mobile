import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homescreen from './Homescreen.tsx'
import FilterViewA from './FilterViewA.tsx'
import FilterViewB from './FilterViewB.tsx'

type View = 'bottom-sheets' | 'checkbox-groups' | 'none';

const getViewFromHash = (): View => {
  const hash = window.location.hash;
  if (hash === '#/bottom-sheets') return 'bottom-sheets';
  if (hash === '#/checkbox-groups') return 'checkbox-groups';
  return 'none';
};

const App = () => {
  const [view, setView] = useState<View>(getViewFromHash);

  useEffect(() => {
    const onHashChange = () => setView(getViewFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (view === 'bottom-sheets') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 24px' }}>
        <div style={{ width: 393, flexShrink: 0 }}>
          <Homescreen FilterView={FilterViewA} />
        </div>
      </div>
    );
  }

  if (view === 'checkbox-groups') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 24px' }}>
        <div style={{ width: 393, flexShrink: 0 }}>
          <Homescreen FilterView={FilterViewB} filterChipVariant="B" />
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 16, fontFamily: 'Roboto, sans-serif' }}>
      <a href="#/bottom-sheets" style={{ color: '#1d7883', fontSize: 16 }}>Filter groups as separate bottom sheets</a>
      <a href="#/checkbox-groups" style={{ color: '#1d7883', fontSize: 16 }}>Filter groups as checkbox groups</a>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
