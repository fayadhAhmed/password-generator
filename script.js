const capitalCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const smallCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const symbols = ['!', '!', '_', '@', '#', '$', '%', '^', '&']
let passWordLenght = 8;
let button = document.getElementById('button');
let resultBox = document.getElementById("result");

function randomCharacter(characters){
    let randomNumber = Math.floor(Math.random() * 100);
    let randomCharacter = '';
    
    if (randomNumber < 27) {

        randomCharacter = characters[randomNumber];
        return randomCharacter;

    }else if( randomNumber > 27 && randomNumber <= 60){

        randomNumber = Math.floor(randomNumber / 3) ;
        randomCharacter = characters[randomNumber];
        return randomCharacter;


    }else if( randomNumber > 60 && randomNumber <= 99){

        randomNumber = Math.floor(randomNumber / 3 - 20) ;
        randomCharacter = characters[randomNumber];
        return randomCharacter;

    }
}

function randomSymbols(){
    let randomNumber = Math.floor(Math.random() * 10);
    let randomSymbol = symbols[randomNumber]
    return randomSymbol;
}

function generatPassword() {
    let password = '';
    

    for (let index = 0; index < 100; index++) {
       
        password += randomCharacter(capitalCharacters);
        password += randomCharacter(smallCharacters);
        password += randomSymbols();
        
    } 
    
    // this is the file password it take the full string and split to the lenght use want
    let pass = password.substr(0 , passWordLenght);
    return pass;
    
}
button.addEventListener('click',function () {

    passWordLenght = document.getElementById('passwordLenght').value;
    resultBox.innerText = generatPassword();
})
