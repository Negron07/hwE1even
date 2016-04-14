/*inside the bus.js file, make a bus constructor function, that has the following properties:
studentsOnTheBus (array)
driverName (string)
color (string)
gas (integer)
studentEntersBus (function that adds a student to the studentsOnTheBus property)
busChatter (function that outputs the students' catch phrases if they can have fun one by one)//inside the bus.js file, make a bus constructor function, that has the following properties:
*/
var main = require('./main');


export.bus = function(studentsOnTheBus, driverName, color, gas, studentsOnTheBus, busChatter){
	this.studentsOnTheBus = [];
	this.driverName = "";
	this.color = "";
	this.gas = 0;
	this.studentsOnTheBus = function(){
		for (var i = 0; i < main.classKidz.length; i++){
			this.studentsOnTheBus.push(main.classKidz[i].name);
		}
	};
	this.busChatter = function(){
		console.log(this.driverName + " loves driving " + this.color + " busses!?");
		for(var i = 0; i < main.classKidz[i].havingFun){
			console.log(main.classKidz[i].catchPhrase + " is saying " + main.classKidz[i].catchPhrase);
		}

	}
}
};