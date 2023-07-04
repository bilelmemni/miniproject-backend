const express = require('express');
const router = express.Router()

const { affecteEmpolyee } = require('../controllers/affectation');


router.put('/affectation/:idlocal/:idRespo', affecteEmpolyee)



module.exports = router


