/*==================================================================
            FULL SITE
==================================================================*/
// Number animation.
$(function () {
    $('.counter').counterUp({
        delay: 5,
        time: 1000
    });
});

/*==================================================================
            SIDE BAR & BACK TO TOP BUTTON
==================================================================*/
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// // Back to top and nav bar animation.
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
            // Hide and fade out
            $("#back-to-top").fadeOut();
        } else {
            // Show the fade in
            $("#back-to-top").fadeIn();
        }
    });
});

/*==================================================================
            HOME
==================================================================*/
// Fades arrow as you scroll.
$(window).scroll(function () {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);
});

// // Type effect
$(function () {
  var typed = new Typed('.typed', {
      strings: ['An analysis of Denver Uber 3200+ trips. ', 'Includes every city 25 miles of Denver.', 'Taken mostly in the summer&apos;s of 2018 and 2019. ', 'Learn what rideshare companies don&apos;t disclose.', 'Take a look at what its like to be a Denver Driver.', 'An analysis of Denver Uber 3200+ trips. '],
      startDelay: 3000,
      typeSpeed: 45,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
      loopCount: 1,
      smartBackspace: true
  });
});

/*==================================================================
            CONTACT
==================================================================*/
// Form validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();