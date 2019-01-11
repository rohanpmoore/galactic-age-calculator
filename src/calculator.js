export class Calculator {
  constructor(params) {
    this.age = params.age;
  }

  mercuryYears() {
    return parseInt(this.age/.24);
  }

  venusYears() {
    return parseInt(this.age/.62);
  }
}
