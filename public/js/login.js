// Client side logic for processing login and signup forms.
const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const signUpHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) { // Check if name is not empty
    const response = await fetch('/api/users/new', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert("new user created");
      document.location.replace('/dashboard');
    } else {
      console.log('Response:', response);
      alert(response.statusText);
    }
  }
};

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', loginHandler);
}

const signUpForm = document.getElementById('signupForm');
if (signUpForm) {
  signUpForm.addEventListener('submit', signUpHandler);
}

