// Variable for the length of the password.
var passwordLength =10;

//Creating variables for all the characters being offered.
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialCharacters = ["!", "#", "$", "%", "&", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[]", "^", "_", "`", "{", "|", "}", "~"];
var finalPassword = [];

//Getting info from the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button so that when I click, the prompts begin.
generateBtn.addEventListener("click", writePassword);


//This function provides the prompts and gathers the choices.
function getChoices(){
  finalPassword =[];
  
  //Learned that parseInt allows me to change type of input from string to number.
  passwordLength = parseInt(prompt ("How many characters would you like the password to contain? Type a number between 8-128."));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    //I wanted an alert in the event that the right info was given.
    alert("Password length has to be between 8-128 characters. Try again.");
    return false;
  }

  //Used concat syntax to add all the different arrays as prompted to my empty finalPassword array.
 if(confirm ("Would you like to include lowercase letters?")) {
    finalPassword = finalPassword.concat(lowerCase);

  }
  
  if(confirm ("Would you like to include uppercase letters?")){
    finalPassword = finalPassword.concat(upperCase);
  }
  
  if(confirm ("Would you like to include numbers?")) {
    finalPassword = finalPassword.concat(numbers);
  }
  
  if(confirm ("Would you like to include special characters?")) {
    finalPassword = finalPassword.concat(specialCharacters);
  }
  return true
}

//This function now takes the information collected and generates the random password. Used for loop.
function generatePassword(){
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * finalPassword.length);
    password = password + finalPassword[randomIndex];
  }
  return password;
}

// This function then displays the generated password as it was added in event listener.
function writePassword() {
  var correctPrompts = getChoices();
  var passwordText = document.querySelector("#password");
    
 if(correctPrompts) {
    var newPassword = generatePassword();
    
    passwordText.value = newPassword;
  
  }    

}


