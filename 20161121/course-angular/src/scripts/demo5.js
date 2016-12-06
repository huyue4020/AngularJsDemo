var myApp = angular.module('myApp',[]);
//M -- Model (数据)
var users = [
	{
		name:'zhangsan',
		age:'12'
	},{
		name:"lisi",
		age:'44'
	}
];

//C -- Controller
myApp.controller('myController',function($scope){ 
	$scope.items = [
		"mmm"
	];
	$scope.item = "";
	$scope.add = function(event){
		// console.log(event);
		if(event.code == 'Enter'){
			$scope.items.push($scope.item);
			$scope.item = "";
		};
	};
	$scope.remove = function(i){
		$scope.items.splice(i,1);
	};
});