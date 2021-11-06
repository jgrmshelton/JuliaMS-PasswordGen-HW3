var generateBtn = document.querySelector("#generate");

const specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`"];

// my allowed characters
var upperChar = ""; //["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ""; //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ""; // ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// write password

function generatePassword() {
  password = "";
  var passwordLength = prompt(
      "Password must include at least 8 characters but cannot go past 128 characters"
  );

if (characterNumber >= 8 && characterNumber <= 128) {
  alert("Invalid password. Please make sure to use 8 or more characters.");
  return generatePassword();
} else {

function userCharacters() {
  var lowerCase = confirm("Include lowercase characters?");
  if (lowerCase == true) {
    lowerChartypes = true;
  }

  var upperCase = confirm("Include uppercase characters?");
  if (upperCase == true) {
    upperChartypes = true;
  }

  var specialCharacter = confirm("Include special characters?");
  if (specialCharacter == true) {
    specialChartypes = true;
  }

  var numbers = confirm("Include numbers?");
  if (numbers == true) {
    numbers = true;
  }

  if (
    !upperChartypes &&
    !lowerChartypes &&
    !specialChartypes &&
    !numbertypes == true
  ) {
    alert(
      "Password must include uppercase character, lowercase character, special chracter, and a number."
    );
    userCharacters();
  }
  // loop to generate random characters for passwords
  var passwordArrayLength = passwordArray.length;

  for (i = passwordArrayLength; i < numberOfCharacters; i++) {
    passwordArray.push(
      userConfirm[Math.floor(Math.random() * userConfirm.length)]
    );
  }

  var finalPassword = "";
  for (f = 0; f < numberOfCharacters; f++) {
    finalPassword =
      finalPassword +
      passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }

  console.log(finalPassword);
  return finalPassword;
}
