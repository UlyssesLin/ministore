//Handles routing
var demoApp=angular.module('demoApp',['ngRoute']);
demoApp.config(function($routeProvider){
	$routeProvider
		.when('/',
			{
				templateUrl:'partials/customers.html'
			})
		.when('/orders',
			{
				templateUrl:'partials/orders.html'
			})
		.otherwise({
			redirectTo:'/'
		});
});