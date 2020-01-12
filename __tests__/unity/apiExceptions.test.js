const e = require('../../src/app/Exceptions/apiExceptions');

describe('Validation apiExceptions.js', () => {
  it('should be able to send a custom error message', () => {
    const response = e.throwException({
      name: 'Error',
      message: 'Custom Message'
    });
    expect(response.status).toBe(500);
    expect(response.type).toBe('API');
    expect(response.message).toBe('Custom Message');
  });
  it('should be able to send an unknown error message', () => {
    const response = e.throwException({});
    expect(response.status).toBe(500);
    expect(response.type).toBe('API');
    expect(response.message).toBe('Unknown error accessing external API.');
  });
  it('should be able to send error message of an existing reference table', () => {
    const referenceTable = {
      name: 'refTable',
      data: [
        { status: 1, message: 'Error message.' }
      ]
    }
    const response = e.throwException(1, referenceTable);
    expect(response.status).toBe(1);
    expect(response.type).toBe('refTable');
    expect(response.message).toBe('Error message.');
  });


  it('should not be able to send error message of an inexisting reference table', () => {
    const response = e.throwException(1, {});
    expect(response.status).toBe(1);
    expect(response.type).toBe('Unknown error type');
    expect(response.message).toBe('Unknown error code.');
  });
  it('should not be able to send an unknown error message of an existing reference table', () => {
    const referenceTable = {
      name: 'refTable',
      data: [
        { status: 1, message: 'Error message.' }
      ]
    }
    const response = e.throwException(2, referenceTable);
    expect(response.status).toBe(2);
    expect(response.type).toBe('refTable');
    expect(response.message).toBe('Unknown error code.');
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
    expect(responseUnknTable.status).toBe('X');
    expect(responseUnknTable.type).toBe('Unknown error type');
    expect(responseUnknTable.message).toBe('Unknown error code.');
    expect(responseExistTable.status).toBe('X');
    expect(responseExistTable.type).toBe('refTable');
    expect(responseExistTable.message).toBe('Unknown error code.');
  });
});
