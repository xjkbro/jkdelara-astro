/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly FIREBASE_API_KEY: string;
	readonly FIREBASE_AUTH_DOMAIN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
