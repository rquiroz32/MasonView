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
/*var specCharInclude 
var upperCaseInclude 
var lowerCaseInclude 
var numericInclude*/

var UserPwd = { specCharInclude: '', upperCaseInclude: '', lowerCaseInclude: '', numericInclude: '' }

// Build library of chars with arrays
var specCharLib = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
