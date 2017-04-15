$(function() {
  var oText = $('.sambut').html();
  var oTextSub = $('.sambut-sub').text();
  $(window).scroll(function() {
    var wScroll = $(window).scrollTop();
    if(wScroll > 0) {
      $('.navigasi').addClass('menu-putih');
    } else {
      $('.navigasi').removeClass('menu-putih');
    }
    $('.sambut-group').css('transform', 'translateY('+ (100 + wScroll / 2) +'%)');
    /*if(wScroll > 2000)
    {
      $('.sambut').html('<span class="kurawal">{</span>Coded with <span style="color: orange"><span class="fa fa-heart"></span></span> By<span class="kurawal">}</span>');
      $('.sambut-sub').html('Muhamad Diaz');
    } else {
      $('.sambut').html(oText);
      $('.sambut-sub').html(oTextSub);
    }*/
  });
  $('.fitur-sub').waypoint(function(d) {
      if(d == "down")
      {
        $('.sambut').html('<span class="kurawal">{</span>Coded with <span style="color: orange"><span class="fa fa-heart"></span></span> By<span class="kurawal">}</span>');
        $('.sambut-sub').html('Muhamad Diaz');
      } else {
        $('.sambut').html(oText);
        $('.sambut-sub').html(oTextSub);
      }
  });
  $('.tim').waypoint(function(d) {
      if(d == "down")
      {
        $('.frontend').addClass('frontend-anim');
        $('.pemisah').addClass('divider-anim');
        $('.backend').addClass('backend-anim');
      } else {
        $('.frontend').removeClass('frontend-anim');
        $('.pemisah').removeClass('divider-anim');
        $('.backend').removeClass('backend-anim');
      }
  }, {'offset': '50%'});
});
