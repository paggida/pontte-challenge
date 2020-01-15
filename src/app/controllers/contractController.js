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
    const { id: contractId } = req.params
    const { type } = req.query

    // Validates parameter fill
    if (!contractId || !type) return res.json(e.throwAppException(1, contractErrorTable))
    const currentContract= await db.findById(contractId, Contract)
    const {id: documentTypeId} = await db.findById(type, DocumentTypes)

    const isExistingContract = !currentContract.id
    const isExistingDocumentType = !documentTypeId
    if (isExistingContract) return res.json(e.throwAppException(2, contractErrorTable))
    if (isExistingDocumentType) return res.json(e.throwAppException(3, contractErrorTable))

    if(!fnc.isContractEditable(currentContract)) return res.json(e.throwAppException(4, contractErrorTable))

    // If the contract was still at an earlier stage update it
    if(currentContract!==2){
      const updateContract = fnc.advanceStepContract(currentContract)
      await db.update(contractId, updateContract, Contract)
    }
    if(!req.file) return res.json(e.throwAppException(1, contractErrorTable))

    const newDocumentRecord = fnc.buildDocumentObj(req.file.filename, type, contractId)
    return res.json(await db.insert(newDocumentRecord, Documents))
  },
  async Approval(req, res) {
    const { id } = req.params
    const { approval } = req.body
    return res.send(`route: Approval ref: ${id} / ${approval}`)
  }
};
