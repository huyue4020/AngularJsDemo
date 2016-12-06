var myApp = angular.module('myApp', []);  //'ngRoute'路由依赖注入

myApp.controller('parentController',function($scope){
	$scope.message = "parent message1";
	$scope.message2 = "parent message2";
	$scope.changeVale = function(){
		$scope.message = 'change parent message1';
	}
});

// myApp.controller('parent2Controller',function($scope){
// 	$scope.message = "I have a apple";
// })
//自定义指令
myApp.directive("helloWorld",function(){
	return {
		restrict: 'EACM', //E element ，A 属性，C class, M 注释
		templateUrl: './src/scripts/tpls/directiveTpl.html',
		replace: true, //不出现嵌套的情况
		scope: {
			message: '@message'//专门给massage1一个继承通道，断开massage2的继承
			// message2: "@message"
		},  //是否继承上一个控制器，{}表示不继承，true表示继承
		controller: function($scope){
			// $scope.message = 'child message1,内部自己的控制器';
			// $scope.message2 = "child message2";
			$scope.changeChild = function(){
				$scope.message2 = "change child message2"
			}
		}
	}
});

