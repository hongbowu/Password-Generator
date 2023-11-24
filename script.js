// Assignment Code
function generatePassword() {
  var lengthOfPassword = prompt(
    "chose a length of password between 8-128 characters.",
    "put the number you want then click on ok"
  );
  var lowerCase = prompt(
    "Do you want lowercases?",
    "ok for yes, cancel for skip."
  );
  var upperCase = prompt(
    "Do you want uppercases?",
    "ok for yes, cancel for skip."
  );
  var numeric = prompt("Do you want numeric?", "ok for yes, cancel for skip.");
  var specialCharacter = prompt(
    "Do you want special characters?",
    "ok for yes, cancel for skip."
  );

  var low = "qwertyuiopasdfghjklzxcvbnm";
  var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var numbers = "0123456789";
  var specials = "`~!@#$%^&*()_+-=|]}[{:;/?.>,<'";

  var news = "";
  var i = 0;

  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    return;
  } else if (!lowerCase && !upperCase && !numeric && !specialCharacter) {
    return;
  }
  for (i = 0; i < lengthOfPassword; i++) {
    if (lowerCase && news.length < lengthOfPassword) {
      news += low[Math.floor(Math.random() * low.length)];
    }
    if (upperCase && news.length < lengthOfPassword) {
      news += upper[Math.floor(Math.random() * upper.length)];
    }
    if (numeric && news.length < lengthOfPassword) {
      news += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (specialCharacter && news.length < lengthOfPassword) {
      news += specials[Math.floor(Math.random() * specials.length)];
    }
  }
  return news;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
