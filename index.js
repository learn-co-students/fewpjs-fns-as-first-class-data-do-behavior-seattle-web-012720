/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  if (parseInt(string, 10) < 12) {
    return "Good Morning";
  } else if (parseInt(string, 10) > 12 &&  parseInt(string, 10) < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerText = string
}  
