



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
	  element: document.getElementById('whoIntro'),
	  handler: function(direction) {
      		    	$('body').removeClass().addClass('color1');   	
	  }


});

	var waypoint = new Waypoint({
	  element: document.getElementById('whoOverview'),
	  handler: function(direction) {
      		    	$('body').removeClass().addClass('color2');   	
	  },
	   offset: '25%'

	});
	
});






$(document).ready(function(){
	
/*
	$('#whoTicker').webTicker({
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
$('.whoMarquee').marquee({
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


