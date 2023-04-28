// Import required modules
const Card = require('./models/Card'); // Adjust the path to your Card model
const { practice } = require('./utils/helpers'); // Adjust the path to the module containing the practice function
const sequelize = require('./config/connection'); // Adjust the path to your Sequelize connection configuration

async function testCardUpdate() {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Connected to the database.');

    // Retrieve a card from the database (change the cardId to a valid value in your database)
    const cardId = 1; // Replace with a valid card ID in your database
    const flashcard = await Card.findByPk(cardId);

    if (!flashcard) {
      console.error('Card not found');
      return;
    }

    // Log the original card data
    console.log('Original card data:', flashcard.toJSON());

    // Set a grade for the practice (change this value to simulate different grades)
    const grade = 5;

    // Update the card using the practice function
    const updatedFlashcardData = practice(flashcard, grade);

    // Update the original Card instance with the updated data
    flashcard.interval = updatedFlashcardData.interval;
    flashcard.repetition = updatedFlashcardData.repetition;
    flashcard.e_factor = updatedFlashcardData.e_factor;
    flashcard.dueDate = updatedFlashcardData.dueDate;

    // Save the updated card information to the database
    await flashcard.save();

    // Log the updated card data
    console.log('Updated card data:', flashcard.toJSON());

    // Close the database connection
    await sequelize.close();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the test
testCardUpdate();
