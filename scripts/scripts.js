

$(function () {
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  // add a zero in front of numbers<10
  m = checkTime(m);
  document.getElementById('time').innerHTML = "&nbsp" + h + ":" + m;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();
});


$(function () {
  count = 0;
  wordsArray1 =  ["–","&","*","=","?","~","«","¢","+","!","…","≠","◊","→","˚"];
  setInterval(function () {
    count++;
    $("#logoShuffle").fadeOut(0, function () {
      $(this).text(wordsArray1[count % wordsArray1.length]).fadeIn(0);
    });
  }, 200);
});

$(function () {
  count = 0;
  wordsArray2 = ["©","*","–","&","«","∞","¢","=","…","!","~","+","◊","˚","?"];
  setInterval(function () {
    count++;
    $("#footerShuffle").fadeOut(0, function () {
      $(this).text(wordsArray2[count % wordsArray2.length]).fadeIn(0);
    });
  }, 200);
});


$(function () {
	var waypoint = new Waypoint({
	  element: document.getElementById('mayIntro'),
	  handler: function(direction) {
      		    	$('body').removeClass().addClass('color1');
	  }


});

	var waypoint = new Waypoint({
	  element: document.getElementById('mayServices'),
	  handler: function(direction) {
      		    	$('body').removeClass().addClass('color2');
	  },
	   offset: '25%'

	});

});






$(document).ready(function(){

/*
	$('#mayTicker').webTicker({
    duplicate:true,
    speed:60,
    rssfrequency:0,
    startEmpty:false,
    hoverpause:false


	});
*/
/*
$(function () {

	 var config = new shinejs.Config({
      numSteps: 8,
      opacity: 0.2,
      shadowRGB: new shinejs.Color(255, 255, 255)
    });




var shine = new Shine(document.getElementById('*'), config);

	window.addEventListener('mousemove', function(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.draw();
}, false);

	});
*/

$(function () {
var now = moment().format("dddd, MMMM D, YYYY,");
$('#date').append(now)
})
;


$(document).ready(function() {
  $.simpleWeather({
    location: 'New York , NY',
    woeid: '',
    unit: 'f',
    success: function(weather) {

      html = '<li>Current conditions for New York City:&nbsp'+weather.temp+'&deg;'+weather.units.temp+'&nbsp</li>';
      html += '<li class="currently">'+weather.currently+'&nbsp</li>';
      html += '<li>Humidity&nbsp'+weather.humidity+'%</li>';
      html += '<li>Wind&nbsp'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
  // Add smooth scrolling to all links
  $("#scrollArrow").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(window).load(function() {
$('.mayMarquee').marquee({
	//speed in milliseconds of the marquee
	duration: 4000,
	//gap in pixels between the tickers
	gap: 0,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 1500,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: false
});
});
