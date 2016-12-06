var myApp = angular.module('myApp',[]);
//M -- Model (数据)
var items = [
				{name:'John', age:'55',grade:'11',class:'1班'},
				{name:'Mary', age:'33',grade:'66',class:'3班'},
				{name:'Mike', age:'11',grade:'55',class:'5班'},
				{name:'Adam', age:'99',grade:'44',class:'6班'},
				{name:'Julie', age:'66',grade:'33',class:'4班'},
				{name:'Juliette', age:'44',grade:'22',class:'2班'}
			];


//C -- Controller
myApp.controller('myController',function($scope){ 
	$scope.items = items;
	// $scope.revers
	$scope.reverse = false; //从小到大
	$scope.title = "从小到大";
	$scope.order = function(i){
		$scope.orderProp = i;
		if($scope.reverse==true){
			$scope.reverse=false;
			$scope.title = "从小到大";
		}else {
			$scope.reverse=true;
			$scope.title = "从大到小";
		}
	};
});