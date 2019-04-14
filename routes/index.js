var express = require('express');
var router = express.Router();
var fs = require('fs');
var config = require('../src/config');
/* GET home page. */
router.get('/', function(req, res, next) {
  let houseList = [], error = null;
  try{
    fs.statSync(config.dataDir);
    houseList = JSON.parse(fs.readFileSync(config.dataDir,'utf-8'))
  }catch(e) {
    //捕获异常
    error = e.ENOENT;
  }
  res.render('index', { title: '房源', houses:houseList, error:error });
});

module.exports = router;
