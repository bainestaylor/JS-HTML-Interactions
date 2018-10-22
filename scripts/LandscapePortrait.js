//console.log("I made it to Landscape and Portrait!"); //Debugging line to console ensuring JavaScript Link

let stop = false;

function testNaN (number) {
  console.log(stop);
  if ( isNaN (number) ) { //NaN are NOT values of REAL Number System
    stop = true;
    return "Type a Real Number"
  } else {
    return "Input Validated"
  }
}

function geometry (width, height) { //Notice these parameters are local and do not mix with "number" variable
  if (width == height) return 'Square'; //must be first, return will not allow rest of code to run
  return (width > height) ? 'Landscape' : 'Portrait'; //ternary operator example
  //Seems odd, the inequality, here, is reading the opposite
}

// This coding illustrates the advanced method
function main () {

  let firstNumber, secondNumber, text;

  // Get the value of the Width Input Field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;

  //Validate if User Typed a Number, odd validation by TRUE Conditional
  //Return the String Value for feedback of User
  document.getElementById("validityTest1").innerHTML = alert( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  // Get the value of the Height Input Field, id="textfield2"
  secondNumber = document.getElementById("textfield2").value;

  //Validate if User Typed a Number, odd validation by TRUE Conditional
  //Return the String Value for feedback of User
  document.getElementById("validityTest2").innerHTML = alert( testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById("answer").innerHTML = "Restart the example, an width or height needs to be a number."
  }
  else {
    console.log("This display geometry is", geometry (firstNumber, secondNumber)); //Difference between calling functions with arguements and sending to parameter's, local variables
    document.getElementById("answer").innerHTML = "This display geometry is " + geometry (firstNumber, secondNumber);
  }
}
