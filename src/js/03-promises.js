const form = document.querySelector('.form');
const firstDelay = document.querySelector('input[name="delay"]');
const stepDelay = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const userDelay = parseInt(firstDelay.value);
  const userStep = parseInt(stepDelay.value);
  const userAmount = parseInt(amount.value);
  const promises = [];
  const initialPromise = createPromise(1, userDelay);

  initialPromise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled initial promise ${position} in ${delay}ms`);
      form.reset();
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected initial promise ${position} in ${delay}ms`);
      form.reset();
    });
  for (let i = 2; i <= userAmount; i += 1) {
    const position = i;
    const delay = userDelay + userStep * (i - 1);
    const promise = createPromise(position, delay);

    promise
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    promises.push(promise);
  }
  Promise.all(promises)
    .then(() => {
      console.log("All promises have settled!");
    })
    .catch((error) => {
      console.error("Error in Promise.all:", error);
    });
}
form.addEventListener("submit", handleSubmit);