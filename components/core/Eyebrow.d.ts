/** Spaced-caps microlabel with optional gradient rule — the eBook's signature section marker. @startingPoint section="Core" subtitle="Section eyebrow label" viewport="700x120" */
export interface EyebrowProps {
  children: React.ReactNode;
  /** 'accent' (iris), 'light' (on dark imagery), 'dark' (on white), 'cyan', or any CSS color @default 'accent' */
  tone?: 'accent' | 'light' | 'dark' | 'cyan' | string;
  /** Show the short gradient rule above the label @default true */
  rule?: boolean;
  /** Font size px @default 11 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
