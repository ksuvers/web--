window.addEventListener("DOMContentLoaded", () => {
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        /* 
                autoplay: true,
                autoplaySpeed: 3000, */
    });

    $('.collab__slider__mini').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<buttom class="slick-arrow1 slick-prev1"> <img src="img/left.svg" alt=""></buttom>',
        nextArrow: '<buttom class="slick-arrow1 slick-next1"><img src="img/right.svg" alt=""></buttom>',
        /*   autoplay: true,
          autoplaySpeed: 3000, */
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.news__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<buttom class="slick-arrow1 slick-prev1"> <img src="img/left.svg" alt=""></buttom>',
        nextArrow: '<buttom class="slick-arrow1 slick-next1"><img src="img/right.svg" alt=""></buttom>',
        /*   autoplay: true,
          autoplaySpeed: 3000, */
        responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    tabs();
    callback();

})

$(function() {
    $('.header__btn-menu').on('click', function() {
        $('.header__menu ul').slideToggle();
    });

});



function tabs() {
    const triggers = document.querySelectorAll(".client__name");
    const tabs = document.querySelectorAll(".wrapper__right__area");
    let selectedTabIndex = 0;

    setListeners();
    hideAllTabs();
    showTab(selectedTabIndex);

    function hideAllTabs() {
        tabs.forEach(tab => {
            tab.classList.add('wrapper__right__area--hide')
        })
    }

    function showTab(index) {
        tabs[index].classList.remove('wrapper__right__area--hide')
    }

    function setListeners() {
        triggers.forEach((trigger, index) => {
            trigger.addEventListener('click', () => {
                selectedTabIndex = index
                hideAllTabs();
                showTab(selectedTabIndex);
            })
        })
    }
}

// callback
function callback() {
    let callbackTrigger = document.querySelector('#callback-trigger');
    let callbackPopup = document.querySelector('#callback-popup');
    let closeButton = document.querySelector("#callback-close")

    callbackTrigger.addEventListener('click', () => {
        console.log('hello');
        callbackPopup.classList.remove('callback-popup--close')
    })

    closeButton.addEventListener('click', () => {
        callbackPopup.classList.add('callback-popup--close')
    })
}