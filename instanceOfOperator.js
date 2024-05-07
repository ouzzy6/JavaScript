class Square {
    constructor(side) {
      this.side = side;
    }
  
    area() {
      return this.side * this.side;
    }
  }
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class AreaCalculator {
    static calculate(shape) {
      if (shape instanceof Square) {
        return shape.area();
      } else if (shape instanceof Rectangle) {
        return shape.area();
      } else if (shape instanceof Circle) {
        return shape.area();
      } else {
        throw new Error("Not valid.");
      }
    }
  }
  
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  console.log(AreaCalculator.calculate(square));
  console.log(AreaCalculator.calculate(rectangle));
  console.log(AreaCalculator.calculate(circle));
  