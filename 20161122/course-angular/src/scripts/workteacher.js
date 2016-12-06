var myApp = angular.module('myModule',[]);
//M -- Model (数据)
var items = [{
				firstName: "Fang",
				lastName: "vane",
				gender: 1,
				salary: 12333.496,
				birthday: new Date('2007-7-11')
			}, {
				firstName: "Sara",
				lastName: "rose",
				gender: 2,
				salary: 232334.23,
				birthday: new Date('1997-2-3')
			}, {
				firstName: "Mark",
				lastName: "bear",
				gender: 1,
				salary: 68000,
				birthday: new Date('1968-03-22')
			}, {
				firstName: "Aam",
				lastName: "hot",
				gender: 1,
				salary: 66880.5,
				birthday: new Date('1986-3-4')
			}]
//自定义筛选(1代表男，2代表女)
myApp.filter("gender",function(){
	return function(gender){
		switch (gender) {
			case 1:
				return "男";
			case 2:
				return "女";
			case 3:
				return "未知";
		}
	}
})

//C -- Controller
myApp.controller('myController',function($scope){ 
	$scope.items = items;
	$scope.sortColumn = "firstName";
	$scope.reverseSort = false;

	$scope.sortData = function(column){
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	}

	$scope.getSortClass = function(column){
		if($scope.sortColumn == column){
			return $scope.reverseSort ? "arrow-down" : "arrow-up";
		}
	}
});

