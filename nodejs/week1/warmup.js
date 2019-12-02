
const pi = 3.14; 

class Circle {
  constructor(radius) {
    this.radius = radius;
  };
  getDiameter() {
    return this.radius * 2;
  };
  getCircumference() {
    return 2 * pi * this.radius;
  };
  getArea() {
    return pi * this.radius * this.radius;
  };
}

const circle1 = new Circle(10);
const circle2 = new Circle(15);
const circle3 = new Circle(25);

console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());

console.log(circle2.getDiameter());
console.log(circle2.getCircumference());
console.log(circle2.getArea());

console.log(circle3.getDiameter());
console.log(circle3.getCircumference());
console.log(circle3.getArea());