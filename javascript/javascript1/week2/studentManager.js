const class07Students = [];

function addStudentToClass(studentName) {
  for (i=0; i<class07Students.length; i++) {
    if (studentName == class07Students[i]) {
      return "Student " + studentName + " is already in the class.";
    }
  }

  if (class07Students.length < 6 || studentName == "Margrethe II") {
    return "Student " + studentName + " is registered to the class with ID: " + class07Students.push(studentName);
  } else {
    return "Can not add more students to this class.";
  }
}

console.log(addStudentToClass("Gizem"));
console.log(addStudentToClass("Dara"));
console.log(addStudentToClass("Oya"));
console.log(addStudentToClass("Oya"));
console.log(addStudentToClass("Jane"));
console.log(addStudentToClass("John"));
console.log(addStudentToClass("Joe"));
console.log(addStudentToClass("Joe"));
console.log(addStudentToClass("Jack"));
console.log(addStudentToClass("Margrethe II"));
console.log(class07Students);

function getNumberOfStudents () {
  return "The number of students in Class 07 is: " + (class07Students.length);
}

console.log(getNumberOfStudents());
