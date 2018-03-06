photographersSite("photographerDirectives", [])

	.directive("jumbotron", function() {
		return {
			restrict: "EA",
			templateUrl: "Templates/Directives/jumbotron.html"
		};
	})

	.directive("mainNav", function() {
	    return {
	        restrict: "EA",
	        templateUrl: "Templates/Directives/mainNav.html"
	    };
	})

	.directive("mainFooter", function() {
	    return {
	        restrict: "EA",
	        templateUrl: "Templates/Directives/mainFooter.html"
	    };
	})
	
	.directive("formSelect", function() {
		return {
			restrict: "EA",
			templateUrl: "Templates/Directives/formSelect.html"
		};
	})

	.directive("formWedding", function() {
		return {
			restrict: "EA",
			templateUrl: "Templates/Directives/formWedding.html"
		};
	})

	.directive("formParty", function() {
		return {
			restrict: "EA",
			templateUrl: "Templates/Directives/formParty.html"
		};
	})

	.directive("formEvent", function() {
		return {
			restrict: "EA",
			templateUrl: "Templates/Directives/formEvent.html"
		};
	});

