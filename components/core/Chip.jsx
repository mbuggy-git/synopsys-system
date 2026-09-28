export function Chip({ children, tone = 'outline', style }) {
  const kinds = {
    outline: { color: 'var(--lavender)', border: '1px solid var(--line-strong)', background: 'rgba(172,123,234,.08)' },
    solid: { color: '#fff', border: '1px solid transparent', background: 'var(--grad-brand)' },
    cyan: { color: 'var(--cyan)', border: '1px solid rgba(0,129,254,.4)', background: 'rgba(0,129,254,.07)' },
    light: { color: 'var(--syn-purple)', border: '1px solid var(--line-light)', background: 'var(--paper-2)' },
  };
  return <span style={{ fontFamily: 'var(--font-core)', display: 'inline-flex', alignItems: 'center', fontSize: 11, fontWeight: 500, letterSpacing: 'var(--label-tracking)', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 'var(--r-pill)', whiteSpace: 'nowrap', ...(kinds[tone] || kinds.outline), ...style }}>{children}</span>;
}
