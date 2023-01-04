let user= require('../module/alldata');
module.exports={
    get:async(req,res)=>{
        let data= await user.findAll({attributes:['id','first_name','last_name',"email"],where:{first_name:req.query.first_name}})
        res.send(data);
    }
}