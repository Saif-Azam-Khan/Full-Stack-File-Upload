// const { getListFiles, deleteFile } = require("../modal/readFiles");
const readFileDBox =require("../modal/readFilesDBox")
const uploadFileToDBox=require("../modal/uploadFileToDBox")

exports.getAllController = async (req, res) => {
  readFileDBox(res,"");
};

exports.uploadController = async (req, res) => {
  try {
    await uploadFileToDBox(req, res);
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file`,
    });
  }
};

// exports.deleteFileById = async (req, res) => {
//   console.log(req.params.id);
//   deleteFile(req, res);
// };
