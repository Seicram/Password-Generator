// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', "^", '&', '*', '(', ')', '-', '_', '=', '+', ']', '[', '}', '{', '|', ',', '>', '<', '/', '?', '~', '.', '`'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
numberCharacters = prompt("Choose between 6 and 134 characters");
if (numberCharacters < 6 || numberCharacters > 134) {
  return "Select the correct number of characters";
}
else if (isNaN(numberCharacters)) {
  numberCharacters = prompt("Enter a valid number.");
}
else {
  message("Password is " + numberCharacters + " characters");
  
}
  lowerCase = confirm("You can select lowercase characters");
  if (lowerCase) {
    var makeLowercase = message("The password will contain lowercase characters");
  }
  else {
    message("The password will not have lowercase characters");
  }

  upperCase = confirm("Uppercase characters are available");
  if (upperCase) {
    message("The password will contain uppercase characters");
  }
  else {
    message("The password will not have uppercase characters");
  }

  numbers = confirm("Numerical values are available");
  if (numbers) {
    message("The password will contain numberical values");
  }
  else {
    message("The password will not contain numerical values");
  }

  special = confirm("Special characters are available");
  if (special) {
    message("The password will contain special characters");
  }
  else {
    message("The password will not contain special characters.");
  }
  if (lowerCase === false && upperCase === false && numbers === false && special === false) {
    return "At least one character type must be selected";
  };

  // group selected characters
  if (lowerCase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

