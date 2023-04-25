// This is not so easy...
document.getElementById('add-cue-card').addEventListener('click', addCueCard);

const newDeck = function () {

let cueCardCount = 0;

const addCueCard = () => {
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
    <button type="submit">Save Cue Card ${cueCardCount}</button>
  `;

  cueCardForm.addEventListener('submit', (event) =>
    handleSubmit(event, cueCardCount)
  );
  document.getElementById('cue-card-container').appendChild(cueCardForm);
};

const handleSubmit = async (event, formId) => {
  event.preventDefault();

  const front = document.querySelector(`#front-${formId}`).value.trim();
  const back = document.querySelector(`#back-${formId}`).value.trim();
  const deckId = document.querySelector(`#deck-id-${formId}`).value.trim();

  if (front && back && deckId) {
    const response = await fetch('/api/cuecards', {
      method: 'POST',
      body: JSON.stringify({ front, back, deckId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Cue card saved successfully!');
    } else {
      alert(response.statusText);
    }
  } else {
    alert('Please fill in all fields.');
  }
};
}
