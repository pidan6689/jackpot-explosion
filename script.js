
function getRandomAmount() {
  return "$" + Math.floor(Math.random() * 900000 + 100000).toLocaleString();
}

function createJackpotElement() {
  const div = document.createElement("div");
  div.className = "jackpot";
  div.textContent = getRandomAmount();
  div.style.left = Math.random() * 60 + 20 + "%";
  div.style.top = Math.random() * 40 + 30 + "%";
  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 1500);
}

setInterval(() => {
  for (let i = 0; i < 10; i++) {
    setTimeout(createJackpotElement, i * 100);
  }
}, 1000);
