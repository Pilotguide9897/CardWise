// Client side logic for card creation
const addCardButton = document.getElementById('add-cue-card');
const createButton = document.getElementById('create');
const cueCardContainer = document.getElementById('cue-card-container');

let cueCardCount = 5;

function addCard() {
  cueCardCount++;
  const cueCardForm = document.createElement('form');
  cueCardForm.setAttribute('id', `cue-card-form-${cueCardCount}`);

  cueCardForm.innerHTML = `
    <label for="front-${cueCardCount}">Front:</label>
    <input type="text" id="front-${cueCardCount}" name="front-${cueCardCount}">
    <label for="back-${cueCardCount}">Back:</label>
    <input type="text" id="back-${cueCardCount}" name="back-${cueCardCount}">
    <label for="deck-id-${cueCardCount}">Deck ID:</label>
    <input type="number" id="deck-id-${cueCardCount}" name="deck-id-${cueCardCount}">
  `;

  cueCardContainer.appendChild(cueCardForm);
}

async function createCueCards() {
  const cueCardData = [];

  for (let i = 1; i <= cueCardCount; i++) {
    const front = document.querySelector(`#front-${i}`).value.trim();
    const back = document.querySelector(`#back-${i}`).value.trim();
    const deckId = document.querySelector(`#deck-id-${i}`).value.trim();

    if (front && back && deckId) {
      cueCardData.push({ front, back, deckId });
    } else {
      alert(`Please fill in all fields for cue card ${i}.`);
      return;
    }
  }

  const response = await fetch('/api/decks/cuecards', { // We may need to modify the last parameter of the route to make it reflect the actual route that we will be using for creating a new deck.
    method: 'POST',
    body: JSON.stringify(cueCardData),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('New deck successfully saved!');
  } else {
    alert(response.statusText);
  }
}

addCardButton.addEventListener('click', addCard);
createButton.addEventListener('click', createCueCards);

// Create initial cue cards
const initialCueCardCount = cueCardCount;
for (let i = 0; i < initialCueCardCount; i++) {
  addCard();
}
