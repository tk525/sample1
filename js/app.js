// 1文字ずつランダムに表示
function TextRandomAnimeControl() {
  $('.TextRandomAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appearRandomtext");

    } else {
      $(this).removeClass("appearRandomtext");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  TextRandomAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// なぜか文字が欠けるので下も表記
// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".TextRandomAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = '';
    text.split('').forEach(function (t) {
      textbox += '<span>' + t + '</span>';
    });
    $(this).html(textbox);
  });

  TextRandomAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述





// プログレスバー スクロールに合わせて%進める
// https://web-dev.tech/front-end/javascript/page-scroll-progress-bar/
const progressBar = document.querySelector('.progress__bar');
const progressBar1 = document.querySelector('.progress__bar1');
const progressBar2 = document.querySelector('.progress__bar2');
const progressBar3 = document.querySelector('.progress__bar3');
const progressBar4 = document.querySelector('.progress__bar4');
const progressBar5 = document.querySelector('.progress__bar5');


window.addEventListener('scroll', () => {
  const windowYPos = window.pageYOffset;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (windowYPos / height) * 120;
  progressBar.style.width = scrolled + "%";
  var scrolled = scrolled - 5;
  progressBar1.style.width = scrolled + "%";
  var scrolled = scrolled - 10;
  progressBar2.style.width = scrolled + "%";
  var scrolled = scrolled - 15;
  progressBar3.style.width = scrolled + "%";
  var scrolled = scrolled - 5;
  progressBar4.style.width = scrolled + "%";
  var scrolled = scrolled - 5;
  progressBar5.style.width = scrolled + "%";
});
















