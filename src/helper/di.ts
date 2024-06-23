import { provide } from 'inversify-binding-decorators';
import { controller } from 'inversify-express-utils';
import { Modules } from '../config/modules';
import { container } from '../config/inversify.config';
import { Socket } from 'socket.io';

export const Module = provide;
export const Service = provide;
export const Controller = controller;
export const WsController = (namespace: any) => {

	return (target: any) => {
		Modules.add({
			type: 'ws',
			namespace,
			inject: target,
		});
	};
};
export const AppModule = (options: any) => {

	console.log('AppModule called');


	return (target: any) => {
		Modules.set(options);
	};
};

export const build = (container: any, io: any) => {
//	console.log({
//		container,
//		io,
//	});

//	console.log(Modules.get());

	Modules.get().forEach((module: any) => {

		if (module.type === 'ws') {
			//@ts-ignore
			const controller = container.get(module.inject);

			io.of(module?.namespace).on('connection', (socket: any) => {
				controller.connection();

				socket.on('disconnect', controller.disconnect);

				socket.on('chat message', (msg: any) => {
					console.log('message: ' + msg);
					io.emit('chat message', msg);
				});
			});
		}

	});
};
