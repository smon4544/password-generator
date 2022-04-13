// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var promptPassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", promptPassword);
