let express = require('express');
let icon = require("iconv-lite")
let router = express.Router();
let {
  find,
  insert,
  del,
  update
} = require("../lib/mysql.js");    //引用封装好的，mysql数据库操作方法


router.get('/list',async(req, res, next) =>{
   
    let data = await find("usersList");

    
    //  console.log(data);

  res.send(data);    
  // res.send('respond with a resource');

});


module.exports = router;