// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	namespace svelte.JSX {
		interface IntrinsicElements {
			'lottie-player': {
				src: string;
				background: string;
				speed: string;
				style: string;
				loop: boolean;
				autoplay: boolean;
			};
		}
	}
}

export {};
