/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const timeArray = time.split(":");
  if (parseInt(timeArray[0]) < 12) {
    return "Good Morning";
  } else if (parseInt(timeArray[0]) >= 12 && timeArray[0] <= 17) {
    return "Good Afternoon";
  } else  { //parseInt(timeArray[0] > 17)
    return "Good Evening";
  }
}

function displayMessage(message) {
  document.querySelector("h1").innerText = message
}