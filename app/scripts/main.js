'use strict';

$(function () {
  $('body').flowtype({
    minimum : 300,
    maximum : 860
  });
  var $landing = $('#landing');
  var $doc = $('html, body');

  $('.down-arrow').click(function () {
    $doc.animate({
      scrollTop: $landing.outerHeight()
    }, '500', 'swing');
  });

  $(window).scroll(function () {

    setTimeout(function () {
      var windowTop = $(window).scrollTop();
      var landingHeight = $('#landing').outerHeight();
      var logoHeight = $('#logo').outerHeight();

      if (windowTop + logoHeight > landingHeight) {
        $('#logo, .down-arrow').hide();
      } else {
        $('#logo, .down-arrow').show();
      }
    }, 100);
  });
});
