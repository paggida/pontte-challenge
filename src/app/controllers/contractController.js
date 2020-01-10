const appConfig = require("../../config/app");
const db = require("../functions/databaseFunctions");

module.exports = {
  async listById(req, res) {
    const { id } = req.params
    return res.send(`route: listById ref: ${id}`)
  },
  async listByCpf(req, res) {
    const { cpf } = req.params
    return res.send(`route: listByCpf ref: ${cpf}`)
  },
  async creation(req, res) {
    return res.send(`route: creation ref: ${JSON.stringify(req.body)}`)
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
