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

var betUser = document.getElementById('scelta')
var numUser = document.getElementById('numero-giocatore');
var btnNumber = document.getElementById('get-number')


function getValue(nomeVarBottone, nomeVarInput){
  nomeVarBottone.addEventListener('click',
    function() {
      valore = nomeVarInput.value;

      return valore
    }
  )
}

//ottieni valore scelta
getValue(btnNumber, numUser)
console.log(getValue(btnNumber, numUser));

//metodo precedente
btnNumber.addEventListener('click',
  function() {
    numUserValue = numUser.value;
    betUserValue = betUser.value;
    console.log(betUserValue);
    console.log(numUserValue);

  }
)
