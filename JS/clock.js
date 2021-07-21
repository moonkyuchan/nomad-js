const clock = document.querySelector("#clock");

function showClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour} : ${minutes} : ${seconds}`;
}

showClock();
setInterval(showClock, 1000);
