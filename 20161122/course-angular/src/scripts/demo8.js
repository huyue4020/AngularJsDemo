var myApp = angular.module('myApp', ['ngRoute']);  //路由依赖注入

//配置路由,$routeProvider 混淆压缩
// myApp.config(function($routeProvider){

// });
// 解决混淆压缩
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl: './src/scripts/tpls/home.html',
			controller: "homeController"
		})
		.when('/course',{
			templateUrl: './src/scripts/tpls/course.html',
			controller: "courseController"
		})
		.when('/employee',{
			templateUrl: './src/scripts/tpls/employees.html',
			controller: "employeeController",
			//延时加载，请求的页面数据还没回来的时候不显示数据，
			//成功请求到数据之后执行后面的函数
			resolve: { //返回的必须是延时对象
				employeelist: function($http){
					return $http.get('./mock/employees.json')
						.then(
							function(res){
								return res.data.data; //请求的数据return回去
							});
				}
			}
		})
		.when('/employee/:id',{
			templateUrl: './src/scripts/tpls/employeedetail.html',
			controller: 'employeedetailController'
		})
		.when('/employeeSearch/:keywords',{
			templateUrl: './src/scripts/tpls/employeesearch.html',
			controller: 'employeeSearchController'
		})
		// 找不到适合路径的时候运行otherwise
		.otherwise({
			redirectTo: '/course'
		})
}]);

myApp.controller('homeController',['$scope',function($scope){
	$scope.message = "Home Page";
}])

myApp.controller('courseController',['$scope',function($scope){
	$scope.courses = ['html5','java','ios','android','php'];
}])

myApp.controller('employeeController',['$scope','$http','$location','employeelist',function($scope,$http,$location,employeelist){

	var vm = $scope;

	vm.keywords = "";
	vm.search = function(){
		if (vm.keywords) {
			$location.url('/employeeSearch/' + vm.keywords);
		}
	};

	// $http({
	// 	url: './mock/employees.json',
	// 	method: 'get'
	// })
	// .then(function(res){
	// 	$scope.employees = res.data.data;
	// },function(error){
	// 	console.log(error);
	// })
	// console.log(employeelist);
	$scope.employees = employeelist;
}])

myApp.controller('employeedetailController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
	$http({
		url: './mock/employeesdetail.json', //请求后台php
		method: 'get',
		params: {
			id: $routeParams.id
		}
	})
	.then(function(res){
		console.log($routeParams); //访问后台之后返回的数据
		console.log(res.data.data[$routeParams.id-1]);
		$scope.employee = res.data.data[$routeParams.id-1];
	})
}])

myApp.controller('employeeSearchController',function($scope,$routeParams){
	$scope.keyW = $routeParams.keywords;
})