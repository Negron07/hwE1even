var prompt = require('prompt');
var fs = require('fs');
var main = require('./main.js');
var bus = require('./bus.js')

exports.getStudents = function() {

  if (main.classRoster.length < 20) {

    console.log("Bus is not full!");

    var studentInfo = {
      properties: {
        name: {
          validator: /^[a-zA-Z\s\-]+$/,
          warning: 'Name must be only letters, spaces, or dashes',
          required: true
        },
        gpa: {
          validator: /^[0-9]\d*$/,
          warning: 'GPA must be number',
          required: true
        },
        detentions: {
          validator: /^[0-9]\d*$/,
          warning: 'Number of detentions must be number',
          required: true
        },
        catchPhrase: {
          type: 'string',
          required: false
        }
      }
    };

    prompt.get(studentInfo, function (err, result) {

var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
this.name = name;
this.gender = gender;
this.grade = grade;
this.gpa = gpa;
this.detentions = detentions;
this.sleepingInClass = sleepingInClass; 
this.catchPhrase = catchPhrase;
this.canStudentHaveFun = function(){
	if((this.detentions < 10) && (this.gpa > 2)){
		console.log("The " + name + " can have fun and play!")
	}
}
};


prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
	var student = new Student(result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)
student.canStudentHaveFun();
});

 var tempStudent = new Student();
        tempStudent.name = result.name;
        tempStudent.gpa = result.gpa;
        tempStudent.detentions = result.detentions;
        tempStudent.catchPhrase = result.catchPhrase;
        main.classRoster.push(tempStudent);
     

      fs.writeFile("roster.txt", JSON.stringify(main.classRoster), function(err){
        if (err) {
          console.log(err);
        } else {
          console.log(result.name + " added to class.");
          prompt.start();
        }
      });

    });
  } else {
    console.log("All of the students are on the bus.");

    var myBus = new bus.Bus();
    myBus.driverName = "RuPaul Andre Charles";
    myBus.color = "orange";
    myBus.busChatter();

  }
}

Student.prototype.foo = function foo(){

};
module.exports = Student;
 


