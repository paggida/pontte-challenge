const express = require("express");
const routes = express.Router();
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const ctrlContract = require("./app/controllers/contractController");
const ctrlMaritalStatuses = require("./app/controllers/maritalStatusesController");
const ctrlDocuments= require("./app/controllers/documentsController");

routes.get("/listDocumentTypes/", ctrlDocuments.list);
routes.get("/listMaritalStatuses/", ctrlMaritalStatuses.list);
routes.get("/contract/listSteps/", ctrlContract.listSteps);
routes.get("/contract/listById/:id", ctrlContract.listById);
routes.get("/contract/listByCpf/:cpf", ctrlContract.listByCpf);
routes.post("/contract/new", ctrlContract.creation);
routes.put("/contract/update/:id", ctrlContract.update);
routes.post("/contract/sendDocument/:id",upload.single("file"),ctrlContract.uploadDocument);
routes.post("/contract/approval/:id", ctrlContract.Approval);

module.exports = routes;
