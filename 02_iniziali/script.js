/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function ArrayIniziali(arr){
    // creo un array vuoto 
    const iniziali = [];

    // creo un ciclo che sottrae l'iniziale di ogni stringa dell'array
    for (let i = 0; i < arr.length; i++){
        iniziali.push(arr[i][0]);
    }
    return iniziali;
        
}
// versione arrow function
const ArrayIniziali2 = arr =>{
    // creo un array vuoto 
    const iniziali2 = [];

    // creo un ciclo che sottrae l'iniziale di ogni stringa dell'array
    for (let i = 0; i < arr.length; i++){
        iniziali2.push(arr[i][0]);
    }
    return iniziali2;
        
}
// invoco l'arrow function
const inizialiNomi2 = ArrayIniziali2(names)
console.log(inizialiNomi2)

// Invoca la funzione qui e stampa il risultato in console
const inizialiNomi = ArrayIniziali(names)
console.log(inizialiNomi)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]