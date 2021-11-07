const express= require ('express');
const router= express.Router();
const Artist= require('../models/artist');
const checkAuth= require('../middleware/check-auth');

router.get('/',checkAuth, (req,res,next)=>{
    Artist.find().exec()
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

router.get('/:artistId', checkAuth, (req,res,next)=>{
   const id=req.params.artistId;
   if (id==='unique'){
   res.status(200).json({
        message:'Artist ID',
        id:id

    });
   }
   else{
       res.status('200').json({
           message: 'You have a passed an artist Id'
       });
    }
});

module.exports= router;


