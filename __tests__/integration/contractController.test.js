const request = require('supertest');
const app = require('../../src/server');
const { Contract } = require('../../src/app/models');

describe('Validation to endpoint "/contract/new"', () => {
  afterAll(async () => {
    await Contract.destroy({ where: { client_cpf: '99999999999' } })
  });
  it('should be able to add a new contract', async () => {
    const response = await request(app)
    .post('/contract/new')
    .send({
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '99999999999',
      value: 1000.01,
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('client_name', 'José');
    expect(response.body).toHaveProperty('client_email', 'jose@ig.com.br');
    expect(response.body).toHaveProperty('client_cpf', '99999999999');
    expect(response.body).toHaveProperty('value', 1000.01);
  });
});
