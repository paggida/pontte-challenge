const express = require("express");
const routes = express.Router();
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const ctrlContract = require("./app/controllers/contractController");

routes.get("/contract/listById/:id", ctrlContract.listById);
routes.get("/contract/listByCpf/:cpf", ctrlContract.listByCpf);
routes.post("/contract/new", ctrlContract.creation);
routes.put("/contract/update/:id", ctrlContract.update);
routes.post("/contract/sendDocument/:id",upload.single("file"),ctrlContract.uploadDocument);
routes.post("/contract/approval/:id", ctrlContract.Approval);

module.exports = routes;
