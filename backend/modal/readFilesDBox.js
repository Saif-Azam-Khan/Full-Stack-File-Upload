const dbx = require("../config/dBoxConfig");

const readFileDBox = async (res, path) => {
  try {
    const files = await dbx.filesListFolder({ path });
    
    const result =files.result.entries

    return res.status(200).send(result);
  } catch (error) {
    console.error("Error:", error);
    return res.status(400).send(error);
  }
};

module.exports = readFileDBox;
