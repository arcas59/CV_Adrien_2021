$(window).on('resize', function() {
    var win = $(this);
    if (win.width() > $screen-sm) {
  
      $('#claus').addClass('crt-animate');
  
    } else {
      $('#claus').addClass('crt-animated');
    }
  });