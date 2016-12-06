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
	// $scope MV对象 实时处理数据
	// $scope.users = users;
	$scope.isShow = false;

});