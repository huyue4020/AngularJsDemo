var myApp = angular.module('myApp', []);  //'ngRoute'路由依赖注入

myApp.controller('parentCtrl',function($scope){
	$scope.$on('mes1-ctrl',function(){
		console.log("parent-ctrl has been emited");  //<---$broadcast
	});
	$scope.$on('broad-ctrl',function(){
		console.log("parent-ctrl-broad has been emited");
	})
});
myApp.controller('child1Ctrl',function($scope){
	$scope.action = function(){
		$scope.$emit('mes1-ctrl'); //$emit可以触发$on,隔着控制台也可以触发，负责往上传(父元素)

		$scope.$broadcast('broad-ctrl');//负责往下传(子元素)
	}
});
myApp.controller('child2Ctrl',function($scope){
	$scope.$on('mes1-ctrl',function(){
		console.log("child2-ctrl has been emited");
	});
	$scope.$on('broad-ctrl',function(){
		console.log("child2-ctrl-broad has been emited");
	})
});
myApp.controller('grandson',function($scope){
	$scope.$on('mes1-ctrl',function(){
		console.log("grandson-ctrl has been emited");
	});
	$scope.$on('broad-ctrl',function(){
		console.log("grandson-ctrl-broad has been emited"); //<---$emit
	})
});
myApp.controller('grandson2',function($scope){
	$scope.$on('mes1-ctrl',function(){
		console.log("grandson2-ctrl has been emited");
	});
	$scope.$on('broad-ctrl',function(){
		console.log("grandson2-ctrl-broad has been emited"); //<---$emit
	})
});
myApp.controller('grandson3',function($scope){
	$scope.$on('mes1-ctrl',function(){
		console.log("grandson3-ctrl has been emited");
	});
	$scope.$on('broad-ctrl',function(){
		console.log("grandson3-ctrl-broad has been emited"); //<---$emit
	})
});
myApp.controller('grandson4',function($scope){
	$scope.$on('mes1-ctrl',function(){
		console.log("grandson4-ctrl has been emited");
	});
	$scope.$on('broad-ctrl',function(){
		console.log("grandson4-ctrl-broad has been emited"); //<---$emit
	})
});
myApp.controller('grandson5',function($scope){
	$scope.$on('mes1-ctrl',function(){
		console.log("grandson5-ctrl has been emited");
	});
	$scope.$on('broad-ctrl',function(){
		console.log("grandson5-ctrl-broad has been emited"); //<---$emit
	})
});

