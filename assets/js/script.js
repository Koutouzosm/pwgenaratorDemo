// Assignment Code
// special chars array
var specialChars = [",", "#"];

// number array
var numbArray = ["1", "2"];

// lower case array
var lowerCase = ["a", "b"];

// Upper case array  (look up split method)
var upperCase = ["ABCDEFGHIJKLMNOPQ"];


// Function to prompt the user for password options
function getPassward() {
    // create a variable to store the lenght of password
    var length = parseInt(
      prompt('How many characters would you like you password to be?')
    );
    
    // create conditional statement to check if password lengh is actually a number
    if (Number.isNaN(length)) {
      alert('password must be a number');
      return null;
    }

    // Conditional statement to check if password is atleast 8 chars
    if (length < 8) {
      alert('Password length must be AT LEAST 8 characters');
      return null;
    };

    // Conditional statement to check if password lenth is atleast 128 characters
    if (length > 128) {
      alert('Password cannot contain more than 128 chars!!');
      return null
    };


    // create confirmation prompts for the type of characters the user wants to use in there password.

    // need to create a conditional statement to check if user included ATLEAST 1 of the char types. return user back to start of application


}
  




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
