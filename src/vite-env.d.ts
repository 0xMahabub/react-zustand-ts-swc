/// <reference types="vite/client" />
/// <reference types="vitest" />

// Environment Variables
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // more env variables...
}

// do not touch (if u don't understand much here)
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
