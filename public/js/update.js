const updateDeck = async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value.trim();
  const new_cards_per_day = document.getElementById('new_cards_per_day').value;

  const cards = document.getElementsByClassName('editCard');
  let cueCardData = [];

  for (const card of cards) {
    const form = new FormData(card);
    let data = { front: form.get('front'), back: form.get('back') };

    if (data.front && data.back) {
      if (card.dataset.cardId) {
        data.id = card.dataset.cardId;
      }
      cueCardData.push(data);
    } else {
      if (data.front) {
        alert(
          `⚠️ The card with a Front value of '${data.front}' is missing a value for the Back. \n\nPlease fill out the back of the card to proceed.`
        );
        return;
      } else if (data.back) {
        alert(
          `⚠️ The card with a Back value of '${data.back}' is missing a value for the Front. \n\nPlease fill out the front of the card to proceed.`
        );
        return;
      } else {
        // the card is empty and will be ignored.
      }
    }
  }

  const id = window.location.pathname.split('/')[2];

  const response = await fetch(`/api/decks/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
      description,
      new_cards_per_day,
      cueCardData,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    alert('Deck has been updated successfully!');
    window.location.replace('/dashboard');
  } else {
    alert('Couldnt update the deck');
  }
};
document.querySelector('#updateDeck').addEventListener('click', updateDeck);
