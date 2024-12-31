const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$!%^&*()_+-=?<>/[{]}~";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];

  password += lowerCase[Math.floor(Math.random() * upperCase.length)];

  password += number[Math.floor(Math.random() * number.length)];

  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

// Function to copy the password to the clipboard
function copyPassword() {
  if (passwordBox.value === "") {
    alert("No password to copy! Please generate one first.");
    return;
  }

  navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy password:", err);
    });
}