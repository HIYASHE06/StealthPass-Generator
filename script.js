// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
firstvalue=numericCharacters[9];
console.log(firstvalue);

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

function getPasswordOptions() {
  do {var passwordLength=parseInt(prompt("Desired length of your password\n-----------------------------------------------\n Choose between 8 and 128 characters"));
  console.log(typeof passwordLength);
          if (passwordLength>=8 &&passwordLength<=128){
          alert("Your password will contain "+passwordLength+" characters")
      } else {alert("Requiremenst not met,\nTRY AGAIN");}
      } while (!(passwordLength>=8 &&passwordLength<=128));// while statement will repeat the fuction till the condition becomes true
      
      upperCase=confirm("Do you want your password to have uppercases\n🔠.");
      console.log(upperCase);
      lowerCase=confirm("Do you want your password to have lowercases\n🔡.");
      numericValue=confirm("Do you want your password to have numeric values\n🔢.");
      specialCharacters=confirm("Do you want your password to have special characters\n$@%&*, etc.");
  }getPasswordOptions();

// Present a series of prompts for password criteria:

// Length of password:

// At least 8 characters but no more than 128.

// Character types:

// Lowercase

// Uppercase

// Numeric

// Special characters ($@%&*, etc.)

// Code should validate for each input and at least one character type should be selected.

// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.

//pseudocode
//0) prompt that ask how many characters the user wants to include.
//1) prompts that asks if user wants to include lower and uppercase in the passward.
//2) prompts thats ask if the user wants to include numeric and special characters.

// HOW DO I MAKE SURE ALL THE CHARACTERS ARE INCLUDED IN THE PASSWORD

/*NEXT STEP */
// Function for getting a random element from an array

  function getRandom(arr) {
    indexValue= (Math.ceil(Math.random()*arr.length))-1// -1 keeps the highest number below 10 since l used ceil
    console.log(indexValue);  
    var random00=arr[indexValue]; 
    console.log("og random genarator "+random00);
            
    }
getRandom(numericCharacters);
getRandom(specialCharacters);
getRandom(upperCasedCharacters);
getRandom(lowerCasedCharacters);



// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);