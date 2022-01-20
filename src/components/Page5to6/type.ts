export interface KamiTag {
  width: number;
  height: number;
  top: number;
  left: number;
  src: string;
}

export interface KamiConfig {
  page: 5 | 6;
  tag: KamiTag;
  hoverTag: KamiTag;
  path: string;
}
