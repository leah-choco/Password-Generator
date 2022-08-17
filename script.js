// Creating variable for the length of the password.
var passwordLength =10;

//Creating variables for all the characters being offered.
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialCharacters = ["!", "#", "$", "%", "&", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[]", "^", "_", "`", "{", "|", "}", "~"];
var finalPassword = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//This function provides the prompts and gathers that information.
function getChoices(){
  passwordLength = parseInt(prompt ("How many characters would you like the password to contain? Type a number between 8-128."));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Password length has to be a number between 8-128. Try again.");
      return false;
  }

 if(confirm ("Would you like to include lowercase letters?")) {
    finalPassword.concat(lowerCase);

  }
  
  if(confirm ("Would you like to include uppercase letters?")){
    finalPassword.concat(upperCase);
  }
  
  if(confirm ("Would you like to include numbers?")) {
    finalPassword.concat(numbers);
  }
  
  if(confirm ("Would you like to include special characters?")) {
    finalPassword.concat(specialCharacters);
  }
}
return true

function generatePassword(){

}

// Write password to the #password input
function writePassword() {
  var password = getChoices()//generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
