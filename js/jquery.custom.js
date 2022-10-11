$(document).ready(function(){
   $(".user-login").click(function(){
    $(".login-modal").css('display','flex');
    // $(".login-box").css('display','flex');
    // $(".login-modal").classList.add('open');
   })

   $(".login-modal").click(function(){
    $(".login-modal").css('display','none');
   })

   $(".close-button").click(function(){
    $(".login-modal").css('display','none');    
   })

   $(".login-box").click(function(even){
        even.stopPropagation();
   })
})

