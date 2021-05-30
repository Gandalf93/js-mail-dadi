// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


var numeroUtente = Math.floor(Math.random() * 6) + 1;
// console.log('num utente');

var numeroComputer = Math.floor(Math.random() * 6) + 1;
// console.log('num computer');


if (numeroUtente>numeroComputer){
   var outcome = 'You win!';
//    console.log('utente');
}else if (numeroComputer>numeroUtente){
   var outcome = 'You lose :(';
//    console.log('computer');
}else if (numeroUtente = numeroComputer){
    var outcome = 'You\'re even';
    // console.log('pari');
}

document.getElementById("utente").innerHTML =numeroUtente;
document.getElementById("pc").innerHTML = numeroComputer;
document.getElementById("result").innerHTML = outcome;
