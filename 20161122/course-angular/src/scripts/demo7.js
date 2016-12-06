var myApp = angular.module('myApp', ['ngRoute']);  //路由依赖注入

//配置路由,$routeProvider 混淆压缩
// myApp.config(function($routeProvider){

// });
// 解决混淆压缩
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.caseInsensitiveMatch = true;  //不区分大小写
	$routeProvider
		.when('/home',{
			templateUrl: './src/scripts/tpls/home.html',
			controller: "homeController",
			controllerAs: "homeCtrl"
		})
		.when('/course',{
			templateUrl: './src/scripts/tpls/course.html',
			controller: "courseController",
			controllerAs: "courseCtrl" 
		})
		.when('/employee',{
			templateUrl: './src/scripts/tpls/employees.html',
			controller: "employeeController"
		})
		.when('/employee/:id',{
			templateUrl: './src/scripts/tpls/employeedetail.html',
			controller: 'employeedetailController'
		})
		// 找不到适合路径的时候运行otherwise
		.otherwise({
			redirectTo: '/home'
		})
}]);

myApp.controller('homeController',['$rootScope',function($rootScope){
	this.massage = "Home Page";

	$rootScope.color = "red";
	
}]);

myApp.controller('courseController',['$scope','$rootScope',function($scope,$rootScope){

	var vm = $scope;

	$rootScope.$on('$routeChangeStart',function(event,next,current){
		// console.log(next.$$route.originalPath);
		if(confirm('是否跳转到' + next.$$route.originalPath +'页面')){

		}else {
			event.preventDefault();
		}
	});

	$rootScope.$on('$routeChangeSuccess',function(event,current,previous){
		console.log(current.$$route.originalPath);  //当前要进入的路由
		// console.log(previous.$$route.originalPath); //进入目标路由之前的路由
	});

	$rootScope.$on('$routeChangeFail',function(event,current,previous){
		console.log(current.$$route.originalPath);  //当前要进入的路由
		// console.log(previous.$$route.originalPath); //进入目标路由之前的路由
	});

	$scope.courses = ['html5','java','ios','android','php'];
}])

myApp.controller('employeeController',['$scope','$http','$route',function($scope,$http,$route){
	var vm = $scope;

	vm.reload = function(){
		$route.reload();
	};

	$http({
		url: './mock/employees.json',
		method: 'get'
	})
	.then(function(res){
		$scope.employees = res.data.data;
	},function(error){
		console.log(error);
	})
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