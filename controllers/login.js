const Admin=require('../models/admin');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
require('dotenv').config();



exports.login=async(req,res)=>{
        try {
           data=req.body;//1 read data
           user=await Admin.findOne({Email:data.Email})//2 test email
            if(user){
              valpassword=bcrypt.compareSync(data.Password,user.Password)//3 test password
              if (valpassword) {
    
              // create token
              payload={        
                _id:user._id,
                email:user.Email
              }
              token=jwt.sign(payload,'12345')
    
              res.status(200).send({mytoken:token})//send respense
    
    
    
              }else{
                res.status(401).send('email or password invalid')
              }
            }else{
                res.status(404).send('email or password incorrect')
            }
            
        } catch (error) {
            res.status(400).send(error)
        }
    }
