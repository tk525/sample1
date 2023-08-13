//  画面更新後、URLに含まれるid取得し、ページ移動
var urlHash = location.hash;
if(urlHash) {
	setTimeout(function(){
		var target = $(urlHash);
		var position = target.offset().top;
		$('body,html').stop().animate({scrollTop:position}, 500);
	}, 100);
}



// メニュー
$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#g_nav").toggleClass('panelactive');
});

$("#g_nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#g_nav").removeClass('panelactive');
});

// リンク外をクリックした時、メニューとじる
$(function() {
  $(document).on('click', function(e) {
      if(!$(e.target).is('.openbtn ,span, a')) {
        $(".openbtn").removeClass('active');
        $("#g_nav").removeClass('panelactive');
      }
  });
});


// テキストランダム変換
const arr = []
//初期値の設定
function TypingInit() {
  $('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
    arr[i] = new ShuffleText(this);//動作させるテキストを配列に格納
  });
}
//スクロールした際のアニメーションの設定
function TypingAnime() {
  $(".js_typing").each(function (i) {
    const elemPos = $(this).offset().top - 50;//要素より、50px上の
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      if(!$(this).hasClass("endAnime")){//endAnimeのクラスがあるかチェック
        arr[i].start();//配列で登録テキストのアニメーションをおこなう
        arr[i].duration = 800;//テキストが最終変化するまでの時間※規定値600
        $(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
      }
    }else{
      $(this).removeClass("endAnime"); //範囲外にスクロールした場合はendAnimeのクラスを削除
    }
  });
}



// スマホ用表示切り替え
// $(function(){
//   const ua = navigator.userAgent;
//   if(ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0){
//     // メニュー縦並び
//     $('.for_smartphone_menu').addClass("implement");
    
//     // 資格縦並び
//     $('.for_smartphone_certification').addClass("implement");
    

//   }else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
//     // メニュー縦並び
//     $('.for_smartphone_menu').addClass("implement");
    
//     // 資格縦並び
//     $('.for_smartphone_certification').addClass("implement");
//   }
// });



$(window).scroll(function () {
  TypingInit();
  TypingAnime();
});
$(window).on('load', function () {
  TypingInit();
  TypingAnime();
});
