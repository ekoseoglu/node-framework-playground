import { provide } from 'inversify-binding-decorators';
import { WsController } from '../helper/di';

@provide(BarController)
@WsController('/bar')
export class BarController {
	constructor() {
		console.error('BarController constructor called');
	}

	connection() {
		console.log("client connected");
	}

	disconnect() {
		console.log("client disconnected");
	}

	message(socket: any) {
		console.log("message received");
		socket.emit("message", "hello!");
	}
}
