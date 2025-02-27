/*jsnack1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/


// Chiediamo all'utente di inserire due numeri
let numero1 = prompt('Inserisci il primo numero');
let numero2 = prompt('Inserisci il secondo numero');

// Converto i valori inseriti da stringhe a numeri
numero1 = Number(numero1);
numero2 = Number(numero2);

// Confronto i numeri e stampo il maggiore
if (numero1 > numero2) {
  console.log('Il numero maggiore è: ' + numero1);
} else if (numero2 > numero1) {
  console.log('Il numero maggiore è: ' + numero2);
} else {
  console.log('I numeri sono uguali');
}

