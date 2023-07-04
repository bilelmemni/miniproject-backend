const Admin=require('../models/admin');
const bcrypt=require('bcrypt');
require('dotenv').config();

exports.register=async(req,res)=>{
    try {
        data=req.body;
        prod= new Admin(data);
        salt=bcrypt.genSaltSync(10)
        prod.Password=bcrypt.hashSync(data.Password,salt)
        saveprod= await prod.save()
        res.status(200).send(saveprod)
       
    } catch (error) {
        res.status(400).send(error)
    }
}
