const clock = document.querySelector('.clock');

const tick = () => {

  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  clock.innerHTML = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;

};

setInterval(tick, 1000);