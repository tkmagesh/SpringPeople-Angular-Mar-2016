angular
	.module("myApp.products")
	.directive("productList", function(){
		return {
			restrict : 'E',
			scope : {
				list : '='
			},
			templateUrl : 'products/templates/productListTemplate.html'
		}
	});