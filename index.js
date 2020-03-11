/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let str = string.split(':')
  if (str[0] < 12) {
    return "Good Morning";
  } else if (str[0]>=12 && str[0]<17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greeting = document.getElementById("greeting");
  greeting.innerText = string;
}