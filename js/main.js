$(function(){
    var thisOffset;
    var bar = document.getElementsByClassName( "in" );
    $(window).on('load',function(){
        thisOffset = 2101
        // console.log(window.innerHeight);
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
        // console.log(window.innerHeight);
        var speed = 1000;
        var position = window.innerHeight*0.7;
        // console.log(position);
        scroll.classList.remove("scroll-snap");
        $(".container").stop().animate({scrollTop:position}, speed, "swing",function(){
            scroll.classList.add("scroll-snap");
        });
        return false;
    });
    $('a[href^=#a]').click(function(){
        var scroll = document.getElementById( "scroll" );
        var speed = 1000;
        var position = window.innerHeight*0.7*2
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
        var position = window.innerHeight*0.7*3
        scroll.classList.remove("scroll-snap");
        $(".container").stop().animate({scrollTop:position}, speed, "swing",function(){
            scroll.classList.add("scroll-snap");
            for(var i = 0; i < bar.length; i++){
                bar[i].classList.add("color");
            }
        });
		return false;
    });
    $('a[href^=#c]').click(function(){
        var scroll = document.getElementById( "scroll" );
        var speed = 1000;
        var position = window.innerHeight*0.7*4
        scroll.classList.remove("scroll-snap");
        $(".container").stop().animate({scrollTop:position}, speed, "swing",function(){
            scroll.classList.add("scroll-snap");
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
    typing('#typing', 'はじめまして。金氏竜哉のポートフォリオです。よかったらどうぞご覧ください。');
    const typing2 = (element, sentence) => {
        [...sentence].forEach((character, index) => {
          setTimeout(() => {
            document.querySelector(element).textContent += character;
          }, 200 * ++index);
        });
    }
});
