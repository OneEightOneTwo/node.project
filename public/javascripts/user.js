$(() => {
    $("#add").click(() => {
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/user/list",
        }).done((data) => {
            console.log(data);
        })
    })
});