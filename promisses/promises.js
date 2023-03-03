let first_Promise = new Promise((resolve, reject) => {
  console.log('# First promise started');
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
  console.log('# Second promise started');
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

// Call back function
const userOnline = false;
const userUsingMouseJiggler = false;

function employeeIsWorking(callback, errorCallback) {
  console.log('# callback function started');
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
  console.log('Callback then: ' + message.status + ' ' + message.emoticon);
}, (message) => {
  console.log('Callback catch: ' + message.status + ' ' + message.emoticon);
});


// Promise version

function employeeIsWorkingPromise() {
  console.log('# Third Promise started');
  return new Promise((resolve, reject) => {
    if (userOnline) {
      if (userUsingMouseJiggler) {
        reject({
          status: 'Employee is cheating',
          emoticon: ':('
        });
      } else {
        resolve({
          status: 'Employee is working',
          emoticon: ':)'  
        });
      }
    } else {
      reject({
        status: 'Employee is not working',
        emoticon: ':('
      });
    }
  });
}

employeeIsWorkingPromise().then((message) => {
  console.log('Third Promise then: ' + message.status + ' ' + message.emoticon);
}).catch((message) => {
  console.log('Third Promise catch: ' + message.status + ' ' + message.emoticon);
});

const task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Task 1 completed');
  }, 3000);
});

const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Task 2 completed');
  }, 2000);
});

const task3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Task 3 not completed');
  }, 1000);
});

Promise.all([
  task1,
  task2,
  task3,
]).then((message) => {

  console.log(message);
}).catch((message) => {
  console.log('Error: ' + message);
});

Promise.race([
  task1,
  task2,
  task3,
]).then((message) => {
  
    console.log(message);
  }).catch((message) => {
    console.log(message);
  }).catch((message) => {
    console.log('Error: ' + message);
  });


