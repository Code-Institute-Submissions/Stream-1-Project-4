angular.module("photographer's-site", ["ngRoute"]);
 
angular.module("photographer's-site").config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when("/", {
        templateUrl: "index.html",
        
    })
    .when("/about", {
        templateUrl: "about.hmtl",
        
    })
    .when("/gallery", {
    	templateUrl: "gallery.html",
    	
    })
    .when("/events", {
    	templateUrl: "events.html",
    	
    })
    .when("/contacts", {
    	templateUrl: "contacts.html",

    })

    .otherwise({
        templateUrl: "index.html",

    })

});