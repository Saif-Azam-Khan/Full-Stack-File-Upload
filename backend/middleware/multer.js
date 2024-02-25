// const multer = require("multer");
// const storage = multer.diskStorage({
//   storage: multer.memoryStorage(),
//   limits: {
//     fileSize: 100 * 1024 * 1024,
//   },
// });
// const upload = multer({ storage: storage });
// module.exports = upload;
const util = require("util");
const Multer = require("multer");
const maxSize = 5 * 1024 * 1024;

let processFile = Multer({
  storage: Multer.memoryStorage(),
  limits: { fileSize: maxSize },
}).single("file");

let processFileMiddleware = util.promisify(processFile);
module.exports = processFileMiddleware;