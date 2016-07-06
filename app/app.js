var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', function($scope){



	$scope.ninjas = [
	{
		name: "yoshi",
		belt: "green",
		rate: 50
	},
	{
		name: "crystal",
		belt: "yellow",
		rate: 30
	},
	{
		name: "ryu",
		belt: "black",
		rate: 10
	},
	
	


];


});