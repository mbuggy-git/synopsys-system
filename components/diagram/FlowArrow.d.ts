/** Neon gradient flow connector with glowing cyan head. */
export interface FlowArrowProps {
  /** @default 'right' */
  direction?: 'right' | 'left' | 'down' | 'up';
  /** Length px along the flow axis @default 64 */
  length?: number;
  /** Line thickness px @default 2 */
  thickness?: number;
  style?: React.CSSProperties;
}
export declare function FlowArrow(props: FlowArrowProps): JSX.Element;
