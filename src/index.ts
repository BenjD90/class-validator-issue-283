import 'reflect-metadata';
import * as rpn from 'request-promise-native';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { MessagesController } from './messages.controller';

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

/**
 * We create a new express server instance.
 * We could have also use useExpressServer here to attach controllers to an existing express instance.
 */
const expressApp = createExpressServer({
	/**
	 * We can add options about how routing-controllers should configure itself.
	 * Here we specify what controllers should be registered in our express server.
	 */
	controllers: [
		MessagesController,
	],
	validation: {
		forbidNonWhitelisted: true,
		whitelist: true,
	},
});

/**
 * Start the express app.
 */
const port = 3000;
expressApp.listen(port);

console.log(`Server is up and running at port ${port}`);

console.log(`TESTS - START`);

(async () => {
	const baseURL = `http://localhost:${port}`;
	const req1 = await rpn(baseURL);

	const req2 = await rpn({
		method: 'POST',
		uri: `${baseURL}`,
		body: {
			body: 'Message content',
		},
		json: true,
	});
	console.log('req2 : ', req2);

	// try {
	// 	const req3 = await rpn({
	// 		method: 'POST',
	// 		uri: `${baseURL}`,
	// 		body: {
	// 			wonrgBodyField: 'Message content',
	// 		},
	// 		json: true,
	// 	});
	// } catch (e) {
	// 	if (e.statusCode === 400) {
	// 		console.log(`TESTS - Error OK, error message : ${JSON.stringify(e.error.errors)}`);
	// 	}
	// }
})().then(() => {
			console.log('TESTS - END OK');
			process.exit(0);
		})
		.catch((e) => {
			console.error('TESTS - END KO', e);
			console.log('\n\n\n TESTS - HTTP Error : ', JSON.stringify(e.error, null, 2));
			process.exit(0);
		});
