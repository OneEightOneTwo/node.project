let express = require('express');
let icon = require("iconv-lite")
let router = express.Router();
let {
    find,
    insert,
    del,
    update
} = require("../lib/mysql.js"); //引用封装好的，mysql数据库操作方法


router.post('/del', async(req, res, next) => {
    // console.log(req.body);
    let {uid} = req.body;
    console.log(uid);
                 
    let data1 = await del("usersList", {
        uid:uid
    });


    //  console.log(data);

    // res.send("添加成功");
    // res.send('respond with a resource');

});


module.exports = router;