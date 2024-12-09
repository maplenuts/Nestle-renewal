$(document).ready(function () {

    $(".lnb, .lnbBg, .searchBox").hide();
    $("#header").mouseenter(function () {
        $("#header, #gnb").addClass("active");
        $(".lnb").stop().fadeIn();
        $(".lnbBg").stop().slideDown(500);
        $("#header h1 a img").attr("src", "img/common/nestleLogo_brown.png");
        $(".search img").attr("src", "img/common/btnSearch_fill.png");
        $(".lang img").attr("src", "img/common/btnLang_fill.png");
        $(".sitemap img").attr("src", "img/common/btnSitemap_fill.png");
    })

    $("#header").mouseleave(function () {

        if (!$("#header").hasClass("active")) {
            $("#header, #gnb").removeClass("active");
            $(".lnb").stop().fadeOut(150);
            $(".lnbBg").stop().slideUp(200);
            $("#header h1 a img").attr("src", "img/common/nestleLogo_white.png");
            $(".search img").attr("src", "img/common/btnSearch.png");
            $(".lang img").attr("src", "img/common/btnLang.png");
            $(".sitemap img").attr("src", "img/common/btnSitemap.png");
        }
    })

    $(".search").click(function () {
        $("#header").addClass("active");
        $(".searchBox").fadeIn();
    })

    $(".sch_close").click(function () {
        $("#header").removeClass("active");
        $(".lnb").stop().fadeOut(0);
        $(".lnbBg").stop().slideUp(0);
        $(".searchBox").fadeOut(0);
    })


    // brand
    $(".brandBg li").hide();

    $(".brandBtn li a").mouseenter(function () {
        let idx = $(this).index();
        $(".brandBg li").eq(idx).fadeIn(500).siblings().fiadeOut(0);
    });

    var stories = new Swiper(".stories", {

        slidesPerView: 3,
        spaceBetween: 20,

        centeredSlides: true,
        speed: 2000,
        loop: true,

        autoplay: {
            delay: 1000,
            disableOnIneraction: false,
        },
    });


    let currentIndex = 0; //현재 이미지
    $(".slideWrap").append($(".slide").first().clone(true)); //첫번째 이미지 복사, 마지막에 추가

    setInterval(function () {
        currentIndex++; // 현재 이미지를 1씩 증가
        $(".slideWrap").animate({ marginLeft: -currentIndex * 100 + "%" }, 600)
        if (currentIndex == 3) { // 마지막 이미지일 때
            setTimeout(function () {
                $(".slideWrap").animate({ marginLeft: 0 }, 0);
                currentIndex = 0;
            }, 700)
        }
    }, 3500) // 3초에 한 번씩 실행 


})
