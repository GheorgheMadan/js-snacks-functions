/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contaVocali(parola){

    // creo una array che contiene tutte le vocali possibili
    const vocali = ["a", "e", "i", "o", "u"];

    //creo una variabile contatore 
    let numeriVocali = 0;

    // creo una array dove verranno inserite le vocali trovate 
    let vocaliTrovate = []

    // creo il ciclo di ricerca delle vocale 
    for(let i = 0; i < parola.length; i++){

        // se la parola inserita contiene una vocale che si trova nell'array allora la aggiungo alla variabile numeriVocali
        if(vocali.includes(parola[i])){
            numeriVocali++;

            // una volta trovate le vocali le aggiungo nell'array vuoto 
            vocaliTrovate.push(parola[i]);
        }
    } 
    return numeriVocali + " (" + vocaliTrovate.join(", ") + ")";

}
// Invoca la funzione qui e stampa il risultato in console
console.log(contaVocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)