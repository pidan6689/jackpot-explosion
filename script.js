function showAmount() {
  const jackpot = document.getElementById('jackpot');
  const amount = Math.floor(Math.random() * 900000 + 100000); // $100,000 - $999,999
  jackpot.textContent = "$" + amount.toLocaleString();
}

function playSound() {
  const audio = document.getElementById('bgm');
  audio.play();
}

window.onload = () => {
  showAmount();
  playSound();
  setInterval(showAmount, 5000); // 每5秒更新金额
};
