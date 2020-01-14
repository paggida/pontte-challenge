const { Contract, ContractSteps, Documents, DocumentTypes } = require('../models');
const fnc = require("../functions/contractFunctions");
const db = require("../functions/databaseFunctions");
const e = require("../Exceptions/apiExceptions");
const contractErrorTable = require("../Exceptions/contractExceptions");

module.exports = {
  async listSteps(req, res) {
    return res.json(await db.findAll(ContractSteps));
  },
  async listById(req, res) {
    const { id } = req.params;
    return res.json(await db.findById(id, Contract));
  },
  async listByCpf(req, res) {
    const { cpf } = req.params;
    return res.json(await db.findByfield(cpf,'client_cpf', Contract));
  },
  async creation(req, res) {
    const cleanBody = fnc.removeInvalidFields(req.body);
    const completeBody = fnc.addStatusNewContract(cleanBody);
    const response = (fnc.isRequiredFieldsCorrect(cleanBody))?
                      await db.insert(completeBody, Contract) :
                      e.throwAppException(1, contractErrorTable)
    return res.json(response);
  },
  async update(req, res) {
    const { id } = req.params
    return res.send(`route: update ref: ${id} / ${JSON.stringify(req.body)}`)
  },
  async uploadDocument(req, res) {
    const { id } = req.params
    const { type } = req.query
    const { filename: doc } = req.file;
    return res.send(`route: uploadDocument ref: ${id} / ${doc} / ${type}`)
  },
  async Approval(req, res) {
    const { id } = req.params
    const { approval } = req.body
    return res.send(`route: Approval ref: ${id} / ${approval}`)
  }
};
