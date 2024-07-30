const mongoose = require('mongoose');
const ChatSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    message: {
        type:String,
        required:true,
    }

},{timestamp:true});
const Chats  = mongoose.model('Chats',ChatSchema);
module.exports = Chats;