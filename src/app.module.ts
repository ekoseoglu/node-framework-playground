import { provide } from 'inversify-binding-decorators';
import { AppModule, Module } from './helper/di';
import { StartupFooModule } from './startup/startup.foo.module';
import { MessageController } from './ws/message.controller';

@AppModule([
	{
		type: 'startup',
		name: 'StartFooModule',
		inject: StartupFooModule,
	},
//	{
//		type: 'ws',
//		name: 'MessageController',
//		inject: MessageController,
//	}
])
@Module(App)
export class App {
}

