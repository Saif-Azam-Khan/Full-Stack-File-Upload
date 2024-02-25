const express = require('express');
const upload = require('../utils/multer');
const fileRouter =express.Router()
const fileController=require('../controller/fileController')


fileRouter.post('/file/upload',upload.single('file'), fileController.uploadController)
fileRouter.get('/file/getAll',fileController.getAllController)


module.exports = fileRouter ;