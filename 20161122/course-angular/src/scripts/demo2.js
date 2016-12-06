var myApp = angular.module('myModule', []);

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

myApp.controller("myController", function($scope, $http) {

	$http.get('http://localhost/mock/employees.json')
		.then(function(res){
			console.log(res.data.data);
			$scope.employees = res.data.data;
		},function(error){
			console.log(error)
		})

});