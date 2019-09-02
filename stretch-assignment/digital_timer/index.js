// const digits = document.querySelector(".digits");

// const secondOnes = document.getElementById("secondOnes");
// const secondTens = document.getElementById("secondTens");
// const hundreds = document.getElementById("msHundreds");
// const tens = document.getElementById("msTens");

// function init() {
//   hundreds.textContent = 0;
//   tens.textContent = 0;
//   secondOnes.textContent = 0;
//   secondTens.textContent = 0;
// }

// function startCounting() {
// //   const hundreds = document.getElementById("#msHundreds");
// //   const tens = document.getElementById("#msTens");
//     let count = 0;
//   const timerInterval = setInterval(() => {
//     hundreds.textContent = Number(hundreds.textContent) + 1;
//     // console.log(typeof hundreds.textContent);
//     if (Number(hundreds.textContent) === 6) {
//       hundreds.textContent = 0;
//       secondOnes.textContent = Number(secondOnes.textContent) + 1;

//       if (Number(secondOnes.textContent) === 9) {
//         secondTens.textContent = 1;
//         secondOnes.textContent = 0;
//         clearInterval(timerInterval);
//       }
//     }
//   }, 10);
// }

// init();
// startCounting();
