const Admin=require('../models/admin')


exports.getallAdmin=async(req,res)=>{
  Admin.find()
  .then(
      (Admins)=>{
        res.send(Admins)
      }
  )
  .catch(
      (err)=>{
      console.log(err);
      }
  )
}
exports.getByIdAdmin=async(req,res)=>{
  myid=req.params.id
  Admin.findOne({_id:myid})
  .then(
    (Admin)=>{
        res.send(Admin)
        
    }
  )
  .catch(
    (err)=>{ 
      res.send(err)
    }
  )

}

exports.deleteAdmin=async(req,res)=>{
  myid=req.params.id
  Admin.findOneAndDelete({_id:myid})
  .then(
      (deleteAdmin)=>{
        res.send(deleteAdmin)
      }
  )
  .catch(
      (err)=>{
         res.send(err)
      }
  )

}
exports.updateAdmin=async(req,res)=>{
  myid=req.params.id;
  newdata=req.body;
  Admin.findOneAndUpdate({_id:myid},newdata)
  .then(
      (updateAdmin)=>{
         res.send(updateAdmin)
      }
  )
  .catch(
      (err)=>{
          res.send(err)
      }
  )
}
