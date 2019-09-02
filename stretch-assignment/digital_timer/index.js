const digits = document.querySelector(".digits");

function init() {
  const secondOnes = document.getElementById("secondOnes");
  const secondTens = document.getElementById("secondTens");
  const hundreds = document.getElementById("msHundreds");
  const tens = document.getElementById("msTens");
  hundreds.textContent = 0;
  tens.textContent = 0;
  secondOnes.textContent = 0;
  secondTens.textContent = 0;
}

function startCounting() {
  const secondOnes = document.getElementById("secondOnes");
  const secondTens = document.getElementById("secondTens");
  const hundreds = document.getElementById("msHundreds");
  const tens = document.getElementById("msTens");
  const timerInterval = setInterval(() => {
    tens.textContent = Number(tens.textContent) + 1;
    if (Number(tens.textContent) === 10) {
      tens.textContent = 0;
      hundreds.textContent = Number(hundreds.textContent) + 1;
      if (Number(hundreds.textContent) === 10) {
        hundreds.textContent = 0;
        secondOnes.textContent = Number(secondOnes.textContent) + 1;
        if (Number(secondOnes.textContent) === 10) {
          secondTens.textContent = 1;
          secondOnes.textContent = 0;
          digits.style.color = "red";
          clearInterval(timerInterval);
        }
      }
    }
  }, 10);
}

init();
startCounting();
