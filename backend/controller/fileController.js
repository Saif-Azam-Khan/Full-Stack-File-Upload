const mongoose = require("mongoose");
const File = require("../database/itemModel");
exports.getAllController = async (req, res) => {
  res.status(200).json({ message: "BE connected" });
};

exports.uploadController = (req, res) => {
  const { fileName, size, type } = req.body;
  const newFile = new File({
    fileName: fileName,
    size: size,
    type: type,
  });

  newFile
    .save()
    .then(function (file) {
      res.status(201).json(file);
    })
    .catch(function (err) {
      console.error(err);
      if (err.code === 11000) {
        res.status(501).send("Duplicate key error. Document already exists!");
      }
      res.status(500).send("Error creating file");
    });
};
