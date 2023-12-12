const { Feature } = require("../models");

exports.addFeature = async (req, res) => {
  try {
    const { featureName } = req.body;
    const newFeature = await Feature.create({ featureName });
    res.status(201).json({
      status: "success",
      data: {
        newFeature,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      status: "Fail",
      message: err,
    });
  }
};
