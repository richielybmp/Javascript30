
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
 const agora = new Date();
 const segundos = agora.getSeconds();
 const grausSegundos = ((segundos/60) * 360) + 90;
 secondHand.style.transform = `rotate(${grausSegundos}deg)`;
 
 const minutos = agora.getMinutes();
 const grauMinutos = ((minutos/60) * 360) + 90;
 minHand.style.transform = `rotate(${grauMinutos}deg)`;

 const horas = agora.getHours();
 const grauHoras = ((horas/12) * 360) + 90;
 hourHand.style.transform = `rotate(${grauHoras}deg)`;
}

setInterval(setDate, 1000);