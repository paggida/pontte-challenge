const request = require('supertest');
const app = require('../../src/server');

describe('Validation to endpoint "/listMaritalStatus"', () => {
  it('should be able to list all the reference marital statuses', async () => {
    const {status, text} = await request(app)
    .get('/listMaritalStatus');
    const objResponse = JSON.parse(text)

    expect(status).toBe(200);
    expect(objResponse).toHaveLength(5);
    expect(objResponse[0]).toHaveProperty('marital_status_name', 'Solteiro(a)');
    expect(objResponse[1]).toHaveProperty('marital_status_name', 'Casado(a)');
    expect(objResponse[2]).toHaveProperty('marital_status_name', 'Viúvo(a)');
    expect(objResponse[3]).toHaveProperty('marital_status_name', 'Separado(a)');
    expect(objResponse[4]).toHaveProperty('marital_status_name', 'Divorciado(a)');
  });
});
