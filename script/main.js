$(function(){

  $('.menu').on('click',function(){
    $('body').css('left', '20%');
    $('aside').css('left', '0');
    $('header, main, footer').addClass('bg');
  })
  $('.x_btn').on('click',function(){
    $('body').css('left', '0');
    $('aside').css('left', '-20%')
    $('header, main, footer').removeClass('bg');
  })
  $('.cate_li a').on('click',function(){
    var $cate_li_ul = $(this).parent('.cate_li').children('.cate_li_ul');
    // 해당 .cate_li_ul만 슬라이드 토글
    $cate_li_ul.slideToggle();
  })

})