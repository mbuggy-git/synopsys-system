export function Eyebrow({ children, tone = 'accent', rule = true, size = 11, style }) {
  const colors = { accent: 'var(--iris)', light: 'rgba(232,230,244,.75)', dark: 'var(--syn-purple)', cyan: 'var(--cyan)' };
  return (
    <div style={{ fontFamily: 'var(--font-core)', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', ...style }}>
      {rule && <span style={{ width: 40, height: 2, background: 'var(--grad-neon)', borderRadius: 2 }}></span>}
      <span style={{ fontSize: size, fontWeight: 500, letterSpacing: 'var(--eyebrow-tracking)', textTransform: 'uppercase', color: colors[tone] || tone }}>{children}</span>
    </div>
  );
}
