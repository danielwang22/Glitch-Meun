$(document).ready(function(){
    flag = 0;
    $(".muneIcon").click(function(){
        if(flag == 0){
            $(".open").hide();
            $(".close").show();
            
            $('.main').fadeIn(1000);
           
            flag = 1;
        }else{
            $(".open").show();
            $(".close").hide();
            
            $('.main').fadeOut(1000);
            flag = 0;
        }
    })
})

$("#vid").get(0).play();