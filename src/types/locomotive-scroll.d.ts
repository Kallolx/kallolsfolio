declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el?: HTMLElement;
    smooth?: boolean;
    smoothMobile?: boolean;
    multiplier?: number;
    lerp?: number;
    class?: string;
    initPosition?: { x: number; y: number };
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
  }
} 