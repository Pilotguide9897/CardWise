async function fetchCardsUpForReview(deckId) {
  const response = await fetch(`/api/decks/review/${deckId}`, {
    method: 'GET',
  });

  console.log('responde:', response);

  if (response.ok) {
    const cardsUpForReview = await response.json();
    return cardsUpForReview;
  } else {
    console.error('Error fetching cards up for review:', response.statusText);
  }
}

// Send the data to the db to update supermemo information
async function updateCard(card, grade) {
  try {
    const response = await fetch(`/api/decks/review/${card.id}`, {
      // I need to get the correct route...
      method: 'PUT',
      body: JSON.stringify({ card, grade }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Card updated successfully');
    } else {
      console.error('Error updating card');
    }
  } catch (error) {
    console.error('Error updating card:', error);
  }
}

async function displayCards(deckId) {
  let isFrontSideDisplayed = true;

  const frontSide = document.getElementById('frontSide');
  const backSide = document.getElementById('backSide');
  const answerBtn = document.getElementById('answerBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentCardIndex = 0;
  const cardsUpForReview = await fetchCardsUpForReview(deckId);

  if (cardsUpForReview.length === 0) {
    frontSide.innerHTML = `Congratulations on keeping up with your studies! You currently have no cards up for review. You will be redirected back to your dashboard in 5 seconds.`;
    setTimeout(() => {
      document.location.replace('/dashboard');
    }, 7000);
  }

  console.log(cardsUpForReview[0].front);
  frontSide.innerHTML = cardsUpForReview[currentCardIndex].front;
  backSide.innerHTML = cardsUpForReview[currentCardIndex].back;

  answerBtn.addEventListener('click', () => {
    isFrontSideDisplayed = !isFrontSideDisplayed;
    frontSide.style.display = isFrontSideDisplayed ? 'block' : 'none';
    backSide.style.display = isFrontSideDisplayed ? 'none' : 'block';
  });

  nextBtn.addEventListener('click', () => {
    const grade = document.querySelector(
      'input[name="supermemo"]:checked'
    ).value;
    let card = cardsUpForReview[currentCardIndex];
    isFrontSideDisplayed = true;
    frontSide.style.display = 'block';
    backSide.style.display = 'none';
    updateCard(card, grade);
    currentCardIndex++;
    console.log(currentCardIndex);
    console.log(card);

    if (currentCardIndex < cardsUpForReview.length) {
      frontSide.innerHTML = cardsUpForReview[currentCardIndex].front;
      backSide.innerHTML = cardsUpForReview[currentCardIndex].back;
    } else {
      document.location.replace('/finish');
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const reviewPageMarker = document.getElementById('review-page-marker');
  const urlPath = window.location.pathname;
  const deckId = urlPath.split('/')[2];

  if (reviewPageMarker) {
    // const cardsUpForReview = fetchCardsUpForReview(deckId);
    // return cardsUpForReview;
    await displayCards(deckId);
  }
});
