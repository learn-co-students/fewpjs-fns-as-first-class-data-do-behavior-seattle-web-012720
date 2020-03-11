/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

// function greet(timein){
//   const time = timein.split(':')
//   const hr =time.parseInt
//     if (hr > 12) { return "Good Morning"};
//     else if (hr < 17) {return "Good Evening"};
//     else {return "Good Afternoon"}
// }
// let result = greet(timeString);
// console.log(result);


function greet(time){
  let timeNumber = time.split(":");
  let hour = parseInt(timeNumber[0])

  if (hour>=0 && hour<12) {
    let greeting = "Good Morning";
    return greeting;
  }
  else if (hour>=12 && hour <17) {
    let greeting = "Good Afternoon";
    return greeting;
  } else {
    let greeting = "Good Evening";
  return greeting;
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let greet = document.getElementById('greeting');
  greet.innerText = str;
}