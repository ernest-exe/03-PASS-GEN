// Assignment Code
var generateBtn = document.querySelector("#generate");
// password is either displayed in an alert or written to the page
var lower = "abcdefjhijklmnopqrstuvwxyz";
var upper = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()";

// Write password to the #password input
function generatePassword() {
  var characters = "";
  var answer = ""

  alert("Generated password must have: length 8-128 and include one of following: lowercase, uppercase, numeric, and/or special characters ")
  var passwordLength = prompt("Choose a length from 8-128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password length needs to be between 8 and 128. Please retry!")
    generatePassword()
  } else {
    if (confirm("Would you like uppercase letters in your password?")) {
      characters = characters.concat(upper)
    }
    if (confirm("Would you like lowercase letters in your password?")) {
      characters = characters.concat(lower)
    }
    if (confirm("Would you like numbers in your password?")) {
      characters = characters.concat(numbers)
    }
    if (confirm("Would you like symbols in your password?")) {
      characters = characters.concat(symbols)
    }
    if (characters.length == 0) {
      alert("You must choose atleast one type of character to create a password. Please retry!")
      generatePassword()
    } else {
      for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length)
        answer += characters[randomIndex]
      }
    }
    return answer
  }
}

// legnth of password 8-128
// (Math.floor(Math.random() * 128));
// whether or not to include lowercase, uppercase, numeric, and/or special characters
// input should be validated and at least one character type should be selected

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);