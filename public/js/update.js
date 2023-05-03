// Delete Button Update Page:
const button = document.querySelectorAll('.delCard');
console.log(button);
button.forEach(function async(btn){
  btn.addEventListener('click', async function(e) {
    e.preventDefault();
    let id = e.target.value;
    console.log(id);
    if(id){
      console.log('Matches');
      const response = await fetch(`/api/cards/${id}`, {
        method: 'DELETE',
      }
      );
      window.location.reload();
      if(response.ok){
        console.log('response is ok');
      } else {
        console.log('couldnt update');
      }
    } else {
      console.log('Did not match');
    }
  }
  );
});

const updateDeck = async(event) => {

  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value.trim();
  const new_cards_per_day = document.getElementById('new_cards_per_day').value;

  const cards = document.querySelectorAll('.editCard');
  console.log(cards);
  let cardData = [];
  console.log(cardData);
  for(let i = 0; i < cards.length; i++){
    let front = cards[i][0].value;
    let back = cards[i][1].value;
    cardData.push({front, back});
  }

  const id = window.location.pathname.split('/')[2];

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






