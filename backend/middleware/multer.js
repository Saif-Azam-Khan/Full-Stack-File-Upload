const Multer = require("multer");

let processFile = Multer({
  storage: Multer.memoryStorage(),
})

module.exports = processFile;
