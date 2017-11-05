var Calculator = require('../src/Calculator.js');

describe('Calculator', function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("adds a course data", function() {
    var firstCourseData = createCourseData(60, 4);
    var secondCourseData = createCourseData(90, 3);

    calculator.addCourse(firstCourseData);
    calculator.addCourse(secondCourseData);

    expect(calculator.getCourses()).toEqual([firstCourseData, secondCourseData]);
  });

  it("calculates the score correctly", function() {
    calculator.addCourse(createCourseData(60, 5));
    calculator.addCourse(createCourseData(60, 2));
    calculator.addCourse(createCourseData(90, 5));

    expect(calculator.calculateScore()).toEqual('4.14');
  });

  function createCourseData(workload, grade) {
    return {
      'workload': workload,
      'grade': grade
    };
  }
});
