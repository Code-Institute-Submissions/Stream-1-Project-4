var app = angular.module("photographersSite", ["ngRoute", "photographerControllers", "photographerDirectives"]);
 
   .config(function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);  // Enable href routing without hashes
     
        $routeProvider.when("/", {
            templateUrl: "templates/home.html",
            
        })
        .when("/about", {
            templateUrl: "templates/about.hmtl",
            
        })
        .when("/gallery", {
            templateUrl: "templates/gallery.html",
            
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
        .when("/event", {
        	templateUrl: "templates/event.html",
            controller: "packageSelect"
        	
        })
        .when("/contact", {
        	templateUrl: "templates/contact.html",

        })

        .otherwise({
            templateUrl: "templates/home.html",     

        })

});