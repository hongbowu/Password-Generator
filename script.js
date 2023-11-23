// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

function generatePassword() {
var lengthOfPassword = prompt("chose a length of password between 8-128 characters.","put the number you want then click on ok");
var lowerCase = prompt("Do you want lowercases?","ok for yes, cancel for skip.");
var upperCase = prompt("Do you want uppercases?","ok for yes, cancel for skip.");
var numeric = prompt("Do you want numeric?","ok for yes, cancel for skip.");
var specialCharacter = prompt("Do you want special characters?","ok for yes, cancel for skip.");

var low = "qwertyuiopasdfghjklzxcvbnm";
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers = "0123456789";
var specials = "`~!@#$%^&*()_+-=|]}[{:;/?.>,<'";

var newPass = "";

if (lengthOfPassword<8 || lengthOfPassword>128) {
  return;
}else if (lowerCase && upperCase && numeric && specialCharacter) {
    newPass = low + upper + numbers + specials;
  } else if (lowerCase && upperCase && numeric) {
    newPass = low + upper + numbers;
  } else if (lowerCase && upperCase && specialCharacter) {
    newPass = low + upper + specials;
  } else if (lowerCase && numeric && specialCharacter) {
    newPass = low + numbers + specials;
  } else if (upperCase && numeric && specialCharacter) {
    newPass = upper + numbers + specials;
  } else if (lowerCase && upperCase) {
    newPass = low + upper;
  } else if (lowerCase && numeric) {
    newPass = low + numbers;
  } else if (lowerCase && specialCharacter) {
    newPass = low + specials;
  } else if (upperCase && numeric) {
    newPass = upper + numbers;
  } else if (upperCase && specialCharacter) {
    newPass = upper + specials;
  } else if (numeric && specialCharacter) {
    newPass = numbers + specials;
  } else if (lowerCase) {
    newPass = low;
  } else if (upperCase) {
    newPass = upper;
  } else if (numeric) {
    newPass = numbers;
  } else {
    newPass = specials;
  }
  // if (lengthOfPassword<8 || lengthOfPassword>128) {
  //   return;
  // }
  var gotIt = "";
  for (var i = 0; i < lengthOfPassword; i++){
  //  var gotIt = "";
   gotIt += newPass[i];
  }
console.log(gotIt);
}
generatePassword()
generateBtn.addEventListener("click", writePassword);
