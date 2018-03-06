angular.module("photographerDirectives", [])

	.directive("jumbotron", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/Directives/jumbotron.html"
		};
	})

	.directive("mainNav", function() {
	    return {
	        restrict: "AE",
	        templateUrl: "templates/Directives/mainNav.html"
	    };
	})

	.directive("mainFooter", function() {
	    return {
	        restrict: "AE",
	        templateUrl: "templates/Directives/mainFooter.html"
	    };
	})
	
	.directive("formSelect", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/Directives/formSelect.html"
		};
	})

	.directive("formWedding", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/Directives/formWedding.html"
		};
	})

	.directive("formParty", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/Directives/formParty.html"
		};
	})

	.directive("formEvent", function() {
		return {
			restrict: "AE",
			templateUrl: "templates/Directives/formEvent.html"
		};
	});

