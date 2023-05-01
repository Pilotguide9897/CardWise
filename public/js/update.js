const updateDeck = async(event) => {

  event.preventDefault();

  const id = window.location.toString().split('/')[window.location.toString().split('/').length -1];

  const name = document.getElementById('name').value;

  const description = document.getElementById('description').value.trim();

  const new_cards_per_day = document.getElementById('new_cards_per_day').value;

  const cards = document.querySelectorAll('.editCard');
  let cardData = [];
  for(let i = 0; i < cards.length; i++){
    let front = cards[i][0].value;
    let back = cards[i][1].value;
    cardData.push({front, back});
  }
  console.log(name);
  console.log(description);
  console.log(new_cards_per_day);
  console.log(cardData);

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