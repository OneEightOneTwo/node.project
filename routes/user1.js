let express = require('express');
let router = express.Router();
let {
  find,
  insert,
  del,
  update
} = require("../lib/mysql.js");    //引用封装好的，mysql数据库操作方法


router.get('/list',async(req, res, next) =>{
   
    let data = await find("goodlist");
    res.setHeader('Content-Type', 'text/html; charset=utf8');
     // res.header("Content-Type", "text/html; charset=utf-8");
     console.log(data);
     
    res.send(data);    
  // res.send('respond with a resource');

});


module.exports = router;