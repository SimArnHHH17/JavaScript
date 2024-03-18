/* 1 ) Scrivere una semplice applicazione calcolatrice. Chiedere all'utente due numeri e una stringa che rappresenta un'operazione matematica, uno tra "+", "-", "*", "/", "**". 
Se l'input dell'utente è valido, calcola il risultato e lo mostra all'utente. 
Se l'input dell'utente non è valido, visualizza un messaggio che informa l'utente che si è verificato un errore. 
*/
function calcolatrice() {
    // Richiedi all'utente di inserire due numeri e un operatore
    let num1 = parseFloat(prompt("Inserisci il primo numero:")); //metodo parse analizza un valore come una stringa e restituisce il primo numero.
    let num2 = parseFloat(prompt("Inserisci il secondo numero:")); //metodo parse analizza un valore come una stringa e restituisce il primo numero.
    let operatore = prompt("Inserisci l'operatore (+, -, *, /, **):");

    let risultato;

    // Utilizza uno switch per eseguire l'operazione corrispondente all'operatore inserito
    switch (operatore) {
        case "+":
            risultato = num1 + num2;
            break;
        case "-":
            risultato = num1 - num2;
            break;
        case "*":
            risultato = num1 * num2;
            break;
        case "/":
            risultato = num1 / num2;
            break;
        case "**":
            risultato = Math.pow(num1, num2); // Calcola la potenza utilizzando Math.pow
            break;
        default:
            alert("Operatore non valido!"); // Se l'operatore non è valido, mostra un messaggio di errore
            return; // Esci dalla funzione
    }
    // Mostra il risultato all'utente
    alert("Il risultato è: " + risultato);
}
// 2) Scrivere una funzione chiamata "inverti_cifre" che prende in input un numero intero e lo restituisce con le cifre invertite .

function inverti_cifre(numero) 
{
    // Converti il numero in una stringa, quindi in un array di caratteri, inverti l'array e riuniscilo in una stringa
    let numeroInvertito = parseInt(numero.toString().split('').reverse().join(''));
    return numeroInvertito; // Restituisci il numero invertito
}


// Chiamate di funzione
calcolatrice();
console.log(inverti_cifre(12345));
