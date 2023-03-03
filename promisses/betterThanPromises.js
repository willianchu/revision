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


// ## Google request with async await

async function firstAwait() {
    try {
        const response = await makeRequest('Google');
        console.log('Async Location Response Received');
        const processedResponse = await processRequest(response);
        console.log('Async Location response: ',processedResponse);
    } catch (err) {
        console.log('Async Location error: ',err);
    }
}

firstAwait();

// ##Buying tickets with async await

async function secondAwait() {
    try {
        const quantity = await requestTickets(5);
        console.log('Async Tkts Request Received');
        const processedResponse = await ProcessingRequest(quantity);
        console.log('Async Tkts response: ',processedResponse);
    } catch (err) {
        console.log('Async Tkts error: ',err);
    }
}

secondAwait();
secondAwait();

