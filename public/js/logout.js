// Client side logic for processing logout.
const logoutHandler = async () => {
  const response = await fetch('/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

const logoutForm = document.getElementById('logoutButtonId'); //need to add correct id.
logoutForm.addEventListener('click', logoutHandler);
