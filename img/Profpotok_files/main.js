$(function(){

    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite:false,
    });
    $('.collab__slider__mini').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow:'<buttom class="slick-arrow1 slick-prev1"> <img src="img/left.svg" alt=""></buttom>',
        nextArrow:'<buttom class="slick-arrow1 slick-next1"><img src="img/right.svg" alt=""></buttom>'
   });
    
    });