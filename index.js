/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let numarray = string.split(':')
  let hour = numarray[0]
  console.log(hour)
  let integerHour = parseInt(hour,10)
  if (integerHour >12) {
    if (integerHour < 17) {
      return "Good Afternoon"
    }
    if (integerHour >= 5) {
      return "Good Evening"
    }
  }
  return "Good Morning"
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
