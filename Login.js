const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';

  setTimeout(() => {
    signupForm.style.opacity = 0;
    loginForm.style.opacity = 1;
  }, 10);
});

signupLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';

  setTimeout(() => {
    loginForm.style.opacity = 0;
    signupForm.style.opacity = 1;
  }, 10);
});

// document.getElementById("login_to_index").addEventListener('click', function(){
//   window.location.href = 'index.HTML'
// })
// document.getElementById("signup_to_index").addEventListener('click', function(){
//   window.location.href = 'index.HTML'
// })

function btnsignup() {
  var new_username = document.getElementById("new-username").value;
  var username_Error = document.getElementById("username_Error");
  var name_regexp = /[a-z]{3,}[0-9]{0,}/
  var name_input_check = name_regexp.test(new_username)
  var email = document.getElementById("new-email").value;
  var email_error = document.getElementById("email_Error");
  var email_regexp = /[a-z]{3,}[0-9]{0,}@[a-z]{4,}.[a-z]{2,}/;
  var email_input_check = email_regexp.test(email);
  var password = document.getElementById("new-password").value;
  var pass_error = document.getElementById("pass_Error");
  var pass_regexp = /.{8,}/;
  var pass_input_check = pass_regexp.test(password);
  if (new_username == "") {
    username_Error.innerHTML = '*write the name here*'
  }
  else if (!name_input_check) {
    username_Error.innerHTML = '*write correct name*'
  }
  else if (email == "") {
    email_error.innerHTML = "*write email here"
  }
  else if (!email_input_check) {
    email_error.innerHTML = "*write correct email "
  }
  else if (password == "") {
    pass_error.innerHTML = "*write password here"
  }
  else if (!pass_input_check) {
    pass_error.innerHTML = "*password must contain atleast 8 characters "
  }
  else {
    // Check if data already exists in local storage
    let existingData = localStorage.getItem("userdata");
    let dataArray = [];

    if (existingData) {
      // If data exists, parse it to an array
      dataArray = JSON.parse(existingData);
      var userData = {
        new_username: new_username,
        email: email,
        password: password,
        user_f: new_username.charAt(0),
      };

      // console.log(user_f)

      var fetched = dataArray.some(
        (x) => x.email == email && x.password == password
      );

      if (fetched) {
        alert("user already exist, try to log in");
        document.getElementById("signupForm").reset();
        username_Error.innerHTML = ''
        email_error.innerHTML = ''
        pass_error.innerHTML = ''
      } else {
        dataArray.push(userData);
        localStorage.setItem("userdata", JSON.stringify(dataArray));
        localStorage.setItem("current_user", userData.user_f);
        document.getElementById("signupForm").reset();

        alert("Sign up successful!");
        // document.write(userData.user_f)
        window.location.href = "index.HTML";
      }
    } else {
      var userData = {
        new_username: new_username,
        email: email,
        password: password,
        user_f: new_username.charAt(0),
      };
      dataArray.push(userData);
      localStorage.setItem("userdata", JSON.stringify(dataArray));
      localStorage.setItem("current_user", userData.user_f);
      alert("Sign up successful!");
      window.location.href = "index.HTML";

      document.getElementById("signupForm").reset();
    }
  }
}

// document.getElementById('signupForm').addEventListener('submit', handleFormSubmit);
function loginbtn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (!email || !password) {
    alert("Please fill out all fields.");
    return;
  } else {
    var userdata = JSON.parse(localStorage.getItem("userdata"));
    var fetched = userdata.some(
      (x) => x.email == email && x.password == password
    );
    if (fetched) {
      var current_user = userdata.filter(
        (x) => x.email == email && x.password == password
      )[0];
      localStorage.setItem("current_user", current_user.user_f);
      window.location.href = "index.HTML";
      alert("Login successful!");
    } else {
      alert("Login failed. Invalid email or password.");
    }
  }
}
