 /*# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## Task

```
Create  password generator
```

## Requirements

```
Ask the user a series of questions
a) length of password (numeric input)
b) validate length is between 8 and 128.
c) type of characters to include - special characters, uppercase, lowercase, numeric(series of yes/no confirms)
d) Validate the user selected at least one character type.

Any invalid response will terminate password generation and the user must start over.

Once the user has entered valid responses, generate a password that meets their criteria and display it in the box.*/


// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLength = prompt("Please enter in a whole number between 8 and 128 to determine password length.")
var specialCharsQ = prompt("Would you like to include special characters? Type 'y' for yes and 'n' for no")
var upperCaseQ = prompt("Would you like your password to include Upper Case characters? Type 'y' for yes and 'n' for no")
var lowerCaseQ = prompt("Would you like to include Lower Case characters? Type 'y' for yes and 'n' for no")
var numericQ = prompt("Would you like to include numeric characters? Type 'y' for yes and 'n' for no")
var userPwd = { specCharInclude: '', upperCaseInclude: '', lowerCaseInclude: '', numericInclude: '' }
var categoryMaxRpts = pwdLength / 2
var randPwdCharLib = []


// vars for obj properties in case the obj code doesn't work
/*var specCharInclude 
var upperCaseInclude 
var lowerCaseInclude 
var numericInclude*/

// Build library of chars with arrays
var specCharLib = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var lowerCaseLLib = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseLib =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberLib = [0,1,2,3,4,5,6,7,8,9]


// rand # function for max amount of times a 
var RandNumCatMax = Math.floor(Math.Random()* categoryMaxRpts)



//Valid password length check:
pwdLengthCheck:
if (pwdLength <= 7 || pwdLength >= 128){

    alert("Please only enter a whole number between 8 and 128.");
    break pwdLengthCheck;

}

else if (pwdLength >=8 || pwdLength <=128) {
 
  // Length meets min reqs, begin question checks
  questionChecks:
    if (specCharInclude.toLowerCase() === 'y') {

      for (i = categoryMaxRpt; i < specCharLib.length; i++ )  {

           x = specCharLib[Math.floor(Math.Random()* specCharLib.length - 1)]
           randPwdCharLib.push(x)
      }

    

}

else if ()

 

// Begin password gen function definition
function generatePassword(){


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
