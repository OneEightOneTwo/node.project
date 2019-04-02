// var jQuery = require("jquery");
// $(".line5").click(()=>{
    
// })


$(".login").click(()=>{
    let _name = $(".name").val();
    let _password = $(".password").val();
    let _check = $(".check").val();
    console.log(_name,_password,_check)
        $.ajax({
            type:"POST",
            url:"http://localhost:3000/users/login",
            data:{
                _name:_name,
                _password:_password
                // _check:_check
            },
            success(data){
                console.log(data)
                if(data == "success"){
                    location.href = "http://localhost:3000/home.html";
                }
            }
        })
    })
