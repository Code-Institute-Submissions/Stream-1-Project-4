
	$(document).ready(function() {

	// Carousel 
	    $("#introCarousel").carousel({
	    	interval: 4000    	
	    });

	// Package Planner

		// Package Form Select
	    $(".event-btn").click(function(event) {
			event.preventDefault();

			var form = $(this).val();

			$(".hidden").css("display", "none")
			$("#" + form).toggle();
		});

		// Package Form Submit

		$(".packageForm").submit(function(event) {
			event.preventDefault();

			var form = $(this);			
			var name = form.find("input[name='name']");
			var addr = form.find("input[name='address']");

			var nameVal = name.val();
			var addrVal = addr.val();
			var pattern = /^[a-zA-Z]+([\s]+)?([a-zA-Z]+)?$/;


			if (nameVal.length < 3 || !pattern.test(nameVal)) {
				$(name).next(".error").slideDown(1000);
			} else if (addrVal.length < 3) {
				$(addr).next(".error").slideDown(1000);
			} else {
				$(".error").hide();
				$(".message").show().text("Hello " + nameVal + " if this was real your package would have been delivered");
				$(".submit-btn").attr("disabled", true);
			};
			
		});


	// Testimonial Form
		$("#testimonial").submit(function(event) {
			event.preventDefault();

			var testName = $("#testName").val();
			var pattern = /^[a-zA-Z]+([\s]+)?([a-zA-Z]+)?$/;
			var testLocation = $("#testLocation").val();

			if (testName.length < 3 || !pattern.test(testName)) {
				$("#testName").next(".error").slideDown(1000);
			} else if (testLocation.length < 3) {
				$("#testLocation").next(".error").slideDown(1000);
			} else {
				$(".error").hide();
				$(".message").show().text("Hello " + testName + " from " + testLocation + " if this was real your message would have been delivered");				
			};			
		});
		
	});


	