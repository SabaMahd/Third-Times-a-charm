window.alert("This is an alert! JavaScript is running!");
let generateBtn = document.querySelector("#generate");
console.log(generateBtn);


var lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz";

var upperCaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numericCharacter = "0123456789";

var specialCharacter = "!@#$%^&*()_-+={[}]|:;<>.?/";

let everyCharacter = "";

function generatePassword() {
  everyCharacter = "";
  let passwordLength = prompt(
    "The password must be at least 8 characters and no more than 128 characters, How long do you want It to be?"
  );
  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(parseInt(passwordLength))
  ) {
    alert(
      "You haven't entered the right lenght that you want your password to be, Please enter a number between 8 and 128."
    );
  } else {
    let askLowerCase = confirm(
      "Would you like to have Lower Case characters in your password ?"
    );
    if (askLowerCase) {
      everyCharacter += lowerCaseCharacter;
    }
    let askUpperCase = confirm(
      "Would you like to have Upper Case characters in your password ?"
    );
    if (askUpperCase) {
      everyCharacter += upperCaseCharacter;
    }
    let askNumeric = confirm(
      "Would you like to have Numbers in your password ?"
    );
    if (askNumeric) {
      everyCharacter += numericCharacter;
    }
    let askSpecialCharacters = confirm(
      "Would you like to have Special Characters in your password?"
    );
    if (askSpecialCharacters) {
      everyCharacter += specialCharacter;
    }

    if (
      askLowerCase === false &&
      askUpperCase === false &&
      askNumeric === false &&
      askSpecialCharacters === false
    ) {
      alert("Please select at least one character type.");
      generatePassword();
    }
  }
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += everyCharacter.charAt(
      Math.floor(Math.random() * everyCharacter.length)
    );
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

let copyBtn = document.querySelector("#copy");
console.log(copyBtn);

var passwordDisplayed;

function copyPassword() {
  var copyText = document.getElementById("password");
  var text = copyText.value;
  if (text.length > 0) {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value).then(function () {
      alert("Your password has been copied to clipboard.");
    });
    // document.execCommand("copyPassword");
  }
}

copyBtn.addEventListener("click", copyPassword);

