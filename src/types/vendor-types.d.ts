declare module "three" {
  const THREE: Record<string, unknown>;
  export default THREE;
}

declare module "vanta/dist/vanta.net.min" {
  type VantaOptions = {
    el: HTMLElement;
    THREE: Record<string, unknown>;
    [key: string]: unknown;
  };

  type VantaEffect = {
    destroy: () => void;
  };

  const VANTA_NET: (options: VantaOptions) => VantaEffect;
  export default VANTA_NET;
}
