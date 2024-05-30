// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that runs as soon as it is defined.
// used to prevent function getting pollutd from global scopes.

(function dbcon() {
    console.log("DB Connected");
})(); // ; is required to seperate one scope from another
// first () is function defination & second () is execution call

// dbcon();

(function dbcon() { //named iife
    console.log("Second DB Connected");
})();

(() => { //unnamed iife
    console.log("Third DB Connected")
})();

((dbname) => { //iife with parameters
    console.log(`${dbname} DB Connected`);
})("Master")

