const express= require ('express');
const checkAuth = require('../middleware/check-auth');
const router= express.Router();
const Genre= require('../models/genre');



router.get('/', checkAuth, (req,res,next)=>{
    Genre.find().exec()
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

router.get('/:genreId', checkAuth, (req,res,next)=>{
    const id=req.params.artistId;
    if (id==='unique'){
    res.status(200).json({
         message:'Genre ID',
         id:id
 
     });
    }
    else{
        res.status('200').json({
            message: 'You have a passed a genre Id'
        });
     }
 });
 
 module.exports= router;
 

module.exports=router;
