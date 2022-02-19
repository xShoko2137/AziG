const scrollTo = document.querySelector('#ToHigh');

scrollTo.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});