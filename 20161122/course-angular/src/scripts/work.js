var myApp = angular.module('myApp',['ngRoute']);

// 路由配置
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl: './src/scripts/tpls/home.html',
			controller: 'homeController'
		})
		.when('/page1',{
			templateUrl: './src/scripts/tpls/page1.html',
			controller: "page1Controller"
		})
		.when('/page2',{
			templateUrl:'./src/scripts/tpls/page2.html',
			controller: 'page2Controller'
		})
}]);
//自定义功能模块
myApp.factory('upper',function(){
	return {
		upperCase:function(input){
			if(!input){
				return input;
			}
			var output = "";
			for(var i=0;i<input.length;i++){
				output = output + input[i].toUpperCase();
			}
			return output;
		}
	}
})
myApp.factory('lower',function(){
	return {
		lowerCase:function(input){
			if(!input){
				return input;
			}
			var output = "";
			for(var i=0;i<input.length;i++){
				output = output + input[i].toLowerCase();
			}
			return output;
		}
	}
})

//控制区域
myApp.controller('homeController',['$scope','$http',function($scope,$http){
	$http({
		url: './mock/home.json',
		method: 'get'
	})
	.then(function(res){
		console.log(res);
		$scope.massages = res.data.massage;

	},function(error){
		console.log(error)
	})
}])
myApp.controller('page1Controller',['$scope','upper','lower',function($scope,upper,lower){
	$scope.transformUpper = function(input){
		$scope.output = upper.upperCase(input);
	}
	$scope.transformLower = function(input){
		$scope.output = lower.lowerCase(input);
	}
}])
myApp.controller('page2Controller',['$scope','$http',function($scope,$http){
	$http({
		url: './mock/page2.json',
		method: 'get'
		// params: {
		// 	id: $routeParams.id
		// }
	})
	.then(function(res){
		$scope.items = res.data.data[0];
		console.log(res.data.data[0]);
	},function(error){
		console.log(error);
	})
}])
