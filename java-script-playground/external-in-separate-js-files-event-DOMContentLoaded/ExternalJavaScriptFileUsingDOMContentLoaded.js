document.addEventListener("DOMContentLoaded", function() {
  // Fetch the button element from document using getElementById
  var changeBackgroundColorButton = document.getElementById("changeBackgroundColor");

  // Add an event listener to button
  changeBackgroundColorButton.addEventListener("click", changeColor);
});


// Function definition, due to hoisting it doesn't matter that the function is declared here but used above in 
// addEventListener already, it won't give any issues.
function changeColor() {
  document.body.style.backgroundColor = "#A12B44";
}
