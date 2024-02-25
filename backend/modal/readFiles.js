const path = require("path");
const { Storage } = require("@google-cloud/storage");
const PROJECT_ID = process.env.PROJECT_ID;
const storage = new Storage({
  keyFilename: path.join(
    __dirname,
    "../mern-stack-file-upload-5e6c803db8e7.json"
  ),
  projectId: PROJECT_ID,
});

const bucketName = "mern-bucket";
const bucket = storage.bucket(bucketName);

const getListFiles = async (req, res) => {
  try {
    const [files] = await bucket.getFiles();
    let fileInfos = [];

    files.forEach((file) => {
      let type = file.name.split(".").slice(-1);
      fileInfos.push({
        id: file.metadata.id,
        fileName: file.name,
        size: file.metadata.size,
        type: type,
        url: file.metadata.mediaLink,
      });
    });
    res.status(200).send(fileInfos);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Unable to read list of files!",
    });
  }
};

const deleteFile =async (req, res) => {
  const fileName = req.params.id;
  try {
    const file = bucket.file(fileName);
    const exists = await file.exists();
    if (exists[0]) {
      await file.delete();
      console.log(`File ${fileName} deleted successfully.`);
    } else {
      console.log(`File ${fileName} does not exist.`);
    }
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};

module.exports = {
  getListFiles,
  deleteFile,
};
