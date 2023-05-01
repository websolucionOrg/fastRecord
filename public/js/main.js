
$(document).ready(function(){


    $('#btnMenu').click(function(){
      $(this).toggleClass('bi-x-lg');
      $('.navbar').toggleClass('active');
      $('.header-home').css({'background':'#4E019E','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
    });
  
    $(window).on('load scroll',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('.header').css({'background':'#4E019E','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
      }else{
        $('.header').css({'background':'none','box-shadow':'none'});
      }
    });
  

  });
