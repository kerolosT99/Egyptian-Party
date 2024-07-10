let sideBarWidth = $('.sidebar-content').outerWidth()

// Scrolling
$('.nav-link').click(function (e) {
    if (e.target.hasAttribute('href')) {
        let section = $(e.target).attr('href')
        let sectionTop = $(section).offset().top
        $('html,body').animate({ scrollTop: sectionTop }, 500)
    }
})

$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $('#Home').offset().top + 150) {
            $('.open-nav').css({ 'background-color': 'rgba(214, 46, 51, 0.6)' });
        } else {
            $('.open-nav').css({ 'background-color': 'transparent' });
        }
    });
});


// Sidebar Nav
$(document).ready(function () {
    $('.sidebar-nav').css('left', `-${sideBarWidth}px`)
})

$('.open-nav').click(function () {
    if ($('.sidebar-nav').css('left') === '0px')
        $('.sidebar-nav').animate({ left: `-${sideBarWidth}px` }, 500)
    else
        $('.sidebar-nav').animate({ left: `0px` }, 500)
})
$('.nav-link.close-btn').click(function () {
    $('.sidebar-nav').animate({ left: `-${sideBarWidth}px` })
})

// Details section

$(document).ready(function () {
    $('.singer h3').click(function () {
        var paragraph = $(this).next('p');

        if (!paragraph.hasClass('d-none')) {
            paragraph.slideUp(500, function () {
                $(paragraph).addClass('d-none');
            });
        } else {
            $('.singer p').not(paragraph).filter(':not(.d-none)').slideUp(500, function () {
                $(this).addClass('d-none');
            });

            paragraph.removeClass('d-none').slideDown(500);
        }
    });
});

// Duration section
$(document).ready(function () {
    var eventDate = new Date('2024-7-26').getTime();
    
    function updateCountdown() {
        var now = new Date().getTime();
        var distance = eventDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days.toString().padStart(2, '0') + ' D');
        $('#hours').text(hours.toString().padStart(2, '0') + ' H');
        $('#minutes').text(minutes.toString().padStart(2, '0') + ' M');
        $('#seconds').text(seconds.toString().padStart(2, '0') + ' S');

        if (distance < 0) {
            $('#days').text('00 D');
            $('#hours').text('00 H');
            $('#minutes').text('00 M');
            $('#seconds').text('00 S');

        }
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
});


// Contact section
$('.icon-border').hover(function () {
    $(this).css({
        'background-color': 'red',
        'color': 'white',
        'cursor': 'pointer'
    })
},
    function () {
        $(this).css({
            'background-color': 'transparent',
            'color': '#777'
        })
    });

$(document).ready(function () {
    var maxLength = 100;
    $('#message').on('input', function () {
        var length = $(this).val().length;
        var lengthRemaining = maxLength - length;

        if (lengthRemaining >= 0) {
            $('#charCount').text(lengthRemaining);
        } else {
            $('#charCount').text('0');
            $(this).val($(this).val().substring(0, maxLength));
        }
    });
});







