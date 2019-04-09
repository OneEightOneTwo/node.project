$(() => {
    // $("#add").click(() => {
    //     $.ajax({
    //         type: "GET",
    //         url: "http://localhost:3000/user/list",
    //     }).done((data) => {
    //         console.log(data);
    //     })
    // })
    var tbody = document.getElementById("tbody");
    var del = document.getElementById("del");
    $.ajax({ //进入页面渲染
        type: "GET",
        url: "http://localhost:3000/user/list",
    }).done((data) => {
        console.log(data);
        var res = data.map(function(item) {
            return ` <tr>
                                    <td class="td1"><input class = "input" type="checkbox"/></td>
                                    <td class="td2">${item.uid}</td>
                                    <td class="td3">${item.name}</td>
                                    <td class="td4">${item.gender}</td>
                                    <td class="td5">${item.city}</td>
                                    <td class="td6">傻bb</td>
                                    <td class="td7">${item.profession}</td>
                                    <td class="td8">${item.grade}</td>
                                    <td class="td9">
                                        <img src="images/bi.png" height="36" width="45" alt="" />
                                        <img class="delete" src="images/laji.png" height="38" width="47" alt="" />
                                    </td>
                                </tr>  `;
        });
        tbody.innerHTML = res.join('');
        shanchu();

        function shanchu() { //删除多行
            del.onclick = function() {

                var input = document.getElementsByClassName("input");
                var arr = [];
                for (var i = 0; i < input.length; i++) {
                    if (input[i].checked) {
                        var uid = input[i].parentElement.nextElementSibling.innerHTML;
                        arr.push(uid * 1);
                    };
                };
                console.log(arr);
                // var id = JSON.stringify(arr);
                // console.log(id);
                for (var i = 0; i < arr.length; i++) {
                    var url = "http://localhost:3000/user/deletion";
                    var uid = "uid=" + arr[i];
                    ajax('post', url, uid, function() {
                        // console.log(str);
                    });
                };
            };
        };


        tbody.onclick = function() {
            var ev = ev || window.event;
            if (ev.target.className == 'delete') {
                var id = ev.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML;
                console.log(id);
                // $.ajax({
                //      type:"POST",
                //      url:"http://localhost:3000/user/del",
                //      data:uid
                // }).done((res)=>{
                //      console.log(res);

                // }) 
                var url = "http://localhost:3000/user/del";
                var uid = "uid=" + id;
                ajax('post', url, uid, function(str) {
                    $.ajax({ //进入页面渲染
                        type: "GET",
                        url: "http://localhost:3000/user/list",
                    }).done((data) => {
                        console.log(data);
                        var res = data.map(function(item) {
                            return ` <tr>
                                    <td class="td1"><input class = "input" type="checkbox"/></td>
                                    <td class="td2">${item.uid}</td>
                                    <td class="td3">${item.name}</td>
                                    <td class="td4">${item.gender}</td>
                                    <td class="td5">${item.city}</td>
                                    <td class="td6">傻bb</td>
                                    <td class="td7">${item.profession}</td>
                                    <td class="td8">${item.grade}</td>
                                    <td class="td9">
                                        <img src="images/bi.png" height="36" width="45" alt="" />
                                        <img class="delete" src="images/laji.png" height="38" width="47" alt="" />
                                    </td>
                                </tr>  `;
                        });
                        tbody.innerHTML = res.join('');


                        tbody.onclick = function() { //单条删除
                            var ev = ev || window.event;
                            if (ev.target.className == 'delete') {
                                var id = ev.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML;
                                console.log(id);
                                // $.ajax({
                                //      type:"POST",
                                //      url:"http://localhost:3000/user/del",
                                //      data:uid
                                // }).done((res)=>{
                                //      console.log(res);

                                // }) 
                                var url = "http://localhost:3000/user/del";
                                var uid = "uid=" + id;
                                ajax('post', url, uid, function(str) {
                                    alert('删除成功');
                                });
                            }
                        }

                    });
                });
            }
        }

    });


    var add = document.getElementById("add"); //跳转到用户添加页面
    add.onclick = function() {
        console.log(666);
        // location.href='add-user.html';
        window.open('add-user.html');
    }
    document.getElementById("add-user").onclick = function() { //跳转到用户添加页面
        location.href = 'add-user.html';
    }
    document.getElementById("orderlist").onclick = function() { //跳转到商品订单页面
        location.href = 'orderlist.html';
    }


    // var tbody = document.getElementById("tbody");
    // tbody.onclick = function(ev) {
    //     var ev = ev || window.event;
    //     if (ev.target.className = "delete") {
    //         var td = document.getElementsByClassName("td1");
    //         var arr = [];
    //         for (var i = 0; i < td.length; i++) {
    //             if (td[i].checked) {
    //                 arr.push(td[i]);
    //             }
    //         }


    //     }
    //     console.log(arr);
    // }

});


$(".home_btn").click(()=>{
    location.href = "http://localhost:3000/home.html"
})
$(".type_btn").click(()=>{
    location.href = "http://localhost:3000/type.html"
})
$(".add_goods_btn").click(()=>{
    location.href = "http://localhost:3000/add.goods.html"
})
// $(".add").click(() => {
//     location.href = "http://localhost:3000/add.goods.html"
// })
$(".userslist").click(() => {
    location.href = "http://localhost:3000/userlist.html"
})
$("#add-user").click(() => {
    location.href = "http://localhost:3000/add-user.html"
})


