const express= require ('express');
const router= express.Router();
const mongoose= require('mongoose');
const checkAuth= require('../middleware/check-auth');

const Track= require('../models/track');
const Album= require('../models/album');
const Genre= require('../models/genre');


router.get('/',(req,res,next)=>{
    Track.find().exec()
    .then(docs=>{console.log(docs);
    res.status(200).json(docs);
})
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});


router.post('/', checkAuth, (req,res,next)=>{
        const track= new Track({
        _id: new mongoose.Types.ObjectId(),
        album: req.body.albumId,
        genre:req.body.genreId,
        name: req.body.name,
        price:req.body.price,
        composer:req.body.composer,
        duration:req.body.duration,
        size:req.body.size,
       

    });
    track.save().exec().then(result=>{
        console.log(results); res.status(201).json({
            message:'POST tracks was created',
            createdTrack: result
        });
    })
    .catch (err=> {
        console.log(err);
        res.status(500).json({
            error:err
        });
    
    });


router.get('/:trackId', checkAuth, (req,res,next)=>{
const id=req.params.trackId;
Track.findById(id)
.exec()
.then(doc=>{
    console.log("From database", doc);
    res.status(200).json(doc);
})
.catch(err=> 
    console.log(err));
    res.status(500).json({error:err});

});
});

module.exports=router;
