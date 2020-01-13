const fnc = require('../../src/app/functions/contractFunctions');

describe('RemoveInvalidFields function validation', () => {
  it('should be able to remove all invalid value fields in an object', async () => {
    const object = {
      field01: 'OK',
      field02: '',
      field03: 0,
      field04: false,
    };
    const responseObj = fnc.removeInvalidFields(object)
    expect(Object.keys(responseObj)).toHaveLength(2);
    expect(responseObj).toHaveProperty('field01','OK');
    expect(responseObj).toHaveProperty('field04',false);
  });
});

describe('AddStatusNewContract function validation', () => {
  it('should be able to add the status that indicates a new contract', async () => {
    const object = {
      field01: 'OK',
      field04: false,
    };
    const responseObj = fnc.addStatusNewContract(object)
    expect(responseObj).toHaveProperty('contract_step_code',0);
  });
});

describe('isRequiredFieldsCorrect function validation', () => {
  it('should be able to validate an object with all required fields and valid values', async () => {
    const object = {
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '99999999999',
      contract_value: 1000.00,
      active: false
    };
    const response = fnc.isRequiredFieldsCorrect(object)
    expect(response).toBeTruthy();
  });
  it('should no be able to validate an object without a required fields', async () => {
    const object = {
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '99999999999'
    };
    const response = fnc.isRequiredFieldsCorrect(object)
    expect(response).toBeFalsy();
  });
  it('should not be able to validate an object with a invalid value', async () => {
    const object = {
      client_name: 'José',
      client_email: 'jose@ig.com.br',
      client_cpf: '',
      contract_value: 1000.00,
    };
    const response = fnc.isRequiredFieldsCorrect(object)
    expect(response).toBeFalsy();
  });
});

