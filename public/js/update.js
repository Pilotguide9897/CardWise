function getData(){
  const cards = document.querySelectorAll('.editCard');
   console.log(cards);
  for(let i = 0; i < cards.length; i++){
   console.log(cards[i]);
 }
}



getData();


const updateDeck = async(event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[window.location.toString().split('/').length -1];

  const name = document.getElementById('name').value;
  console.log(title);

  const description = document.getElementById('description').value.trim();
  console.log(description);

  const new_cards_per_day = document.getElementById('new_cards_per_day').value;
  console.log(new_cards_per_day);

  const response = await fetch(`/api/decks/${id}`, {
    method: 'PUT',
    body: JSON.stringify({name, description, new_cards_per_day}),
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