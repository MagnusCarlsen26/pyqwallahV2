declare module "~/lib/vanta-net" {
  type VantaOptions = {
    el: HTMLElement;
    THREE: Record<string, unknown>;
    backgroundAlpha?: number;
    backgroundColor?: number | string;
    color?: number;
    dotSize?: number;
    gyroControls?: boolean;
    maxDistance?: number;
    minHeight?: number;
    minWidth?: number;
    mouseControls?: boolean;
    points?: number;
    scale?: number;
    scaleMobile?: number;
    showDots?: boolean;
    spacing?: number;
    touchControls?: boolean;
    [key: string]: unknown;
  };

  type VantaEffect = {
    destroy: () => void;
  };

  const VANTA_NET: (options: VantaOptions) => VantaEffect;
  export default VANTA_NET;
}
