import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    fileId: {
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
    extension: {
        type: String,
        required: true
    }
});

export default mongoose.model('File', fileSchema);
