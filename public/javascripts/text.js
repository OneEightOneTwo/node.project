$(() => {

    var tbody = document.getElementById("tbody");
    var del = document.getElementById("del");

    render();

    function render() { //进入页面渲染
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/list",
        }).done((data) => {
            var res = data.map(function(item) {
                return `<tr>
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
                                </tr>`;
            });
            tbody.innerHTML = res.join('');

            delone();

            function delone() { //删除单行
                tbody.onclick = function(ev) {
                    var ev = ev || window.event;
                    if (ev.target.className == 'delete') {
                        var id = ev.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerHTML;
                        console.log(id);
                        var input = ev.target.parentElement.parentElement.firstElementChild.getElementsByTagName("input")[0];
                        console.log(input);
                        if (input.checked) {
                            var r = confirm("确定删除？")
                            if (r) {
                                var url = "http://localhost:3000/user/del";
                                var uid = "uid=" + id;
                                ajax('post', url, uid, function(str) {
                                    alert('删除成功');

                                });
                                render();
                            };
                        };
                    };
                };
            };

            delall();

            function delall() { //删除部分
                del.onclick = function() {
                    var input = document.getElementsByClassName("input");
                    var arr = [];
                    for (var i = 0; i < input.length; i++) {
                        if (input[i].checked) {
                            var uid = input[i].parentElement.nextElementSibling.innerHTML;
                            arr.push(uid * 1);
                        };
                    };
                    for (var i = 0; i < arr.length; i++) {
                        var url = "http://localhost:3000/user/deletion";
                        var uid = "uid=" + arr[i];
                        ajax('post', url, uid, function() {
                            alert("删除成功");
                        });
                        render();
                    };
                };
            };

            var checked = document.getElementById("checkbox-all");
            var isok = true;
            checked.onclick = function() {
                var input = tbody.getElementsByTagName("input");
                if (isok) {
                    for (var i = 0; i < input.length; i++) {
                        input[i].checked = "checked";
                    }  
                } else if (!isok) {
                    for (var i = 0; i < input.length; i++) {
                        input[i].checked = false;
                    }
                };
                isok = !isok;
            };
        });
    };

    var add = document.getElementById("add"); //跳转到用户添加页面
    document.getElementById("add").onclick = function() {
        console.log(666);
        // location.href='add-user.html';
        // window.open('add-user.html');
        location.href = 'add-user.html';
    }
    document.getElementById("add-user").onclick = function() { //跳转到用户添加页面
            location.href = 'add-user.html';
        }
        // document.getElementById("orderlist").onclick = function() { //跳转到商品订单页面
        //     location.href = 'orderlist.html';
        // }
})