import { Body, JsonController, Post, Get } from "routing-controllers";
import { Service } from "typedi";
import { Message } from './message.models';

@Service()
@JsonController()
export class MessagesController {

	@Get()
	public ok(): any {
		return {};
	}

	@Post("/")
	public async validate(@Body() message: Message): Promise<any> {
		return { ok: true };
	}

	@Post('/allow-all')
	public async validateOk(@Body({ validate: { forbidNonWhitelisted: false } }) message: Message): Promise<any> {
		return { ok: true };
	}
}
