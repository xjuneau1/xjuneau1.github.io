const INITIAL_VELOCITY = .025

export default class Logo {
  constructor(logoElem) {
    this.logoElem = logoElem;
    this.reset();
  }

  get x() {
    return parseFloat(getComputedStyle(this.logoElem).getPropertyValue("--x"));
  }

  set x(value) {
    this.logoElem.style.setProperty("--x", value);
  }

  get y() {
    return parseFloat(getComputedStyle(this.logoElem).getPropertyValue("--y"));
  }

  set y(value) {
    this.logoElem.style.setProperty("--y", value);
  }

  rect() {
    return this.logoElem.getBoundingClientRect()
  }

  reset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0 };
    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }
    console.log(this.direction)
    this.velocity = INITIAL_VELOCITY
  }

  update(delta) {
    this.x+= this.direction.x * this.velocity * delta;
    this.y+= this.direction.y * this.velocity * delta;
    const rect = this.rect()

    if (rect.bottom >= window.innerHeight || rect.top <= 0){
      this.direction.y *= -1
    }
    if (rect.right >= window.innerWidth || rect.left <= 0){
      this.direction.x *= -1
    }
  }
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}
