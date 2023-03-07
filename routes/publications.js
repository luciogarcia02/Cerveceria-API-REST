var express = require('express');
var router = express.Router();
var publications = require('../src/repositories/publications')

/* GET beers page. */
router.get('/', async function(req, res, next) {
  res.json(await publications.getPublications())
});

router.get('/:id', async function(req, res, next) {
  let publiction = await publications.getPublictionsById(req.params.id)

  if(publiction){
    return res.json(publiction)
  }

  res.status(404).json({
    error: "NOT FOUND",
    code: 404
  })
});

module.exports = router;