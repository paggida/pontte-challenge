const { MaritalStatus } = require('../models');
const db = require("../functions/databaseFunctions");

module.exports = {
  async list(req, res) {
    return res.json(await db.findAll(MaritalStatus));
  },
};
