// メニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn1").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});



// テキストランダム変換
var arr = []
var ShuffleText = 0

function TypingInit() {
  $('.js_typing').each(function (i) {
    arr[i] = new ShuffleText(this);

  });
}
function TypingAnime() {
  $(".js_typing").each(function (i) {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      if(!$(this).hasClass("endAnime")){
        arr[i].start();
        arr[i].duration = 800;
        $(this).addClass("endAnime");
      }
    }else{
      $(this).removeClass("endAnime");
    }
  });
}



// スマホ用表示切り替え
$(function(){
  var ua = navigator.userAgent;
  if(ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0){
    // メニュー縦並び
    $('.for_smartphone_menu').addClass("implement");
    
    // 資格縦並び
    $('.for_smartphone_certification').addClass("implement");
    

  }else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    // メニュー縦並び
    $('.for_smartphone_menu').addClass("implement");
    
    // 資格縦並び
    $('.for_smartphone_certification').addClass("implement");
  }
});



$(window).scroll(function () {
  TypingInit();
  TypingAnime();
});
$(window).on('load', function () {
  TypingInit();
  TypingAnime();
});
