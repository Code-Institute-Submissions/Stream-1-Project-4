var app = angular.module("photographer's-site", ["ngRoute", "photographerControllers"]);
 
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
        .when("/gallery-wedding", {
            templateUrl: "gallery-wedding.html",
            
        })
        .when("/gallery-party", {
            templateUrl: "gallery-party.html",
            
        })
        .when("/gallery-event", {
            templateUrl: "gallery-event.html",
            
        })
        .when("/gallery-portrait", {
        	templateUrl: "gallery-portrait.html",
        	
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