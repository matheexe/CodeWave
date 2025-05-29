$(window).on('load', function() {

    const $loadscreen = $('.load-screen');
    const $content = $('.content');
    
    $loadscreen.css('opacity', '0');
    
    setTimeout(() => {
        $content.addClass('visible');
        
        setTimeout(() => {
            $loadscreen.css('display', 'none');
        }, 500); 
    }, 800); 
});




$(document).ready(function () {
  const $dot = $('<div class="cursor-dot"></div>').appendTo('body');
  const $outline = $('<div class="cursor-outline"></div>').appendTo('body');

  $(document).on('mousemove', function (e) {
    $dot.css({ left: e.clientX, top: e.clientY });
    setTimeout(() => {
      $outline.css({ left: e.clientX, top: e.clientY });
    }, 50);
  });

  $('a, button, .header-title, .ri-heart-fill, .card').hover(
    function () {
      $outline.addClass('link-hover');
      $dot.addClass('link-hover');
    },
    function () {
      $outline.removeClass('link-hover');
      $dot.removeClass('link-hover');
    }
  );
});