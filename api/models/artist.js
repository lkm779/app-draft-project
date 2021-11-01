const mongoose=require('mongoose');


const artistSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    id: Number,
});

module.exports= mongoose.model('Artist', artistSchema)