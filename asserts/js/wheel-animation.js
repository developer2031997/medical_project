// on page load wheel moved

                
//  window.addEventListener('load', function() {
//     var element = document.getElementById('rotatingElement');
//     setTimeout(function() {
//         element.style.transition = 'transform 0.5s ease-in-out'; 
//         element.style.transform = 'rotate(0deg)';
//     }, 500); 
// });


$(window).on('load', function() {
    var element = $('#rotatingElement');
    setTimeout(function() {
        element.css({
            'transition': 'transform 0.5s ease-in-out',
            'transform': 'rotate(0deg)'
        });
    }, 500); 
});

$(window).on('load', function() {
    var element = $('#zoomimage');
    setTimeout(function() {
        element.addClass('zoomed');
    }, 0); 
});



