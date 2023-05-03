const addCardButton = document.getElementById('add-cue-card');
const createButton = document.getElementById('create');
const cueCardContainer = document.getElementById('cue-card-container');

let cueCardCount = 0;

function addCard() {
  cueCardCount++;
  const cueDiv = document.createElement('div');
  cueDiv.setAttribute('class', 'pure-g cardDiv updatePartial');
  const cueCardForm = document.createElement('form');
  cueCardForm.setAttribute('id', `cue-card-form-${cueCardCount}`);
  cueCardForm.setAttribute('class', 'pure-u-1 cardForm');

  cueCardForm.innerHTML = `
    <label for="front">Front: </label>
    <input type="text" class="card-front" name="front">
    <label for="back">Back: </label>
    <input type="text" class="card-back" name="back">
    <button class="delCard">Delete</button>
  `;
  cueDiv.appendChild(cueCardForm);
  cueCardContainer.appendChild(cueDiv);
}

async function createCueCards() {
  const cueCardData = [];

  for (const card of cueCardContainer.children) {
    const form = card.children[0];
    const data = new FormData(form);

    const cardFront = data.get('front');
    const cardBack = data.get('back');

    if (cardFront && cardBack) {
      cueCardData.push({ front: cardFront, back: cardBack });
    } else {
      if (cardFront) {
        alert(
          `⚠️ The card with a Front value of '${cardFront}' is missing a value for the Back. \n\nPlease fill out the back of the card to proceed.`
        );
        return;
      } else if (cardBack) {
        alert(
          `⚠️ The card with a Back value of '${cardBack}' is missing a value for the Front. \n\nPlease fill out the front of the card to proceed.`
        );
        return;
      } else {
        // the card is empty and will be ignored.
      }
    }
  }

  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const new_cards_per_day = document.querySelector('#cardsPerDay').value;

  if (name.trim().length <= 0) {
    alert('Deck name is a required field.');
    return;
  }

  const response = await fetch('/api/decks', {
    method: 'POST',
    body: JSON.stringify({
      name,
      description,
      new_cards_per_day,
      cueCardData,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('New deck saved!');
    window.location.replace('dashboard');
  } else {
    alert(response.statusText);
  }
}

if (addCardButton) {
  addCardButton.addEventListener('click', addCard);
}

if (createButton) {
  createButton.addEventListener('click', createCueCards);
}

// Create initial cue cards
const initialCueCardCount = 5;
for (let i = 0; i < initialCueCardCount; i++) {
  console.log('NEW CARD PLZ');
  addCard();
}
