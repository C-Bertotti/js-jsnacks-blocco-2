/* Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while. */

// Con ciclo for
/* var numbers = [];

var sum = 0;

for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);
    numbers.push(userNumber);
    sum += numbers[i];
}

console.log(sum);
*/

// Con ciclo while
var numbers = [];

var sum = 0;

var i = 0;
while (i < 5) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber);
    numbers.push(userNumber);
    sum += numbers[i];
    i++;
}

console.log(sum);


