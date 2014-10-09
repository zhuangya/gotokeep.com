$(function () {
  $('.fittext').fitText();

  var scrollTimer;

  $(window).scroll(function () {

    setTimeout(function () {
      var windowTop = $(window).scrollTop();
      var landingHeight = $('#landing').outerHeight();
      var logoHeight = $('#logo').outerHeight();

      if (windowTop + logoHeight > landingHeight) {
        $('#logo').hide();
      } else {
        $('#logo').show();
      }
    }, 100);
  });
});
