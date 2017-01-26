console.log(`%c ________________________________________
< SmartUp >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")

//=======================================================
// Video Section
//=======================================================
$(document).ready(function() {

    // Animation druing scroll
    window.sr = ScrollReveal();
    sr.reveal('.reveal', {
        duration: 700
    });

    var vid1 = document.getElementById("myVideo1");
    if (vid1) {
        function playPause1() {
            if (vid1.paused) {
                vid1.play();
            }
            else {
                vid1.pause();
            }
        }
        if ($("#videoWrap1").length > 0) {
            $('#playVideos').on('click', function(e) {
                e.preventDefault();
                playPause1();
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    vid1.pause();
                }
                else {
                    $(this).addClass('active');
                    vid1.play();
                }
            });
        }
        vid1.play();

        // $('.play-btn').on('click', function(e) {
        //     e.preventDefault();
        //     vid1.play();
        // });
    }
});
