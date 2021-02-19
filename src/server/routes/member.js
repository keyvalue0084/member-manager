const express = require('express');
const os = require('os');
const router = express.Router();

var mysql      = require('mysql');
var dbconfig   = require('../config/db');
var connection = mysql.createConnection(dbconfig);


/* 멤버 입력 */
router.get('/insertMember', (req, res, next) => {
  let params =req.query;

  connection.query('INSERT INTO  mschema.tb_members(NAME,TEL,EMAIL,CITY,ADDRESS,POINT,TYPE,STATUS,NOTE) VALUES("'+params.name+'","'+params.tel+'","'+params.email+'","'+params.city+'","'+params.address+'","'+params.point+'","'+params.type+'","'+params.status+'","'+params.note+'");', function(err, rows) {
      if(err) throw err;          
      res.send(rows);
    });
});

/* 멤버 리스트 조회 */
router.get('/getMemberList', (req, res, next) => {
    connection.query('SELECT '+
    'ID AS id, '+
    'NAME AS name, '+
    'TEL AS tel, '+
    'EMAIL AS email, '+
    'CITY AS city, '+
    'ADDRESS AS address, '+
    'POINT AS point, '+
    'TYPE AS type, '+
    'STATUS AS status, '+
    'NOTE AS note '+
    ' FROM mschema.tb_members;', function(err, rows) {
        if(err) throw err;          
        res.send(rows);
      });
});


/* 멤버 상세 조회 */
router.get('/getMember', (req, res, next) => {
  let params =req.query;

  connection.query(
  'SELECT '+
  'ID AS id, '+
  'NAME AS name, '+
  'TEL AS tel, '+
  'EMAIL AS email, '+
  'CITY AS city, '+
  'ADDRESS AS address, '+
  'POINT AS point, '+
  'TYPE AS type, '+
  'STATUS AS status, '+
  'NOTE AS note '+
  ' FROM mschema.tb_members WHERE ID='+params.id+';', function(err, rows) {

      if(err) throw err;          
      res.send(rows);
    });
});


/* 멤버 수정 */
router.get('/updateMember', (req, res, next) => {
  let params =req.query;
  connection.query('UPDATE mschema.tb_members SET NAME="'+params.name+'", TEL="'+params.tel+'",EMAIL="'+params.email+'",CITY="'+params.city+'",ADDRESS="'+params.address+'",POINT="'+params.point+'",TYPE="'+params.type+'",STATUS="'+params.status+'",NOTE="'+params.note+'" WHERE ID='+params.id, function(err, rows) {
      if(err) throw err;          
      res.send(rows);
    });
});


/* 멤버 삭제 */
router.get('/deleteMember', (req, res, next) => {
  let params =req.query;
  /*
  connection.query('DELETE FROM mschema.tb_members WHERE ID='+params.id, function(err, rows) {
      if(err) throw err;          
      res.send(rows);
    });*/

    connection.query('SELECT * FROM mschema.tb_members;', function(err, rows) {
      if(err) throw err;          
      res.send(rows);
    });
});
module.exports = router;
