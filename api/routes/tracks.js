const express= require ('express');
const router= express.Router();



router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handing GET rquest to /tracks'
    });
});


router.post('/',(req,res,next)=>{

    const track= {
    name:req.body.name,
    albumId: req.body.albumId,
    genre: req.body.genre,
    composer:req.body.composer,
    duration:req.body.duration,
    size:req.body.size,
    prices:req.body.prices,
    };
    res.status(201).json({
        message:'POST was created',
        createdTrack: track 
    });
});

router.get('/:trackId',(req,res,next)=>{
const id=req.params.trackId;
if (id==='unique'){
    res.status(200).json({
        message:'Track ID',
        id:id
    });
}else {
        res.status(200).json({
            message:'You have passed a track ID'
        });
    }

});


module.exports=router;
