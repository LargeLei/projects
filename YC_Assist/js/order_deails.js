
var app = angular.module('myApp', []);
		app.controller('siteCtrl', function($scope, $http) {
			$http({
				method: 'GET',
				url: 'http://localhost:3000/users/order_select'
			}).then(function successCallback(response) {
				console.log(response.data)
				$scope.names = response.data;
			}, function errorCallback(response) {
				// 请求失败执行代码
			});

		});