const express = require("express");
const processFile = require("../middleware/multer");
const fileRouter = express.Router();

const {
  uploadController,
  getAllController,
//   deleteFileById,
} = require("../controller/fileController");

fileRouter.post("/file/toCloud", processFile.single("file"), uploadController);
fileRouter.get("/file/getAll", getAllController);
// fileRouter.delete("/file/delete/:id", deleteFileById);

module.exports = fileRouter;
