import { Icon } from './Icon.jsx';
export function Button({ children, variant = 'primary', tone = 'dark', arrow = variant === 'link', iconBase = '../../assets/icons', onClick, style }) {
  const light = tone === 'light';
  const base = { fontFamily: 'var(--font-core)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, border: 'none', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700, whiteSpace: 'nowrap', transition: 'filter var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)' };
  const kinds = {
    primary: { ...base, fontSize: 13, padding: '13px 26px', borderRadius: 'var(--r-pill)', color: '#fff', background: 'var(--grad-brand)', boxShadow: light ? 'var(--shadow-card-light)' : 'var(--glow-violet)' },
    ghost: light
      ? { ...base, fontSize: 13, padding: '12px 25px', borderRadius: 'var(--r-pill)', color: 'var(--syn-purple)', background: 'transparent', border: '1px solid var(--syn-purple-light)' }
      : { ...base, fontSize: 13, padding: '12px 25px', borderRadius: 'var(--r-pill)', color: 'var(--lavender)', background: 'transparent', border: '1px solid var(--line-strong)' },
    link: { ...base, fontSize: 12, padding: 0, background: 'none', color: light ? 'var(--syn-purple)' : 'var(--iris)' },
  };
  const s = kinds[variant] || kinds.primary;
  return (
    <button type="button" onClick={onClick} style={{ ...s, ...style }}
      onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.15)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = ''; }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}>
      {children}
      {arrow && <Icon name="arrow-right" size={16} color="currentColor" base={iconBase} />}
    </button>
  );
}
