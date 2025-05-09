const mongoose = require('mongoose');

const userEnqerySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true,
    },
    msg: {
        type: String, 
        required: true
    }
})

let enqueryModel = mongoose.model("Enquiry", userEnqerySchema)
module.exports=enqueryModel;
