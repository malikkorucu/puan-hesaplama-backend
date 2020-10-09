const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')
const db = require('./helpers/db_connect')
const customErrorHandler = require('./middlewares/errorHandler')

const PORT = process.env.PORT || 3500

app.use(cors())
app.options("*" , cors())
app.use(express.json())

db.getConnection((err, conn) => {
    // bağlantı kontrolü
    console.log('db bağlandı')
    conn.query();
    // bağlantıyı canlı tutan ifade !!!
    db.releaseConnection(conn);
})

app.use('/api/v1' , router)
app.use(customErrorHandler)

app.get('', (req,res,next)=> {
    res.send('server çalışıyor')
})

app.listen(PORT, () => {
    console.log('server başladı')
})
