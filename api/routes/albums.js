const express= require ('express');
const router= express.Router();


router.get('/',(req,res,next)=>
{
    res.status(200).json({
        message:'Albums were shown'
    });
});

    router.get('/:albumId',(req,res,next)=>{
        const id=req.params.albumId;
        if (id==='unique'){
            res.status(200).json({
                message:'Album ID',
                id:id
            });
        }else {
                res.status(200).json({
                    message:'You have passed an album ID'
                });
            }
        
        });
        
        
        module.exports=router;


