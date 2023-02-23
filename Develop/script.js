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
  numberCharacters = prompt("Please enter a valid number.");
}
else {
  maessage("Password is " + numberCharacters + " characters");
  
}
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
