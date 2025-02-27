/*jsnack2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

let parola1 = prompt('inserisci una parola');
let parola2 = prompt('inserisci una parola');

if (parola1.length > parola2.length ) {
    console.log('La prima parola è la parola più lunga!' + parola1)
    console.log('La seconda parola è la parola più corta!' + parola2)
} else if(parola1.length < parola2.length ) {
    console.log('La seconda parola è la parola più lunga!' + parola2)
    console.log('La prima parola è la parola più corta!' + parola1)
} else {
        console.log('Le parole sono lunghe uguali!')
}
