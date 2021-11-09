const express= require ('express');
const router= express.Router();
const Album= require('../models/album');
const checkAuth= require('../middleware/check-auth');




router.get('/', checkAuth, (req, res, next)=>{
    Album.find().exec()
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

        
        module.exports=router;


