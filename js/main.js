$(function(){
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
        var speed = 1000;
        var position = 2101
        scroll.classList.remove("scroll-snap");
        $(".container").stop().animate({scrollTop:position}, speed, "swing",function(){
            scroll.classList.add("scroll-snap");
        });
		return false;
	});
});