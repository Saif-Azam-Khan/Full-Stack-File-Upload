const express = require('express');
const fileRouter =express.Router()
const fileController=require('../controller/fileController')


fileRouter.post('/file/upload',fileController.uploadController)
fileRouter.get('/file/getAll',fileController.getAllController)


module.exports = fileRouter ;