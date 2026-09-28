export function Stat({ value, label, desc, tone = 'dark', gradient = true, size = 64, color, labelColor, style }) {
  const dark = tone === 'dark';
  const valStyle = color
    ? { color }
    : gradient
    ? { background: 'var(--grad-neon)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }
    : { color: dark ? '#fff' : 'var(--syn-purple)' };
  return (
    <div style={{ fontFamily: 'var(--font-core)', display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      <div style={{ fontSize: size, fontWeight: 900, lineHeight: 1, letterSpacing: '-.02em', ...valStyle }}>{value}</div>
      {label && <div style={{ fontSize: 13, fontWeight: 400, letterSpacing: 'var(--label-tracking)', textTransform: 'uppercase', color: labelColor || (dark ? 'var(--iris)' : 'var(--syn-purple-light)') }}>{label}</div>}
      {desc && <div style={{ fontSize: 14, lineHeight: 'var(--lh-body)', color: dark ? 'var(--text-muted)' : 'var(--text-muted-light)', maxWidth: 300 }}>{desc}</div>}
    </div>
  );
}
