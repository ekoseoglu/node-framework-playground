import { provide } from 'inversify-binding-decorators';

@provide(StartupFooModule)
export class StartupFooModule {
	constructor() {
		console.error('StartupFooModule constructor called');
	}

	init() {
		console.error('StartupFooModule start called');
	}
}
