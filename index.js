const particles = []

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)

  const noOfParticles = Math.floor(window.innerWidth / 10)

  for (let i = 0; i < noOfParticles; i++) {
    particles.push(new Particle())
  }
}

function draw() {
  background(55, 100, 144)
  particles.forEach((p, i) => {
    p.update()
    p.draw()
    p.checkParticles(particles.slice(i))
  })
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
    this.edges()
  }

  draw() {
    noStroke()
    fill('rgba(255,255,255,0.5)')
    circle(this.pos.x, this.pos.y, this.size)
  }

  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1
    }
  }

  checkParticles(particles) {
    particles.forEach((p) => {
      const d = dist(this.pos.x, this.pos.y, p.pos.x, p.pos.y)

      if (d < 120) {
        stroke('rgba(255,255,255,0.1)')
        line(this.pos.x, this.pos.y, p.pos.x, p.pos.y)
      }
    })
  }
}
