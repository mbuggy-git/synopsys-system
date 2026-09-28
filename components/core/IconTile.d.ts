/** Rounded icon tile: gradient, outline, cyan, or light. @startingPoint section="Core" subtitle="Icon tile" viewport="700x120" */
export interface IconTileProps {
  /** Lucide icon name from assets/icons */
  name: string;
  /** Tile size px @default 44 */
  size?: number;
  /** Icon size px @default half the tile */
  iconSize?: number;
  /** @default 'gradient' */
  tone?: 'gradient' | 'outline' | 'cyan' | 'light';
  /** Relative path to assets/icons @default "../../assets/icons" */
  base?: string;
  style?: React.CSSProperties;
}
export declare function IconTile(props: IconTileProps): JSX.Element;
