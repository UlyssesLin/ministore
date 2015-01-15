//Ulysses Lin 1/13/2015
//Logic for getting, adding, & removing customer orders
demoApp.controller('Customer',function($scope,CustomerFactory){
	$scope.customers=CustomerFactory.getCustomers();
	$scope.items=CustomerFactory.getItems();
	$scope.removeCustomer=function(customer){
		CustomerFactory.removeCustomer(customer);
	}
	$scope.makeOrder=function(name,quantity,item){
		CustomerFactory.makeOrder(name,quantity,item);
	}
});
//Logic for items tally
demoApp.controller('Order',function($scope,CustomerFactory){
	$scope.items=CustomerFactory.sumItems();
	$scope.newItem=function(item){
		CustomerFactory.newItem(item);
	}
});
//Logic for error message
demoApp.controller('Wrong',function($scope,CustomerFactory){
	$scope.wrong=CustomerFactory.getError();
});