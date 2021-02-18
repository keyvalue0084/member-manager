const express = require('express');
const os = require('os');
const router = express.Router();

var mysql      = require('mysql');
var dbconfig   = require('../config/db');
var connection = mysql.createConnection(dbconfig);

/* getMemberList */
router.get('/api/getMemberList', (req, res, next) => {
    connection.query('SELECT * FROM mschema.tb_members;', function(err, rows) {
        if(err) throw err;    
        console.log('RESULT: ', rows);
        res.send(rows);
      });
});

module.exports = router;
