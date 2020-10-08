const express = require('express')
const router = express.Router()
const university = require('./routes/university')

router.use('/university' , university)


module.exports = router