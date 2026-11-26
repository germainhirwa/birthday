
$(window).on('load', function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function () {

    var vw;
    var messageStarted = false;

    // Resize balloons when the window changes size
    $(window).resize(function () {
        vw = $(window).width() / 2;

        $('#b11,#b22,#b33,#b44,#b55,#b66,#b77').stop();

        $('#b11').animate({ top: 240, left: vw - 350 }, 500);
        $('#b22').animate({ top: 240, left: vw - 250 }, 500);
        $('#b33').animate({ top: 240, left: vw - 150 }, 500);
        $('#b44').animate({ top: 240, left: vw - 50 }, 500);
        $('#b55').animate({ top: 240, left: vw + 50 }, 500);
        $('#b66').animate({ top: 240, left: vw + 150 }, 500);
        $('#b77').animate({ top: 240, left: vw + 250 }, 500);
    });

    // Balloon animation functions
    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();

        $('#b1').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () { loopOne(); }
        );
    }

    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();

        $('#b2').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () { loopTwo(); }
        );
    }

    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();

        $('#b3').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () { loopThree(); }
        );
    }

    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();

        $('#b4').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () { loopFour(); }
        );
    }

    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();

        $('#b5').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () { loopFive(); }
        );
    }

    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();

        $('#b6').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () { loopSix(); }
        );
    }

    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();

        $('#b7').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () { loopSeven(); }
        );
    }

    // Hide later buttons when the page loads
    $('#wish_message').hide();
    $('#story').hide();

    // STEP 1: Start the celebration
    $('#turn_on').one('click', function () {

        $(this).fadeOut('slow');

        // Turn on decorative lights
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');

        $('body').addClass('peach');

        // Start music
        setTimeout(function () {
            var audio = $('.song')[0];

            if (audio) {
                audio.play().catch(function () {
                    console.log('Music playback requires user interaction.');
                });
            }

            $('#bulb_yellow').addClass('bulb-glow-yellow-after');
            $('#bulb_red').addClass('bulb-glow-red-after');
            $('#bulb_blue').addClass('bulb-glow-blue-after');
            $('#bulb_green').addClass('bulb-glow-green-after');
            $('#bulb_pink').addClass('bulb-glow-pink-after');
            $('#bulb_orange').addClass('bulb-glow-orange-after');

            $('body').addClass('peach-after');

        }, 1000);

        // Show birthday banner
        setTimeout(function () {
            $('.bannar').addClass('bannar-come');
        }, 2000);

        // Fly balloons
        setTimeout(function () {
            $('.balloon-border').animate({ top: -500 }, 8000);

            $('#b1,#b5,#b7').addClass('balloons-rotate-behaviour-one');
            $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

            loopOne();
            loopTwo();
            loopThree();
            loopFive();
            loopSix();
            loopSeven();

        }, 4000);

        // Show cake
        setTimeout(function () {
            $('.cake').fadeIn('slow');
        }, 9000);

        // Show wish button after the initial celebration
        setTimeout(function () {
            $('#wish_message').fadeIn('slow');

            $('#click-hint').text(
                '🎈 The celebration has started! Now make a birthday wish!'
            );

        }, 12000);

    });

    // STEP 2: Arrange balloons and reveal the final button
    $('#wish_message').one('click', function () {

        vw = $(window).width() / 2;

        // Stop balloon movement
        $('#b1,#b2,#b3,#b5,#b6,#b7').stop();

        // Arrange balloons
        $('#b1').css({ top: 240, left: vw - 300 });
        $('#b2').css({ top: 240, left: vw - 180 });
        $('#b3').css({ top: 240, left: vw - 60 });
        $('#b5').css({ top: 240, left: vw + 60 });
        $('#b6').css({ top: 240, left: vw + 180 });
        $('#b7').css({ top: 240, left: vw + 300 });

        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);

        // Hide wish button, then reveal story button
        $(this).fadeOut('slow').delay(3000).promise().done(function () {

            $('#story').fadeIn('slow');

            $('#click-hint').text(
                '💖 One last surprise is waiting just for you!'
            );

        });

    });

    // STEP 3: Show the birthday message
    $('#story').one('click', function () {

        if (messageStarted) return;
        messageStarted = true;

        $(this).fadeOut('slow');

        $('#click-hint').text(
            '🎂 Happy Birthday, Elle! Enjoy your special message!'
        );

        // Hide cake and show message
        $('.cake').fadeOut('fast').promise().done(function () {

            $('.message').fadeIn('slow');

            // Hide all paragraphs initially
            $('.message p').hide();

            var paragraphs = $('.message p');
            var totalParagraphs = paragraphs.length;

            // Display paragraphs one at a time
            function showMessage(index) {

                if (index >= totalParagraphs) {
                    $('.cake').fadeIn('fast');
                    return;
                }

                paragraphs.eq(index).fadeIn('slow').delay(1000).promise().done(function () {
                    paragraphs.eq(index).fadeOut('slow').promise().done(function () {
                        showMessage(index + 1);
                    });
                });

            }

            showMessage(0);

        });

    });

});
