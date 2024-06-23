
import { provide } from 'inversify-binding-decorators';
import { WsController } from '../helper/di';

@provide(MessageController)
@WsController('/namespace')
export class MessageController {
	constructor() {
		console.error('MessageController constructor called');
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
