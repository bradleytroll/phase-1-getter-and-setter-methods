class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter methods
  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  // Setter methods
  set diameter(newDiameter) {
    if (newDiameter >= 0) {
      this.radius = newDiameter / 2;
    } else {
      throw new Error("Diameter cannot be negative.");
    }
  }

  set circumference(newCircumference) {
    if (newCircumference >= 0) {
      this.radius = newCircumference / (2 * Math.PI);
    } else {
      throw new Error("Circumference cannot be negative.");
    }
  }

  set area(newArea) {
    if (newArea >= 0) {
      this.radius = Math.sqrt(newArea / Math.PI);
    } else {
      throw new Error("Area cannot be negative.");
    }
  }
}