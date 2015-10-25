
var app = angular.module('LUMajorPlanner', []);
app.controller('MainController', function ($scope) {
	$scope.state="schools";
	$scope.Schools1=[{fullname:'Engineering',img:'/assets/Engineering.jpg',name:'engineering'},
	{fullname:'Arts and Sciences',img:"/assets/ArtsandScience.jpg"},
	{fullname:"Business and Economics",img:"/assets/Business.jpg"}];
	$scope.Schools2=[{fullname:"Education",img:"/assets/Education.jpg"}];
	$scope.Engineering=[{name:"Computer Science and Engineering"},
	{name:"Computer Science and Engineering"},
	{name:"Computer Science and Engineering"},
	{name:"Computer Science and Engineering"},
	{name:"Computer Science and Engineering"}];
	


});