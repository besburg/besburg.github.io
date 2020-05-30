$(function(){
	$('a[href^=#w]').click(function clickworks(){
            return new Promise(function(resolve, reject){
            var scroll = document.getElementById( "scroll" );
            var speed = 1000;
            var position = 701
            $("scroll").removeClass("scroll-snap")
            // scroll.classList.remove("scroll-snap");
            // console.log(scroll);
            $(".container").animate({scrollTop:position}, speed, "swing");
            resolve();
            return false;
        });
        // console.log(scroll);
        async function doworks(){
            var result = await clickworks();
            var scroll = document.getElementById( "scroll" );
            $("scroll").addClass("scroll-snap")
        }
        doworks();
    });
    $('a[href^=#a]').click(function(){
        var speed = 1000;
        var position = 1401
        console.log(position);
        $("scroll").removeClass("scroll-snap")
        $(".container").animate({scrollTop:position}, speed, "swing");
        $("scroll").addClass("scroll-snap")
		return false;
    });
    $('a[href^=#s]').click(function(){
        var speed = 1000;
        var position = 2101
        console.log(position);
        $("scroll").removeClass("scroll-snap")
        $(".container").animate({scrollTop:position}, speed, "swing");
        $("scroll").addClass("scroll-snap")
		return false;
	});
});