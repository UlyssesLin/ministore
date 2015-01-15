//Handles routing among partials and home
var demoApp=angular.module('demoApp',['ngRoute']);
demoApp.config(function($routeProvider){
	$routeProvider
		.when('/',
			{
				templateUrl:'javascripts/partials/orders.html'
			})
		.when('/customers',
			{
				templateUrl:'javascripts/partials/customers.html'
			})
		.when('/orders',
			{
				templateUrl:'javascripts/partials/orders.html'
			})
		.otherwise({
			redirectTo:'/'
		});
});