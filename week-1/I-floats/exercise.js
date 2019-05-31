var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

var percentageOfStudents = (100 * numberOfStudents) / total;
var percentageOfMentors = (100 * numberOfMentors) / total;

console.log(
  "percentage of students: " + Math.round(percentageOfStudents) + "%"
);
console.log("percentage of mentors: " + Math.round(percentageOfMentors) + "%");
