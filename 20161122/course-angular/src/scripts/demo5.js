var myApp = angular.module('myModule', []);

myApp.controller('contryController',function($scope){
	$scope.name = "中国";
})

myApp.controller('stateController',function($scope){
	$scope.name = "四川";
})

myApp.controller('cityController',function($scope){
	$scope.name = "成都";
})