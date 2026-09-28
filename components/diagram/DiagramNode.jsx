import { Icon } from '../core/Icon.jsx';
import { IconTile } from '../core/IconTile.jsx';
export function DiagramNode({ icon, title, desc, variant = 'input', tone = 'dark', base = '../../assets/icons', style }) {
  const light = tone === 'light';
  if (variant === 'core') {
    return (
      <div style={{ fontFamily: 'var(--font-core)', position: 'relative', borderRadius: 'var(--r-lg)', padding: '2px', background: 'var(--grad-neon)', boxShadow: light ? 'var(--shadow-card-light)' : 'var(--glow-violet)', ...style }}>
        <div style={{ borderRadius: 14, background: light ? '#fff' : 'var(--surface-panel)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', textAlign: 'center' }}>
          {icon && <IconTile name={icon} tone="gradient" base={base} />}
          <div style={{ fontSize: 17, fontWeight: 700, color: light ? 'var(--text-body-light)' : '#fff', letterSpacing: '.02em' }}>{title}</div>
          {desc && <div style={{ fontSize: 12.5, lineHeight: 1.45, color: light ? 'var(--text-muted-light)' : 'var(--text-muted)' }}>{desc}</div>}
        </div>
      </div>
    );
  }
  const outcome = variant === 'outcome';
  return (
    <div style={{ fontFamily: 'var(--font-core)', display: 'flex', gap: 14, alignItems: desc ? 'flex-start' : 'center', background: light ? '#fff' : 'var(--surface-card)', border: light ? '1px solid rgba(107,53,151,.35)' : '1px solid var(--line)', borderRadius: 'var(--r-md)', padding: '14px 16px', ...style }}>
      {icon && <IconTile name={icon} size={38} tone={outcome ? 'gradient' : light ? 'light' : 'outline'} base={base} />}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
        <div style={{ fontWeight: 700, color: outcome ? (light ? 'var(--syn-purple)' : 'var(--iris)') : (light ? 'var(--text-body-light)' : 'var(--text-body)'), textTransform: outcome ? 'uppercase' : 'none', letterSpacing: outcome ? '.06em' : 0, fontSize: outcome ? 13 : 14.5 }}>{title}</div>
        {desc && <div style={{ fontSize: 12.5, lineHeight: 1.45, color: light ? 'var(--text-muted-light)' : 'var(--text-muted)' }}>{desc}</div>}
      </div>
    </div>
  );
}
