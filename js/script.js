/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//Chiedere km ed età
alert("Il Prezzo del biglietto è calcolato con 0.21€ per ogni kilometro percorso. Se sei minorenne avrai il 20% di sconto. Se hai più di 65 anni lo sconto sarà del 40%.")
const userKm = parseInt(prompt("Quanti kilometri devi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
//Calcolo prezzo del biglietto
const ticketPrice = (0.21 * userKm);
//Definisco se l'utente rientra nello sconto
let price = ticketPrice;
if (userAge < 18) {
    price = ticketPrice - ticketPrice * 0.20;
    alert("Sei fortunato! Hai il 20% di sconto!");
} else if (userAge > 65) {
    price = ticketPrice - ticketPrice * 0.40;
    alert("Sei fortunato! Hai il 40% di sconto!");
};
//Output con due decimali
let priceFixed = price.toFixed(2);
userMessage =("Il prezzo del biglietto è " + priceFixed + ("€"));
document.getElementById('price-text').innerHTML = userMessage;