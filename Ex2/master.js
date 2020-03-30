
//VARIABILI ------------------------------------------------

var betUser = document.getElementById('scelta');
var btnNumber = document.getElementById('get-number');
var displayScelta = document.getElementById('display-scelta');
var primoNumero = document.getElementById('primo-num');
var secondoNumero = document.getElementById('secondo-num');
var printRisultato = document.getElementById('risultato')

var betUserValue, userChoice; //pickValues()
var numComp1, numComp2, displayNum1, displayNum2; //displayNumbers
var somma //sum
var risultato //calculate winner



//FUNZIONI --------------------------------------------------

//stampa in HTML
function printAnything(nomeVariabile, getElement, contenutoDaStampare){
  nomeVariabile = getElement;
  nomeVariabile.innerHTML = contenutoDaStampare;
}


//EVENTO AL CLICK DEL BOTTONE -------------------------------------
btnNumber.addEventListener('click',
  function() {

    //pickValue
    betUserValue = betUser.value;
    printAnything(userChoice, displayScelta, betUserValue)

    //displayNumbers
    numComp1 = Math.floor(Math.random() * 5) + 1;
    numComp2 = Math.floor(Math.random() * 5) + 1;
    printAnything(displayNum1, primoNumero, numComp1);
    printAnything(displayNum2, secondoNumero, numComp2);

    //sum
    somma = parseInt(numComp1) + parseInt(numComp2);
    console.log(somma);

    //calculate winner
    if (somma%2 === 0) {
      risultato = "Pari"
    } else {
      risultato = "Dispari"
    }
    //declaire winner
    if (risultato == betUserValue) {
      printRisultato.innerHTML = "HAI VINTO"
    } else {
      printRisultato.innerHTML = "HAI PERSO"
    }

  }
)
