declare global {
  interface Window {
    VANTA?: {
      BIRDS: (options: any) => {
        destroy: () => void;
      };
    };
  }
}

export {};
