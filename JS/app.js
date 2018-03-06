var photographersSite = angular.module("photographersSite", ["ngRoute", "photographerControllers", "photographerDirectives"]);
 
    .config(function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);  // Enable href routing without hashes
     
        $routeProvider.when("/home", {
            templateUrl: "Templates/home.html",
            
        })
        .when("/about", {
            templateUrl: "Templates/about.hmtl",
            
        })
        .when("/gallery", {
            templateUrl: "Templates/gallery.html",
            
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
        	templateUrl: "Templates/event.html",
            controller: "packageSelect"
        	
        })
        .when("/contact", {
        	templateUrl: "Templates/contact.html",

        })

        .otherwise({
            templateUrl: "Templates/home.html",     

        })

});