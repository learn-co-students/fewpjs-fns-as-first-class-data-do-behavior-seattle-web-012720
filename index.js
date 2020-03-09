/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hour = parseInt(time.split(":")[0]);
  debugger;
  if (hour < 12) {
    return "Good Morning"
  };
  if (hour > 17) {
    return "Good Evening"
  };
    return "Good Afternoon"
};

/* Write your implementation of displayMessage() */
function displayMessage(string){
  let message = document.getElementById("greeting");
  message.innerText = string;
};