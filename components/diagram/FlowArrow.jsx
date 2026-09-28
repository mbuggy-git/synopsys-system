export function FlowArrow({ direction = 'right', length = 64, thickness = 2, style }) {
  const vertical = direction === 'down' || direction === 'up';
  const grad = vertical ? 'var(--grad-neon-v)' : 'var(--grad-neon)';
  const rot = { right: 0, down: 90, left: 180, up: 270 }[direction] || 0;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 0, flex: 'none', width: vertical ? 16 : length, height: vertical ? length : 16, position: 'relative', ...style }}>
      <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `rotate(${rot}deg)`, width: vertical ? length : undefined, height: vertical ? 16 : undefined, left: vertical ? (16 - length) / 2 : 0, top: vertical ? (length - 16) / 2 : 0 }}>
        <span style={{ flex: 1, height: thickness, background: 'var(--grad-neon)', borderRadius: 2 }}></span>
        <span style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '8px solid var(--cyan)', filter: 'drop-shadow(0 0 6px rgba(0,129,254,.8))' }}></span>
      </span>
    </span>
  );
}
