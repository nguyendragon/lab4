$('.product-item').click(function(e) {
    e.preventDefault();
    location.href = 'detail.html';
});

$('.sign-up').click(function(e) {
    e.preventDefault();
    location.href = 'signup.html';
});

$('.sign-in').click(function(e) {
    e.preventDefault();
    location.href = 'signin.html';
});

$('.menu').click(function(e) {
    e.preventDefault();
    $('.form-btn img').addClass('absolute');
    $('.nav-list, .form-btn').toggleClass('hidden');
});
$(window).resize(function() {
    if ($(window).width() >= 640) {
        $('.form-btn img').removeClass('absolute');
        $('.nav-list, .form-btn').removeClass('hidden');
    }
    if ($(window).width() < 640) {
        $('.form-btn img').addClass('absolute');
        $('.nav-list, .form-btn').addClass('hidden');
    }
})