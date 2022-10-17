
var intial_price = document.getElementsByClassName("initial-price");
for (let item in intial_price) {
    if (intial_price[item].innerHTML == "-1") {
        intial_price[item].innerHTML = "&ensp;"
        intial_price[item].style.textDecoration = "none";
    }
};
var quantity_product = Number(document.getElementById("quantity_product").value);   


document.getElementById("counter-minus").onclick = function(){
    // var quantity_product = Number(document.getElementById("quantity_product").value);    
    if(Number(document.getElementById("quantity_product").value) < 2){
        document.getElementById("quantity_product").value = '1';
    }
    else{
        quantity_product -=1;
    document.getElementById("quantity_product").value = quantity_product
    }
}

document.getElementById("counter-plus").onclick = function(){

    quantity_product +=1;
    document.getElementById("quantity_product").value = quantity_product
}





var name_product = document.getElementsByClassName("card-text");
for (let item in name_product) {
    if (name_product[item].innerHTML.length > 36)
    {
        var temp_name = name_product[item].innerHTML.substr(0,34);
        name_product[item].innerHTML = temp_name + "...";  
    }
}







