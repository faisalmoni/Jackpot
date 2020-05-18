$(function (){ 


    //    //STICKY MENU
        $(window).scroll(function () {
            var scrollAmount = $(window).scrollTop();
            if (scrollAmount > 400) {
                $(".navbar").addClass("sticky");
            } else {
                $(".navbar").removeClass("sticky");
            }
        });
    

    
    
//game part
    $('.Re-game-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: false,
        responsive: [
            
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
             {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                   
                   
                }
    },
                        

           
           

  ]


    });
    
//    pricing part
    $('.pricing-active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: false,
        responsive: [
            
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
             {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    
                   
                }
    },
                        

           
           

  ]


    });

    //    tounament-part
    $(".tounament-part .card-header").on('click', function () {
        $(".card").removeClass("addBorder");
        $(this).parent().toggleClass("addBorder");
    });
    
//    countdown js
    
     $('#coun_down').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('#coun_down2').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%M'));
    });
    $('#coun_down3').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%S'));
    });

    //    country bet
    $(".country-bet").niceScroll();









});
