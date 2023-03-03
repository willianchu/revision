function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Location Making Request to ${location}`);
        if (location === 'Google') {
            resolve('Location Google says hi');
        } else {
            reject('Location We can only talk to Google');
        }
    });
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Location Processing response');
        resolve(`Location Extra information + ${response}`);
    });
}

makeRequest('Google').then(response => {
    console.log('Location Response Received');
    return processRequest(response);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(err => {
    console.log(err);
});


// ## buying tickets


let availableTickets = 10;

function requestTickets(quantity) {
    return new Promise((resolve, reject) => {
        if (quantity > availableTickets) {
            reject('Tkts Not enough tickets');
        } else {
            availableTickets -= quantity;
            resolve(quantity);
        }
    });
}

function ProcessingRequest(quantity) {
    return new Promise((resolve, reject) => {
        console.log('Tkts Processing request');
        if(availableTickets - quantity < 0) {
          reject('Tkts Sorry Sold Out');
        } else {
          availableTickets -= quantity;
        resolve(`Tkts You bought ${quantity} tickets`);
        }
    });
}

requestTickets(5).then(quantity => {
    console.log('Tkts Request Received');
    return ProcessingRequest(quantity);
}).then(processedResponse => {
    console.log(processedResponse);
}).catch(err => {
    console.log(err);
});


// ## buying tickets with async await

