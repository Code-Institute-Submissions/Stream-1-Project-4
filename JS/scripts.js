
	$(document).ready(function() {

	// Carousel 
	    $("#introCarousel").carousel({
	    	interval: 4000    	
	    });

	// Package Planner

		// Package Form Select
	    $(".event-btn").click(function(event){
			event.preventDefault();

			var form = $(this).attr("id");

			$(".hidden").css("display", "none")								
			$("#" + form + "Form").toggle();				
		});		

		$("#testimonial").submit(function(event){			
			var testName = $("#testName").val();
			var testLocation = $("#testLocation").val();
			var testText = $("#testText").val();

			$("#testMessage").text("Hello " + testName + " from " + testLocation + " if this was real your message would have been delivered");
			$("#testMessage").css("background-color", "lightgreen");
		});
	


	});


	