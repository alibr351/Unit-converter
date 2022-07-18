/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// grabing element in the html
const lengthEL = document.getElementById("length-el")
const volumeEL = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-el")
let userNumber = [0]
// create a var to store the number input by the user
 
 let convertBtn = document.getElementById("convert-btn")

// function to interact with the button when click
convertBtn.addEventListener("click", function() {
       userNumber[0] = inputEl.value
       convLength()
       covVolume()
       covMass()
})

  function convLength() {
       let meters = userNumber * 3.281
       let feet = userNumber / 3.281
       let length = `${userNumber} meters = ${meters.toFixed(3)} feet | ${userNumber} feet = ${feet.toFixed(3)} meters`
       return lengthEL.textContent = length
  }
  
  function covVolume() {
      let liters = userNumber * 0.264
      let gallons = userNumber / 0.264
      let volume = `${userNumber} liters = ${liters.toFixed(3)} gallons | ${userNumber} gallons = ${gallons.toFixed(3)} liters`
      return volumeEL.textContent = volume
  }
  
   function covMass() {
      let kilos = userNumber * 2.204
      let pounds = userNumber / 2.204
      let Mass = `${userNumber} kilos = ${kilos.toFixed(3)} pounds | ${userNumber} pounds = ${pounds.toFixed(3)} kilos`
      return massEl.textContent = Mass
  }