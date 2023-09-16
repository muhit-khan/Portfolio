$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Toggle More icon on hover
    $(".menu-btn").hover(
        function () {
            // Mouse enter
            $(this).find(".fa-angle-down").hide();
            $(this).find(".fa-angle-left").show();
        },
        function () {
            // Mouse leave
            $(this).find(".fa-angle-down").show();
            $(this).find(".fa-angle-left").hide();
        }
    );

    // Reset the icon when the mouse leaves the "More" link
    $('.menu-btn').mouseleave(function () {
        const angleDownIcon = $(this).find(".fa-angle-down");
        const angleLeftIcon = $(this).find(".fa-angle-left");

        angleDownIcon.show();
        angleLeftIcon.hide();
    });


    // Reset the icon when the mouse leaves the "More" link
    document.querySelector(".menu-btn").onmouseleave = function () {
        const angleDownIcon = document.querySelector(".menu-btn .fa-angle-down");
        const angleLeftIcon = document.querySelector(".menu-btn .fa-angle-left");

        angleDownIcon.style.display = "inline";
        angleLeftIcon.style.display = "none";
    };


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Developer", "Graphics Designer", "Data Analyst", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Programmer", "Developer", "Graphics Designer", "Data Analyst", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});