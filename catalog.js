var catalog = [];

function fetchData(){
    $.ajax({
        url: "http://restclass.azurewebsites.net/api/points",
        type: "GET",
        success: function(allItems){
            //trvel allItems
            //check if the item belong to me
            //if so push to catalog array

            for(let i=0; i< allItems.length; i++){
                var item = allItems[i];
                if(item.user === "luis"){
                    catalog.push(item);
                }
            }

            displayCatalog();
        },
        error: function(detail){
            console.log("error getting data", details);
        }
   });
}

function displayCatalog(){
    //travle the array of items
    //get each item
    //display the item on HTML

    for(let i=0; i < catalog.length; i++){
        var item = catalog[i];
        console.log("item",item);

        //display on html
        var syntax = 
        `<div class="item">
            <img src="${item.image}">
            <div class="info">
                <label class="code">${item.code}</label>
                <label class="title">${item.title}</label>
                <label class="price">$ ${item.price}</label>

                <button class="btn btn-info btn-sm">Add</button>
            </div>
        </div>`;


        $("#catalog-container").append(syntax);
        
    }
}

function init(){
    console.log("catalog working!");

    fetchData();
    displayCatalog();
}


window.onload = init;

/* 
    code
    title
    price
    imageUrl
    quantity
    category
 */