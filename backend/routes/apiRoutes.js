const express = require("express");
const fileRouter = express.Router();
const fileController = require("../controller/fileController");

fileRouter.post("/file/toCloud", fileController.uploadController);
fileRouter.get("/file/getAll", fileController.getAllController);
fileRouter.delete("/file/delete/:id", fileController.deleteFileById);

module.exports = fileRouter;

