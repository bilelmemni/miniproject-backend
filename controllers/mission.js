const Mission=require('../models/mission')
exports.addMission=async(req,res)=>{
    try {
        data=req.body;
        prod= new Mission(data);
        saveprod= await prod.save()
        res.status(200).send(saveprod)
       
    } catch (error) {
        res.status(400).send(error)
    }
  }
  
  exports.getallMission=async(req,res)=>{
    Mission.find()
    .then(
        (Missions)=>{
          res.send(Missions)
        }
    )
    .catch(
        (err)=>{
        console.log(err);
        }
    )
  }
  exports.getByIdMission=async(req,res)=>{
    myid=req.params.id
    Mission.findOne({_id:myid})
    .then(
      (Mission)=>{
          res.send(Mission)
          
      }
    )
    .catch(
      (err)=>{ 
        res.send(err)
      }
    )
  
  }
  
  exports.deleteMission=async(req,res)=>{
    myid=req.params.id
    Mission.findOneAndDelete({_id:myid})
    .then(
        (deleteMission)=>{
          res.send(deleteMission)
        }
    )
    .catch(
        (err)=>{
           res.send(err)
        }
    )
  
  }
  exports.updateMission=async(req,res)=>{
    myid=req.params.id;
    newdata=req.body;
    Mission.findOneAndUpdate({_id:myid},newdata)
    .then(
        (updateMission)=>{
           res.send(updateMission)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
  }
  