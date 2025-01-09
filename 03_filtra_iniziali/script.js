/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const leteraUtente = prompt("Inserisci lettera A, L o M")

// Dichiara la funzione qui.
function arrayInizialiUguali(arr){
    // creo un array vuoto 
    const inizialiUguali = [];

    // creo un ciclo che sottrae l'iniziale di ogni stringa dell'array
    for (let i = 0; i < arr.length; i++){
        if (arr[i][0] === leteraUtente){
            inizialiUguali.push(arr[i])
        }
    }
    
    return inizialiUguali;
        
}

// versione arrow function 
const arrayInizialiUguali2 = arr =>{
    // creo un array vuoto 
    const inizialiUguali2 = [];

    // creo un ciclo che sottrae l'iniziale di ogni stringa dell'array
    for (let i = 0; i < arr.length; i++){
        if (arr[i][0] === leteraUtente){
            inizialiUguali2.push(arr[i])
        }
    }
    
    return inizialiUguali2;
        
}
// Invoca la funzione qui e stampa il risultato in console
console.log(arrayInizialiUguali(names))
console.log(arrayInizialiUguali2(names))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]