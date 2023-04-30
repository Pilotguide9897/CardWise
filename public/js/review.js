// Relocate to the review view
const reviewTraveller = async (deckId, data) => {
  const response = await fetch(`/review/${deckId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/review');
  } else {
    alert(response.statusText);
  }
};

// Get the queued cards and their data.
const queuedCards = async (deckId) => {
  const response = await fetch(`/api/decks/${deckId}/queued`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const data = await response.json();
    console.log('Data found:', data);
    cards = data;
    updateFlashCard(cards[currentCardIndex]);
    reviewTraveller(deckId);
  } else {
    alert(response.statusText);
  }
};

// Render the card's front side
function updateFlashCard(card) {
  const flashCard = document.getElementById('flashCard');
  flashCard.innerHTML = `<h1>${card.front}</h1>`;
}

// Update to display the back of the card
function handleAnswer() {
  const flashCard = document.getElementById('flashCard');
  const card = cards[currentCardIndex];
  flashCard.innerHTML = `<h1>${card.back}</h1>`;
}

// Navigate to the next card and save the user's grade
let currentCardIndex = 0;
let cards = [];

async function handleNext(deckId) {
  const grade = document.querySelector('input[name="supermemo"]:checked').value;

  // Save the user's grade for the current card
  const card = cards[currentCardIndex];
  await saveGrade(card, grade);

  // Move to the next card
  currentCardIndex++;

  if (currentCardIndex < cards.length) {
    updateFlashCard(cards[currentCardIndex]);
  } else {
    alert('You have finished reviewing the cards');
    // Redirect to another page, e.g., the dashboard
    document.location.replace('/dashboard');
  }
}

// Event listeners for the buttons:
document.getElementById('answerBtn').addEventListener('click', handleAnswer);
document
  .getElementById('nextBtn')
  .addEventListener('click', () => handleNext(deckId));
