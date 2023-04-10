$('a[href^="#"]').click(function() {
    var target = $($(this).attr('href'));
    if (target.length) {
        var top = target.offset().top;
        $('html, body').animate({scrollTop: top}, 1000);
        return false;
    }
});

window.onload = function() {
    var changeColor = function() {
        var e = document.getElementById('test');
        e.style.color = 'red';
        console.log("書き換えテスト")
    }
    setTimeout(changeColor, 5000);
}