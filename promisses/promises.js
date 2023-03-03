let first_Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First promise resolved');
  }, 2000);
});

first_Promise.then((message) => {
  console.log('First promise then: ' + message);
}).catch((message) => {
  console.log('First promise catch: ' + message);
});



let second_Promise = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve('Second promise resolved');
  } else {
    reject('Second promise rejected');
  }
});

second_Promise.then((message) => {
  console.log('Second promise then: ' + message);
}).catch((message) => {
  console.log('Second promise catch: ' + message);
});



