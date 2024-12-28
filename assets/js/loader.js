// loader.js
$(document).ready(function() {
    $('#loader').show();

    setTimeout(function() {
        $('#loader').fadeOut(500, function() {
            $('#content').fadeIn(500, function() {
                setTimeout(function() {
                    window.location.href = 'portafolio.html';
                }, 3000);
            });
        });
    }, 4000);
});