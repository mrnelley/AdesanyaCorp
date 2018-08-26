/**
 * ===================================================================
 * Main js
 *
 * -------------------------------------------------------------------
 */
(function($) {

  "use strict";

  /* --------------------------------------------------- */
  /* Preloader
  ------------------------------------------------------ */
  $(window).load(function() {
    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function() {

      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");

    });
  })

  // $('.particle').particleground({
  //   dotColor: '#555555',
  //   lineColor: '#555555',
  //   particleRadius: 6,
  //   curveLines: true,
  //   density: 10000,
  //   proximity: 110
  // });

  // var $animation_elements = $('.animation-element');
  // var $window = $(window);

  // function check_if_in_view() {
  //   var window_height = $window.height();
  //   var window_top_position = $window.scrollTop();
  //   var window_bottom_position = (window_top_position + window_height);
  //
  //   $.each($animation_elements, function() {
  //     var $element = $(this);
  //     var element_height = $element.outerHeight();
  //     var element_top_position = $element.offset().top;
  //     var element_bottom_position = (element_top_position + element_height);
  //
  //     //check to see if this current container is within viewport
  //     if ((element_bottom_position >= window_top_position) &&
  //       (element_top_position <= window_bottom_position)) {
  //       $element.addClass('in-view');
  //     } else {
  //       $element.removeClass('in-view');
  //     }
  //   });
  // }

  // $window.on('scroll resize', check_if_in_view);
  // $window.trigger('scroll');

  /*-----------------------------------------------------*/
  /* tabs
  	-------------------------------------------------------*/

  $(".tab-content").hide();
  $(".tab-content").first().show();
  // $(".tab-content").first().style('height: 100px;');
  $("ul.tabs li").click(function() {
    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();
    var activeTab = $(this).attr("data-id");
    $("#" + activeTab).fadeIn(900);
  });


  /*----------------------------------------------------*/
  /* Smooth Scrolling
  ------------------------------------------------------*/
  // $('.smoothscroll').on('click', function(e) {
  //
  //   e.preventDefault();
  //
  //   var target = this.hash,
  //     $target = $(target);
  //
  //   $('html, body').stop().animate({
  //     'scrollTop': $target.offset().top
  //   }, 800, 'swing', function() {
  //     window.location.hash = target;
  //   });
  //
  // });


  /* --------------------------------------------------- */
  /*  Placeholder Plugin Settings
  ------------------------------------------------------ */
  // $('input, textarea, select').placeholder()


  /*---------------------------------------------------- */
  /* ajaxchimp
	------------------------------------------------------ */

  // Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
  var mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'

  $('#mc-form').ajaxChimp({

    language: 'es',
    url: mailChimpURL

  });

  // Mailchimp translation
  //
  //  Defaults:
  //	 'submit': 'Submitting...',
  //  0: 'We have sent you a confirmation email',
  //  1: 'Please enter a value',
  //  2: 'An email address must contain a single @',
  //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
  //  4: 'The username portion of the email address is invalid (the portion before the @: )',
  //  5: 'This email address looks fake or invalid. Please enter a real email address'

  $.ajaxChimp.translations.es = {
    'submit': 'Submitting...',
    0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
    1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
    2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
    5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
  }


  /*---------------------------------------------------- */
  /*	contact form
  ------------------------------------------------------ */

  /* local validation */
  $('#contactForm').validate({

    /* submit via ajax */
    submitHandler: function(form) {

      var sLoader = $('#submit-loader');

      $.ajax({

        type: "POST",
        url: "inc/sendEmail.php",
        data: $(form).serialize(),
        beforeSend: function() {

          sLoader.fadeIn();

        },
        success: function(msg) {

          // Message was sent
          if (msg == 'OK') {
            sLoader.fadeOut();
            $('#message-warning').hide();
            $('#contactForm').fadeOut();
            $('#message-success').fadeIn();
          }
          // There was an error
          else {
            sLoader.fadeOut();
            $('#message-warning').html(msg);
            $('#message-warning').fadeIn();
          }

        },
        error: function() {

          sLoader.fadeOut();
          $('#message-warning').html("Something went wrong. Please try again.");
          $('#message-warning').fadeIn();

        }

      });
    }

  });

// CARD FLIP

  let cardTransitionTime = 500;

  let $card = $('.js-card')
  let switching = false
  function flipCard () {
    if (switching) {
      return false
    }
    switching = true

    $card.toggleClass('is-switched')
    window.setTimeout(function () {
      $card.children().children().toggleClass('is-active')
      switching = false
    }, cardTransitionTime / 2)
  }

  $(document).ready(function()
  {
    $('#executivebtn').click(flipCard)

 });

})(jQuery);
