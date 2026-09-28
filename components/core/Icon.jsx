const _iconCache = {};
export function Icon({ name, size = 20, color = 'currentColor', base = '../../assets/icons', style }) {
  const url = base + '/' + name + '.svg';
  const [svg, setSvg] = React.useState(_iconCache[url] || null);
  React.useEffect(() => {
    let live = true;
    if (_iconCache[url]) { setSvg(_iconCache[url]); return; }
    fetch(url).then((r) => (r.ok ? r.text() : null)).then((t) => { if (t) { _iconCache[url] = t; if (live) setSvg(t); } }).catch(() => {});
    return () => { live = false; };
  }, [url]);
  // Lucide SVGs stroke with currentColor, so inlining lets `color` tint them (and survives DOM-based capture, unlike CSS masks).
  const html = svg ? svg.replace('<svg ', '<svg width="100%" height="100%" ') : '';
  return <span aria-hidden="true" style={{ display: 'inline-flex', width: size, height: size, color: color, flex: 'none', ...style }} dangerouslySetInnerHTML={{ __html: html }}></span>;
}
