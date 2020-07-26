/*

    AJAX
    ssync JavaScript and xml

    http: restclass.azurewebsites.net

 http verbs (request methods)
    GET: get info
    POST: create/send info
    PUT: update some existing element
    PATCH: update part of an existing element
    Delete: remove an existing item 

*/

//object cinstructorfor the Items

function Item(code, title, price, category,image){
    this.code = code;
    this.title = title;
    this.price = price;
    this.category = category;
    this.image = image;
    this.user = "luis";
}




 function register() {
    var code = $("#txtCode").val();
    var title = $("#txtTitle").val();
    var price = $("#txtPrice").val();
    var category = $("#txtCategory").val();
    var image = $("#txtImage").val();


    var item = new Item(code, title, price, category, image);
    console.log(item);
    


    // create the AJAX request
    $.ajax({
        url: 'http://restclass.azurewebsites.net/api/points',
        type: 'post',
        data: JSON.stringify(item), 
        contentType: "application/json",
        success: function(response) {
            console.log("success", response);
        },
        error: function() {
            console.log("Ouuch!");
        }
    }); 
} 



function init(){
    $("#btnSave").click(register);

}


window.onload = init;