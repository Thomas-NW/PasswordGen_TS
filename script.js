// # 03 JavaScript: Password Generator - Thomas Schmidt

let specialString = ["!", "&", "#", "*", "{", "|", "%", "^", "~"];
let numberString = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowercaseString = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseString = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let passwordlengthSel;
let charactersSel = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = pwStructure();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPassword() {
  let passwordString = '';
  for (var i = 0; i < passwordlengthSel; i++) {
    passwordString += charactersSel[(Math.floor(Math.random() * charactersSel.length))];
  }
  return passwordString;
}

function pwStructure() {
  // Inquires about the password length through UI
  var passwordLength = window.prompt('Input password length');
  if (passwordLength < 8 || passwordLength >= 128) {
    alert("Password length shall be at least 8 characters and no more than 128 characters");
    return "Your password here";
  }
  else {
    passwordlengthSel = passwordLength;
  }

  var specialSel = confirm("Add symbols?");
  if (specialSel) {
    charactersSel = charactersSel.concat(specialString)
  }
  console.log(specialSel);

  var numberSel = confirm("Include numbers?");
  if (numberSel) {
    charactersSel = charactersSel.concat(numberString)
  }

  var lowercaseSel = confirm("Include lower case letters?");
  if (lowercaseSel) {
    charactersSel = charactersSel.concat(lowercaseString)
  }

  var uppercaseSel = confirm("Include UPPER case letters?");
  if (uppercaseSel) {
    charactersSel = charactersSel.concat(uppercaseString)
  }

  if (pwstructureVal(specialSel, numberSel, lowercaseSel, uppercaseSel) == false) {
    pwStructure();
  }
  else {
    return getPassword();
  }

  // Alternatively this can be applied too
  // if (
  //   specialSel == false && numberSel == false && lowercaseSel == false && uppercaseSel == false
  // ) {
  //   alert("You need at lest one variable!");
  //   pwStructure();
  //   }

  return getPassword();

}

function pwstructureVal(a, b, c, d) {
  if (a == false && b == false && c == false && d == false) {
    alert("You need at least one variable!");
    return false;
  }

}

