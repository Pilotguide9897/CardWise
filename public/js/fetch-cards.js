// A function created to take in an array of card ids taken from the queue of cards ready for review, as determined by the current date/due data and the is_queued attribute.

//const { renderCardWithMathpix } = require('../../utils/helpers');

async function fetchCards(ids) {
  try {
    // Check if the input is an array and has at least one element
    if (Array.isArray(ids) && ids.length > 0) {
      // Convert the array of IDs into a comma-separated string
      const idsString = ids.join(',');

      // Make a fetch request with the constructed URL
      const response = await fetch(`/api/decks/card/${idsString}`);

      if (response.ok) {
        const data = await response.json();
        //renderCardWithMathpix(data);
        console.log(data);
      } else {
        console.error('Error fetching cards:', response.status);
      }
    }
  } catch (err) {
    console.error(err);
  }
}


// Example usage for testing:
const singleCardId = [1];
fetchCards(singleCardId);

const multipleCardIds = [2, 3, 4, 5, 6];
fetchCards(multipleCardIds);
