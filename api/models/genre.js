const mongoose=require('mongoose');


const genreSchema= new mongoose.Schema({
    name: String,
    id: Number,
});

module.exports= mongoose.model('Genre', genreSchema)