// Assignment Code

var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
numbers = prompt("Choose between 8 and 128 characters");
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
function generatePassword() {
  let passwordLength = prompt("Enter password length (minimum 8 characters):");
   if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  else if (passwordLength > 128) {
    alert("Password length must be at most 128 characters");
    return;
  } 
  
  let includeLowercase = confirm("Should I include lowercase characters?");
  let includeUppercase = confirm("Should I include uppercase characters?");
  let includeNumbers = confirm("Should I include numerical characters?");
  let includeSpecial = confirm("Should I include special characters?");

  let charTypes = [];
  if (includeLowercase) charTypes.push("abcdefghijklmnopqrstuvwxyz");
  if (includeUppercase) charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (includeNumbers) charTypes.push("1234567890");
  if (includeSpecial) charTypes.push(" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  if (charTypes.length === 0) {
    alert("At least one character type must be selected");
    return;
  }
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let charType = charTypes[Math.floor(Math.random() * charTypes.length)];
    password = password + charType.charAt(Math.floor(Math.random() * charType.length));
  } 
  return password;
}
  // Add event listener to generate button
  
  generateBtn.addEventListener("click", writePassword);
