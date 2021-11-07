const mongoose=require('mongoose');


const trackSchema= new mongoose.Schema({
    album: {type:mongoose.Schema.Types.ObjectId, ref: 'Album',required: true},
    genre:{type:mongoose.Schema.Types.ObjectId, ref: 'Genre', require: true},
    name: String,
    composer: String,
    duration: Number,
    size: Number,
    price: Number,
    milliseconds: Number,
});

module.exports= mongoose.model('Track', trackSchema)