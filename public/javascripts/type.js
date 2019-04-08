(() => {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users/asktype",
        success(data) {
            console.log(data);
          var Tr = data.map((item) => {
                return `<tr style="width: 1145px;height: 41px;">
                            <td class="cehck"></td>
                            <td class="num">${item.id}</td>
                            <td class="type">${item.type}</td>
                            <td class="add_time">${item.add_time.slice(0,10)}</td>
                            <td class="do">
                                <div class="write">
                                    <img style="width: 20px;height: 20px;" src="./images/商品分类/u187.png" alt="">
                                </div>
                                <div class="clear">
                                    <img style="width: 20px;height: 20px;" src="./images/商品分类/u182.png" alt="">
                                </div>
                            </td>
                        </tr>`
            }).join("");
            $(".tbody").html(Tr);
        }
    })
})();
$(".tuichu").on("click",function(){
    location.href = "http://localhost:3000/login.html";
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
