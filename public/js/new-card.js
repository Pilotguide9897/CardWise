// Client side logic for card creation
const addCardButton = document.getElementById('add-cue-card');
const createButton = document.getElementById('create');
const cueCardContainer = document.getElementById('cue-card-container');
const deckTitleForm = document.getElementById('newDeckTitle');
const deckDescriptionForm = document.getElementById('description');

let cueCardCount = 5;

function addCard() {
  cueCardCount++;
  const cueDiv = document.createElement('div');
  cueDiv.setAttribute('class', 'pure-g cardDiv');
  const cueCardForm = document.createElement('form');
  cueCardForm.setAttribute('id', `cue-card-form-${cueCardCount}`);
  cueCardForm.setAttribute('class', 'pure-u-1 cardForm');

  cueCardForm.innerHTML = `
    <label for="front-${cueCardCount-5}">Term: </label>
    <input type="text" id="front-${cueCardCount-5}" name="front-${cueCardCount-5}">
    <label for="back-${cueCardCount-5}">Definition: </label>
    <input type="text" id="back-${cueCardCount-5}" name="back-${cueCardCount-5}">
  `;
  cueDiv.appendChild(cueCardForm);
  cueCardContainer.appendChild(cueDiv);
}

async function createCueCards() {

  const newDeckTitle = deckTitleForm.value.trim();
  const newDeckDescription = deckDescriptionForm.value.trim();

  const cueCardData = [];

  const actualCueCardCount = document.querySelectorAll('.cardDiv').length;

  for (let i = 1; i <= actualCueCardCount; i++) {
    const front = document.querySelector(`#front-${i}`).value.trim();
    console.log(front);
    const back = document.querySelector(`#back-${i}`).value.trim();
    console.log(back);

    if (front && back) {
      cueCardData.push({ front, back });
      console.log(cueCardData);
    } else {
      alert(`Please fill in all fields for cue card ${i}.`);
      return;
    }
  }

  const response = await fetch('/api/decks/', {
    method: 'POST',
    body: JSON.stringify( {cards: cueCardData, name: newDeckTitle, description: newDeckDescription} ),
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
const initialCueCardCount = cueCardCount;
for (let i = 0; i < initialCueCardCount; i++) {
  addCard();
}
