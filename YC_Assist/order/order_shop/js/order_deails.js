var app = angular.module('myApp', []);
http: //localhost:3000/users/order_select
	app.controller('siteCtrl', function($scope, $http) {
		$http.get("localhost:3000/users/order_select")
			.success(function(response) {
				console.log(response)
				$scope.names = response.data;
			});
	});