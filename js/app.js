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

// スマホ用にメニュー文字縦並び
function For_smartphone(){

  // window.addEventListener('DOMContentLoaded', function(){
  //   window.addEventListener('resize', function(){
  //     console.log("Width:" + window.innerWidth);
  //     console.log("Height:" + window.innerHeight);
  //   });
  // });
  var window_fullWidth = window.parent.screen.width;
  var window_halfWidth = window_fullWidth / 1.5;
  
  if (window.innerWidth <= window_halfWidth){
    $('.for_smartphone').addClass("implement");
    
    console.log("どない？？？")
  }else{
    $('.for_smartphone').removeClass("implement");
  };

  


};
 



$(window).scroll(function () {
  TypingInit();
  TypingAnime();
  For_smartphone();
});
$(window).on('load', function () {
  TypingInit();
  TypingAnime();
  For_smartphone();
});





