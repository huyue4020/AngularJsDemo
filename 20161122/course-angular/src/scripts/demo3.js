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

//自定义模块(大写转换小写，小写转大写)
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

myApp.controller("myController", function($scope,upper,lower) {

	$scope.transFormUpper = function(input){
		$scope.output = upper.upperCase(input);
	}
	$scope.transFormLower = function(input){
		$scope.output = lower.lowerCase(input);
	}
	
});