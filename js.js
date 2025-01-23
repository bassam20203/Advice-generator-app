const id = document.querySelector(".id");
const advice = document.querySelector(".advice");
const refresh = document.querySelector(".refresh");
 async function add() {
  const res = await fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) =>   {id.textContent = `ADVICE #${data.slip.id}`;
  advice.textContent = data.slip.advice});




}

refresh.addEventListener('click' , add)
window.onload = add