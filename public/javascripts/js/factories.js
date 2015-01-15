//Ulysses Lin 1/13/2015

demoApp.factory('CustomerFactory',function(){
	var d=new Date();
	d=d.toDateString();
	//Initialize existing customers
	var customers=[
		{name:'Britta',item:'Nike shoes',quantity:1,date:d},
		{name:'Jeff',item:'Black belts',quantity:3,date:d},
		{name:'Abed',item:'Ice cream cones',quantity:5,date:d},
		{name:'Annie',item:'Candles',quantity:16,date:d}
	];
	//Intialize existing items (sum will be calculated later)
	var tally=[
		{item:'Nike shoes',sum:0},
		{item:'Black belts',sum:0},
		{item:'Ice cream cones',sum:0},
		{item:'Candles',sum:0}
	];
	var error={message:''};
	var factory={};
	factory.getCustomers=function(){
		return customers;
	}
	factory.getItems=function(){
		return tally;
	}
	factory.getError=function(){
		return error;
	}
	//Creates a new order
	factory.makeOrder=function(name,quantity,item){
		var d=new Date();
		d=d.toDateString();
		customers.push({name:name,item:item,quantity:quantity,date:d});
	}
	//Takes tally of all the items
	factory.sumItems=function(){
		for(item in tally){
			var sum=0;
			for(order in customers){
				if(customers[order].item==tally[item].item){
					sum+=customers[order].quantity;
				}
			}
			tally[item].sum=sum;
		}
		return tally;
	}
	//Adds a new item type
	factory.newItem=function(new_item){
		//Throw error if item type exists
		for(item in tally){
			if(tally[item].item==new_item){
				error.message='That name is already in the list!';
				return false;
			}
		}
		error.message='';
		tally.push({item:new_item,sum:0});
		return true;
	}
	//Finds customer object in data; deletes from data
	factory.removeCustomer=function(to_delete){
		customers.splice(customers.indexOf(to_delete),1);
	}
	return factory;
});