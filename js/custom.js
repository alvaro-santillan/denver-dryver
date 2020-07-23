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
  $("#sidebar").mCustomScrollbar({
      theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar, #content').toggleClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
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
      strings: [' ', 'An analysis of 3200+ Denver Uber trips. '],
      startDelay: 1000,
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