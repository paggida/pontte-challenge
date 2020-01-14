const { MaritalStatus } = require('../models');
const db = require("../functions/databaseFunctions");

module.exports = {
  async list(req, res) {
    return res.send(`route: list`);
  },
};
