var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const fileSchema = new Schema({
    fileName: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

var File = mongoose.model('File', fileSchema);
module.exports = File;
