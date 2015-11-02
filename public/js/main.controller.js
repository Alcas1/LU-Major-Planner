

var app = angular.module('LUMajorPlanner', []);
app.controller('MainController', function ($scope) {
	$scope.state="schools";
	$scope.Schools1=[{fullname:'Engineering',img:'/assets/Engineering.jpg',name:'engineering'},
	{fullname:'Arts and Sciences',img:"/assets/ArtsandScience.jpg"},
	{fullname:"Business and Economics",img:"/assets/Business.jpg"}];
	$scope.Schools2=[{fullname:"Education",img:"/assets/Education.jpg"}];
	$scope.Engineering=[{name:"Computer Science and Engineering"}];

	function course(name,prereq,coreq,major){
			this.name = name;
			this.prereq = prereq;
			this.coreq = coreq;
			this.major = major;
		}
	var courseHash={};
	var courses=[
			new course('CSE 001',[],[],['CSE']),
    	    new course('CSE 002',[],[],['CSE,ISE']),
    	    new course('CSE 017',['CSE 001','CSE 002'],[],['CSE,ISE']),
			new course('CSE 109',['CSE 017'],[],['CSE']),
			new course('CSE 130',['CSE 017'],[],['CSE']),
			new course('CSE 202',['CSE 017'],[],['CSE']),
			new course('CSE 216',['CSE 109'],[],['CSE']),
			new course('CSE 261',['MATH 021'],[],['CSE']),
			new course('CSE 262',['CSE 017'],[],['CSE']),
			
			new course('CSE 216',['CSE 109'],[],['CSE']),
			new course('CSE 261',['MATH 021'],[],['CSE']),
			new course('CSE 262',['CSE 017'],[],['CSE']),
			
			];


});