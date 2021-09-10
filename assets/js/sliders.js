$(function () {
  'use strict';


  /**
   * Hero slider
   */
  if($('div').hasClass('hero-slider')) {
    $('.hero-slider .slider').slick({
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: false,
      cssEase: "linear",
      fade: true,
      autoplaySpeed: 3000,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    });
  }

});
