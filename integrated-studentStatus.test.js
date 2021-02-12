const studentStatus = require("./studentStatus");

test("grades 20 and 10 to average 15 and be out of range", () => {
  expect(studentStatus([20, 10])).toBe("Grade: 15 / Status: grade out of range");
});

test("grades -10 and -10 to average -10 and be out of range", () => {
  expect(studentStatus([-10, -10])).toBe("Grade: -10 / Status: grade out of range");
});

test("grades 10 and 10 to average 10 and be a perfect grade", () => {
  expect(studentStatus([10, 10])).toBe("Grade: 10 / Status: perfect grade");
});

test("grades 9.9 and 9.9 to average 9.9 and be approved", () => {
  expect(studentStatus([9.9, 9.9])).toBe("Grade: 9.9 / Status: approved");
});

test("grades 6 and 6 to average 6 and be approved", () => {
  expect(studentStatus([6, 6])).toBe("Grade: 6 / Status: approved");
});

test("grades 5.9 and 5.9 to average 5.9 and be final exam", () => {
  expect(studentStatus([5.9, 5.9])).toBe("Grade: 5.9 / Status: final exam");
});

test("grades 5 and 5 to average 5 and be final exam", () => {
  expect(studentStatus([5, 5])).toBe("Grade: 5 / Status: final exam");
});

test("grades 4.9 and 4.9 to average 4.9 and be repproved", () => {
  expect(studentStatus([4.9, 4.9])).toBe("Grade: 4.9 / Status: repproved");
});

test("grades 0 and 0 to average 0 and be repproved", () => {
  expect(studentStatus([0, 0])).toBe("Grade: 0 / Status: repproved");
});