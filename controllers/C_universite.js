const asyncHandler = require('express-async-handler')
const db = require('../helpers/db_connect')
const CustomError = require('../helpers/CustomError')

const getUniveritiesByMark = asyncHandler(async (req, res, next) => {
    const { mark } = req.params
    const page = (parseInt(req.query.page)-1) * 20

    console.log(mark)
    console.log(req.query.page)

    // sql = `SELECT puan FROM osym_data WHERE ROWNUM <= 5 > (${mark}) LIMIT 10`
    sql = `select * from osym_data where puan < ${mark} limit 20 offset ${page}`

    db.query(sql, (err, results, fields) => {
        if (err) return next(new CustomError('HATALI SORGU !', 404))
        res.json({
            success: true,
            data: results
        })
    })
})

module.exports = {
    getUniveritiesByMark
}