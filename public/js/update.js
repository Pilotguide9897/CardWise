const getCards = async() => {
  const id = window.location.toString().split('/')[window.location.toString().split('/').length -1];
  let url = `/api/decks/${id}`;

  fetch(url)
    .then(response => {
      return response;
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });

};
getCards();

const renderCard = async() => {

  let card = `<div class="pure-u-1">
  <form>
  <label for="front">Term: </label>
  <input type="text" id="front" name="front" placeholder="hi">
  <label for="back">Definition: </label>
  <input type="text" id="back" name="back" placeholder="hi">
  <button id="delCard">Delete</button>
  </form>
</div>`;
  console.log(card);
}


const updateDeck = async(event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[window.location.toString().split('/').length -1];

  const title = document.getElementById('title').value.trim();
  console.log(title);

  const description = document.getElementById('description').value.trim();
  console.log(description);

  const new_cards_per_day = document.getElementById('new_cards_per_day').value;

  const response = await fetch(`/api/decks/${id}`, {
    method: 'PUT',
    body: JSON.stringify({title, description, new_cards_per_day, cards}),
    headers: {
      'Content-Type': 'application/json',
    } });
  if(response.ok){
    doucment.location.replace('/dashboard');
  } else {
    alert('Couldnt update the deck');
  }

};
document.querySelector('#updateDeck').addEventListener('click', updateDeck);