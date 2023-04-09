$('a[href^="#"]').click(function() {
    var target = $($(this).attr('href'));
    if (target.length) {
        var top = target.offset().top;
        $('html, body').animate({scrollTop: top}, 1000);
        return false;
    }
});
