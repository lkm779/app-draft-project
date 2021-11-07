const mongoose=require('mongoose');


const albumSchema= new mongoose.Schema({
    title:String,
    albumid: Number,
    artistid: Number,

});

module.exports= mongoose.model('Album', albumSchema)