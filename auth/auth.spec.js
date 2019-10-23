// Imports Needed - supertest + authRouter
const request = require('supertest');
const server = require('../api/server');

describe('POST /', () => {
    it('should return http status of 200', async () => {

        const call = await request(server)
            .post('/api/auth/register')
            .send({
                email: "test2.2",
                password:	"password2.2",
                fullName: "Test Me2.2",
                address: "123 here SanFrancisco CA 2.2",	
                phone: "123-456-7890 2.2",	
                localAirport: "SF 2.2"
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

// LOGIN TEST
describe('POST /login', () => {
    // sohuld return http status 200
    it('should return 200 http status code', async () => {
        const call = await request(server)
        .post('/api/auth/login')
        .send({ email: "hell0000001Test", password: "1234" })
        expect(call.status).toBe(200)
    });

    it('should return 500 http status code on fail', async () => {
        const call = await request(server)
        .post('/api/auth/login')
        expect(call.status).toBe(500)
    });
});