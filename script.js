var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
var upperChartypes = false;
var lowerChartypes = false;
var specialChartypes = false;
var numbertypes = false;

function generatePassword() {
  var confirmCharlength = parseInt(
    prompt("How long should the password be?"));

    if (confirmCharlength < 8) {
        alert("At least 8 characters long")
        return null;
    }

    if (confirmCharlength > 128) {
        alert("Less than 129 characters")
        return null;
    }

    if (!Number.isInteger(confirmCharlength)) {
        alert("Password length provided as number");
        return null;
    }

    var lowerCase=confirm("Include lowercase characters?");
    if (lowerCase == true) {
        lowerChartypes = true;
    } 

    var upperCase=confirm("Include uppercase characters?");
    if (upperCase == true) {
        upperChartypes = true;
    } 

    var specialCharacter=confirm("Include special characters?");
    if (specialCharacter == true) {
        specialChartypes = true;
    } 

    var numbers=confirm("Include numbers?");
    if (numbers == true) {
        numbers = true;
    } 
    
    if (upperChartypes  === false && lowerChartypes === false && specialChartypes === false && numbertypes === false) {
        alert("Password must include uppercase character, lowercase character, sprecial chracter, and a number.")
    }
    var options={
        lower: lowerChartypes,
        upper: upperChartypes,
        special: specialChartypes,
        number: numbers,
    } 
    console.log(options)

    if (lowerChartypes == true) {
        var x = Math.floor((Math.random() * lowerChar.length-1));
        var lower = lowerChar[x];
        console.log(lower)
    } 
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
