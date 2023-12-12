const express = require("express");
const {
  addContractStatus,
  makeContract,
} = require("../controler/contractControler");
const uploadContract = require("../midlewares/uploadFile");
const contractRouter = express.Router();
contractRouter.post("/addContractStatus", addContractStatus);
contractRouter.post("/makeContract", uploadContract, makeContract);
module.exports = contractRouter;
