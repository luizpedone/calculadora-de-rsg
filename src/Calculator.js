function Calculator() {
  var courses = [];

  this.addCourse = function(course) {
    courses.push(course);
  }

  this.getCourses = function() {
    return courses;
  }

  this.calculateScore = function() {
    var totalWorkload = 0;
    var totalGrade = 0;

    for (course of courses) {
        totalWorkload = course.workload + totalWorkload;
        totalGrade = course.grade * course.workload + totalGrade;
    }

    return (totalGrade / totalWorkload).toFixed(2);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Calculator;
}
