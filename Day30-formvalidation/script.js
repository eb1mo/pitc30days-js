const form = document.querySelector("form");
const name = document.getElementById("name");
const dob = document.getElementById("dob");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
const agree = document.getElementById("agree");
const gender = document.querySelectorAll("input[name='gender']");
const os = document.querySelector("select[name='os']");
const sign = document.getElementById("sign");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

let errorMsg = document.querySelectorAll(".error");

const namePattern = /^[a-z A-Z\s]+$/;
const phonePattern = /^[0-9]{10}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Clear previous error messages
  errorMsg.forEach((element) => {
    element.innerHTML = "";
  });

  // Validate Name
  if (!namePattern.test(name.value)) {
    errorMsg[0].innerHTML = `*Name is not valid. Only alphabets & spaces are allowed.`;
    isValid = false;
  }

  // Validate DOB
  if (dob.value === "") {
    errorMsg[1].innerHTML = `*DOB is required`;
    isValid = false;
  }

  // Validate Phone
  if (!phonePattern.test(phone.value)) {
    errorMsg[2].innerHTML = `*Phone no is not valid. Must contain exactly 10 digits`;
    isValid = false;
  }

  // Validate Email
  if (!emailPattern.test(email.value)) {
    errorMsg[3].innerHTML = `*Invalid email. Must contain @`;
    isValid = false;
  }

  // Validate Password
  if (!passPattern.test(pass.value)) {
    errorMsg[4].innerHTML = `*Password is not secure. It must be at least 8 characters long, contain at least one digit, one lowercase and one uppercase letter.`;
    isValid = false;
  }

  // Confirm Password
  if (pass.value !== cpass.value) {
    errorMsg[5].innerHTML = `*Passwords don't match`;
    isValid = false;
  }

  // Validate Gender
  const male = document.querySelector("input[value='Male']");
  const female = document.querySelector("input[value='Female']");
  const others = document.querySelector("input[value='Others']");

  if(!male.checked && !female.checked && !others.checked) {
    errorMsg[6].innerHTML=`*Select any one Gender`;
    isValid = false;
  }

  // Validate Preferred OS
  if (os.value === "Choose an OS") {
    errorMsg[7].innerHTML = `*Select at least one OS`;
    isValid = false;
  }

  // Validate Agreement to T&C
  if (!agree.checked) {
    errorMsg[8].innerHTML = `*You must agree to the T&C`;
    isValid = false;
  }

  // Validate Signature Upload
  if (sign.files.length === 0) {
    errorMsg[9].innerHTML = `*Please upload a file.`;
    isValid = false;
  }

  // Prevent form submission if validation fails
  if (!isValid) {
    e.preventDefault();
  } else {
    form.submit(); 
  }
});
