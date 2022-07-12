$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let body = $("#body");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let modal = $("#modal");
    let modalClose = $("#modal__close");
    let team4 = $("#team__item4");
    let team3 = $("#team__item3");
    let team2 = $("#team__item2");
    let team1 = $("#team__item1");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH)

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH){
        if( scrollPos > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");
        body.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 59
        }, 700);

    });


    /* Nav Toggle */

    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
        body.toggleClass("show");
    });

    team4.on("click", function(event){
        event.preventDefault();

        modal.toggleClass("show");
        body.toggleClass("show");
        document.querySelector(".modal__work-title").innerHTML = "Beverly Little";
        document.querySelector(".modal__work-info").innerHTML = "Tattoo Master";
        document.querySelector(".modal__work-preview-photo").src = "assets/images/our_team/44.jpg";

        document.querySelector("#item1").href = "assets/images/works/44.jpg";
        document.querySelector("#item11").src = "assets/images/works/44.jpg";
        document.querySelector("#item2").href = "assets/images/works/t5.jpg";
        document.querySelector("#item22").src = "assets/images/works/t5.jpg";
        document.querySelector("#item3").href = "assets/images/works/t8.jpg";
        document.querySelector("#item33").src = "assets/images/works/t8.jpg";
        document.querySelector("#item4").href = "assets/images/works/66.jpg";
        document.querySelector("#item44").src = "assets/images/works/66.jpg";
        document.querySelector("#item5").href = "assets/images/works/77.jpg";
        document.querySelector("#item55").src = "assets/images/works/77.jpg";
        document.querySelector("#item6").href = "assets/images/works/11.jpg";
        document.querySelector("#item66").src = "assets/images/works/11.jpg";
        document.querySelector("#item7").href = "assets/images/works/j3.jpg";
        document.querySelector("#item77").src = "assets/images/works/j3.jpg";
        document.querySelector("#item8").href = "assets/images/works/22.jpg";
        document.querySelector("#item88").src = "assets/images/works/22.jpg";
        document.querySelector("#item9").href = "assets/images/works/t6.jpg";
        document.querySelector("#item99").src = "assets/images/works/t6.jpg";
        document.querySelector("#number").innerHTML = "+375257778899";
    });
    team3.on("click", function(event){
        event.preventDefault();

        modal.toggleClass("show");
        body.toggleClass("show");
        document.querySelector(".modal__work-title").innerHTML = "Ruth Woods";
        document.querySelector(".modal__work-info").innerHTML = "Tattoo Master";
        document.querySelector(".modal__work-preview-photo").src = "assets/images/our_team/33.jpg";

        document.querySelector("#item1").href = "assets/images/works/j1.jpg";
        document.querySelector("#item11").src = "assets/images/works/j1.jpg";
        document.querySelector("#item2").href = "assets/images/works/j3.jpg";
        document.querySelector("#item22").src = "assets/images/works/j3.jpg";
        document.querySelector("#item3").href = "assets/images/works/j5.jpg";
        document.querySelector("#item33").src = "assets/images/works/j5.jpg";
        document.querySelector("#item4").href = "assets/images/works/j2.jpg";
        document.querySelector("#item44").src = "assets/images/works/j2.jpg";
        document.querySelector("#item5").href = "assets/images/works/j4.jpg";
        document.querySelector("#item55").src = "assets/images/works/j4.jpg";
        document.querySelector("#item6").href = "assets/images/works/j1.jpg";
        document.querySelector("#item66").src = "assets/images/works/j1.jpg";
        document.querySelector("#item7").href = "assets/images/works/j7.jpg";
        document.querySelector("#item77").src = "assets/images/works/j7.jpg";
        document.querySelector("#item8").href = "assets/images/works/j8.jpg";
        document.querySelector("#item88").src = "assets/images/works/j8.jpg";
        document.querySelector("#item9").href = "assets/images/works/j6.jpg";
        document.querySelector("#item99").src = "assets/images/works/j6.jpg";
        document.querySelector("#number").innerHTML = "+375252223399";
    });
    team2.on("click", function(event){
        event.preventDefault();

        modal.toggleClass("show");
        body.toggleClass("show");
        document.querySelector(".modal__work-title").innerHTML = "Timothy Reed";
        document.querySelector(".modal__work-info").innerHTML = "Co-Founder, Tattoo Master";
        document.querySelector(".modal__work-preview-photo").src = "assets/images/our_team/22.jpg";

        document.querySelector("#item1").href = "assets/images/works/t1.jpg";
        document.querySelector("#item11").src = "assets/images/works/t1.jpg";
        document.querySelector("#item2").href = "assets/images/works/t3.jpg";
        document.querySelector("#item22").src = "assets/images/works/t3.jpg";
        document.querySelector("#item3").href = "assets/images/works/t5.jpg";
        document.querySelector("#item33").src = "assets/images/works/t5.jpg";
        document.querySelector("#item4").href = "assets/images/works/t2.jpg";
        document.querySelector("#item44").src = "assets/images/works/t2.jpg";
        document.querySelector("#item5").href = "assets/images/works/t4.jpg";
        document.querySelector("#item55").src = "assets/images/works/t4.jpg";
        document.querySelector("#item6").href = "assets/images/works/j1.jpg";
        document.querySelector("#item66").src = "assets/images/works/j1.jpg";
        document.querySelector("#item7").href = "assets/images/works/t7.jpg";
        document.querySelector("#item77").src = "assets/images/works/t7.jpg";
        document.querySelector("#item8").href = "assets/images/works/t8.jpg";
        document.querySelector("#item88").src = "assets/images/works/t8.jpg";
        document.querySelector("#item9").href = "assets/images/works/t6.jpg";
        document.querySelector("#item99").src = "assets/images/works/t6.jpg";
        document.querySelector("#number").innerHTML = "+375257778899";
    });
    team1.on("click", function(event){
        event.preventDefault();

        modal.toggleClass("show");
        body.toggleClass("show");
        document.querySelector(".modal__work-title").innerHTML = "Victoria Valdez";
        document.querySelector(".modal__work-info").innerHTML = "Founder, Tattoo Master";
        document.querySelector(".modal__work-preview-photo").src = "assets/images/our_team/11.jpg";

        document.querySelector("#item1").href = "assets/images/works/11.jpg";
        document.querySelector("#item11").src = "assets/images/works/11.jpg";
        document.querySelector("#item2").href = "assets/images/works/33.jpg";
        document.querySelector("#item22").src = "assets/images/works/33.jpg";
        document.querySelector("#item3").href = "assets/images/works/55.jpg";
        document.querySelector("#item33").src = "assets/images/works/55.jpg";
        document.querySelector("#item4").href = "assets/images/works/22.jpg";
        document.querySelector("#item44").src = "assets/images/works/22.jpg";
        document.querySelector("#item5").href = "assets/images/works/j4.jpg";
        document.querySelector("#item55").src = "assets/images/works/j4.jpg";
        document.querySelector("#item6").href = "assets/images/works/j1.jpg";
        document.querySelector("#item66").src = "assets/images/works/j1.jpg";
        document.querySelector("#item7").href = "assets/images/works/77.jpg";
        document.querySelector("#item77").src = "assets/images/works/77.jpg";
        document.querySelector("#item8").href = "assets/images/works/j2.jpg";
        document.querySelector("#item88").src = "assets/images/works/j2.jpg";
        document.querySelector("#item9").href = "assets/images/works/44.jpg";
        document.querySelector("#item99").src = "assets/images/works/44.jpg";
        document.querySelector("#number").innerHTML = "+375291112233";
    });
    modalClose.on("click", function(event){
        event.preventDefault();

        modal.removeClass("show");
        body.removeClass("show");
    });

    /* Reviews: https://kenwheeler.github.io/slick/ */

    let slider = $("#reviewsSlider");

    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true
    });
});
