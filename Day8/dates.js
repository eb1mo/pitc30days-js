// dates start from jan 1, 1970
// dates are calculated in milisecond
// Temporal method can be used in future


// let myDate = new Date();

// console.log(typeof(myDate));
// date is a object

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());

// let createdDate = new Date(2024, 4, 21); // month starts from 0 in js
// console.log(createdDate);
// console.log(createdDate.toDateString());

// let createdDate = new Date(2024, 4, 21, 3, 33); // setting up date
// console.log(createdDate.toString());

// let createdDate = new Date("2024-5-21"); // month starts from 1 here
// console.log(createdDate.toLocaleDateString());

// let timeStamp = Date.now();
// // console.log(timeStamp.getTime());

// console.log(Math.floor(timeStamp/1000)); // change ms to seconds

let newDate = new Date();
// console.log(newDate.getMonth() + 1); // +1 is there to adjust date to normal understanding as js dates start from 0
// console.log(newDate.getDay() + 1);

formatedDay = newDate.toLocaleString('default', {
    weekday: "long",
    month: "long"
});

console.log(formatedDay);
