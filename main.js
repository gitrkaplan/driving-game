class Car {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
  }
  static start(car) {
    setInterval(function () {
      car.move()
      console.log(car.location)
    }, 16)
  }
  static clone(car) {
    return new this(car.direction, car.speed, car.location.slice())
  }
  turn(direction) {
    this.direction = direction
  }
  accelerate(amount) {
    this.speed = amount
  }
  move() {
    switch (this.direction) {
      case 'North':
        this.location[1] += this.speed
        break
      case 'South':
        this.location[1] -= this.speed
        break
      case 'East':
        this.location[0] += this.speed
        break
      case 'West':
        this.location[0] -= this.speed
    }
  }
}

const car = document.createElement('img')
car.setAttribute('src', 'car.png')
car.setAttribute('id', 'car')

document.body.appendChild(car)

document.addEventListener('keydown', onKeyDown, false)

function onKeyDown(event) {
  var keyCode = event.keyCode
  switch(keyCode){
    case 68:
      keyD = true
      break
    case 83:
      keyS = true
      break
    case 63:
      keyA = true
      break
    case 87:
      keyW = true
      break
  }
  console.log(keyCode)
}
