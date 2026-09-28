export function Panel({ children, tone = 'dark', glow = false, pad = 'var(--card-pad)', style }) {
  const kinds = {
    dark: { background: 'var(--surface-card)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-card)', color: 'var(--text-body)' },
    deep: { background: 'var(--surface-panel)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-card)', color: 'var(--text-body)' },
    light: { background: 'var(--paper)', border: '1px solid var(--line-light)', boxShadow: 'var(--shadow-card-light)', color: 'var(--text-body-light)' },
  };
  return (
    <div style={{ fontFamily: 'var(--font-core)', position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', padding: pad, ...(kinds[tone] || kinds.dark), ...style }}>
      {glow && <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--grad-neon)' }}></span>}
      {children}
    </div>
  );
}
