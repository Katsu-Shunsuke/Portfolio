$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var target = $($(this).attr('href'));
        console.log(target);
        if (target.length) {
            var top = target.offset().top;
            $('html, body').animate({scrollTop: top}, 1000);
            return false;
        }
    });
});

function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
        document.getElementById("typing-text").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 150);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}
document.addEventListener('DOMContentLoaded', function(){
    typeWriter("about", 0, function(){
        console.log("タイピングが完了しました。");
    });
});

window.onload = function() {
    var bar = document.getElementById("bar");
    console.log(bar);

    function animate(){
        if(width >= 100){
            return;
        }
        width++;
        bar.style.width = width + "%";
        setTimeout(animate, 10);
    };

    var width = 0;
    setTimeout(animate, 3000);
};

/*
window.onload = function() {
    var changeColor = function() {
        var e = document.getElementById('test');
        e.style.color = 'red';
        console.log("書き換えテス")
    }
    setTimeout(changeColor, 5000);
}
*/