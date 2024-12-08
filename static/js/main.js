const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.priority = Math.random();
alice2.priority = Math.random();
alice3.priority = Math.random();

let aliceList = [alice1, alice2, alice3];
aliceList.sort((a, b) => (b.priority - a.priority));

aliceList[0].animate(aliceTumbling, aliceTiming).finished
  .then((response) => aliceList[1].animate(aliceTumbling, aliceTiming).finished)
  .then((response) => aliceList[2].animate(aliceTumbling, aliceTiming).finished);