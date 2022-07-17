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
const progressBar6 = document.querySelector('.progress__bar6');


window.addEventListener('scroll', () => {
  const windowYPos = window.pageYOffset;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (windowYPos / height) * 95;
  progressBar.style.width = scrolled + "%";
  var scrolled = scrolled + 3;
  progressBar1.style.width = scrolled + "%";
  var scrolled = scrolled - 8;
  progressBar2.style.width = scrolled + "%";
  var scrolled = scrolled - 12;
  progressBar3.style.width = scrolled + "%";
  var scrolled = scrolled - 3;
  progressBar4.style.width = scrolled + "%";
  var scrolled = scrolled - 3;
  progressBar5.style.width = scrolled + "%";
  var scrolled = scrolled + 2;
  progressBar6.style.width = scrolled + "%";
});





// 文字がスッと表示される 下から上に
function fadeUpControl() {
  $('.fadeUp').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUpappear");

    } else {
      $(this).removeClass("fadeUpappear");
    }
  });
}
// 文字がスッと表示される 上から下に
function fadeDownControl() {
  $('.fadeDown').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeDownappear");

    } else {
      $(this).removeClass("fadeDownappear");
    }
  });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeUpControl();/* アニメーション用の関数を呼ぶ*/
  fadeDownControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述





// 文字タイピングアニメーション
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};





// 起動中アイコンをエラーモードに
// https://seiai.ed.jp/sys/text/htm4/chp09/h09a03.html
function changingicon_errormode(){
  document.getElementById("changingicon_area").setAttribute("src","/image/エラーアイコン.png");
  $('.crush-image').each(function () {
    
    $(this).addClass("crush-imageOn");
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
  });

}






// 文字がスッと表示される 上から下に
function markerControl() {
  $('.marker').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    console.log(elemPos, scroll, windowHeight)
    if (scroll >= elemPos - windowHeight + 380) {//画面中間でマーカー引かれる様に調整
      $(this).addClass("bgcOn");

    } else {
      $(this).removeClass("bgcOn");
    }
  });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  markerControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述
function markerzControl() {
  $('.marker').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    console.log(elemPos, scroll, windowHeight)
    if (scroll >= elemPos - windowHeight + 380) {//画面中間でマーカー引かれる様に調整
      $(this).addClass("odakyu");

    } else {
      $(this).removeClass("odakyu");
    }
  });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  // markerzControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述



























