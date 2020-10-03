console.log("script loaded")
alert("Please follow the instructions to determine characters and length for password, then press 'Generate'")

// Assignment Code, prompt and confirms
var generateBtn = document.querySelector("#generate");
var specialCharsQ = confirm("Would you like to include special characters? Press 'okay' for yes and 'cancel' for no.")
var upperCaseQ = confirm("Would you like your password to include Upper Case characters? Press 'okay' for yes and 'cancel' for no.")
var lowerCaseQ = confirm("Would you like to include Lower Case characters? Press 'okay' for yes and 'cancel' for no.")
var numericQ = confirm("Would you like to include numeric characters? Press 'okay' for yes and 'cancel' for no.")
var pwdLength = parseInt(prompt("Please enter in a whole number between 8 and 128 to determine password length."),10)
var potentialPwdCharLib = []
var finalPwd = []
var count = 4
var written = false



// Library of chars 
var specCharLib = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var lowerCaseLib = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLib = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberLib = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// BEGIN FUNCTION DEFINITIONS

// Returns the value at a random index for an array  
function randomIndexFucnt(arr) {
  return  arr[Math.floor(Math.random() * Math.floor(arr.length-1))];
    }




// This will be used to build final pass word
function finalPasswordGen() {
 finalPwd += randomIndexFucnt(potentialPwdCharLib);
 return finalPwd
}

// Write password to the #password input
function writePassword() {
  while (written=== false){
  var password = finalPasswordGen();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  written = true
  }
}

function addSpecChars() {
  potentialPwdCharLib = potentialPwdCharLib.concat(specCharLib);
  return potentialPwdCharLib
}

function addUpperCase() {
   potentialPwdCharLib = upperCaseLib.concat(potentialPwdCharLib);
}

function addLowerCase() {
   potentialPwdCharLib = lowerCaseLib.concat(potentialPwdCharLib);
}

function addNumLib() {
   potentialPwdCharLib = numberLib.concat(potentialPwdCharLib);
}

//potentialPwdCharLib = potentialPwdCharLib.concat(specCharLib);
//console.log("this is addSpecChars"+addSpecChars())
//console.log("this is final pwd generator funct"+finalPasswordGen())





/////////////////////////////////////////////////////////////////////
////                     BEGIN CHECKS                           ////
///////////////////////////////////////////////////////////////////




if (parseInt(pwdLength, 10) < 8 || parseInt(pwdLength, 10) > 128) {

   alert("Please only enter a whole number between 8 and 128.");
  location.reload();

}


else if (pwdLength >= 8 || pwdLength <= 128) {

  
  if (specialCharsQ) {
    //concat array
    addSpecChars();
  }

  else {
    count--
  }

  if (upperCaseQ) {
    //concat array
    addUpperCase();
  }

  else {
    count--
  }

  if (lowerCaseQ) {

    //concat array
    addLowerCase();
  }

  else {
    count--
  }


  if (numericQ) {
    //concat array
    addNumLib();
  }

  else {
    count--
  }


  if (count > 0) {
    for (i=0; i<pwdLength-1; i++){
      finalPasswordGen();
      console.log("this is"+finalPwd)
  }
}

  else {
    alert("Please choose at least one category to build a password from");
    location.reload();
  }


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
