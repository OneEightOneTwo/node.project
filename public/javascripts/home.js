// let jQuery = require("../../lib/jquery-3.2.1");

(() => {
    var data2 = '';
    $.ajax({
        url: "http://localhost:3000/users/list",
        type: "GET",
        success: (data) => {
            data2 = data;
            console.log(data2);
            render(data2);

            $(".clear").on("click", function () {
                $("#minbox").css("display", "block");
                $(".conten .yes").on("click",()=>{
                    // $("#minbox").css("display", "none");
                    let id = $(this).parent().parent().attr('id')
                    $.ajax({
                        url: "http://localhost:3000/users/clear",
                        type: "POST",
                        data: {
                            id
                        },
                        success(data) {
                            console.log(data);
                            // render(data);
                        }
                    })
                    $("#minbox").css("display", "none");
                    location.href="http://localhost:3000/home.html"
                });
                $(".X").on("click",function(){
                    $("#minbox").css("display", "none");
                });
                $(".cancel").on("click",function(){
                     $("#minbox").css("display", "none");
                });
                // $(this).parent().parent().remove();
            })
            $(".write").on("click", function (){
                let id = $(this).parent().parent().attr('id')
                console.log(id);
                location.href="http://localhost:3000/update.html?id="+id
            })
        }

    });
    console.log(data2)
    $.ajax({
        type: "POST",
        headers: {
            token: localStorage.getItem("token")
        },
        url: "http://localhost:3000/users/autoLogin",

        success: (data) => {
            if (data.status == true) {
                console.log(data.status)
                console.log(data2)
                // render(data2);
                // location.href = "http://localhost:3000/home.html"
            } else {
                console.log(data.status)
                location.href = "http://localhost:3000/login.html"
            }
        }
    })
})();
$(".tuichu").on("click",function(){
    location.href = "http://localhost:3000/login.html";
})
$("li ,page_ul ").on("click",function(){
    $("li ,page_ul ").css({"background":"white","color":"black"})
    $(this).css({"background":"green","color":"white"});
    console.log($(this))
})



var render = function (data) {
    var Tr = data.map((item) => {
        return ` <tr id="${item.id}" style="width: 1145px;height: 41px;">
                    <td class="cehck" ></td>
                    <td class="num">${item.id}</td>
                    <td class="name">${item.name}</td>
                    <td class="type">${item.type}</td>
                    <td class="old_price">${item.old_price}</td>
                    <td class="new_price">${item.new_price}</td>
                    <td class="have">${item.have}</td>
                    <td class="status">${item.status}</td>
                    <td class="add_time">${item.add_time.slice(0, 10)}</td>
                    <td class="do">
                        <div class="write">
                            <img style="width: 20px;height: 20px;" src="./images/商品分类/u187.png" alt="">
                        </div>
                        <div class="clear">
                            <img style="width: 20px;height: 20px;" src="./images/商品分类/u182.png" alt="">
                        </div>
                        <div class="out">
                            下架
                        </div>
                    </td>
                </tr> `
    }).join("");
    $(".tbody").html(Tr);
}

$(".tuichu").on("click",function(){
    location.href = "http://localhost:3000/login.html";
})
$(".home_btn").click(() => {
    location.href = "http://localhost:3000/home.html"
})
$(".type_btn").click(() => {
    location.href = "http://localhost:3000/type.html"
})
$(".add_goods_btn").click(() => {
    location.href = "http://localhost:3000/add.goods.html"
})
$(".add").click(() => {
    location.href = "http://localhost:3000/add.goods.html"
})
$(".userslist").click(() => {
    location.href = "http://localhost:3000/userlist.html"
})
$(".add-user").click(() => {
    location.href = "http://localhost:3000/add-user.html"
})







