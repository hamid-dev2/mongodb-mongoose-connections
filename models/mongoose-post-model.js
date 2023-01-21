const { Schema, model } = require('mongoose');


const postSchema = new Schema({
    title : String,
    content : String
})

module.exports = model("Post", postSchema)