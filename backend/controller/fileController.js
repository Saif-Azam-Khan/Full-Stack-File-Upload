const uploadToGCP = require("../modal/uploadToGCP");
const { getListFiles, deleteFile } = require("../modal/readFiles");
const readFileDBox =require("../modal/readFilesDBox")

exports.getAllController = async (req, res) => {
  readFileDBox(res,"");
};

exports.uploadController = async (req, res) => {
  try {
    uploadToGCP(req, res);
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file`,
    });
  }
};

exports.deleteFileById = async (req, res) => {
  console.log(req.params.id);
  deleteFile(req, res);
};
