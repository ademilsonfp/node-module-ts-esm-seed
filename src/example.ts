
export class Example {
  #factor = 0;

  constructor(factor: number) {
    this.#factor = factor;
  }

  multiply(value: number) {
    return (value ?? 0) * this.#factor;
  }
}
