$(() => {
    var userlist = document.getElementById("userlist"); //跳转用户列表页面
    userlist.onclick = function() {
        location.href = 'userlist.html';
    };

    var orderlist = document.getElementById("orderlist"); //跳转订单列表页面
    orderlist.onclick = function() {
        location.href = 'orderlist.html';
    }

    //添加用户
    var uname = document.getElementById("uname").value; //用户名

    var nickname = document.getElementById("nickname").value; //昵称

    var password = document.getElementById("password").value; //密码

    var affirm = document.getElementById("affirm").value; //确认密码

    var profession = document.getElementById("profession").value; //职业


    var gender = document.getElementById("select").value; //性别

    var graded = document.getElementById("graded").value; //评分

    var city = document.getElementById("city").value; //城市

    var btn = document.getElementById("btn");

    btn.onclick = function() {
        var uname = document.getElementById("uname").value; //用户名

        var nickname = document.getElementById("nickname").value; //昵称

        var password = document.getElementById("password").value; //密码

        var affirm = document.getElementById("affirm").value; //确认密码

        var profession = document.getElementById("profession").value; //职业


        var gender = document.getElementById("select").value; //性别

        var graded = document.getElementById("graded").value; //评分

        var city = document.getElementById("city").value; //城市



        if (uname == null || nickname == null || password == null || affirm == null || profession == null || gender == "请选择" || graded == null || city == null) {
            alert("请填写完再提交");
            return;
        } else {
            if (password != affirm) {
                alert('两次密码不一致');
                return;
            } else {
                var url = "http://localhost:3000/user/add";
                var data = 'name=' + uname + '&password=' + password + '&profession=' + profession + '&gender=' + gender + '&graded=' + graded + '&city=' + city;
                ajax('post', url, data, function(str) {
                    alert("添加成功");

                });
            }
        }
    }
})


$(".home_btn").click(()=>{
    location.href = "http://localhost:3000/home.html"
})
$(".type_btn").click(()=>{
    location.href = "http://localhost:3000/type.html"
})
$(".add_goods_btn").click(()=>{
    location.href = "http://localhost:3000/add.goods.html"
})

$(".add").click(() => {
    location.href = "http://localhost:3000/add.goods.html"
})
$("#userlist").click(() => {
    location.href = "http://localhost:3000/userlist.html"
})
$("#add-user").click(() => {
    location.href = "http://localhost:3000/add-user.html"
})
