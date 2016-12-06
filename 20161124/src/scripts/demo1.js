var myApp = angular.module('myApp', []);  //'ngRoute'路由依赖注入

//自定义指令
myApp.directive("helloWorld",function(){
	return {
		restrict: 'EACM', //E element ，A 属性，C class, M 注释
		template: '<div>Hello World</div>',
		replace: true //不出现嵌套的情况
	}
})