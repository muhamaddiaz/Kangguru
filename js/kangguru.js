$(function() {
  $(window).scroll(function() {
    var wScroll = $(window).scrollTop();
    if(wScroll > 0) {
      $('.navigasi').addClass('menu-putih');
    } else {
      $('.navigasi').removeClass('menu-putih');
    }
    $('.sambut-group').css('transform', 'translateY('+ (100 + wScroll / 2.5) +'%)');
  });
});
