const addCardButton = document.getElementById('add-cue-card');
const createButton = document.getElementById('create');
const cueCardContainer = document.getElementById('cue-card-container');

let cueCardCount = 0;

function addCard() {
  cueCardCount++;
  const cueDiv = document.createElement('div');
  cueDiv.setAttribute('class', 'pure-g cardDiv');
  const cueCardForm = document.createElement('form');
  cueCardForm.setAttribute('id', `cue-card-form-${cueCardCount}`);
  cueCardForm.setAttribute('class', 'pure-u-1 cardForm');

  cueCardForm.innerHTML = `
    <label for="front-${cueCardCount}">Term: </label>
    <input type="text" id="front-${cueCardCount}" name="front-${cueCardCount}">
    <label for="back-${cueCardCount}">Definition: </label>
    <input type="text" id="back-${cueCardCount}" name="back-${cueCardCount}">
  `;
  cueDiv.appendChild(cueCardForm);
  cueCardContainer.appendChild(cueDiv);
}
addCard();

async function createCueCards() {
  const cueCardData = [];

  for (let i = 1; i <= cueCardCount; i++) {
    const front = document.querySelector(`#front-${i}`).value.trim();
    const back = document.querySelector(`#back-${i}`).value.trim();

    if (front && back) {
      cueCardData.push({ front, back});
    } else {
      alert(`Please fill in all fields for cue card ${i}.`);
      return;
    }
  }
  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const new_cards_per_day = document.querySelector('#cardsPerDay').value;

  const response = await fetch('/api/decks/', {
    method: 'POST',
    body: JSON.stringify( {cards: cueCardData, name: newDeckTitle, description: newDeckDescription} ),
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
const initialCueCardCount = 4;
for (let i = 0; i < initialCueCardCount; i++) {
  addCard();
}