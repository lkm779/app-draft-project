const mongoose=require('mongoose');


const albumSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    albumid: Number,
    artistid: Number,

});

module.exports= mongoose.model('Album', albumSchema)