/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInputDiv = document.getElementById("billTotalInput")
const tipInputDiv = document.getElementById("tipInput") 
const noOfPeopleDiv = document.getElementById("numberOfPeople") 
const perPersonTotalDiv = document.getElementById("perPersonTotal") 

// Get number of people from number of people div
let numberOfPeople = Number(noOfPeopleDiv.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let bill = Number(billInputDiv.value)
    // console.log(bill)
    
    // get the tip from user & convert it into a percentage (divide by 100)
    let tipPercentage = (Number(tipInputDiv.value)) / 100    
    // console.log(tipPercentage)
  
    // get the total tip amount
    const tipAmount = bill * tipPercentage
    // console.log({tipAmount : tipAmount})
  
    // calculate the total (tip amount + bill)
    const total = tipAmount + bill
    // console.log({total})    
  
    // calculate the per person total (total divided by number of people)
    const perPersonTotal = total / numberOfPeople
    //   console.log({perPersonTotal})
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople += 1
  
    // update the DOM with the new number of people
    noOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill()
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(numberOfPeople <= 1){
        alert('Hey! you connot have less than 1 person.')
        return
    }
    
    // decrement the amount of people
    numberOfPeople -= 1
  
    // update the DOM with the new number of people
    noOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill()
  
  }