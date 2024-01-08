// Fetch the button element from document using getElementById
var changeColorToRedButton = document.getElementById("changeBackgroundColorToRed");

// Add an event listener to button
changeColorToRedButton.addEventListener("click", changeColorToRed);

// Function definition, due to hoisting it doesn't matter that the function is declared here but used above in 
// addEventListener already, it won't give any issues.
function changeColorToRed() {
  document.body.style.backgroundColor = "red";
}

let someLetVariable = "let variable"
let buttonForLetVariableExample = document.getElementById("buttonForLetVariableExample");
buttonForLetVariableExample.addEventListener("click", exampleLetVariable);

function exampleLetVariable() {
    console.log("Defined a let variable someLetVariable, let's print it's value")
    console.log(someLetVariable)
    console.log("Let's change value for someLetVariable")
    someLetVariable = "let variable update value"
    console.log(someLetVariable)
}


// var

// Here we are assigning some value to someVarVariable which is actually declared at last. Due to hoisting this code
// works just fine. Even the funtion exampleVarVariable is used first and then the declaration comes later, and because
// functions are also hoisted, it works fine.
someVarVariable = "var variable";
let buttonForVarVariableExample = document.getElementById("buttonForVarVariableExample");
buttonForVarVariableExample.addEventListener("click", exampleVarVariable);

function exampleVarVariable() {
    console.log("Defined a var variable someVarVariable, let's print it's value")
    console.log(someVarVariable)
    console.log("Let's change value for someVarVariable")
    someVarVariable = "var variable updated value"
    console.log(someVarVariable)
}

var someVarVariable;

// Function with return values