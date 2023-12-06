const express = require("express");
const {
  addPropertyType,
  addProperty,
  addPropertyImages,
  getAllProperty,
  addPropertyEmployee,
} = require("../controler/propertyControler");
const upload = require("../midlewares/uploadImage");
const propertyRouter = express.Router();
propertyRouter.post("/addPropertyType", addPropertyType);
propertyRouter.post("/addProperty", addProperty);
propertyRouter.get("/getAllProperty", getAllProperty);
propertyRouter.post("/addPropertyEmployee", addPropertyEmployee);
propertyRouter.post(
  "/addPropertyImages/:id",
  upload.array("image", 15),
  addPropertyImages
);
module.exports = propertyRouter;
