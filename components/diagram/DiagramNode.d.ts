/** Diagram building block: input row, gradient-ringed core, or outcome card. @startingPoint section="Diagram" subtitle="Diagram node card" viewport="700x160" */
export interface DiagramNodeProps {
  /** Lucide icon name from assets/icons */
  icon?: string;
  title: string;
  desc?: string;
  /** @default 'input' */
  variant?: 'input' | 'core' | 'outcome';
  /** Surface the node sits on @default 'dark' */
  tone?: 'dark' | 'light';
  /** Relative path to assets/icons @default "../../assets/icons" */
  base?: string;
  style?: React.CSSProperties;
}
export declare function DiagramNode(props: DiagramNodeProps): JSX.Element;
