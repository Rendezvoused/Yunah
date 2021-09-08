<link href="https://static.tumblr.com/qudkd6d/OcDnl99gb/style.css" rel="stylesheet" type="text/css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script><!-- fonts --><link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet"><link href="https://static.tumblr.com/6amorxd/xdtqaocdv/quirky-spring-font.css" rel="stylesheet" type="text/css"><!-- icon font -- http://suiomi.com/font --><link href="//solrainha.github.io/saturnicons/saturnicons.css" rel="stylesheet"><link href="https://dl.dropbox.com/s/50g6fbds3rh4m0j/saturnicons.css" rel="stylesheet"><!-- tooltips --><script src="https://static.tumblr.com/iuw14ew/VSQma1786/jquery.style-my-tooltips.js"></script><script>
    (function($){
        $(document).ready(function(){
            $("a[title], img[title], div[title]").style_my_tooltips({
                tip_follows_cursor:true,
                tip_delay_time:30,
                tip_fade_speed:300,
                attribute:"title"
            });
        });
    })(jQuery);
</script><!-- photosets --><script src="https://static.tumblr.com/qudkd6d/Az6nkemqr/pxuphotoset.min.js"></script><script>
    $(document).ready(function(){
       $('.photo-slideshow').pxuPhotoset({
           lightbox: true,
           rounded: false,
           gutter: '1px',
           borderRadius: '0px',
           photoset: '.photo-slideshow',
           photoWrap: '.photo-data',
           photo: '.pxu-photo'
       });
    });
</script><!-- popup --><script>
$(document).ready(function() {
    $('#pop-trigger').click(function() {
        $('.entries').fadeOut();
        $('.popup').fadeIn();
    });
    
    $('.pop-close').click(function() {
        $('.popup').fadeOut();
        $('.entries').fadeIn();
    });
});