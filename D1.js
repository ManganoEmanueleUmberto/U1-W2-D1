/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* In Javascript esistono 3 tipi fondamentali di dati: 
    -Numeri -> Indicano qualunque tipo di numero -> 1 10 100 1000.3 10000.48 ecc...
    -Stringhe -> Qualsiasi insieme di caratteri inserito tra due '' o "".
    -Boolean -> Puo assumere due valori: true o false. Principalmente viene usato per verificare una condizione (
                10 > 20 -> false, 20 > 10 true).

    Inoltre esistono altri due tipi:
      -Undefined -> Viene assegnato ad una variabile quando è priva di valore, per esempio quando viene creata
                    e non gli viene assegnato nessun valore
      -Null -> Valore assegnato ad una variabile (let b = null ) per indicare che è vuota
      */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//let myName = "Emanuele"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//let sum = 12 + 20

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
//let x = 12

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
  myName = "Mangano"
  const impossibleToChange = "Non si puo cambiare"
  impossibleToChange = "Darà errore in console"
  */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//let subtraction = x - 4

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
let name1 = "john"
let name2 = "John"
name1 === name2
  ? console.log("Le due stringhe ", name1, " ", name2, " sono uguali")
  : console.log("Le due stringhe ", name1, " ", name2, " non sono uguali")
*/

/*
EXTRA

let name1 = "john"
let name2 = "John"
name1.toLowerCase() === name2.toLowerCase()
  ? console.log(
      "Le due stringhe ",
      name1.toLowerCase(),
      " ",
      name2.toLowerCase(),
      " sono uguali"
    )
  : console.log(
      "Le due stringhe ",
      name1.toLowerCase(),
      " ",
      name2.toLowerCase(),
      " non sono uguali"
    )
*/
