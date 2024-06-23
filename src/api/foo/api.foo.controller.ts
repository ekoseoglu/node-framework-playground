import { Response, Request } from 'express';
import { BaseHttpController, httpGet, request, response } from 'inversify-express-utils';
import { ApiFooService } from './api.foo.service';
import { inject } from 'inversify';
import { TYPES } from '../../constants/di.types';
import { Controller } from '../../helper/di';

@Controller('/foo')
export class ApiFooController extends BaseHttpController {

	constructor(@inject(TYPES.ApiFooService) private fooService: ApiFooService) {
		console.warn('FooController constructor called');
		super();
	}

	@httpGet('/')
	private index(@request() req: Request, @response() res: Response): Response {
		return res.json({ message: 'Hello World' });
	}

	@httpGet('/bar')
	private bar(@request() req: Request, @response() res: Response): Response {
		return res.json({ message: 'Hello Bar' });
	}

	@httpGet('/baz/:id')
	private baz(@request() req: Request, @response() res: Response): Response {
		this.fooService.getFoo();
		return res.json({ message: 'Hello Baz ' + req.params.id });
	}

}
