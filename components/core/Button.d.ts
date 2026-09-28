/** eBook CTA: gradient pill, ghost pill, or spaced-caps arrow link. @startingPoint section="Core" subtitle="CTA button + link" viewport="700x140" */
export interface ButtonProps {
  children: React.ReactNode;
  /** @default 'primary' */
  variant?: 'primary' | 'ghost' | 'link';
  /** Surface the button sits on — 'light' switches ghost/link to Synopsys purple @default 'dark' */
  tone?: 'dark' | 'light';
  /** Trailing arrow icon; defaults on for 'link' */
  arrow?: boolean;
  /** Relative path to assets/icons for the arrow @default "../../assets/icons" */
  iconBase?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
