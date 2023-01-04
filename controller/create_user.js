let user=require('../module/alldata')
module.exports={
    post:async(req,res)=>{
        //res.send(req.body.lastname);
        let element=await user.create({id:req.body.id,first_name:req.body.first_name,last_name:req.body.last_name,email:req.body.email,avatar:req.body.avatar})
        res.send(element);
    }
}