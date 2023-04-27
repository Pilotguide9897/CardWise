const { practicedCard } = require('../../utils/helpers');
const { getCardsReadyForReview } = require('../../utils/helpers');

async function fetchCardsReadyForReview(deckId) {
  try {
    const response = await fetch(`/api/decks/ready_for_review/${deckId}`);
    const cardsReadyForReview = await response.json();

    const cardsContainer = document.getElementById('cards-container');

    cardsReadyForReview.forEach((card) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <h3>${card.front}</h3>
        <p>${card.back}</p>
        <label for="rating-${card.id}">Rate this card (0-5):</label>
        <input type="number" id="rating-${card.id}" name="rating" min="0" max="5">
        <button id="submit-rating-${card.id}">Submit Rating</button>
      `;

      cardsContainer.appendChild(cardElement);

      const submitRatingButton = document.getElementById(
        `submit-rating-${card.id}`
      );
      submitRatingButton.addEventListener('click', async () => {
        const ratingInput = document.getElementById(`rating-${card.id}`);
        const rating = parseInt(ratingInput.value, 10);

        if (rating >= 0 && rating <= 5) {
          await practicedCard(card.id, rating);
          // Remove card from the container or hide it after it's been reviewed
          cardElement.remove();
        } else {
          alert('Please enter a valid rating between 0 and 5.');
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
}


// Call the function with a deck ID
fetchCardsReadyForReview(1);
