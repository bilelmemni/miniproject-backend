const Empolyee=require('../models/employee ')


exports.addEmpolyee=async(req,res)=>{
  try {
      data=req.body;
      prod= new Empolyee(data);
      saveprod= await prod.save()
      res.status(200).send(saveprod)
     
  } catch (error) {
      res.status(400).send(error)
  }
}

exports.getallEmpolyee=async(req,res)=>{
  Empolyee.find()
  .then(
      (Empolyees)=>{
        res.send(Empolyees)
      }
  )
  .catch(
      (err)=>{
      console.log(err);
      }
  )
}
exports.getByIdEmpolyee=async(req,res)=>{
  myid=req.params.id
  Empolyee.findOne({_id:myid})
  .then(
    (Empolyee)=>{
        res.send(Empolyee)
        
    }
  )
  .catch(
    (err)=>{ 
      res.send(err)
    }
  )

}

exports.deleteEmpolyee=async(req,res)=>{
  myid=req.params.id
  Empolyee.findOneAndDelete({_id:myid})
  .then(
      (deleteEmpolyee)=>{
        res.send(deleteEmpolyee)
      }
  )
  .catch(
      (err)=>{
         res.send(err)
      }
  )

}
exports.updateEmpolyee=async(req,res)=>{
  myid=req.params.id;
  newdata=req.body;
  Empolyee.findOneAndUpdate({_id:myid},newdata)
  .then(
      (updateEmpolyee)=>{
         res.send(updateEmpolyee)
      }
  )
  .catch(
      (err)=>{
          res.send(err)
      }
  )
}
