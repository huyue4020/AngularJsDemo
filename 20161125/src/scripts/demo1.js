var myApp = angular.module('myApp', ['ui.router']);  //路由依赖注入

myApp.config(function($urlMatcherFactoryProvider){
	$urlMatcherFactoryProvider.caseInsensitive(true);
})

myApp.config(['$stateProvider',function($stateProvider){
	$stateProvider
		.state('home',{   //home是状态的名字，不是路由名字
			url: '/home',   //路由的名字
			templateUrl: './src/scripts/ui-router/home.html',
			controller: 'homeController',
			controllerAs: 'homeCtrl'
		})
		.state('course',{   //home是状态的名字，不是路由名字
			url: '/course',   //路由的名字
			templateUrl: './src/scripts/ui-router/course.html',
			controller: 'courseController',
			controllerAs: 'courseCtrl'
		})
		.state('employee',{   //home是状态的名字，不是路由名字
			url: '/employee',   //路由的名字
			templateUrl: './src/scripts/ui-router/employees.html',
			controller: 'employeeController',
			controllerAs: 'employeeCtrl',
			resolve: {
				employeelist: function($http){
					return $http.get('./mock/employees.json')
						.then(function(res){
							return res.data.data;
						});
				}
			}
		})
		.state('employeeDetail',{   //home是状态的名字，不是路由名字
			url: '/employee/:id&:firstName',   //路由的名字
			templateUrl: './src/scripts/ui-router/employeedetail.html',
			controller: 'employeeDetailController',
			controllerAs: 'employeeDetailCtrl'
		})
		.state('employeeSearch',{   //home是状态的名字，不是路由名字
			url: '/employeeSearch/:keywords',   //路由的名字
			templateUrl: './src/scripts/ui-router/employeesearch.html',
			controller: 'employeeSearchController',
			controllerAs: 'employeeSearchCtrl'
		})
}]);

myApp.config(function($urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
})

myApp.controller('homeController',[function(){
	this.message = "Home Page";
}])

myApp.controller('courseController',['$scope',function($scope){
	$scope.courses = ['html5','java','ios','android','php'];
}])

myApp.controller('employeeController',['$http','$state','employeelist',function($http,$state,employeelist){
	var vm = this;

	vm.keywords = "";
	vm.search = function(){
		if(vm.keywords){
			$state.go('employeeSearch',{
				keywords: vm.keywords
			})
		}
	};

	vm.reload = function(){
		$state.reload();
	};

	vm.employees = employeelist;

}])

myApp.controller('employeeDetailController',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$http({
		url: './mock/employeesdetail.json', //请求后台php
		method: 'get',
		params: {
			id: $stateParams.id
		}
	})
	.then(function(res){
		// console.log(res.data.data[$stateParams.id-1].firstName)
		// console.log($stateParams); //访问后台之后返回的数据
		// console.log(res.data.data[$stateParams.id-1]);
		$scope.employee = res.data.data[$stateParams.id-1];
	})
}]);

myApp.controller('employeeSearchController',function($scope,$stateParams){
	$scope.keyw = $stateParams.keywords;
});