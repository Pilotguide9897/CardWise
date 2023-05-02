const updateDeck = async(event) => {

  event.preventDefault();

  const id = window.location.toString().split('/')[window.location.toString().split('/').length -1];

  const name = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
<<<<<<< HEAD
=======
  const front = document.getElementById('front').value.trim();
  const back = document.getElementById('back').value.trim();

  const response = await fetch(`/api/decks/${id}`, {
    method: 'PUT',
    body: JSON.stringify({name, description, front, back}),

  const name = document.getElementById('name').value;

  const description = document.getElementById('description').value.trim();
>>>>>>> 6b9f5a7 (More done)

  const new_cards_per_day = document.getElementById('new_cards_per_day').value;

  const cards = document.querySelectorAll('.editCard');
  let cardData = [];
  for(let i = 0; i < cards.length; i++){
    let front = cards[i][0].value;
    let back = cards[i][1].value;
    cardData.push({front, back});
  }
<<<<<<< HEAD

=======
  console.log(cardData);
>>>>>>> 6b9f5a7 (More done)

  const response = await fetch(`/api/decks/${id}`, {
    method: 'PUT',
    body: JSON.stringify({name, description, new_cards_per_day, cardData}),
    headers: {
      'Content-Type': 'application/json',
    } });
  if(response.ok){
    window.location.replace('/dashboard');
  } else {
    alert('Couldnt update the deck');
  }
};
document.querySelector('#updateDeck').addEventListener('click', updateDeck);

