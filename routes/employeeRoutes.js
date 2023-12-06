const express = require("express");
const { addEmployee, addRoles } = require("../controler/employeeControler");
const employeeRouter = express.Router();
employeeRouter.post("/addEmployee",addEmployee);
employeeRouter.post("/addRoles",addRoles);
module.exports = employeeRouter