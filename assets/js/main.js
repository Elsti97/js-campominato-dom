// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const griglia = document.getElementById("griglia");
console.log(griglia);

let punteggi = document.getElementById("punti");

let arrayBombe = [];
const punteggio = 0;

for( let k = 0; k < 16; k++){
  let numeroRandom = Math.round(Math.random() * (100 - 1 + 1)) + 1;
  if( arrayBombe.includes(numeroRandom)){
      k--;
  }else{
      arrayBombe.push(numeroRandom);
  }
}

console.log(arrayBombe);


function play(){
  document.getElementById("griglia").innerHTML = '';
  
  function creazioneQuadrato(){
    const div = document.createElement("div");
    div.classList.add("quadrato");

    return div;
  }

  console.log(creazioneQuadrato());

  let somma = 0;

  for(let i = 1; i<= 100; i++){
    let elementoCorrente = creazioneQuadrato();
    elementoCorrente.innerHTML += i;
    console.log(elementoCorrente);

    elementoCorrente.addEventListener('click', function(){
      console.log(this);
      this.classList.add('active');

      let numBomba = parseInt(this.innerText);

      if (arrayBombe.includes(numBomba)) {
        this.classList.add("bomba");
        punteggi.innerHTML = ("Hai perso");
        alert(`Hai perso, il tuo punteggio è ${somma}`);
        location.reload();
      } else {
        somma ++;
        punteggi.innerHTML = (`Il tuo punteggio è ${somma}`);
      }
    })
    griglia.append(elementoCorrente);
  }
}

