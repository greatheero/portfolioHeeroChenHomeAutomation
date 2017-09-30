/*
document.getElementById('demo').onclick = function (){changeColor('yellow')};

function changeColor(newColor) {
  var element = document.getElementById('demo');
  element.style.backgroundColor = newColor;
  console.log("change color");
};
*/
$(document).ready(function() {});

var fired = 0;

// add setion_challenge animation
// $(window).scroll(function(event) {
//   var $section_challenge = $("#challenge");
//   var scrollTop = $(window).scrollTop();
//   var scrollBottom = $(window).scrollTop() + $(window).height();
//   var section_challengeTop = $section_challenge.offset().top;
//   var section_challengeBottom = section_challengeTop + $section_challenge.outerHeight();
//
//   if (scrollBottom > section_challengeTop && scrollTop < section_challengeBottom) {
//     if (fired == 0) {
//       $(".titleChallenge").addClass("sectionTitleSlideIn");
//       fired = 1;
//     }
//   } else {
//
//   }
// });

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('load resize scroll', function() {
  $('.section-primary').each(function() {
    var elementId = $(this).attr('id');

    if ($(this).isInViewport()) {
      $(".title" + elementId).addClass("sectionTitleSlideIn");
      $(".icon" + elementId).addClass("sectionIconBubbleUp");
      $(".text" + elementId).addClass("sectiontextShowUp");
      $("#button" + elementId).addClass("sectionAnimatedButton");
      $("#text" + elementId).addClass("sectionAnimatedText");
      for (var i = 0; i < 3; i++) {
        $("#imageFrame" + elementId + "_" + i.toString()).addClass("animatedImageFrameLevel_" + i.toString());
      }

    } else {

    }
  });
});
