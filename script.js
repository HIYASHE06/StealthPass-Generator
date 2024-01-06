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
      } else {alert("Requiremenst not met,\nTRY AGAIN");
      }} while (!(passwordLength>=8 &&passwordLength<=128));// while statement will repeat the fuction till the condition becomes true
      
  var upperCase=confirm("Do you want your password to have uppercases\n🔠.");//global variables
      lowerCase=confirm("Do you want your password to have lowercases\n🔡.");
      numericValue=confirm("Do you want your password to have numeric values\n🔢.");
      specialCharacters=confirm("Do you want your password to have special characters\n$@%&*, etc.");  

while (upperCase===false &&// this code will repeat until one confirm is true
  lowerCase===false &&
  numericValue===false &&
  specialCharacters===false) {
  prompt("You have to select at least one charatcer for a password to be generated") //local variables
  var upperCase=confirm("Do you want your password to have uppercases\n🔠.");
  lowerCase=confirm("Do you want your password to have lowercases\n🔡.");
  numericValue=confirm("Do you want your password to have numeric values\n🔢.");
  specialCharacters=confirm("Do you want your password to have special characters\n$@%&*, etc.");
}
      var passwordCharacters = [];
        if (upperCase) {
            passwordCharacters = passwordCharacters.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
        }
        if (lowerCase) {
            passwordCharacters = passwordCharacters.concat('abcdefghijklmnopqrstuvwxyz'.split(''));
        }
        if (numericValue) {
            passwordCharacters = passwordCharacters.concat(numericCharacters);
        }
        if (specialCharacters) {
            passwordCharacters = passwordCharacters.concat(specialCharacters);
        }
    
        var password = '';
        for (var i = 0; i < passwordLength; i++) {
            password += getRandom(passwordCharacters);
        }
        return password;}
      
        

// Function for getting a random element from an array
  function getRandom(arr) {
    indexValue= (Math.ceil(Math.random()*arr.length))-1// -1 keeps the highest number below 10 since l used ceil  
    var random00=arr[indexValue]; 
    return random00
            
    }
//fuction for generating password using user input 
    function generatePassword() {
      var password = getPasswordOptions();
      document.getElementById('password').value = password;
  }// this fuction calls the getPasswordOption fuction to generate a password when the btn is clicked 
