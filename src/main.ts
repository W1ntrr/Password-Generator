const password = document.querySelector<HTMLElement>('.passwords');
const generator = document.getElementById('generate') as HTMLButtonElement;

const characters:string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength:number = 12;

generator?.addEventListener('click',displayGeneratedPassword);

function generatePassword():string{
  let char = '';
  for(let i = 0;i<passwordLength;i++){
    let randomChar = Math.floor(Math.random() * characters.length);
    char += characters[randomChar];
  }
  return char;
}

function displayGeneratedPassword(){
  password!.innerHTML = `<div class="generated-password" id="password1"><input type="text" value="${generatePassword()} readonly"></div>
          <div class="generated-password" id="password2"><input type="text" value="${generatePassword()} readonly"></div>
          <div class="generated-password" id="password3"><input type="text" value="${generatePassword()} readonly"></div>
          <div class="generated-password" id="password4"><input type="text" value="${generatePassword()} readonly"></div>`
}
