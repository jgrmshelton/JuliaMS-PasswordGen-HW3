// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    
}

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
var upperChartypes = false;
var lowerChartypes = false;
var specialChartypes = false;
var numbertypes = false;

function generate() {
  var confirmCharlength = parseInt(
    prompt("8 character minimum. 128 chracter maximum."));
    }

    if (confirmCharlength < 8) {
        alert("At least 8 characters long")
        return null;
    }

    if (confirmCharlength > 128) {
        alert("Less than 129 characters")
        return null;
    }

    if (Character.isNaN(confirmCharlength)) {
        alert("Password length provided as number");
        return null;
    }

    if (confirm("Include lowercase characters?") == true) {
        upperChartypes = true
    } 

    if (confirm("Include uppercase characters?") == true) {
        lowerChartypes = true
    }

    if (confirm("Include special characters?") == true) {
        specialChartypes = true
    }

    if (confirm("Include numerical characters?") == true) {
        numbertypes = true
    }

    if (upperChartypes  === false && lowerChartypes === false && specialChartypes === false && numbertypes === false) {
        alert("Password must include uppercase character, lowercase character, sprecial chracter, and a number.")
    }
} 


