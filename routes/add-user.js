let express = require('express');
let icon = require("iconv-lite")
let router = express.Router();
let {
    find,
    insert,
    del,
    update
} = require("../lib/mysql.js"); //引用封装好的，mysql数据库操作方法


router.post('/add', async(req, res, next) => {
    // console.log(req.body);
    let {name,password,profession,gender,graded,city} = req.body;
    console.log(name,password,profession,gender,graded,city);
                 
    let data = await insert("usersList", {
        name: name,
        gender: gender,
        city: city,
        password: password,
        profession: profession,
        grade: graded
    });


    //  console.log(data);

    // res.send("添加成功");
    // res.send('respond with a resource');

});


module.exports = router;