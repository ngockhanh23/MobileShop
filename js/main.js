
var intial_price = document.getElementsByClassName("initial-price");
for (let item in intial_price) {
    if (intial_price[item].innerHTML == "-1") {
        intial_price[item].innerHTML = "&ensp;"
        intial_price[item].style.textDecoration = "none";
    }
};

// const modal = document.querySelector('.login-modal');
// const modalContainer = document.querySelector('.login-box');
// console.log(modal)
// var login_btn = document.getElementById('login');
//     login_btn.onclick = function () {
//       modal.classList.add('open-login')
//     };

//     modal.onclick = function(){
//         modal.classList.remove('open-login');
//     }

//     modalContainer.onclick = function(even){ 
//         even.stopPropagation();
//        }



var name_product = document.getElementsByClassName("card-text");
for (let item in name_product) {
    if (name_product[item].innerHTML.length > 36)
    {
        var temp_name = name_product[item].innerHTML.substr(0,34);
        name_product[item].innerHTML = temp_name + "...";  
    }
}







