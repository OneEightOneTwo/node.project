let express = require('express');
let router = express.Router();
let {
  find,
  insert,
  del,
  update
} = require("../lib/mysql.js");    //引用封装好的，mysql数据库操作方法




/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



router.post('/login', async (req, res, next) => {
  let {
    _name,
    _password
  } = req.body
  // res.send(req.body)
  let data = await find('students',{name:_name})
  if(data[0].password === Number(_password)){
     res.send('success');
  }else{
    res.send('falise');
  }

});


module.exports = router;
