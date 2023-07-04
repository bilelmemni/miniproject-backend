const express=require('express')
const router=express.Router()
const {register}=require('../controllers/registre')
const {login}=require('../controllers/login')
const { getallAdmin,getByIdAdmin,deleteAdmin,updateAdmin}=require('../controllers/crudamdin')



router.post('/Registre',register)
router.post('/Login',login)
router.get('/admin/',getallAdmin)
router.get('/admin/:id',getByIdAdmin)
router.delete('/admin/:id',deleteAdmin)
router.put('/admin/:id',updateAdmin)

module.exports=router