const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Add your models here.
const MessageSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    auther: {type: Schema.Types.OpjectId, ref, "user", required: true}
})

const Message = mongoose.model('message', MessageSchema)

module.export = Message
