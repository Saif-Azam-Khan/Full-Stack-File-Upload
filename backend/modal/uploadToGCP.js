const path = require("path");
const { Storage } = require("@google-cloud/storage");
const processFile = require("../middleware/multer");
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

const uploadToGCP = async (req, res) => {
  await storage.bucket(bucketName).makePublic();
  try {
    await processFile(req, res);

    if (req.file.size > 5 * 1024 * 1024) {
      return {
        status: 401,
        message: "Please upload a file within 5MB of size",
      };
    }
    if (!req.file) {
      return { status: 400, message: "Please upload a file!" };
    }

    const blob = bucket.file(req.file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on("error", (err) => {
      res.status(500).send({ message: err.message });
    });

    blobStream.on("finish", async (data) => {
      try {
        await bucket.file(req.file.originalname).makePublic();
      } catch {
        return res.status(500).send({
          message: `File not uploaded successfully`,
        });
      }
      res.status(200).send({
        message: "Uploaded the file successfully",
      });
    });

    blobStream.end(req.file.buffer);
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file`,
    });
  }
};

module.exports = uploadToGCP;
