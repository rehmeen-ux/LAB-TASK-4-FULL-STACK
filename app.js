
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    getGrade() {
        if (this.marks >= 80) {
            return "A";
        }
        else if (this.marks >= 70) {
            return "B";
        }
        else if (this.marks >= 50) {
            return "C";
        }
        else {
            return "F";
        }
    }
}
const students = [

    new Student("Rehmeen", 65),

    new Student("Ahmed", 72),

    new Student("Rabail", 41),

    new Student("Adeena", 58),

    new Student("Umer", 65),

    new Student("Sidra", 89)

];
const passingStudents = students.filter(function(student) {
    return student.marks >= 50;
});
const passingNames = passingStudents.map(function(student) {
    return student.name;
});
const totalMarks = students.reduce(function(total, student) {
    return total + student.marks;
}, 0);
const classAverage = totalMarks / students.length;
const sortedStudents = [...students].sort(function(a, b) {
    return b.marks - a.marks;
});
const [topStudent] = sortedStudents;
const topScorer = topStudent.name;
console.log("===");
console.log("     STUDENT GRADE ANALYZER");
console.log("===");
console.log("");
students.forEach(function(student) {
    const status = student.marks >= 50 ? "Pass" : "Fail";
    console.log(
        "Name: " + student.name +
        " | Marks: " + student.marks +
        " | Grade: " + student.getGrade() +
        " | Status: " + status
    );
});
console.log("");
console.log("---");
console.log("Passing Names:", passingNames);
console.log(
    "Class Average:",
    classAverage.toFixed(2)
);
console.log("Top Scorer:", topScorer);
console.log("---");