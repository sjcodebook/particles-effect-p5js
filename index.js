let p

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)

  p = new Particle()
}

function draw() {
  background(55, 100, 144)
  p.update()
  p.draw()
}

class Particle {
  constructor() {
    // position
    this.pos = new createVector(random(width), random(height))

    // velocity
    this.vel = new createVector(random(-2, 2), random(-2, 2))

    //size
    this.size = 10
  }

  update() {
    this.pos.add(this.vel)
  }

  draw() {
    noStroke()
    fill('rgba(255,255,255,0.5)')
    circle(this.pos.x, this.pos.y, this.size)
  }
}
