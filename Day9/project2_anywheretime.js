alert("Welcome to AnywhereTime!");
let timezone = prompt("Enter Region & country in Region/Country format you want to know the time of: ");
try {
    const settings = {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], settings);
      const date = new Date();
      const formattedTime = formatter.format(date);
      
      console.log(formattedTime);
      alert(`Timezone of ${timezone} is ${formattedTime}`);
} catch (error) {
    alert(`Check your input of Region/Country format & try again.`);
}





// let region = "Europe";

// const options = {
//   timeZone: region,
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: false,
// };

// console.log(options);

// formatedDay = newDate.toLocaleString('default', {
//     weekday: "long",
//     month: "long"
// });
