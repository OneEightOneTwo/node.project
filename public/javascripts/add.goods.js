// $(".home_btn").click(()=>{
//     location.href = "http://localhost:3000/home.html"
// })
// $(".type_btn").click(()=>{
//     location.href = "http://localhost:3000/type.html"
// })
// $(".add_goods_btn").click(()=>{
//     location.href = "http://localhost:3000/add.goods.html"
// })
// $(".tuichu").on("click",function(){
//     location.href = "http://localhost:3000/login.html";
// })

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

$(".add").click(() => {
    location.href = "http://localhost:3000/add.goods.html"
})
$(".userslist").click(() => {
    location.href = "http://localhost:3000/userlist.html"
})
$(".add-user").click(() => {
    location.href = "http://localhost:3000/add-user.html"
})





$(".btn").on("click",function(){
    let name = $(".name").val();
    // let funame = $(".funame").val();
    let motoprice = $(".motoprice").val();
    let sellprice = $(".sellprice").val();
    let type = $('#type-sele option:selected').text();
    let have = $(".have").val();
    // let input = $(".input").val();

    // console.log(name);
    // console.log(type);
    // console.log(motoprice);
    // console.log(sellprice);
    // console.log(have);
    $.ajax({
        url: "http://localhost:3000/users/add",
        type: "POST",
        data:{
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

   //上传图片请求
   var fileNode = document.getElementById("file");
   fileNode.onchange = function () {

       var xmlhttp = new XMLHttpRequest();
       //设置回调，当请求的状态发生变化时，就会被调用  
       xmlhttp.onreadystatechange = function () {
           //上传成功，返回的文件名，设置到父节点的背景中  
           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
               let data1 = JSON.parse(xmlhttp.responseText);
               document.getElementById("img").src = `http://localhost:3000/${data1.file.filename}`

           }
       }


       var data = new FormData();   //创建文件流格式，用来传文件
       data.append("logo", fileNode.files[0]);  //往文件流里添加文件名和文件信息
       //设置请求，true：表示异步  
       xmlhttp.open("post", "http://localhost:3000/users/upload", true);   //通过POST方式，传后端路由处理
       //不要缓存  
       // xmlhttp.setRequestHeader("If-Modified-Since", "0");  
       //提交请求  
       xmlhttp.send(data);
       //清除掉，否则下一次选择同样的文件就进入不到onchange函数中了  
       fileNode.value = null;

   }