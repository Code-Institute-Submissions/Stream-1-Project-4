angular.module("photographerDirectives", [])

	.directive("jumbotron", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/directives/jumbotron.html"
		};
	})

	.directive("mainNav", function() {
	    return {
	        restrict: "AE",
	        templateUrl: "templates/directives/mainNav.html"
	    };
	})

	.directive("mainFooter", function() {
	    return {
	        restrict: "AE",
	        templateUrl: "templates/directives/mainFooter.html"
	    };
	})
	
	.directive("formSelect", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/directives/formSelect.html"
		};
	})

	.directive("formWedding", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/directives/formWedding.html"
		};
	})

	.directive("formParty", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/directives/formParty.html"
		};
	})

	.directive("formEvent", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/directives/formEvent.html"
		};
	});

