/** Card surface (dark, deep, light) with optional neon top rule. @startingPoint section="Core" subtitle="Card surface" viewport="700x220" */
export interface PanelProps {
  children: React.ReactNode;
  /** @default 'dark' */
  tone?: 'dark' | 'deep' | 'light';
  /** 3px neon gradient rule across the top @default false */
  glow?: boolean;
  /** CSS padding @default var(--card-pad) */
  pad?: string;
  style?: React.CSSProperties;
}
export declare function Panel(props: PanelProps): JSX.Element;
