
import { TYPES } from '../../constants/di.types';
import { Service } from '../../helper/di';

@Service(TYPES.ApiFooService)
export class ApiFooService {
	constructor() {
		console.warn('FooService constructor called');
	}

	getFoo() {
		console.warn('FooService getFoo called');
		return 'Foo';
	}
}
