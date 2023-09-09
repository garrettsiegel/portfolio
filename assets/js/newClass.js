class Car {
    constructor(wheels, model) {
      this.wheels = wheels
      this.model = model
    }
    carArrived() {
      console.log(`A ${this.model} has arrived with ${this.wheels} wheels!`)
    }
    
}

export default Car;
// new New()

// new Car(nitto)

const newcar1 = new Car('Nitto', 'Lexus')
console.log(newcar1)
newcar1.carArrived()


// event listener for checkbox


// const checkbox = document.querySelector('.checkbox')
// const checkboxLabel = document.querySelector('.checkbox__label')
// const checkboxInput = document.querySelector('.checkbox__input')

checkboxLabel.addEventListener('click', () => {
  checkboxInput.checked = !checkboxInput.checked
  console.log(checkboxInput.checked)

  if (checkboxInput.checked) {
    // add class to body
    document.body.classList.add('dark')
}