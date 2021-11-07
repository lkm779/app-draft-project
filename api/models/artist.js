const mongoose=require('mongoose');


const artistSchema= new mongoose.Schema({
    name: String,
    id: Number,
});

module.exports= mongoose.model('Artist', artistSchema)