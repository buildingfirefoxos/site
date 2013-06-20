//Twitter buttons:
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

function tooltip(el,text) {
  el.after('<div class="tipsy tipsy-n"><span class="tipsy-arrow"></span><span class="tipsy-inner">'+ text +'</span></div>');
  var tooltip = el.siblings('.tipsy');
  var ttLeft = el.position().left - (tooltip.width()/2) + 17;
  var ttTop = el.position().top + 50;
  tooltip.css({ left: ttLeft, top: ttTop });
}

$(function() {
  
  //See More
  $('.billboard > blockquote').each(function() {
    $(this).prev().append('<span class="read-more">More</span>');
  });
  
  $('.read-more').toggle(function() { 
    $(this).parent().siblings('blockquote').slideDown(); 
    $(this).text('Less'); 
  }, function() { 
    $(this).parent().siblings('blockquote').slideUp(); 
    $(this).text('More'); 
  });

  //Detect Nightly browser
  if ( !($.browser.mozilla) && ($.browser.version > '20.0') ) {
    $('body').addClass('not-nightly');
  }

  // Test for support for the 'rem' unit to show images fallback in BB section
  if ($('body').hasClass('BB')) {
    var elem = document.createElement('p');
    elem.style.cssText = 'font-size: 1.5rem;';
    if (elem.style.fontSize.indexOf('rem') > -1) {
      console.log("rems supported");
    } else {
      console.log("rems not supported"); 
    }
  }

  //Scroll to top
  $('.scroll-top').click(function() {
    $('body').animate({ scrollTop: 0 }, 'slow');
  });

  //Dropdown
  $.each($('.dropdown'), function() {
    $(this).find('.dropdown-toggle').text($(this).find('.dropdown-menu a:first').text());
    $(this).find('.dropdown-menu li:first a').addClass('active');
  });

  $('.dropdown-toggle').mouseenter(function() {
    $(this).addClass('hover');
    $(this).closest('.dropdown').find('.dropdown-menu').addClass('hover');
  });

  $('.dropdown').mouseleave(function() {
    $(this).find('.dropdown-menu').removeClass('hover');
    $(this).find('.dropdown-toggle').removeClass('hover');
  });

  $('.dropdown-toggle').click(function() {
    event.preventDefault();
  });

  $('.dropdown-menu a').click(function() {
    event.preventDefault();
    var thisToggle = $(this).closest('.dropdown').find('.dropdown-toggle')
    var option = $(this).attr('href').replace( "#", "" );
    var thisMenu = $(this).closest('.dropdown-menu');
    thisMenu.removeClass('hover');
    if ($(this).text() != thisToggle.text()) {
      console.log($(this).closest('.dropdown').next().find('> li'));
      $(this).closest('.dropdown').next().find('> li').hide();
      $('#' + option).fadeIn('slow');
      thisToggle.removeClass('hover').text($(this).text());
      thisMenu.find('a').removeClass('active');
      $(this).addClass('active');
    }
  });

  //Tooltips in header links
  $('.header-links a').tipsy({ 
    gravity: 'ne',
    fade: true
  });



  // TRANSITIONS
  function transtion_1_step(play,time) {
    var container = play.parent().find('.apps-container');
    play.addClass('hide');
    setTimeout(function(){
      container.addClass('animate');
      setTimeout(function(){
        play.removeClass('hide');
        container.removeClass('animate');
      },time);
    },300);
  }

  function transtion_2_steps(play,left1,top1,time1,left2,top2,time2) {
    var container = play.parent().find('.apps-container');
    play.addClass('hide');
    if (container.hasClass('animate-1') == false) {
      setTimeout(function(){
        container.addClass('animate-1');
        setTimeout(function(){
          play.removeClass('hide').css({left: left1, top: top1});
        },time1);
      },300);
    } else {
      setTimeout(function(){
        container.addClass('animate-2');
        setTimeout(function(){
          play.removeClass('hide').css({left: left2, top: top2});
          container.removeClass('animate-1').removeClass('animate-2');
        },time2);
      },300);
    }
  }

  // Task switching 
  $('#example-task .play').click(function(){
    var container = $(this).parent().find('.apps-container');
    var play = $(this);
    $(this).addClass('hide');
    if (container.hasClass('animate-1') == false) {
      setTimeout(function(){
        container.addClass('animate-1');       
        setTimeout(function(){
          play.removeClass('hide').css({left: '158px', top: '300px'});
          tooltip(play,'Click to swipe left');
        },1000);
      },300);
    } else if (container.hasClass('animate-2') == false) {
      play.siblings('.tipsy').remove();
      setTimeout(function(){
        container.addClass('animate-2');
        setTimeout(function(){
          play.removeClass('hide');
        },1000);
      },300); 
    } else {
      setTimeout(function(){
        container.addClass('animate-3');
        setTimeout(function(){
          play.removeClass('hide').css({left: '158px', top: '548px'});
          container.removeClass('animate-1').removeClass('animate-2').removeClass('animate-3');
        },3000);
      },300); 
    }
  });

  //Deleting task
  $('#example-task-2 .play').click(function(){
    var container = $(this).parent().find('.apps-container');
    var play = $(this);
    $(this).addClass('hide');
    if (container.hasClass('animate-1') == false) {
      setTimeout(function(){
        container.addClass('animate-1');       
        setTimeout(function(){
          play.removeClass('hide').css({left: '158px', top: '300px'});
          tooltip(play,'Click to swipe left');
        },1000);
      },300);
    } else if (container.hasClass('animate-2') == false) {
      play.siblings('.tipsy').remove();
      setTimeout(function(){
        container.addClass('animate-2');
        setTimeout(function(){
          play.removeClass('hide');
          tooltip(play,'Click to swipe up');
        },1000);
      },300); 
    } else if (container.hasClass('animate-3') == false) {
      play.siblings('.tipsy').remove();
      setTimeout(function(){
        container.addClass('animate-3');
        setTimeout(function(){
          play.removeClass('hide');
        },1000);
      },300); 
    } else {
      setTimeout(function(){
        container.addClass('animate-4');
        setTimeout(function(){
          play.removeClass('hide').css({left: '158px', top: '548px'});
          container.removeClass('animate-1').removeClass('animate-2').removeClass('animate-3').removeClass('animate-4');
        },2000);
      },300); 
    }
  });

  //Open, close
  $('#example-open .play').click(function(){
    transtion_1_step($(this),2500);
  });

  $('#example-close .play').click(function(){
    transtion_1_step($(this),2500);
  });

  $('#example-invoke .play').click(function(){
    transtion_1_step($(this),2000);
  });

  //Prompts
  $('#example-modal .play').click(function(){
    transtion_2_steps($(this),'215px','424px',1000,'243px','78px',1000);
  });

  //Go deeper
  $('#example-deeper .play').click(function(){
    transtion_2_steps($(this),'13px','69px',1000,'193px','291px',2000);
  });

  /*$('#example-back .play').click(function(){
    transtion_1_step($(this),2500);
  });*/

  //Calls
  $('#example-call-1 .play').click(function(){
    transtion_1_step($(this),3000);
  });

  $('#example-call-2 .play').click(function(){
    transtion_1_step($(this),3000);
  });

  $('#example-call-3 .play').click(function(){
    transtion_2_steps($(this),'235px','471px',1000,'173px','395px',3000);
  });

  $('#example-call-4 .play').click(function(){
    transtion_1_step($(this),3000);
  });

  $('#example-call-5 .play').click(function(){
    transtion_1_step($(this),3000);
  });

  $('#example-call-6 .play').click(function(){
    transtion_2_steps($(this),'235px','471px',1000,'283px','435px',3000);
  });

  $('#example-call-7 .play').click(function(){
    transtion_1_step($(this),3000);
  });

  $('#example-call-8 .play').click(function(){
    transtion_1_step($(this),2500);
  });

  //Functionalities
  $('#example-fuctionalities .play').click(function(){
    transtion_2_steps($(this),'175px','200px',1000,'135px','89px',2000);
  });
});