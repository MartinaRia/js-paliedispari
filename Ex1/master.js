/*Chiedo a utente di inserire come input una parola
tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
dò output a utente dicendogli che ho verificato;
qui sicuramente da cercare ci sarà il come revertare una parola.*/

//VARIABILI ------------------------------------------------
//getElement
var elParola = document.getElementById('parola');
var elBtnVerifica = document.getElementById('btn-verifica');
var elRisultato = document.getElementById('risultato');

var parola, alorap

//FUNZIONI --------------------------------------------------

//stampa in HTML
function printAnything(nomeVariabile, getElement, contenutoDaStampare){
  nomeVariabile = getElement;
  nomeVariabile.innerHTML = contenutoDaStampare;
}

//reverse with chaining three methods
function reverseParola(str) {
    return str.split("").reverse().join("");
}

//EVENTO AL CLICK DEL BOTTONE -------------------------------------
elBtnVerifica.addEventListener ('click',
  function(){

    //ottieni valore input
    parola = elParola.value;
    console.log(parola); //check value
    elParola.value = ''; //clear input

    //inverti parola
    alorap = reverseParola(parola)
    console.log(alorap);

    //logica
    if (parola === alorap) {
      elRisultato.innerHTML = "LA PAROLA CHE HAI INSERITO E' PALINDROMA";
    } else {
      elRisultato.innerHTML = "SPIACENTE, LA PAROLA CHE HAI INSERITO NON E' PALINDROMA";
    }

  }
)
