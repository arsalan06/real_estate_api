const multer = require("multer");
const fs = require("fs");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const propertyId = req.params.id;
    const uploadPath = `./propertyImages/property-${propertyId}`;
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
    cb(null, `image-${req.count}.${ext}`);
  },
});
var upload = multer({ storage: storage });
const uploadImages = upload.array("image", 15);

module.exports = { uploadImages, uploadImage };
