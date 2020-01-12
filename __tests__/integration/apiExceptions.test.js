const e = require('../../src/app/Exceptions/apiExceptions');
const contractErrorTable = require('../../src/app/Exceptions/contractExceptions');
const databaseErrorTable = require('../../src/app/Exceptions/databaseExceptions');

describe('Validation apiExceptions.js', () => {
  it('should be able to send error message of contract exceptions table', () => {
    const response = e.throwException(1, contractErrorTable);
    expect(response).toHaveProperty('status',1);
    expect(response).toHaveProperty('type','contract');
    expect(response).toHaveProperty('message','Required fields not filled.');
  });
  it('should be able to send error message of database exceptions table', () => {
    const response = e.throwException(1, databaseErrorTable);
    expect(response).toHaveProperty('status',1);
    expect(response).toHaveProperty('type','database');
    expect(response).toHaveProperty('message','Writing error in the table.');
  });
});
