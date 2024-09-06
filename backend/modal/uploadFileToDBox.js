const dbx = require("../config/dBoxConfig");

const uploadFileToDBox = async (req, res) => {
  try {
    const path = "/" + req.file.originalname;
    const fileContent = req.file.buffer;

    if (fileContent) {
      const fileuploaded = await dbx.filesUpload({
        path,
        contents: fileContent,
      });
      res.status(200).send(fileuploaded.result);
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = uploadFileToDBox;
