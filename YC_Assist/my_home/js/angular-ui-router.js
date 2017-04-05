var app = angular.module("myApp",['ui.router']);
app.config(function($stateProvider){
	$stateProvider.
	state('index',{
		url:'index',
		templateUrl:'my_home_person/index.html'
	})
})