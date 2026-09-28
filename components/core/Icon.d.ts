/** Masked Lucide icon tinted via `color`. @startingPoint section="Core" subtitle="Brand icon glyph" viewport="700x120" */
export interface IconProps {
  /** Lucide icon file name in assets/icons (e.g. "cpu", "shield-check") */
  name: string;
  /** Square size in px @default 20 */
  size?: number;
  /** Any CSS color @default currentColor */
  color?: string;
  /** Relative path from the consuming page to assets/icons @default "../../assets/icons" */
  base?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
