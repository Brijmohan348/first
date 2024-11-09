import mongoose from "mongoose";

const Imageschema = new mongoose.Schema({
    originalname: {
        type: String,

    },

}, { timestamps: true })

const Image = new mongoose.model("Image", Imageschema)


// userschema.pre("")

export default Image