const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");
  
  if (height <= 0 ||  isNaN(height)) {
    result.innerHTML = `<span> Enter valid Height </span>`;
  } else if (weight <= 0 || isNaN(weight)) {
    result.innerHTML = `<span> Enter valid weight </span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `<span> Your BMI is: ${bmi}. You are Underweight. </span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `<span> Your BMI is: ${bmi}. Your BMI is in normal range. </span>`;
    } else {
      result.innerHTML = `<span> Your BMI is: ${bmi}. Your are overweight. </span>`;
    }
  }
});
