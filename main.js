var prompt = require('prompt');

var fs = require('fs');
var student = require('./student.js');
var classKidz = [];

fs.readFile("roster.txt", "utf-8", function(err, data){
	if(data){
		classKidz = JSON.parse(data);
	}
	else{
		classKidz = [];
	}
	exports.classKidz = classKidz;

	student.getStudents();
	}
});