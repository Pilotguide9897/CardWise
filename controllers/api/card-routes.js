const router = require('express').Router();
const { Card } = require('../../models');

router.delete('/:id', async(req, res) => {
  console.log('Getting To the Router');
  console.log(req.params.id);
  try{
    const cardData = await Card.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!cardData) {
      res.status(400).json({ message: 'No Card found with that id.' });
      return;
    }
    console.log('deleted the card');
    res.json({ message: 'Card was deleted successfully.', data: deckData });
  } catch (err){
    res.status(500).json({message: 'Deck could not be deleted'});
  }
});


module.exports = router;
