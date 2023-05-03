const deleteDeck = async (event) => {
  const userConfirmed = confirm('Are you sure you want to delete this deck?');

  if (userConfirmed) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/decks/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Not able to delete the blog');
    }
  } else {
    return;
  }
};

const deleteBtn = document.querySelector('#deleteBtn');
if (deleteBtn) {
  deleteBtn.addEventListener('click', deleteDeck);
}

// Delete an individual card
function removeCard(event) {
  console.log('remove card started');
  // Show a confirmation dialog
  const userConfirmed = confirm('Are you sure you want to delete this card?');

  // If the user clicks 'OK', remove the card
  if (userConfirmed) {
    // Find the closest parent element with the class 'cardDiv' and remove it
    const cardDiv = event.target.closest('.pure-g');
    console.log(event.target);
    console.log(cardDiv);
    if (cardDiv) {
      cardDiv.remove();
    }
  }
}

const updateCardDiv = document.getElementById('updateCardsDiv');
if (updateCardDiv) {
  updateCardDiv.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('delCard')) {
      console.log('update eventd delete correct button');
      removeCard(event);
    }
  });
}

const newCardDiv = document.getElementById('cue-card-container');
if (newCardDiv) {
  newCardDiv.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('delCard')) {
      removeCard(event);
    }
  });
}
