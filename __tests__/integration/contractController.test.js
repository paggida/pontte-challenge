const request = require('supertest');
const app = require('../../src/server');
const { Contract } = require('../../src/app/models');

describe('Validation to endpoint "/contract/listSteps"', () => {
  it('should be able to list all the reference contract steps', async () => {
    const {status, text} = await request(app)
    .get('/contract/listSteps');
    const objResponse = JSON.parse(text)

    expect(status).toBe(200);
    expect(objResponse).toHaveLength(3);
    expect(objResponse[0]).toHaveProperty('contract_step_definition', 'Criação');
    expect(objResponse[1]).toHaveProperty('contract_step_definition', 'Upload de imagens');
    expect(objResponse[2]).toHaveProperty('contract_step_definition', 'Aprovação');
  });
});

describe('Validation to endpoint "/contract/listById"', () => {
  afterAll(async () => {
    await Contract.destroy({ where: { client_cpf: '99999999999' } })
  });
  it('should find a contract by id', async () => {
    const { status : createStatus, text: createText } = await request(app)
    .post('/contract/new')
    .send({
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '99999999999',
      contract_value: 1000.01,
    });
    const { id } = JSON.parse(createText)
    expect(createStatus).toBe(200);

    const {status, text} = await request(app)
    .get(`/contract/listById/${id}`);
    const objResponse = JSON.parse(text)

    expect(status).toBe(200);
    expect(objResponse.id).toBe(id);
    expect(objResponse).toHaveProperty('client_name', 'José');
    expect(objResponse).toHaveProperty('client_email', 'jose@ig.com.br');
    expect(objResponse).toHaveProperty('client_cpf', '99999999999');
    expect(objResponse).toHaveProperty('contract_value', 1000.01);
    expect(objResponse).toHaveProperty('contract_step_code');
    expect(objResponse).toHaveProperty('created_at');
    expect(objResponse).toHaveProperty('updated_at');
  });
});

describe('Validation to endpoint "/contract/listByCpf"', () => {
  afterAll(async () => {
    await Contract.destroy({ where: { client_cpf: '99999999999' } })
  });
  it('should find all contracts of a especific CPF', async () => {
    const { status : createStatus01 } = await request(app)
    .post('/contract/new')
    .send({
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '99999999999',
      contract_value: 1000.01,
    });
    expect(createStatus01).toBe(200);

    const { status : createStatus02 } = await request(app)
    .post('/contract/new')
    .send({
      client_name: 'Maria',
      client_email: 'maria@ig.com.br',
      client_cpf: '99999999999',
      contract_value: 1000.01,
    });
    expect(createStatus02).toBe(200);


    const {status, text} = await request(app)
    .get(`/contract/listByCpf/99999999999`);
    const objResponse = JSON.parse(text)

    expect(status).toBe(200);
    expect(objResponse).toHaveLength(2);
    expect(objResponse[0]).toHaveProperty('client_name', 'José');
    expect(objResponse[1]).toHaveProperty('client_name', 'Maria');
  });
});

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
      contract_value: 1000.01,
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('client_name', 'José');
    expect(response.body).toHaveProperty('client_email', 'jose@ig.com.br');
    expect(response.body).toHaveProperty('client_cpf', '99999999999');
    expect(response.body).toHaveProperty('contract_value', 1000.01);
  });
});
