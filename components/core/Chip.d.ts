/** Attribute pill ("High-fidelity", "Cloud-ready") in outline, solid, cyan, or light tones. */
export interface ChipProps {
  children: React.ReactNode;
  /** @default 'outline' */
  tone?: 'outline' | 'solid' | 'cyan' | 'light';
  style?: React.CSSProperties;
}
export declare function Chip(props: ChipProps): JSX.Element;
