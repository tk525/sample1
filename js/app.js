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




// 文字がスッと表示される 上から下に
function markerControl() {
  $('.marker').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
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





// メニュー
$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});





// ランダムに変化するアルファベットからのテキスト
var arr = []
//初期値の設定
function TypingInit() {
  $('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
    arr[i] = new ShuffleText(this);//動作させるテキストを配列に格納
  });
}
//スクロールした際のアニメーションの設定
function TypingAnime() {
  $(".js_typing").each(function (i) {
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
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

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  TypingInit(); //初期設定
  TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述





// テキスト１文字ずつ回転
// rollAnimeにrollというクラス名を付ける定義
function RollAnimeControl() {
  $('.rollAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var childs = $(this).children();  //rollAnimeの子要素を取得
    if (scroll >= elemPos - windowHeight) {
      $(childs).each(function (i) {   //子要素を1つ1つ処理をおこなう
        if (i < 10) {         //10未満の場合
        $(this).css("transition-delay","."+i+"s");  //子要素にcsstransition-delayを追加
        }else {             //10以上の場合
          var n = i / 10;       //ミリ秒指定なので10で割る
          $(this).css("transition-delay",n+"s");  //子要素にcsstransition-delayを追加
        }
      });
      
      $(this).addClass("roll"); //rollというアニメーションクラスを付与

    } else {
      $(childs).each(function () {    //子要素を1つ1つ処理をおこなう
        $(this).css("transition-delay","0s");//子要素にcsstransition-delayの秒を0とする
      });
      $(this).removeClass("roll");//rollというアニメーションクラスを除去
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".rollAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = [];
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="transition-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="transition-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述










// 1文字ずつランダムに表示
function bgcNewsControl() {
  $('.bgc-news').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight + 100) {
      $(this).addClass("bgcOn");
      console.log("OK")

    } else {
      $(this).removeClass("bgcOn");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  bgcNewsControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述