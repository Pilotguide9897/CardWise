const addCardButton = document.getElementById('add-cue-card');
const createButton = document.getElementById('create');
const cueCardContainer = document.getElementById('cue-card-container');

let cueCardCount = 0;

function removeCard(event) {
  // Find the closest parent element with the class 'cardDiv' and remove it
  const cardDiv = event.target.closest('.cardDiv');
  if (cardDiv) {
    cardDiv.remove();
  }
}

function addCard() {
  cueCardCount++;
  const cueDiv = document.createElement('div');
  cueDiv.setAttribute('class', 'pure-g cardDiv updatePartial');
  const cueCardForm = document.createElement('form');
  cueCardForm.setAttribute('id', `cue-card-form-${cueCardCount}`);
  cueCardForm.setAttribute('class', 'pure-u-1 cardForm');

  cueCardForm.innerHTML = `
    <label for="front-${cueCardCount-5}">Term: </label>
    <input type="text" id="front-${cueCardCount-5}" name="front-${cueCardCount-5}">
    <label for="back-${cueCardCount-5}">Definition: </label>
    <input type="text" id="back-${cueCardCount-5}" name="back-${cueCardCount-5}">
    <button class="delCard">Delete</button>
  `;
  cueDiv.appendChild(cueCardForm);
  cueCardContainer.appendChild(cueDiv);

  const delButton = cueCardForm.querySelector('.delCard');
  delButton.addEventListener('click', removeCard);
}

async function createCueCards() {
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
  const name = document.querySelector('#name').value;
  const description = document.querySelector('#description').value;
  const new_cards_per_day = document.querySelector('#cardsPerDay').value;

  const response = await fetch('/api/decks', {
    method: 'POST',
    body: JSON.stringify({ name, description, new_cards_per_day, cueCardData }),
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
const initialCueCardCount = 4;
for (let i = 0; i < initialCueCardCount; i++) {
  addCard();
}
