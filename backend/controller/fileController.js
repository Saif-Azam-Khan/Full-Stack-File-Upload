const multer = require("multer");

exports.getAllController = async (req, res) => {
  res.status(200).json({ message: "BE connected" });
};

exports.uploadController = async (req, res) => {
  const upload = multer({ dest: "uploads/" });
  const uploadFileMiddleware = upload.single("file");
  const { originalname, size, mimetype, path } = req.file;
};
