const express=require('express')
const router=express.Router()
const {addEmpolyee,getByIdEmpolyee,getallEmpolyee,deleteEmpolyee,updateEmpolyee }=require('../controllers/empolyee')


router.post('/employee',addEmpolyee)
router.get('/employee/',getallEmpolyee)
router.get('/employee/:id',getByIdEmpolyee)
router.delete('/employee/:id',deleteEmpolyee)
router.put('/employee/:id',updateEmpolyee)

module.exports=router