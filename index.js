/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  const hours = time.split(":")
if (parseInt(hours[0]) < 12)
   {

      return 'Good Morning'
}
else if (parseInt(hours[0]) >= 12 && parseInt(hours[0]) <= 16)
  {
    

      return 'Good Afternoon'
  }
else if (parseInt(hours[0]) >= 17)
  {
    
      return 'Good Evening'
}


}
function displayMessage(string) {
  const node = document.getElementById('greeting')
  node.innerText = string
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
