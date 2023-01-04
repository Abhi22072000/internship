let user=require('../module/alldata');
module.exports={
    get: async(req,res)=>{
        let element=await user.findAll({attributes:['id','first_name','last_name','email']});
        res.send(element);
    }
}