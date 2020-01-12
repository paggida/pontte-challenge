const e = require('../../src/app/Exceptions/apiExceptions');

describe('Validation apiExceptions.js', () => {
  it('should be able to send a custom error message', () => {
    const response = e.throwException({
      name: 'Error',
      message: 'Custom Message'
    });
    expect(response).toHaveProperty('status',500);
    expect(response).toHaveProperty('type','API');
    expect(response).toHaveProperty('message','Custom Message');
  });
  it('should be able to send an unknown error message', () => {
    const response = e.throwException({});
    expect(response).toHaveProperty('status',500);
    expect(response).toHaveProperty('type','API');
    expect(response).toHaveProperty('message','Unknown error accessing external API.');
  });
  it('should be able to send error message of an existing reference table', () => {
    const referenceTable = {
      name: 'refTable',
      data: [
        { status: 1, message: 'Error message.' }
      ]
    }
    const response = e.throwException(1, referenceTable);
    expect(response).toHaveProperty('status',1);
    expect(response).toHaveProperty('type','refTable');
    expect(response).toHaveProperty('message','Error message.');
  });
  it('should not be able to send error message of an inexisting reference table', () => {
    const response = e.throwException(1, {});
    expect(response).toHaveProperty('status',1);
    expect(response).toHaveProperty('type','Unknown error type');
    expect(response).toHaveProperty('message','Unknown error code.');
  });
  it('should not be able to send an unknown error message of an existing reference table', () => {
    const referenceTable = {
      name: 'refTable',
      data: [
        { status: 1, message: 'Error message.' }
      ]
    }
    const response = e.throwException(2, referenceTable);
    expect(response).toHaveProperty('status',2);
    expect(response).toHaveProperty('type','refTable');
    expect(response).toHaveProperty('message','Unknown error code.');
  });
  it('should not be able to send a invalid error code', () => {
    const referenceTable = {
      name: 'refTable',
      data: [
        { status: 1, message: 'Error message.' }
      ]
    }
    const responseExistTable = e.throwException(0, referenceTable);
    const responseUnknTable = e.throwException(0, {});
    expect(responseUnknTable).toHaveProperty('status','X');
    expect(responseUnknTable).toHaveProperty('type','Unknown error type');
    expect(responseUnknTable).toHaveProperty('message','Unknown error code.');
    expect(responseExistTable).toHaveProperty('status','X');
    expect(responseExistTable).toHaveProperty('type','refTable');
    expect(responseExistTable).toHaveProperty('message','Unknown error code.');
  });
});
