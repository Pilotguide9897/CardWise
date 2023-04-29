const updateDeck = async(event) => {
  event.preventDefault();
  const id = window.location.toString().split('/')[window.location.toString().split('/').length -1];
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const front = document.getElementById('front').value.trim();
  const back = document.getElementById('back').value.trim();

  const response = await fetch(`/api/ /${id}`, {
    method: 'PUT',
    body: JSON.stringify({title, description, front, back}),
    headers: {
        'Content-Type': 'application/json'
    }
    if(response.ok){
        doucment.location.replace('/dashboard');
    } else {
        alert('Couldnt update the deck');
    }
  })

};
document.querySelector('#updateDeck').addEventListener('click', updateDeck);