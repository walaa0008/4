/*jslint browser: true*/
/*global $, document, */

$(document).ready(function () {
    'use strict';
    $(".owl-carousel").owlCarousel({
        autoplay: 200,
        loop: true,
        nav: true,
        itemsCustom: true
    });
});
$(document).ready(function () {
    'use strict';
    $(".one").hover(function () {
        $(".one > div").addClass("gal");
        $(".gallery .one i").show();
    }, function () {
        $(".one > div").removeClass("gal");
        $(".gallery .one i").hide();
    });
    
    $(".two").hover(function () {
        $(".two > div").addClass("gal");
        $(".gallery .two i").show();
    }, function () {
        $(".two > div").removeClass("gal");
        $(".gallery .two i").hide();
    });
    
    $(".three").hover(function () {
        $(".three > div").addClass("gal");
        $(".gallery .three i").show();
    }, function () {
        $(".three > div").removeClass("gal");
        $(".gallery .three i").hide();
        
    });
    
    $(".four").hover(function () {
        $(".four > div").addClass("gal");
        $(".gallery .four i").show();
    }, function () {
        $(".four > div").removeClass("gal");
        $(".gallery .four i").hide();
    });
    
    $(".five").hover(function () {
        $(".five > div").addClass("gal");
        $(".gallery .five i").show();
    }, function () {
        $(".five > div").removeClass("gal");
        $(".gallery .five i").hide();
    });
    
    $(".six").hover(function () {
        $(".six > div").addClass("gal");
        $(".gallery .six i").show();
    }, function () {
        $(".six > div").removeClass("gal");
        $(".gallery .six i").hide();
    });
    
    $(".seven").hover(function () {
        $(".seven > div").addClass("gal");
        $(".gallery .seven i").show();
    }, function () {
        $(".seven > div").removeClass("gal");
        $(".gallery .seven i").hide();
    });
    
    $(".eight").hover(function () {
        $(".eight > div").addClass("gal");
        $(".gallery .eight i").show();
    }, function () {
        $(".eight > div").removeClass("gal");
        $(".gallery .eight i").hide();
    });
    
    $(".neun").hover(function () {
        $(".neun > div").addClass("gal");
        $(".gallery .neun i").show();
    }, function () {
        $(".neun > div").removeClass("gal");
        $(".gallery .neun i").hide();
    });
    
    $(".ten").hover(function () {
        $(".ten > div").addClass("gal");
        $(".gallery .ten i").show();
    }, function () {
        $(".ten > div").removeClass("gal");
        $(".gallery .ten i").hide();
    });
    
});

$(document).ready(function () {
    'use strict';
    $(".gear").click(function () {
        $(".color-option").fadeToggle();
    });
    $(".box").click(function () {
        $(".color").toggleClass("js");
        $(".box").toggleClass("sj");
    });
});
$(document).ready(function () {
    'use strict';
    
    var colorLi = $(".color ul li");
    
    colorLi
        .eq(0).css("backgroundColor", "#e75b1e").end()
        .eq(1).css("backgroundColor", "#1e69b8").end()
        .eq(2).css("backgroundColor", "#8dc635").end()
        .eq(3).css("backgroundColor", "#fdcb03");
    
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr('data-color'));
    });
    
    
    
});



$(document).ready(function () {

    'use strict';
    
    var scrollButton = $("#scrollbut");
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 500) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
        console.log($(this).scrollTop());
    });

    scrollButton.click(function () {
        $("html, body").animate({scrollTop: 0}, 800);
    });

    var am = $("#anm");

    am.click(function(){
        $("html, body").animate({scrollTop: 600}, 500)
    });

    $(".navbar-dark .navbar-collapse > .navbar-nav > li > a").click(function(){
        $(this).addClass("active")
    });

  
});















/*
$(".ourteam div").hover(function () {
        $(".card-img-top").css("opacity", ".5");
        $(".card-body").css("background-color", "#e75b1e");
        $(".card-body h4").css("color", "#fff");
        $(".card-body p").css("color", "#fff");
    },
        function () {
            $(".card-img-top").css("opacity", "1");
            $(".card-body").css("background-color", "#fff");
            $(".card-body h4").css("color", "#000");
            $(".card-body p").css("color", "#000");
        });
    
    
*/
