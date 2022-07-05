//自己紹介のふわっと表示する
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 150;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });






$(window).scroll(function (){
  // fadeAnime();/* アニメーション用の関数を呼ぶ*/
  // ふわっ
  $('.progress').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();





    if (scroll >= elemPos - windowHeight){
    $(this).addClass('progress');// 画面内に入ったらfadeUpというクラス名を追記
        // プログレスバー
        const progressBar = document.querySelector('.progress');

        window.addEventListener('scroll', () => {
          const windowYPos = window.pageYOffset;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (windowYPos / height) * 100;
          // progressBar.style.width = scrolled + "%";
          progressBar.style.width = scrolled + "%";
        });
    }else{
    $(this).removeClass('progress');// 画面外に出たらfadeUpというクラス名を外す
    }
    });

  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);

});