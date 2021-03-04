/* Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while. */

// Con ciclo for
/* 
var sum = 0;

for (var i = 0; i < 5; i++) {
    do {
        var userNumber = parseInt(prompt('Inserisci un numero'));
    } while ( isNan(userNumber) );
    
    console.log(userNumber);
   
    sum += userNumber;
}

console.log(sum);
*/

// Con ciclo while

var sum = 0;
var userNumber;

var i = 0;
while (i < 5) {
    do {
        userNumber = parseInt(prompt('Inserisci un numero'));
    } while ( isNaN(userNumber) );
    
    console.log(userNumber);
    sum += userNumber;
    i++;
}

console.log(sum);


