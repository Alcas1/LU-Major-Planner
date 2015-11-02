

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
			new course('CSE 303',['CSE 109','CSE 202'],[],['CSE']),
			new course('CSE 318',['CSE 261'],[],['CSE']),
			new course('CSE 340',['CSE 261','MATH 022'],[],['CSE']),
			new course('CSE 379',[],['CSE 130'],['CSE']),
			
			new course('CHEM 030',[],[],['Everything']),
			new course('ENGR 005',[],[],['Everything']),
			new course('ENGR 010',[],[],['Everything']),
			
			new course('MATH 021',[],[],['Everything']),
			new course('MATH 022',['MATH 022'],[],['Everything']),
			new course('MATH 023',['MATH 023'],[],['Everything']),
			
			new course('MATH 205',['MATH 022'],[],['Everything']),
			new course('MATH 231',['MATH 022'],[],['Everything']),
			
			new course('PHY 011',[],['MATH 021'],['Everything']),
			new course('PHY 012',[],['PHY 011'],['Everything']),
			
			new course('PHY 021',['PHY 011'],['MATH 023'],['Everything']),
			new course('PHY 022',[],['PHY 021'],['Everything']),
			
			new course('ENGL 001',[],[],['Everything']),
			new course('ENGL 002',['ENGL 001'],[],['Everything']),
			
			new course('ECO 001',[],[],['Everything']),
			new course('CSE 252',[],[],['Everything']),
			
			new course('ME 010',[],[],['ME']),
			new course('MECH 003',['PHY 011'],['MATH 022'],['ME']),
			new course('ME 017',['ENGR 010'],[],['ME']),
			new course('MAT 033',[],[],['ME']),
			new course('ME 104',[],['PHY 011','MATH 023'],['ME']),
			new course('MECH 012',['MECH 003'],['MATH 023'],['ME']),
			new course('ME 021',[],[],['ME']),
			new course('ME 231',[],['MATH 205'],['ME']),
			new course('MECH 102',['MECH 002'],['MATH 023'],['ME']),
			
			new course('ME 121',['MECH 021','MECH 104'],['MECH 231'],['ME']),
			new course('ME 240',['ME 010','MECH 012'],[],['ME']),
			new course('TE 211',[],[],['ME']),
			
			new course('ME 252',['MECH 012','ME 010','MECH 102'],[],['ME']),
			new course('ECE 083',['MATH 022'],['PHYS 021'],['ME']),
			new course('ECE 162',[],['ECE 081','ECE 083'],['ME']),
			
			
			new course('ME 111',[],[],['ME']),
			new course('TE 212',['TE 211'],[],['ME']),
			new course('ME 242',['MECH 102','MATH205'],['ME17'],['ME']),
			
			
			];


});