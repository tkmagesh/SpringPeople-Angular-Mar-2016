angular
	.module("myApp.products")
	.controller("productInfoController", function($scope, productService, $routeParams){
			var productId = $routeParams.id;
			productService.getById(productId).then(function(product){
				$scope.product = product;
			});
		})