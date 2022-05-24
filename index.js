const dataNumbers = "1234567890";
const dataLowerCase = "qwertyuiopasdfghjklzxcvbnm";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataSymbols = "!@#$%^&*()_+=-{}|][\"';/.,<>?";
const rangeValue = document.getElementById("password-range");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowerCase);
  if (uppercase.checked) data.push(...dataUpperCase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("veuilez cocher au moins une case");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  passwordOutput.select();
  document.execCommand("copy");
  //alert("votre mot de passe est:" + passwordOutput.value);
  btn.textContent = "copier";
  setTimeout(() => {
    btn.textContent = "generer mots de passe";
  }, 200);
}

btn.addEventListener("click", generatePassword);
