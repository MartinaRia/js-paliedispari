/*DESCRIZIONE:
Chiedo a utente di inserire come input una parola
tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
dò output a utente dicendogli che ho verificato;
qui sicuramente da cercare ci sarà il come revertare una parola.
-
Creo gioco pari o dispari;
L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
Generiamo un numero random (sempre da 1 a 5) per il computer.
 Sommiamo i due numeri e dichiariamo chi ha vinto.

BONUS: (ma solo se il resto è fatto)
output carino con ciò che sappiamo di HTML+JS;
far partire il gioco per es. su click bottone e tutto quello che vi viene per creare un interfaccia funzionale e avanzata;
tutto quello che vi viene in mente sull’interfaccia.

NOTE:
il focus è usare le funzioni per capirle, quindi cercate di utilizzarle;
per il  primo quindi funzione per dire se parola è palindroma, sicuro,… ma anche altro potrei forse far diventare funzione?.. forse;
su pariOdispari tutto quello che posso far funzione lo faccio, tipo generare numero random, ma se c’è possibilità anche altro.
gioco pariOdispari, i 2 giocatori saranno sempre il PC (quindi non numero inserito a mano dall’utente).*/

// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

//VARIABILI ------------------------------------------------

//variabili input -------------------
var betUser = document.getElementById('scelta')
var numUser = document.getElementById('numero-giocatore');
var btnNumber = document.getElementById('get-number')

//variabili funzioni
var numUserValue, betUserValue; //pickValues()
var displayScelta, displayNumScelto; //displayUserChoice()
var numComputer; //computerChoice()
var somma //sum()
var risultato //winningCalculations()
var printRisultato = document.getElementById('risultato') //verdetto

//EVENTO AL CLICK INVIA -------------------------------------
btnNumber.addEventListener('click',
  function() {

    pickValues();

    displayUserChoice();

    computerChoice();

    sum();

    winningCalculations();


    ///funzioni-----------------------------------------

    //prendi valori
    function pickValues(){
      numUserValue = numUser.value;
      betUserValue = betUser.value;
    }

    //stampa scelta
    function displayUserChoice(){
      displayScelta = document.getElementById('display-scelta');
      displayScelta.innerHTML = betUserValue;

      displayNumScelto = document.getElementById('display-numero');
      displayNumScelto.innerHTML = numUserValue;
    }

    //scelta computer
    function computerChoice(){
      numComputer = Math.floor(Math.random() * 5) + 1;
      document.getElementById('scelta-computer').innerHTML = numComputer
    }

    //Somma
    function sum(){
      somma = parseInt(numComputer) + parseInt(numUserValue);
      console.log(somma);
    }

    //calcola chi ha vinto
    function winningCalculations(){
      if (somma%2 === 0) {
        risultato = "Pari"
      } else {
        risultato = "Dispari"
      }
      //verdetto
      if (risultato == betUserValue) {
        printRisultato.innerHTML = "HAI VINTO"
      } else {
        printRisultato.innerHTML = "HAI PERSO"
      }
    }


  }
)
