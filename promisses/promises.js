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


const userOnline = false;
const userUsingMouseJiggler = false;

function employeeIsWorking(callback, errorCallback) {
  console.log('third promise started');
  if (userOnline) {
    if (userUsingMouseJiggler) {
      errorCallback({
        status: 'Employee is cheating',
        emoticon: ':('
      });
    } else {
      callback({
        status: 'Employee is working',
        emoticon: ':)'  
      });
    }
  } else {
    errorCallback({
      status: 'Employee is not working',
      emoticon: ':('
    });
  }
}

employeeIsWorking((message) => {
  console.log(message.status + ' ' + message.emoticon);
},(error) => {
  console.log(error.status + ' ' + error.emoticon);
});


