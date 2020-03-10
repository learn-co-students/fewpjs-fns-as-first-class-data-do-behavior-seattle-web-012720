/* Given Code, don't edit */
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString){
  const hours = Number.parseInt(timeString.split(':')[0]);
  if (hours < 12) {
    return "Good Morning"
  }
  else if (hours < 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

function displayMessage(greetText){
  document.getElementById("greeting").innerText = greetText;
}