const db = require('../../src/app/functions/databaseFunctions');
const contractFnc = require("../../src/app/functions/contractFunctions");
const { Contract } = require('../../src/app/models');

describe('Insert function validation', () => {
  afterAll(async () => {
    await Contract.destroy({ where: { client_cpf: '99999999999' } })
  });
  it('should be able to add a new record in an existent table', async () => {
    const newRecord = {
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '99999999999',
      contract_value: 1000.01,
    };
    const completeRecord = contractFnc.addStatusNewContract(newRecord)
    const response = await db.insert(completeRecord, Contract)
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('client_name', 'José');
    expect(response).toHaveProperty('client_email', 'jose@ig.com.br');
    expect(response).toHaveProperty('client_cpf', '99999999999');
    expect(response).toHaveProperty('contract_value', 1000.01);
  });
  it('should not be able to add a new record in a nonexistent table', async () => {
    const newRecord = {
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '99999999999',
      contract_value: 1000.01,
    };
    const completeRecord = contractFnc.addStatusNewContract(newRecord)
    const response = await db.insert(completeRecord, {})
    expect(response).toHaveProperty('status', 5);
    expect(response).toHaveProperty('message', 'Nonexistent model.');
    expect(response).toHaveProperty('type', 'database');
  });
});

describe('Delete function validation', () => {
  it('should be able to delete an existent record in an existent table', async() => {
    const newRecord = {
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '99999999999',
      contract_value: 1000.01,
    };
    const completeRecord = contractFnc.addStatusNewContract(newRecord)
    const { id: newId } = await db.insert(completeRecord, Contract)
    await db.delete(newId, Contract)
    const responseSearch = await db.findById(newId, Contract)
    expect(responseSearch).toBeNull()
  });
  it('should not be able to delete a record in a nonexistent table', async () => {
    const response = await db.delete(1, ()=>{})
    expect(response).toHaveProperty('status', 5);
    expect(response).toHaveProperty('message', 'Nonexistent model.');
    expect(response).toHaveProperty('type', 'database');
  });
});

describe('FindById function validation', () => {
  afterAll(async () => {
    await Contract.destroy({ where: { client_cpf: '99999999999' } })
  });
  it('should be able to find an existent record in an existent table', async () => {
    const newRecord = {
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '99999999999',
      contract_value: 1000.01,
    };
    const completeRecord = contractFnc.addStatusNewContract(newRecord)
    const { id: newId } = await db.insert(completeRecord, Contract)
    const response = await db.findById(newId, Contract)

    expect(response).toHaveProperty('id', newId);
    expect(response).toHaveProperty('created_at');
    expect(response).toHaveProperty('updated_at');
  });
  it('should not be able to find an unknown record in an existent table', async () => {
    const response = await db.findById(0, Contract);
    expect(response).toBeNull();
  });
  it('should not be able to find a record in an unknown table', async () => {
    const response = await db.findById(1, ()=>{});
    expect(response).toHaveProperty('status', 5);
    expect(response).toHaveProperty('message', 'Nonexistent model.');
    expect(response).toHaveProperty('type', 'database');
  });
});
