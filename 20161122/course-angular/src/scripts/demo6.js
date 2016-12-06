var myApp = angular.module('myModule', []);

myApp.controller('contryController',function(){
	this.name = "中国";
})

myApp.controller('stateController',function(){
	this.name = "四川";
})

myApp.controller('cityController',function(){
	this.name = "成都";
})