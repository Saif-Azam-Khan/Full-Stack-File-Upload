const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  fileName: { type: String, unique: true },
  type: { type: String, required: true },
  size: { type: String, required: true },
  url: { type: String},
});

const File = mongoose.model("File", FileSchema);

module.exports = File;
