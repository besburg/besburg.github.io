$(function(){
    var thisOffset;
    var bar = document.getElementsByClassName( "in" );
    $(window).on('load',function(){
        thisOffset = 2101
        console.log(thisOffset)
    });
    $("div").scroll(function() {
        if( $('.container').scrollTop() + $('.container').height() > thisOffset){
            for(var i = 0; i < bar.length; i++){
                bar[i].classList.add("color");
            }
        }
    });
    $('a[href^=#w]').click(function(){
        var scroll = document.getElementById( "scroll" );
        var speed = 1000;
        var position = 701;
        scroll.classList.remove("scroll-snap");
        $(".container").stop().animate({scrollTop:position}, speed, "swing",function(){
            scroll.classList.add("scroll-snap");
        });
        return false;
    });
    $('a[href^=#a]').click(function(){
        var scroll = document.getElementById( "scroll" );
        var speed = 1000;
        var position = 1401
        scroll.classList.remove("scroll-snap");
        $(".container").stop().animate({scrollTop:position}, speed, "swing",function(){
            scroll.classList.add("scroll-snap");
        });
		return false;
    });
    $('a[href^=#s]').click(function(){
        var scroll = document.getElementById( "scroll" );
        console.log(bar);
        var speed = 1000;
        var position = 2101
        scroll.classList.remove("scroll-snap");
        $(".container").stop().animate({scrollTop:position}, speed, "swing",function(){
            scroll.classList.add("scroll-snap");
            for(var i = 0; i < bar.length; i++){
                bar[i].classList.add("color");
            }
        });
		return false;
    });
    const typing = (element, sentence) => {
        [...sentence].forEach((character, index) => {
          setTimeout(() => {
            document.querySelector(element).textContent += character;
          }, 100 * ++index);
        });
    }
    typing('#typing', 'はじめまして。'+'金氏\n竜哉です。');
    const typing2 = (element, sentence) => {
        [...sentence].forEach((character, index) => {
          setTimeout(() => {
            document.querySelector(element).textContent += character;
          }, 200 * ++index);
        });
    }
    typing2('#typing2', '良いものを正しく、楽しく伝えるための');
});
