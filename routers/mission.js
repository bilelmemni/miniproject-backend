const express=require('express')
const router=express.Router()
const {addMission,getallMission,getByIdMission,deleteMission,updateMission }=require('../controllers/mission')


router.post('/mission',addMission)
router.get('/mission/',getallMission)
router.get('/mission/:id',getByIdMission)
router.delete('/mission/:id',deleteMission)
router.put('/mission/:id',updateMission)

module.exports=router