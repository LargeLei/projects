var app = angular.module("myApp", ['ui.router']);
app.config(function($stateProvider) {
	$stateProvider.
	state('index', {
		url: 'index',
		templateUrl: 'shou-h-s.html'
	}).
	state('s-index', {
		url: 's-index',
		templateUrl: 'service/index.html'
	}).
	state('YC', {
		url: 'YC',
		templateUrl: 'YC/youchengxiezhu.html'
	}).
	state('order', {
		url: 'order',
		templateUrl: 'order/order_shop/shop dingdan.html'
	}).
	state('home', {
		url: 'home',
		templateUrl: 'my_home/index.html'
	}).
	state('order-YC', {
		url: 'order-YC',
		templateUrl: 'order/order_shop/shop dingdan.html'
	}).
	state('YC-order', {
		url: 'YC-order',
		templateUrl: 'order/YC_order/wodedingdan-ycdd.html'
	})
})

app.controller('siteCtrl', function($scope, $http) {
	$http.get("http://localhost:3000/users/order_select")
		.success(function(response) {
			console.log(response)
			$scope.names = response.result;
		});
});