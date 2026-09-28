import { Icon } from './Icon.jsx';
export function IconTile({ name, size = 44, iconSize, tone = 'gradient', base = '../../assets/icons', style }) {
  const kinds = {
    gradient: { background: 'var(--grad-brand)', color: '#fff', boxShadow: 'var(--glow-violet)' },
    outline: { background: 'rgba(172,123,234,.1)', color: 'var(--iris)', border: '1px solid var(--line-strong)' },
    cyan: { background: 'rgba(0,129,254,.1)', color: 'var(--cyan)', border: '1px solid rgba(0,129,254,.35)' },
    light: { background: '#fff', color: '#6B3597', border: '1px solid rgba(107,53,151,.35)' },
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, borderRadius: 'var(--r-md)', flex: 'none', ...(kinds[tone] || kinds.gradient), ...style }}>
      <Icon name={name} size={iconSize || Math.round(size * 0.5)} color="currentColor" base={base} />
    </span>
  );
}
