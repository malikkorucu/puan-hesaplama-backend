const mysql = require('mysql')

db = mysql.createPool({
    host: "45.87.80.154",
    user: "u883150773_ecDB",
    password: "Eco12345",
    database: "u883150773_ecDB",
    waitForConnections: true,
});

module.exports = db