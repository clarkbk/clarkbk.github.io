// Tooltip Init
$(function() {
  $("[data-toggle='tooltip']").tooltip();
});

// make all images responsive
$(function() {
  $("img").addClass("img-responsive");
});

// responsive tables
$(document).ready(function() {
  $("table").wrap("<div class='table-responsive'></div>");
  $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () {
  $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
  $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
$(document).ready(function() {
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('.navbar-custom').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
        //if scrolling up...
          if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
          $('.navbar-custom').addClass('is-visible');
        } else {
          $('.navbar-custom').removeClass('is-visible is-fixed');
        }
      } else {
        //if scrolling down...
        $('.navbar-custom').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
      }
      this.previousTop = currentTop;
      });
  }
});

// dumb celebrity sighting thing
var celeb_sightings = [
  'Alec Baldwin',
  'Donald Glover',
  'Hugh Jackman',
  'Ice-T',
  'James Murphy',
  'Larry King',
  'Nicole Kidman',
  'Olivia Wilde',
  'Robert Pattinson',
  'Samira Wiley'
];
$(document).ready(function() {
  function randCeleb() {
    return celeb_sightings[Math.floor(Math.random() * celeb_sightings.length)];
  };

  function replaceCeleb() {
    span = $("#celeb_sighting");
  celeb = randCeleb();
  oldCeleb = span.html();
  if (celeb == oldCeleb) {
    return;
  }
  duration = 500;
  span.fadeOut(duration, function() {
    span.html(celeb);
    span.fadeIn(duration);
  });
  };

  replaceCeleb();
  var derp = setInterval(replaceCeleb, 5000);
});

// google map
google.maps.event.addDomListener(window, 'load', init);
function init() {
  var center = new google.maps.LatLng(40.709181, -73.969326);
  var mapOptions = {
    center: center, // New York
    disableDoubleClickZoom: true,
    draggable: false,
    mapTypeControl: false,
    panControl: false,
    scrollwheel: false,
    streetViewControl: false,
    zoom: 14,
    zoomControl: false,
    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#0066ff"},{"saturation":74},{"lightness":100}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"},{"weight":0.6},{"saturation":-85},{"lightness":61}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5f94ff"},{"lightness":26},{"gamma":5.86}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.rail","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"on"}]}]
  };
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
  });
}
