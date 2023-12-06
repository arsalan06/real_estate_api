const express = require("express");
const { addClient, addClientInterest } = require("../controler/clientControler");
const clientRouter = express.Router();
clientRouter.post("/addClient", addClient);
clientRouter.post("/clientInterest", addClientInterest);
module.exports = clientRouter;
