angular
	.module("myApp.products")
	.service("productService", function($http){
		this.getAll = function(){
			return $http.get("/products/")
				     .then(function(response){
				         return response.data;
				     });
		};

		this.getById = function(id){
			return $http.get("/products/" + id)
				.then(function(response){
					return response.data;
				})
		};
	});