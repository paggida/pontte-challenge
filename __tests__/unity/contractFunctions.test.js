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
    expect(responseObj).toHaveProperty('contract_step_code',1);
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

describe('isContractEditable function validation', () => {
  it('should be able to edit contracts that have not been finalized', async () => {
    const contract = {
      contract_step_code: 1
    };
    const response = fnc.isContractEditable(contract)
    expect(response).toBeTruthy()
  });
  it('should not be able to edit contracts that have been finalized', async () => {
    const contract = {
      contract_step_code: 3
    };
    const response = fnc.isContractEditable(contract)
    expect(response).toBeFalsy()
  });
  it('should not be able to edit invalid contract object', async () => {
    const response = fnc.isContractEditable({})
    expect(response).toBeFalsy()
  });
});

describe('advanceToUploadStep function validation', () => {
  it('should be able to advance the step of valid contract object', async () => {
    const contract = {
      contract_step_code: 1
    };
    const response = fnc.advanceToUploadStep(contract)
    expect(response).toHaveProperty('contract_step_code', 2)
  });
  it('should not be able to advance the step of invalid contract object', async () => {
    const response = fnc.advanceToUploadStep({})
    expect(response).toMatchObject({})
  });
});

describe('buildDocumentObj function validation', () => {
  it('should be able to return a document object', async () => {
    const response = fnc.buildDocumentObj('imagem.png',1,2)
    expect(response).toHaveProperty('file_name','imagem.png')
    expect(response).toHaveProperty('document_type_code',1)
    expect(response).toHaveProperty('contract_code',2)
  });
});

describe('removeUnauthorizedFields function validation', () => {
  it('should be able to return only authorized Fields for update', async () => {
    const contract = {
      client_name:1,
      client_email:2,
      client_cpf:3,
      contract_value:4,
      client_monthly_income:5,
      client_birthday:6,
      client_marital_status_code:7,
      client_address:8,
      fakeField:9
    };
    const response = fnc.removeUnauthorizedFields('imagem.png',1,2)
    expect(response).toHaveProperty('client_name')
    expect(response).toHaveProperty('client_email')
    expect(response).toHaveProperty('client_cpf')
    expect(response).toHaveProperty('contract_value')
    expect(response).toHaveProperty('client_monthly_income')
    expect(response).toHaveProperty('client_birthday')
    expect(response).toHaveProperty('client_marital_status_code')
    expect(response).toHaveProperty('client_address')
    expect(response.fakeField).toBeFalsy()
  });
});
