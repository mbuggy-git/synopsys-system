/** Data-insight stat: oversized gradient number + caps label + support line. @startingPoint section="Core" subtitle="Big data-insight number" viewport="700x200" */
export interface StatProps {
  /** The number, e.g. "3.5×", "70%", "$1T+" */
  value: string;
  /** Caps label under the number */
  label?: string;
  /** One supporting sentence */
  desc?: string;
  /** @default 'dark' */
  tone?: 'dark' | 'light';
  /** Neon gradient fill on the number @default true */
  gradient?: boolean;
  /** Number font size px @default 64 */
  size?: number;
  /** Override number color (replaces gradient/tone color) */
  color?: string;
  /** Override caps-label color */
  labelColor?: string;
  style?: React.CSSProperties;
}
export declare function Stat(props: StatProps): JSX.Element;
