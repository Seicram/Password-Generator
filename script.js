var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var characterTypes = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialChar: "!#$%&)( *+,.;:=-><?\\^_~`|/",
};

function generatePassword() {
  var password = "";
  var length;

  while (true) {
    length = parseInt(prompt("How long would you like your password to be? (It must be at least 8 characters and no longer than 128.)"), 10);

    if (length >= 8 && length <= 128) {
      alert("Your password length will be " + Math.ceil(length) + " characters long");
      break;
    } else {
      alert("Password length must be at least 8 characters and no greater than 128!");
    }
  }

  var includeUpperCase = confirm("Would you like to include Uppercase characters in your password?");
  var includeLowerCase = confirm("Would you like to include Lowercase characters in your password?");
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  var includeSpecialChar = confirm("Would you like to include special characters in your password?");

  while (!(includeUpperCase || includeLowerCase || includeNumbers || includeSpecialChar)) {
    alert("Your password must consist of at least one of the following character types: Uppercase, Lowercase, Numbers, or Special characters.");
    alert("Let's try again!");

    includeUpperCase = confirm("Would you like to include Uppercase characters in your password?");
    includeLowerCase = confirm("Would you like to include Lowercase characters in your password?");
    includeNumbers = confirm("Would you like to include numbers in your password?");
    includeSpecialChar = confirm("Would you like to include special characters in your password?");
  }

  var passwordPosibilities = "";

  if (includeUpperCase) {
    passwordPosibilities += characterTypes.upperCase;
  }
  if (includeLowerCase) {
    passwordPosibilities += characterTypes.lowerCase;
  }
  if (includeNumbers) {
    passwordPosibilities += characterTypes.numbers;
  }
  if (includeSpecialChar) {
    passwordPosibilities += characterTypes.specialChar;
  }

  for (var i = 0; i < length; i++) {
    password += passwordPosibilities.charAt(Math.floor(Math.random() * passwordPosibilities.length));
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);