const multer = require("multer");
const fs = require("fs");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const { propertyId } = req.query;
    const uploadPath = `./propertyContract/property-${propertyId}`;
    fs.mkdir(uploadPath, { recursive: true }, (err) => {
      if (err) {
        console.log(err);
      }
    });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    if (!req.count) req.count = 1;
    else req.count = req.count + 1;
    cb(null, `contract-${req.count}.${ext}`);
  },
});
var uploadFile = multer({ storage: storage });
const uploadContract = uploadFile.single("file");

module.exports = uploadContract;
