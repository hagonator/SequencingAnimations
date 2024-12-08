const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceRetumbling = [
  { transform: 'rotate(360deg) scale(0)' },
  { transform: 'rotate(0) scale(1)' }
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

/** callback hell **/
// aliceList[0].animate(aliceTumbling, aliceTiming).finished.then((response) => {
  // aliceList[1].animate(aliceTumbling, aliceTiming).finished.then((response) => {
    // aliceList[2].animate(aliceTumbling, aliceTiming).finished.then((response) => {
      // aliceList[0].animate(aliceRetumbling, aliceTiming);
    // });
  // });
// });

/** promise chain **/
// aliceList[0].animate(aliceTumbling, aliceTiming).finished
  // .then((response) => aliceList[1].animate(aliceTumbling, aliceTiming).finished)
  // .then((response) => aliceList[2].animate(aliceTumbling, aliceTiming).finished)
  // .then((response) => aliceList[0].animate(aliceRetumbling, aliceTiming));
  
/** async and await **/
async function doAnimation() {
  for (let alice of aliceList) {
    await alice.animate(aliceTumbling, aliceTiming).finished;
  }
}

doAnimation().then((response) => aliceList[0].animate(aliceRetumbling, aliceTiming));
