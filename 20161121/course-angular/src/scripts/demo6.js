var myApp = angular.module('myApp',[]);
//M -- Model (数据)
var items = [
	{title: '行尸走肉', subscribe: true, updated: 1458864234},
	{title: '权利的游戏', subscribe: true, updated: 1458691234},
	{title: '真探', subscribe: false, updated: 1458777656},
	{title: '罗马', subscribe: true, updated: 1458950499}
];


//C -- Controller
myApp.controller('myController',function($scope){ 
	$scope.items = items;

	$scope.limit = 1;

	$scope.price = 234.56;
});