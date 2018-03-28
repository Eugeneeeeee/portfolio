// graphic design popup
function popup_graphic(e) {
    $('#main .popup_bg').fadeIn(400);
    $('#main .graphic').eq(e).fadeIn(400);
  console.log(e);
}
function popup_illust(a) {
    $('#main .popup_bg').fadeIn(400);
    $('#main .illust').eq(a).fadeIn(400);
  console.log(a);
}

$(function(){
  //scrollSpeed
   jQuery.scrollSpeed(100, 800);
  // menu gnb open
  $('#main_menu').click(function(){
    $('#gnb').toggleClass('on')
  });
  //main menu button changes
  $('#main_menu').click(function(){
    $(this).find('.btn_line').eq(0).toggleClass('nonActive')
  });
  // scroll > header shrinks
  var shrinkHeader = 300;

  $(window).scroll(function(){
    var scroll_top = $(window).scrollTop();
    if(scroll_top > 0) {
      $('#main_header').addClass('shrink');
      $('#title_box').addClass('color');
    } else {
      $('#main_header').removeClass('shrink');
      $('#title_box').removeClass('color');
    }
  });

  //web project - prev btn
  var moveValue = 0;

  $('#web_prev').click(function(){
    if(moveValue < 0) {
      moveValue = moveValue + 500;
      $('#main #main_projects .box_webdesign .slider_wrap')
        .animate({
          left : moveValue + 'px'
        },400);
      }
  });

  //web project - next btn
  $('#web_next').click(function(){
    if(moveValue > -2500) {
      moveValue = moveValue - 500;
      $('#main #main_projects .box_webdesign .slider_wrap')
        .animate({
          left : moveValue + 'px'
        },400);
      // console.log(moveValue);
    }
  });
  //illustration project - prev btn
  var moveValue2 = 0;

  $('#illust_prev').click(function(){
    if(moveValue2 < 0) {
      moveValue2 = moveValue2 + 800;
      $('#main #main_projects .box_illustdesign .illust_wrap')
        .animate({
          left : moveValue2 + 'px'
        },400);
      }
  });

  //illustration - next btn
  $('#illust_next').click(function(){
    if(moveValue2 > -3200) {
      moveValue2 = moveValue2 - 800;
      $('#main #main_projects .box_illustdesign .illust_wrap')
        .animate({
          left : moveValue2 + 'px'
        },400);
      // console.log(moveValue);
    }
  });

  //menu moving test
  var projectTop = $('#main_projects').offset().top;
  var aboutTop = $('#main_about').offset().top;
  var footerTop = $('#footer').offset().top;
  // console.log(projectTop);
  // console.log(aboutTop);
  // console.log(footerTop);

  $(window).resize(function(){
    var newProjectTop = $('#main_projects').offset().top;
    var newAboutTop = $('#main_about').offset().top;
    var newFooterTop = $('#footer').offset().top;
    // console.log(newProjectTop);
    // console.log(newAboutTop);
    // console.log(newFooterTop);
    projectTop = newProjectTop;
    aboutTop = newAboutTop;
    footerTop = newFooterTop;
  });

  //menu click : move to section;
  $('#gnb > ul > li').eq(0).find('a').click(function(){
    $('html, body').stop().animate({
        scrollTop: 0
    }, 400);
    $('#gnb').removeClass('on');
    $('#main_menu').find('.btn_line').eq(0).removeClass('nonActive');
    return false;
  });
  $('#gnb > ul > li').eq(1).find('a').click(function(){
    $('html, body').stop().animate({
        scrollTop: projectTop - 80
    }, 400);
    $('#gnb').removeClass('on');
    $('#main_menu').find('.btn_line').eq(0).removeClass('nonActive');
    return false;
  });
  $('#gnb > ul > li').eq(2).find('a').click(function(){
    $('html, body').stop().animate({
        scrollTop: aboutTop - 80
    }, 400);
    $('#gnb').removeClass('on');
    $('#main_menu').find('.btn_line').eq(0).removeClass('nonActive');
    return false;
  });
  $('#gnb > ul > li').eq(3).find('a').click(function(){
    $('html, body').stop().animate({
        scrollTop: footerTop - 160
    }, 400);
    $('#gnb').removeClass('on');
    $('#main_menu').find('.btn_line').eq(0).removeClass('nonActive');
    return false;
  });
  $('#gnb > ul > li').eq(4).find('a').click(function(){
    $('#gnb').removeClass('on');
    $('#main_menu').find('.btn_line').eq(0).removeClass('nonActive');
  });

  // graphic popup function {
  $('#main .popup_bg').click(function(){
    $(this).hide();
    $(this).find('div').hide();
  });

}); //end jquery
