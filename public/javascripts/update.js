$(".home_btn").click(()=>{
    location.href = "http://localhost:3000/home.html"
})
$(".type_btn").click(()=>{
    location.href = "http://localhost:3000/type.html"
})
$(".add_goods_btn").click(()=>{
    location.href = "http://localhost:3000/add.goods.html"
})
$(".tuichu").on("click",function(){
    location.href = "http://localhost:3000/login.html";
})



$(".btn").on("click",function(){
    let name = $(".name").val();
    // let funame = $(".funame").val();
    let motoprice = $(".motoprice").val();
    let sellprice = $(".sellprice").val();
    let type = $('#type-sele option:selected').text();
    let have = $(".have").val();
    // let input = $(".input").val();
    let id = window.location.search.slice(4);

    console.log(id);

    console.log(name);
    console.log(type);
    console.log(motoprice);
    console.log(sellprice);
    console.log(have);
    $.ajax({
        url: "http://localhost:3000/users/update",
        type: "POST",
        data:{
            id,
            name,
            // funame,
            motoprice,
            sellprice,
            type,
            have
            // input
        },
       
        success(data) {
            console.log(data);
            // render(data);
        }
    })
   
})
