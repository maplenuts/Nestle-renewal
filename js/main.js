$(document).ready(function () {

    let header = $("#header");
    $(".lnb, .lnbBg").hide();

    header.mouseenter(function () {
        header.addClass("active");
        let subMenu = $(".lnb");
        subMenu.stop().fadeIn();
        $("#header h1 a img").attr("src", "img/common/nestleLogo_brown.png");
        $("#gnb > li > a").css({ "color": "#111" });
        $(".lnb li a").css({ "color": "#333" });
        $(".lnbBg").stop().slideDown(500);
        $(".lnb > li").hover(
            function () {
                $(this).find("a").css("color", "var(--blue)");
            },
            function () {
                $(this).find("a").css("color", "#111"); // 원래 색상으로 복원
            }
        );
        $(".search img").attr("src", "img/common/btnSearch_fill.png");
        $(".lang img").attr("src", "img/common/btnLang_fill.png");
        $(".sitemap img").attr("src", "img/common/btnSitemap_fill.png");
    });

    header.mouseleave(function () {
        header.removeClass("active");
        let subMenu = $(".lnb");
        subMenu.stop().fadeOut(420);
        $("#header h1 a img").attr("src", "img/common/nestleLogo_white.png");
        $("#gnb > li > a").css({ "color": "#fff" });
        $(".lnb li a").css({ "color": "#fff" });
        $(".lnbBg").stop().slideUp(0);
        $(".search img").attr("src", "img/common/btnSearch.png");
        $(".lang img").attr("src", "img/common/btnLang.png");
        $(".sitemap img").attr("src", "img/common/btnSitemap.png");
    });

    // search 영역
    $(".searchBox").hide();
    $(".search").click(function () {
        header.addClass("active");
        $(".searchBox").fadeIn();
        $("#fp-nav").fadeOut();
    });
    $(".sch_close").click(function () {
        $(".searchBox").fadeOut();
        $("#fp-nav").fadeIn();
    });

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