/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet (string){
  let num = parseInt(string, 10)
  if (num < 12) { 
    return "Good Morning"
  }
  else if (num < 17){ 
    return "Good Afternoon"
  } else { 
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  let input = document.getElementById("greeting");
  input.innerText = string 

}