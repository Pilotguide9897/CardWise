const { updateSupermemoInfo } = require('../../utils/helpers');

// Send the data to the db to update supermemo information
async function updateCard(updatedCard) {
  try {
    const response = await fetch(`/api/cards/${card.id}`, {
      // I need to get the correct route...
      method: 'PUT',
      body: JSON.stringify({ updatedCard }),
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(card),
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

let isFrontSideDisplayed = true;

const frontSide = document.getElementById('frontSide');
const backSide = document.getElementById('backSide');
const answerBtn = document.getElementById('answerBtn');
const nextBtn = document.getElementById('nextBtn');

let currentCardIndex = 0;
frontSide.innerHTML = cardsUpForReview[currentCardIndex].front;
backSide.innerHTML = cardsUpForReview[currentCardIndex].back;

answerBtn.addEventListener('click', () => {
  isFrontSideDisplayed = !isFrontSideDisplayed;
  frontSide.style.display = isFrontSideDisplayed ? 'block' : 'none';
  backSide.style.display = isFrontSideDisplayed ? 'none' : 'block';
});

nextBtn.addEventListener('click', () => {
  const grade = document.querySelector('input[name="supermemo"]:checked').value;
  let card = cardsUpForReview[currentCardIndex];
  isFrontSideDisplayed = true;
  frontSide.style.display = 'block';
  backSide.style.display = 'none';
  const updatedCard = updateSupermemoInfo(card, grade);
  updateCard(updatedCard);

  if (currentCardIndex >= cardsUpForReview.length) {
    alert('You have finished reviewing all the cards for toady');
    document.location.replace('/dashboard');
  }

  frontSide.innerHTML = cardsUpForReview[currentCardIndex].front;
  backSide.innerHTML = cardsUpForReview[currentCardIndex].back;
});