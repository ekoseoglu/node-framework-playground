import { Module } from '../helper/di';


@Module(StartupFooModule)
export class StartupFooModule {
	constructor() {
		console.error('StartupFooModule constructor called');
	}

	init() {
		console.error('StartupFooModule start called');
	}
}
