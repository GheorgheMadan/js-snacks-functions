/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

function salutoOrario(stringa){
    const giorno = new Date();
    let ora = giorno.getHours();
    console.log("Sono le ore: " + ora);

    if (ora <= 13) {
        console.log("Buongiorno " + stringa)
    } else if (ora <= 17 ){
        console.log("Buon pomeriggio " + stringa)
    } else {
        console.log("Buonasera " + stringa)
    }
}
// Dichiara la funzione qui.
function salutoOrario(stringa){

    const giorno = new Date();
    let ora = giorno.getHours();
    console.log("Sono le ore: " + ora);

    if (ora <= 13) {
        console.log("Buongiorno " + stringa)
    } else if (ora <= 17 ){
        console.log("Buon pomeriggio " + stringa)
    } else {
        console.log("Buonasera " + stringa)
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(salutoOrario(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.