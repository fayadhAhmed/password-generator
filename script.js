const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const symbols= ['!', '!', '_', '@', '#', '$', '%', '^', '&'];

let passWordLenght = 8;
let button = document.getElementById('button');
let resultBox = document.getElementById("result");

//  make and retun random character
function randomCharacters (){
    let randomNumber = Math.floor(Math.random() * 100);
    let randomCharacter =  "";

    if (randomNumber > 51) {
        randomNumber = Math.floor(randomNumber - 48 );
        return randomCharacter =  characters[randomNumber];

        

    }else{ return randomCharacter =  characters[randomNumber]; }
}

//  make and retun random sumbol
function randomSymbol(){

    let randomNumber = Math.floor(Math.random() * 10);
    let randomSymbol =  "";
    if (randomNumber === 9) {
        randomNumber = Math.floor(randomNumber - 1);
        return randomSymbol =  symbols[randomNumber];

        

    }else{ return randomSymbol =  symbols[randomNumber]; }
}

function generatPassword() {
    let password = '';
    
    for (let index = 0; index < passWordLenght; index++) {
       
        let character = randomCharacters();
        let symbol = randomSymbol();

        if (character !== undefined) {
            password += character;
        }
        if (symbol !== undefined) {
            password += symbol;
        }
        if (character !== undefined) {
            password += character;
        }
        password += Math.round(Math.random() * 10);
        
    } 
    
    // this is the file password it take the full string and split to the lenght use want
    let pass = password.substr(0 , passWordLenght);
    return pass;
    
}

button.addEventListener('click',function () {

    passWordLenght = document.getElementById('passwordLenght').value;
    resultBox.innerText = generatPassword();
})

