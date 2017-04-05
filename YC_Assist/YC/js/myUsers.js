angular.module('myApp',[]).controller('userCtrl',function($scope){
	$scope.fName = "";
	$scope.lName = "";
	$scope.passw1 = "";
	$scope.passw2 = "";
	$scope.users = [
		{id:1, fName:'tang',lName:"yu"},
		{id:2, fName:'li',lName:"ning"},
		{id:3, fName:'wu',lName:"yao"},
		{id:4, fName:'lao',lName:"lei"},
		{id:5, fName:'jia',lName:"peng"},
		{id:6, fName:'xiao',lName:"gang"},
	];
	$scope.edit = true;
	$scope.error = false;
	$scope.incomplete = false;
	$scope.editUser = function(id){
		if(id=="new"){
			$scope.edit = true;
			$scope.incomplete = false;
			$scope.fName = "";
			$scope.lName = "";
		}else{
			$scope.edit = false;
			$scope.fName = $scope.users[id-1].fName;
			$scope.lName = $scope.users[id-1].lName;
		}
	};
	
	$scope.$watch('passw1',function(){$scope.test();});
	$scope.$watch('passw2',function(){$scope.test();});
	$scope.$watch('fName',function(){$scope.test();});
	$scope.$watch('lName',function(){$scope.test();});
	
	$scope.test = function(){
		if($scope.passw1 !==$scope.passw2){
			$scope.error = true;
		}else{
			$scope.error = false;
		}
		$scope.incomplete = false;
		if($scope.edit && (!&scope.fName.length ||
			!$scope.lName.length ||
			!$scope.passw1.length || !$scope.passw2.length)){
				$scope.incomplete = true;
			}
		};
})
