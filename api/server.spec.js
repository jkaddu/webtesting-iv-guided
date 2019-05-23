const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
	// this test helps make sure we're working in the right testing environment
	it('should set the testing environment', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});

	describe('endpoints', () => {
		describe('GET /', () => {
			// testing status
			it('should return 200 OK using async/await THE SQUAD', async () => {
				const res = await request(server).get('/');
				expect(res.status).toBe(200);
			});
			// testing type
			it('should return JSON', async () => {
				const res = await request(server).get('/');
				expect(res.type).toBe('application/json');
			});
			// testing for content returned in body
			it('should return { api:"up" }', async () => {
				const res = await request(server).get('/');
				expect(res.body).toEqual({ api: 'up' });
			});
		});
	});
});
