// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', "^", '&', '*', '(', ')', '-', '_', '=', '+', ']', '[', '}', '{', '|', ',', '>', '<', '/', '?', '~', '.', '`'];
var possible = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
numbers = prompt("Choose between 6 and 134 characters");
if (numbers < 6 || numbers > 134) {
  message: ("Select the correct number of characters");
}
else if (isNaN(numbers)) {
  numbers = prompt("Enter a valid number");
}
else {
  message:("Password is " + numbers + " characters");
  
}
  lowerCase = confirm("You can select lowercase characters");
  if (lowerCase) {
    var makeLowercase = message = ("The password will contain lowercase characters");
  }
  else {
    message:("The password will not have lowercase characters");
  }

  upperCase = confirm("Uppercase characters are available");
  if (upperCase) {
    message:("The password will contain uppercase characters");
  }
  else {
    message:("The password will not have uppercase characters");
  }

  numbers = confirm("Numerical values are available");
  if (numbers) {
    message:("The password will contain numberical values");
  }
  else {
    message:("The password will not contain numerical values");
  }

  special = confirm("Special characters are available");
  if (special) {
    message:("The password will contain special characters");
  }
  else {
    message:("The password will not contain special characters.");
  }
  if (lowerCase === false && upperCase === false && numbers === false && special === false) {
    message: ("At least one character type must be selected");
  };

  if (lowerCase) {
    possible = possible.concat(lowerCase);
  }
  if (upperCase) {
    possible = possible.concat(upperCase);
  }numbers
  if (numbers) {
    possible = possible.concat(numbers);
  }
  if (special) {
    possible = possible.concat(special);
  }
  let finalPassword = ""
  {for (let i = 0; i < numbers; i++) {
    let rng =[Math.floor(Math.random() * possible.length)];
    
    finalPassword = finalPassword + possible[rng];
  }
  message = finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
