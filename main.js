const car = document.createElement('img')
car.setAttribute('src', 'car.png')
car.setAttribute('id', 'car')

const road = document.createElement('div')
road.setAttribute('id', 'road')

document.body.appendChild(road)
road.appendChild(car)

document.addEventListener('keydown', onKeyDown, false)

let intervalId = null

class Car {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
    const [x, y] = location
    car.style.left = x + 'px;'
    car.style.top = y + 'px;'
  }
  static start(car) {
    intervalId = setInterval(function () {
      car.move()
    }, 16)
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

function onKeyDown(event) {
  var keyCode = event.keyCode
  switch(keyCode){
    case 68:
      keyD = true
      console.log('D')
      break
    case 83:
      keyS = true
      console.log('S')
      break
    case 65:
      keyA = true
      console.log('A')
      break
    case 87:
      keyW = true
      console.log('W')
      break
    case 32:
      space = true
      startCar()
  }
}

const porsche = new Car('South', 5, [0, 0])

function startCar() {
  if (intervalId === null) {
    Car.start(porsche)
    console.log('Car started!')
  }
  else {
    console.log('Car already started.')
  }
}

window.onload = function () {
  alert('Start your car using the "space bar"!')
}
