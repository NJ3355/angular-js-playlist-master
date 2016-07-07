var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html'
		})
		.when('/directory', {
			templateUrl: 'views/directory.html',
			controller: 'NinjaController'
		}).otherwise({
			redirectTo: '/home'
		});

}]);

myNinjaApp.controller('NinjaController', function($scope){

	$scope.removeNinja = function(ninja){
		var removeNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removeNinja, 1);
	};

	$scope.addNinja = function() {
		$scope.ninjas.push({
			name: $scope.newninja.name,
			belt: $scope.newninja.belt,
			rate: parseInt($scope.newninja.rate),
			available: true
		});

		$scope.newninja.name = '';
		$scope.newninja.belt = '';
		$scope.newninja.rate = '';

	};

	$scope.ninjas = [
	{
		name: "yoshi",
		belt: "green",
		rate: 50,
		available: true,
		thumb: "../content/images/yoshi.png"
	},
	{
		name: "crystal",
		belt: "yellow",
		rate: 30,
		available: true,
		thumb: "../content/images/mario.png"
	},
	{
		name: "ryu",
		belt: "black",
		rate: 10,
		available: true,
		thumb: "../content/images/ryu.png"
	},
	
	


];


});