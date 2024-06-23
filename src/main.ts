import 'reflect-metadata';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './config/inversify.config';
import { Server } from 'socket.io';
import { InversifySocketServer } from 'inversify-socket-utils';
import { build } from './helper/di';


//const server = createServer();
//const io = new Server(server, {
//	cors: {
//		origin: "http://localhost:5173",
//	},
//});

const httpServer = new InversifyExpressServer(container);
httpServer.setConfig((app) => {
	app.use(express.json());
});

//io.on('connection', (socket) => {
//	console.log('a user connected');
//	socket.on('disconnect', () => {
//		console.log('user disconnected');
//	});
//	socket.on('chat message', (msg) => {
//		console.log('message: ' + msg);
//		io.emit('chat message', msg);
//	});
//});

const app = httpServer.build();

const server = app.listen(5478, () => {
	console.log('Server started on port 5478');
});

const io = new Server(server, {
	cors: {
		origin: "http://localhost:5173",
	},
});

//const socketServer = new InversifySocketServer(container, io);
//socketServer.build();
build(container, io);

//io.on('connection', (socket) => {
//	console.log('a user connected');
//	socket.on('disconnect', () => {
//		console.log('user disconnected');
//	});
//	socket.on('chat message', (msg) => {
//		console.log('message: ' + msg);
//		io.emit('chat message', msg);
//	});
//});
