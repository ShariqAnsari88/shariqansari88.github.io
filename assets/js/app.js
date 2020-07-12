$(document).ready(function(){

    let slickSlider = {
        productCarousel: $('.product-slider'),
        productCarouselNav: $('.slider-nav'),
        relatedItemsCarousel: $(".related-slider"),

        slick: function(el, slidesToShow, slidesToScroll, arrows, fade, asNavFor, dots, centerMode, focusOnSelect, infinite){
            
            el.slick({
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToScroll,
                arrows: arrows,
                fade: fade,
                asNavFor: asNavFor,
                dots: dots,
                centerMode: centerMode,
                focusOnSelect: focusOnSelect,
                infinite: infinite
            });

        },
        init: function(){
            slickSlider.slick(slickSlider.productCarousel,1,1,false,true,'.slider-nav',false,null,null,true);
            slickSlider.slick(slickSlider.productCarouselNav,3,1,false,false,'.product-slider',false,true,true,true);
            let slideW = 2.5;
            let slidev = 2;
            if ($(window).width() > 800) {
                slideW = 5
                slidev = 1
            }
            slickSlider.slick(slickSlider.relatedItemsCarousel, slideW, slidev, true, false, null, true, null, null, false);
        }
    }

    //Functions initialization
    slickSlider.init();

    // Product summary accordion
    if ($(window).width() < 800) {
        $(".p-s-column h4").on("click", function () {
            $(".accr").slideUp();
            if ($(this).next(".accr").is(":not(:visible)")) {
                $(this).next(".accr").slideDown();
            }
        });
    }

    // Product payment option drop down
    $('#paymentDd').on("click", function(e){
        e.stopPropagation();
        $(this).toggleClass('active');
        $('#paymentOptions').toggleClass('show');
    });
    $('#paymentDd ul li li').on("click", function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('#dd-selected').text($(this).text());
    });
    
    // Product Customizer Pops
    $('.customizer').on("click", function(e){
        e.stopPropagation();
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
        $(this).siblings().find('.customizer-pops').removeClass('show');
        $(this).find('.customizer-pops').toggleClass('show');
    });


    // On body click remove events
    $(document).click(function(e) {
        if($('#paymentOptions').hasClass('show') || $('.customizer').hasClass('active')) {
            $('#paymentOptions').removeClass('show');
            // $('').removeClass('active');
            $('.customizer, #paymentDd').removeClass('active');
            $('.customizer-pops').removeClass('show');
        }
    });

    // Scroll to section
    $(".review-sec").on("click",function(){
        $("body,html").animate({
            scrollTop: $(".write-review").offset().top
        },1000)
     })

});
