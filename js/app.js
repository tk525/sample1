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
$(window).scroll(function () {
  TypingInit();
  TypingAnime();
});
$(window).on('load', function () {
  TypingInit();
  TypingAnime();
});





// 
window.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('resize', function(){
    console.log("Width:" + window.innerWidth);

    var window_fullWidth = window.parent.screen.width;
    var window_halfWidth = window_fullWidth / 2;

    if (window.innerWidth <= window_halfWidth){
      $('.for_smartphone').addClass("implement");
      
      console.log("どない？？？")
    }else{
      $('.for_smartphone').removeClass("implement");
    }
  });
});

// var windowWidth = $(window).width();
// var windowSm = 640;
// if (windowWidth <= windowSm) {
//     //横幅640px以下のとき（つまりスマホ時）に行う処理を書く
// } else {
//     //横幅640px超のとき（タブレット、PC）に行う処理を書く
// }