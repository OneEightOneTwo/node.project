let express = require('express');
let router = express.Router();
var multer = require("multer");
var token = require("../lib/token.js");

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


//登陆请求
router.post('/login', async (req, res, next) => {
  let {
    _name,
    _password
  } = req.body
  // res.send(req.body)
  let data = await find('administrator',{name:_name})
  if(data[0].password === Number(_password)){
     res.send({
       status:'success',
       token: token.createToken({
        _name,
        _password
      }, 120)
     });
  }else{
    res.send('falise');
  }

});

//  home页查询渲染
router.get('/list', async (req, res, next) => {
let data = await find('phone')
  
res.send(data);

});

//自动登录请求 -- 处理
router.post('/autoLogin', async (req, res, next) => {
  res.send({
    status: token.checkToken(req.headers.token)  //返回令牌判断的状态  true / false
  })
});



// 商品类型页  渲染
router.get('/asktype', async (req, res, next) => {
let data = await find('type')
    
  res.send(data);
  
  });


//删除数据
router.post('/clear',async (req, res, next) => {
  let {
    id
  } = req.body

  let data = await del('phone',{id})
    res.send(data);
});


//添加商品
router.post('/add',async (req, res, next) => {
  let {
    name,
    // funame,
    motoprice,
    sellprice,
    type,
    have
    // input
  } = req.body
console.log(name)
  let data = await insert('phone',
    {name:name,
    type:type,
    old_price:motoprice,
    new_price:sellprice,
    have:have}
    // {description:input}

  )
    res.send(data);
});



//数据更新 -- 编辑商品
router.post('/update',async (req, res, next) => {
  let {
    id,
    name,
    // funame,
    motoprice,
    sellprice,
    type,
    have
    // input
  } = req.body
  
  let data = await update('phone',
  //   // {name:name},
    {name:name,
    type:type,
    old_price:motoprice,
    new_price:sellprice,
    have:have},{id:id}
  //   // {description:input}

  )
    res.send(data);
});





// 上传文件请求 -- 此后端处理

var storage = multer.diskStorage({
  //设置上传后文件路径，uploads文件夹会自动创建。
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  //给上传文件重命名，获取添加后缀名
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    //给图片加上时间戳格式防止重名名
    //比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
    cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
});
var upload = multer({
  storage: storage
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/upload', upload.single('logo'), function (req, res, next) {
insert(`students.img`, [{file: req.file}])
  // console.log(req);
  res.json({
    status: "success",
    file: req.file
  });
  
});



module.exports = router;


