const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    phone: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    memoryStorageCapacity: {
        type:  String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    formFactor: {
        type: String,
        required: true
    },
    os: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    displaySize: {
        type: String,
        required: true
    },
    otherCameraFeatures: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('posts', postSchema);