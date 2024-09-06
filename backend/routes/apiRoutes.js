const express = require("express");
const multer = require('multer');
// const processFile = require("../middleware/multer");
const fileRouter = express.Router();
const upload = multer({ dest: 'uploads/' });
const { uploadController, getAllController, deleteFileById } = require("../controller/fileController");

fileRouter.post("/file/toCloud", upload.single('file'), uploadController);
fileRouter.get("/file/getAll", getAllController);
fileRouter.delete("/file/delete/:id", deleteFileById);

// , fileController.uploadController


module.exports = fileRouter;

