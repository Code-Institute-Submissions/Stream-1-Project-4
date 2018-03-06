angular.module("photographerDirectives", [])

	.directive("jumbotron", function() {
		return {
			restrict: "AE",
			templateUrl: "Templates/Directives/jumbotron.html"
		};
	})

	.directive("mainNav", function() {
	    return {
	        restrict: "AE",
	        templateUrl: "Templates/Directives/mainNav.html"
	    };
	})

	.directive("mainFooter", function() {
	    return {
	        restrict: "AE",
	        templateUrl: "Templates/Directives/mainFooter.html"
	    };
	})
	
	.directive("formSelect", function() {
		return {
			restrict: "AE",
			templateUrl: "Templates/Directives/formSelect.html"
		};
	})

	.directive("formWedding", function() {
		return {
			restrict: "AE",
			templateUrl: "Templates/Directives/formWedding.html"
		};
	})

	.directive("formParty", function() {
		return {
			restrict: "AE",
			templateUrl: "Templates/Directives/formParty.html"
		};
	})

	.directive("formEvent", function() {
		return {
			restrict: "AE",
			templateUrl: "Templates/Directives/formEvent.html"
		};
	});

