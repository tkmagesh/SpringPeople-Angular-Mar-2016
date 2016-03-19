angular
	.module("myApp.products", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/products", {
					templateUrl : 'products/templates/productsTemplate.html',
					controller : 'productsController'
				})
				.when("/products/:id", {
					templateUrl : 'products/templates/productInfoTemplate.html',
					controller : 'productInfoController'
				})
	})
	