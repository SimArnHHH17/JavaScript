/*Scrivere una semplice applicazione calcolatrice. Chiedere all'utente due numeri e una stringa che rappresenta un'operazione matematica, uno tra "+", "-", "*", "/", "**". 
Se l'input dell'utente è valido, calcola il risultato e lo mostra all'utente. 
Se l'input dell'utente non è valido, visualizza un messaggio che informa l'utente che si è verificato un errore. 
*/
function calcolatrice() {
    let num1 = parseFloat(prompt("Inserisci il primo numero:"));
    let num2 = parseFloat(prompt("Inserisci il secondo numero:"));
    let operatore = prompt("Inserisci l'operatore (+, -, *, /, **):");

    let risultato;

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
            risultato = Math.pow(num1, num2);
            break;
        default:
            alert("Operatore non valido!");
            return;
    }

    alert("Il risultato è: " + risultato);
}

// Scrivere una funzione chiamata "inverti_cifre" che prende in input un numero intero e lo restituisce con le cifre invertite .
function inverti_cifre(numero) {
    let numeroInvertito = parseInt(numero.toString().split('').reverse().join(''));
    return numeroInvertito;
}

// Chiamate di funzione
calcolatrice();
console.log(inverti_cifre(12345));
