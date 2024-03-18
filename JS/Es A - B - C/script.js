// Funzione calcolatrice
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

// Funzione per invertire le cifre di un numero intero
function inverti_cifre(numero) {
    let numeroInvertito = parseInt(numero.toString().split('').reverse().join(''));
    return numeroInvertito;
}

// Funzione per generare il triangolo di Tartaglia
function triangoloDiTartaglia(n) {
    let triangolo = [];

    for (let i = 0; i < n; i++) {
        triangolo[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangolo[i][j] = 1;
            } else {
                triangolo[i][j] = triangolo[i - 1][j - 1] + triangolo[i - 1][j];
            }
        }
    }

    for (let i = 0; i < n; i++) {
        let spazi = ' '.repeat((n - i - 1) * 3);
        let riga = '';
        for (let j = 0; j <= i; j++) {
            riga += `${triangolo[i][j].toString().padStart(3)} `;
        }
        console.log(spazi + riga);
    }
}
// Chiamate di funzione
calcolatrice();
console.log(inverti_cifre(12345));
triangoloDiTartaglia(5);
