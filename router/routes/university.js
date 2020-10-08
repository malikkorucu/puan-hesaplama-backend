const { getUniversities, getUniveritiesByMark } = require('../../controllers/C_universite')
const router = require('express').Router()

router.get('/:mark' , getUniveritiesByMark)

module.exports = router