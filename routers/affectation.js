const express = require('express');
const router = express.Router()

const { affecteEmpolyee } = require('../controllers/affectation');


router.put('/affectation/:idMiss/:idEmp', affecteEmpolyee)



module.exports = router


