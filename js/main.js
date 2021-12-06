$(function() {
    $(".header").each(function(){

        var $window = $(window),
            $header = $(this),
        headerBoxTop = $header.offset().top;

        $window.on("scroll" ,function(){
            if($window.scrollTop()>headerBoxTop){
                $header.addClass("sticky");
            } else {
                $header.removeClass("sticky");
            
            }
            });
            $window.trigger("scroll");

        });
    });


var swiper = new Swiper('.swiper-container', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
