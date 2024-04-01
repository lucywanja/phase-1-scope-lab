// Write your solution in this file!

//   declare customerName to be bob in global scope
var customerName = "bob";

const leastFavoriteCustomer = 'new';

// upperCaseCustomerName()
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}


// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer(){
    bestCustomer = 'not bob';
}

// overwrites the best customer
function overwriteBestCustomer(newFav){
    bestCustomer = newFav;
}

// unsuccessfully tries to reassign the least favorite customer

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'you';
}

