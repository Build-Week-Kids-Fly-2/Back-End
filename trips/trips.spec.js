// Imports Needed - supertest + authRouter
const request = require('supertest');
const server = require('../api/server');

describe('PUT /', () => {
    it('should return http status of 200', async () => {

        const call = await request(server)
            .put('/api/auth/register')
            .send(  {
                id: 3,
                name: "Italy",
              })
            expect(call.status).toBe(201)
    });

    it('should return 500 http status code', async () => {

        const call = await request(server)
        .post('/api/auth/register')
        console.log(call.status)
        expect(call.status).toBe(500);
    });
})

// Delete TEST
describe('DELETE /login', () => {
    // sohuld return http status 200
    it('should return 200 http status code', async () => {
        const call = await request(server)
        .delete('/api/auth/login')
        .send({ email: "hell0000001Test", password: "1234" })
        expect(call.status).toBe(200)
    });

    it('should return 500 http status code on fail', async () => {
        const call = await request(server)
        .post('/api/auth/login')
        expect(call.status).toBe(500)
    });
});
