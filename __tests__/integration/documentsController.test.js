const request = require('supertest');
const app = require('../../src/server');

describe('Validation to endpoint "/listDocumentTypes"', () => {
  it('should be able to list all the reference document types', async () => {
    const {status, text} = await request(app)
    .get('/listDocumentTypes');
    const objResponse = JSON.parse(text)

    expect(status).toBe(200);
    expect(objResponse).toHaveLength(4);
    expect(objResponse[0]).toHaveProperty('type_name', 'CNH');
    expect(objResponse[1]).toHaveProperty('type_name', 'CPF');
    expect(objResponse[2]).toHaveProperty('type_name', 'Comprovante de renda');
    expect(objResponse[3]).toHaveProperty('type_name', 'Foto do imóvel');
  });
});
