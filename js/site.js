//Twitter:
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

$(function() {
  //See More
  $('.billboard > blockquote').each(function() {
    $(this).after('<span class="icon-more">See more</span>');
  });
  
  $('.icon-more').click(function() { 
    $(this).siblings('blockquote').slideToggle(); 
    $(this).toggleClass('less'); 
  });

  //Detect Nightly browser
  if ( !($.browser.mozilla) && ($.browser.version > '20.0') ) {
    $('body').addClass('not-nightly');
  }


});