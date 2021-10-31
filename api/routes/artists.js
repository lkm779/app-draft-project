const express= require ('express');
const router= express.Router();


router.get('/',(req,res,next)=>
{
    res.status(200).json({
        message:'Artists were shown'
    });
});

router.get('/:artistId',(req,res,next)=>{
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


