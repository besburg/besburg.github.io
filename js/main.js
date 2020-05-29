$(function(){
    $('a[href^="#"]').click(function(){
        var time = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" ? 'html' : href);
        var distance = target.offset().top;
        $('body,html').animate({scrollTop:distance}, time, "swing");
        console.log("test")
        return false;
    });
  });
