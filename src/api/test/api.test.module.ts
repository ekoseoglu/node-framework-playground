import { provide } from 'inversify-binding-decorators';

@provide(ApiTestModule)
export class ApiTestModule {
	constructor() {
		console.error('ApiTestModule constructor called');
	}

	init() {
		console.error('ApiTestModule start called');
	}
}
