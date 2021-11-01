const mongoose=require('mongoose');


const trackSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    album: {type:mongoose.Schema.Types.ObjectId, ref: 'Album',required: true},
    genre:{type:mongoose.Schema.Types.ObjectId, ref: 'Genre', require: true},
    name: String,
    composer: String,
    duration: Number,
    size: Number,
    price: Number,
});

module.exports= mongoose.model('Track', trackSchema)