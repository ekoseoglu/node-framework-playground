export class Modules {
	private static modules: any[] = [];

	constructor() {
		console.error('Modules constructor called');
	}

	static set(module: any[]) {
		console.error('Modules add called');
		this.modules = module;
	}

	static add(modules: any) {
		console.error('Modules add called');
		this.modules = this.modules.concat(modules);
	}

	static get() {
		console.error('Modules get called');
		return this.modules;
	}
}
