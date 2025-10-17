declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}

interface ModelViewerJSX {
  src?: string;
  alt?: string;
  poster?: string;
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'interaction' | 'manual';
  'camera-controls'?: boolean;
  'disable-zoom'?: boolean;
  'auto-rotate'?: boolean;
  'auto-rotate-delay'?: number;
  'rotation-per-second'?: string;
  'interaction-prompt'?: 'auto' | 'when-focused' | 'none';
  'interaction-prompt-style'?: 'basic' | 'wiggle';
  'interaction-prompt-threshold'?: number;
  'camera-orbit'?: string;
  'camera-target'?: string;
  'field-of-view'?: string;
  'min-camera-orbit'?: string;
  'max-camera-orbit'?: string;
  'min-field-of-view'?: string;
  'max-field-of-view'?: string;
  'shadow-intensity'?: string | number;
  'shadow-softness'?: string | number;
  exposure?: string | number;
  'environment-image'?: string;
  'tone-mapping'?: 'auto' | 'aces' | 'agx' | 'neutral' | 'commerce';
  ar?: boolean;
  'ar-modes'?: string;
  'ar-scale'?: 'auto' | 'fixed';
  'ar-placement'?: 'floor' | 'wall';
  'ios-src'?: string;
  'xr-environment'?: boolean;
  skybox?: string;
  'skybox-height'?: string;
  crossOrigin?: string;
  crossorigin?: string;
  style?: React.CSSProperties;
  id?: string;
  className?: string;
  onLoad?: () => void;
}

interface ModelViewerElement extends HTMLElement {
  model?: {
    materials: Array<{
      name: string;
      pbrMetallicRoughness: {
        baseColorTexture: {
          setTexture: (texture: unknown) => void;
        };
      };
    }>;
  };
  cameraOrbit: string;
  cameraTarget: string;
  autoRotate: boolean;
  createTexture: (url: string) => Promise<unknown>;
}
