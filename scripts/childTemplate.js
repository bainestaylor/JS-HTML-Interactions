console.log("You made it to childTemplate.js");

function main() {
  let firstNumber, secondNumber, text;


  firstNumber = document.getElementById("textfield1").value;

  document.getElementById("validityTest1").innerHTML = alert ( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  secondNumber = document.getElementById("textfield2").value;

  document.getElementById("validityTest1").innerHTML = alert ( testNaN (secondNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById("large").innerHTML = "Restart because I said so."
  }
  else {
    console.log("What did you say "+ geometry (firstNumber, secondNumber));
    document.getElementById("large").innerHTML = "This display geometry is"
  }
}
