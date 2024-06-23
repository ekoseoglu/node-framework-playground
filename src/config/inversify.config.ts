import 'reflect-metadata';
import { Container } from 'inversify';
import { buildProviderModule, provide } from 'inversify-binding-decorators';

// Auto Import API Modules
import fs from 'fs';
import path from 'path';
import { Modules } from './modules';
import { App } from '../app.module';


function loadFiles(dir: string, callback: (file: string) => void) {
	fs.readdirSync(dir).forEach((file) => {
		const fullPath = path.join(dir, file);
		if (fs.statSync(fullPath).isDirectory()) {
			loadFiles(fullPath, callback);
		} else {
			callback(fullPath);
		}
	});
}

loadFiles(path.resolve(__dirname, './../api'), (file: string) => {
	require(file);
});
// Auto Import API Modules

import { MessageController } from '../ws/message.controller';
import { BarController } from '../ws/bar.controller';

const container = new Container();
container.load(buildProviderModule());

container.get(MessageController);
container.get(BarController);

container.get<App>(App);

//container.bind<MessageController>(MessageController).to(MessageController);

// Import Startup Modules
Modules.get().forEach((module: any) => {
	if (module.type === 'startup') {
		//@ts-ignore
		container.get(module.inject).init();
	}

//	if (module.type === 'ws') {
//		//@ts-ignore
//		container.get(module.inject);
//	}

});
// Import Startup Modules


export { container };
